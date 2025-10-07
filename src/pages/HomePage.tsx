import { About } from "../components/About";
import { ContactMe } from "../components/ContactMe";
import { ExperienceSection } from "../components/Experience";
import { FloatingNav } from "../components/FloatingNav";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

export function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <ExperienceSection />
      <Projects />
      <ContactMe />
      <FloatingNav />
    </div>
  );
}
