import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://morv.dev"),
  title: {
    default: "Mateusz | Python backend i aplikacje webowe",
    template: "%s | morv.dev",
  },
  description:
    "Python backend developer i Tech Lead. Buduję aplikacje webowe, API i automatyzacje, które działają pod dużym ruchem. FastAPI · Next.js · Kubernetes.",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    title: "Mateusz | Python backend i aplikacje webowe",
    description:
      "Python backend developer i Tech Lead. Buduję aplikacje webowe, API i automatyzacje, które działają pod dużym ruchem. FastAPI · Next.js · Kubernetes.",
    url: "https://morv.dev",
    siteName: "morv.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateusz | Python backend i aplikacje webowe",
    description:
      "Python backend developer i Tech Lead. Buduję aplikacje webowe, API i automatyzacje, które działają pod dużym ruchem. FastAPI · Next.js · Kubernetes.",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/favicon/site.webmanifest" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Morv",
  url: "https://morv.dev",
  description:
    "Aplikacje webowe, backend w Pythonie, integracje i automatyzacje. FastAPI, Next.js, Kubernetes.",
  founder: {
    "@type": "Person",
    name: "Mateusz Portka",
    jobTitle: "Python Backend Developer & Tech Lead",
    knowsAbout: ["Python", "FastAPI", "Django", "Next.js", "PostgreSQL", "Docker", "Kubernetes", "GitLab CI"],
    sameAs: [
      "https://www.linkedin.com/in/mateusz-portka-552b18206",
      "https://github.com/morveusz93",
    ],
  },
  areaServed: "PL",
  serviceType: [
    "Aplikacje webowe",
    "Backend i API",
    "Automatyzacje",
    "Integracje API",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
