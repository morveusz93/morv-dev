import { Badge } from "../ui/badge";
import { Section } from "./Section";

const tech = [
  "Next.js",
  "Tailwind",
  "shadcn/ui",
  "Python",
  "FastAPI/Django",
  "Docker",
  "PostgreSQL/MariaDB",
];

export function Stack() {
  return (
    <Section id="stack" className="pt-0">
      <h2 className="text-2xl font-semibold tracking-tight">Tech stack</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Konkretne narzędzia, bez nadęcia. Treść dopiszemy, układ zostaje.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((t) => (
          <Badge key={t} variant="outline" className="px-3 py-1">
            {t}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
