export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Kikotch",
    description: "Built a WordPress website.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind"],
  },
  {
    title: "GhostFrom",
    description: "Full-stack website i built with a friend from scratch.",
    technologies: ["Next.js", "Stripe", "SQL"],
  },
  // {
  //   title: "modo.studio",
  //   description: "Full-stack ",
  //   technologies: ["react"],
  // },
];
