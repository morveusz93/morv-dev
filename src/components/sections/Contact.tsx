"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { GlowCard } from "../ui/GlowCard";
import { Section } from "./Section";

export const EMAIL = "morv@morv.dev";
export const LI = "https://www.linkedin.com/in/mateusz-portka-552b18206";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Błąd wysyłki.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Błąd wysyłki. Spróbuj ponownie.");
    }
  };

  return (
    <Section id="contact" className="pt-0">
      <GlowCard className="p-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            Porozmawiajmy o Twoim projekcie
          </h2>
          <p className="mt-2 text-muted-foreground">
            Landing, backend, automatyzacja, modernizacja istniejącego systemu.
            Napisz, czego potrzebujesz — wrócę z konkretną odpowiedzią.
          </p>
        </div>

        {status === "success" ? (
          <div className="mt-8 space-y-4">
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-6 py-5 text-sm text-emerald-400">
              Wiadomość wysłana. Odezwę się wkrótce.
            </div>
            <button
              onClick={() => setStatus("idle")}
              className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline transition-colors"
            >
              Wyślij kolejną wiadomość
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                  Imię
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jan Kowalski"
                  className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition focus:border-fuchsia-500/50 focus:ring-2 focus:ring-fuchsia-500/20"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jan@firma.pl"
                  className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition focus:border-fuchsia-500/50 focus:ring-2 focus:ring-fuchsia-500/20"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                Wiadomość
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Opisz krótko czego szukasz..."
                className="w-full resize-none rounded-xl border border-border/60 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition focus:border-fuchsia-500/50 focus:ring-2 focus:ring-fuchsia-500/20"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400">{errorMsg}</p>
            )}

            <div className="flex items-center gap-4 pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="relative overflow-hidden bg-linear-to-r from-[#ff1a8c] via-[#b84dff] to-[#00b3ff] text-white shadow-lg shadow-fuchsia-500/20 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-fuchsia-500/40 active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === "loading" ? "Wysyłanie…" : "Wyślij wiadomość"}
              </Button>

              <span className="text-xs text-muted-foreground">
                lub napisz bezpośrednio:{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="link-underline text-foreground/70 hover:text-foreground transition-colors"
                >
                  {EMAIL}
                </a>
              </span>
            </div>
          </form>
        )}
      </GlowCard>
    </Section>
  );
}
