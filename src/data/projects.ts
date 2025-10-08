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
    technologies: ["PHP", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "GhostFrom",
    description: "Full-stack website i built with a friend from scratch.",
    technologies: ["Next.js", "Stripe", "SQL"],
  },
  {
    title: "LuxyCar",
    description: "The next level when is about renting a car.",
    technologies: ["React", "TypeScript", "NodeJs"],
  },
];
