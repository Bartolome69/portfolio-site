# Design System

## Colors (oklch)
- `--paper`: oklch(0.97 0.005 80) — warm off-white background
- `--ink`: oklch(0.18 0.01 260) — high-contrast near-black text
- `--ink-muted`: oklch(0.45 0.01 260) — secondary text
- `--rule`: oklch(0.88 0.005 80) — hairline borders
- `--accent`: oklch(0.42 0.04 250) — muted ink-blue links
- `--secondary`: oklch(0.94 0.005 80) — subtle hover/avatar surface

## Typography
- Display: Fraunces (Google Fonts), weight 500, slight negative tracking. CSS var `--font-serif-display`.
- Body: Inter (Google Fonts), weights 400/500/600. CSS var `--font-sans-text`.
- Body text at 15px, relaxed line-height.
- Section headings: Fraunces at text-lg (18px), tight tracking, ink color, hairline rule below.

## Layout
- Desktop (≥1024px): two columns inside max-w-5xl. Sticky left sidebar (w-60) + right content (max-w-2xl).
- Mobile (<1024px): sticky top bar with avatar + name, hamburger dropdown for nav. Content full-width with px-5 padding.
- Sections separated by 16-unit vertical spacing (space-y-16).

## Components
- Circular avatar with object-cover, border-rule border
- Section headings with hairline rule below
- Work items: title left + year right, description below, divided by hairlines
- Now list: accent-colored bullet dots
- Contact links: accent underline with partial opacity decoration
- Sidebar nav: serif font, muted color, hover to ink
