export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center bg-black "
    >
      <div className="absolute" style={{ left: 90, top: 414 }}>
        <h1 className="text-[64px] leading-none text-white">Reda. Dahmani</h1>
        <h2 className="text-[64px] leading-none text-[rgba(255,255,255,0.79)]">
          Full-stack Developer
        </h2>
      </div>
      <div className="absolute bottom-50 left-1/2 -translate-x-1/2 text-[rgba(255,255,255,0.7)]">
        <button
          className="animate-bounce"
          onClick={() => {
            const el = document.getElementById("about");
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          ⌄⌄
        </button>
      </div>
    </section>
  );
}
