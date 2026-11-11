import type { Metadata } from "next";
import { getDict, type Lang } from "./i18n";

export const SITE_URL = "https://morv.dev";

const ICONS: Metadata["icons"] = {
  icon: [
    { url: "/favicon/favicon.ico" },
    { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
  ],
  apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  other: [{ rel: "manifest", url: "/favicon/site.webmanifest" }],
};

/** Root-layout metadata for one language version of the site. */
export function siteMetadata(lang: Lang): Metadata {
  const { meta, paths } = getDict(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: meta.title, template: "%s | morv.dev" },
    description: meta.description,
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      title: meta.title,
      description: meta.description,
      url: paths.home,
      siteName: "morv.dev",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    icons: ICONS,
  };
}

/** hreflang alternates for the home pages. */
export function homeAlternates(lang: Lang): Metadata["alternates"] {
  return {
    canonical: getDict(lang).paths.home,
    languages: {
      pl: getDict("pl").paths.home,
      en: getDict("en").paths.home,
      "x-default": getDict("pl").paths.home,
    },
  };
}

export function jsonLd(lang: Lang) {
  const { meta, paths } = getDict(lang);
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Morv",
    url: `${SITE_URL}${paths.home === "/" ? "" : paths.home}`,
    description: meta.jsonLdDescription,
    inLanguage: lang,
    founder: {
      "@type": "Person",
      name: "Mateusz Portka",
      jobTitle: "Python Backend Developer & Tech Lead",
      knowsAbout: [
        "Python",
        "FastAPI",
        "Django",
        "Next.js",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "GitLab CI",
      ],
      sameAs: [
        "https://www.linkedin.com/in/mateusz-portka-552b18206",
        "https://github.com/morveusz93",
      ],
    },
    areaServed: lang === "pl" ? "PL" : ["PL", "EU"],
    serviceType: meta.serviceType,
  };
}
