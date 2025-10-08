import { experiences } from "../data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="section ml-12">
      <h2 className="text-9xl mb-15">Experience</h2>
      <div className="container-4xl">
        <div className="grid gap-6">
          {experiences.map((e) => (
            <div key={e.company + e.position} className="glass-card">
              <div className="flex items-start justify-between">
                <div className="text-white text-xl">
                  {e.company} — {e.position}
                </div>
                <div className="text-sm text-[rgba(255,255,255,0.79)]">
                  {e.period}
                </div>
              </div>
              <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed mt-3">
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
