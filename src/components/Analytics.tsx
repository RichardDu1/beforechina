'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { GA_MEASUREMENT_ID, isGaEnabled, trackEvent } from '@/lib/analytics';

/**
 * GA4 loader + global outbound-affiliate-click tracker.
 *
 * - Loads gtag.js with strategy="afterInteractive" (per Next.js Script docs,
 *   this is safe in the root layout for a site-wide script).
 * - Attaches ONE delegated click listener on document so every
 *   `data-affiliate` link across the site is tracked as an
 *   `affiliate_click` event with vendor + placement — no per-link wiring.
 */
export default function Analytics() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement | null)?.closest?.(
        'a[data-affiliate]',
      ) as HTMLAnchorElement | null;
      if (!target) return;
      trackEvent('affiliate_click', {
        vendor: target.getAttribute('data-affiliate') || 'unknown',
        location: target.getAttribute('data-location') || 'unknown',
        href: target.getAttribute('href') || '',
      });
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (!isGaEnabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
        `}
      </Script>
    </>
  );
}
