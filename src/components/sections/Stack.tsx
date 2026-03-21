"use client";

import { motion } from "framer-motion";
import { FaPython, FaReact, FaDocker, FaGitAlt, FaLinux } from "react-icons/fa";
import {
  SiCelery,
  SiDjango,
  SiFastapi,
  SiGitlab,
  SiKubernetes,
  SiNextdotjs,
  SiNginx,
  SiOpenai,
  SiOpenapiinitiative,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiPrometheus,
  SiGrafana,
  SiMongodb,
  SiMysql,
  SiElasticsearch,
} from "react-icons/si";

import { GlowCard } from "../ui/GlowCard";
import { Section } from "./Section";

const techStack = [
  {
    category: "Backend",
    items: [
      { icon: FaPython, name: "Python" },
      { icon: SiFastapi, name: "FastAPI" },
      { icon: SiDjango, name: "Django" },
      { icon: SiCelery, name: "Celery" },
      { icon: SiOpenapiinitiative, name: "OpenAPI" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { icon: FaReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
  },
  {
    category: "Bazy i dane",
    items: [
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiMysql, name: "MySQL" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiRedis, name: "Redis" },
      { icon: SiElasticsearch, name: "Elasticsearch" },
    ],
  },
  {
    category: "DevOps / infrastruktura",
    items: [
      { icon: FaDocker, name: "Docker" },
      { icon: SiKubernetes, name: "Kubernetes" },
      { icon: SiNginx, name: "NGINX" },
      { icon: FaGitAlt, name: "Git" },
      { icon: SiGitlab, name: "GitLab CI" },
      { icon: FaLinux, name: "Linux" },
    ],
  },
  {
    category: "Integracje",
    items: [
      { icon: SiOpenai, name: "OpenAI" },
      { icon: SiOpenapiinitiative, name: "REST API" },
      { icon: SiOpenapiinitiative, name: "Webhooks" },
      { icon: SiOpenapiinitiative, name: "OpenAPI" },
    ],
  },
  {
    category: "Monitoring",
    items: [
      { icon: SiPrometheus, name: "Prometheus" },
      { icon: SiGrafana, name: "Grafana" },
    ],
  },
];

export function Stack() {
  return (
    <Section id="stack">
      <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-background/60 px-6 py-16 backdrop-blur-xl">
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Nieważne jakich narzędzi używasz, liczy się to, co potrafisz nimi
            osiągnąć.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Wybieram technologie pod problem — tak, żeby dowieźć wynik szybko i
            bez zbędnej komplikacji.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {techStack.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <GlowCard className="h-full p-6">
                <div className="text-lg font-semibold tracking-tight">
                  {group.category}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 auto-rows-fr">
                  {group.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.name}
                        className="group flex h-full items-center gap-2 rounded-xl border border-border/50 bg-background/50 px-3 py-2 transition duration-200 hover:-translate-y-0.5 hover:border-border hover:bg-background"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-foreground/90 transition duration-200 group-hover:scale-110" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
