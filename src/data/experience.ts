export type Experience = {
  role: string;
  organization: string;
  period?: string;
  bullets: string[];
  logo: string;
  logoAlt: string;
};

export const experience: Experience[] = [
  {
    role: 'PhD Candidate',
    organization: 'Eindhoven University of Technology',
    bullets: [
      'Generative artificial intelligence for tailored synthetic image generation',
      'Supervised by dr.ir. Fons van der Sommen',
    ],
    logo: '/logos/tue_small.png',
    logoAlt: 'Eindhoven University of Technology logo',
  },
  {
    role: 'Computer Vision Researcher',
    organization: 'Fraunhofer Portugal AICOS',
    bullets: ['Anomaly detection for in-line visual inspection in the semiconductor industry'],
    logo: '/logos/fraunhofer_small.png',
    logoAlt: 'Fraunhofer Portugal AICOS logo',
  },
  {
    role: 'MSc Electrical Engineering',
    organization: 'Faculty of Engineering, University of Porto',
    bullets: [
      'Graduated with GPA of 18/20',
    ],
    logo: '/logos/feup_small.png',
    logoAlt: 'Faculty of Engineering, University of Porto logo',
  },
  {
    role: 'Research Assistant',
    organization: 'INESC TEC - CTM',
    bullets: [
      'Handled occlusion-aware recognition of human activity',
    ],
    logo: '/logos/inesc_small.png',
    logoAlt: 'INESC TEC logo',
  },
  {
    role: 'BSc Electrical Engineering',
    organization: 'Faculty of Engineering, University of Porto',
    bullets: ['Graduated with GPA of 18/20'],
    logo: '/logos/feup_small.png',
    logoAlt: 'Faculty of Engineering, University of Porto logo',
  },
];
