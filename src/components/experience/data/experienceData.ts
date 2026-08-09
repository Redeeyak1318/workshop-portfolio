export type ExperienceVariant = 'photograph' | 'document' | 'note' | 'label' | 'polaroid';

export interface ExperienceData {
  id: string;
  title: string;
  category: string;
  role: string;
  timeline: string;
  status: string;
  desc: string;
  image?: string; // Optional if variant doesn't use an image
  variant: ExperienceVariant;
  pos: {
    top: string;
    left: string;
    rotate: string;
    zIndex: number;
    pinTop?: string;  // Relative pin position %
    pinLeft?: string; // Relative pin position %
  };
}

export const EXPERIENCE_DATA: ExperienceData[] = [
  {
    id: 'EXP_01',
    title: 'PROJECT REDEEYAK',
    category: 'SYSTEMS / DEVELOPMENT',
    role: 'Project Lead & Full-Stack Developer',
    timeline: '2026 — Present',
    status: 'ACTIVE',
    desc: 'An ongoing personal portfolio and architectural system project involving comprehensive frontend engineering, design-system implementation, technical documentation, and iterative production development.',
    image: '/images/placeholders/architectural-01.png',
    variant: 'photograph',
    pos: { top: '22%', left: '22%', rotate: '-4deg', zIndex: 12, pinTop: '5%', pinLeft: '50%' }
  },
  {
    id: 'EXP_02',
    title: 'EUREEKA EDUCATION AND SERVICES',
    category: 'INTERNSHIP',
    role: 'Computer Science Intern',
    timeline: '1 JUL 2026 — 30 JUL 2026',
    status: 'COMPLETED',
    desc: 'Practical exposure to educational services involving organizational orientation, digital promotion, creative content development, poster creation, and field survey activities studying the impact of e-commerce.',
    image: '/images/placeholders/architectural-01.png',
    variant: 'polaroid',
    pos: { top: '24%', left: '78%', rotate: '5deg', zIndex: 15, pinTop: '5%', pinLeft: '50%' }
  },
  {
    id: 'EXP_03',
    title: 'MATHEMATICS IN APPLIED RESEARCH',
    category: 'RESEARCH / MANUSCRIPT',
    role: 'Author',
    timeline: '2026',
    status: 'UNDER REVISION',
    desc: 'A thematic review of methods, applications, and emerging frontiers. Received reviewer comments and currently revising the manuscript.',
    variant: 'document',
    pos: { top: '78%', left: '26%', rotate: '2deg', zIndex: 14, pinTop: '5%', pinLeft: '50%' }
  },
  {
    id: 'EXP_04',
    title: 'HACKSAGON 2026',
    category: 'HACKATHON',
    role: 'Finalist',
    timeline: '2026',
    status: 'SHORTLISTED / FINALIST',
    desc: 'Shortlisted for the finals of the offline 36-hour engineering hackathon.',
    variant: 'note',
    pos: { top: '50%', left: '16%', rotate: '-7deg', zIndex: 16, pinTop: '5%', pinLeft: '50%' }
  },
  {
    id: 'EXP_05',
    title: 'IEEE STUDENT BRANCH',
    category: 'TECHNICAL ENGAGEMENT',
    role: 'IEEE Student Member',
    timeline: 'ONGOING',
    status: 'ACTIVE',
    desc: 'Active association and technical involvement with the IEEE Dibrugarh University Student\'s Branch.',
    variant: 'note',
    pos: { top: '54%', left: '84%', rotate: '8deg', zIndex: 13, pinTop: '5%', pinLeft: '50%' }
  },
  {
    id: 'EXP_06',
    title: 'B.TECH COMPUTER SCIENCE & ENGINEERING',
    category: 'ACADEMIC / LEARNING TRACK',
    role: 'Student',
    timeline: 'ONGOING',
    status: 'ACTIVE',
    desc: 'Undergraduate academic development at Dibrugarh University Institute of Engineering and Technology.',
    variant: 'document',
    pos: { top: '74%', left: '80%', rotate: '-3deg', zIndex: 10, pinTop: '5%', pinLeft: '50%' }
  },
  {
    id: 'EXP_07',
    title: 'IIT MADRAS',
    category: 'TECHNICAL DEVELOPMENT',
    role: 'Student',
    timeline: 'ONGOING',
    status: 'ACTIVE',
    desc: 'BS Degree in Data Science and Applications, focusing on advanced technical foundations.',
    variant: 'document',
    pos: { top: '82%', left: '55%', rotate: '-6deg', zIndex: 11, pinTop: '5%', pinLeft: '50%' }
  }
];
