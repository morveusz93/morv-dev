import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "./Section";
import { GlowCard } from "../ui/GlowCard";

const stack = [
  "FastAPI",
  "Next.js",
  "PostgreSQL",
  "Docker",
  "Helm / K8s",
  "GitHub Actions",
];

export function Projects() {
  return (
    <Section id="projects">
      <div className="space-y-10">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Projekty
          </h2>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Rzeczy, które zbudowałem poza godzinami pracy.
          </p>
        </div>

        <GlowCard className="overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold tracking-tight">
                  pipepulse
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pipeline health dashboard for GitLab
                </p>
              </div>

              <div className="flex shrink-0 flex-row gap-3">
                <Link
                  href="https://pipepulse.morv.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-80"
                >
                  <ExternalLink className="size-3.5" />
                  Demo
                </Link>
                <Link
                  href="https://github.com/morveusz93/pipepulse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
                >
                  <Github className="size-3.5" />
                  GitHub
                </Link>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Dashboard agregujący pipeline'y z wielu projektów GitLab
              w jednym miejscu. Pokazuje historię, trendy, MTTR i logi
              failujących jobów bez wychodzenia z widoku. Tryb demo działa
              bez konfiguracji.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border bg-card/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="https://pipepulse.morv.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            tabIndex={-1}
            aria-hidden
          >
            <div className="relative overflow-hidden border-t">
              <Image
                src="/pipepulse-dashboard.png"
                alt="pipepulse dashboard — widok pipeline'ów z pulsem i rozwiniętym logiem błędu"
                width={2560}
                height={1640}
                className="w-full transition duration-300 group-hover:scale-[1.01]"
                priority
              />
            </div>
          </Link>
        </GlowCard>
      </div>
    </Section>
  );
}
