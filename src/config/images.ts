/**
 * ─────────────────────────────────────────────────────────────────────────────
 * IMAGE CONFIGURATION — Marlinco
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { ImageMetadata } from 'astro';

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
}

const discovered = Object.entries(
  import.meta.glob<{ default: ImageMetadata }>(
    '../assets/images/gallery/*.{jpg,jpeg,png,webp,avif}',
    { eager: true },
  ),
).map(([path, mod]): GalleryImage => ({
  src: mod.default,
  alt: path
    .split('/').pop()!
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase()),
}));

const placeholders: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', alt: 'Overkapping in een groene tuin' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', alt: 'Moderne schuur bij een woning' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', alt: 'Strakke bestrating oprit' },
  { src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7a5a0c?w=600&q=80', alt: 'Houten schutting met tuinbeplanting' },
  { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80', alt: 'Terras met sierbestrating' },
  { src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80', alt: 'Tuinaanleg met pad en verlichting' },
];

export const galleryImages: GalleryImage[] = discovered.length > 0 ? discovered : placeholders;
