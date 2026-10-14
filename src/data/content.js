// Everything here is edited from /admin and stored as JSON in src/data/site and src/data/projects.
// Only the batik settings and the project categories live in code.
import profileData from './site/profile.json';
import aboutData from './site/about.json';
import experienceData from './site/experience.json';
import researchData from './site/research.json';
import skillsData from './site/skills.json';
import educationData from './site/education.json';

const { availability, photo: portrait, ...profileFields } = profileData;

export const profile = profileFields;

// A portrait uploaded in the CMS (for example '/img/profile.jpg'); empty shows the medallion instead.
export const photo = portrait || null;

export const batikMotifs = ['kawung', 'parang', 'truntum'];
export const batikSeed = 'rucirasatti';

export const facts = aboutData.facts;
export const about = aboutData.paragraphs;
export const coreStack = aboutData.coreStack;

export { availability };

export const kinds = {
  web: 'Web & apps',
  data: 'Data & ML',
  design: 'Design & prototype',
};

// Projects live one-per-file in src/data/projects/*.json.
// `order` sets the sequence, and `featured` projects show first; the rest appear under "Show all".
// Link types: 'live' (the real site), 'demo' (a hosted preview), 'code' (source), 'doc' (a record or paper).
const projectFiles = import.meta.glob('./projects/*.json', { eager: true, import: 'default' });

export const projects = Object.values(projectFiles).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

export const experience = experienceData.items;

// An empty link in the CMS means the title is shown as plain text.
export const research = researchData.items.map((item) => ({ ...item, href: item.href || null }));

export const skills = skillsData.groups;

export const education = educationData.items;

export const certifications = educationData.certifications;
