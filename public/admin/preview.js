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

  // Previews for the "Halaman situs" files: each mirrors the section it edits.
  function data(entry, key) {
    var value = entry.getIn(['data', key]);
    return value && value.toJS ? value.toJS() : value;
  }

  function text(entry, key) {
    var value = data(entry, key);
    return typeof value === 'string' ? value : '';
  }

  function items(entry, key) {
    var value = data(entry, key);
    return Array.isArray(value) ? value : [];
  }

  function frame(title, children) {
    return h(
      'div',
      { style: { padding: '24px', maxWidth: '860px', margin: '0 auto' } },
      title && h('header', { className: 'section-head' }, h('h2', null, title)),
      children
    );
  }

  function tags(list) {
    return h(
      'ul',
      { className: 'tags' },
      list.map(function (tech, i) {
        return h('li', { key: i }, tech);
      })
    );
  }

  var ProfilePreview = function (props) {
    var entry = props.entry;
    var parts = text(entry, 'name').split(' ');
    var photo = text(entry, 'photo');
    return frame(
      null,
      h(
        'div',
        { className: 'hero-text' },
        h('p', { className: 'eyebrow' }, text(entry, 'role') + ' · ' + text(entry, 'location')),
        h('h1', null, parts[0], h('br'), h('em', null, parts.slice(1).join(' '))),
        h('p', { className: 'lede' }, text(entry, 'intro')),
        h('p', { className: 'availability' }, text(entry, 'availability')),
        h(
          'p',
          { className: 'actions' },
          h('a', { className: 'button', href: text(entry, 'cv') }, 'Download CV'),
          h('a', { className: 'button ghost', href: 'mailto:' + text(entry, 'email') }, text(entry, 'email'))
        ),
        h(
          'p',
          { className: 'link-row' },
          h('a', { href: text(entry, 'github') }, 'GitHub'),
          h('a', { href: text(entry, 'linkedin') }, 'LinkedIn')
        ),
        h('p', { className: 'muted' }, photo ? 'Foto profil:' : 'Foto profil kosong: halaman depan memakai ornamen batik.'),
        photo && h('img', { src: imageUrl(props, photo), alt: '', style: { maxWidth: '240px', borderRadius: '12px' } })
      )
    );
  };

  var AboutPreview = function (props) {
    var entry = props.entry;
    return frame(
      'About',
      h(
        'div',
        { className: 'about' },
        h(
          'div',
          { className: 'about-text' },
          items(entry, 'paragraphs').map(function (paragraph, i) {
            return h('p', { key: i }, paragraph);
          })
        ),
        h(
          'aside',
          { className: 'about-side' },
          h(
            'dl',
            { className: 'facts' },
            items(entry, 'facts').map(function (fact, i) {
              return h('div', { key: i }, h('dt', null, fact.value), h('dd', null, fact.label));
            })
          ),
          h('h3', null, 'Core stack'),
          tags(items(entry, 'coreStack'))
        )
      )
    );
  };

  var ExperiencePreview = function (props) {
    return frame(
      'Experience',
      h(
        'ol',
        { className: 'timeline' },
        items(props.entry, 'items').map(function (job, i) {
          return h(
            'li',
            { key: i },
            h('p', { className: 'timeline-dates' }, job.dates),
            h(
              'div',
              null,
              h('h3', null, job.title),
              h('p', { className: 'timeline-org' }, job.org),
              h(
                'ul',
                { className: 'points' },
                (job.points || []).map(function (point, k) {
                  return h('li', { key: k }, point);
                })
              )
            )
          );
        })
      )
    );
  };

  var ResearchPreview = function (props) {
    return frame(
      'Research and publications',
      h(
        'ul',
        { className: 'research' },
        items(props.entry, 'items').map(function (item, i) {
          return h(
            'li',
            { key: i },
            h('p', { className: 'research-meta' }, item.type + ' · ' + item.year),
            h('h3', null, item.href ? h('a', { href: item.href }, item.title) : item.title),
            h('p', null, item.venue + '. ' + (item.note || ''))
          );
        })
      )
    );
  };

  var SkillsPreview = function (props) {
    return frame(
      'Skills',
      items(props.entry, 'groups').map(function (group, i) {
        return h('div', { key: i, className: 'skill-group' }, h('h3', null, group.group), tags(group.items || []));
      })
    );
  };

  var EducationPreview = function (props) {
    var entry = props.entry;
    return frame(
      'Education and certifications',
      h(
        'div',
        null,
        h('h3', null, 'Education'),
        h(
          'ul',
          { className: 'plain' },
          items(entry, 'items').map(function (item, i) {
            return h(
              'li',
              { key: i },
              h('strong', null, item.school),
              h('span', { className: 'muted' }, ' · ' + item.dates),
              h('br'),
              item.detail
            );
          })
        ),
        h('h3', null, 'Certifications'),
        h(
          'ul',
          { className: 'plain compact' },
          items(entry, 'certifications').map(function (item, i) {
            return h('li', { key: i }, item);
          })
        )
      )
    );
  };

  CMS.registerPreviewStyle('/admin/site.css');
  CMS.registerPreviewStyle(
    'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..600;1,9..144,400..500&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
  );
  CMS.registerPreviewTemplate('projects', Preview);
  CMS.registerPreviewTemplate('profile', ProfilePreview);
  CMS.registerPreviewTemplate('about', AboutPreview);
  CMS.registerPreviewTemplate('experience', ExperiencePreview);
  CMS.registerPreviewTemplate('research', ResearchPreview);
  CMS.registerPreviewTemplate('skills', SkillsPreview);
  CMS.registerPreviewTemplate('education', EducationPreview);
})();
