import { Button } from "../ui/button";
import { GlowCard } from "../ui/GlowCard";
import { EMAIL } from "./Contact";

export function Hero() {
  return (
    <div className="grid gap-12 pb-16 pt-12 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border bg-card/40 px-3 py-1 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Profesjonalna strona w zasięgu Twojej ręki
        </div>

        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          Stworzę profesjonalną stronę internetową dla{" "}
          <span className="bg-linear-to-r from-[#ff1a8c] via-[#b84dff] to-[#00b3ff] bg-clip-text text-transparent">
            Twojej firmy
          </span>
          {", "}
          która wyróżni Cię od konkurencji.
        </h1>

        <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Tworze strony dzięki którym firmy stają sie widoczne. Powiedz mi co
          chcesz osiagnąć i pozwól mi zająć się resztą.
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          <Button
            size="lg"
            asChild
            className="
              relative overflow-hidden
              bg-linear-to-r from-[#ff1a8c] via-[#b84dff] to-[#00b3ff]
              text-white
              shadow-lg shadow-fuchsia-500/20
              transition-all
              hover:scale-[1.02]
              hover:shadow-xl hover:shadow-fuchsia-500/40
              active:scale-[0.99]
            "
          >
            <a href={`mailto:${EMAIL}`}>Napisz do mnie</a>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <a href="#services" className="link-underline">
              Zobacz usługi
            </a>
          </Button>
        </div>
      </div>

      <GlowCard className="p-7 md:p-8">
        <div className="text-xl font-medium uppercase tracking-wide text-muted-foreground">
          Co mogę Ci zaoferować
        </div>

        <div className="mt-3 space-y-3">
          <div className="rounded-xl border bg-card/40 p-4 hover-card">
            <div className="flex items-center justify-between gap-3">
              <div className="font-medium">Szybki landing</div>
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              Jedna strona, konkretna oferta, jasne CTA. Idealne rozwiązanie gdy
              potrzebujesz wirtualnej wizytówki.
            </div>
          </div>

          <div className="rounded-xl border bg-card/40 p-4 hover-card">
            <div className="flex items-center justify-between gap-3">
              <div className="font-medium">Strona firmowa</div>
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              Kilka sekcji/podstron: oferta, realizacje, o firmie, kontakt.
              Struktura poukładana tak, żeby klient szybko znalazł to, czego
              szuka.
            </div>
          </div>

          <div className="rounded-xl border bg-card/40 p-4 hover-card">
            <div className="flex items-center justify-between gap-3">
              <div className="font-medium">Modernizacja istniejącej strony</div>
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              Gdy obecna strona jest wolna, przestarzała albo po prostu Ci się
              znudziła. Porządkuję układ, poprawiam czytelność i optymalizuję
              pod SEO.
            </div>
          </div>

          <div className="mt-4 rounded-xl border bg-card/40 p-4 hover-card">
            <div className="font-medium">Jak wygląda współpraca?</div>

            <div className="mt-2 grid gap-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                <span>
                  <span className="font-medium text-foreground">
                    Krótka rozmowa
                  </span>{" "}
                  → wytłumacz mi czym się zajmujesz i czego potrzebujesz.
                </span>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                <span>
                  <span className="font-medium text-foreground">
                    Makieta układu
                  </span>{" "}
                  → przygotowuję propozycję wyglądu wg Twoich wytycznych.
                </span>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                <span>
                  <span className="font-medium text-foreground">
                    Wdrożenie i publikacja
                  </span>{" "}
                  → po Twojej akceptacji udostępniam stronę światu.
                </span>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                <span>
                  <span className="font-medium text-foreground">
                    Wsparcie powdrożeniowe
                  </span>{" "}
                  → gdybyś chciał coś zmienić, jestem cały czas do Twojej
                  dyspozycji.
                </span>
              </div>
            </div>
          </div>
        </div>
      </GlowCard>
    </div>
  );
}
