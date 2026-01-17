import { Button } from "../ui/button";
import { GlowCard } from "../ui/GlowCard";
import { Section } from "./Section";

export const EMAIL = "dreamsoft.mateuszportka@gmail.com";
export const LI = "https://www.linkedin.com/in/mateusz-portka-552b18206";

export function Contact() {
  return (
    <Section id="contact" className="pt-0">
      <GlowCard className="p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Porozmawiajmy o Twoim projekcie
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Landing, backend, automatyzacja, modernizacja istniejącego
              systemu. Napisz, czego potrzebujesz — wrócę z konkretną
              odpowiedzią.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                asChild
                className="
      relative overflow-hidden
      bg-linear-to-r from-fuchsia-500 to-blue-500
      text-white
      shadow-lg shadow-fuchsia-500/20
      transition-all
      hover:scale-[1.02]
      hover:shadow-xl hover:shadow-fuchsia-500/40
      active:scale-[0.99]
    "
              >
                <a href={`mailto:${EMAIL}`}>Napisz maila</a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="
      transition-all
      hover:scale-[1.02]
      hover:bg-card/60
      hover:shadow-lg
      hover:ring-1 hover:ring-fuchsia-500/20
      active:scale-[0.99]
    "
              >
                <a
                  href={LI}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">{EMAIL}</div>
      </GlowCard>
    </Section>
  );
}
