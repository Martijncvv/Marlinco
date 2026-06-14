/**
 * ─────────────────────────────────────────────────────────────────────────────
 * IMAGE CONFIGURATION — Marlinco
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { ImageMetadata } from 'astro';
import { client } from '../data/client';

// ── Hero ──────────────────────────────────────────────────────────────────────
// import heroImage from '../assets/images/hero/hero.jpg';
export const heroImage: ImageMetadata | undefined = undefined;

// ── About ─────────────────────────────────────────────────────────────────────
// import aboutImage from '../assets/images/about/team.jpg';
export const aboutImage: ImageMetadata | undefined = undefined;

// ── Gallery ───────────────────────────────────────────────────────────────────
export interface GalleryImage {
  src: ImageMetadata | string;
  alt: string;
  location?: string;
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

const overkappingenDiscovered = Object.entries(
  import.meta.glob<{ default: ImageMetadata }>(
    '../assets/images/projects/overkappingen/*.{jpg,jpeg,png,webp,avif}',
    { eager: true },
  ),
).map(([path, mod]): GalleryImage => ({ src: mod.default, alt: toAlt(path) }));

const bestratingDiscovered = Object.entries(
  import.meta.glob<{ default: ImageMetadata }>(
    '../assets/images/projects/bestrating/*.{jpg,jpeg,png,webp,avif}',
    { eager: true },
  ),
).map(([path, mod]): GalleryImage => ({ src: mod.default, alt: toAlt(path) }));

const schuttingenDiscovered = Object.entries(
  import.meta.glob<{ default: ImageMetadata }>(
    '../assets/images/projects/schuttingen/*.{jpg,jpeg,png,webp,avif}',
    { eager: true },
  ),
).map(([path, mod]): GalleryImage => ({ src: mod.default, alt: toAlt(path) }));

const overkappingenPlaceholders: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', alt: 'Grote houten overkapping over terras' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', alt: 'Moderne tuinschuur in achtertuin' },
  { src: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&q=80', alt: 'Compacte overkapping bij voordeur' },
];

const bestratingPlaceholders: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', alt: 'Strak bestrate oprit met klinkers' },
  { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80', alt: 'Terras met sierbestrating' },
  { src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80', alt: 'Klein tuinpad met verlichting' },
];

const schuttingenPlaceholders: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7a5a0c?w=600&q=80', alt: 'Hoge houten schutting met beplanting' },
  { src: 'https://images.unsplash.com/photo-1503594384566-461fe158e797?w=600&q=80', alt: 'Strakke moderne schutting in voortuin' },
  { src: 'https://images.unsplash.com/photo-1597844808175-39bba3d29bd0?w=600&q=80', alt: 'Lage erfafscheiding van hardhout' },
];

export const serviceProjects: ServiceProjectGroup[] = [
  {
    service: 'Overkappingen & Schuren',
    href: '/overkappingen-schuren',
    images: (overkappingenDiscovered.length > 0 ? overkappingenDiscovered : overkappingenPlaceholders).slice(0, 2),
  },
  {
    service: 'Bestrating',
    href: '/bestrating',
    images: (bestratingDiscovered.length > 0 ? bestratingDiscovered : bestratingPlaceholders).slice(0, 2),
  },
  {
    service: 'Schuttingen',
    href: '/schuttingen',
    images: (schuttingenDiscovered.length > 0 ? schuttingenDiscovered : schuttingenPlaceholders).slice(0, 2),
  },
];
