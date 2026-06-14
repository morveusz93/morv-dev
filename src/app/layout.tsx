import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://morv.dev"),
  title: {
    default: "Morv | Strony internetowe i backend dla firm",
    template: "%s | Morv",
  },
  description:
    "Programista full-stack (Python, Next.js, DevOps). Tworzę strony firmowe, aplikacje backendowe i automatyzacje dla małych i średnich firm.",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    title: "Morv | Strony internetowe i backend dla firm",
    description:
      "Strony firmowe, integracje, automatyzacje i małe aplikacje webowe. Backend Python · Next.js · DevOps.",
    url: "https://morv.dev",
    siteName: "Morv",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morv | Strony internetowe i backend dla firm",
    description:
      "Strony firmowe, integracje, automatyzacje i małe aplikacje webowe. Backend Python · Next.js · DevOps.",
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
    "Tworzę strony firmowe, aplikacje backendowe i automatyzacje dla małych i średnich firm. Python, Next.js, DevOps.",
  founder: {
    "@type": "Person",
    name: "Mateusz Portka",
    jobTitle: "Full-stack Developer",
    knowsAbout: ["Python", "FastAPI", "Django", "Next.js", "Docker", "PostgreSQL"],
    sameAs: ["https://www.linkedin.com/in/mateusz-portka-552b18206"],
  },
  areaServed: "PL",
  serviceType: [
    "Strony internetowe",
    "Integracje API",
    "Automatyzacje",
    "Aplikacje webowe",
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
      </body>
    </html>
  );
}
