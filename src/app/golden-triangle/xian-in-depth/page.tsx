import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Xi\'an In Depth: Terracotta Warriors & Ancient Capital | BeforeChina',
  description: 'Beyond the warriors — cycle the 14 km city wall, eat your way through the Muslim Quarter, and discover why Xi\'an was the start of the Silk Road.',
  alternates: { canonical: '/golden-triangle/xian-in-depth' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to do the Xi\'an In Depth route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This route typically takes 3-4 days. Xi\'an was China\'s capital for 1,100 years across 13 dynasties. The Terracotta Warriors are the headline, but the 600-year-old city wall, the Muslim Quarter\'s street food, and the option to climb Huash',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does the Xi\'an In Depth route cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget approximately $300-500/person for this route, including accommodation, transport between cities, food, and activities. International flights are not included.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Xi\'an In Depth', item: 'https://beforechina.com/golden-triangle/xian-in-depth' },
  ],
};

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Xi\'an · 3-4 Days</Kicker>
          <h1>Xi\'an In Depth: Terracotta Warriors & Ancient Capital</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            Beyond the warriors — cycle the 14 km city wall, eat your way through the Muslim Quarter, and discover why Xi\'an was the start of the Silk Road.
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
                <div style={{ fontWeight: 600 }}>3-4 days</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div>
                <div style={{ fontWeight: 600 }}>Xi\'an city + Terracotta Warriors + Huashan option</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div>
                <div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>$300-500/person</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Xi\'an was China\'s capital for 1,100 years across 13 dynasties. The Terracotta Warriors are the headline, but the 600-year-old city wall, the Muslim Quarter\'s street food, and the option to climb Huashan (one of China\'s five sacred mountains) make it worth 3-4 days.
            </p>
          </div>

          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Day-by-Day Itinerary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                day: 'Day 1: The Warriors',
                content: `Terracotta Warriors Museum — hire a guide at the entrance (~¥200). Visit the pits in order: Pit 1 (the famous one, 6,000 warriors), Pit 2 (cavalry and archers), Pit 3 (command centre). The bronze chariot exhibition hall is excellent. Afternoon: Huaqing Hot Springs at the foot of Mount Li.`,
                tip: `Go to Pit 1 last, not first. The crowd rushes to Pit 1 immediately. Do Pits 2 and 3 first for a much calmer experience, then Pit 1 when the morning rush thins around 11am.`,
              },
              {
                day: 'Day 2: City Wall & Muslim Quarter',
                content: `Rent a bike on the city wall (¥45, deposit ¥100) and cycle the full 14 km loop. Takes 90 minutes at a relaxed pace. After lunch, the Great Mosque — a 1,300-year-old mosque built in Chinese temple style. Evening: Muslim Quarter food crawl — lamb skewers (¥3 each), biangbiang noodles, yangrou paomo (lamb soup with crumbled flatbread).`,
                tip: `The Muslim Quarter is touristy at the entrance (Beiyuanmen Street), but gets more authentic as you walk deeper. Head to Sajinqiao for the real local food stalls.`,
              },
              {
                day: 'Day 3: Huashan or History',
                content: `Option A: Huashan day trip — one of China\'s five sacred mountains, with a via ferrata-style cliffside plank walk (the \'Plank Walk in the Sky\'). 30 minutes by high-speed train from Xi\'an North. Option B (easier): Shaanxi History Museum (book 3 days ahead on WeChat), Big Wild Goose Pagoda, and Tang Paradise in the evening.`,
                tip: `If you do Huashan, take the cable car up the West Peak and down the North Peak. The Plank Walk is genuinely scary — there is a harness but the drop is 700m vertical onto a narrow wooden plank. Not for anyone with a fear of heights.`,
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
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Getting There</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Xi\'an Xianyang Airport (XIY) has international flights from Seoul, Bangkok, and domestic connections from everywhere. High-speed trains from Beijing (4.5 hrs, ¥550), Shanghai (6 hrs, ¥670), and Chengdu (3.5 hrs, ¥260).
              </p>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Where to Stay</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Stay inside the city walls near the Bell Tower or South Gate ($40-80/night). The Citadines Central Xi\'an has good value and a central location. For something atmospheric, the Eastern House Boutique Hotel near the South Gate.
              </p>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Food</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Xi\'an\'s Muslim Quarter is legendary. Must-try: yangrou paomo (lamb soup with crumbled bread), biangbiang noodles, lamb skewers (kawap), cold noodles (liangpi), and the persimmon cakes sold at street stalls.
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
