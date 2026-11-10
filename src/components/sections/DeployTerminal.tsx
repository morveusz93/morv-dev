"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Kind = "cmd" | "out" | "ok" | "err" | "dim";
type Step = { kind: Kind; text: string; wait?: number };
type Line = { id: number; kind: Kind; text: string };

const cmd = (text: string, wait?: number): Step => ({ kind: "cmd", text, wait });
const out = (text: string): Step => ({ kind: "out", text });
const ok = (text: string): Step => ({ kind: "ok", text });
const err = (text: string): Step => ({ kind: "err", text });
const dim = (text: string): Step => ({ kind: "dim", text });

/**
 * Each scenario is a short, self-consistent shell session.
 * `wait` on a command = how long it "runs" before its output appears.
 */
const SCENARIOS: Step[][] = [
  [
    cmd("git push origin main", 700),
    ok("pipeline #4821 passed · lint · tests · build"),
    cmd("helm upgrade api ./chart --atomic", 1400),
    ok("rollout complete · 6/6 pods ready"),
  ],
  [
    cmd("pytest -q -n auto", 1600),
    ok("412 passed in 18.3s"),
    cmd("ruff check .", 400),
    ok("All checks passed!"),
    cmd("mypy app", 900),
    ok("Success: no issues found in 87 source files"),
  ],
  [
    cmd('alembic revision --autogenerate -m "orders idx"', 800),
    dim("Generating versions/3f2a_orders_idx.py ... done"),
    cmd("alembic upgrade head", 700),
    ok("Running upgrade 9c1e -> 3f2a, orders idx"),
  ],
  [
    cmd("kubectl get pods -n api", 600),
    dim("NAME                    READY   STATUS"),
    out("api-7d9f6c-x2kqp        1/1     Running"),
    out("api-7d9f6c-m8wzt        1/1     Running"),
    out("worker-5b8c4d-q9fnl     1/1     Running"),
  ],
  [
    cmd("kubectl logs deploy/worker --tail=2", 500),
    dim("INFO  task sync_feeds received"),
    ok("task sync_feeds succeeded in 0.42s"),
  ],
  [
    cmd("k6 run load-test.js", 2200),
    out("http_reqs ........ 126k   2.1k/s"),
    out("p(95) duration ... 84ms"),
    ok("checks ........... 100.00%"),
  ],
  [
    cmd("git switch -c feat/rate-limit", 300),
    dim("Switched to a new branch 'feat/rate-limit'"),
    cmd('git commit -am "feat: rate limit per api key"', 400),
    dim("[feat/rate-limit 4e1c2a9] 3 files changed"),
    cmd("glab mr create --fill", 900),
    ok("!1287 feat: rate limit per api key"),
  ],
  [
    cmd("docker build -t api:1.42 .", 2000),
    ok("naming to docker.io/library/api:1.42"),
    cmd("docker run --rm api:1.42 python -V", 600),
    out("Python 3.13.1"),
  ],
  [
    cmd("curl -s localhost:8000/health", 300),
    out('{"status":"ok","db":"ok","redis":"ok"}'),
  ],
  [
    cmd("redis-cli info stats | grep keyspace", 300),
    out("keyspace_hits:982341"),
    out("keyspace_misses:21877"),
  ],
  [
    cmd("psql -c 'select count(*) from orders'", 500),
    out(" count"),
    out("---------"),
    out(" 1843902"),
  ],
];

const EASTER_EGGS: Step[][] = [
  [cmd(":q", 200), err("zsh: command not found: :q")],
  [cmd("./deploy.sh prod", 600), err("refused: it's Friday 16:58. Go home.")],
  [
    cmd("kubectl get coffee", 400),
    err('error: the server doesn\'t have a resource type "coffee"'),
    cmd("make coffee", 300),
    err("make: *** No rule to make target 'coffee'.  Stop."),
  ],
  [
    cmd("git blame app/cache.py -L 42,42", 400),
    dim("4e1c2a9f (Mateusz 2023-03-14) # don't touch, it works"),
  ],
  [
    cmd("whoami", 200),
    out("morv"),
    cmd("cat ~/contact", 200),
    ok("morv@morv.dev · open to selected projects"),
  ],
];

const MAX_LINES = 11;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Real scenarios in random order, with an easter egg slipped in every few. */
function buildPlaylist(): Step[][] {
  const real = shuffle(SCENARIOS);
  const eggs = shuffle(EASTER_EGGS);
  const list: Step[][] = [];
  real.forEach((s, i) => {
    list.push(s);
    if (i % 3 === 2 && eggs.length) list.push(eggs.pop()!);
  });
  return list;
}

const STATIC_LINES: Line[] = SCENARIOS[0].map((s, i) => ({
  id: i,
  kind: s.kind,
  text: s.text,
}));

export function DeployTerminal() {
  const reduced = useReducedMotion();
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState("");
  const rootRef = useRef<HTMLDivElement | null>(null);
  const onScreen = useRef(true);

  // Pause the loop when the terminal is off screen or the tab is hidden.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      onScreen.current = e.isIntersecting;
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduced !== false) return;
    let cancelled = false;
    let nextId = 0;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => setTimeout(resolve, ms));

    const waitUntilVisible = async () => {
      while (!cancelled && (!onScreen.current || document.hidden)) {
        await sleep(400);
      }
    };

    const push = (kind: Kind, text: string) =>
      setLines((prev) =>
        [...prev, { id: nextId++, kind, text }].slice(-MAX_LINES)
      );

    const run = async () => {
      await sleep(600);
      while (!cancelled) {
        for (const scenario of buildPlaylist()) {
          for (const step of scenario) {
            await waitUntilVisible();
            if (cancelled) return;

            if (step.kind === "cmd") {
              await sleep(350 + Math.random() * 400);
              for (let i = 1; i <= step.text.length; i++) {
                if (cancelled) return;
                setTyping(step.text.slice(0, i));
                await sleep(28 + Math.random() * 55);
              }
              await sleep(180);
              if (cancelled) return;
              setTyping("");
              push("cmd", step.text);
              await sleep(step.wait ?? 400);
            } else {
              if (cancelled) return;
              push(step.kind, step.text);
              await sleep(110);
            }
          }
          await sleep(1100);
        }
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [reduced]);

  const shown = reduced ? STATIC_LINES : lines;

  return (
    <div
      ref={rootRef}
      className="overflow-hidden rounded-2xl border bg-[hsl(222,47%,5%)]/90 shadow-xl backdrop-blur"
      role="img"
      aria-label="Terminal z pracą backend developera: testy, migracje bazy, wdrożenia na Kubernetes i kilka żartów."
    >
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff1a8c]/70" />
        <span className="h-3 w-3 rounded-full bg-[#b84dff]/70" />
        <span className="h-3 w-3 rounded-full bg-[#00b3ff]/70" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          morv@prod: ~/api
        </span>
      </div>

      <div
        aria-hidden
        className="flex h-[19.5rem] flex-col justify-end overflow-hidden px-5 py-4 font-mono text-[12.5px] leading-6 sm:text-[13px]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0, black 3.5rem)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0, black 3.5rem)",
        }}
      >
        {shown.map((line) => (
          <TermLine key={line.id} kind={line.kind} text={line.text} />
        ))}

        <div className="truncate whitespace-pre">
          <Prompt />
          <span className="text-foreground/90">{typing}</span>
          <Cursor />
        </div>
      </div>
    </div>
  );
}

function TermLine({ kind, text }: { kind: Kind; text: string }) {
  return (
    <div className="animate-[term-in_180ms_ease-out] truncate whitespace-pre">
      {kind === "cmd" && (
        <>
          <Prompt />
          <span className="text-foreground/90">{text}</span>
        </>
      )}
      {kind === "ok" && (
        <>
          <span className="text-emerald-400">✓ </span>
          <span className="text-foreground/80">{text}</span>
        </>
      )}
      {kind === "err" && (
        <>
          <span className="text-[#ff5c8a]">✗ </span>
          <span className="text-[#ff9ab8]">{text}</span>
        </>
      )}
      {kind === "out" && <span className="text-foreground/70">{text}</span>}
      {kind === "dim" && <span className="text-muted-foreground">{text}</span>}
    </div>
  );
}

function Prompt() {
  return <span className="font-semibold text-[#e040a0]">$ </span>;
}

function Cursor() {
  return (
    <span className="ml-px inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-foreground/70" />
  );
}
