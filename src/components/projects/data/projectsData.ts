export const ALL_PROJECTS = [
  {
    id: '01',
    title: 'PROJECT REDEEYAK',
    category: 'AI / FULLSTACK / SYSTEMS',
    role: 'Project Lead',
    stack: 'Next.js / React / TypeScript',
    status: 'ACTIVE',
    timeline: '2026 — Present',
    desc: 'An advanced AI-integrated engineering portfolio built with strict adherence to Japanese technical-editorial principles. Focuses on cinematic physics and deterministic design.',
    image: '/images/placeholders/architectural-01.png',
    pos: { top: '5%', left: '5%', rotate: '-2.5deg', zIndex: 10 }
  },
  {
    id: '02',
    title: 'WORKSHOP PORTFOLIO',
    category: 'FRONTEND ARCH',
    role: 'Design & Engineering',
    stack: 'Next.js / GSAP',
    status: 'ACTIVE',
    timeline: 'Q3 2026',
    desc: 'A deeply architectural portfolio system constructed with rigid adherence to Japanese techno-editorial principles.',
    image: '/images/placeholders/architectural-01.png',
    pos: { top: '15%', left: '55%', rotate: '1.5deg', zIndex: 12 }
  },
  {
    id: '03',
    title: 'FOUNDERSKICK',
    category: 'FULLSTACK PLATFORM',
    role: 'Fullstack Dev',
    stack: 'React / Node.js / PostgreSQL',
    status: 'COMPLETED',
    timeline: '2025',
    desc: 'A comprehensive platform for startup founders to bootstrap their ideas with integrated tools and community.',
    image: '/images/placeholders/architectural-01.png',
    pos: { top: '50%', left: '10%', rotate: '-1.5deg', zIndex: 14 }
  },
  {
    id: '04',
    title: 'MATHEMATICS IN APPLIED RESEARCH',
    category: 'RESEARCH / MANUSCRIPT',
    role: 'Author',
    stack: 'Academic',
    status: 'UNDER REVISION',
    timeline: '2026',
    desc: 'A thematic review examining mathematical methods, applications, and emerging frontiers across applied research.',
    image: '/images/placeholders/architectural-01.png',
    pos: { top: '38%', left: '38%', rotate: '2.5deg', zIndex: 11 }
  },
  {
    id: '05',
    title: 'HACKSAGON 2026',
    category: 'HACKATHON',
    role: 'Finalist',
    stack: 'Engineering',
    status: 'Finalist',
    timeline: '2026',
    desc: 'Shortlisted for the offline final round of a 36-hour engineering hackathon.',
    image: '/images/placeholders/architectural-01.png',
    pos: { top: '65%', left: '60%', rotate: '-1deg', zIndex: 13 }
  },
  {
    id: '06',
    title: 'EUREEKA INTERNSHIP',
    category: 'INTERNSHIP',
    role: 'Intern',
    stack: 'Fieldwork / Digital',
    status: 'COMPLETED',
    timeline: '01 JUL — 30 JUL 2026',
    desc: 'An applied internship involving organizational orientation, digital promotion, creative content development, field survey work, and practical exposure to educational services.',
    image: '/images/placeholders/architectural-01.png'
  },
  {
    id: '07',
    title: 'ALGORITHM ARCHIVE',
    category: 'COMPUTER SCIENCE / ALGORITHMS',
    role: 'Programmer',
    stack: 'C / C++',
    status: 'IN PROGRESS',
    timeline: 'ONGOING',
    desc: 'An ongoing archive of algorithmic problem solving, programming patterns, and implementation practice across C and C++.',
    image: '/images/placeholders/architectural-01.png'
  },
  {
    id: '08',
    title: 'DATA SCIENCE STUDIES',
    category: 'DATA SCIENCE / ACADEMIC',
    role: 'Student',
    stack: 'Mathematics / Programming',
    status: 'ONGOING',
    timeline: 'ONGOING',
    desc: 'An ongoing academic track exploring mathematics, programming, and data science foundations through the IIT Madras BS Degree in Data Science and Applications.',
    image: '/images/placeholders/architectural-01.png'
  },
  {
    id: '09',
    title: 'IEEE STUDENT BRANCH',
    category: 'IEEE / ENGINEERING',
    role: 'Member',
    stack: 'Technical Engagement',
    status: 'ONGOING',
    timeline: 'ONGOING',
    desc: 'Technical and engineering engagement through the IEEE Dibrugarh University Student\'s Branch.',
    image: '/images/placeholders/architectural-01.png'
  }
];

export type ProjectData = typeof ALL_PROJECTS[0];
