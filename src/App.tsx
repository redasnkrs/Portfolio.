import { useEffect, useMemo, useState } from 'react'
import { Home, FolderGit2, BriefcaseBusiness, User2, Contact } from 'lucide-react'

type SectionId = 'home' | 'projects' | 'experience' | 'about'

const sections: { id: SectionId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User2 },
  { id: 'experience', label: 'Experience', icon: BriefcaseBusiness },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
]

function useActiveSection(sectionIds: SectionId[]) {
  const [active, setActive] = useState<SectionId>('home')

  useEffect(() => {
    const handler = () => {
      const center = window.scrollY + window.innerHeight / 2
      let current: SectionId = 'home'
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        const top = window.scrollY + rect.top
        const bottom = top + rect.height
        if (center >= top && center < bottom) {
          current = id
        }
      })
      setActive(current)
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
  }, [sectionIds])

  return active
}

function FloatingNav() {
  const active = useActiveSection(sections.map((s) => s.id))
  return (
    <nav aria-label="Primary" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] rounded-2xl px-6 py-3 shadow-2xl">
        <ul className="flex items-center gap-8 text-xs">
          {sections.map(({ id, label, icon: Icon }) => {
            const isActive = active === id
            return (
              <li key={id}>
                <button
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${isActive ? 'bg-[rgba(255,255,255,0.08)]' : 'hover:bg-[rgba(255,255,255,0.08)]'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => {
                    const el = document.getElementById(id)
                    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-white" />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center bg-black">
      <div className="absolute" style={{ left: 110, top: 414 }}>
        <h1 className="text-[64px] leading-none text-white">Reda. Dahmani</h1>
        <h2 className="text-[64px] leading-none text-[rgba(255,255,255,0.79)]">Full-stack Developer</h2>
      </div>
      <div className="absolute bottom-25 left-1/2 -translate-x-1/2 text-[rgba(255,255,255,0.7)]">
        <button
          className="animate-bounce"
          onClick={() => {
            const el = document.getElementById('about');
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          ⌄⌄
        </button>
      </div>
    </section>
  )
}

type Project = {
  title: string
  description: string
  technologies: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'Kikotch',
    description: 'Built a WordPress website.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
  },
  {
    title: 'Rent-a-car',
    description: 'Full-stack website. I make the entire design and the developpement.',
    technologies: ['Next.js', 'Stripe', 'SQL'],
  },
]

function Projects() {
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
  )
}

type Experience = {
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
}

const experiences: Experience[] = [
  {
    company: 'CF2M',
    position: 'Full stack web-dev',
    period: '2024 - Present',
    description: 'Learn the basics of web-developement and more advanced.',
    technologies: ['Symfony', 'Node.js', 'Docker', 'SQL', 'WordPress', 'Linux'],
  },

]

function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container-4xl">
        <h3 className="text-4xl mb-12">Experience</h3>
        <div className="grid gap-6">
          {experiences.map((e) => (
            <div key={e.company + e.position} className="glass-card">
              <div className="flex items-start justify-between">
                <div className="text-white text-xl">{e.company} — {e.position}</div>
                <div className="text-sm text-[rgba(255,255,255,0.79)]">{e.period}</div>
              </div>
              <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed mt-3">{e.description}</p>
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
  )
}

function About() {
  const skills = useMemo(
    () => [
      'React', 'TypeScript', 'Node.js', 'Next.js', 'SQL', 'Tailwind', 'PHP', 'Docker', 'symfony', 'WordPress', 'Express', 'Linux', 'Python',
    ],
    []
  )
  return (
    <section id="about" className="section">
      <div className="container-4xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card">
          <h3 className="text-4xl mb-4">About Me</h3>
          <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed">
            My name is Reda i'm 22 years old. I'm passionate about developpement. Learn the full-stack web-dev in CF2M I now ready to work and ship website with your company.
          </p>
        </div>
        <div className="glass-card">
          <h4 className="text-xl mb-3">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="pill">{s}</span>
            ))}
          </div>
        </div>
        <div className="glass-card lg:col-span-2">
          <h4 className="text-xl mb-3">Contact</h4>
          <div className="flex flex-wrap gap-3">
            <a className="pill hover:bg-[rgba(255,255,255,0.08)]" href="mailto:redadahman34@gmail.com">Email</a>
            <a className="pill hover:bg-[rgba(255,255,255,0.08)]" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="pill hover:bg-[rgba(255,255,255,0.08)]" href="https://github.com/redasnkrs" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Profile() {
  return (
    <section id="profil" className="">
      <div className='d-flex justify-items-end'>
        <img className='text-xl text-[rgb(250,0,0)] p-10 bg-[rgb(45,45,45)] w-25 h-25 rounded' alt='profi-pic' src='asset/react.svg' />
      </div>
    </section>
  )
}

function ContactMe() {
  return (
    <section id='contactMe' className='section'>
      <div className=''>
        <h2 className='text-4xl text-center mb-10'>Contact me</h2>
        <div className='container-4xl glass-card'>

          <p className='py-5  '>If you wanna get in touch with me feel free to send me a email !</p>
          <a className="pill hover:bg-[rgba(255,255,255,0.08)]" href="mailto:redadahman34@gmail.com">Email</a>
        </div>
      </div>
    </section>
  )
}

function TodoList() {
  return (
    <section className='section'>
      <h2 className='text-4xl mb-4 text-center'>My Todo-List </h2>
      <div className='glass-card container-4xl'>
        <p className='p-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi sint et esse. Ex atque tempore voluptates assumenda saepe magni neque architecto. Fuga, dignissimos! Magnam, sequi? </p>
      </div>

    </section>
  )
}


export default function App() {
  return (
    <div>
      <Profile />
      <Hero />
      <About />
      <ExperienceSection />
      <Projects />
      <ContactMe />
      <TodoList />
      <FloatingNav />
    </div>
  )
}
