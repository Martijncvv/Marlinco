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
  slug: 'overkappingen-schuren' | 'tuinaanleg' | 'schuttingen';
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

const tuinaanlegFeatures: ServiceFeature[] = [
  {
    title: 'Opritten, terrassen en tuinpaden',
    description:
      'Van een strakke oprit die dagelijks gebruik aankan tot een sfeervol terras of praktisch tuinpad — wij leggen bestrating die past bij uw tuin en uw smaak.',
  },
  {
    title: 'Diverse materialen',
    description:
      'Klinkers, tegels, natuursteen of sierbestrating — wij adviseren u graag over het materiaal dat het beste past bij uw project en budget.',
  },
  {
    title: 'Grondwerk en afwatering',
    description:
      'Goede bestrating begint bij een solide ondergrond. Wij verzorgen het complete grondwerk inclusief afwatering zodat alles vlak en stabiel blijft.',
  },
  {
    title: 'Gras en kunstgras',
    description:
      'Van een verzorgd grasveld tot onderhoudsvrij kunstgras — wij leggen het strak aan op een goed voorbereide ondergrond, perfect aansluitend op uw bestrating.',
  },
];

const schuttingenFeatures: ServiceFeature[] = [
  {
    title: 'Houten schuttingen',
    description:
      'Wij werken met verschillende houtsoorten — van duurzaam hardhout tot grenen en vuren. Met een warme uitstraling, vakkundig geplaatst en afgestemd op uw wensen.',
  },
  {
    title: 'Verschillende palen en onderplaten',
    description:
      'Wij plaatsen schuttingen op diverse soorten palen — bijvoorbeeld betonnen palen met een betonnen onderplaat voor extra stevigheid en een langere levensduur van het hout.',
  },
  {
    title: 'Compleet ontzorgd, van A tot Z',
    description:
      'Wij regelen het hele traject: van inmeten en advies tot levering, vakkundige plaatsing en het afvoeren van uw oude schutting. U heeft er geen omkijken naar.',
  },
  {
    title: 'Advies op maat',
    description:
      'Niet zeker welk type schutting het beste past? Wij komen graag langs om de mogelijkheden te bespreken en een vrijblijvend advies te geven.',
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
  {
    slug: 'tuinaanleg',
    navLabel: 'Tuinaanleg',
    name: 'Tuinaanleg & bestrating',
    cardDescription:
      'Van opritten, terrassen en tuinpaden tot houten vlonders, stenen trappen, plantenbakken, kunstgras en natuurgras — wij leggen aan wat er niet alleen mooi uitziet, maar ook jarenlang stevig blijft liggen. Altijd met de juiste afwatering en een strak resultaat.',
    seo: {
      title: 'Tuinaanleg & bestrating',
      description: `Tuinaanleg en bestrating: vlonders, stenen trappen, plantenbakken, kunstgras en natuurgras voor opritten, terrassen en tuinpaden in Papendrecht en de Drechtsteden. Vakkundig grondwerk door ${brand.name}. Vraag vrijblijvend uw offerte aan.`,
    },
    page: {
      introHeading: 'Uw buitenruimte tot in detail',
      introBody:
        'Of het nu gaat om een nieuwe oprit, een sfeervol terras, een houten vlonder, stenen trappen, gemetselde plantenbakken, het ophogen van uw tuin, een praktisch tuinpad of het aanleggen van kunstgras of natuurgras — bij Marlinco bent u aan het juiste adres. Wij leggen bestrating, vlonders, terrasplanken en grasvelden die niet alleen mooi ogen, maar ook jarenlang stevig blijven liggen. Met vakkundige aanleg en de juiste materialen creëren wij een buitenruimte waar u trots op kunt zijn.',
      ctaLabel: 'Bespreek uw project',
    },
    schema: {
      serviceType: 'Tuinaanleg, bestrating, vlonders, trappen, plantenbakken en kunstgras',
      description: `${brand.name} legt opritten, terrassen, tuinpaden, vlonders, stenen trappen, plantenbakken en kunstgras of natuurgras aan in Papendrecht en de Drechtsteden.`,
    },
    features: tuinaanlegFeatures,
  },
  {
    slug: 'schuttingen',
    navLabel: 'Schuttingen',
    name: 'Schuttingen',
    cardDescription:
      'Privacy en een mooie afscheiding gaan bij ons hand in hand. Wij plaatsen schuttingen in diverse stijlen en materialen, afgestemd op uw wensen en de uitstraling van uw tuin.',
    seo: {
      title: 'Schuttingen',
      description: `Houten schuttingen plaatsen in Papendrecht en de Drechtsteden — diverse houtsoorten, desgewenst op betonnen palen. Vakkundig gemonteerd door ${brand.name}. Vraag een vrijblijvende offerte aan.`,
    },
    page: {
      introHeading: 'Schuttingen voor elke tuin',
      introBody:
        'Een goede schutting biedt niet alleen privacy, maar draagt ook bij aan de sfeer en uitstraling van uw tuin. Marlinco plaatst schuttingen in diverse stijlen en materialen — altijd vakkundig en afgestemd op uw wensen. Of u nu kiest voor de warmte van hardhout of een andere houtsoort — desgewenst op stevige betonnen palen — wij zorgen voor een strak en duurzaam resultaat.',
      ctaLabel: 'Bespreek uw project',
    },
    schema: {
      serviceType: 'Houten schuttingen plaatsen in diverse houtsoorten',
      description: `${brand.name} plaatst houten schuttingen in diverse houtsoorten — desgewenst op stevige betonnen palen — in Papendrecht en de Drechtsteden, vakkundig gemonteerd en afgestemd op uw tuin.`,
    },
    features: schuttingenFeatures,
  },
];

/** Look up a service by slug. */
export const serviceBySlug: Record<Service['slug'], Service> = Object.fromEntries(
  services.map((s) => [s.slug, s]),
) as Record<Service['slug'], Service>;

// ── Backwards-compatible aliases (kept so existing imports keep working) ───────
export { overkappingenFeatures, tuinaanlegFeatures, schuttingenFeatures };
