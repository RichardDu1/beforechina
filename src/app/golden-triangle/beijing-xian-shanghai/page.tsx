import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Beijing-Xi\'an-Shanghai: The Classic China Route | BeforeChina',
  description: 'The essential first-timer\'s route through China\'s three iconic cities — imperial Beijing, ancient Xi\'an, and futuristic Shanghai — connected by high-speed rail.',
  alternates: { canonical: '/golden-triangle/beijing-xian-shanghai' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to do the Beijing-Xi\'an-Shanghai route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This route typically takes 8-10 days. This is the classic Golden Triangle — the route 80% of first-time visitors take. It covers China\'s three most iconic cities: Beijing\'s Forbidden City and Great Wall, Xi\'an\'s Terracotta Warriors, and S',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does the Beijing-Xi\'an-Shanghai route cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget approximately $1,200-1,800/person for this route, including accommodation, transport between cities, food, and activities. International flights are not included.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Beijing-Xi\'an-Shanghai', item: 'https://beforechina.com/golden-triangle/beijing-xian-shanghai' },
  ],
};

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Golden Triangle · 8-10 Days</Kicker>
          <h1>Beijing-Xi\'an-Shanghai: The Classic China Route</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            The essential first-timer\'s route through China\'s three iconic cities — imperial Beijing, ancient Xi\'an, and futuristic Shanghai — connected by high-speed rail.
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
                <div style={{ fontWeight: 600 }}>8-10 days</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div>
                <div style={{ fontWeight: 600 }}>Beijing → Xi\'an → Shanghai</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div>
                <div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>$1,200-1,800/person</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              This is the classic Golden Triangle — the route 80% of first-time visitors take. It covers China\'s three most iconic cities: Beijing\'s Forbidden City and Great Wall, Xi\'an\'s Terracotta Warriors, and Shanghai\'s futuristic skyline. All three cities are connected by 4-6 hour high-speed trains, making logistics straightforward.
            </p>
          </div>

          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Day-by-Day Itinerary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                day: 'Days 1-3: Beijing',
                content: `Fly into Beijing Capital (PEK) or Daxing (PKX). Day 1: Tiananmen Square and the Forbidden City (book tickets 7 days ahead on WeChat). Day 2: Mutianyu Great Wall — less crowded than Badaling, with a toboggan ride down. Day 3: Temple of Heaven at sunrise for the pensioners\' tai chi, then the hutongs near Gulou for lunch. Evening: Peking duck at Dadong or Siji Minfu.`,
                tip: `Skip Badaling. Mutianyu has better views, fewer crowds, and the toboggan slide down is genuinely fun. Book a private driver through your hotel (~¥600 round trip).`,
              },
              {
                day: 'Days 4-5: Xi\'an',
                content: `Take the 4.5-hour high-speed train from Beijing West to Xi\'an North (¥550). Day 4: Terracotta Warriors — go early (8:30am) to beat the crowds. The museum is 40 km east of the city. Day 5: Xi\'an City Wall — rent a bike and cycle the full 14 km loop. Evening: Muslim Quarter for lamb skewers, biangbiang noodles, and persimmon cakes.`,
                tip: `Hire a guide at the Terracotta Warriors (official guides at the entrance, ~¥200). The context they provide transforms the experience from \'piles of clay statues\' to \'holy crap, this is 2,200 years old.\'`,
              },
              {
                day: 'Days 6-8: Shanghai',
                content: `Take the 6-hour high-speed train from Xi\'an to Shanghai (¥670). Day 6: The Bund at dusk for the Pudong skyline. Walk Nanjing Road to People\'s Square. Day 7: Former French Concession — Fuxing Road, Tianzifang, and a coffee at Manner. Day 8: Shanghai Museum or a day trip to Zhujiajiao Water Town (1 hr by metro). Fly out from Pudong (PVG).`,
                tip: `The Bund is best at golden hour (5-6pm) when the colonial buildings glow. Skip the Bund sightseeing tunnel — it is a tourist trap. Take the ¥2 ferry across the Huangpu instead.`,
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
                Beijing → Xi\'an: 4.5 hrs by high-speed train (¥550). Xi\'an → Shanghai: 6 hrs by high-speed train (¥670). All trains depart hourly. Book on Trip.com or 12306.cn (Chinese-only).
              </p>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Where to Stay</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Beijing: Stay near Wangfujing or the hutongs around Gulou ($60-120/night). Xi\'an: Inside the city walls near the Bell Tower ($40-80/night). Shanghai: Former French Concession or Jing\'an ($80-150/night).
              </p>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>When to Go</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                April-May and September-October are ideal — pleasant temperatures (15-25°C), clear skies. Avoid Golden Week (first week of October) and Chinese New Year (late January/February) — attractions are packed and prices double.
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
