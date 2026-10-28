import { Metadata } from 'next';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'About BeforeChina | China Travel Specialists',
  description:
    'BeforeChina is a small team of China specialists designing private tailor-made journeys. Born in China, based in the UK — we know both sides.',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    url: 'https://beforechina.com/about',
    title: 'About BeforeChina | China Travel Specialists',
    description:
      'A small team of China specialists designing private journeys for travellers who want more than a tour.',
    images: [
      {
        url: '/images/destinations/golden-triangle-og.webp',
        width: 1200,
        height: 630,
        alt: 'BeforeChina — Tailor-Made Journeys to China',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Hero */}
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1>We Are BeforeChina</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            A small team of China specialists designing private journeys for travellers who want
            more than a tour.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: 'var(--section-gap-sm) 0' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 500,
              marginBottom: '24px',
            }}
          >
            Our Story
          </h2>
          <div style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '20px' }}>
              BeforeChina was born from a simple frustration: every China travel and healthcare
              website for Westerners was either a faceless OTA listing the same five hotels, a
              commission-driven medical broker hiding real hospital tariffs, or a dated portal
              written like a brochure from 2012.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Our bilingual research team splits its time between the UK and major Chinese hubs
              (Shanghai, Beijing, Shenzhen, and Chengdu). After years of helping British, American,
              and Australian friends navigate China&apos;s cashless payment apps, visa exemptions,
              high-speed rail, and Tier-3 hospital international departments, we kept hearing the
              same thing: &ldquo;I wish I had known this before I landed.&rdquo;
            </p>
            <p style={{ marginBottom: '20px' }}>
              So we built BeforeChina — an independent pre-trip toolkit, healthcare price audit, and
              tailor-made route guide written by people who fluently bridge both sides of the
              linguistic and cultural gap.
            </p>
            <p>
              Whether you are planning a private journey along the Silk Road, checking if your
              passport qualifies for 30-day visa-free entry, or comparing Shanghai hospital checkup
              and dental implant tariffs against UK/US private prices, every guide is built around
              verified primary data.
            </p>
          </div>
        </div>
      </section>

      {/* Our Research & Planning Pillars */}
      <section style={{ padding: 'var(--section-gap-sm) 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 3.5vw, 34px)',
              fontWeight: 500,
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            How Our Bilingual Team Operates
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
            }}
          >
            <div className="article-card">
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--primary-color)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}
              >
                London &amp; Shanghai Desk
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  fontWeight: 500,
                  marginBottom: '10px',
                }}
              >
                Pre-Trip Survival &amp; Policy Audits
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '15px',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Tracks National Immigration Administration (NIA) visa-free rules, tests roaming
                eSIMs and VPN obfuscation protocols inside mainland China, and verifies foreign
                Visa/Mastercard rules on Alipay and WeChat Pay.
              </p>
            </div>

            <div className="article-card">
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--primary-color)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}
              >
                Shanghai &amp; Shenzhen Field Research
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  fontWeight: 500,
                  marginBottom: '10px',
                }}
              >
                Healthcare, Dental &amp; Optical Benchmarks
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '15px',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Audits published fee schedules at Tier-3 public hospital International Medical
                Departments (Huashan, Ruijin), Volume-Based Procurement (VBP) dental implant caps,
                and optical market pricing — with zero public hospital kickbacks.
              </p>
            </div>

            <div className="article-card">
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--primary-color)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}
              >
                Regional Route Planners
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  fontWeight: 500,
                  marginBottom: '10px',
                }}
              >
                Southwest, Silk Road &amp; Imperial Routes
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '15px',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Designs realistic, unhurried private routes across 18 Chinese regions — pairing
                high-speed rail logistics with boutique courtyard stays, local historians, and
                crowd-free dawn access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ padding: 'var(--section-gap-sm) 0' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 500,
              marginBottom: '24px',
            }}
          >
            How We Work
          </h2>
          <div style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '20px' }}>
              <strong>Every journey is built from scratch.</strong> We don't have a catalogue of
              fixed departures. When you tell us what moves you — the food, the landscapes, the
              history, the people — we design an itinerary that's yours alone.
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>We work with locals, not chains.</strong> Our guides are from the places they
              show you. Our guesthouses are family-run. Our drivers know the back roads. We believe
              the best travel experiences come from real human connections, not corporate contracts.
            </p>
            <p>
              <strong>You're never alone on the road.</strong> From the moment you land to the
              moment you fly home, our team is on WhatsApp. Train cancelled? We'll rebook you. Not
              feeling well? We'll find an English-speaking doctor. Plans change? So does your
              itinerary.
            </p>
          </div>
        </div>
      </section>

      <EnquiryForm />
    </div>
  );
}
