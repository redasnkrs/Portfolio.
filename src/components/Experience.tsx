import { experiences } from "../data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="section px-4 sm:px-6 lg:px-8">
      <h2 className="text-7xl sm:text-6xl lg:text-9xl mb-12 text-center lg:text-left">
        Experience
      </h2>
      <div className="container-4xl">
        <div className="grid gap-8">
          {experiences.map((e) => (
            <div key={e.company + e.position} className="glass-card p-6">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
                <div className="text-white text-xl sm:text-2xl">
                  {e.company} — {e.position}
                </div>
                <div className="text-sm sm:text-base text-[rgba(255,255,255,0.79)]">
                  {e.period}
                </div>
              </div>
              <p className="text-sm sm:text-base text-[rgba(255,255,255,0.7)] leading-relaxed mt-4">
                {e.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {e.technologies.map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
