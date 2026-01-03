import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/layout/Container";

const EMAIL = "dreamsoft.mateuszportka@gmail.com";

const tech = [
  "Next.js",
  "Tailwind",
  "shadcn/ui",
  "Python",
  "FastAPI/Django",
  "Docker",
  "PostgreSQL/MariaDB",
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <Container className="pt-14 md:pt-20">
        <Hero />
      </Container>

      <div className="container-x">
        <div className="hairline" />
      </div>

      <Section id="services">
        <h2 className="text-2xl font-semibold tracking-tight">Usługi</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Treść dopracujemy. Układ i wrażenie premium już teraz mają dowozić.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <GlowCard className="p-6">
            <div className="text-lg font-semibold">Strony internetowe</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Responsywne landing page i strony firmowe. Szybkie, czytelne,
              nastawione na kontakt.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="secondary">Design</Badge>
              <Badge variant="secondary">Implementacja</Badge>
              <Badge variant="secondary">Deploy</Badge>
            </div>
          </GlowCard>

          <GlowCard className="p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="text-lg font-semibold">Backend (Python)</div>
              <Badge variant="outline">doświadczenie</Badge>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Integracje, API i automatyzacje. Zrobimy to tak, żeby działało na
              produkcji, nie tylko “u mnie”.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="secondary">API</Badge>
              <Badge variant="secondary">Integracje</Badge>
              <Badge variant="secondary">Observability</Badge>
            </div>
          </GlowCard>
        </div>

        <GlowCard className="mt-4 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-lg font-semibold">Serwis elektroniki</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Naprawa smartfonów i laptopów. Realizacja wysyłkowa (start).
              </p>
            </div>
            <Badge variant="outline">pobocznie</Badge>
          </div>
        </GlowCard>
      </Section>

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

        <footer className="mt-10 text-sm text-muted-foreground">
          <span className="opacity-80">
            Serwis elektroniki: smartfony i laptopy — wysyłkowo (start).
          </span>
        </footer>
      </Section>
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/60 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="group flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500 transition-transform duration-200 ease-out group-hover:rotate-[-2deg]" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">Morv</div>
            <div className="text-xs text-muted-foreground">
              Web • Backend (Python)
            </div>
          </div>
        </a>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" asChild>
            <a
              href="#services"
              className="link-underline px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              Usługi
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a
              href="#services"
              className="link-underline px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              Stack
            </a>
          </Button>
          <Button className="shadow-sm shadow-black/20" asChild>
            <a href="#contact">Kontakt</a>
          </Button>
        </nav>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <div className="grid gap-12 pb-16 pt-12 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border bg-card/40 px-3 py-1 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Tech premium • subtelne animacje
        </div>
        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          Responsywne strony, które wyglądają{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            premium
          </span>{" "}
          i sprzedają.
        </h1>

        <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Treść dopracujemy. Na start stawiamy fundament: układ, styl,
          mikro-interakcje i czytelność.
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          <Button size="lg" asChild>
            <a href={`mailto:${EMAIL}`}>Napisz do mnie</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#services" className="link-underline">
              Zobacz usługi
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          <Badge variant="secondary">Landing page</Badge>
          <Badge variant="secondary">Strony firmowe</Badge>
          <Badge variant="secondary">Backend Python</Badge>
        </div>
      </div>

      <GlowCard className="p-7 md:p-8">
        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Co klient ma pomyśleć po wejściu?
        </div>
        <div className="mt-3 space-y-3">
          <div className="rounded-xl border bg-card/40 p-4 hover-card">
            <div className="font-medium">“Chcę taką stronę.”</div>
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Ciemny, premium styl + subtelne ruchy.
            </div>
          </div>

          <div className="rounded-xl border bg-card/40 p-4 hover-card">
            <div className="font-medium">“To wygląda solidnie.”</div>
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Spójny design system i czysty układ.
            </div>
          </div>

          <div className="rounded-xl border bg-card/40 p-4 hover-card">
            <div className="font-medium">“Napiszę.”</div>
            <div className="text-sm text-muted-foreground">
              CTA jest oczywiste i zawsze pod ręką.
            </div>
          </div>
        </div>
      </GlowCard>
    </div>
  );
}
