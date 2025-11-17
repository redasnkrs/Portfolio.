// export function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative h-screen flex items-center bg-black "
//     >
//       <div className="absolute" style={{ left: 90, top: 414 }}>
//         <h1 className="text-[64px] leading-none text-white">Reda. Dahmani</h1>
//         <h2 className="text-[64px] leading-none text-[rgba(255,255,255,0.79)]">
//           Full-stack Developer
//         </h2>
//       </div>
//       <div className="absolute bottom-50 left-1/2 -translate-x-1/2 text-[rgba(255,255,255,0.7)]">
//         <button
//           className="animate-bounce"
//           onClick={() => {
//             const el = document.getElementById("about");
//             el?.scrollIntoView({ behavior: "smooth", block: "start" });
//           }}
//         >
//           ⌄⌄
//         </button>
//       </div>
//     </section>
//   );
// }
//

import SplitText from "./animations/SplitText";

export function Hero() {
  return (
    <header id="home" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__inner">
        <SplitText
          text="Reda"
          className="text-9xl font-semibold text-center hero__title"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <p className="hero__subtitle">Full-Stack Developer</p>
        <div className="mt-8 hero_elements">
          <button className="p-3 rounded bg-white text-black font-semibold hover:bg-gray-300 cursor-pointer transition-all">
            <a href="#contactMe">Get in touch</a>
          </button>
        </div>
        <div className="mt-16">
          <button className="animate-bounce ease-in-out">
            <a href="#about" className="text-2xl">
              ↓
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}
