import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 | morv.dev",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="pl">
      <body className="antialiased">
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-[#ff5c8a]">✗</span> HTTP/2 404 Not Found
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">404</h1>
          <p className="text-muted-foreground">
            Nie ma takiej strony. · This page doesn&apos;t exist.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="/" className="link-underline">
              Strona główna
            </a>
            <a href="/en" className="link-underline">
              Home (EN)
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
