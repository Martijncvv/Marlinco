/**
 * ─────────────────────────────────────────────────────────────────────────────
 * HOMEPAGE CONTENT — Marlinco
 *
 * All marketing copy for the homepage sections lives here so the components
 * stay presentational. Edit the words in this file, not in the .astro files.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { brand } from '../../config/brand';

export interface SectionHead {
  topper?: string;
  heading?: string;
  description?: string;
}

export interface TrustItem {
  label: string;
  value?: string;
}

export const home = {
  hero: {
    topper: 'Sinds 2009 in Papendrecht',
    heading: brand.tagline,
    description:
      'Marlinco is uw betrouwbare partner voor alle klussen in en om huis. Van overkappingen en schuren tot tuinaanleg, bestrating, schuttingen en (kunst)gras — vakmanschap waar u op kunt rekenen.',
    ctaLabel: 'Bespreek uw project',
    ctaHref: '/#contact',
    imageAlt:
      'Sfeervolle achtertuin met klinkerbestrating, houten pergola\'s, schutting en kleurrijke beplanting',
  },

  trustBar: [
    { label: 'Jaar ervaring', value: '20+' },
    { label: 'Projecten gerealiseerd', value: '500+' },
    { label: 'Direct contact met de vakman' },
    { label: 'Gevestigd in Drechtsteden' },
  ] as TrustItem[],

  about: {
    topper: 'Wie zijn wij',
    heading: 'Al sinds 2009 uw partner voor huis en tuin',
    body: [
      'Sinds 2009 is Marlinco het eenmansbedrijf van M. van Veen uit Papendrecht. Eén vast aanspreekpunt van begin tot eind, en inmiddels een vertrouwde naam in de Drechtsteden en omstreken — actief in Dordrecht, Sliedrecht, Zwijndrecht, Hendrik-Ido-Ambacht, Alblasserdam, Ridderkerk, de Alblasserwaard en daarbuiten.',
      'Wij geloven dat goede ideeën ontstaan door creatief denken. Daarom denken we graag met u mee om samen tot het beste resultaat te komen — van ontwerp tot oplevering.',
    ],
    benefits: [
      'Vakkundig en ervaren sinds 2009',
      'Persoonlijke aanpak en kort contact',
      'Kwaliteit waar u op kunt rekenen',
    ],
    imageAlt: 'Marlinco aan het werk in een tuin',
  },

  servicesSection: {
    topper: 'Onze diensten',
    heading: 'Wat wij voor u doen',
    description:
      'Van een sfeervolle overkapping tot een strakke oprit — wij leveren vakwerk met oog voor detail en persoonlijk advies.',
  } satisfies SectionHead,

  projectsSection: {
    topper: 'Ons werk',
    heading: 'Recente projecten',
    description:
      'Van een klein tuinpad tot een grote overkapping — groot of klein, wij leveren altijd hetzelfde vakwerk.',
  } satisfies SectionHead,

  reviewsSection: {
    topper: 'Ervaringen',
    heading: 'Wat onze klanten zeggen',
  } satisfies SectionHead,

  cta: {
    title: 'Een idee voor uw tuin?',
    description:
      'Neem vrijblijvend contact met ons op — we kijken graag met u mee. Geen project is te groot of te klein.',
    buttonText: 'Bespreek uw project',
    buttonHref: '/#contact',
  },
} as const;
