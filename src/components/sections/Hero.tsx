"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../ui/button";

export function Hero() {
  const reduced = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 14 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduced ? 0 : 0.55,
      delay: reduced ? 0 : delay,
      ease: [0.2, 0.8, 0.2, 1] as const,
    },
  });

  return (
    <section className="grid gap-12 pt-10 pb-16 lg:grid-cols-2 lg:items-center lg:py-20">
      <div className="space-y-5">
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 rounded-full border bg-card/40 px-3 py-1 text-sm text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Dostępny · przyjmuję zlecenia
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Tworzę skalowalne{" "}
          <span className="bg-linear-to-r from-[#ff1a8c] via-[#b84dff] to-[#00b3ff] bg-clip-text text-transparent">
            aplikacje webowe
          </span>{" "}
          i{" "}
          <span className="bg-linear-to-r from-[#00b3ff] via-[#b84dff] to-[#ff1a8c] bg-clip-text text-transparent">
            narzędzia automatyzujące
          </span>{" "}
          pracę.
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Jestem programistą full-stack. Specjalizuję się w backendzie Python,
          infrastrukturze chmurowej i integracjach AI. Pomagam zamieniać pomysły
          w stabilne produkty.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 pt-2">
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
            <a href="#contact">Napisz do mnie</a>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <a href="#services">Zobacz usługi</a>
          </Button>
        </motion.div>
      </div>

      {/* IMAGE DESKTOP */}
      <motion.div
        {...fadeUp(0.1)}
        className="relative hidden lg:block"
      >
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
      </motion.div>
    </section>
  );
}
