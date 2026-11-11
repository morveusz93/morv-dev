import { Section } from "./Section";
import type { Dict } from "@/lib/i18n";

export function SeoSection({ t }: { t: Dict["seo"] }) {
  return (
    <Section>
      <h2 className="text-2xl font-semibold">{t.title}</h2>
      <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
        {t.body}
      </p>
    </Section>
  );
}
