import { contactme } from "../data/info.json";

export function ContactMe() {
  return (
    <section id="contactMe" className="section ml-12">
      <div className="">
        <h2 className="text-9xl mb-15">Contact me</h2>
        <div className="container-4xl">
          <p className="py-5 text-xl">{contactme}</p>
        </div>
      </div>
    </section>
  );
}
