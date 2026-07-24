// GA4 configuration.
//
// NEXT_PUBLIC_GA_MEASUREMENT_ID: set in Vercel env vars (format G-XXXXXXXX).
// When unset (e.g. local dev), the Analytics component renders nothing and
// tracking calls become no-ops, so the build never depends on a real ID.

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

export const isGaEnabled = GA_MEASUREMENT_ID.startsWith('G-');

// https://nextjs.org/docs/app/guides/scripts
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Push a GA4 event. Safe to call anywhere — no-ops when GA is not configured
 * (so server renders and local dev don't throw).
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !isGaEnabled || !window.gtag) return;
  window.gtag('event', name, params);
}
