import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { Collaboration } from "@/components/sections/Collaboration";
import { Stack } from "@/components/sections/Stack";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Divider } from "@/components/ui/Divider";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Projects } from "@/components/sections/Projects";
import { SeoSection } from "@/components/sections/seo";
import { getDict, type Lang } from "@/lib/i18n";

export function HomePage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const other = getDict(lang === "pl" ? "en" : "pl");

  return (
    <main className="min-h-screen">
      <Header
        t={t.nav}
        lang={lang}
        homeHref={t.paths.home}
        switchHref={other.paths.home}
      />

      <Container className="pt-2 md:pt-4">
        <Hero t={t.hero} />
      </Container>

      <Divider />
      <About t={t.about} />
      <Divider />
      <Projects t={t.projects} />
      <Divider />
      <Experience t={t.experience} />
      <Divider />
      <Collaboration t={t.collaboration} />
      <Divider />
      <Stack t={t.stack} />
      <Divider />
      <Contact t={t.contact} />
      <Divider />
      <SeoSection t={t.seo} />

      <Footer t={t.footer} privacyHref={t.paths.privacy} />
    </main>
  );
}
