import Image from "next/image";
import { Button } from "../ui/button";
import { EMAIL } from "./Contact";

export function Hero() {
  return (
    <section className="grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border bg-card/40 px-3 py-1 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Od pomysłu do działającej aplikacji
        </div>

        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          Tworzę skalowalne{" "}
          <span className="bg-linear-to-r from-[#ff1a8c] via-[#b84dff] to-[#00b3ff] bg-clip-text text-transparent">
            aplikacje webowe
          </span>{" "}
          i{" "}
          <span className="bg-linear-to-r from-[#00b3ff] via-[#b84dff] to-[#ff1a8c] bg-clip-text text-transparent">
            narzędzia automatyzujące
          </span>{" "}
          pracę.
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Jestem programistą full-stack. Specjalizuję się w backendzie Python,
          infrastrukturze chmurowej i integracjach AI. Pomagam zamieniać pomysły
          w stabilne produkty.
        </p>

        {/* IMAGE MOBILE */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden rounded-2xl border bg-card shadow-xl">
            <Image
              src="/images/hero-img.jpg"
              alt="Programowanie strony internetowej"
              width={1600}
              height={1000}
              priority
              sizes="100vw"
              className="h-56 sm:h-72 w-full object-cover"
            />
          </div>

          <div className="absolute -z-10 inset-0 blur-3xl opacity-30 bg-linear-to-r from-[#ff1a8c] via-[#b84dff] to-[#00b3ff]" />
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
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
            <a href="#services">Zobacz usługi</a>
          </Button>
        </div>
      </div>

      {/* IMAGE DESKTOP */}
      <div className="relative hidden lg:block">
        <div className="overflow-hidden rounded-2xl border bg-card shadow-xl">
          <Image
            src="/images/hero-img.jpg"
            alt="Programowanie strony internetowej"
            width={1600}
            height={1000}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="w-full object-cover"
          />
        </div>

        <div className="absolute -z-10 inset-0 blur-3xl opacity-30 bg-linear-to-r from-[#ff1a8c] via-[#b84dff] to-[#00b3ff]" />
      </div>
    </section>
  );
}
