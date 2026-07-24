import VisaChecker from '@/components/VisaChecker';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import NextSteps from '@/components/NextSteps';
import TourCTA from '@/components/TourCTA';
import JsonLd from '@/components/JsonLd';
import { affiliateProps } from '@/lib/affiliates';

export const metadata = {
  title: 'Do I Need a Visa for China in 2026? | Visa-Free Checker',
  description:
    "Check if you qualify for China's 30-day visa-free entry or 240-hour transit exemption. Avoid paying $140 for an L-Visa if you don't have to.",
  alternates: { canonical: '/visa' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a visa for China in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your passport. Citizens of the UK, Canada, Australia, Japan, South Korea, and most EU countries can enter China visa-free for up to 30 days until 31 December 2026. US citizens qualify for the 240-hour (10-day) transit exemption only. Use the checker above to confirm your nationality.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the China 240-hour transit visa-free work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: ' Nationals of 54 countries can enter China without a visa for up to 10 days (240 hours) if they are transiting to a third country. You must arrive and depart through one of the 60 designated ports and hold a confirmed onward ticket to a third country or region (Hong Kong, Macau and Taiwan count as third regions). A direct round trip does not qualify.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries get 30-day visa-free entry to China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'China grants 30-day unilateral visa-free entry to citizens of the UK, Canada, Australia, New Zealand, Japan, South Korea, most EU member states (excluding Czech Republic and Lithuania), plus Brazil, Argentina, Chile, Russia and several Gulf states, among others. This temporary regime runs until 31 December 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I apply for a Chinese tourist visa (L-Visa)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your nationality requires a visa, apply at your nearest Chinese embassy or Visa Application Service Centre 1-2 months before travel. You need a passport with 6+ months validity, a photo, confirmed flight and hotel bookings, and the completed application form. Processing typically takes 4-5 business days.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Visa-Free Checker',
      item: 'https://beforechina.com/visa',
    },
  ],
};

export default function VisaPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="visa-schema" />

      {/* Hero */}
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Entry Requirements</Kicker>
          <h1>Do I Need a Visa for China?</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            &ldquo;Richard, how do I apply for a tourist visa?&rdquo; — My British friends ask me
            this every week. My answer? <strong>You probably don&apos;t need one anymore.</strong>{' '}
            China has expanded visa-free entry to 30 days for the UK, Canada, Australia, Japan and
            most of Europe. Use my tool below to check.
          </p>
        </div>
      </section>

      {/* Visa Checker Tool */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <VisaChecker />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '64px 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <Kicker>Policy Explained</Kicker>
            <h2 style={{ fontSize: '32px' }}>China Visa-Free Policies</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* 30-Day Unilateral */}
            <div className="article-card">
              <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--accent-color)' }}>
                30-Day Visa-Free Entry (The Big 2026 Expansion)
              </h3>
              <p
                style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}
              >
                China now grants <strong>30-day visa-free entry</strong> to citizens of the UK
                (British citizens), Canada, Australia, New Zealand, Japan, South Korea, and almost
                the entire EU, plus Brazil, Argentina, Chile, Russia and several Gulf states. You
                fly directly in and out — no transit, no visa application. This temporary regime
                runs until <strong>31 December 2026</strong>.
              </p>
            </div>

            {/* 240 Hour Transit */}
            <div className="article-card">
              <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--primary-color)' }}>
                What Is the China 240-Hour Transit Visa-Free?
              </h3>
              <p
                style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}
              >
                If you hold a passport from one of the 54 qualifying countries (including the{' '}
                <strong>United States</strong>, which has no unilateral visa-free), you can stay in
                designated Chinese regions for up to{' '}
                <strong>240 hours (10 days) without a visa</strong> — replacing the older
                72/144-hour regimes.
              </p>
              <div
                style={{
                  padding: '16px',
                  backgroundColor: 'var(--callout-bg-primary)',
                  borderLeft: '3px solid var(--primary-color)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <h4
                  style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--primary-color)' }}
                >
                  The Ultimate Catch (Do Not Mess This Up)
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  It <strong>must</strong> be a transit. I have seen tourists denied boarding at
                  Heathrow because they booked <em>London → Shanghai → London</em>. That is NOT a
                  transit. You must be travelling to a third country or region. For example:{' '}
                  <em>London → Shanghai → Tokyo → London</em> works perfectly. (Pro Tip: Hong Kong
                  and Macau count as third regions!)
                </p>
              </div>
            </div>

            {/* How to apply */}
            <div id="apply" className="article-card">
              <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--primary-color)' }}>
                Need a Visa? How to Apply for an L-Visa
              </h3>
              <p
                style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}
              >
                If the checker shows you need a visa, apply at your nearest Chinese embassy or Visa
                Application Service Centre <strong>1-2 months before travel</strong>.
              </p>

              <h4 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>
                Documents You&apos;ll Need
              </h4>
              <ul
                style={{
                  paddingLeft: '20px',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  marginBottom: '24px',
                }}
              >
                <li>
                  Passport with <strong>6+ months validity</strong> beyond your planned departure
                  from China
                </li>
                <li>One passport-sized photo (48mm x 33mm, white background)</li>
                <li>
                  Completed <strong>Visa Application Form (V.2013)</strong> — typed, not handwritten
                </li>
                <li>Round-trip flight booking confirmation</li>
                <li>
                  Hotel bookings for your entire stay (or an invitation letter from a Chinese
                  resident)
                </li>
                <li>
                  Proof of legal status in your country of application (if applying from a country
                  you&apos;re not a citizen of)
                </li>
              </ul>

              <h4 style={{ fontSize: '18px', marginBottom: '12px' }}>
                Processing Times &amp; Fees
              </h4>
              <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                      <th
                        style={{
                          textAlign: 'left',
                          padding: '10px 12px',
                          color: 'var(--text-secondary)',
                          fontWeight: 600,
                        }}
                      >
                        Service
                      </th>
                      <th
                        style={{
                          textAlign: 'center',
                          padding: '10px 12px',
                          color: 'var(--text-secondary)',
                          fontWeight: 600,
                        }}
                      >
                        Processing Time
                      </th>
                      <th
                        style={{
                          textAlign: 'right',
                          padding: '10px 12px',
                          color: 'var(--text-secondary)',
                          fontWeight: 600,
                        }}
                      >
                        Approx. Fee (USD)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '10px 12px' }}>Standard</td>
                      <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                        4-5 business days
                      </td>
                      <td style={{ padding: '10px 12px', textAlign: 'right' }}>$140</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '10px 12px' }}>Express</td>
                      <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                        2-3 business days
                      </td>
                      <td style={{ padding: '10px 12px', textAlign: 'right' }}>$170</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 12px' }}>Rush (same-day)</td>
                      <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                        Same business day
                      </td>
                      <td style={{ padding: '10px 12px', textAlign: 'right' }}>$200+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                Fees vary by nationality and reciprocity agreements. US citizens pay $140; UK
                citizens pay £120; EU citizens typically pay €126. Always check your local Chinese
                embassy website for exact pricing.
              </p>
            </div>

            {/* Visa Type Comparison */}
            <div className="article-card">
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>
                At a Glance: Which Entry Rule Applies to You?
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                      <th
                        style={{
                          textAlign: 'left',
                          padding: '10px 12px',
                          color: 'var(--text-secondary)',
                          fontWeight: 600,
                        }}
                      ></th>
                      <th
                        style={{
                          textAlign: 'center',
                          padding: '10px 12px',
                          color: 'var(--accent-color)',
                          fontWeight: 600,
                        }}
                      >
                        30-Day Visa-Free
                      </th>
                      <th
                        style={{
                          textAlign: 'center',
                          padding: '10px 12px',
                          color: 'var(--primary-color)',
                          fontWeight: 600,
                        }}
                      >
                        240-Hour Transit
                      </th>
                      <th
                        style={{
                          textAlign: 'center',
                          padding: '10px 12px',
                          color: 'var(--text-secondary)',
                          fontWeight: 600,
                        }}
                      >
                        L-Visa
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        'Duration',
                        'Up to 30 days',
                        'Up to 10 days (240 hrs)',
                        '30-90 days (apply for duration)',
                      ],
                      [
                        'Who qualifies',
                        'UK, Canada, Australia, Japan, Korea, most EU, Brazil, etc.',
                        '54 nationalities (incl. USA)',
                        'Any nationality not covered above',
                      ],
                      [
                        'Flight rule',
                        'Direct round-trip OK',
                        'Must transit to 3rd country',
                        'Any itinerary OK',
                      ],
                      ['Cost', 'Free', 'Free', '~$140+'],
                      ['Extendable', 'No', 'No', 'Yes (apply at local PSB)'],
                      [
                        'Multiple entry',
                        'Yes (within validity)',
                        'Single entry only',
                        'Yes (request on form)',
                      ],
                    ].map(([label, free, transit, lvisa]) => (
                      <tr key={label} style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <td style={{ padding: '10px 12px', fontWeight: 500 }}>{label}</td>
                        <td style={{ padding: '10px 12px', textAlign: 'center', fontSize: '14px' }}>
                          {free}
                        </td>
                        <td style={{ padding: '10px 12px', textAlign: 'center', fontSize: '14px' }}>
                          {transit}
                        </td>
                        <td style={{ padding: '10px 12px', textAlign: 'center', fontSize: '14px' }}>
                          {lvisa}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Contextual CTA */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Once you know your visa status, the next thing to sort is staying connected.
            </p>
            <a
              {...affiliateProps('airalo', 'visa-bottom-cta')}
              className="btn btn-primary"
              style={{ padding: '14px 28px' }}
            >
              Get an eSIM for China →
            </a>
          </div>
        </div>
      </section>

      <TourCTA />

      <NextSteps
        steps={[
          {
            href: '/esim',
            label: 'Get an eSIM',
            description: 'Land with internet that bypasses the firewall',
          },
          {
            href: '/vpn',
            label: 'Set up a VPN',
            description: 'The only 2 VPNs that still work in China',
          },
          {
            href: '/payment',
            label: 'Set up Alipay',
            description: 'Link your foreign card before you fly',
          },
          {
            href: '/budget',
            label: 'Calculate your budget',
            description: 'See what a China trip actually costs',
          },
        ]}
      />

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <SignatureCard />
      </div>
    </div>
  );
}
