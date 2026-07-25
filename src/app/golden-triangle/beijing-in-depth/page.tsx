import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Beijing In Depth: Imperial Palaces, Great Wall & Hutongs | BeforeChina',
  description: 'A deep dive into China\'s 3,000-year capital — from the Forbidden City to the Great Wall, with time for hidden temples and hutong bars.',
  alternates: { canonical: '/golden-triangle/beijing-in-depth' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to do the Beijing In Depth route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This route typically takes 4-5 days. Beijing deserves more than the rushed 2-day stop on most Golden Triangle tours. With 4-5 days, you can see the big hitters, explore Beijing\'s vanishing hutong alleyways, visit lesser-known temples, an',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does the Beijing In Depth route cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget approximately $500-800/person for this route, including accommodation, transport between cities, food, and activities. International flights are not included.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Beijing In Depth', item: 'https://beforechina.com/golden-triangle/beijing-in-depth' },
  ],
};

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Beijing · 4-5 Days</Kicker>
          <h1>Beijing In Depth: Imperial Palaces, Great Wall & Hutongs</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            A deep dive into China\'s 3,000-year capital — from the Forbidden City to the Great Wall, with time for hidden temples and hutong bars.
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
                <div style={{ fontWeight: 600 }}>4-5 days</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div>
                <div style={{ fontWeight: 600 }}>Beijing city + Mutianyu Great Wall</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div>
                <div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>$500-800/person</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Beijing deserves more than the rushed 2-day stop on most Golden Triangle tours. With 4-5 days, you can see the big hitters, explore Beijing\'s vanishing hutong alleyways, visit lesser-known temples, and still have an evening free for craft cocktails in Gulou.
            </p>
          </div>

          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Day-by-Day Itinerary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                day: 'Day 1: The Imperial Core',
                content: `Start at Tiananmen Square, then walk north through the Forbidden City (book 7 days ahead via WeChat mini-program). The full walk from south gate to north gate takes 3-4 hours. Exit through Jingshan Park — climb the hill for the panoramic view over the Forbidden City\'s golden roofs. Evening: Dinner at a hutong restaurant near Nanluoguxiang.`,
                tip: `Forbidden City tickets sell out. Book exactly 7 days before at 8pm Beijing time on the \'故宫博物院\' WeChat mini-program. Have your passport number ready.`,
              },
              {
                day: 'Day 2: Great Wall',
                content: `Mutianyu Great Wall — leave at 7am, arrive by 8:30am. Take the cable car up, walk east toward Watchtower 20 for the steepest section, then toboggan down. Back in Beijing by 2pm. Afternoon: Summer Palace — the marble boat and Long Corridor are iconic. Evening: Peking duck at Dadong.`,
                tip: `The toboggan slide (¥100) is genuinely thrilling — a 1.5 km metal slide down the mountain. Worth going to Mutianyu just for this.`,
              },
              {
                day: 'Day 3: Temples & Art',
                content: `Temple of Heaven at 7am — join the pensioners doing tai chi, shuttlecock kicking, and water calligraphy. Then the Lama Temple (Yonghegong) with its 26m sandalwood Buddha. Afternoon: 798 Art District — galleries, coffee shops, and a Bauhaus factory turned creative hub.`,
                tip: `The Lama Temple is an active Tibetan Buddhist monastery. Dress respectfully (covered shoulders). The giant Buddha at the end is 18m tall and carved from a single sandalwood tree.`,
              },
              {
                day: 'Day 4: Hidden Beijing',
                content: `Morning: White Cloud Temple (Baiyun Guan) — Beijing\'s largest Daoist temple, peaceful and rarely touristy. Walk the old hutong alleys from Qianmen to Dashilan. Afternoon: National Museum of China (free, book ahead) or Panjiayuan flea market for antiques and souvenirs. Fly out in the evening or extend one more day.`,
                tip: `Panjiayuan on weekends is the best. Most \'antiques\' are reproductions, but haggle hard (start at 30% of asking price) and you\'ll find great souvenirs.`,
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
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Getting Around</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Beijing\'s subway covers all major sights (¥3-9 per ride). Didi (China\'s Uber) is cheap — most rides within the city are ¥20-40. Get an eSIM before you arrive (see our eSIM guide) so you can use ride-hailing apps at the airport.
              </p>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Where to Stay</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Wangfujing is central but touristy. The hutongs around Gulou/Dongsi are more atmospheric — try a courtyard hotel (¥400-800/night). For business comfort, the CHAO Sanlitun or East Beijing near 798.
              </p>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Food You Must Try</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Peking duck (Dadong or Siji Minfu, not Quanjude), zhajiangmian (fried sauce noodles) at any hutong noodle shop, jianbing (savoury crepe) from street carts for breakfast, and hot pot at Haidilao for the experience.
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
