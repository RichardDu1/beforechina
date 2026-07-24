// China trip budget reference costs. All figures in USD at ~7.2 CNY/USD,
// per-person per-day unless noted. Sourced from 2025-2026 traveller reports
// and verified against typical Tier-1/Tier-2 city pricing.
//
// Keep ranges realistic — the calculator multiplies these by trip length and
// party size. Rounding to whole dollars keeps the UI clean.

export type TravelStyle = 'backpacker' | 'midrange' | 'comfort';

export interface DailyCosts {
  /** per-person per-night */
  accommodation: number;
  /** per-person per-day food */
  food: number;
  /** per-person per-day local transport (metro, taxi, Didi) */
  transport: number;
  /** per-person per-day sightseeing tickets */
  activities: number;
  /** per-person per-day misc (SIM, water, snacks, small purchases) */
  misc: number;
}

export const dailyCosts: Record<TravelStyle, DailyCosts> = {
  backpacker: {
    // Hostels, street food, metro, free/cheap sites
    accommodation: 18,
    food: 15,
    transport: 4,
    activities: 6,
    misc: 5,
  },
  midrange: {
    // 3-star hotel, mix of local + sit-down restaurants, taxis + metro
    accommodation: 65,
    food: 35,
    transport: 10,
    activities: 18,
    misc: 12,
  },
  comfort: {
    // 4-5 star, nicer restaurants, private driver where useful
    accommodation: 180,
    food: 90,
    transport: 35,
    activities: 45,
    misc: 30,
  },
};

// One-off, whole-trip costs not multiplied by days (but multiplied by party size).
export interface OneOffCost {
  label: string;
  backpacker: number;
  midrange: number;
  comfort: number;
  note?: string;
}

export const oneOffCosts: OneOffCost[] = [
  {
    label: 'Visa (if required)',
    backpacker: 140,
    midrange: 140,
    comfort: 140,
    note: 'Skip entirely if you qualify for visa-free entry — check the Visa Checker.',
  },
  {
    label: 'International flights (return)',
    backpacker: 600,
    midrange: 900,
    comfort: 2200,
    note: 'Europe/US → China return, varies wildly by season.',
  },
  {
    label: 'eSIM data',
    backpacker: 5,
    midrange: 15,
    comfort: 28,
  },
  {
    label: 'Travel insurance',
    backpacker: 45,
    midrange: 60,
    comfort: 120,
    note: '~$45-55/month for emergency medical cover.',
  },
  {
    label: 'High-speed rail (long route, e.g. Beijing ↔ Shanghai)',
    backpacker: 0,
    midrange: 95,
    comfort: 95,
    note: 'Optional. Backpackers often take slower/cheaper trains.',
  },
];

export const styleLabels: Record<TravelStyle, string> = {
  backpacker: 'Backpacker',
  midrange: 'Mid-range',
  comfort: 'Comfort / Luxury',
};

export const styleDescriptions: Record<TravelStyle, string> = {
  backpacker: 'Hostels, street food, metro. For budget travellers and students.',
  midrange: '3-star hotels, sit-down restaurants, taxis + metro. The sweet spot for most visitors.',
  comfort: '4-5 star hotels, private drivers, fine dining. For honeymoons and luxury trips.',
};

export const USD_TO_CNY = 7.2;
