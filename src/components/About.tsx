import { useMemo } from "react";
import { aboutMe } from "../data/about.json";

export function About() {
  const skills = useMemo(
    () => [
      "React",
      "TypeScript",
      "Node.js",
      "Next.js",
      "SQL",
      "Tailwind",
      "PHP",
      "Docker",
      "symfony",
      "WordPress",
      "Express",
      "Linux",
    ],
    [],
  );
  return (
    <section id="about" className="section">
      <div className="container-4xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card">
          <h3 className="text-4xl mb-4">About Me</h3>
          <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed">
            {aboutMe}
          </p>
        </div>
        <div className="glass-card">
          <h4 className="text-xl mb-3">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="pill">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="glass-card lg:col-span-2">
          <h4 className="text-xl mb-3">Contact</h4>
          <div className="flex flex-wrap gap-3">
            <a
              className="pill hover:bg-[rgba(255,255,255,0.08)]"
              href="mailto:redadahman34@gmail.com"
            >
              Email
            </a>
            <a
              className="pill hover:bg-[rgba(255,255,255,0.08)]"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="pill hover:bg-[rgba(255,255,255,0.08)]"
              href="https://github.com/redasnkrs"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
