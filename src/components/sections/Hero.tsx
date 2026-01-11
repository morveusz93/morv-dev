import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { GlowCard } from "../ui/GlowCard";
import { EMAIL } from "./Contact";

export function Hero() {
  return (
    <div className="grid gap-12 pb-16 pt-12 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border bg-card/40 px-3 py-1 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Tech premium • subtelne animacje
        </div>
        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          Responsywne strony, które wyglądają{" "}
          <span className="bg-linear-to-r from-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            premium
          </span>{" "}
          i sprzedają.
        </h1>

        <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Treść dopracujemy. Na start stawiamy fundament: układ, styl,
          mikro-interakcje i czytelność.
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          <Button size="lg" asChild>
            <a href={`mailto:${EMAIL}`}>Napisz do mnie</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#services" className="link-underline">
              Zobacz usługi
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          <Badge variant="secondary">Landing page</Badge>
          <Badge variant="secondary">Strony firmowe</Badge>
          <Badge variant="secondary">Backend Python</Badge>
        </div>
      </div>

      <GlowCard className="p-7 md:p-8">
        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Co klient ma pomyśleć po wejściu?
        </div>
        <div className="mt-3 space-y-3">
          <div className="rounded-xl border bg-card/40 p-4 hover-card">
            <div className="font-medium">“Chcę taką stronę.”</div>
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Ciemny, premium styl + subtelne ruchy.
            </div>
          </div>

          <div className="rounded-xl border bg-card/40 p-4 hover-card">
            <div className="font-medium">“To wygląda solidnie.”</div>
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Spójny design system i czysty układ.
            </div>
          </div>

          <div className="rounded-xl border bg-card/40 p-4 hover-card">
            <div className="font-medium">“Napiszę.”</div>
            <div className="text-sm text-muted-foreground">
              CTA jest oczywiste i zawsze pod ręką.
            </div>
          </div>
        </div>
      </GlowCard>
    </div>
  );
}
