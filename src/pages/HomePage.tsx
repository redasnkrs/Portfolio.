// import { Loader } from "lucide-react";
import { About } from "../components/About";
import { ContactMe } from "../components/ContactMe";
import { ExperienceSection } from "../components/Experience";
import { FloatingNav } from "../components/FloatingNav";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

export function HomePage() {
  return (
    <div>
      {/*<Loader />*/}
      <Hero />
      <About />
      <ExperienceSection />
      <Projects />
      <ContactMe />
      <FloatingNav />
    </div>
  );
}
