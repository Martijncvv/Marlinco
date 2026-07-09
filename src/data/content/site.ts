/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE-WIDE CONTENT — Marlinco
 *
 * Copy that is shared across pages or lives outside a single homepage section:
 * the footer, the contact block, gallery defaults, and the form success page.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  footer: {
    workAreaLabel: 'Werkgebied:',
    workArea: 'Drechtsteden, Alblasserwaard en omstreken. Daarbuiten in overleg.',
    copyright: 'Alle rechten voorbehouden.',
  },

  contact: {
    heading: 'Stuur ons een bericht',
    subcopy:
      'Vul het formulier in voor een vrijblijvende reactie, of bel of WhatsApp ons direct.',
    /** Plain-text prefill for WhatsApp links (URL-encoded at render time). */
    whatsappMessage: 'Hallo, ik heb een vraag over jullie diensten.',
  },

  gallery: {
    ctaLabel: 'Bekijk alle projecten',
    ctaHref: '/overkappingen-schuren',
  },

  success: {
    seoTitle: 'Bericht verzonden',
    seoDescription: 'Uw bericht is ontvangen.',
    heading: 'Bericht ontvangen',
    body: 'Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.',
    backLabel: 'Terug naar home',
  },
} as const;
