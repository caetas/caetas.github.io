export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  links: ProjectLink[];
  tags: string[];
};

export const projects: Project[] = [
  {
    title: 'GenerativeZoo',
    summary:
      'Unified repository of generative models for computer vision, providing reproducible baselines and tooling for the research community.',
    image: '/images/logo_tasti_light.png',
    imageAlt: 'GenerativeZoo logomark',
    links: [
      { label: 'Project Page', href: '/generativezoo.html' },
      { label: 'GitHub', href: 'https://github.com/caetas/GenerativeZoo' },
    ],
    tags: ['Generative AI', 'Open Source', 'Computer Vision'],
  },
];
