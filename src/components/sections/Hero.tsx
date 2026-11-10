"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../ui/button";
import { DeployTerminal } from "./DeployTerminal";

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
    <section className="grid gap-12 pt-10 pb-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-20">
      <div className="space-y-5">
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 rounded-full border bg-card/40 px-3 py-1 text-sm text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Otwarty na wybrane projekty
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl font-semibold tracking-tight sm:whitespace-nowrap sm:text-5xl lg:text-[2.6rem] xl:text-5xl"
        >
          <span className="bg-linear-to-r from-[#ff1a8c] via-[#b84dff] to-[#00b3ff] bg-clip-text text-transparent">
            Morv
          </span>{" "}
          <span className="font-light text-foreground/25">|</span>{" "}
          Mateusz Portka
        </motion.h1>

        <motion.p
          {...fadeUp(0.15)}
          className="font-mono text-base text-foreground/80 sm:text-lg"
        >
          Python backend · DevOps · Tech Lead
        </motion.p>

        <motion.p
          {...fadeUp(0.2)}
          className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Od 2022 roku rozwijam systemy dla jednych z największych polskich
          serwisów internetowych. Po godzinach biorę wybrane projekty:
          aplikacje, integracje i automatyzacje.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="grid grid-cols-2 gap-3 pt-2 sm:flex sm:flex-wrap sm:gap-4"
        >
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
            <a href="#projects">Zobacz projekty</a>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Napisz do mnie</a>
          </Button>
        </motion.div>
      </div>

      {/* TERMINAL */}
      <motion.div {...fadeUp(0.15)} className="relative hidden sm:block">
        <DeployTerminal />
        <div className="absolute -z-10 inset-0 blur-3xl opacity-25 bg-linear-to-r from-[#ff1a8c] via-[#b84dff] to-[#00b3ff]" />
      </motion.div>
    </section>
  );
}
