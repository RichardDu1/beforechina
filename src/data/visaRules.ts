// China visa-free entry policy data — verified against the National Immigration
// Administration / Wikipedia "Visa policy of China" (accessed 2026-07).
//
// IMPORTANT: this policy changes frequently (China has been expanding visa-free
// entry aggressively through 2025-2026). The `lastVerified` date below tells
// the user how stale the data is — surface it in the UI.
//
// The unilateral 30-day waiver regime currently runs until 2026-12-31.
// 240-hour (10-day) transit visa-free replaced the older 72/144-hour regime
// for 54 countries.
//
// Sources:
//   - https://en.wikipedia.org/wiki/Visa_policy_of_China
//   - https://www.nia.gov.cn (National Immigration Administration)

export const VISA_DATA_LAST_VERIFIED = '2026-07-20';

export type VisaStatus =
  | 'VISA_FREE_30' // unilateral / bilateral visa-free, up to 30 days, no transit needed
  | 'VISA_FREE_15' // 15-day unilateral visa-free (legacy bracket, kept for accuracy)
  | 'TRANSIT_240' // 240-hour (10-day) visa-free transit — must continue to a 3rd country
  | 'VISA_REQUIRED'; // must apply for an L-visa before travel

export interface VisaResult {
  status: VisaStatus;
  title: string;
  description: string;
  actionText: string;
  color: string;
  /** highlighted bullet caveats shown under the result */
  caveats: string[];
}

// Country -> policy. Normalised country names match the <option> text.
// Built from the verified policy list. When a country is missing it falls
// back to VISA_REQUIRED.
export const visaRules: Record<string, VisaStatus> = {
  // --- 30-day visa-free (unilateral, until 31 Dec 2026) ---
  'United Kingdom': 'VISA_FREE_30', // British citizens only, from 17 Feb 2026
  Canada: 'VISA_FREE_30', // from 17 Feb 2026
  Australia: 'VISA_FREE_30',
  'New Zealand': 'VISA_FREE_30',
  Japan: 'VISA_FREE_30',
  'South Korea': 'VISA_FREE_30',
  Russia: 'VISA_FREE_30', // until 31 Dec 2027
  Brazil: 'VISA_FREE_30',
  Argentina: 'VISA_FREE_30',
  Chile: 'VISA_FREE_30',
  Uruguay: 'VISA_FREE_30',
  Iceland: 'VISA_FREE_30',
  Norway: 'VISA_FREE_30',
  Switzerland: 'VISA_FREE_30',
  Liechtenstein: 'VISA_FREE_30',
  Monaco: 'VISA_FREE_30',
  Montenegro: 'VISA_FREE_30',
  'North Macedonia': 'VISA_FREE_30',
  Bahrain: 'VISA_FREE_30',
  Kuwait: 'VISA_FREE_30',
  Oman: 'VISA_FREE_30',
  'Saudi Arabia': 'VISA_FREE_30',
  Peru: 'VISA_FREE_30',
  // EU members (except Czech Republic, Lithuania)
  France: 'VISA_FREE_30',
  Germany: 'VISA_FREE_30',
  Italy: 'VISA_FREE_30',
  Spain: 'VISA_FREE_30',
  Netherlands: 'VISA_FREE_30',
  Belgium: 'VISA_FREE_30',
  Luxembourg: 'VISA_FREE_30',
  Austria: 'VISA_FREE_30',
  Ireland: 'VISA_FREE_30',
  Hungary: 'VISA_FREE_30',
  Poland: 'VISA_FREE_30',
  Portugal: 'VISA_FREE_30',
  Greece: 'VISA_FREE_30',
  Denmark: 'VISA_FREE_30',
  Sweden: 'VISA_FREE_30',
  Finland: 'VISA_FREE_30',
  Croatia: 'VISA_FREE_30',
  Slovenia: 'VISA_FREE_30',
  Slovakia: 'VISA_FREE_30',
  Bulgaria: 'VISA_FREE_30',
  Romania: 'VISA_FREE_30',
  Estonia: 'VISA_FREE_30',
  Latvia: 'VISA_FREE_30',
  Cyprus: 'VISA_FREE_30',
  Malta: 'VISA_FREE_30',
  'Czech Republic': 'VISA_FREE_15', // excluded from 30-day, retains 15-day
  Lithuania: 'VISA_FREE_15', // excluded from 30-day, retains 15-day

  // --- 30-day visa-free (bilateral/permanent) ---
  Singapore: 'VISA_FREE_30',
  Malaysia: 'VISA_FREE_30',
  Thailand: 'VISA_FREE_30',
  Kazakhstan: 'VISA_FREE_30',
  Georgia: 'VISA_FREE_30',
  'United Arab Emirates': 'VISA_FREE_30',
  Qatar: 'VISA_FREE_30',
  Serbia: 'VISA_FREE_30',
  Belarus: 'VISA_FREE_30',
  Mongolia: 'VISA_FREE_30',
  Maldives: 'VISA_FREE_30',
  Ecuador: 'VISA_FREE_30',
  Uzbekistan: 'VISA_FREE_30',
  Azerbaijan: 'VISA_FREE_30',
  Morocco: 'VISA_FREE_30',
  Tunisia: 'VISA_FREE_30',
  Mauritius: 'VISA_FREE_30',
  Seychelles: 'VISA_FREE_30',
  Fiji: 'VISA_FREE_30',
  Bahamas: 'VISA_FREE_30',
  Barbados: 'VISA_FREE_30',
  Grenada: 'VISA_FREE_30',
  Dominica: 'VISA_FREE_30',
  Samoa: 'VISA_FREE_30',
  Tonga: 'VISA_FREE_30',
  Brunei: 'VISA_FREE_30',
  Suriname: 'VISA_FREE_30',
  'Antigua and Barbuda': 'VISA_FREE_30',
  'Solomon Islands': 'VISA_FREE_30',

  // --- 240-hour transit only (no unilateral visa-free) ---
  'United States': 'TRANSIT_240',
  Mexico: 'TRANSIT_240',

  // --- VISA_REQUIRED (common source countries not covered) ---
  India: 'VISA_REQUIRED',
  Philippines: 'VISA_REQUIRED',
  Indonesia: 'VISA_REQUIRED',
  Vietnam: 'VISA_REQUIRED',
  Pakistan: 'VISA_REQUIRED',
  Bangladesh: 'VISA_REQUIRED',
  'Sri Lanka': 'VISA_REQUIRED',
  Nepal: 'VISA_REQUIRED',
  'South Africa': 'VISA_REQUIRED',
  Nigeria: 'VISA_REQUIRED',
  Kenya: 'VISA_REQUIRED',
  Egypt: 'VISA_REQUIRED',
  Turkey: 'VISA_REQUIRED',
  Israel: 'VISA_REQUIRED',
  Colombia: 'VISA_REQUIRED',
};

// Popular countries shown at the top of the selector; rest fall into the
// alphabetical "All countries" group below.
export const majorCountries = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'New Zealand',
  'Singapore',
  'Malaysia',
  'Thailand',
  'Japan',
  'South Korea',
  'France',
  'Germany',
  'Italy',
  'Spain',
  'Netherlands',
  'Switzerland',
  'India',
  'Philippines',
  'Indonesia',
  'Vietnam',
  'South Africa',
  'Brazil',
  'Mexico',
  'United Arab Emirates',
];

// Full list for the secondary "All countries" optgroup. Keeps every country
// with an explicit policy reachable without forcing the user into "Other".
export const allCountries: string[] = Array.from(
  new Set([...Object.keys(visaRules), ...majorCountries]),
).sort((a, b) => a.localeCompare(b));

export const visaResults: Record<VisaStatus, VisaResult> = {
  VISA_FREE_30: {
    status: 'VISA_FREE_30',
    title: '🎉 30 Days Visa-Free — No Visa Needed',
    description:
      "Your passport qualifies for China's 30-day visa-free entry. You can fly directly in and out for tourism or business — no transit, no visa application, no $140 fee.",
    actionText: 'Get your eSIM ready for arrival',
    color: '#07C160',
    caveats: [
      'Stay up to 30 days per entry (cumulative within a 180-day window for most unilateral waivers).',
      'Carry proof of onward/return travel and accommodation — airlines may ask at check-in.',
      'For business beyond casual meetings or stays over 30 days, you still need a proper visa.',
    ],
  },
  VISA_FREE_15: {
    status: 'VISA_FREE_15',
    title: '🎉 15 Days Visa-Free — No Visa Needed',
    description:
      "Your passport qualifies for China's 15-day visa-free entry. Fly directly in and out for tourism or short business — no transit required.",
    actionText: 'Get your VPN & eSIM ready',
    color: '#07C160',
    caveats: [
      'Up to 15 days per entry.',
      'If you need a longer stay, apply for an L-visa instead — you cannot extend visa-free entry from within China.',
    ],
  },
  TRANSIT_240: {
    status: 'TRANSIT_240',
    title: '✈️ 240-Hour (10-Day) Visa-Free Transit',
    description:
      'You qualify for the 240-hour transit exemption. You can enter China without a visa for up to 10 days — BUT only if you are transiting through to a third country.',
    actionText: 'Read the exact transit rules',
    color: '#F4A261',
    caveats: [
      'It MUST be a transit: e.g. London → Shanghai → Tokyo. A direct round trip (London → Shanghai → London) does NOT qualify.',
      'Hong Kong, Macau and Taiwan count as third regions — a China → Hong Kong onward ticket satisfies the rule.',
      "Entry/exit must be through one of the 60 designated ports (Beijing, Shanghai, Guangzhou, Chengdu, Xi'an, etc.).",
      'You must declare your transit route to the airline at check-in before boarding.',
    ],
  },
  VISA_REQUIRED: {
    status: 'VISA_REQUIRED',
    title: '📄 Standard Visa Required (L-Visa)',
    description:
      'Based on your passport, you need to apply for a standard Chinese tourist visa (L-visa) at your nearest Chinese embassy or visa application centre before booking flights.',
    actionText: 'See how to apply for an L-Visa',
    color: '#E63946',
    caveats: [
      'Apply 1-2 months before travel. Processing is typically 4-5 business days; express service available.',
      "You'll need: passport (6+ months validity), photo, flight + hotel bookings, and the application form.",
      'Some nationalities can still use the 240-hour transit exemption if travelling to a third country — check above.',
    ],
  },
};
