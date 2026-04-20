# Yanabiya Group

Corporate website for **Yanabiya Group** — a diversified global conglomerate.

Built with Vite + React + TypeScript + Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

App runs on http://localhost:8080.

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/components/Navbar.tsx` — sticky navigation with 13-item menu
- `src/components/Hero.tsx` — hero section with gradient backdrop and stats
- `src/components/Sections.tsx` — all content sections (About, Businesses, Solutions, Partnerships, Global Presence, Impact & CSR, Network, Leadership, Strategy & Innovation, Insights, Careers, Contact)
- `src/components/Footer.tsx` — footer with sitemap + newsletter
- `src/lib/nav.ts` — navigation config (single source of truth)
- `tailwind.config.ts` — design tokens (brand green + gold)
