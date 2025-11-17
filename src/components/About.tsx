// import { useMemo } from "react";
import { aboutme } from "../data/info.json";

export function About() {
  // const skills = useMemo(
  //   () => [
  //     "React",
  //     "TypeScript",
  //     "Node.js",
  //     "Next.js",
  //     "SQL",
  //     "Tailwind",
  //     "PHP",
  //     "Docker",
  //     "symfony",
  //     "WordPress",
  //     "Express",
  //     "Linux",
  //   ],
  //   [],
  // );
  return (
    <section id="about" className="section px-4 sm:px-6 lg:px-8">
      <div className="lg:text-left text-center">
        <h2 className="text-7xl sm:text-7xl lg:text-9xl mb-8">About Me</h2>
      </div>
      <div className="container-xl flex flex-col lg:flex-row justify-around items-center gap-12 lg:gap-8">
        <p className="text-base sm:text-lg text-[rgba(255,255,255,0.7)] leading-relaxed max-w-2xl lg:max-w-lg text-center lg:text-left">
          {aboutme}
        </p>
        <div className="w-full max-w-sm lg:max-w-md h-auto overflow-hidden rounded-lg">
          <img
            src="/assets/lan.jpeg"
            alt="Lan"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
