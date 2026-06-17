import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { EMAIL } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Informacja o przetwarzaniu danych osobowych przez Morv.",
  robots: { index: false },
};

const SECTIONS = [
  {
    title: "1. Administrator danych",
    body: `Administratorem Twoich danych osobowych jest Mateusz Portka, prowadzący działalność pod nazwą Morv, adres e-mail: ${EMAIL} (dalej: „Administrator").`,
  },
  {
    title: "2. Jakie dane zbieramy i w jakim celu",
    body: `Za pośrednictwem formularza kontaktowego na stronie morv.dev zbieramy następujące dane: imię, adres e-mail oraz treść wiadomości. Dane te są przetwarzane wyłącznie w celu udzielenia odpowiedzi na Twoje zapytanie (art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes Administratora).`,
  },
  {
    title: "3. Jak długo przechowujemy dane",
    body: `Dane przechowywane są przez czas niezbędny do obsługi zapytania i ewentualnej późniejszej współpracy, nie dłużej niż 12 miesięcy od ostatniego kontaktu.`,
  },
  {
    title: "4. Odbiorcy danych",
    body: `Wiadomości przesyłane są za pośrednictwem usługi Resend (resend.com), która przetwarza dane jako podmiot przetwarzający. Dane nie są udostępniane innym podmiotom ani przekazywane poza Europejski Obszar Gospodarczy.`,
  },
  {
    title: "5. Twoje prawa",
    body: `Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz wniesienia sprzeciwu. Możesz też wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (uodo.gov.pl). W celu skorzystania z powyższych praw napisz na adres: ${EMAIL}.`,
  },
  {
    title: "6. Pliki cookie",
    body: `Strona morv.dev nie używa plików cookie do celów analitycznych ani reklamowych. Nie profilujemy użytkowników i nie korzystamy z narzędzi śledzących.`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <Container className="py-16 md:py-24">
        <div className="max-w-2xl">
          <Link
            href="/"
            className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Wróć na stronę główną
          </Link>

          <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
            Polityka prywatności
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Ostatnia aktualizacja: czerwiec 2026
          </p>

          <div className="mt-10 space-y-8">
            {SECTIONS.map((section) => (
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

      <Footer />
    </main>
  );
}
