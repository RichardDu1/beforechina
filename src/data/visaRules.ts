export type VisaStatus = '15_DAYS_FREE' | '30_DAYS_FREE' | '144_HOUR_TRANSIT' | 'VISA_REQUIRED';

export interface VisaResult {
  status: VisaStatus;
  title: string;
  description: string;
  actionText: string;
  color: string;
}

// 2026 latest standard visa-free policies (Hardcoded for frontend)
export const visaRules: Record<string, VisaStatus> = {
  // 30 Days Free
  'Singapore': '30_DAYS_FREE',
  'Thailand': '30_DAYS_FREE',
  'Malaysia': '30_DAYS_FREE', // Often 30 or 15, assume 30 for now
  'Kazakhstan': '30_DAYS_FREE',
  'Georgia': '30_DAYS_FREE',

  // 15 Days Free (Recent additions 2023-2025)
  'France': '15_DAYS_FREE',
  'Germany': '15_DAYS_FREE',
  'Italy': '15_DAYS_FREE',
  'Netherlands': '15_DAYS_FREE',
  'Spain': '15_DAYS_FREE',
  'Switzerland': '15_DAYS_FREE',
  'Ireland': '15_DAYS_FREE',
  'Hungary': '15_DAYS_FREE',
  'Austria': '15_DAYS_FREE',
  'Belgium': '15_DAYS_FREE',
  'Luxembourg': '15_DAYS_FREE',
  'New Zealand': '15_DAYS_FREE',
  'Australia': '15_DAYS_FREE',
  'Poland': '15_DAYS_FREE',

  // 144-Hour Transit (54 Countries)
  'United States': '144_HOUR_TRANSIT',
  'United Kingdom': '144_HOUR_TRANSIT',
  'Canada': '144_HOUR_TRANSIT',
  'Japan': '144_HOUR_TRANSIT', // Sometimes 15 days, currently suspended, mostly 144 transit
  'South Korea': '144_HOUR_TRANSIT',
  // ... We will only list major ones for the MVP, others default to VISA_REQUIRED
};

export const visaResults: Record<VisaStatus, VisaResult> = {
  '30_DAYS_FREE': {
    status: '30_DAYS_FREE',
    title: '🎉 30 Days Visa-Free!',
    description: 'Great news! You can enter China for up to 30 days for tourism, business, or visiting friends without applying for a visa.',
    actionText: 'Get your eSIM ready for arrival',
    color: '#07C160' // Green
  },
  '15_DAYS_FREE': {
    status: '15_DAYS_FREE',
    title: '🎉 15 Days Visa-Free!',
    description: 'You can enter China for up to 15 days without a visa for business, tourism, or transit. Just pack your bags and go.',
    actionText: 'Get your VPN & eSIM ready',
    color: '#07C160'
  },
  '144_HOUR_TRANSIT': {
    status: '144_HOUR_TRANSIT',
    title: '✈️ 144-Hour Transit Visa-Free',
    description: 'You qualify for the 144-Hour (6 Days) Transit Exemption! You must be transiting to a THIRD country (e.g., US -> China -> Japan). You cannot use this for direct round trips (US -> China -> US).',
    actionText: 'Read the exact transit rules',
    color: '#F4A261' // Gold/Warning
  },
  'VISA_REQUIRED': {
    status: 'VISA_REQUIRED',
    title: '📄 Standard Visa Required',
    description: 'Based on your passport, you need to apply for a standard Chinese Visa (L Visa for tourism) at your local embassy or visa center before booking your flights.',
    actionText: 'See how to apply for an L-Visa',
    color: '#E63946' // Red
  }
};

export const majorCountries = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'New Zealand',
  'Singapore', 'Malaysia', 'Thailand', 'Japan', 'South Korea',
  'France', 'Germany', 'Italy', 'Spain', 'Netherlands', 'Switzerland',
  'India', 'Philippines', 'South Africa', 'Brazil', 'Mexico'
].sort();
