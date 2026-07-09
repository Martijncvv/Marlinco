/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SERVICES — Marlinco
 *
 * Single source of truth for the site's services. One record per service drives:
 *   • the service page (SEO, banner, intro copy, JSON-LD)  — src/pages/<slug>.astro
 *   • the homepage "Recente projecten" columns             — ProjectsByService.astro
 *   • the Services grid cards                              — Services.astro
 *   • the header navigation                                — Header.astro
 *
 * Add, remove or rename a service by editing this array. The feature blocks
 * double as visible cards on the service page AND as FAQ structured data.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { brand } from '../config/brand';

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  /** URL slug — the page lives at src/pages/<slug>.astro and the route is /<slug>. */
  slug: 'overkappingen-schuren';
  /** Short label used in the header navigation. */
  navLabel: string;
  /** Full service name — used as the page banner title, card title, and schema name. */
  name: string;
  /** One-line description for the homepage Services grid card. */
  cardDescription: string;
  /** Per-page SEO. */
  seo: { title: string; description: string };
  /** Visible intro block at the top of the service page. */
  page: { introHeading: string; introBody: string; ctaLabel: string };
  /** schema.org Service inputs. */
  schema: { serviceType: string; description: string };
  /** Feature/Q&A blocks — rendered as cards and as FAQPage structured data. */
  features: ServiceFeature[];
}

/** Route path for a service (derived from its slug). */
export const serviceHref = (slug: Service['slug']): string => `/${slug}`;

const overkappingenFeatures: ServiceFeature[] = [
  {
    title: 'Op maat gemaakt',
    description:
      'Elke overkapping en schuur wordt ontworpen en gebouwd op basis van uw wensen, de beschikbare ruimte en de stijl van uw woning.',
  },
  {
    title: 'Duurzame materialen',
    description:
      'Wij werken uitsluitend met kwalitatieve materialen die bestand zijn tegen het Nederlandse klimaat. Zo geniet u jarenlang van uw investering.',
  },
  {
    title: 'Van ontwerp tot oplevering',
    description:
      'Wij begeleiden het volledige traject: van eerste idee en ontwerp tot de uiteindelijke plaatsing en nette afwerking.',
  },
  {
    title: 'Vergunningen en regelgeving',
    description:
      'Waar nodig adviseren wij over vergunningen en zorgen wij ervoor dat alles voldoet aan de geldende bouwvoorschriften.',
  },
];

export const services: Service[] = [
  {
    slug: 'overkappingen-schuren',
    navLabel: 'Overkappingen & Schuren',
    name: 'Overkappingen & Schuren',
    cardDescription:
      'Overkappingen, veranda\'s, buitenkeukens en schuren op maat — wij ontwerpen en bouwen constructies die perfect passen bij uw woning en tuin. Duurzame materialen en een nette afwerking zijn onze standaard.',
    seo: {
      title: 'Overkappingen & Schuren',
      description: `Overkappingen, veranda's, buitenkeukens, tuinhuizen en schuren op maat in Papendrecht en de Drechtsteden. Duurzaam vakwerk door ${brand.name} sinds 2009. Vraag een vrijblijvende offerte aan.`,
    },
    page: {
      introHeading: 'Een overkapping, veranda of schuur op maat',
      introBody:
        'Wilt u het hele jaar door genieten van uw tuin? Of heeft u behoefte aan extra opslagruimte? Marlinco ontwerpt en bouwt overkappingen, veranda\'s, buitenkeukens, tuinhuizen en schuren die naadloos aansluiten bij uw woning. Met oog voor detail en gebruik van duurzame materialen realiseren wij constructies waar u jarenlang plezier van heeft.',
      ctaLabel: 'Bespreek uw project',
    },
    schema: {
      serviceType: 'Overkappingen, veranda\'s, buitenkeukens, tuinhuizen en schuren op maat',
      description: `${brand.name} ontwerpt en bouwt overkappingen, veranda's, buitenkeukens, tuinhuizen en schuren op maat in Papendrecht en de Drechtsteden.`,
    },
    features: overkappingenFeatures,
  },
];

/** Look up a service by slug. */
export const serviceBySlug: Record<Service['slug'], Service> = Object.fromEntries(
  services.map((s) => [s.slug, s]),
) as Record<Service['slug'], Service>;

// ── Backwards-compatible aliases (kept so existing imports keep working) ───────
export { overkappingenFeatures };
