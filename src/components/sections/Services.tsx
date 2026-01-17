import { Badge } from "../ui/badge";
import { GlowCard } from "../ui/GlowCard";
import { Section } from "./Section";

export function Services() {
  return (
    <Section id="services">
      <h2 className="text-2xl font-semibold tracking-tight">Usługi</h2>
      <p className="mt-2 max-w-4xl text-muted-foreground">
        Jeśli potrzebujesz strony lub narzędzia, które realnie pomoże Ci
        zdobywać klientów — to robimy to prosto: cel, plan, wdrożenie. Bez
        przeciągajacych się spotkań, bez kolejnych wersji „ładnych makiet”,
        które kończą jako PDF w mailu. Liczy się efekt.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3 items-stretch">
        <GlowCard className="p-6 h-full">
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">Strony internetowe</div>
            <Badge variant="outline">WEB</Badge>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Landing page i strony firmowe nastawione na kontakt, szybkość i
            widoczność w Google.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              • Struktura pod SEO: nagłówki, treści, linkowanie, meta, dane
            </li>
            <li>• Szybkość i Core Web Vitals</li>
            <li>• Formularz / CTA, analityka</li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary">Widoczność w Google</Badge>
            <Badge variant="secondary">Szybkie ładowanie</Badge>
            <Badge variant="secondary">Wersja mobilna</Badge>
            <Badge variant="secondary">Kontakt / CTA</Badge>
          </div>
        </GlowCard>

        <GlowCard className="p-6 h-full">
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">Aplikacje i skrypty</div>
            <Badge variant="outline">APP</Badge>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Automatyzacje, integracje i małe aplikacje, które zdejmują z Ciebie
            ręczną robotę.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              • Integracje z API: płatności, CRM, formularze, powiadomienia
            </li>
            <li>
              • Raporty / eksporty / przetwarzanie danych (Excel, CSV, PDF)
            </li>
            <li>• wystawienie API pod aplikację + monitoring</li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary">Automatyzacja</Badge>
            <Badge variant="secondary">Integracje</Badge>
            <Badge variant="secondary">Raporty</Badge>
            <Badge variant="secondary">API</Badge>
          </div>
        </GlowCard>

        <GlowCard className="p-6 h-full">
          <div className="flex items-center justify-between gap-3">
            <div className="text-lg font-semibold">Opieka i rozwój</div>
            <Badge variant="outline">SUPPORT</Badge>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Po wdrożeniu nie zostajesz sam. Aktualizacje, poprawki i rozwój w
            miarę potrzeb.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Aktualizacje, poprawki i szybka reakcja na awarie</li>
            <li>
              • Rozbudowa: nowe sekcje, funkcje, A/B testy, poprawa konwersji
            </li>
            <li>
              • Monitoring i podstawowe bezpieczeństwo (kopie, alerty, kontrola)
            </li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary">Stała opieka</Badge>
            <Badge variant="secondary">Rozwój</Badge>
            <Badge variant="secondary">Monitoring</Badge>
            <Badge variant="secondary">Bezpieczeństwo</Badge>
          </div>
        </GlowCard>
      </div>
    </Section>
  );
}
