import { client } from './client';

export const reviews = [
  {
    quote:
      'Ben je op zoek naar echt vakmanschap dan moet je bij Marlinco zijn. Mari heeft voor ons de afgelopen 5 jaar o.a. een overkapping gemaakt met een buitenkeuken en elektriciteit, een nieuwe schutting met verlichting, mooie plantenbakken voor ons vlonder en zeer recent nog een nieuw vlonder aangelegd op het gazon. Mari is zeer betrouwbaar, eerlijk, vriendelijk en komt altijd zijn afspraken na! Heb je ergens hulp bij nodig of advies dan staat hij voor je klaar maar bovenal Mari maakt gewoon hele mooie dingen. Zijn werk getuigt van degelijkheid, goede kwaliteit en duurzaamheid. Wij raden Mari van harte aan!',
    name: 'Joanneke B.',
    location: 'Google review',
    url: client.socials.google,
    rating: 5,
  },
    {
        quote:
            'Aan Marlinco kan je je klus met een gerust hart toevertrouwen. De overkapping die de bedoeling was is gedurende de klus omgetoverd tot een mooie schuur. Alles is uitgevoerd met de precisie van een vakman, die weet hoe je met gereedschap en hout moet omgaan. Al mijn klussen gaan in het vervolg naar Mari. Chapeau!!',
        name: 'Peter R.',
        location: 'Google review',
        url: client.socials.google,
        rating: 5,
    },
  {
    quote:
      'Prima resultaat geleverd voor upgrade van onze veranda, komt afspraken altijd na en is een echte vakman!!',
    name: 'Wout K.',
    location: 'Google review',
    url: client.socials.google,
    rating: 5,
  },

] as const;

export type Review = (typeof reviews)[number];
