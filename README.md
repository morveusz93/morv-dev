# morv-dev

Source of [morv.dev](https://morv.dev), my personal site: Python backend, DevOps, Tech Lead.
Polish at `/`, English at [`/en`](https://morv.dev/en).

## Stack

- Next.js (App Router), TypeScript
- Tailwind CSS, shadcn/ui, Framer Motion
- Resend for the contact form
- Vercel hosting and Web Analytics (no cookies)

## What's inside

- Two languages from one dictionary (`src/lib/i18n.ts`), with `hreflang`, a sitemap covering both and a shared OG image
- Animated terminal in the hero (`DeployTerminal.tsx`): realistic dev and ops sessions in random order, a few easter eggs, paused off-screen and static with reduced motion
- Contact form posting to a server route that sends mail through Resend

## Run locally

```bash
npm install
npm run dev
```

The contact form needs `.env.local` with `RESEND_API_KEY` and `CONTACT_EMAIL`.
