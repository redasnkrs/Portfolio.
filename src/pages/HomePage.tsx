import { About } from "../components/About";
import { ContactMe } from "../components/ContactMe";
import { ExperienceSection } from "../components/Experience";
import { FloatingNav } from "../components/FloatingNav";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
// import { Profile } from "../components/Profile";
// import { TodoList } from "../components/TodoList";

export function HomePage() {
  return (
    <div>
      {/*<Profile />*/}
      <Hero />
      <About />
      <ExperienceSection />
      <Projects />
      <ContactMe />
      {/*<TodoList />*/}
      <FloatingNav />
    </div>
  );
}
