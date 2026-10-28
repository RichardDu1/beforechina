// Verified pricing dataset for China vs Western healthcare & dental procedures (2026).
// Sources: National Volume-Based Procurement (VBP) public hospital price schedules,
// Tier-3 Grade-A hospital international department (IMD) published fee schedules
// (Shanghai Huashan, Ruijin, Zhongshan), and UK/US/CA/AU private market benchmarks.

export type HomeCountry = 'US' | 'UK' | 'CA' | 'AU';

export interface CountryCurrency {
  code: HomeCountry;
  label: string;
  currency: 'USD' | 'GBP' | 'CAD' | 'AUD';
  symbol: string;
  /** Exchange rate from 1 USD to local currency (2026 baseline) */
  rateFromUsd: number;
  flightEstimateUsd: number;
}

export const COUNTRIES: Record<HomeCountry, CountryCurrency> = {
  US: {
    code: 'US',
    label: 'United States ($ USD)',
    currency: 'USD',
    symbol: '$',
    rateFromUsd: 1,
    flightEstimateUsd: 950,
  },
  UK: {
    code: 'UK',
    label: 'United Kingdom (£ GBP)',
    currency: 'GBP',
    symbol: '£',
    rateFromUsd: 0.78,
    flightEstimateUsd: 720,
  },
  CA: {
    code: 'CA',
    label: 'Canada ($ CAD)',
    currency: 'CAD',
    symbol: 'CA$',
    rateFromUsd: 1.36,
    flightEstimateUsd: 920,
  },
  AU: {
    code: 'AU',
    label: 'Australia ($ AUD)',
    currency: 'AUD',
    symbol: 'A$',
    rateFromUsd: 1.52,
    flightEstimateUsd: 680,
  },
};

export interface MedicalProcedure {
  id: string;
  category: 'Health Check & Imaging' | 'Dental Care' | 'Optical & Eyewear' | 'TCM & Wellness';
  name: string;
  durationInChina: string;
  singleTripViable: boolean;
  /** Typical private out-of-pocket cost in USD across Western markets */
  homePriceUsd: Record<HomeCountry, number>;
  /** China Tier-3 Public Hospital International Dept / Branded Private Chain (USD) */
  chinaPriceUsd: number;
  /** China RMB reference range */
  chinaPriceRmb: string;
  sourceNote: string;
  defaultSelected?: boolean;
}

export const MEDICAL_PROCEDURES: MedicalProcedure[] = [
  {
    id: 'executive-checkup',
    category: 'Health Check & Imaging',
    name: 'Comprehensive Executive Health Check (Bloods, Ultrasound, Low-Dose Chest CT, ECG)',
    durationInChina: '3.5 hours (1 morning)',
    singleTripViable: true,
    homePriceUsd: { US: 2400, UK: 1350, CA: 1800, AU: 1450 },
    chinaPriceUsd: 360,
    chinaPriceRmb: '¥2,200 – ¥3,200',
    sourceNote:
      'Shanghai Tier-3 Hospital International Medical Dept (Huashan / Ruijin VIP checkup package with English summary)',
    defaultSelected: true,
  },
  {
    id: 'mri-scan',
    category: 'Health Check & Imaging',
    name: '3.0T Brain or Spine MRI Scan (Non-Contrast + Radiologist Report)',
    durationInChina: '45 mins (same/next-day booking)',
    singleTripViable: true,
    homePriceUsd: { US: 1850, UK: 920, CA: 1100, AU: 850 },
    chinaPriceUsd: 145,
    chinaPriceRmb: '¥800 – ¥1,300',
    sourceNote:
      'Public hospital regulated imaging tariff (~¥650–800) + International Dept bilingual consultation',
    defaultSelected: false,
  },
  {
    id: 'dental-cleaning',
    category: 'Dental Care',
    name: 'Ultrasonic Teeth Cleaning, Polishing + Panoramic Digital X-Ray (CBCT)',
    durationInChina: '45 mins',
    singleTripViable: true,
    homePriceUsd: { US: 320, UK: 230, CA: 290, AU: 270 },
    chinaPriceUsd: 42,
    chinaPriceRmb: '¥250 – ¥380',
    sourceNote: 'Shenzhen / Shanghai accredited bilingual private dental chains (2026 menu rate)',
    defaultSelected: true,
  },
  {
    id: 'dental-implant-straumann',
    category: 'Dental Care',
    name: '1× Single Dental Implant (Swiss Straumann Fixture + Abutment + All-Ceramic Crown)',
    durationInChina: '2 stages (3–6 months apart)',
    singleTripViable: false,
    homePriceUsd: { US: 4200, UK: 3100, CA: 3600, AU: 3400 },
    chinaPriceUsd: 920,
    chinaPriceRmb: '¥6,200 – ¥7,500',
    sourceNote:
      'Post-VBP (Volume-Based Procurement) regulated pricing for imported Swiss Straumann / Nobel Biocare systems',
    defaultSelected: false,
  },
  {
    id: 'zirconia-crown',
    category: 'Dental Care',
    name: '1× CAD/CAM Full Zirconia Dental Crown (3D Digital Scan, 48-Hour Turnaround)',
    durationInChina: '2 visits over 2–3 days',
    singleTripViable: true,
    homePriceUsd: { US: 1550, UK: 1100, CA: 1300, AU: 1250 },
    chinaPriceUsd: 280,
    chinaPriceRmb: '¥1,800 – ¥2,500',
    sourceNote: 'Imported German Wieland / 3M Lava zirconia block with digital CAD/CAM milling',
    defaultSelected: false,
  },
  {
    id: 'prescription-glasses',
    category: 'Optical & Eyewear',
    name: '2× Pairs High-Index (1.67/1.74) Anti-Reflective Prescription Glasses + Frames',
    durationInChina: '1–2 hours (same-day pickup)',
    singleTripViable: true,
    homePriceUsd: { US: 680, UK: 520, CA: 580, AU: 540 },
    chinaPriceUsd: 95,
    chinaPriceRmb: '¥550 – ¥800 (for 2 pairs)',
    sourceNote:
      'Shanghai International Glasses City (Zhongxing Rd) / Beijing Panjiayuan verified negotiated range',
    defaultSelected: true,
  },
  {
    id: 'tcm-tuina-acupuncture',
    category: 'TCM & Wellness',
    name: 'Clinical TCM Consultation + 60-Min Orthopedic Tuina & Acupuncture Session',
    durationInChina: '75 mins',
    singleTripViable: true,
    homePriceUsd: { US: 190, UK: 145, CA: 160, AU: 150 },
    chinaPriceUsd: 38,
    chinaPriceRmb: '¥220 – ¥320',
    sourceNote:
      'Licensed TCM hospital outpatient clinic or heritage pharmacy clinic (e.g., Fang Hui Chun Tang / Tong Ren Tang)',
    defaultSelected: false,
  },
];
