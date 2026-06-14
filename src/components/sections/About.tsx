import { Section } from "./Section";
import { GlowCard } from "../ui/GlowCard";

const highlights = [
  { label: "W branży od", value: "2022 roku" },
  { label: "Rola", value: "Full-stack · Tech Lead" },
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
              Programuję komercyjnie od 2022 roku. Przez ostatnie lata
              pracowałem przy dużych serwisach newsowych —{" "}
              <span className="font-medium text-foreground/80">
                se.pl, eska.pl, muratordom.pl
              </span>{" "}
              — jako programista full-stack z naciskiem na backend. Pełnię też
              funkcję Tech Leada kilkuosobowego zespołu programistów.
            </p>

            <p>
              Specjalizuję się w backendzie Python, infrastrukturze chmurowej
              i integracjach między systemami. Lubię rozumieć co się dzieje pod
              spodem — i projektuję tak, żeby przy pierwszym większym ruchu nic
              się nie posypało.
            </p>

            <p>
              Morv to mój krok w stronę własnych projektów. Działam zdalnie.
              Chętnie wezmę się za Python, webdev i automatyzacje — jeśli
              projekt zahacza o AI, tym lepiej.
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
