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

export const tuinaanlegFeatures: ServiceFeature[] = [
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

export const schuttingenFeatures: ServiceFeature[] = [
  {
    title: 'Hardhouten schuttingen',
    description:
      'Duurzaam, onderhoudsvriendelijk en met een warme uitstraling. Hardhouten schuttingen gaan tientallen jaren mee en worden alleen maar mooier.',
  },
  {
    title: 'Verschillende palen en onderplaten',
    description:
      'Wij plaatsen schuttingen op diverse soorten palen — bijvoorbeeld betonnen palen met een betonnen onderplaat voor extra stevigheid en een langere levensduur van het hout.',
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
