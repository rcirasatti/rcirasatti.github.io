# rcirasatti.github.io

Personal portfolio of Rucirasatti Nariswana, built with React and Vite.

## Develop

```bash
npm install
npm run dev
```

## Edit content

All text lives in `src/data/content.js`: profile, projects, experience, research, skills, education, and certifications. The CV offered for download is `public/Rucirasatti-Nariswana-CV.pdf`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist` to GitHub Pages. In the repository settings, Pages must use "GitHub Actions" as its source.

## Editing projects

Projects are one JSON file each in `src/data/projects/`. Edit them by hand, or use the CMS at `/admin`
(Decap CMS, which commits to `main` and triggers the deploy).

### One-time login setup

1. GitHub → Settings → Developer settings → OAuth Apps → New. Homepage `https://rcirasatti.github.io`,
   callback `https://<your-worker>.workers.dev/callback`. Copy the client ID and generate a secret.
2. In `oauth-proxy/`: `npx wrangler deploy`, then
   `npx wrangler secret put GITHUB_CLIENT_ID` and `npx wrangler secret put GITHUB_CLIENT_SECRET`.
3. Put the worker URL in `public/admin/config.yml` as `backend.base_url`, then push.
