import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="section px-4 sm:px-6 lg:px-8">
      <h3 className="text-7xl sm:text-6xl lg:text-9xl mb-12 text-center lg:text-left">
        Projects
      </h3>
      <div className="container-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((p) => (
            <a
              key={p.title}
              className="group glass-card cursor-pointer p-6"
              href={p.link || "#"}
              target={p.link ? "_blank" : undefined}
              rel={p.link ? "noreferrer" : undefined}
            >
              <p className="text-xl sm:text-2xl text-white">{p.title}</p>
              <p className="text-sm sm:text-base text-[rgba(255,255,255,0.7)] leading-relaxed mt-3">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.technologies.map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 text-sm sm:text-base text-[rgba(255,255,255,0.79)] opacity-80 group-hover:opacity-100 transition-opacity">
                View Project →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
