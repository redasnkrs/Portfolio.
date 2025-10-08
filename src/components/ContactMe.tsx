import { contactme } from "../data/info.json";

export function ContactMe() {
  return (
    <section id="contactMe" className="section">
      <div className="">
        <h2 className="text-9xl mb-15">Contact me</h2>
        <div className="container-4xl glass-card">
          <p className="py-5  ">{contactme}</p>
        </div>
      </div>
    </section>
  );
}
