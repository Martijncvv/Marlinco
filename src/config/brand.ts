/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION — Marlinco
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  name: 'Marlinco',
  tagline: 'Uw idee, ons vakmanschap.',
  description:
    'Marlinco is uw partner voor alle klussen in en om huis. Gespecialiseerd in overkappingen, schuren, bestrating en schuttingen in de regio Papendrecht.',
  url: 'https://www.marlinco.nl',
  locale: 'nl_NL',

  fonts: {
    body: 'Inter',
    display: 'Oswald',
  },

  colors: {
    primary:      '#182754',
    primaryLight: '#2A3F7E',
    primaryFg:    '#ffffff',

    accent:       '#F97316',
    accentFg:     '#ffffff',

    background:   '#ffffff',
    surface:      '#F8FAFC',
    border:       '#E2E8F0',

    text:         '#0F172A',
    textMuted:    '#475569',

    dark:         '#0F172A',
    darkSurface:  '#1E293B',
  },

  radius: {
    sm:   '0.375rem',
    md:   '0.625rem',
    lg:   '1rem',
    full: '9999px',
  },
} as const;

export type Brand = typeof brand;
