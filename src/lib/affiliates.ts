// Central affiliate link registry.
//
// WHY: Every outbound monetised link on the site reads from here, so when the
// user provides the real tracking URLs from each affiliate programme
// (Impact, PartnerStack, Travelpayouts, direct partnerships), we update ONE
// file and every page is live. Until then the URLs are the vendor homepage
// with a `?ref=beforechina` query so GA4 + the outbound-click tracker still
// fire and record which vendor / page / placement converted.
//
// TRACKING: each link carries `data-affiliate` (the vendor slug) and
// `data-location` (where on the page the link sits). OutboundClickTracker
// reads these on click and pushes a GA4 `affiliate_click` event, so even
// before real commission links exist we know which placements earn traffic.

export interface AffiliateLink {
  /** vendor slug, used for GA4 event label */
  slug: string;
  /** human-readable vendor name shown next to the button */
  name: string;
  /** destination URL. Replace with real tracking link when available. */
  url: string;
  /** optional promo code shown on the card */
  promoCode?: string;
  /** optional promo code description */
  promoNote?: string;
}

export const affiliates = {
  expressvpn: {
    slug: 'expressvpn',
    name: 'ExpressVPN',
    url: 'https://www.expressvpn.com/?ref=beforechina',
  },
  nordvpn: {
    slug: 'nordvpn',
    name: 'NordVPN',
    url: 'https://nordvpn.com/?ref=beforechina',
  },
  airalo: {
    slug: 'airalo',
    name: 'Airalo',
    url: 'https://www.airalo.com/?ref=beforechina',
    promoCode: 'BEFORECHINA',
    promoNote: '10% off your China eSIM',
  },
  holafly: {
    slug: 'holafly',
    name: 'Holafly',
    url: 'https://esim.holafly.com/?ref=beforechina',
  },
  safetywing: {
    slug: 'safetywing',
    name: 'SafetyWing',
    url: 'https://safetywing.com/?ref=beforechina',
  },
  worldnomads: {
    slug: 'worldnomads',
    name: 'World Nomads',
    url: 'https://www.worldnomads.com/?ref=beforechina',
  },
} as const;

export type AffiliateSlug = keyof typeof affiliates;

/**
 * Build an outbound affiliate <a> tag's props. Centralised so every monetised
 * link renders identically and is picked up by the outbound-click tracker.
 */
export function affiliateProps(
  slug: AffiliateSlug,
  location: string,
): {
  href: string;
  target: '_blank';
  rel: 'noopener noreferrer sponsored nofollow';
  'data-affiliate': string;
  'data-location': string;
} {
  const link = affiliates[slug];
  return {
    href: link.url,
    target: '_blank',
    // `sponsored nofollow` — Google's policy for affiliate links. Do not remove.
    rel: 'noopener noreferrer sponsored nofollow',
    'data-affiliate': link.slug,
    'data-location': location,
  };
}
