export const reviews = [
  {
    quote:
      'Marlinco heeft een prachtige overkapping geplaatst in onze tuin. Van advies tot oplevering was alles top geregeld. Zeer tevreden!',
    name: 'Familie De Groot',
    location: 'Papendrecht',
    rating: 5,
  },
  {
    quote:
      'Onze oprit is volledig opnieuw bestraat. Netjes werk, op tijd klaar en een eerlijke prijs. Zeker een aanrader.',
    name: 'Peter V.',
    location: 'Dordrecht',
    rating: 5,
  },
  {
    quote:
      'Een mooie schutting laten plaatsen door Marlinco. Fijn contact, meedenkend en het resultaat is precies wat we wilden.',
    name: 'Sandra K.',
    location: 'Sliedrecht',
    rating: 5,
  },
] as const;

export type Review = (typeof reviews)[number];
