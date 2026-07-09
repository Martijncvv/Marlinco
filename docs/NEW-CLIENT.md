# Launching a new client site

This project is built to be cloned and re-skinned per client. Everything a new
site needs is data, copy, images, and favicons — you should not have to touch the
`.astro` components or pages. Work down this checklist top to bottom.

> Node **22.12+** is required (`.nvmrc` pins it). Use `pnpm`, not npm/yarn.

---

## 1. Identity, domain & theme — `src/config/brand.ts`

The single source of truth for the brand. Set:

- `name`, `tagline`, `description` — used in the header, footer, SEO, and Open Graph.
- `url` — the live domain. **This one value feeds `astro.config.mjs` (`site`) and
  `client.domain` automatically** — do not repeat the domain anywhere else.
- `locale` — e.g. `nl_NL`, `en_US` (drives `<html lang>` and `og:locale`).
- `fonts.body` / `fonts.display` — Google Font names. These feed the font loader in
  `astro.config.mjs` automatically; you only need to adjust the weights there if the
  new fonts don't ship 400/500/600/700.
- `colors` and `radius` — the full palette.

**After editing colors/radius run:**

```bash
pnpm run generate:theme
```

This regenerates `src/styles/theme.css` (the Tailwind `@theme` tokens) and
`public/site.webmanifest` from `brand.ts`. It also runs automatically before
`pnpm dev` and `pnpm build`, so you rarely need to run it by hand. The
`theme-color` meta tag reads `brand.colors.primary` directly.

## 2. Contact & business data — `src/data/client.ts`

Phone, email, `license` (KvK/BTW — leave `''` to hide), address + `mapLink`,
`socials` (leave `''` to hide an icon), and `serviceAreas` (the towns you serve —
also used to auto-detect a photo's location from its filename, see step 5).

## 3. Services — `src/data/services.ts`

One record per service. Each drives the service page, the homepage "Recente
projecten" columns, the Services grid cards, and the header nav — all from this
one array. For each service set: `slug` (the page lives at `src/pages/<slug>.astro`
and the route is `/<slug>`), `navLabel`, `name`, `cardDescription`, `seo`,
`page` (intro heading/body + CTA label), `schema`, and the `features` list (which
double as FAQ structured data).

Adding/removing a service also means adding/removing the matching
`src/pages/<slug>.astro` file (copy an existing one — they're thin, they just read
`serviceBySlug['<slug>']`) and the image folder in step 5.

## 4. Copy — `src/data/content/`

All marketing prose lives here so components stay presentational:

- `home.ts` — hero, trust bar, about, and the section headings for services,
  projects, reviews, plus the CTA block.
- `site.ts` — footer work-area line, contact heading/subcopy, WhatsApp prefill
  message, gallery CTA, and the form success page.

Reviews are in `src/data/reviews.ts`.

## 5. Images — `src/assets/images/` + `src/config/images.ts`

Images in `src/assets/` are optimized by Astro at build (WebP/AVIF, responsive
`srcset`). Folders:

- `branding/` — the logo (referenced by `src/components/Header.astro`).
- `hero/`, `about/` — wired in `src/config/images.ts`.
- `gallery/` — auto-discovered; the filename becomes the caption. Prefix a file
  with a town from `serviceAreas` (e.g. `dordrecht-terras.jpg`) to auto-tag its
  location.
- `services/<slug>/` — per-service photos, with a `metadata.json` mapping
  `filename → alt text`.

If a folder is empty, Unsplash placeholders are used so the site still looks
complete. When there are no local images, the hardcoded picked filenames in
`serviceProjects` (bottom of `images.ts`) fall back to placeholders automatically.

## 6. Favicons & OG image — `public/`

Replace `favicon.svg`, `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`,
`apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`,
and `og-image.jpg` (1200×630). `site.webmanifest` is generated from `brand.ts` —
don't hand-edit it.

## 7. Deploy config — `netlify.toml`

Build command, Node version, and security headers are preset. The contact form
uses Netlify Forms — **do not rename** the form's `name="contact"`, the hidden
`form-name` input, or the `action="/contact/success"` in
`src/components/ContactForm.astro`; Netlify registers the form from the static
HTML at build time.

## 8. Project metadata — `package.json`

Update `name`, `description`, `author`, and `keywords`.

---

## Verify before shipping

```bash
pnpm install
pnpm run build          # runs generate:theme, then astro build
pnpm run preview        # inspect the production build locally
```

Then spot-check: the header/footer show the right name and contact details, each
service page renders its copy, the contact form submits to `/contact/success`, and
`view-source` shows correct `<title>`, meta description, and JSON-LD.
