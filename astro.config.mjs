// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://www.marlinco.nl',
  output: 'static',

  integrations: [
    sitemap({
      // Bedankt-/bevestigingspagina's horen niet in de zoekresultaten. Deze
      // dragen ook `noindex` — de sitemap moet dat niet tegenspreken.
      filter: (page) => !page.includes('/contact/success'),
    }),
    robotsTxt(),
  ],

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Oswald',
      cssVariable: '--font-display',
      weights: ['400', '600', '700'],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
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
