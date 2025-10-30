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
    link: " https://kitakotch.de",
  },
  {
    title: "KitaPay",
    description:
      "Built in Wordpress. We took a old website and covert it in wp.",
    technologies: ["Next.js", "React", "Prisma"],
    link: "https://kitapay.de/",
  },
  {
    title: "LuxyCar (Developpement)",
    description: "The next level when is about renting a car.",
    technologies: ["React", "TypeScript", "NodeJs"],
  },
];
