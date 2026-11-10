import { Section } from "./Section";
import { GlowCard } from "../ui/GlowCard";

const highlights = [
  { label: "W branży od", value: "2022 roku" },
  { label: "Rola", value: "Python backend · Tech Lead" },
  { label: "Główny stack", value: "Python · FastAPI · Next.js" },
];

export function About() {
  return (
    <Section id="about">
      <div className="space-y-10">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Kilka słów o mnie
          </h2>

          <div className="space-y-4 text-base leading-7 text-muted-foreground sm:text-lg">
            <p>
              Od 2022 roku pracuję przy serwisach, z których codziennie
              korzystają miliony użytkowników. Jestem programistą z naciskiem
              na backend i{" "}
              <span className="font-medium text-foreground/80">
                Tech Leadem scrumowego zespołu programistów
              </span>
              .
            </p>

            <p>
              Najlepiej czuję się tam, gdzie aplikacja musi działać szybko,
              stabilnie i pod obciążeniem: API w Pythonie, kolejki, bazy
              danych, CI/CD i Kubernetes. Lubię rozumieć, co dzieje się pod
              spodem, i projektuję tak, żeby przy pierwszym większym ruchu nic
              się nie posypało.
            </p>

            <p>
              Poza pracą buduję własne narzędzia, takie jak pipepulse, i
              realizuję wybrane projekty dla firm.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <GlowCard key={item.label} className="p-5">
              <div className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                {item.label}
              </div>
              <div className="mt-2 text-sm font-semibold leading-snug text-foreground/90">
                {item.value}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
