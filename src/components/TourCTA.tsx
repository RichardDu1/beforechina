'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

export default function TourCTA() {
  return (
    <section style={{ padding: 'var(--section-gap-md) 0', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(24px, 3.5vw, 32px)',
            fontWeight: 500,
            marginBottom: '16px',
          }}
        >
          Ready to plan your China journey?
        </h2>
        <p
          style={{
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: '24px',
            fontSize: '16px',
          }}
        >
          Every journey we design is built from scratch around your interests, pace, and budget.
          Tell us what moves you — we will craft the rest.
        </p>
        <Link
          href="/contact"
          className="text-link"
          style={{ fontSize: '17px' }}
          onClick={() => trackEvent('tour_cta_click', { location: 'inline' })}
        >
          Plan My Journey &rarr;
        </Link>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-muted)',
            marginTop: '16px',
          }}
        >
          Or call us: +44 20 XXXX XXXX
        </p>
      </div>
    </section>
  );
}
