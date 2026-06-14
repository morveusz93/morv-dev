import { Section } from "./Section";
import { GlowCard } from "../ui/GlowCard";

const steps = [
  {
    number: "01",
    title: "Rozmowa",
    description:
      "Opisujesz problem lub pomysł, ja zadaję pytania. Razem ustalamy co ma sens zrobić i w jakiej kolejności.",
  },
  {
    number: "02",
    title: "Wycena",
    description:
      "Dostajesz konkretną propozycję z zakresem i ceną. Bez ukrytych kosztów, bez lania wody.",
  },
  {
    number: "03",
    title: "Realizacja",
    description:
      "Pracuję iteracyjnie i informuję o postępach. Masz wgląd w to co się dzieje na każdym etapie.",
  },
  {
    number: "04",
    title: "Odbiór",
    description:
      "Wdrożenie, testy, przekazanie kodu i dostępów. Zostaję do dyspozycji po wdrożeniu.",
  },
];

export function HowIWork() {
  return (
    <Section id="how-i-work">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Jak pracuję
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          Prosto i bez zbędnych formalności — od pierwszej rozmowy do
          działającego produktu.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => (
          <GlowCard key={step.number} className="p-6">
            <div
              className="text-4xl font-bold tracking-tight bg-linear-to-r from-[#ff1a8c] via-[#b84dff] to-[#00b3ff] bg-clip-text text-transparent"
              aria-hidden="true"
            >
              {step.number}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {step.description}
            </p>
          </GlowCard>
        ))}
      </div>
    </Section>
  );
}
