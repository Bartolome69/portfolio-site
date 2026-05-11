# CLAUDE.md

## What This Is

Personal portfolio website for Bart Etcheverry.

## Commands

```bash
npm run dev      # Start Vite dev server on port 3000
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # TypeScript check
```

## Architecture

**Stack**: TanStack Start v1 (React 19, Vite 8, file-based routing) + Tailwind CSS v4 + TypeScript strict

**Routes**: Single page at `/` with section IDs for in-page nav (intro, now, work, about, contact).

**Key files**:
- `src/lib/portfolio-content.ts` — All copy, nav items, JSON-LD schema
- `src/components/sidebar.tsx` — Desktop sticky sidebar + mobile hamburger header
- `src/components/sections.tsx` — Content sections
- `src/routes/index.tsx` — Home page composing sidebar + sections
- `src/routes/__root.tsx` — HTML shell, fonts, meta tags
- `src/styles.css` — Tailwind theme tokens (oklch palette)

**Fonts**: Fraunces (serif display) + Inter (sans body) via Google Fonts.

**Deploy**: Configured via `vite.config.ts`. Add Cloudflare Workers preset when ready to deploy.

## Environment

No env vars required. Cookie-free, no analytics.
