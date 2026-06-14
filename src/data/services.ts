/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SERVICE PAGE CONTENT — Marlinco
 *
 * Eén plek voor de feature-/Q&A-blokken die op de dienstpagina's verschijnen
 * (zichtbaar als kaartjes én onzichtbaar als FAQ structured data).
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface ServiceFeature {
  title: string;
  description: string;
}

export const overkappingenFeatures: ServiceFeature[] = [
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

export const bestratingFeatures: ServiceFeature[] = [
  {
    title: 'Opritten en parkeerplaatsen',
    description:
      'Een strakke oprit die er niet alleen mooi uitziet, maar ook stevig genoeg is voor dagelijks gebruik. Wij zorgen voor de juiste fundering en afwatering.',
  },
  {
    title: 'Terrassen en tuinpaden',
    description:
      'Van een sfeervol terras tot praktische tuinpaden — wij leggen bestrating die past bij uw tuin en uw smaak.',
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
];

export const schuttingenFeatures: ServiceFeature[] = [
  {
    title: 'Hardhouten schuttingen',
    description:
      'Duurzaam, onderhoudsvriendelijk en met een warme uitstraling. Hardhouten schuttingen gaan tientallen jaren mee en worden alleen maar mooier.',
  },
  {
    title: 'Betonnen schuttingen',
    description:
      'Robuust en onderhoudsvrij. Betonnen schuttingen zijn ideaal wanneer u op zoek bent naar een stevige, langdurige erfafscheiding.',
  },
  {
    title: 'Composiet en modern',
    description:
      'Voor een strakke, moderne look bieden wij composiet schuttingen aan — weerbestendig, kleurvast en nagenoeg onderhoudsvrij.',
  },
  {
    title: 'Advies op maat',
    description:
      'Niet zeker welk type schutting het beste past? Wij komen graag langs om de mogelijkheden te bespreken en een vrijblijvend advies te geven.',
  },
];
