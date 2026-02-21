import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://morv.dev"),
  title: {
    default: "Morv | Strony internetowe dla firm",
    template: "%s | Morv",
  },
  description:
    "Projektuję szybkie i skuteczne strony internetowe dla małych firm. Landing page, strony firmowe, modernizacja i SEO.",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    title: "Morv | Strony internetowe dla firm",
    description: "Profesjonalna strona w zasięgu Twojej ręki.",
    url: "https://morv.dev",
    siteName: "Morv",
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
