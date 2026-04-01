import { Globe, Link2, Settings2, Blocks } from "lucide-react";

import { Badge } from "../ui/badge";
import { GlowCard } from "../ui/GlowCard";
import { Section } from "./Section";

const services = [
  {
    icon: Globe,
    label: "WEB",
    title: "Strony internetowe",
    description:
      "Strony firmowe i landing page’e przygotowane z naciskiem na czytelność, szybkość i sensowną strukturę.",
    points: [
      "układ treści i sekcji",
      "wersja mobilna",
      "podstawy SEO technicznego",
      "formularze, CTA i analityka",
    ],
  },
  {
    icon: Link2,
    label: "INTEGRACJE",
    title: "Integracje",
    description:
      "Łączenie strony lub aplikacji z zewnętrznymi usługami, żeby dane przepływały bez ręcznego przepisywania.",
    points: [
      "formularze, CRM, newslettery, płatności",
      "API zewnętrznych usług",
      "synchronizacja danych między systemami",
      "webhooki i obsługa zdarzeń",
    ],
  },
  {
    icon: Settings2,
    label: "AUTOMATYZACJE",
    title: "Automatyzacje i backend",
    description:
      "Skrypty, procesy i zaplecze aplikacji, które porządkują powtarzalną pracę i przenoszą logikę tam, gdzie jej miejsce.",
    points: [
      "automatyczne przetwarzanie danych",
      "importy, eksporty, raporty",
      "API i logika backendowa",
      "zadania cykliczne i powiadomienia",
    ],
  },
  {
    icon: Blocks,
    label: "APP",
    title: "Małe aplikacje webowe",
    description:
      "Proste narzędzia webowe do obsługi konkretnego procesu: panel, formularz, generator, wewnętrzny system.",
    points: [
      "panele administracyjne i wewnętrzne narzędzia",
      "formularze wieloetapowe i kalkulatory",
      "obsługa użytkowników i uprawnień",
      "rozwój i poprawki po wdrożeniu",
    ],
  },
];

export function Services() {
  return (
    <Section id="services">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Co mogę zrobić
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          Skupiam się na prostych, konkretnych rozwiązaniach. Strona,
          integracja, automatyzacja albo mała aplikacja — zależnie od tego, co
          faktycznie ma sens w danym przypadku.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <GlowCard
              key={service.title}
              className="group h-full rounded-2xl border border-border/60 bg-background/70 p-7"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-muted/40">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-xs font-medium tracking-[0.18em] text-muted-foreground">
                    {service.label}
                  </span>
                </div>

                <div className="mt-6 lg:min-h-[160px]">
                  <h3 className="text-xl font-semibold leading-tight lg:min-h-[56px]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground lg:min-h-[72px]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 h-px bg-border/60" />

                <ul className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          );
        })}
      </div>
    </Section>
  );
}
