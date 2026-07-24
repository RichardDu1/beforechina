import { Metadata } from 'next';
import Link from 'next/link';
import Kicker from '@/components/Kicker';

export const metadata: Metadata = {
  title: 'BeforeChina | The Ultimate China Travel Guide & Toolkit (2026)',
  description:
    'A no-bs China travel guide created by a UK-based Chinese local. Learn how to survive the Great Firewall, set up Alipay, and navigate visa-free entry.',
};

export default function Home() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Hero Section */}
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>China Travel Toolkit</Kicker>
          <h1 style={{ fontSize: '52px', marginBottom: '24px', lineHeight: '1.1' }}>
            The Only China Travel Guide You Actually Need.
          </h1>
          <p className="hero-subtitle" style={{ marginBottom: '32px' }}>
            Most China travel tips online are written by tour agencies trying to sell you a $3,000
            package. I&apos;m Richard, a Chinese native living in the UK, and I built this toolkit
            to help you survive your first 48 hours without losing your mind.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link
              href="#toolkit"
              className="btn btn-primary"
              style={{ padding: '16px 32px', fontSize: '18px' }}
            >
              Start Planning
            </Link>
          </div>
        </div>
      </section>

      {/* Toolkit Grid */}
      <section id="toolkit" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Kicker>The Pre-Flight Survival Kit</Kicker>
            <h2 style={{ fontSize: '32px' }}>What You Need Before You Board</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Visa Checker */}
            <Link
              href="/visa"
              className="article-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Kicker>Entry Requirements</Kicker>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Do I Need a Visa?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.5' }}>
                China just opened up 15-day visa-free entry and 240-hour transit visas to many
                nations. Check if your passport qualifies before paying $140.
              </p>
            </Link>

            {/* VPN */}
            <Link
              href="/vpn"
              className="article-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Kicker>Internet Access</Kicker>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Best VPN for China</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Warning: 95% of VPNs are blocked. Here are the only 2 that actually work in 2026 to
                access Google and WhatsApp.
              </p>
            </Link>

            {/* eSIM */}
            <Link
              href="/esim"
              className="article-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Kicker>Connectivity</Kicker>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Best eSIM for China</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Skip the 45-minute airport registration. Get an international eSIM to land with
                instant data that naturally bypasses censorship.
              </p>
            </Link>

            {/* Payment */}
            <Link
              href="/payment"
              className="article-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Kicker>Money</Kicker>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>How to Pay</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Cash is dead. Learn how to link your foreign Visa or Mastercard to Alipay and WeChat
                Pay before you arrive.
              </p>
            </Link>

            {/* Budget Calculator */}
            <Link
              href="/budget"
              className="article-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Kicker>Planning</Kicker>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Trip Cost Calculator</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                How much does a China trip actually cost? Drag the sliders for your style, days and
                group size — see a live breakdown, no email gate.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
