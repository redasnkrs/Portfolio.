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
    <header className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__inner">
        <SplitText
          text="Reda"
          className="text-2xl font-semibold text-center hero__title"
          delay={220}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={() => {}}
        />
        {/*<h1 className="hero__title">{title}</h1>
        {subtitle ? <p className="hero__subtitle">{subtitle}</p> : null}*/}
        <div className="mt-10 hero_elements">
          <button className="p-3 rounded bg-white text-black font-semibold hover:bg-gray-300 cursor-pointer transition-all">
            <a href="mailto:redadahmani34@gmail.com">Get in touch</a>
          </button>
        </div>
        <div className="mt-50">
          <button className="animate-bounce ease-in-out">
            <a href="#about" className="text-2xl ">
              ↓
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}
