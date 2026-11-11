"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { monoton } from "@/lib/fonts";
import { Container } from "../layout/Container";
import { Button } from "../ui/button";
import type { Dict, Lang } from "@/lib/i18n";

type Props = {
  t: Dict["nav"];
  lang: Lang;
  /** Same page in the other language. */
  switchHref: string;
  /** Home page of the current language; nav anchors point there when off-home. */
  homeHref: string;
};

export function Header({ t, lang, switchHref, homeHref }: Props) {
  const otherLang = lang === "pl" ? "en" : "pl";
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (menuRef.current?.contains(target)) return;
      if (triggerRef.current?.contains(target)) return;

      setIsOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const scrollToTarget = (href: string) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (!element) {
      // Not on the home page (e.g. privacy policy): go there instead.
      window.location.assign(`${homeHref}${href}`);
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== homeHref) return;
    event.preventDefault();
    setIsOpen(false);
    scrollToTarget("/");
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setIsOpen(false);
    scrollToTarget(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/60 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link
          href={homeHref}
          onClick={handleLogoClick}
          className="group select-none"
          aria-label={t.toTop}
        >
          <span className={`logo-word ${monoton.className}`} data-text="MORV">
            morv
          </span>
        </Link>

        <nav className="hidden items-center md:flex md:gap-2">
          {t.items.map((item) => (
            <Button key={item.href} variant="ghost" asChild>
              <a
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="link-underline px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </a>
            </Button>
          ))}
          <a
            href={switchHref}
            hrefLang={otherLang}
            lang={otherLang}
            aria-label={t.switchLabel}
            title={t.switchLabel}
            className="ml-2 rounded-lg border border-border/60 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:border-border hover:text-foreground"
          >
            {otherLang}
          </a>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <a
            href={switchHref}
            hrefLang={otherLang}
            lang={otherLang}
            aria-label={t.switchLabel}
            className="rounded-lg border border-border/60 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            {otherLang}
          </a>
          <Button
            ref={triggerRef}
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={isOpen ? t.closeMenu : t.openMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </Container>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60" />

          <div
            ref={menuRef}
            id="mobile-menu"
            className="absolute inset-x-4 top-[72px] rounded-2xl border border-white/10 bg-zinc-950 p-3 shadow-2xl"
          >
            <nav className="flex flex-col gap-2">
              {t.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
