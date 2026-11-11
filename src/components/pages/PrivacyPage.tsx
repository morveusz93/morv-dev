import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { getDict, type Lang } from "@/lib/i18n";

export function PrivacyPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const other = getDict(lang === "pl" ? "en" : "pl");
  const p = t.privacy;

  return (
    <main className="min-h-screen">
      <Header
        t={t.nav}
        lang={lang}
        homeHref={t.paths.home}
        switchHref={other.paths.privacy}
      />

      <Container className="py-16 md:py-24">
        <div className="max-w-2xl">
          <Link
            href={t.paths.home}
            className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {p.back}
          </Link>

          <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
            {p.title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{p.updated}</p>

          <div className="mt-10 space-y-8">
            {p.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <p className="mt-2 text-base leading-7 text-muted-foreground">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Footer t={t.footer} privacyHref={t.paths.privacy} />
    </main>
  );
}
