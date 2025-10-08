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

export function Hero({
  title = "Reda",
  subtitle = "Junior Full-stack Developer",
}) {
  return (
    <header className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__inner">
        <h1 className="hero__title">{title}</h1>
        {subtitle ? <p className="hero__subtitle">{subtitle}</p> : null}
      </div>
      <div>
        <button className="p-3  rounded bg-white text-black font-semibold">
          <a href="#project">Get in touch</a>
        </button>
      </div>
    </header>
  );
}
