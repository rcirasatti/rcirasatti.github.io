// Cloudflare Worker that lets Decap CMS log in with GitHub.
// Secrets (set in Cloudflare): GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET.
// Variable: ALLOWED_ORIGIN, for example https://rcirasatti.github.io

const page = (origin, status, payload) => `<!doctype html><html><body><script>
(function () {
  var msg = 'authorization:github:${status}:' + ${JSON.stringify(JSON.stringify(payload))};
  function receive(e) {
    if (e.origin !== ${JSON.stringify(origin)}) return;
    window.opener.postMessage(msg, e.origin);
    window.removeEventListener('message', receive, false);
    window.close();
  }
  window.addEventListener('message', receive, false);
  window.opener.postMessage('authorizing:github', ${JSON.stringify(origin)});
})();
</script></body></html>`;

const html = (body) =>
  new Response(body, { headers: { 'content-type': 'text/html;charset=UTF-8' } });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/auth') {
      const params = new URLSearchParams({
        client_id: env.GITHUB_CLIENT_ID,
        scope: 'public_repo',
        state: crypto.randomUUID(),
      });
      return Response.redirect(`https://github.com/login/oauth/authorize?${params}`, 302);
    }

    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) return html(page(env.ALLOWED_ORIGIN, 'error', { error: 'Missing code' }));
      const res = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });
      const data = await res.json();
      if (data.error || !data.access_token) {
        return html(page(env.ALLOWED_ORIGIN, 'error', { error: data.error || 'No token' }));
      }
      return html(
        page(env.ALLOWED_ORIGIN, 'success', { token: data.access_token, provider: 'github' }),
      );
    }

    return new Response('Decap OAuth proxy', { status: 200 });
  },
};
