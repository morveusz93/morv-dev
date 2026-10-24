# morv-dev

Source code for [morv.dev](https://morv.dev) — a business landing page for B2B freelance services.

## Stack

- **Next.js** (App Router) · TypeScript
- **Tailwind CSS** · shadcn/ui · Framer Motion
- **Resend** — contact form email delivery
- **Vercel Analytics**

## Features

- Single-page layout: hero → services → process → contact
- Native SEO (metadata, Open Graph, sitemap, robots.txt)
- Responsive, mobile-first
- Contact form with server-side email via Resend

## Run locally

```bash
npm install
npm run dev
```

Requires `.env.local` with `RESEND_API_KEY`.
