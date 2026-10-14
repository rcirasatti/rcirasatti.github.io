import { useEffect, useRef, useState } from 'react';
import Batik from './Batik';
import Medallion from './Medallion';
import {
  profile,
  photo,
  about,
  availability,
  coreStack,
  batikMotifs,
  batikSeed,
  facts,
  kinds,
  projects,
  experience,
  research,
  skills,
  education,
  certifications,
} from './data/content';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const FILTERS = [{ id: 'all', label: 'All' }].concat(
  Object.entries(kinds).map(([id, label]) => ({ id, label })),
);

function readStored(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function store(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // storage unavailable: the choice lasts for this visit only
  }
}

function getInitialTheme() {
  const saved = readStored('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialMotif() {
  const saved = readStored('motif');
  return batikMotifs.includes(saved) ? saved : batikMotifs[0];
}

// Tracks which section sits in the reading band of the viewport.
function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' },
    );
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const NAV_IDS = NAV.map((item) => item.id);

function ExternalLink({ href, children, className }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}

function SectionHead({ index, title, motif, children }) {
  return (
    <header className="section-head">
      <Batik motif={motif} className="section-strip" rowHeight={24} />
      <p className="eyebrow">{index}</p>
      <h2>{title}</h2>
      {children}
    </header>
  );
}

function Portrait({ motif }) {
  return (
    <div className="portrait">
      <Batik motif={motif} className="portrait-cloth" />
      <div className="portrait-frame">
        {photo ? (
          <img src={photo} alt={`Portrait of ${profile.name}`} />
        ) : (
          <Medallion className="portrait-medallion" />
        )}
      </div>
    </div>
  );
}

// The headline shows the first name on one line and the rest below it.
const [firstName, ...restOfName] = profile.name.split(' ');
const lastNames = restOfName.join(' ');

const ROW_LABELS = { live: 'Live site', demo: 'Demo', code: 'Code' };

function RowLink({ link }) {
  if (!link) return <span className="work-link" />;
  return (
    <ExternalLink className="work-link" href={link.href}>
      {ROW_LABELS[link.type]}
    </ExternalLink>
  );
}

// The title opens the details; the two links beside it go straight to the site and the code.
function ProjectRow({ project, number, onOpen }) {
  const site =
    project.links.find((link) => link.type === 'live') ||
    project.links.find((link) => link.type === 'demo');
  const code = project.links.find((link) => link.type === 'code');

  return (
    <li className="work">
      <span className="work-number">{String(number).padStart(2, '0')}</span>
      <button type="button" className="work-open" onClick={() => onOpen(project)}>
        <span className="work-title">{project.title}</span>
        <span className="work-role">
          {project.role} · {project.year}
        </span>
      </button>
      <span className="work-links">
        <RowLink link={site} />
        <RowLink link={code} />
      </span>
    </li>
  );
}

function ProjectDialog({ project, position, total, motif, onClose, onStep }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  // a new project starts at the top of the dialog
  useEffect(() => {
    if (project) ref.current.scrollTop = 0;
  }, [project]);

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby="dialog-title"
      onClose={onClose}
      onClick={(event) => {
        // a click on the backdrop lands on the dialog element itself
        if (event.target === ref.current) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') onStep(1);
        if (event.key === 'ArrowLeft') onStep(-1);
      }}
    >
      {project && (
        <>
          <Batik motif={motif} className="dialog-strip" rowHeight={24} />
          <div className="dialog-body">
            <div className="dialog-bar">
              <span className="dialog-count">
                {String(position).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <button type="button" className="chip" onClick={() => onStep(-1)}>
                ← Previous
              </button>
              <button type="button" className="chip" onClick={() => onStep(1)}>
                Next →
              </button>
              <button type="button" className="chip dialog-close" onClick={onClose}>
                Close
              </button>
            </div>
            <div className="dialog-meta">
              <span>
                {project.year} · {kinds[project.kind]}
              </span>
              <span className="status" data-status={project.status}>
                {project.status}
              </span>
            </div>
            <h3 id="dialog-title">{project.title}</h3>
            <p className="work-role">
              {project.role} · {project.context}
            </p>
            {project.links.length > 0 && (
              <p className="dialog-links">
                {project.links.map((link) => (
                  <ExternalLink
                    key={link.href}
                    className={link.type === 'code' ? 'button ghost' : 'button'}
                    href={link.href}
                  >
                    {link.label}
                  </ExternalLink>
                ))}
              </p>
            )}
            <p>{project.summary}</p>
            {project.points.length > 0 && (
              <ul className="points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
            <ul className="tags" aria-label="Technology">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {(project.images || []).map((image) => (
              <figure className="dialog-figure" key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                {image.caption && <figcaption>{image.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </>
      )}
    </dialog>
  );
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [motif, setMotif] = useState(getInitialMotif);
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);
  const active = useActiveSection(NAV_IDS);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    store('theme', theme);
  }, [theme]);

  useEffect(() => {
    store('motif', motif);
  }, [motif]);

  const matching = filter === 'all' ? projects : projects.filter((p) => p.kind === filter);
  // the featured cut only applies to the unfiltered view
  const expanded = showAll || filter !== 'all';
  const shown = expanded ? matching : matching.filter((p) => p.featured);
  const hidden = matching.length - shown.length;

  const selectedIndex = shown.indexOf(selected);
  const step = (offset) => {
    if (selectedIndex < 0) return;
    setSelected(shown[(selectedIndex + offset + shown.length) % shown.length]);
  };

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="topbar">
        <a className="brand" href="#top">
          Rucirasatti<span>.</span>
        </a>
        <nav aria-label="Sections">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="chip"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-text">
            <p className="eyebrow">
              {profile.role} · {profile.location}
            </p>
            <h1>
              {firstName}
              <br />
              <em>{lastNames}</em>
            </h1>
            <p className="lede">{profile.intro}</p>
            <p className="availability">{availability}</p>
            <p className="actions">
              <a className="button" href={profile.cv} download>
                Download CV
              </a>
              <a className="button ghost" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>
            <p className="link-row">
              <ExternalLink href={profile.github}>GitHub</ExternalLink>
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            </p>
          </div>
          <Portrait motif={motif} />
        </section>

        <div className="cloth">
          <Batik motif={motif} className="cloth-pattern" drift />
          <div className="cloth-caption">
            <p>
              <code>
                batik.{motif}({'{'} seed: &quot;{batikSeed}&quot; {'}'})
              </code>
              <span>The batik on this page is drawn by code, not an image.</span>
            </p>
            <div className="motifs" role="group" aria-label="Batik motif">
              {batikMotifs.map((name) => (
                <button
                  key={name}
                  type="button"
                  className="chip"
                  aria-pressed={motif === name}
                  onClick={() => setMotif(name)}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <section id="about">
          <SectionHead index="01" title="About" motif={motif} />
          <div className="about">
            <div className="about-text">
              {about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <aside className="about-side">
              <dl className="facts">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.value}</dt>
                    <dd>{fact.label}</dd>
                  </div>
                ))}
              </dl>
              <h3>Core stack</h3>
              <ul className="tags">
                {coreStack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section id="work">
          <SectionHead index="02" title="Projects" motif={motif}>
            <div className="filters" role="group" aria-label="Filter projects">
              {FILTERS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="chip"
                  aria-pressed={filter === item.id}
                  onClick={() => setFilter(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </SectionHead>
          <p className="works-hint">
            Select a title for details. <strong>Live site</strong>, <strong>Demo</strong>, and{' '}
            <strong>Code</strong> open in a new tab.
          </p>
          <ol className="works">
            {shown.map((project, index) => (
              <ProjectRow
                key={project.title}
                project={project}
                number={index + 1}
                onOpen={setSelected}
              />
            ))}
          </ol>
          {filter === 'all' && (
            <p className="works-more">
              <button type="button" className="button ghost" onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Show selected projects only' : `Show ${hidden} more projects`}
              </button>
            </p>
          )}
        </section>

        <section id="experience">
          <SectionHead index="03" title="Experience" motif={motif} />
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.title + job.dates}>
                <p className="timeline-dates">{job.dates}</p>
                <div>
                  <h3>{job.title}</h3>
                  <p className="timeline-org">{job.org}</p>
                  <ul className="points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="research">
          <SectionHead index="04" title="Research and publications" motif={motif} />
          <ul className="research">
            {research.map((item) => (
              <li key={item.title}>
                <p className="research-meta">
                  {item.type} · {item.year}
                </p>
                <h3>
                  {item.href ? (
                    <ExternalLink href={item.href}>{item.title}</ExternalLink>
                  ) : (
                    item.title
                  )}
                </h3>
                <p>
                  {item.venue}. {item.note}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills">
          <SectionHead index="05" title="Skills and education" motif={motif} />
          <div className="columns">
            <div>
              {skills.map((group) => (
                <div className="skill-group" key={group.group}>
                  <h3>{group.group}</h3>
                  <ul className="tags">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              <h3>Education</h3>
              <ul className="plain">
                {education.map((item) => (
                  <li key={item.school}>
                    <strong>{item.school}</strong>
                    <span className="muted"> · {item.dates}</span>
                    <br />
                    {item.detail}
                  </li>
                ))}
              </ul>
              <h3>Certifications</h3>
              <ul className="plain compact">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <SectionHead index="06" title="Let's talk" motif={motif} />
          <p className="lede">
            I am open to web development and data roles. Email is the fastest way to reach me.
          </p>
          <p className="actions">
            <a className="button" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="button ghost" href={profile.cv} download>
              Download CV
            </a>
          </p>
          <p className="link-row">
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
          </p>
        </section>
      </main>

      <footer className="footer">
        <Batik motif={motif} className="footer-cloth" />
        <div className="footer-row">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href="#top">Back to top</a>
        </div>
      </footer>

      <ProjectDialog
        project={selected}
        position={selectedIndex + 1}
        total={shown.length}
        motif={motif}
        onClose={() => setSelected(null)}
        onStep={step}
      />
    </>
  );
}
