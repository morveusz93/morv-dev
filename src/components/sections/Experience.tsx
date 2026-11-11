import { Users, Server, GitBranch, Gauge } from "lucide-react";

import { GlowCard } from "../ui/GlowCard";
import { Section } from "./Section";
import type { Dict } from "@/lib/i18n";

const ICONS = [Users, Server, GitBranch, Gauge];

export function Experience({ t }: { t: Dict["experience"] }) {
  return (
    <Section id="experience">
      <div className="max-w-3xl space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.title}
        </h2>
        <p className="text-base leading-7 text-muted-foreground sm:text-lg">
          {t.subtitle}
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {t.items.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <GlowCard key={item.title} className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-muted/40">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </GlowCard>
          );
        })}
      </div>
    </Section>
  );
}
