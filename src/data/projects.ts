export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Kikotch",
    description: "Built a project from scratch on Wordpress.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: " https://kitakotch.de",
  },
  {
    title: "KitaPay",
    description:
      "Built in Wordpress. We took a old website and covert it in wp.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://kitapay.de/",
  },
  {
    title: "LuxyCar (Developpement)",
    description: "The next level when is about renting a car.",
    technologies: ["React", "TypeScript", "Synfony"],
    link: "../pages/LuxyCar.tsx",
  },
];
