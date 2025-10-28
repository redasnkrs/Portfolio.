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
    <section id="about" className="section ml-12">
      <div className="">
        <h2 className="text-9xl mb-4">About Me</h2>
      </div>
      <div className="container-xl flex gap-96 ml-5 items-center">
        <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed w-150">
          {aboutme}
        </p>
        <div className="w-125 h-125 overflow-hidden rounded-lg">
          <img
            src="../src/assets/lan.jpeg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
