import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import JsonLd from '@/components/JsonLd';
import { affiliateProps } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'China Travel Insurance Guide (2026) | BeforeChina',
  description:
    'Do you need travel insurance for China? Yes. Medical costs for foreigners are high and language barriers make emergencies difficult. Compare the best options.',
  alternates: { canonical: '/insurance' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need travel insurance for China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Foreigners cannot use China's subsidised public healthcare system and will be treated at international clinics or VIP hospital wards that charge Western prices. A simple ER visit for food poisoning can cost $500+, and you are required to pay upfront before treatment.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does travel insurance for China cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard policy covering emergency medical up to $250,000 costs roughly $45-55 per month through providers like SafetyWing, which functions as a flexible subscription. Comprehensive adventure-sports coverage through World Nomads costs more but covers over 200 high-risk activities.',
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
      name: 'China Travel Insurance',
      item: 'https://beforechina.com/insurance',
    },
  ],
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'SafetyWing Nomad Insurance',
  description:
    'Flexible travel insurance for China covering emergency medical up to $250,000. Subscription model — cancel anytime.',
  offers: {
    '@type': 'Offer',
    price: '45.00',
    priceCurrency: 'USD',
    priceValidUntil: '2027-12-31',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    reviewCount: '156',
  },
  review: {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Richard Du' },
    reviewBody:
      'SafetyWing is the best travel insurance option for China — flexible subscription, covers emergency medical, and you can buy it after your trip has already started.',
  },
};

export default function InsurancePage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema, productSchema]} id="insurance-schema" />

      {/* Hero */}
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Travel Insurance</Kicker>
          <h1>Travel Insurance for China</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            While China is one of the safest countries in the world in terms of crime, medical
            emergencies happen. As a foreigner, you cannot use the subsidised public healthcare
            system.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <Kicker>The Reality</Kicker>
            <h2 style={{ fontSize: '32px' }}>The Healthcare Reality in China</h2>
          </div>

          <div
            className="article-card"
            style={{ marginBottom: '48px', borderLeft: '3px solid var(--accent-warm)' }}
          >
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>
              VIP Clinics vs Public Hospitals
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              If you get sick or injured, you will likely be taken to an &ldquo;International
              Clinic&rdquo; or the VIP ward of a public hospital where English is spoken.{' '}
              <strong>These clinics charge Western prices.</strong> A simple ER visit for food
              poisoning can cost $500+.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              You are required to pay <strong>upfront</strong> before receiving treatment. Good
              travel insurance will either guarantee payment to the hospital directly or reimburse
              you quickly.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <Kicker>Top Picks</Kicker>
            <h2 style={{ fontSize: '32px' }}>Insurance Recommendations</h2>
          </div>

          {/* SafetyWing */}
          <div
            className="article-card"
            style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}
          >
            <div style={{ flex: '1' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>
                SafetyWing (Nomad Insurance)
              </div>
              <p
                style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.5' }}
              >
                Best for digital nomads and standard travellers. It functions like a subscription
                ($45-55/month), which is extremely flexible if you don&apos;t have a fixed return
                ticket.
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--accent-color)' }}>✓</span> Covers emergency medical
                  up to $250k
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--accent-color)' }}>✓</span> Buy even after your trip
                  has started
                </li>
              </ul>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a
                {...affiliateProps('safetywing', 'insurance-safetywing-card')}
                className="btn btn-primary"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* WorldNomads */}
          <div className="article-card" style={{ display: 'flex', gap: '24px' }}>
            <div style={{ flex: '1' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>
                World Nomads
              </div>
              <p
                style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.5' }}
              >
                Best for adventure travellers. If your China trip involves hiking Tiger Leaping
                Gorge or adventure sports, World Nomads covers over 200 high-risk activities.
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--accent-color)' }}>✓</span> High-limit medical
                  evacuation
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--accent-color)' }}>✓</span> Comprehensive adventure
                  sports coverage
                </li>
              </ul>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a
                {...affiliateProps('worldnomads', 'insurance-worldnomads-card')}
                className="btn btn-outline"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <SignatureCard />
      </div>
    </div>
  );
}
