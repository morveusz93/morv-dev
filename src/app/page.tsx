import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stack } from "@/components/sections/Stack";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Divider } from "@/components/ui/Divider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <Container className="pt-14 md:pt-20">
        <Hero />
      </Container>

      <Divider />

      <Services />

      <Stack />

      <Footer />
    </main>
  );
}
