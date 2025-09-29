import { name, age, title, bio } from "../data/info.json";
export function SecretProfile() {
  return (
    <section
      id=""
      className="relative h-screen flex justify-center items-center bg-black  "
    >
      <div className="absolute">
        <div className="glass-card flex flex-col justify-between gap-8   ">
          <h2 className="text-[64px] mb-5 leading-none text-[rgba(255,255,255,0.79)]">
            My Profile
          </h2>
          <div className="flex flex-col justify-between gap-5">
            <div>
              <h3>Name:</h3>
              <p className="font-custom">{name}</p>
            </div>
            <div>
              <h3>Age:</h3>
              <p className="fon-custom">{age}</p>
            </div>
            <div>
              <h3>Title/Headline:</h3>
              <p className="font-custom">{title}</p>
            </div>
            <div>
              <h3>Bio:</h3>
              <p className="font-custom">{bio}</p>
            </div>
            <div>
              <h3>My social links:</h3>
              <a
                className="pill hover:bg-[rgba(255,255,255,0.08)]"
                href="https://github.com/redasnkrs"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                className="pill hover:bg-[rgba(255,255,255,0.08)]"
                href="https://linkedin.com/reda-dahmani/"
                target="_blank"
                rel="noreferrer"
              >
                Linkdedin
              </a>
              <a
                className="pill hover:bg-[rgba(255,255,255,0.08)]"
                href="mailto:redadahmani34@gmail.com"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
