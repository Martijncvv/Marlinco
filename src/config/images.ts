/**
 * ─────────────────────────────────────────────────────────────────────────────
 * IMAGE CONFIGURATION — Marlinco
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { ImageMetadata } from 'astro';
import { client } from '../data/client';
import { serviceBySlug, serviceHref } from '../data/services';

// ── Hero ──────────────────────────────────────────────────────────────────────
// Nog geen eigen hero-foto. Hero.astro valt automatisch terug op een placeholder
// tot er een nieuwe foto in /src/assets/images/hero/ wordt gezet.
export const heroImage: ImageMetadata | undefined = undefined;

// ── About ─────────────────────────────────────────────────────────────────────
import aboutImageSrc from '../assets/images/about/mari-tuin-werk.png';
export const aboutImage: ImageMetadata = aboutImageSrc;

// ── Gallery ───────────────────────────────────────────────────────────────────
export interface GalleryImage {
  src: ImageMetadata | string;
  alt: string;
  location?: string;
  filename?: string;
}

function toAlt(path: string): string {
  return path
    .split('/').pop()!
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Pak plaatsnaam uit bestandsnaam. Conventie: zet de plaats voorop, gescheiden
// met een streepje, bv. `dordrecht-overkapping-houten.jpg` → "Dordrecht".
// Werkt automatisch met alle plaatsen uit client.serviceAreas.
function toLocation(path: string): string | undefined {
  const filename = path.split('/').pop()!.toLowerCase();
  for (const city of client.serviceAreas) {
    const slug = city.toLowerCase().replace(/\s+/g, '-');
    if (
      filename.startsWith(`${slug}-`) ||
      filename.startsWith(`${slug}_`) ||
      filename.startsWith(`${slug}.`)
    ) {
      return city;
    }
  }
  return undefined;
}

const discovered = Object.entries(
  import.meta.glob<{ default: ImageMetadata }>(
    '../assets/images/gallery/*.{jpg,jpeg,png,webp,avif}',
    { eager: true },
  ),
).map(([path, mod]): GalleryImage => ({
  src: mod.default,
  alt: toAlt(path),
  location: toLocation(path),
}));

const placeholders: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', alt: 'Overkapping in een groene tuin', location: 'Papendrecht' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', alt: 'Moderne schuur bij een woning', location: 'Dordrecht' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', alt: 'Strakke bestrating oprit', location: 'Sliedrecht' },
  { src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7a5a0c?w=600&q=80', alt: 'Houten schutting met tuinbeplanting', location: 'Alblasserdam' },
  { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80', alt: 'Terras met sierbestrating', location: 'Ridderkerk' },
  { src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80', alt: 'Tuinaanleg met pad en verlichting', location: 'Hendrik-Ido-Ambacht' },
];

export const galleryImages: GalleryImage[] = discovered.length > 0 ? discovered : placeholders;

// ── Projects by service (homepage 3-kolommen blok) ───────────────────────────
// Drop eigen foto's in /src/assets/images/projects/<dienst>/ — drie per dienst.
// Geen foto's gevonden? Dan worden de Unsplash-placeholders gebruikt.

export interface ServiceProjectGroup {
  service: string;
  href: string;
  images: GalleryImage[];
}

// Metadata.json per service-map: { "<bestand>.jpeg": "Nederlandse alt-tekst" }
import overkappingenMeta from '../assets/images/services/overkappingen-schuren/metadata.json';

type AltMap = Record<string, string>;

function discoverService(
  entries: Record<string, { default: ImageMetadata }>,
  altMap: AltMap,
): GalleryImage[] {
  return Object.entries(entries).map(([path, mod]): GalleryImage => {
    const filename = path.split('/').pop()!;
    return {
      src: mod.default,
      alt: altMap[filename] ?? toAlt(path),
      location: toLocation(path),
      filename,
    };
  });
}

function pickByFilename(images: GalleryImage[], filenames: string[]): GalleryImage[] {
  return filenames
    .map((name) => images.find((img) => img.filename === name))
    .filter((img): img is GalleryImage => img !== undefined);
}

const overkappingenDiscovered = discoverService(
  import.meta.glob<{ default: ImageMetadata }>(
    '../assets/images/services/overkappingen-schuren/*.{jpg,jpeg,png,webp,avif}',
    { eager: true },
  ),
  overkappingenMeta as AltMap,
);

export const overkappingenImages: GalleryImage[] =
  overkappingenDiscovered.length > 0 ? overkappingenDiscovered : [];

const overkappingenPlaceholders: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', alt: 'Grote houten overkapping over terras' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', alt: 'Moderne tuinschuur in achtertuin' },
  { src: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&q=80', alt: 'Compacte overkapping bij voordeur' },
];

export const serviceProjects: ServiceProjectGroup[] = [
  {
    service: serviceBySlug['overkappingen-schuren'].name,
    href: serviceHref('overkappingen-schuren'),
    images: overkappingenDiscovered.length > 0
      ? pickByFilename(overkappingenDiscovered, [
          'papendrecht-16-overkapping.jpeg',
          'sliedrecht-5-overkapping.jpeg',
        ])
      : overkappingenPlaceholders.slice(0, 2),
  },
];
