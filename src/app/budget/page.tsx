import { Metadata } from 'next';
import Link from 'next/link';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import BudgetCalculator from '@/components/BudgetCalculator';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'China Trip Cost Calculator (2026) | How Much Is a China Trip?',
  description:
    'Interactive China trip budget calculator. Set your travel style, trip length and group size to see a full cost breakdown — accommodation, food, transport, activities and flights.',
  alternates: { canonical: '/budget' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a trip to China cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 10-day mid-range trip for two people costs roughly $3,000-3,500 total including international flights, accommodation, food and activities. Backpackers can do it for around $1,800-2,200; a comfort/luxury trip runs $5,500+. Use the calculator above for a detailed breakdown.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is China expensive to visit for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — China is cheaper than Japan, Singapore or Western Europe. Street food costs $3-5, metro rides under $1, and a 3-star hotel $50-80/night. The biggest costs are international flights and, if applicable, the visa. Daily on-the-ground costs are low.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I bring cash to China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Very little. China is essentially cashless — you will pay with Alipay or WeChat Pay everywhere, including street vendors. Link your foreign Visa or Mastercard to Alipay before you arrive (see our payment guide). Carry a small amount of cash (~¥500) only as backup.',
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
      name: 'Budget Calculator',
      item: 'https://beforechina.com/budget',
    },
  ],
};

export default function BudgetPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="budget-schema" />

      {/* Hero */}
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Trip Planning</Kicker>
          <h1>How Much Does a China Trip Cost?</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            Drag the sliders to match your trip. The breakdown updates live — no sign-up, no email
            gate. As a local, these are the real numbers I&apos;d give a friend, not the inflated
            &ldquo;from $3,999 per person&rdquo; agency quotes.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <BudgetCalculator />
        </div>
      </section>

      {/* Cross-link */}
      <section style={{ padding: '48px 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Kicker>Next Steps</Kicker>
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Cut your costs before you fly</h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              marginBottom: '32px',
              maxWidth: '600px',
              margin: '0 auto 32px',
            }}
          >
            These three tools save most travellers more than $200 combined.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/visa" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              Check if you need a visa (save $140)
            </Link>
            <Link href="/esim" className="btn btn-outline" style={{ padding: '14px 28px' }}>
              Get an eSIM (skip the $50 airport SIM)
            </Link>
            <Link href="/payment" className="btn btn-outline" style={{ padding: '14px 28px' }}>
              Set up Alipay before you land
            </Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <SignatureCard />
      </div>
    </div>
  );
}
