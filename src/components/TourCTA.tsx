'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

export default function TourCTA() {
  return (
    <section style={{ padding: '48px 0' }}>
      <div
        className="article-card"
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
          borderLeft: '3px solid var(--primary-color)',
          padding: '40px',
        }}
      >
        <h2 style={{ fontSize: '28px', marginBottom: '12px' }}>Want a custom China itinerary?</h2>
        <p
          style={{
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            marginBottom: '24px',
            maxWidth: '500px',
            margin: '0 auto 24px',
          }}
        >
          We work with a licensed Guangzhou travel agency to build personalized routes — whether
          it&apos;s your first time in Beijing, an off-the-beaten-path Silk Road trip, or a Xinjiang
          small-group tour with a local guide.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ padding: '14px 28px' }}
            onClick={() => trackEvent('tour_cta_click', { location: 'inline' })}
          >
            Ask About a Custom Trip &rarr;
          </Link>
        </div>
        <p
          style={{
            fontSize: '13px',
            color: 'var(--text-muted)',
            marginTop: '16px',
          }}
        >
          No obligation. Just tell us your dates and interests — we&apos;ll send you a free proposal
          within 48 hours.
        </p>
      </div>
    </section>
  );
}
