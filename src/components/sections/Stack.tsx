"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Section } from "./Section";

type Group = {
  title: string;
  subtitle?: string;
  items: string[];
};

const groups: Group[] = [
  {
    title: "Frontend",
    subtitle: "UI, performance, SEO",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Lighthouse",
      "Core Web Vitals",
      "optymalizacja SEO",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    subtitle: "API, skrypty, taski",
    items: [
      "Python",
      "Rust",
      "Node.js",
      "FastAPI",
      "Django",
      "Django REST Framework",
      "Flask",
      "Gunicorn",
      "Uvicorn",
      "Celery",
      "AsyncIO",
      "REST API",
      "OAuth2",
    ],
  },
  {
    title: "AI / Automatyzacja",
    subtitle: "LLM, integracje, realne use-case’y",
    items: [
      "LLM (OpenAI, GPT)",
      "Prompt engineering",
      "Integracja API modeli językowych",
      "Automatyzacja procesów",
      "Generowanie treści",
      "Chatboty",
      "Asystenci AI",
      "Przetwarzanie tekstu (NLP)",
      "Ekstrakcja danych z tekstu",
      "Klasyfikacja treści",
      "Podsumowania",
      "Embeddings",
      "Integracja AI z backendem",
      "AI w produktach webowych",
    ],
  },
  {
    title: "Bazy danych",
    subtitle: "SQL, cache, wyszukiwanie",
    items: [
      "PostgreSQL",
      "MariaDB",
      "MySQL",
      "MS SQL",
      "Redis",
      "SQLite",
      "Indeksy SQL",
      "Optymalizacja zapytań",
      "Migracje schematu",
      "Transakcje",
      "Elasticsearch",
    ],
  },
  {
    title: "Infra / DevOps",
    subtitle: "kontenery, deploy, środowiska",
    items: [
      "Docker",
      "Kubernetes",
      "Helm",
      "CI/CD",
      "GitLab CI",
      "Multi-stage builds",
      "Linux",
      "Nginx",
      "Load balancing",
      "Secrets management",
      "API gateway",
    ],
  },
  {
    title: "Observability",
    subtitle: "monitoring, logi, tracing",
    items: [
      "Sentry",
      "OpenTelemetry",
      "Jaeger",
      "Prometheus",
      "Grafana",
      "Metrics",
      "Alerting",
      "Error tracking",
      "Performance monitoring",
    ],
  },
  {
    title: "Testing & Quality",
    subtitle: "testy, jakość, stabilność",
    items: [
      "pytest",
      "unittest",
      "Testy jednostkowe",
      "Testy integracyjne",
      "Testy API",
      "Coverage",
      "Mockowanie",
      "Contract testing",
      "Static typing",
      "Code review",
    ],
  },
  {
    title: "Tooling",
    subtitle: "tempo pracy i porządek",
    items: [
      "uv",
      "pip",
      "poetry",
      "ruff",
      "black",
      "isort",
      "mypy",
      "pre-commit",
      "Makefile",
      "Shell scripting",
      "Bash",
      "Zsh",
    ],
  },
  {
    title: "Architektura",
    subtitle: "struktura i decyzje",
    items: [
      "Mikroserwisy",
      "Modularny backend",
      "Architektura monolityczna",
      "Clean Architecture",
      "Domain Driven Design",
      "Separacja odpowiedzialności",
      "Feature flags",
      "Backward compatibility",
    ],
  },
  {
    title: "Proces & Współpraca",
    subtitle: "praca zespołowa",
    items: [
      "Git",
      "GitFlow",
      "Code review",
      "Pull requesty",
      "Praca zespołowa",
      "Dokumentacja techniczna",
      "Debugowanie",
      "Utrzymanie legacy code",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export function Stack() {
  return (
    <Section id="stack" className="pt-0">
      <h2 className="text-2xl font-semibold tracking-tight">Tech stack</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Konkretne narzędzia, które realnie dowożą. Podział na kategorie dla
        porządku, hover dla smaku.
      </p>

      <motion.div
        className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {groups.map((g) => (
          <motion.div
            key={g.title}
            variants={item}
            className={[
              "group relative overflow-hidden rounded-3xl border",
              "bg-background/40 md:backdrop-blur",
              "p-4 sm:p-5",
              "transition",
              "hover:border-border/80 hover:bg-muted/20",
            ].join(" ")}
          >
            {/* subtle shine */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="relative">
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">{g.title}</div>
                  {g.subtitle ? (
                    <div className="mt-1 text-xs text-muted-foreground">
                      {g.subtitle}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className={[
                      "relative px-3 py-1",
                      "border-border/40 bg-background/60 md:bg-background/40 md:backdrop-blur",
                      "transition",
                      "hover:-translate-y-[1px] hover:scale-[1.02]",
                      "hover:border-border/70 hover:bg-muted/30",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
                    ].join(" ")}
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
