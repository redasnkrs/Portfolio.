import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-6xl">
        <h3 className="text-4xl mb-12">Projects</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              className="group glass-card cursor-pointer"
              href={p.link || '#'}
              target={p.link ? '_blank' : undefined}
              rel={p.link ? 'noreferrer' : undefined}
            >
              <h4 className="text-xl text-white">{p.title}</h4>
              <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed mt-2">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.technologies.map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-sm text-[rgba(255,255,255,0.79)] opacity-80 group-hover:opacity-100 transition-opacity">
                View Project →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
