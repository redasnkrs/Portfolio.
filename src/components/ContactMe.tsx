import { contactme } from "../data/info.json";

export function ContactMe() {
  return (
    <section id="contactMe" className="section">
      <div className="">
        <h2 className="text-9xl mb-15">Contact me</h2>
        <div className="container-4xl glass-card">
          <p className="py-5  ">{contactme}</p>
          <div className="flex flex-wrap gap-3">
            <a
              className="pill hover:bg-[rgba(255,255,255,0.08)]"
              href="mailto:redadahman34@gmail.com"
            >
              Email
            </a>
            <a
              className="pill hover:bg-[rgba(255,255,255,0.08)]"
              href="phoneto:0488981758"
            >
              Phone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
