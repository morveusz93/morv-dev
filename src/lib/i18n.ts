export type Lang = "pl" | "en";

export const EMAIL = "morv@morv.dev";

const pl = {
  meta: {
    title: "Morv | Mateusz Portka",
    description:
      "Python backend developer i Tech Lead. Buduję aplikacje webowe, API i automatyzacje, które działają pod dużym ruchem. FastAPI · Next.js · Kubernetes.",
    ogLocale: "pl_PL",
    jsonLdDescription:
      "Aplikacje webowe, backend w Pythonie, integracje i automatyzacje. FastAPI, Next.js, Kubernetes.",
    serviceType: [
      "Aplikacje webowe",
      "Backend i API",
      "Automatyzacje",
      "Integracje API",
    ],
  },
  paths: { home: "/", privacy: "/polityka-prywatnosci" },
  nav: {
    items: [
      { label: "O mnie", href: "#about" },
      { label: "Projekty", href: "#projects" },
      { label: "Doświadczenie", href: "#experience" },
      { label: "Współpraca", href: "#collaboration" },
      { label: "Kontakt", href: "#contact" },
    ],
    toTop: "Przejdź na górę strony",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    switchLabel: "Read in English",
  },
  hero: {
    lead: "Od 2022 roku rozwijam systemy dla jednych z największych polskich serwisów internetowych. Po godzinach biorę wybrane projekty: aplikacje, integracje i automatyzacje.",
    primary: "Zobacz projekty",
    secondary: "Napisz do mnie",
    terminalLabel:
      "Terminal z pracą backend developera: testy, migracje bazy, wdrożenia na Kubernetes i kilka żartów.",
  },
  about: {
    title: "Kilka słów o mnie",
    paragraphs: [
      "Najlepiej czuję się tam, gdzie aplikacja musi działać szybko, stabilnie i pod obciążeniem: API w Pythonie, kolejki, bazy danych, CI/CD i Kubernetes. Lubię rozumieć, co dzieje się pod spodem, i projektuję tak, żeby przy pierwszym większym ruchu nic się nie posypało.",
      "Jako Tech Lead pilnuję, żeby kod dało się utrzymać także za rok: wspólne standardy w zespole, code review, które czegoś uczy, i pipeline, który łapie błędy przed produkcją.",
    ],
    highlights: [
      { label: "Forma współpracy", value: "B2B · zdalnie" },
      { label: "Rola", value: "Python backend · Tech Lead" },
      { label: "Główny stack", value: "Python · FastAPI · Next.js" },
    ],
  },
  projects: {
    title: "Projekty",
    subtitle: "Rzeczy, które zbudowałem poza godzinami pracy.",
    pipepulse:
      "Dashboard agregujący pipeline'y z wielu projektów GitLab w jednym miejscu. Pokazuje historię, trendy, MTTR i logi failujących jobów bez wychodzenia z widoku. Tryb demo działa bez konfiguracji.",
    pipepulseAlt:
      "pipepulse dashboard — widok pipeline'ów z pulsem i rozwiniętym logiem błędu",
  },
  experience: {
    title: "Doświadczenie",
    subtitle:
      "Od 2022 roku w jednym z największych polskich wydawnictw internetowych. Czym zajmuję się na co dzień:",
    items: [
      {
        title: "Tech Lead scrumowego zespołu",
        description:
          "Prowadzę zespół programistów: planowanie sprintów, code review, standardy w kodzie i onboarding nowych osób.",
      },
      {
        title: "Backend pod dużym ruchem",
        description:
          "Rozwijam backend w Pythonie dla serwisów, z których codziennie korzystają miliony użytkowników.",
      },
      {
        title: "CI/CD i Kubernetes",
        description:
          "Utrzymuję pipeline'y GitLab CI i wdrożenia na Kubernetes: stabilność, czas buildów, bezpieczne releasy.",
      },
      {
        title: "Wydajność i infrastruktura",
        description:
          "Biorę udział w decyzjach infrastrukturalnych: wydajność, cache, CDN i to, jak system zachowuje się pod obciążeniem.",
      },
    ],
  },
  collaboration: {
    title: "Współpraca",
    intro:
      "Po godzinach realizuję wybrane projekty dla firm. Najchętniej takie, w których liczy się solidny backend.",
    cards: [
      {
        label: "APP",
        title: "Aplikacje webowe",
        description:
          "Narzędzia do obsługi konkretnego procesu w firmie, od pierwszej wersji po rozwój po wdrożeniu.",
        points: [
          "panele i narzędzia wewnętrzne",
          "systemy obsługujące konkretny proces",
          "użytkownicy, role i uprawnienia",
        ],
      },
      {
        label: "BACKEND",
        title: "Backend i automatyzacje",
        description:
          "Logika i przetwarzanie danych tam, gdzie ich miejsce, zamiast ręcznej pracy i arkuszy.",
        points: [
          "API i logika backendowa",
          "przetwarzanie danych i raporty",
          "zadania cykliczne i powiadomienia",
          "integracje AI",
        ],
      },
      {
        label: "INTEGRACJE",
        title: "Integracje",
        description:
          "Łączenie systemów tak, żeby dane przepływały same, bez przepisywania między narzędziami.",
        points: [
          "CRM, płatności, zewnętrzne API",
          "webhooki i obsługa zdarzeń",
          "synchronizacja danych między systemami",
        ],
      },
    ],
    note: "Robię też strony firmowe, jeśli są częścią większej całości.",
    howLabel: "Jak pracuję:",
    how: "krótka rozmowa o problemie, konkretna wycena z zakresem, praca w iteracjach z wglądem w postępy, wdrożenie i przekazanie kodu.",
    pricingLabel: "Wycena",
    pricing: "po krótkiej rozmowie",
  },
  stack: {
    title:
      "Nieważne jakich narzędzi używasz, liczy się to, co potrafisz nimi osiągnąć.",
    subtitle:
      "Wybieram technologie pod problem — tak, żeby dowieźć wynik szybko i bez zbędnej komplikacji.",
    categories: [
      "Backend",
      "Frontend",
      "Bazy i dane",
      "DevOps / infrastruktura",
      "Integracje",
      "Monitoring",
    ],
  },
  contact: {
    title: "Masz projekt albo propozycję współpracy?",
    text: "Napisz kilka zdań o tym, co budujesz. Odpowiadam w ciągu 1–2 dni roboczych.",
    name: "Imię",
    email: "Email",
    message: "Wiadomość",
    namePlaceholder: "Jan Kowalski",
    emailPlaceholder: "jan@firma.pl",
    messagePlaceholder: "Co budujesz i w czym mogę pomóc?",
    send: "Wyślij wiadomość",
    sending: "Wysyłanie…",
    success: "Wiadomość wysłana. Odezwę się wkrótce.",
    again: "Wyślij kolejną wiadomość",
    direct: "lub napisz bezpośrednio:",
    error: "Błąd wysyłki. Spróbuj ponownie.",
  },
  seo: {
    title: "Python backend developer i Tech Lead",
    body: "Buduję aplikacje webowe, API i automatyzacje w Pythonie (FastAPI, Django) z frontendem w Next.js, wdrażane przez GitLab CI na Kubernetes. Na co dzień rozwijam systemy działające pod dużym ruchem i prowadzę zespół programistów. Jeśli szukasz backend developera do projektu albo współpracy B2B, napisz.",
  },
  footer: {
    tagline: "Mateusz · Python backend, aplikacje webowe i automatyzacje.",
    privacy: "Polityka prywatności",
  },
  privacy: {
    metaTitle: "Polityka prywatności",
    metaDescription: "Informacja o przetwarzaniu danych osobowych przez Morv.",
    back: "← Wróć na stronę główną",
    title: "Polityka prywatności",
    updated: "Ostatnia aktualizacja: czerwiec 2026",
    sections: [
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
    ],
  },
};

export type Dict = typeof pl;

const en: Dict = {
  meta: {
    title: "Morv | Mateusz Portka",
    description:
      "Python backend developer and Tech Lead. I build web apps, APIs and automation that run under heavy traffic. FastAPI · Next.js · Kubernetes.",
    ogLocale: "en_US",
    jsonLdDescription:
      "Web applications, Python backends, integrations and automation. FastAPI, Next.js, Kubernetes.",
    serviceType: [
      "Web applications",
      "Backend and APIs",
      "Automation",
      "API integrations",
    ],
  },
  paths: { home: "/en", privacy: "/en/privacy" },
  nav: {
    items: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contracts", href: "#collaboration" },
      { label: "Contact", href: "#contact" },
    ],
    toTop: "Back to top",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLabel: "Czytaj po polsku",
  },
  hero: {
    lead: "Since 2022 I've been building systems for some of the largest web platforms in Poland. Open to B2B contracts and selected projects: web apps, integrations and automation.",
    primary: "See projects",
    secondary: "Get in touch",
    terminalLabel:
      "Terminal showing a backend developer's day: tests, database migrations, Kubernetes deployments and a few jokes.",
  },
  about: {
    title: "About me",
    paragraphs: [
      "I do my best work where an application has to be fast, stable and hold up under load: Python APIs, queues, databases, CI/CD and Kubernetes. I like to understand what happens under the hood, and I design systems so nothing falls over the first time traffic spikes.",
      "As a Tech Lead I make sure the code is still maintainable a year from now: shared standards in the team, code review that actually teaches something, and a pipeline that catches bugs before production.",
    ],
    highlights: [
      { label: "Work model", value: "B2B · remote" },
      { label: "Role", value: "Python backend · Tech Lead" },
      { label: "Main stack", value: "Python · FastAPI · Next.js" },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Things I've built outside of work.",
    pipepulse:
      "A dashboard that brings pipelines from many GitLab projects into one view. It shows history, trends, MTTR and failed job logs without leaving the page. Demo mode works with zero setup.",
    pipepulseAlt:
      "pipepulse dashboard — pipeline list with pulse bars and an expanded failure log",
  },
  experience: {
    title: "Experience",
    subtitle:
      "Since 2022 at one of the largest web publishers in Poland. What I do day to day:",
    items: [
      {
        title: "Tech Lead of a Scrum team",
        description:
          "I lead a team of developers: sprint planning, code review, coding standards and onboarding new people.",
      },
      {
        title: "Backend under heavy traffic",
        description:
          "I build Python backends for platforms used by millions of people every day.",
      },
      {
        title: "CI/CD and Kubernetes",
        description:
          "I maintain GitLab CI pipelines and Kubernetes deployments: stability, build times and safe releases.",
      },
      {
        title: "Performance and infrastructure",
        description:
          "I take part in infrastructure decisions: performance, caching, CDN and how the system behaves under load.",
      },
    ],
  },
  collaboration: {
    title: "Contracts & consulting",
    intro:
      "I'm open to B2B contracts and selected projects, especially ones where a solid backend matters.",
    cards: [
      {
        label: "APP",
        title: "Web applications",
        description:
          "Tools built around a specific business process, from the first version to ongoing development.",
        points: [
          "internal tools and admin panels",
          "systems built around a specific process",
          "users, roles and permissions",
        ],
      },
      {
        label: "BACKEND",
        title: "Backend & automation",
        description:
          "Business logic and data processing where they belong, instead of manual work and spreadsheets.",
        points: [
          "APIs and backend logic",
          "data processing and reports",
          "scheduled jobs and notifications",
          "AI integrations",
        ],
      },
      {
        label: "INTEGRATIONS",
        title: "Integrations",
        description:
          "Connecting systems so data flows on its own, without copying it between tools.",
        points: [
          "CRM, payments, third-party APIs",
          "webhooks and event handling",
          "data sync between systems",
        ],
      },
    ],
    note: "Also available for longer B2B contracts as a backend developer or Tech Lead.",
    howLabel: "How I work:",
    how: "a short call about the problem, a clear quote with scope, iterative work with visible progress, then deployment and code handover.",
    pricingLabel: "Pricing",
    pricing: "after a short call",
  },
  stack: {
    title: "Tools matter less than what you build with them.",
    subtitle:
      "I pick technologies to fit the problem, so results ship fast and without unnecessary complexity.",
    categories: [
      "Backend",
      "Frontend",
      "Databases & data",
      "DevOps / infrastructure",
      "Integrations",
      "Monitoring",
    ],
  },
  contact: {
    title: "Have a project or a role in mind?",
    text: "Tell me in a few sentences what you're building. I reply within 1–2 business days.",
    name: "Name",
    email: "Email",
    message: "Message",
    namePlaceholder: "Jane Smith",
    emailPlaceholder: "jane@company.com",
    messagePlaceholder: "What are you building and how can I help?",
    send: "Send message",
    sending: "Sending…",
    success: "Message sent. I'll get back to you soon.",
    again: "Send another message",
    direct: "or email me directly:",
    error: "Something went wrong. Please try again.",
  },
  seo: {
    title: "Python backend developer and Tech Lead",
    body: "I build web apps, APIs and automation in Python (FastAPI, Django) with Next.js frontends, shipped through GitLab CI to Kubernetes. Day to day I work on systems under heavy traffic and lead a team of developers. If you need a backend developer for a project or a B2B contract, get in touch.",
  },
  footer: {
    tagline: "Mateusz · Python backend, web apps and automation.",
    privacy: "Privacy policy",
  },
  privacy: {
    metaTitle: "Privacy policy",
    metaDescription: "How Morv processes personal data.",
    back: "← Back to home page",
    title: "Privacy policy",
    updated: "Last updated: June 2026",
    sections: [
      {
        title: "1. Data controller",
        body: `The controller of your personal data is Mateusz Portka, doing business as Morv, email: ${EMAIL} (the "Controller").`,
      },
      {
        title: "2. What data we collect and why",
        body: `Through the contact form on morv.dev we collect your name, email address and the content of your message. This data is processed solely to respond to your enquiry (Art. 6(1)(f) GDPR — the Controller's legitimate interest).`,
      },
      {
        title: "3. How long we keep data",
        body: `Data is kept for as long as needed to handle your enquiry and any resulting collaboration, and no longer than 12 months after the last contact.`,
      },
      {
        title: "4. Recipients",
        body: `Messages are delivered via Resend (resend.com), which processes the data as a processor. Data is not shared with any other parties or transferred outside the European Economic Area.`,
      },
      {
        title: "5. Your rights",
        body: `You have the right to access, rectify and erase your data, to restrict processing and to object. You can also lodge a complaint with the Polish supervisory authority, the President of the Personal Data Protection Office (uodo.gov.pl). To exercise these rights, email ${EMAIL}.`,
      },
      {
        title: "6. Cookies",
        body: `morv.dev does not use cookies for analytics or advertising. We do not profile users or use tracking tools.`,
      },
    ],
  },
};

const DICTS: Record<Lang, Dict> = { pl, en };

export function getDict(lang: Lang): Dict {
  return DICTS[lang];
}
