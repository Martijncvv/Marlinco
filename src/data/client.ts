/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA — Marlinco
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'Marlinco',
  email: 'mari@marlinco.nl',
  phoneForTel: '06-26742521',
  phoneFormatted: '(06) 26 74 25 21',
  license: '',
  address: {
    lineOne: 'Matena 22',
    lineTwo: '',
    city: 'Papendrecht',
    state: 'Zuid-Holland',
    zip: '3356 LG',
    country: 'NL',
    mapLink: 'https://maps.google.com/?q=Matena+22+3356+LG+Papendrecht',
  },
  socials: {
    facebook: '',
    instagram: '',
    google: 'https://maps.google.com/?q=Matena+22+3356+LG+Papendrecht',
  },
  domain: 'https://www.marlinco.nl',
} as const;

export type Client = typeof client;
