/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA — Marlinco
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'Marlinco',
  email: 'mari@marlinco.nl',
  phoneForTel: '06-26742521',
  phoneFormatted: '06 26 74 25 21',
  license: '',
  address: {
    lineOne: 'Matena 22',
    lineTwo: '',
    city: 'Papendrecht',
    state: 'Zuid-Holland',
    zip: '3356 LG',
    country: 'NL',
    mapLink: 'https://maps.app.goo.gl/sGEyks11TCCRuBFr7',
  },
  socials: {
    facebook: '',
    instagram: '',
    google: 'https://maps.app.goo.gl/dBn7C6MQP7JcP8d36',
  },
  domain: 'https://www.marlinco.nl',
  serviceAreas: [
    'Papendrecht',
    'Dordrecht',
    'Sliedrecht',
    'Zwijndrecht',
    'Hendrik-Ido-Ambacht',
    'Ridderkerk',
    'Alblasserdam',
    'Oud-Alblas',
    'Kinderdijk',
    'Nieuw-Lekkerland',
    'Streefkerk',
    'Groot-Ammers',
    'Bleskensgraaf',
    'Molenaarsgraaf',
    'Brandwijk',
    'Ottoland',
    'Giessenburg',
    'Hardinxveld-Giessendam',
  ],
} as const;

export type Client = typeof client;
