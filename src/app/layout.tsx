import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://morv.dev"),
  title: {
    default: "Morv (DreamSoft) | Strony internetowe dla firm",
    template: "%s | Morv (DreamSoft)",
  },
  description:
    "Projektuję szybkie i skuteczne strony internetowe dla małych firm. Landing page, strony firmowe, modernizacja i SEO.",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    title: "Morv (DreamSoft) | Strony internetowe dla firm",
    description: "Profesjonalna strona w zasięgu Twojej ręki.",
    url: "https://morv.dev",
    siteName: "Morv (DreamSoft)",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
