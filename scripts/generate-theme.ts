/**
 * ─────────────────────────────────────────────────────────────────────────────
 * THEME CODEGEN
 *
 * Single source of truth for the site's visual identity is src/config/brand.ts.
 * This script projects brand.colors / brand.radius / brand.name into the two
 * places that can't import TypeScript at runtime:
 *
 *   1. src/styles/theme.css   — the Tailwind v4 @theme color + radius tokens
 *                               (only the region between GENERATED markers).
 *   2. public/site.webmanifest — PWA name + theme/background colors.
 *
 * Run manually with `pnpm run generate:theme`. It also runs automatically via
 * the `predev` and `prebuild` npm lifecycle hooks, so dev and Netlify builds
 * always start from brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { brand } from '../src/config/brand.ts';

const here = dirname(fileURLToPath(import.meta.url));
const themePath = resolve(here, '../src/styles/theme.css');
const manifestPath = resolve(here, '../public/site.webmanifest');

/** Align `--name: value;` rows so every value starts at the same column. */
function align(rows: [string, string][]): string {
  const width = Math.max(...rows.map(([name]) => `${name}:`.length));
  return rows
    .map(([name, value]) => `  ${`${name}:`.padEnd(width)} ${value};`)
    .join('\n');
}

const colorRows: [string, string][] = [
  ['--color-primary', brand.colors.primary],
  ['--color-primary-light', brand.colors.primaryLight],
  ['--color-primary-fg', brand.colors.primaryFg],
  ['--color-accent', brand.colors.accent],
  ['--color-accent-fg', brand.colors.accentFg],
  ['--color-background', brand.colors.background],
  ['--color-surface', brand.colors.surface],
  ['--color-border', brand.colors.border],
  ['--color-text', brand.colors.text],
  ['--color-text-muted', brand.colors.textMuted],
  ['--color-dark', brand.colors.dark],
  ['--color-dark-surface', brand.colors.darkSurface],
];

// Split the aligned color rows back into their three commented groups.
const colorLines = align(colorRows).split('\n');
const brandColors = colorLines.slice(0, 5).join('\n');
const neutralScale = colorLines.slice(5, 10).join('\n');
const darkMode = colorLines.slice(10, 12).join('\n');

const radius = align([
  ['--radius-sm', brand.radius.sm],
  ['--radius-md', brand.radius.md],
  ['--radius-lg', brand.radius.lg],
  ['--radius-full', brand.radius.full],
]);

const generatedBlock = `  /* GENERATED:START — from src/config/brand.ts. Do not edit by hand. */
  /* ── Brand Colors ───────────────────────────────────────────────── */
${brandColors}

  /* ── Neutral Scale ──────────────────────────────────────────────── */
${neutralScale}

  /* ── Dark Mode ──────────────────────────────────────────────────── */
${darkMode}

  /* ── Border Radius ──────────────────────────────────────────────── */
${radius}
  /* GENERATED:END */`;

// ── Write theme.css (replace only the GENERATED region) ─────────────────────
const themeSrc = readFileSync(themePath, 'utf8');
const marker = /  \/\* GENERATED:START[\s\S]*?GENERATED:END \*\//;
if (!marker.test(themeSrc)) {
  throw new Error(
    `GENERATED markers not found in ${themePath}. ` +
      'Restore the /* GENERATED:START */ … /* GENERATED:END */ fence.',
  );
}
const nextTheme = themeSrc.replace(marker, generatedBlock);
if (nextTheme !== themeSrc) {
  writeFileSync(themePath, nextTheme);
  console.log('✓ theme.css color/radius tokens updated from brand.ts');
} else {
  console.log('• theme.css already in sync');
}

// ── Write site.webmanifest ──────────────────────────────────────────────────
const manifest = `{
  "name": "${brand.name}",
  "short_name": "${brand.name}",
  "icons": [
    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "${brand.colors.primary}",
  "background_color": "${brand.colors.background}",
  "display": "standalone"
}
`;
const currentManifest = readFileSync(manifestPath, 'utf8');
if (currentManifest !== manifest) {
  writeFileSync(manifestPath, manifest);
  console.log('✓ site.webmanifest updated from brand.ts');
} else {
  console.log('• site.webmanifest already in sync');
}
