export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: 'Kikotch',
    description: 'Built a WordPress website.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
  },
  {
    title: 'Rent-a-car',
    description: 'Full-stack website. I make the entire design and the developpement.',
    technologies: ['Next.js', 'Stripe', 'SQL'],
  },
];
