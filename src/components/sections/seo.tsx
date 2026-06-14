import { Section } from "./Section";

export function SeoSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold">
        Programista freelancer — strony, backend i automatyzacje
      </h2>
      <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
        Specjalizuję się w tworzeniu stron firmowych i landing page&apos;ów dla
        małych i średnich firm, integracji z zewnętrznymi API oraz pisaniu
        backendów w Pythonie (FastAPI, Django). Jeśli szukasz programisty
        full-stack lub freelancera do projektu webowego — napisz, a wrócę z
        konkretną propozycją.
      </p>
    </Section>
  );
}
