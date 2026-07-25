import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Beijing & Xi\'an: China\'s Two Great Ancient Capitals | BeforeChina',
  description: 'Seven days split between Beijing\'s imperial grandeur and Xi\'an\'s Silk Road history — less rushed than the full Golden Triangle, with time for the details.',
  alternates: { canonical: '/golden-triangle/beijing-xian' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to do the Beijing & Xi\'an route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This route typically takes 6-7 days. The full Golden Triangle is the standard recommendation, but 8-10 days is a lot of time. This 6-7 day version drops Shanghai and goes deep on China\'s two greatest ancient capitals. Beijing brings the ',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does the Beijing & Xi\'an route cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget approximately $900-1,300/person for this route, including accommodation, transport between cities, food, and activities. International flights are not included.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Beijing & Xi\'an', item: 'https://beforechina.com/golden-triangle/beijing-xian' },
  ],
};

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Ancient Capitals · 6-7 Days</Kicker>
          <h1>Beijing & Xi\'an: China\'s Two Great Ancient Capitals</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            Seven days split between Beijing\'s imperial grandeur and Xi\'an\'s Silk Road history — less rushed than the full Golden Triangle, with time for the details.
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
                <div style={{ fontWeight: 600 }}>Beijing (4 days) → Xi\'an (3 days)</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div>
                <div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>$900-1,300/person</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              The full Golden Triangle is the standard recommendation, but 8-10 days is a lot of time. This 6-7 day version drops Shanghai and goes deep on China\'s two greatest ancient capitals. Beijing brings the Ming and Qing dynasties, Xi\'an brings the Han and Tang — together they cover 2,000 years of Chinese imperial history.
            </p>
          </div>

          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Day-by-Day Itinerary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                day: 'Days 1-3: Beijing',
                content: `Forbidden City, Mutianyu Great Wall, Temple of Heaven, Summer Palace, and a hutong evening. See the Beijing In Depth page for full details.`,
                tip: `With only 3 days, drop 798 Art District and focus on the imperial sights. The Lama Temple is worth squeezing in if you have a free morning.`,
              },
              {
                day: 'Days 4-6: Xi\'an',
                content: `Take the 4.5-hour high-speed train from Beijing West to Xi\'an North. Terracotta Warriors, city wall bike ride, Muslim Quarter food crawl. If you have a 7th day, add Huashan. See the Xi\'an In Depth page for full details.`,
                tip: `The Beijing West → Xi\'an North train departs hourly from 6:30am to 5:30pm. Book the 8am train to arrive by 12:30pm and have the afternoon for the city wall.`,
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
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Train Booking</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Book high-speed trains on Trip.com (English) or 12306.cn (Chinese-only, cheaper). Beijing West → Xi\'an North takes 4.5 hours, ~¥550 second class. Book 2-3 days ahead — trains rarely sell out except during holidays.
              </p>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Best Season</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                April-May and September-October. Avoid Golden Week (Oct 1-7) and Chinese New Year — trains sell out weeks in advance and attractions are shoulder-to-shoulder.
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
