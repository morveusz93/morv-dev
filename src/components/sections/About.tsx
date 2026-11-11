import { Section } from "./Section";
import { GlowCard } from "../ui/GlowCard";
import type { Dict } from "@/lib/i18n";

export function About({ t }: { t: Dict["about"] }) {
  return (
    <Section id="about">
      <div className="space-y-10">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.title}
          </h2>

          <div className="space-y-4 text-base leading-7 text-muted-foreground sm:text-lg">
            {t.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {t.highlights.map((item) => (
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
