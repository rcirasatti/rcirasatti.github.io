import { useEffect, useState } from 'react';
import {
  profile,
  facts,
  projects,
  experience,
  research,
  skills,
  education,
  certifications,
} from './data/content';

const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'data', label: 'Data & ML' },
];

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // storage unavailable: fall through to the system preference
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function ExternalLink({ href, children, className }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}

function SectionHead({ index, title, children }) {
  return (
    <header className="section-head">
      <p className="eyebrow">{index}</p>
      <h2>{title}</h2>
      {children}
    </header>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project">
      {project.image && (
        <img
          className="project-image"
          src={project.image.src}
          alt={project.image.alt}
          width="1100"
          height="603"
          loading="lazy"
        />
      )}
      <div className="project-meta">
        <span>{project.year}</span>
        <span>{project.kind === 'web' ? 'Web' : 'Data & ML'}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-role">{project.role}</p>
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
        <p className="project-links">
          {project.links.map((link) => (
            <ExternalLink key={link.href} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </p>
      )}
    </article>
  );
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // storage unavailable: the choice lasts for this visit only
    }
  }, [theme]);

  const shown = filter === 'all' ? projects : projects.filter((p) => p.kind === filter);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="topbar">
        <a className="brand" href="#top">
          Rucirasatti N.
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
          className="theme-toggle"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <p className="eyebrow">
            {profile.role} · {profile.location}
          </p>
          <h1>{profile.name}</h1>
          <p className="lede">{profile.intro}</p>
          <p className="hero-actions">
            <a className="button" href={profile.cv} download>
              Download CV
            </a>
            <a className="button ghost" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <ExternalLink className="text-link" href={profile.github}>
              GitHub
            </ExternalLink>
            <ExternalLink className="text-link" href={profile.linkedin}>
              LinkedIn
            </ExternalLink>
          </p>
          <dl className="facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.value}</dt>
                <dd>{fact.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="work">
          <SectionHead index="01" title="Selected work">
            <div className="filters" role="group" aria-label="Filter projects">
              {FILTERS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={filter === item.id}
                  onClick={() => setFilter(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </SectionHead>
          <div className="projects">
            {shown.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="experience">
          <SectionHead index="02" title="Experience" />
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
          <SectionHead index="03" title="Research and publications" />
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
          <SectionHead index="04" title="Skills and education" />
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
          <SectionHead index="05" title="Contact" />
          <p className="lede">
            I am open to web development and data roles. Email is the fastest way to reach me.
          </p>
          <p className="hero-actions">
            <a className="button" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <ExternalLink className="text-link" href={profile.linkedin}>
              LinkedIn
            </ExternalLink>
            <ExternalLink className="text-link" href={profile.github}>
              GitHub
            </ExternalLink>
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
