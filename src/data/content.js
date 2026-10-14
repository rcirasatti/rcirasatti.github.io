export const profile = {
  name: 'Rucirasatti Nariswana',
  role: 'Web Developer & Data Analyst',
  location: 'Semarang, Indonesia',
  email: 'rcirasatti@gmail.com',
  github: 'https://github.com/rcirasatti',
  linkedin: 'https://www.linkedin.com/in/rucirasatti/',
  cv: '/Rucirasatti-Nariswana-CV.pdf',
  intro:
    'I build Laravel and React web systems that are in daily use, and I work with data in Python: cleaning it, modelling it, and putting the result into a product.',
};

// Set `photo` to a file in public/img (for example '/img/profile.jpg') to show a portrait.
export const photo = null;

export const batikMotifs = ['kawung', 'parang', 'truntum'];
export const batikSeed = 'rucirasatti';

export const facts = [
  { value: '1+', label: 'year of professional experience in web development and data' },
  { value: '3.91', label: 'GPA out of 4.00, Politeknik Negeri Semarang' },
  { value: '2', label: 'journal articles published in 2025' },
  { value: '1', label: 'registered software copyright' },
];

export const about = [
  'I am a Computer Engineering Technology graduate from Politeknik Negeri Semarang, now working at CV. OmahIoT. Most of my work is Laravel systems for institutions: portals, content management, an ERP, and the APIs that connect them.',
  'Alongside that I work with data in Python. My thesis compared seven algorithms to estimate project costs inside an ERP, and I taught data science to a class of about 20 learners at Coding Camp.',
  'Outside of code, I served as Deputy of Interests and Talents on the student executive board and chaired the RuPaWan painting exhibition.',
];

export const availability = 'Open to web development and data roles';

export const coreStack = ['Laravel', 'PHP', 'React', 'MySQL', 'Python', 'Scikit-learn', 'TensorFlow/Keras'];

export const kinds = {
  web: 'Web & apps',
  data: 'Data & ML',
  design: 'Design & prototype',
};

// Projects live one-per-file in src/data/projects/*.json and are edited from /admin.
// `order` sets the sequence, and `featured` projects show first; the rest appear under "Show all".
// Link types: 'live' (the real site), 'demo' (a hosted preview), 'code' (source), 'doc' (a record or paper).
const projectFiles = import.meta.glob('./projects/*.json', { eager: true, import: 'default' });

export const projects = Object.values(projectFiles).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

export const experience = [
  {
    title: 'Web Developer & Data Analyst',
    org: 'CV. OmahIoT, Semarang',
    dates: 'Jan 2026 – Present',
    points: [
      'Main contributor to Laravel 11 portals and CMS for Politeknik Negeri Semarang; the central portal is live at polines.ac.id.',
      'Implemented the REST API and approval workflow that syncs department content to the central portal.',
      'Built a microcredential course platform in Laravel.',
      'Processed courier shipment datasets and developed a delivery-time model (about 98.6% of predictions within 1 day).',
    ],
  },
  {
    title: 'Data Science Facilitator',
    org: 'Coding Camp powered by DBS Foundation, Remote',
    dates: 'Feb 2026 – Jul 2026',
    points: [
      'Guided a class of about 20 learners through 16 weekly consultation sessions (4.90/5.00) and assisted 14 instructor-led sessions (4.64/5.00).',
    ],
  },
  {
    title: 'Software Developer Intern',
    org: 'CV. OmahIoT, Semarang',
    dates: 'Aug 2025 – Dec 2025',
    points: [
      'Built a web-based ERP for project management, deployed to production.',
      'Built the first OmahIoT company profile website and its CMS; co-built the Karang Taruna Batursari website.',
      'Analyzed rainfall and flood sensor data in Python.',
    ],
  },
  {
    title: 'Machine Learning Engineer Cohort',
    org: 'Coding Camp powered by DBS Foundation, Remote',
    dates: 'Feb 2025 – Jul 2025',
    points: [
      'Graduated with an average score of 93.2/100 across 936 training hours.',
      'Built the machine learning component of the GrowSmart capstone.',
    ],
  },
  {
    title: 'Web Programming Intern',
    org: 'Kazuya Media Indonesia, Ponorogo',
    dates: 'Jan 2021 – May 2021',
    points: [
      'Built CRUD applications with CodeIgniter 3 and converted designs into responsive Bootstrap pages.',
    ],
  },
];

export const research = [
  {
    type: 'Journal article',
    year: '2025',
    title:
      'Smart Water Quality Monitoring dengan IoT dan AI: Pendekatan XGBoost dalam Kelayakan Air Rumah Tangga',
    venue: 'Journal of Scientech Research and Development, Vol. 6 No. 2',
    note: 'Co-author (second of five).',
    href: 'https://idm.or.id/JSCR/index.php/JSCR/article/view/753',
  },
  {
    type: 'Journal article',
    year: '2025',
    title:
      'Information Retrieval Related to Information Regarding Covid-19 Using Transformers Architecture',
    venue: 'Jurnal Teknik Informatika (JUTIF), Vol. 6 No. 2',
    note: 'Co-author (sixth of six).',
    href: 'https://jutif.if.unsoed.ac.id/index.php/jurnal/article/view/2606',
  },
  {
    type: 'Registered copyright',
    year: '2023',
    title:
      'Deep learning semantic text and image search engine prototype for COVID-19 information',
    venue: 'Surat Pencatatan Ciptaan (HKI) No. 000540382',
    note: 'Co-creator (one of six).',
    href: null,
  },
];

export const skills = [
  {
    group: 'Web and backend',
    items: [
      'Laravel 11',
      'PHP',
      'React',
      'TypeScript',
      'JavaScript',
      'Vite',
      'Tailwind CSS',
      'Bootstrap',
      'REST API',
      'MySQL',
      'Odoo',
      'Flutter',
      'Figma',
    ],
  },
  {
    group: 'Data and machine learning',
    items: [
      'Python',
      'SQL',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'TensorFlow/Keras',
      'XGBoost',
      'Matplotlib/Seaborn',
      'Streamlit',
      'ETL',
      'Time-series analysis',
    ],
  },
  {
    group: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'MikroTik (MTCNA)', 'Database design'],
  },
];

export const education = [
  {
    school: 'Politeknik Negeri Semarang',
    detail: 'Bachelor of Applied Science in Computer Engineering Technology, GPA 3.91/4.00',
    dates: '2022 – 2026',
  },
  {
    school: 'SMK Negeri 1 Jenangan',
    detail: 'Software Engineering, Competency Test: Very Competent',
    dates: '2019 – 2022',
  },
];

export const certifications = [
  'MikroTik Certified Network Associate (MTCNA), 2026',
  'Oracle Academy Database Design, 2023',
  'Dicoding: Applied Machine Learning',
  'Dicoding: Data Analysis with Python',
  'Dicoding: Fundamentals of Data Processing (ETL)',
  'Dicoding: Cloud and Gen AI on AWS, 2026',
  'Dicoding: Prompt Engineering for Software Developers, 2026',
];
