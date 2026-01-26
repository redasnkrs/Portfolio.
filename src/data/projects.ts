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
    technologies: ["WordPress", "js", "HTML/CSS"],
    link: " https://kitakotch.de",
  },
  {
    title: "KitaPay",
    description:
      "Built in Wordpress. We took a old website and covert it in wp.",
    technologies: ["Wordpress", "js", "HTML/JS"],
    link: "https://kitapay.de/",
  },
  {
    title: "LuxyCar (Developpement)",
    description: "The next level when is about renting a car.",
    technologies: ["React", "TypeScript", "NodeJs"],
  },
  {
    title: "2D3D Dashboard",
    description:
      "Sales and reseller management dashboard for 2D/3D crystal engraving products.",
    technologies: ["Next.js", "React", "TypeScript", "NodeJs"],
  },
];
