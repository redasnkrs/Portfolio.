import { contactMe } from "../data/contact.json";

export function ContactMe() {
  return (
    <section id="contactMe" className="section">
      <div className="">
        <h2 className="text-4xl text-center mb-10">Contact me</h2>
        <div className="container-4xl glass-card">
          <p className="py-5  ">{contactMe}</p>
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
