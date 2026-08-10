export interface ResearchData {
  id: string;
  title: string;
  shortTitle: string;
  type: string;
  status: string;
  description: string;
  researchArea: string;
  role?: string;
  timeline?: string;
  pos: {
    top: string;
    left: string;
  };
  breezeDelay: string;
  pulseDelay: string;
}

export const RESEARCH_DATA: ResearchData[] = [
  {
    id: '01',
    title: 'Mathematics in Applied Research: A Thematic Review of Methods, Applications, and Emerging Frontiers',
    shortTitle: 'MATHEMATICS IN APPLIED RESEARCH',
    type: 'Review Manuscript',
    status: 'Under Revision',
    description: 'A thematic review examining mathematical methods, their applications across research contexts, and emerging frontiers, currently being revised following reviewer feedback.',
    researchArea: 'Mathematics & Applications',
    role: 'Author',
    timeline: '2026',
    pos: {
      top: '35%',
      left: '40%'
    },
    breezeDelay: '0s',
    pulseDelay: '0s'
  },
  {
    id: '02',
    title: 'ECG Signal Analysis',
    shortTitle: 'ECG SIGNAL ANALYSIS',
    type: 'Team Research / Research Paper',
    status: 'In Writing',
    description: 'Collaborative work exploring ECG signals, signal analysis, and the development of a research paper around the problem.',
    researchArea: 'Signal Processing & Healthcare',
    role: 'Collaborator',
    pos: {
      top: '55%',
      left: '60%'
    },
    breezeDelay: '0.8s',
    pulseDelay: '1.2s'
  },
  {
    id: '03',
    title: 'Algorithmic Methods & Computational Modeling',
    shortTitle: 'ALGORITHMIC METHODS',
    type: 'Research Initiative',
    status: 'Ongoing',
    description: 'Explorations into deterministic motion systems, computational modeling, and algorithmic methods bridging mathematical concepts with software architecture.',
    researchArea: 'Computational Systems',
    pos: {
      top: '25%',
      left: '65%'
    },
    breezeDelay: '1.5s',
    pulseDelay: '0.5s'
  },
  {
    id: '04',
    title: 'Human-Centered Healthcare Visualization',
    shortTitle: 'HEALTHCARE VISUALIZATION',
    type: 'Exploratory Research',
    status: 'Ongoing',
    description: 'Investigating how spatial interfaces and non-linear narrative assembly can improve the visualization of complex healthcare data and signal processing output.',
    researchArea: 'Human-Computer Interaction',
    pos: {
      top: '65%',
      left: '35%'
    },
    breezeDelay: '2.1s',
    pulseDelay: '2.0s'
  },
  {
    id: '05',
    title: 'Data-Driven Systems',
    shortTitle: 'DATA-DRIVEN SYSTEMS',
    type: 'Systems Architecture',
    status: 'Ongoing',
    description: 'Research into performant rendering architectures and data-driven systems for processing and displaying high-density information.',
    researchArea: 'Systems Architecture',
    pos: {
      top: '45%',
      left: '25%'
    },
    breezeDelay: '0.4s',
    pulseDelay: '1.8s'
  }
];
