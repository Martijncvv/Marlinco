# Small Business Starter

A fast, mobile-first website template for trade and service businesses —
handymen, landscapers, builders, and more. Built with [Astro 6](https://astro.build)
and [Tailwind CSS v4](https://tailwindcss.com). Ready to deploy on
[Netlify](https://netlify.com). This repository is currently the live site for
**Marlinco** (Papendrecht) and doubles as the reusable template.

---

## What's included

- Homepage with Hero, Trust Bar, Recent Projects, Reviews, About, and Contact sections
- Per-service pages with feature cards and FAQ structured data
- Contact form via Netlify Forms + a confirmation page
- SEO-ready: `<title>`, meta descriptions, canonical URLs, Open Graph, JSON-LD,
  sitemap, robots.txt
- Mobile-first layout with a hamburger drawer nav and sticky desktop header
- Astro View Transitions for smooth navigation
- Self-hosted Google Fonts via Astro's built-in font API
- A design-token system where **`brand.ts` is the single source of truth** for
  colors, fonts, and the domain — `theme.css` and `site.webmanifest` are generated

---

## Quick start

```bash
pnpm install       # uses pnpm — do NOT use npm or yarn
pnpm run dev       # → http://localhost:4321
pnpm run build     # production build to ./dist/
pnpm run preview   # preview the production build
```

Requires **Node 22.12+** (pinned in `.nvmrc`).

---

## Customising for a client

Full step-by-step checklist: **[docs/NEW-CLIENT.md](docs/NEW-CLIENT.md)**. In short,
you only edit data/copy/images — never the components or pages:

| What | Where |
|---|---|
| Name, tagline, domain, fonts, colors | `src/config/brand.ts` → then `pnpm run generate:theme` |
| Phone, email, address, socials, service areas | `src/data/client.ts` |
| Services (pages, cards, nav, SEO, FAQ) | `src/data/services.ts` |
| Marketing copy (home + shared) | `src/data/content/` (`home.ts`, `site.ts`) |
| Reviews | `src/data/reviews.ts` |
| Images | `src/assets/images/` + `src/config/images.ts` |
| Favicons + OG image | `public/` |

### The theme is generated — don't hand-sync it

Colors, radius, fonts, and the domain live **only** in `src/config/brand.ts`.
Running `pnpm run generate:theme` writes the Tailwind `@theme` tokens into
`src/styles/theme.css` (between the `/* GENERATED */` markers) and refreshes
`public/site.webmanifest`. It runs automatically before `dev` and `build`, and on
every Netlify deploy. The domain flows from `brand.url` into `astro.config.mjs`
(`site`) and `client.domain` automatically — set it in one place.

---

## Project structure

```
├── public/                     # Static files (favicons, og-image.jpg — site.webmanifest is generated)
├── scripts/
│   └── generate-theme.ts       # Writes theme.css + site.webmanifest from brand.ts
├── src/
│   ├── components/             # Presentational .astro sections (copy comes from data/)
│   ├── config/
│   │   ├── brand.ts            # ✏️  Single source of truth: identity, domain, fonts, colors
│   │   └── images.ts           # Image wiring + auto-discovery
│   ├── data/
│   │   ├── client.ts           # ✏️  Business contact info + service areas
│   │   ├── services.ts         # ✏️  One record per service (drives pages, nav, cards, FAQ)
│   │   ├── reviews.ts          # ✏️  Testimonials
│   │   └── content/            # ✏️  All page copy (home.ts, site.ts)
│   ├── layouts/
│   │   └── BaseLayout.astro    # HTML shell: SEO, fonts, WhatsApp FAB
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── overkappingen-schuren.astro
│   │   ├── tuinaanleg.astro
│   │   ├── schuttingen.astro
│   │   └── contact/success.astro
│   └── styles/
│       ├── global.css          # Base styles, dark mode, reduced motion
│       └── theme.css           # GENERATED design tokens (edit brand.ts, not this)
├── astro.config.mjs            # Reads brand.ts for site URL + font names
└── netlify.toml                # Build + security headers
```

Files marked ✏️ are the ones you edit per client.

---

## Deploying to Netlify

1. Push to a GitHub repository.
2. In Netlify: **Add new site → Import an existing project**, connect the repo.
3. Netlify auto-detects the build from `netlify.toml`.
4. Set the live domain once in `src/config/brand.ts` (`url`) — everything else derives from it.

`netlify.toml` already includes security headers and immutable caching for hashed
assets. The contact form works out of the box via Netlify Forms (see
`docs/NEW-CLIENT.md` for the form rules).

---

## Tech stack

| Tool | Version | Purpose |
|---|---|---|
| [Astro](https://astro.build) | 6 | Framework & static site generator |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling (CSS-variable theming) |
| [Netlify](https://netlify.com) | — | Hosting, forms, CDN |
| [pnpm](https://pnpm.io) | 11 | Package manager |

## Commands

| Command | What it does |
|---|---|
| `pnpm install` | Install dependencies |
| `pnpm run dev` | Dev server at `localhost:4321` (regenerates the theme first) |
| `pnpm run build` | Production build to `./dist/` (regenerates the theme first) |
| `pnpm run preview` | Preview the production build |
| `pnpm run generate:theme` | Regenerate `theme.css` + `site.webmanifest` from `brand.ts` |
| `pnpm test` | Run the Playwright test suite |
