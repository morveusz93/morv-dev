import { Blocks, Settings2, Link2 } from "lucide-react";

import { GlowCard } from "../ui/GlowCard";
import { Section } from "./Section";
import type { Dict } from "@/lib/i18n";

const ICONS = [Blocks, Settings2, Link2];

export function Collaboration({ t }: { t: Dict["collaboration"] }) {
  return (
    <Section id="collaboration">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.title}
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          {t.intro}
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {t.cards.map((service, i) => {
          const Icon = ICONS[i];

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

                <h3 className="mt-6 text-xl font-semibold leading-tight">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground md:min-h-[96px] lg:min-h-[72px]">
                  {service.description}
                </p>

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

      <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
        <div className="max-w-3xl space-y-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          <p>{t.note}</p>
          <p>
            <span className="font-medium text-foreground/80">
              {t.howLabel}
            </span>{" "}
            {t.how}
          </p>
        </div>

        <div className="rounded-xl border border-border/60 bg-card/40 px-5 py-4 text-sm">
          <div className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            {t.pricingLabel}
          </div>
          <div className="mt-1 font-semibold text-foreground/90">
            {t.pricing}
          </div>
        </div>
      </div>
    </Section>
  );
}
