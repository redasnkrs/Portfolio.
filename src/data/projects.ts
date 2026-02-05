export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  link?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: "kikotch",
    title: "Kikotch",
    description: "Built a WordPress website.",
    longDescription:
      "A fully custom WordPress website designed and developed for Kikotch. The project involved creating a custom theme, integrating specific plugins for their business needs, and ensuring a responsive design across all devices. The focus was on ease of content management for the client while maintaining a high-performance frontend.",
    technologies: ["WordPress", "js", "HTML/CSS"],
    link: "https://kitakotch.de",
    images: [
      "https://placehold.co/1920x1080/1a1a1a/FFF?text=Kikotch+Home",
      "https://placehold.co/1920x1080/2a2a2a/FFF?text=Kikotch+Mobile",
      "https://placehold.co/1920x1080/3a3a3a/FFF?text=Kikotch+Dashboard",
    ],
  },
  {
    id: "kitapay",
    title: "KitaPay",
    description:
      "Built in Wordpress. We took a old website and covert it in wp.",
    longDescription:
      "This project involved migrating an existing static website to a dynamic WordPress environment for KitaPay. We preserved the original design fidelity while introducing the power of a CMS. Key tasks included data migration, custom post type creation, and optimizing the site for SEO and speed.",
    technologies: ["Wordpress", "js", "HTML/JS"],
    link: "https://kitapay.de/",
    images: [
      "https://placehold.co/1920x1080/1a1a1a/FFF?text=KitaPay+Overview",
      "https://placehold.co/1920x1080/2a2a2a/FFF?text=KitaPay+Features",
    ],
  },
  {
    id: "luxycar",
    title: "LuxyCar (Developpement)",
    description: "The next level when is about renting a car.",
    longDescription:
      "LuxyCar is an ambitious project aiming to revolutionize the luxury car rental market. Built with a modern stack (React, Node.js), it features real-time availability checking, a sleek booking interface, and a comprehensive admin dashboard. The platform is designed to handle complex booking flows and secure payments.",
    technologies: ["React", "TypeScript", "NodeJs"],
    images: [
      "/assets/luxycar/luxycar_figma.png",
      "/assets/luxycar/luxycar_second_section.png",
      "/assets/luxycar/luxycar_third_section.png",
    ],
  },
  {
    id: "2d3d-dashboard",
    title: "2D3D Dashboard",
    description:
      "Sales and reseller management dashboard for 2D/3D crystal engraving products.",
    longDescription:
      "A complex internal tool built for managing the production and sales workflow of 2D/3D crystal engraving. This dashboard allows resellers to place orders, track production status, and manage their invoices. It features data visualization for sales trends and a robust user permission system.",
    technologies: ["Next.js", "React", "TypeScript", "NodeJs"],
    images: [
      "/assets/dashboard/D3D_dashboard.jpeg",
      "https://placehold.co/1920x1080/2a2a2a/FFF?text=Sales+Analytics",
      "https://placehold.co/1920x1080/3a3a3a/FFF?text=Order+Management",
    ],
  },
];
