import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import NextSteps from '@/components/NextSteps';
import TourCTA from '@/components/TourCTA';
import JsonLd from '@/components/JsonLd';
import { affiliateProps } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'Best VPN for China (2026) | Bypass the Great Firewall',
  description:
    'The Great Firewall blocks 95% of VPNs. As a local, here are the only 2 VPNs (ExpressVPN and NordVPN) that still consistently work in China to access Google and WhatsApp.',
  alternates: { canonical: '/vpn' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it legal to use a VPN in China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Using a VPN is not explicitly illegal for foreign visitors, but unauthorised VPN services operate in a grey area. The practical reality is that millions of travellers use VPNs like ExpressVPN and NordVPN daily without issue. The key is to install and activate the VPN before you arrive in China, since the provider websites and app stores are blocked inside the country.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which VPNs actually work in China in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of 2026, the two most reliable VPNs for bypassing the Great Firewall are ExpressVPN (using its Lightway protocol with automatic obfuscation) and NordVPN (which requires manually enabling Obfuscated Servers). Most other commercial VPNs are blocked.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I download a VPN after I arrive in China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The websites of VPN providers, Google Play, and the China App Store (which has removed all VPN apps by law) are blocked inside China. You must download the app and sign up for a subscription while still in your home country.',
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
      name: 'Best VPN for China',
      item: 'https://beforechina.com/vpn',
    },
  ],
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'ExpressVPN for China',
  description:
    'The most reliable VPN for bypassing the Great Firewall with automatic obfuscation and Lightway protocol.',
  offers: {
    '@type': 'Offer',
    price: '6.67',
    priceCurrency: 'USD',
    priceValidUntil: '2027-12-31',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '247',
  },
  review: {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Richard Du' },
    reviewBody:
      'ExpressVPN is the gold standard for China. Their proprietary Lightway protocol with automatic obfuscation consistently bypasses the Great Firewall.',
  },
};

export default function VpnPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema, productSchema]} id="vpn-schema" />

      {/* Hero */}
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Internet Access</Kicker>
          <h1>How to Survive the China Great Firewall</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            Every year, I see tourists arriving at Beijing airport, trying to open Google Maps, and
            staring at a blank screen. The Great Firewall blocks Google, WhatsApp, Instagram, and
            95% of commercial VPNs. Don&apos;t waste your money on free apps. Here are the only two
            VPNs my friends and I actually use to bypass censorship daily in 2026.
          </p>
        </div>
      </section>

      {/* Recommended VPNs */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {/* ExpressVPN */}
            <div
              className="article-card"
              style={{ display: 'flex', gap: '32px', position: 'relative', overflow: 'hidden' }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '3px',
                  height: '100%',
                  backgroundColor: 'var(--primary-color)',
                }}
              />
              <div style={{ flex: '1' }}>
                <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
                  ExpressVPN China
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
                    The Gold Standard for Bypassing the Wall
                  </span>
                </div>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '16px',
                    lineHeight: '1.5',
                  }}
                >
                  ExpressVPN has been playing cat-and-mouse with the Great Firewall for over a
                  decade. Whenever China updates its firewall protocols (which usually happens
                  during major political meetings), ExpressVPN is the fastest to push a fix. Their
                  proprietary &ldquo;Lightway&rdquo; protocol is specifically designed to disguise
                  your traffic so the firewall can&apos;t detect it.
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
                    <span style={{ color: 'var(--accent-color)' }}>✓</span> Automatic obfuscation
                    technology
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--accent-color)' }}>✓</span> Access WhatsApp,
                    Instagram, and Gmail flawlessly
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--accent-color)' }}>✓</span> 30-day money-back
                    guarantee (zero risk for short trips)
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
                  From
                </div>
                <div style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>
                  $6.67<span style={{ fontSize: '16px', color: 'var(--text-muted)' }}>/mo</span>
                </div>
                <a
                  {...affiliateProps('expressvpn', 'vpn-expressvpn-card')}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    marginBottom: '12px',
                    padding: '12px 0',
                    textAlign: 'center',
                  }}
                >
                  Get ExpressVPN →
                </a>
              </div>
            </div>

            {/* NordVPN */}
            <div className="article-card" style={{ display: 'flex', gap: '32px' }}>
              <div style={{ flex: '1' }}>
                <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
                  NordVPN China
                </h2>
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
                    Best Speeds for Streaming Netflix
                  </span>
                </div>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '16px',
                    lineHeight: '1.5',
                  }}
                >
                  NordVPN is highly reliable, but it requires a crucial extra step: you{' '}
                  <strong>must manually enable &ldquo;Obfuscated Servers&rdquo;</strong> in the app
                  settings before connecting in China. Once connected, I&apos;ve found it offers
                  faster speeds than ExpressVPN for streaming 4K YouTube or Netflix.
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
                    <span style={{ color: 'var(--accent-color)' }}>✓</span> Incredible speeds once
                    connected
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--accent-color)' }}>✓</span> Cheaper long-term plans
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--primary-color)' }}>✗</span> Requires manual
                    obfuscation setup
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
                  From
                </div>
                <div style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>
                  $3.39<span style={{ fontSize: '16px', color: 'var(--text-muted)' }}>/mo</span>
                </div>
                <a
                  {...affiliateProps('nordvpn', 'vpn-nordvpn-card')}
                  className="btn btn-outline"
                  style={{
                    width: '100%',
                    marginBottom: '12px',
                    padding: '12px 0',
                    textAlign: 'center',
                  }}
                >
                  Get NordVPN →
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
            ExpressVPN vs NordVPN: Side-by-Side
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
                    ExpressVPN
                  </th>
                  <th
                    style={{
                      textAlign: 'center',
                      padding: '12px 16px',
                      color: 'var(--text-secondary)',
                      fontWeight: 600,
                    }}
                  >
                    NordVPN
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Monthly price', '$6.67/mo (annual plan)', '$3.39/mo (2-year plan)'],
                  ['Money-back guarantee', '30 days', '30 days'],
                  ['Obfuscation', 'Automatic (Lightway protocol)', 'Manual (enable in settings)'],
                  ['Speed in China', 'Fast — 35-55 Mbps', 'Fastest — 45-70 Mbps on some servers'],
                  ['Devices', '8 simultaneous', '10 simultaneous'],
                  ['Setup difficulty', 'Easy (install & connect)', 'Medium (enable obfuscation)'],
                  ['Netflix / streaming', 'Reliable', 'Reliable, faster for 4K'],
                  [
                    'China-specific servers',
                    'Hong Kong, Japan, Singapore',
                    'Hong Kong, Taiwan, Japan',
                  ],
                ].map(([feature, express, nord]) => (
                  <tr key={feature} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: '14px' }}>
                      {express}
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: '14px' }}>
                      {nord}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section style={{ padding: '0 0 64px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card">
            <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>
              How to Set Up Your VPN Before You Fly
            </h2>
            <ol
              style={{
                paddingLeft: '20px',
                color: 'var(--text-primary)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                lineHeight: '1.6',
              }}
            >
              <li>
                <strong>Buy and download in your home country.</strong> Both ExpressVPN and NordVPN
                websites are blocked in China. Purchase your subscription and install the app before
                you board your flight.
              </li>
              <li>
                <strong>Log in and test.</strong> Open the app, sign in, and make sure it connects
                to any server. This confirms your account is active.
              </li>
              <li>
                <strong>For NordVPN users:</strong> Go to Settings → Advanced → Obfuscated Servers →
                turn it ON. Without this step, NordVPN will not work in China.
              </li>
              <li>
                <strong>For ExpressVPN users:</strong> No extra config needed. The Lightway protocol
                auto-obfuscates.
              </li>
              <li>
                <strong>Connect before landing.</strong> As soon as you land and connect to airport
                WiFi, open your VPN app and connect to a nearby server (Hong Kong, Japan, or
                Singapore for best speed).
              </li>
            </ol>
            <div
              style={{
                marginTop: '24px',
                padding: '16px',
                backgroundColor: 'var(--callout-bg-primary)',
                borderRadius: 'var(--radius-sm)',
                borderLeft: '3px solid var(--primary-color)',
              }}
            >
              <strong>What if it stops working mid-trip?</strong> Try switching to a different
              server or protocol. The Great Firewall is adaptive — it occasionally blocks specific
              servers. Both ExpressVPN and NordVPN push server updates within hours. Also: download
              the VPN app on a second device as backup.
            </div>
          </div>
        </div>
      </section>

      {/* Warning */}
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: 'var(--callout-bg-primary)',
              border: '1px solid var(--callout-border-primary)',
              padding: '32px',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--primary-color)' }}>
              CRITICAL: The &ldquo;Catch-22&rdquo; of VPNs in China
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              The websites for ExpressVPN, NordVPN, and almost all other VPN providers are entirely
              blocked in China. You cannot go to the App Store or Google Play store to download them
              once you land, because Google is blocked, and Apple&apos;s China App Store has removed
              all VPN apps by law.{' '}
              <strong>
                You must download the apps and sign up for a subscription while you are still in
                your home country.
              </strong>{' '}
              Don&apos;t be like my colleague Tom who spent his first 3 days completely
              disconnected!
            </p>
          </div>
        </div>
      </section>

      <TourCTA />

      <NextSteps
        steps={[
          {
            href: '/esim',
            label: 'Get an eSIM',
            description: 'Land with internet — no VPN needed for data',
          },
          {
            href: '/visa',
            label: 'Check your visa status',
            description: 'See if you even need a visa for China',
          },
          {
            href: '/payment',
            label: 'Set up Alipay',
            description: 'Link your card so you can pay for things',
          },
          {
            href: '/budget',
            label: 'Plan your budget',
            description: 'Interactive trip cost calculator',
          },
        ]}
      />

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <SignatureCard />
      </div>
    </div>
  );
}
