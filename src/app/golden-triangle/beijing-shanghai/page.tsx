import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Beijing & Shanghai: Imperial China Meets the Future | BeforeChina',
  description: 'Six days split between 3,000-year-old Beijing and 21st-century Shanghai — the Forbidden City to the world\'s second-tallest skyscraper.',
  alternates: { canonical: '/golden-triangle/beijing-shanghai' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to do the Beijing & Shanghai route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This route typically takes 6-7 days. This route skips Xi\'an in favour of a sharper Beijing-Shanghai contrast — the ancient and the futuristic in one trip. You see China\'s imperial past and its present-day ambition, connected by a 4.5-hou',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does the Beijing & Shanghai route cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget approximately $900-1,400/person for this route, including accommodation, transport between cities, food, and activities. International flights are not included.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Beijing & Shanghai', item: 'https://beforechina.com/golden-triangle/beijing-shanghai' },
  ],
};

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Old & New · 6-7 Days</Kicker>
          <h1>Beijing & Shanghai: Imperial China Meets the Future</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            Six days split between 3,000-year-old Beijing and 21st-century Shanghai — the Forbidden City to the world\'s second-tallest skyscraper.
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div>
                <div style={{ fontWeight: 600 }}>6-7 days</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div>
                <div style={{ fontWeight: 600 }}>Beijing (4 days) → Shanghai (3 days)</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div>
                <div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>$900-1,400/person</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              This route skips Xi\'an in favour of a sharper Beijing-Shanghai contrast — the ancient and the futuristic in one trip. You see China\'s imperial past and its present-day ambition, connected by a 4.5-hour high-speed train.
            </p>
          </div>

          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Day-by-Day Itinerary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                day: 'Days 1-3: Beijing',
                content: `Forbidden City, Mutianyu Great Wall, Temple of Heaven, and a hutong evening. See the Beijing In Depth page for full details.`,
                tip: `The Beijing → Shanghai high-speed train departs from Beijing South. The 4.5-hour trains (G1, G3, G5, G7) are the fastest — book these specifically.`,
              },
              {
                day: 'Days 4-6: Shanghai',
                content: `Bund at golden hour, French Concession, soup dumplings, and a day trip to Zhujiajiao Water Town. See the Shanghai In Depth page for full details.`,
                tip: `The G1 train (Beijing South → Shanghai Hongqiao) departs at 7am, arrives 11:29am — you get a full afternoon in Shanghai. This is the best option for maximising your time.`,
              },
            ].map((stop) => (
              <div key={stop.day} className="article-card">
                <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--primary-color)' }}>
                  {stop.day}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }}>
                  {stop.content}
                </p>
                <div style={{ backgroundColor: 'var(--callout-bg-warm)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', fontSize: '14px', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--accent-warm)' }}>Local tip:</strong> {stop.tip}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 64px', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px', paddingTop: '64px' }}>
            <Kicker>Practical Info</Kicker>
            <h2 style={{ fontSize: '32px' }}>Planning This Route</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Getting Between Cities</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Beijing South → Shanghai Hongqiao: 4.5 hours by high-speed train (¥550-930). Flights take 2 hours but airport transit adds 3-4 hours each end — train is faster door-to-door.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <TourCTA />
        <NextSteps
          steps={[
            { href: '/visa', label: 'Check visa requirements', description: 'See if you qualify for visa-free entry to China' },
            { href: '/esim', label: 'Get an eSIM for China', description: 'Land with internet that bypasses the firewall' },
            { href: '/payment', label: 'Set up Alipay before you land', description: 'Link your foreign card and be ready to pay' },
          ]}
        />
        <SignatureCard />
      </div>
    </div>
  );
}
