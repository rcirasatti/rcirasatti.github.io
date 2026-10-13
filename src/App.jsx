import { useEffect, useRef, useState } from 'react';
import Batik from './Batik';
import {
  profile,
  photo,
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
  const initials = profile.name
    .split(' ')
    .map((word) => word[0])
    .join('');

  return (
    <div className="portrait">
      <Batik motif={motif} className="portrait-cloth" />
      <div className="portrait-frame">
        {photo ? (
          <img src={photo} alt={`Portrait of ${profile.name}`} />
        ) : (
          <span className="portrait-initials" aria-hidden="true">
            {initials}
          </span>
        )}
      </div>
    </div>
  );
}

function ProjectRow({ project, number, onOpen }) {
  return (
    <li>
      <button type="button" className="work" onClick={() => onOpen(project)}>
        <span className="work-number">{String(number).padStart(2, '0')}</span>
        <span className="work-main">
          <span className="work-title">{project.title}</span>
          <span className="work-role">
            {project.role} · {project.context}
          </span>
        </span>
        <span className="work-kind">{kinds[project.kind]}</span>
        <span className="work-year">{project.year}</span>
        <span className="status" data-status={project.status}>
          {project.status}
        </span>
        <span className="work-arrow" aria-hidden="true">
          →
        </span>
      </button>
    </li>
  );
}

function ProjectDialog({ project, motif, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
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
    >
      {project && (
        <>
          <Batik motif={motif} className="dialog-strip" rowHeight={24} />
          <div className="dialog-body">
            <button type="button" className="chip dialog-close" onClick={onClose}>
              Close
            </button>
            {project.image && (
              <img
                className="dialog-image"
                src={project.image.src}
                alt={project.image.alt}
                width="1100"
                height="603"
              />
            )}
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
            {project.links.length > 0 && (
              <p className="link-row">
                {project.links.map((link) => (
                  <ExternalLink key={link.href} href={link.href}>
                    {link.label}
                  </ExternalLink>
                ))}
              </p>
            )}
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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    store('theme', theme);
  }, [theme]);

  useEffect(() => {
    store('motif', motif);
  }, [motif]);

  const nextMotif = () =>
    setMotif(batikMotifs[(batikMotifs.indexOf(motif) + 1) % batikMotifs.length]);

  const matching = filter === 'all' ? projects : projects.filter((p) => p.kind === filter);
  // the featured cut only applies to the unfiltered view
  const expanded = showAll || filter !== 'all';
  const shown = expanded ? matching : matching.filter((p) => p.featured);
  const hidden = matching.length - shown.length;

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
            <a key={item.id} href={`#${item.id}`}>
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
              Rucirasatti
              <br />
              <em>Nariswana</em>
            </h1>
            <p className="lede">{profile.intro}</p>
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
          <p className="cloth-caption">
            <code>
              batik.{motif}({'{'} seed: &quot;{batikSeed}&quot; {'}'})
            </code>
            <span>This batik is drawn by code, not an image.</span>
            <button type="button" className="chip" onClick={nextMotif}>
              Change motif
            </button>
          </p>
        </div>

        <dl className="facts">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.value}</dt>
              <dd>{fact.label}</dd>
            </div>
          ))}
        </dl>

        <section id="work">
          <SectionHead index="01" title="Projects" motif={motif}>
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
          <SectionHead index="02" title="Experience" motif={motif} />
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
          <SectionHead index="03" title="Research and publications" motif={motif} />
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
          <SectionHead index="04" title="Skills and education" motif={motif} />
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
          <SectionHead index="05" title="Let's talk" motif={motif} />
          <p className="lede">
            I am open to web development and data roles. Email is the fastest way to reach me.
          </p>
          <p className="actions">
            <a className="button" href={`mailto:${profile.email}`}>
              {profile.email}
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

      <ProjectDialog project={selected} motif={motif} onClose={() => setSelected(null)} />
    </>
  );
}
