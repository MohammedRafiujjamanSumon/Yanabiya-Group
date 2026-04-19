# Yanabiya-Group — ID Preview

A lightweight ID card preview studio for Yanabiya Group. Fill out the form on
the left, watch the card update live on the right, then Print / Save as PDF.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and produce a production build in `dist/`
- `npm run preview` — preview the production build locally

## Features

- Three templates: Employee, Visitor, Contractor (different accent colors)
- Live preview of the card as you type
- Photo upload with instant preview (stored in-memory as a data URL)
- Print / Save as PDF (uses browser print with a `@media print` stylesheet
  that isolates the card)
