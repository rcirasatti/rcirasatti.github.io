// Live preview for the Projects form: draws the same card the site opens when a project is clicked.
// `h` and `CMS` are globals provided by Decap CMS.
(function () {
  var kinds = { web: 'Web & apps', data: 'Data & ML', design: 'Design & prototype' };

  function list(entry, key) {
    var value = entry.getIn(['data', key]);
    return value && value.toJS ? value.toJS() : [];
  }

  function imageUrl(props, src) {
    try {
      var asset = props.getAsset(src);
      return (asset && asset.toString()) || src;
    } catch {
      return src;
    }
  }

  var Preview = function (props) {
    var entry = props.entry;
    var get = function (key) {
      return entry.getIn(['data', key]) || '';
    };
    var links = list(entry, 'links');
    var points = list(entry, 'points');
    var stack = list(entry, 'stack');
    var images = list(entry, 'images');

    return h(
      'div',
      { className: 'dialog', style: { margin: '24px auto', display: 'block' } },
      h(
        'div',
        { className: 'dialog-body' },
        h(
          'div',
          { className: 'dialog-meta' },
          h('span', null, get('year') + ' · ' + (kinds[get('kind')] || '')),
          h('span', { className: 'status', 'data-status': get('status') }, get('status'))
        ),
        h('h3', null, get('title') || 'Untitled project'),
        h('p', { className: 'work-role' }, get('role') + ' · ' + get('context')),
        links.length > 0 &&
          h(
            'p',
            { className: 'dialog-links' },
            links.map(function (link, i) {
              return h(
                'a',
                { key: i, className: link.type === 'code' ? 'button ghost' : 'button', href: link.href },
                link.label
              );
            })
          ),
        h('p', null, get('summary')),
        points.length > 0 &&
          h(
            'ul',
            { className: 'points' },
            points.map(function (point, i) {
              return h('li', { key: i }, point);
            })
          ),
        h(
          'ul',
          { className: 'tags' },
          stack.map(function (tech, i) {
            return h('li', { key: i }, tech);
          })
        ),
        images.map(function (image, i) {
          return h(
            'figure',
            { key: i, className: 'dialog-figure' },
            h('img', { src: imageUrl(props, image.src), alt: image.alt || '' }),
            image.caption && h('figcaption', null, image.caption)
          );
        })
      )
    );
  };

  CMS.registerPreviewStyle('/admin/site.css');
  CMS.registerPreviewStyle(
    'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..600;1,9..144,400..500&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
  );
  CMS.registerPreviewTemplate('projects', Preview);
})();
