// import { Loader } from "lucide-react";
import { About } from "../components/About";
import { ContactMe } from "../components/ContactMe";
import { ExperienceSection } from "../components/Experience";
import { FloatingNav } from "../components/FloatingNav";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import ClickSpark from "../components/animations/ClickSpark";

export function HomePage() {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div>
        {/*<Loader />*/}
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <ContactMe />
        <FloatingNav />
      </div>
    </ClickSpark>
  );
}
