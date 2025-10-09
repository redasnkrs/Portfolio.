export type Project = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    image: "../assets/lan.jpeg",
    title: "Kikotch",
    description: "Built a WordPress website.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript"],
  },
  {
    image: "../assets/lan.jpeg",
    title: "GhostFrom (Developpement)",
    description: "Full-stack website i built with a friend from scratch.",
    technologies: ["Next.js", "React", "Prisma"],
  },
  {
    image: "../assets/lan.jpeg",
    title: "LuxyCar (Developpement)",
    description: "The next level when is about renting a car.",
    technologies: ["React", "TypeScript", "NodeJs"],
  },
];
