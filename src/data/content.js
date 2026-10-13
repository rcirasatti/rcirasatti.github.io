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

export const kinds = {
  web: 'Web & apps',
  data: 'Data & ML',
  design: 'Design & prototype',
};

const gh = (repo) => ({ label: 'Source', href: `https://github.com/rcirasatti/${repo}` });

// `featured` projects show first; the rest appear under "Show all".
export const projects = [
  {
    title: 'Polines central portal',
    kind: 'web',
    year: '2026',
    context: 'CV. OmahIoT',
    role: 'Main contributor',
    status: 'Live',
    featured: true,
    images: [{
      src: '/img/polines.jpg',
      alt: 'Home page of the Politeknik Negeri Semarang central portal',
    }],
    summary:
      'The main Politeknik Negeri Semarang website, live at polines.ac.id, built on Laravel 11 with a content management system.',
    points: [
      'Token-based REST API that receives news, agenda, and announcements from department CMSs.',
      'Admin approval workflow, so synced content is reviewed before it appears on the portal.',
      'Integration with the lecturer data API.',
    ],
    stack: ['Laravel 11', 'PHP', 'MySQL', 'REST API'],
    links: [{ label: 'polines.ac.id', href: 'https://polines.ac.id' }],
  },
  {
    title: 'Intelligent cost estimation for an ERP',
    kind: 'data',
    year: '2026',
    context: 'Undergraduate thesis',
    role: 'Author',
    status: 'Completed',
    featured: true,
    images: [
      {
        src: '/img/thesis-architecture.jpg',
        alt: 'Architecture diagram: model development pipeline, integration layer, and the ERP web application flow',
        caption: 'System architecture from the thesis.',
      },
    ],
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
    context: 'CV. OmahIoT internship',
    role: 'Developer',
    status: 'Deployed',
    featured: true,
    summary:
      'A web-based ERP covering projects, budgets, quotations, inventory, suppliers, and tasks. Deployed to production.',
    points: [],
    stack: ['Laravel 11', 'PHP', 'MySQL'],
    links: [gh('ERP-PM')],
  },
  {
    title: 'OmahIoT company profile website',
    kind: 'web',
    year: '2025–2026',
    context: 'CV. OmahIoT',
    role: 'Developer and designer',
    status: 'Live',
    featured: true,
    images: [
      {
        src: '/img/omahiot.jpg',
        alt: 'Home page of the current OmahIoT company website',
        caption: 'Current site at omahiot.com, which I designed.',
      },
      {
        src: '/img/omahiot-v1.jpg',
        alt: 'Home page of the first OmahIoT company website',
        caption: 'First version, which I built in React and Vite.',
      },
    ],
    summary:
      'The OmahIoT company website. I built the first version in React and Vite with a Laravel CMS, then designed the current site at omahiot.com.',
    points: [],
    stack: ['React', 'TypeScript', 'Vite', 'Laravel'],
    links: [
      { label: 'omahiot.com', href: 'https://omahiot.com' },
      {
        label: 'First version demo',
        href: 'https://rcirasatti.github.io/LandingPage-OmahIot/',
      },
      {
        label: 'First version source',
        href: 'https://github.com/rcirasatti/LandingPage-OmahIot',
      },
      { label: 'CMS source', href: 'https://github.com/rcirasatti/cms-webprofile' },
    ],
  },
  {
    title: 'Microcredential course platform',
    kind: 'web',
    year: '2026',
    context: 'CV. OmahIoT',
    role: 'Co-developer',
    status: 'In development',
    featured: true,
    summary:
      'A Laravel course platform built from a React prototype: registration and checkout, a progress dashboard, certificates with public verification, and an admin panel.',
    points: [],
    stack: ['Laravel', 'React', 'MySQL'],
    links: [],
  },
  {
    title: 'GrowSmart: child stunting risk classifier',
    kind: 'data',
    year: '2025',
    context: 'Coding Camp capstone, team project',
    role: 'Machine learning',
    status: 'Completed',
    featured: true,
    summary:
      'The machine learning component of the capstone: data collection, SMOTE balancing, and a neural network that classifies child stunting risk with 98.75% accuracy.',
    points: [],
    stack: ['Python', 'TensorFlow/Keras', 'SMOTE'],
    links: [gh('GrowSmart-PrediksiStuntingAnak')],
  },
  {
    title: 'Karang Taruna Batursari website and CMS',
    kind: 'web',
    year: '2025',
    context: 'CV. OmahIoT internship',
    role: 'Co-developer, team of two',
    status: 'Live',
    featured: true,
    images: [{
      src: '/img/karang-taruna.jpg',
      alt: 'Home page of the Karang Taruna Tlogo Batursari website',
    }],
    summary:
      'Public website and content management system for a youth organisation, built by a team of two.',
    points: [],
    stack: ['Laravel', 'MySQL'],
    links: [
      { label: 'karangtarunabatursari.com', href: 'https://karangtarunabatursari.com' },
      gh('cms-karangtaruna'),
    ],
  },
  {
    title: 'Courier delivery-time prediction',
    kind: 'data',
    year: '2026',
    context: 'CV. OmahIoT',
    role: 'Data analyst',
    status: 'Completed',
    featured: true,
    summary:
      'Processed three months of courier shipment data and developed a model that predicts delivery time. About 98.6% of predictions fall within one day.',
    points: [],
    stack: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow/Keras'],
    links: [],
  },
  {
    title: 'Polines department websites',
    kind: 'web',
    year: '2026',
    context: 'CV. OmahIoT',
    role: 'Main contributor',
    status: 'In development',
    featured: true,
    summary:
      'Five department websites for Politeknik Negeri Semarang, each with its own Laravel CMS: Mechanical Engineering, Accounting, Business Administration, Electrical Engineering, and Civil Engineering.',
    points: ['News, agenda, and announcements can be sent to the central portal for approval.'],
    stack: ['Laravel 11', 'PHP', 'MySQL'],
    links: [],
  },
  {
    title: 'Polines admissions site (SPMB)',
    kind: 'web',
    year: '2026',
    context: 'CV. OmahIoT',
    role: 'Co-developer',
    status: 'In development',
    summary:
      'Admissions information website for new student intake at Politeknik Negeri Semarang.',
    points: [],
    stack: ['Laravel 11', 'PHP', 'MySQL'],
    links: [],
  },
  {
    title: 'UPA TIK website',
    kind: 'web',
    year: '2026',
    context: 'CV. OmahIoT',
    role: 'Contributor',
    status: 'In development',
    summary:
      'Bilingual (Indonesian and English) website for the Polines IT unit. I worked on CMS modules, language routing, and content sync to the central portal.',
    points: [],
    stack: ['Laravel 11', 'PHP', 'MySQL'],
    links: [],
  },
  {
    title: 'ORARI submission and verification system',
    kind: 'web',
    year: '2026',
    context: 'CV. OmahIoT',
    role: 'Interface design and initial prototype',
    status: 'In development',
    images: [
      {
        src: '/img/orari.jpg',
        alt: 'Landing page of the ORARI submission system prototype',
        caption: 'Interface prototype.',
      },
    ],
    summary:
      'A role-based system for submitting and verifying amateur radio (ORARI) applications. I designed the interface and built the initial Laravel prototype; a team continued development.',
    points: [],
    stack: ['Laravel', 'React', 'TypeScript'],
    links: [
      { label: 'Prototype demo', href: 'https://rcirasatti.github.io/orari-ascend/' },
      gh('orari'),
    ],
  },
  {
    title: 'FTTH route data preparation',
    kind: 'data',
    year: '2026',
    context: 'CV. OmahIoT',
    role: 'Data preparation',
    status: 'Completed',
    summary:
      'Cleaned field coordinate and cost-estimate data used for fibre-to-the-home route optimization.',
    points: [],
    stack: ['Python', 'Pandas', 'Excel'],
    links: [],
  },
  {
    title: 'Academic information system (SIAKAD)',
    kind: 'web',
    year: '2026',
    context: 'CV. OmahIoT',
    role: 'Bug fixes',
    status: 'In development',
    summary:
      'An academic information system built by the OmahIoT team with Laravel 11, Vue.js, and Inertia. My part was fixing bugs.',
    points: [],
    stack: ['Laravel 11', 'Vue.js', 'Inertia.js'],
    links: [],
  },
  {
    title: 'Graduation stage display',
    kind: 'design',
    year: '2026',
    context: 'CV. OmahIoT',
    role: 'Prototype',
    status: 'Prototype',
    summary:
      'An unfinished Laravel prototype that shows each graduate on stage screens, with Excel import and graduation sessions.',
    points: [],
    stack: ['Laravel', 'JavaScript'],
    links: [],
  },
  {
    title: 'Foundation finance and asset dashboard',
    kind: 'design',
    year: '2026',
    context: 'CV. OmahIoT',
    role: 'Interface prototype',
    status: 'Prototype',
    images: [
      {
        src: '/img/yayasan.jpg',
        alt: 'Dashboard overview with balance cards, a cash flow chart, and an asset condition chart',
        caption: 'Overview page, running on sample data.',
      },
    ],
    summary:
      'A React and TypeScript interface prototype for a school foundation, with overview, financial management, and inventory pages running on sample data.',
    points: [],
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    links: [{ label: 'Prototype demo', href: 'https://rcirasatti.github.io/yayasan/' }],
  },
  {
    title: 'Polines website redesign concept',
    kind: 'design',
    year: '2025',
    context: 'CV. OmahIoT internship',
    role: 'Design prototype',
    status: 'Prototype',
    images: [
      {
        src: '/img/polines-redesign.jpg',
        alt: 'Home page of the Polines website redesign concept',
        caption: 'Redesign concept home page.',
      },
    ],
    summary:
      'A redesign concept for polines.ac.id in React and TypeScript, with a sitemap and a style guide.',
    points: [],
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    links: [
      { label: 'Concept demo', href: 'https://rcirasatti.github.io/polines-elevate/' },
      gh('polines-elevate'),
    ],
  },
  {
    title: 'Rainfall and flood sensor analysis',
    kind: 'data',
    year: '2025',
    context: 'CV. OmahIoT internship',
    role: 'Data analyst',
    status: 'Completed',
    summary:
      'Analysis of rainfall and flood sensor data in Python: cleaning, outlier handling, time-series charts, and correlation analysis.',
    points: [],
    stack: ['Python', 'Pandas', 'Matplotlib'],
    links: [],
  },
  {
    title: 'Low-Code IoT platform',
    kind: 'web',
    year: '2025',
    context: 'CV. OmahIoT internship',
    role: 'Contributor',
    status: 'In development',
    summary:
      'A Laravel platform for managing IoT devices, datastreams, and dashboard widgets. I contributed to a team project.',
    points: [],
    stack: ['Laravel 11', 'Alpine.js', 'MySQL'],
    links: [],
  },
  {
    title: 'Vonfloris business system',
    kind: 'web',
    year: '2025',
    context: 'CV. OmahIoT internship',
    role: 'Testing and enhancements',
    status: 'Deployed',
    summary:
      'An existing Laravel system for a florist business covering sales, inventory, and rentals. I tested features and made enhancements.',
    points: [],
    stack: ['Laravel', 'PHP', 'MySQL'],
    links: [],
  },
  {
    title: 'Sentiment analysis on 64,000+ app reviews',
    kind: 'data',
    year: '2025',
    context: 'Coding Camp project',
    role: 'Author',
    status: 'Completed',
    summary:
      'Text preprocessing, lexicon-based labelling, and a comparison of classical and deep learning classifiers on Google Play reviews.',
    points: [],
    stack: ['Python', 'TensorFlow', 'Scikit-learn'],
    links: [gh('SentimenAnalisis_RatingWhatsapp')],
  },
  {
    title: 'Ship route clustering',
    kind: 'data',
    year: '2025',
    context: 'Coding Camp project',
    role: 'Author',
    status: 'Completed',
    summary:
      'Density-based clustering (DBSCAN) of ship navigation data, followed by route classification.',
    points: [],
    stack: ['Python', 'Scikit-learn', 'DBSCAN'],
    links: [gh('Clustering_and_Classification')],
  },
  {
    title: 'Image classification with transfer learning',
    kind: 'data',
    year: '2025',
    context: 'Coding Camp project',
    role: 'Author',
    status: 'Completed',
    summary: 'An image classifier built on a pretrained ResNet50 network.',
    points: [],
    stack: ['Python', 'TensorFlow/Keras', 'ResNet50'],
    links: [gh('KlasifikasiGambarMakanan')],
  },
  {
    title: 'Fashion product ETL pipeline',
    kind: 'data',
    year: '2025',
    context: 'Coding Camp project',
    role: 'Author',
    status: 'Completed',
    summary:
      'An extract, transform, load pipeline that collects product data from a website, cleans it, and stores the result.',
    points: [],
    stack: ['Python', 'ETL'],
    links: [gh('ETL-Pipeline-Fashion-Product')],
  },
  {
    title: 'Bike sharing data analysis',
    kind: 'data',
    year: '2025',
    context: 'Coding Camp project',
    role: 'Author',
    status: 'Completed',
    summary:
      'Exploratory analysis of bike sharing data, with a Streamlit dashboard for the results.',
    points: [],
    stack: ['Python', 'Pandas', 'Streamlit'],
    links: [gh('AnalisisData_BikeSharing')],
  },
  {
    title: 'Data analysis practice notebooks',
    kind: 'data',
    year: '2025',
    context: 'Coding Camp exercise',
    role: 'Author',
    status: 'Completed',
    summary: 'Practice notebooks for data analysis with Python.',
    points: [],
    stack: ['Python', 'Pandas'],
    links: [gh('Lat_DataAnalisis_Python')],
  },
  {
    title: 'Blog REST API',
    kind: 'web',
    year: '2026',
    context: 'Personal project',
    role: 'Author',
    status: 'Completed',
    summary: 'A Laravel REST API for a blog with users, posts, and comments.',
    points: [],
    stack: ['Laravel', 'PHP', 'REST API'],
    links: [gh('blog-api')],
  },
  {
    title: 'Money Record',
    kind: 'web',
    year: '2025',
    context: 'Coursework, Politeknik Negeri Semarang',
    role: 'Author',
    status: 'Completed',
    summary: 'A personal finance app in Flutter for recording income and expenses.',
    points: [],
    stack: ['Flutter', 'Dart'],
    links: [gh('money_record')],
  },
  {
    title: 'RW13 Tegalsari population information system',
    kind: 'web',
    year: '2024',
    context: 'Project-based learning, Politeknik Negeri Semarang',
    role: 'Team member',
    status: 'Completed',
    summary:
      'A Laravel web application for managing neighbourhood population data, built as a team project.',
    points: [],
    stack: ['Laravel', 'PHP', 'MySQL'],
    links: [gh('pbl-sistem-penduduk')],
  },
  {
    title: 'Business Travel Order Information System (SPPD)',
    kind: 'web',
    year: '2022',
    context: 'Final project, SMK Negeri 1 Jenangan',
    role: 'Author',
    status: 'Completed',
    summary:
      'My vocational school final project, which earned the "Very Competent" result in the competency test.',
    points: [],
    stack: ['CodeIgniter 3', 'PHP', 'MySQL'],
    links: [],
  },
  {
    title: 'Landing page HTML template',
    kind: 'web',
    year: '2021',
    context: 'Kazuya Media Indonesia internship',
    role: 'Developer',
    status: 'Completed',
    images: [{
      src: '/img/kazuya-landing.jpg',
      alt: 'Company landing page template built during the Kazuya Media internship',
    }],
    summary:
      'My internship project: a responsive company landing page template in HTML and Bootstrap, converted from a design.',
    points: [],
    stack: ['HTML', 'CSS', 'Bootstrap'],
    links: [],
  },
  {
    title: 'CRUD applications with CodeIgniter 3 and Knockout.js',
    kind: 'web',
    year: '2021',
    context: 'Kazuya Media Indonesia internship',
    role: 'Developer',
    status: 'Completed',
    summary:
      'Training applications that create, read, update, and delete records, using MVC in CodeIgniter 3 and MVVM in Knockout.js on MySQL.',
    points: [],
    stack: ['CodeIgniter 3', 'Knockout.js', 'MySQL'],
    links: [],
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
