import { Users, Server, GitBranch, Gauge } from "lucide-react";

import { GlowCard } from "../ui/GlowCard";
import { Section } from "./Section";

const items = [
  {
    icon: Users,
    title: "Tech Lead scrumowego zespołu",
    description:
      "Prowadzę zespół programistów: planowanie sprintów, code review, standardy w kodzie i onboarding nowych osób.",
  },
  {
    icon: Server,
    title: "Backend pod dużym ruchem",
    description:
      "Rozwijam backend w Pythonie dla serwisów, z których codziennie korzystają miliony użytkowników.",
  },
  {
    icon: GitBranch,
    title: "CI/CD i Kubernetes",
    description:
      "Utrzymuję pipeline'y GitLab CI i wdrożenia na Kubernetes: stabilność, czas buildów, bezpieczne releasy.",
  },
  {
    icon: Gauge,
    title: "Wydajność i infrastruktura",
    description:
      "Biorę udział w decyzjach infrastrukturalnych: wydajność, cache, CDN i to, jak system zachowuje się pod obciążeniem.",
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <div className="max-w-3xl space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Doświadczenie
        </h2>
        <p className="text-base leading-7 text-muted-foreground sm:text-lg">
          Od 2022 roku w jednym z największych polskich wydawnictw
          internetowych. Czym zajmuję się na co dzień:
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;
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
