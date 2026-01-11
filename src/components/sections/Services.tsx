import { Badge } from "../ui/badge";
import { GlowCard } from "../ui/GlowCard";
import { Section } from "./Section";

export function Services() {
  return (
    <Section id="services">
      <h2 className="text-2xl font-semibold tracking-tight">Usługi</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Treść dopracujemy. Układ i wrażenie premium już teraz mają dowozić.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <GlowCard className="p-6">
          <div className="text-lg font-semibold">Strony internetowe</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Responsywne landing page i strony firmowe. Szybkie, czytelne,
            nastawione na kontakt.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary">Design</Badge>
            <Badge variant="secondary">Implementacja</Badge>
            <Badge variant="secondary">Deploy</Badge>
          </div>
        </GlowCard>

        <GlowCard className="p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">Backend (Python)</div>
            <Badge variant="outline">doświadczenie</Badge>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Integracje, API i automatyzacje. Zrobimy to tak, żeby działało na
            produkcji, nie tylko “u mnie”.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary">API</Badge>
            <Badge variant="secondary">Integracje</Badge>
            <Badge variant="secondary">Observability</Badge>
          </div>
        </GlowCard>
      </div>

      <GlowCard className="mt-4 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">Serwis elektroniki</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Naprawa smartfonów i laptopów. Realizacja wysyłkowa (start).
            </p>
          </div>
          <Badge variant="outline">pobocznie</Badge>
        </div>
      </GlowCard>
    </Section>
  );
}
