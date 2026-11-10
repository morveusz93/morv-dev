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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <Container className="pt-2 md:pt-4">
        <Hero />
      </Container>

      <Divider />

      <About />

      <Divider />

      <Projects />

      <Divider />

      <Experience />

      <Divider />

      <Collaboration />

      <Divider />

      <Stack />

      <Divider />

      <Contact />

      <Divider />

      <SeoSection />

      <Footer />
    </main>
  );
}
