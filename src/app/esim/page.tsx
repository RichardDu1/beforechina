import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import NextSteps from '@/components/NextSteps';
import TourCTA from '@/components/TourCTA';
import JsonLd from '@/components/JsonLd';
import { affiliateProps, affiliates } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'Best eSIM for China (2026) | Bypass the Great Firewall Instantly',
  description:
    "Don't buy a local SIM card at the airport. Discover the best eSIM for China that gives you instant data and natively bypasses the Great Firewall without a VPN.",
  alternates: { canonical: '/esim' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does eSIM work in China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. International eSIMs like Airalo\'s "Chinacom" roam into China from outside the country (typically via Singapore), which means they route traffic around the Great Firewall. You get instant data and access to Google, WhatsApp and Instagram without needing a separate VPN.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy a local SIM card at a Chinese airport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Local Chinese SIM cards are subject to internet censorship — they block Google, WhatsApp and Instagram — and require 45 minutes of passport registration and facial recognition at the airport. An international eSIM installs in 2 minutes before you fly and bypasses the firewall entirely.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best eSIM for China in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Airalo's Chinacom eSIM is the most reliable option — it partners with China Unicom and automatically bypasses the Great Firewall. For heavy data users, Holafly offers unlimited data packages with a built-in firewall bypass.",
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
      name: 'Best eSIM for China',
      item: 'https://beforechina.com/esim',
    },
  ],
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Airalo Chinacom eSIM',
  description:
    'International eSIM for China that bypasses the Great Firewall. Partners with China Unicom for fast 4G/5G data.',
  offers: {
    '@type': 'Offer',
    price: '5.00',
    priceCurrency: 'USD',
    priceValidUntil: '2027-12-31',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '189',
  },
  review: {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Richard Du' },
    reviewBody:
      'Airalo Chinacom is the most reliable eSIM for China. It routes through Singapore, bypassing the Great Firewall automatically.',
  },
};

export default function EsimPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema, productSchema]} id="esim-schema" />

      {/* Hero */}
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Connectivity</Kicker>
          <h1>The Best eSIMs for China in 2026</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            As a local, my #1 advice to foreigners is:{' '}
            <strong>Do not buy a physical SIM card at the airport.</strong> Local SIM cards block
            Google, WhatsApp, and require 45 minutes of passport scanning. Get an international eSIM
            to land with instant data that naturally bypasses the Great Firewall.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Kicker>Top Picks</Kicker>
            <h2 style={{ fontSize: '32px' }}>My eSIM Recommendations</h2>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {/* Airalo */}
            <div
              className="article-card"
              style={{
                display: 'flex',
                gap: '32px',
                position: 'relative',
                overflow: 'hidden',
                borderLeft: '3px solid var(--primary-color)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '-32px',
                  backgroundColor: 'var(--primary-color)',
                  color: 'var(--text-on-primary)',
                  padding: '4px 40px',
                  transform: 'rotate(45deg)',
                  fontSize: '12px',
                  fontWeight: 700,
                }}
              >
                TOP PICK
              </div>
              <div style={{ flex: '1' }}>
                <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
                  Airalo (Chinacom)
                </h2>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '16px',
                  }}
                >
                  <span style={{ color: 'var(--accent-warm)' }}>★★★★★</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                    Most Reliable (What I use for my UK phone)
                  </span>
                </div>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '16px',
                    lineHeight: '1.5',
                  }}
                >
                  When I fly back to China, I always put the Airalo &ldquo;Chinacom&rdquo; eSIM on
                  my UK iPhone. Airalo partners directly with China Unicom (one of China&apos;s best
                  networks). Because it routes traffic through Singapore, it{' '}
                  <strong>automatically bypasses the Great Firewall</strong>. You won&apos;t even
                  need a VPN.
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    marginBottom: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--accent-color)' }}>✓</span> Bypasses Firewall (Works
                    with Google/WhatsApp)
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--accent-color)' }}>✓</span> Fast 4G/5G on China
                    Unicom
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--accent-color)' }}>✓</span> Packages from $5 (1GB)
                    to $28 (10GB)
                  </li>
                </ul>
              </div>
              <div
                style={{
                  width: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'var(--bg-color)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '24px',
                }}
              >
                <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Starting at
                </div>
                <div style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>$5.00</div>
                <a
                  {...affiliateProps('airalo', 'esim-airalo-card')}
                  className="btn btn-primary"
                  style={{ width: '100%', marginBottom: '12px' }}
                >
                  Get Airalo →
                </a>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Use code <strong>{affiliates.airalo.promoCode}</strong> for 10% off
                </div>
              </div>
            </div>

            {/* Holafly */}
            <div className="article-card" style={{ display: 'flex', gap: '32px' }}>
              <div style={{ flex: '1' }}>
                <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>Holafly</h2>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '16px',
                  }}
                >
                  <span style={{ color: 'var(--accent-warm)' }}>★★★★☆</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                    Best for Heavy Video Users
                  </span>
                </div>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '16px',
                    lineHeight: '1.5',
                  }}
                >
                  If you are a heavy data user (FaceTiming family, uploading lots of photos),
                  Holafly offers unlimited data packages. It also includes a built-in VPN to bypass
                  the firewall automatically.
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    marginBottom: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--accent-color)' }}>✓</span> True Unlimited Data
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--accent-color)' }}>✓</span> Built-in Firewall Bypass
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--primary-color)' }}>✗</span> Cannot tether/hotspot
                    the unlimited data to your laptop
                  </li>
                </ul>
              </div>
              <div
                style={{
                  width: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'var(--bg-color)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '24px',
                }}
              >
                <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Starting at
                </div>
                <div style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>
                  $19.00
                </div>
                <a
                  {...affiliateProps('holafly', 'esim-holafly-card')}
                  className="btn btn-outline"
                  style={{
                    width: '100%',
                    borderColor: 'var(--text-primary)',
                    color: 'var(--text-primary)',
                  }}
                >
                  Get Holafly →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section style={{ padding: '0 0 64px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '24px', textAlign: 'center' }}>
            Airalo vs Holafly: Detailed Comparison
          </h2>
          <div className="article-card" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      color: 'var(--text-secondary)',
                      fontWeight: 600,
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      textAlign: 'center',
                      padding: '12px 16px',
                      color: 'var(--primary-color)',
                      fontWeight: 600,
                    }}
                  >
                    Airalo
                  </th>
                  <th
                    style={{
                      textAlign: 'center',
                      padding: '12px 16px',
                      color: 'var(--text-secondary)',
                      fontWeight: 600,
                    }}
                  >
                    Holafly
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Network partner', 'China Unicom', 'China Unicom'],
                  ['Firewall bypass', 'Yes (routes via Singapore)', 'Yes (built-in VPN)'],
                  ['Data packages', '1GB / 3GB / 5GB / 10GB', 'Unlimited only'],
                  ['Validity', '7 or 30 days', '1 to 90 days'],
                  ['Tethering', 'Yes', 'No (unlimited plans)'],
                  ['Price range', '$5 — $28', '$19 — $99'],
                  ['App experience', 'Clean, fast setup', 'Simple but fewer options'],
                  ['Best for', 'Light to moderate data users', 'Heavy streamers & video callers'],
                ].map(([feature, airalo, holafly]) => (
                  <tr key={feature} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: '14px' }}>
                      {airalo}
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: '14px' }}>
                      {holafly}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guide */}
      <section style={{ padding: '64px 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <Kicker>Guide</Kicker>
            <h2 style={{ fontSize: '32px' }}>Why You Need an eSIM in China</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>
                1. The &ldquo;Secret&rdquo; Firewall Bypass
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                This is the biggest secret travel agencies won&apos;t tell you. If you buy a
                physical SIM card at Beijing or Shanghai airport, it will be subject to Chinese
                internet censorship. You won&apos;t be able to open Google Maps, WhatsApp, or
                Instagram without a separate VPN. International eSIMs roam into China from outside,
                meaning <strong>they naturally bypass the firewall.</strong>
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>
                2. Avoid the Passport Interrogation
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Buying a local SIM card in China takes about 45 minutes of paperwork, facial
                recognition scanning, and passport registration. After a 14-hour flight, the last
                thing you want is more bureaucracy. An eSIM takes 2 minutes to install before you
                even board your flight in your home country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Guide */}
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '24px', textAlign: 'center' }}>
            How Much Data Do You Need?
          </h2>
          <div className="article-card">
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
              Most travelers overestimate their data needs. Here&apos;s what real usage looks like
              per day in China:
            </p>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '15px',
                marginBottom: '24px',
              }}
            >
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
                    Activity
                  </th>
                  <th
                    style={{
                      textAlign: 'right',
                      padding: '10px 12px',
                      color: 'var(--text-secondary)',
                      fontWeight: 600,
                    }}
                  >
                    Data per use
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Google Maps navigation (1 hour)', '~20 MB'],
                  ['WhatsApp messages (100 texts)', '~5 MB'],
                  ['Instagram photo upload', '~3 MB'],
                  ['Web browsing (1 hour)', '~50 MB'],
                  ['YouTube / Netflix (1 hour SD)', '~500 MB'],
                  ['FaceTime / WhatsApp video call (10 min)', '~80 MB'],
                ].map(([activity, data]) => (
                  <tr key={activity} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '10px 12px' }}>{activity}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'right', fontWeight: 500 }}>
                      {data}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div
              style={{
                padding: '16px',
                backgroundColor: 'var(--bg-color)',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              <strong>Rule of thumb:</strong> 1GB per week for light use (maps, messaging, light
              browsing). 3-5GB per week for moderate use (social media, occasional video). 10GB+ for
              heavy use (streaming, video calls, uploading photos). Most hotels and cafes in China
              have free WiFi, so you can save data by doing heavy downloads at your hotel.
            </div>
          </div>
        </div>
      </section>

      <TourCTA />

      <NextSteps
        steps={[
          {
            href: '/vpn',
            label: 'Get a VPN too',
            description: 'eSIM data + VPN for WiFi = full protection',
          },
          {
            href: '/visa',
            label: 'Check your visa status',
            description: 'See if you need a visa before you go',
          },
          {
            href: '/payment',
            label: 'Set up Alipay',
            description: 'Link your card so you can pay anywhere',
          },
          {
            href: '/budget',
            label: 'Calculate your budget',
            description: 'See the full cost of your trip',
          },
        ]}
      />

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <SignatureCard />
      </div>
    </div>
  );
}
