import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Shanghai In Depth: Art Deco, Alleyways & Skyline | BeforeChina',
  description: 'A proper guide to China\'s most international city — not just the Bund, but the French Concession backstreets, the 1930s lilong lanes, and where to eat soup dumplings.',
  alternates: { canonical: '/golden-triangle/shanghai-in-depth' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to do the Shanghai In Depth route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This route typically takes 3-4 days. Shanghai is China\'s most cosmopolitan city — a 1920s \'Paris of the East\' that now hosts the world\'s second-tallest building. But the real Shanghai is in the details: art deco lobbies, lilong lane hous',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does the Shanghai In Depth route cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget approximately $400-700/person for this route, including accommodation, transport between cities, food, and activities. International flights are not included.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Shanghai In Depth', item: 'https://beforechina.com/golden-triangle/shanghai-in-depth' },
  ],
};

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Shanghai · 3-4 Days</Kicker>
          <h1>Shanghai In Depth: Art Deco, Alleyways & Skyline</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            A proper guide to China\'s most international city — not just the Bund, but the French Concession backstreets, the 1930s lilong lanes, and where to eat soup dumplings.
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
                <div style={{ fontWeight: 600 }}>Shanghai city + water town day trip</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div>
                <div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>$400-700/person</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Shanghai is China\'s most cosmopolitan city — a 1920s \'Paris of the East\' that now hosts the world\'s second-tallest building. But the real Shanghai is in the details: art deco lobbies, lilong lane houses, and soup dumpling shops where the owner has been folding xiaolongbao for 40 years.
            </p>
          </div>

          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Day-by-Day Itinerary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                day: 'Day 1: The Bund & Pudong',
                content: `Start at the Bund at golden hour — the colonial buildings on one side, Pudong\'s skyline on the other. Walk south to the Old City (Yu Garden, City God Temple). Evening: Dinner at Jia Jia Tang Bao for the best soup dumplings in Shanghai, then a drink at a rooftop bar on the Bund (Flair at Ritz-Carlton or Vue Bar at Hyatt on the Bund).`,
                tip: `Skip the Bund Sightseeing Tunnel — it\'s ¥55 for a 3-minute ride in a slow cart through a tunnel with coloured lights. Take the ¥2 ferry from Jinling East Road to Dongchang Road instead.`,
              },
              {
                day: 'Day 2: French Concession',
                content: `Spend the morning walking Fuxing Road and Wukang Road — the French Concession at its best. Stop at Manner Coffee (China\'s answer to Blue Bottle), browse the boutiques on Anfu Road, and have lunch at Din Tai Fung or a local noodle shop. Afternoon: Shanghai Propaganda Poster Art Centre (¥25, incredible collection of Mao-era posters) or the Power Station of Art in a converted power plant.`,
                tip: `Wukang Road and Anfu Road are influencer central on weekends — go on a weekday morning for a much calmer experience. The best buildings are Wukang Mansion (Normandie Apartments, 1924) and the Moller Villa.`,
              },
              {
                day: 'Day 3: Water Town or Art',
                content: `Option A: Day trip to Zhujiajiao Water Town — 1 hour by metro (Line 17). Canals, stone bridges, and a quieter side of Shanghai. Option B: Stay in the city — Long Museum (West Bund) for contemporary art, then the former Expo 2010 site along the Huangpu River. Evening: Cocktails at Speak Low (hidden bookshelf entrance, ranked among Asia\'s 50 Best Bars).`,
                tip: `Zhujiajiao is the most accessible water town from Shanghai. Go early (before 10am) to avoid the tour groups. Pay the ¥30 for a gondola ride — it\'s touristy but worth it for the photos.`,
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
                Shanghai Pudong (PVG) for international flights, Hongqiao (SHA) for domestic. Both are connected to the city by metro (Line 2). Maglev from PVG to Longyang Road takes 8 minutes (¥50, 430 km/h) — the world\'s fastest commercial train.
              </p>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Where to Stay</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                French Concession is the most pleasant area — try the Donghu Hotel or URBN Boutique. Jing\'an for central convenience. The Bund for splurge stays (Peninsula, Waldorf Astoria). Budget: $60-100, mid-range: $100-200, luxury: $300+.
              </p>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Food</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Soup dumplings: Jia Jia Tang Bao (黄河路店). Pan-fried dumplings: Yang\'s Fry Dumplings. Hairy crab (Sept-Oct only): Cheng Long Hang. For a splurge: Ultraviolet by Paul Pairet (¥6,000/person, book 3 months ahead) — a 22-course sensory experience.
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
