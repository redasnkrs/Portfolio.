export type Experience = {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    company: "CF2M",
    position: "Full stack web-dev",
    period: "2024 - Present",
    description: "Learn the basics of web-developement and more advanced.",
    technologies: [
      "Symfony",
      "Node.js",
      "Docker",
      "SQL",
      "WordPress",
      "Linux",
      "React",
    ],
  },
];
