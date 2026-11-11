import { Analytics } from "@vercel/analytics/next";
import { jsonLd } from "@/lib/site";
import type { Lang } from "@/lib/i18n";

export function RootShell({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
