import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stack } from "@/components/sections/Stack";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Divider } from "@/components/ui/Divider";
import { Contact } from "@/components/sections/Contact";
import { SeoSection } from "@/components/sections/seo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <Container className="pt-2 md:pt-4">
        <Hero />
      </Container>

      <Divider />

      <Services />

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
