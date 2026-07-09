// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { brand } from './src/config/brand.ts';

export default defineConfig({
  // Single source of truth: the domain lives in src/config/brand.ts (brand.url).
  site: brand.url,
  output: 'static',

  integrations: [sitemap(), robotsTxt()],

  // Font names are sourced from brand.fonts so a font swap is a one-file edit.
  fonts: [
    {
      provider: fontProviders.google(),
      name: brand.fonts.display,
      cssVariable: '--font-display',
      weights: ['400', '600', '700'],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: brand.fonts.body,
      cssVariable: '--font-body',
      weights: ['400', '500', '700'],
      styles: ['normal'],
    },
  ],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
