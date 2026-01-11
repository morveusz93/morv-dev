import { Button } from "../ui/button";
import { GlowCard } from "../ui/GlowCard";
import { Section } from "./Section";

export const EMAIL = "dreamsoft.mateuszportka@gmail.com";

export function Contact() {
  return (
    <Section id="contact" className="pt-0">
      <GlowCard className="p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Masz temat? Napisz — odpowiem konkretnie.
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Najlepszy kontakt: mail. LinkedIn jako alternatywa.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </GlowCard>
    </Section>
  );
}
