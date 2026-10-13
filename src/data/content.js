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

export const facts = [
  { value: '1+', label: 'year of professional experience in web development and data' },
  { value: '3.91', label: 'GPA out of 4.00, Politeknik Negeri Semarang' },
  { value: '2', label: 'journal articles published in 2025' },
  { value: '1', label: 'registered software copyright' },
];

export const projects = [
  {
    title: 'Polines web portals and CMS',
    image: { src: '/img/polines.jpg', alt: 'Home page of the Politeknik Negeri Semarang central portal' },
    kind: 'web',
    year: '2026',
    role: 'Main contributor, CV. OmahIoT',
    summary:
      'Laravel 11 portals and content management for Politeknik Negeri Semarang. The central portal is live at polines.ac.id; SPMB admissions, the bilingual UPA TIK site, and five department websites are in development.',
    points: [
      'Token-based REST API that syncs news, agenda, and announcements from each department CMS to the central portal.',
      'Admin approval workflow, so synced content is reviewed before it appears on the central site.',
    ],
    stack: ['Laravel 11', 'PHP', 'MySQL', 'REST API'],
    links: [{ label: 'polines.ac.id', href: 'https://polines.ac.id' }],
  },
  {
    title: 'Intelligent cost estimation for an ERP',
    kind: 'data',
    year: '2026',
    role: 'Undergraduate thesis',
    summary:
      'An Owner Estimate Cost (OEC) estimation feature for a project-management ERP, built by comparing seven algorithms on 110 real transactions.',
    points: [
      'Linear Regression, SVR, Ridge, Random Forest, XGBoost, ANN, and Moving Average, ranked with Borda Count.',
      'Segmented Linear Regression was selected: R² 0.77, MAPE 10.7%.',
      'Integrated into the Laravel backend with 112 ms inference latency.',
    ],
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'Laravel'],
    links: [
      {
        label: 'Thesis record',
        href: 'https://etd.polines.ac.id/index.php?p=show_detail&id=16945',
      },
    ],
  },
  {
    title: 'Project-management ERP',
    kind: 'web',
    year: '2025',
    role: 'Software Developer Intern, CV. OmahIoT',
    summary:
      'A web-based ERP covering projects, budgets, quotations, inventory, suppliers, and tasks. Deployed to production.',
    points: [],
    stack: ['Laravel 11', 'PHP', 'MySQL'],
    links: [{ label: 'Source', href: 'https://github.com/rcirasatti/ERP-PM' }],
  },
  {
    title: 'GrowSmart: child stunting risk classifier',
    kind: 'data',
    year: '2025',
    role: 'Machine learning, capstone team project',
    summary:
      'The machine learning component of a Coding Camp capstone: data collection, SMOTE balancing, and a neural network that classifies child stunting risk with 98.75% accuracy.',
    points: [],
    stack: ['Python', 'TensorFlow/Keras', 'SMOTE'],
    links: [
      {
        label: 'Source',
        href: 'https://github.com/rcirasatti/GrowSmart-PrediksiStuntingAnak',
      },
    ],
  },
  {
    title: 'Microcredential course platform',
    kind: 'web',
    year: '2026',
    role: 'Developer, CV. OmahIoT',
    summary:
      'A Laravel course platform built from a React prototype: registration and checkout, a progress dashboard, certificates with public verification, and an admin panel.',
    points: [],
    stack: ['Laravel', 'React', 'MySQL'],
    links: [],
  },
  {
    title: 'Karang Taruna Batursari website and CMS',
    image: { src: '/img/karang-taruna.jpg', alt: 'Home page of the Karang Taruna Tlogo Batursari website' },
    kind: 'web',
    year: '2025',
    role: 'Co-developer, CV. OmahIoT',
    summary:
      'Public website and content management system for a youth organisation, built by a team of two.',
    points: [],
    stack: ['Laravel', 'MySQL'],
    links: [
      { label: 'karangtarunabatursari.com', href: 'https://karangtarunabatursari.com' },
      { label: 'Source', href: 'https://github.com/rcirasatti/cms-karangtaruna' },
    ],
  },
  {
    title: 'OmahIoT company profile and CMS',
    kind: 'web',
    year: '2025',
    role: 'Software Developer Intern, CV. OmahIoT',
    summary:
      'The first OmahIoT company profile website in React and Vite, with a Laravel CMS to manage its content.',
    points: [],
    stack: ['React', 'Vite', 'Laravel'],
    links: [
      { label: 'Website source', href: 'https://github.com/rcirasatti/LandingPage-OmahIot' },
      { label: 'CMS source', href: 'https://github.com/rcirasatti/cms-webprofile' },
    ],
  },
  {
    title: 'Sentiment analysis on 64,000+ app reviews',
    kind: 'data',
    year: '2025',
    role: 'Coding Camp project',
    summary:
      'Text preprocessing, lexicon-based labelling, and a comparison of classical and deep learning classifiers on Google Play reviews.',
    points: [],
    stack: ['Python', 'TensorFlow', 'Scikit-learn'],
    links: [
      {
        label: 'Source',
        href: 'https://github.com/rcirasatti/SentimenAnalisis_RatingWhatsapp',
      },
    ],
  },
  {
    title: 'Ship route clustering',
    kind: 'data',
    year: '2025',
    role: 'Coding Camp project',
    summary:
      'Density-based clustering (DBSCAN) of ship navigation data, followed by route classification.',
    points: [],
    stack: ['Python', 'Scikit-learn', 'DBSCAN'],
    links: [
      { label: 'Source', href: 'https://github.com/rcirasatti/Clustering_and_Classification' },
    ],
  },
  {
    title: 'Image classification with transfer learning',
    kind: 'data',
    year: '2025',
    role: 'Coding Camp project',
    summary: 'An image classifier built on a pretrained ResNet50 network.',
    points: [],
    stack: ['Python', 'TensorFlow/Keras', 'ResNet50'],
    links: [
      { label: 'Source', href: 'https://github.com/rcirasatti/KlasifikasiGambarMakanan' },
    ],
  },
];

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
