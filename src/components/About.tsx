
export function About() {
  return (
    <section id="about" className="section px-4 sm:px-6 lg:px-8">
      <div className="lg:text-left text-center">
        <h2 className="text-7xl sm:text-7xl lg:text-9xl mb-8">About Me</h2>
      </div>
      <div className="container-xl flex flex-col lg:flex-row justify-around items-center gap-12 lg:gap-8">
        <div className="text-base sm:text-lg text-[rgba(255,255,255,0.7)] leading-relaxed max-w-2xl lg:max-w-3xl text-center lg:text-left space-y-4">
          <p>
            Hi! I’m Reda, a junior web developer currently training to become a
            full-stack developer based in Belgium.
          </p>
          <p>
            I specialize in building clean, responsive, and user-friendly web
            applications, with a strong focus on usability and modern interface
            design. During my training and projects, I’ve worked with technologies
            such as React, Next.js, JavaScript, Node.js, and Tailwind CSS, and I
            enjoy creating structured and scalable front-end architectures.
          </p>
          <p>
            I also have experience designing interfaces with Figma, allowing me to
            bridge the gap between design and development to deliver intuitive
            user experiences.
          </p>
          <p>
            I’m passionate about problem-solving and continuously improving my
            skills through real projects and learning platforms.
          </p>
          <p>
            Outside of development, I’m a technology enthusiast who enjoys
            exploring gaming setups and peripherals, which naturally feeds my
            interest in performance, design, and user experience.
          </p>
        </div>
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
