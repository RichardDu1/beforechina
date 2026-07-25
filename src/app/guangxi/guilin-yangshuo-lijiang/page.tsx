import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Guilin-Yangshuo Li River (3-4 Days) | Guangxi Travel Guide | BeforeChina',
  description: 'The classic Guilin to Yangshuo route: Li River cruise, karst peaks, Yangshuo cycling, and rice terraces — China\'s most iconic landscape in 3-4 days.',
  alternates: { canonical: '/guangxi/guilin-yangshuo-lijiang' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best way to see the Li River?', acceptedAnswer: { '@type': 'Answer', text: 'The 4-hour cruise from Guilin to Yangshuo (¥300-400) is the classic way — you sit on a boat through 83 km of karst peaks. For something more intimate, take a bamboo raft from Yangdi to Xingping (¥120, 90 min) — this is the section on the 20 RMB note. Motorised bamboo rafts seat 4 people and get you closer to the water than the big cruise boats.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Guilin & Yangshuo: China\'s Most Beautiful Landscape', item: 'https://beforechina.com/guangxi/guilin-yangshuo-lijiang' },
  ],
};

const STOPS = [
  { day: 'Day 1: Guilin', content: `Fly into Guilin Liangjiang Airport (KWL). Guilin city itself is a pleasant small city with two lakes (Shanhu and Ronghu) connected by the Li River. Visit Elephant Trunk Hill (the city symbol, ¥55), walk around the Sun and Moon Pagodas on Shanhu Lake, and explore the night market on Zhengyang Pedestrian Street. Guilin rice noodles (桂林米粉) for breakfast tomorrow — this is the city\'s signature dish.`, tip: `Elephant Trunk Hill is ¥55 and takes 30 minutes. It is fine but not worth the price. Instead, walk the Binjiang Road promenade for a free view of the river and the karst peaks. The real Guilin experience starts tomorrow on the Li River.` },
  { day: 'Day 2: Li River → Yangshuo', content: `Option A: Take the 4-hour Li River cruise from Guilin to Yangshuo (departs 9am, arrives 1pm). The boat passes through the heart of the karst — peaks named \'Nine Horses Fresco Hill\', \'Yellow Cloth Shoal\' (this is the 20 RMB note view), and \'Mural Hill\'. Option B: Drive to Yangdi (1 hr from Guilin) and take a bamboo raft from Yangdi to Xingping (90 min, ¥120/person) — this covers the most scenic section and avoids the large tour groups. From Xingping, take the 40-min bus to Yangshuo. Evening: West Street (Xi Jie) for dinner and bars.`, tip: `The bamboo raft from Yangdi to Xingping is the better experience — you are closer to the water, the rafts are smaller, and the scenery is the best section of the river. Each raft takes 4 people. If you are alone or a couple, you may need to wait for others to fill the raft or pay for the empty seats (¥50/seat).` },
  { day: 'Day 3: Yangshuo Countryside', content: `Rent a bicycle (¥30/day) or e-bike (¥60/day) and cycle into the Yangshuo countryside. The classic loop: Yangshuo → Aishanmen → Gongnong Bridge → Moon Hill → Baisha → Yulong River → Yangshuo (25 km, 3-4 hours). You cycle through rice paddies with karst peaks in every direction. Stop at Moon Hill (¥15, 800 steps up a natural limestone arch) for the panoramic view. Afternoon: Yulong River bamboo raft (¥200/raft, 90 min) — this is the quieter, more intimate river compared to the Li. The rafts here are actual bamboo (not motorised PVC) and poled by a boatman.`, tip: `The Yulong River bamboo raft is better than the Li River raft — no motors, just a boatman with a bamboo pole. The stretch from Jinlong Bridge to Jiuxian is the best section. Go before 10am or after 3pm to avoid the midday crowds. Wear shoes you can get wet — there are small weirs the raft slides down.` },
  { day: 'Day 4 (optional): Longji Rice Terraces', content: `Day trip from Guilin or Yangshuo to the Longji Rice Terraces (2.5-hour drive). The terraces were built by the Zhuang and Yao minorities over 600 years and look like dragon scales wrapping around the mountains. Two main viewpoints: Ping\'an (the classic view, easier walk) and Jinkeng (larger, more dramatic, accessible by cable car ¥100 round trip). Visit one — both is too much for a day trip. Return to Guilin for your flight out.`, tip: `Longji is best May-June (flooded terraces reflect the sky) and September-October (golden rice ready for harvest). The Yao women at the entrance will offer to carry your bag up (¥50) — they are genuinely helpful and the income supports their village. You can hire one even if your bag is light.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Guilin Liangjiang Airport (KWL) has direct flights from Beijing, Shanghai, Chengdu, and major Chinese cities. High-speed trains from Guangzhou (2.5 hrs, ¥140), Shenzhen (3 hrs), and Hong Kong (3.5 hrs). Guilin has two train stations — Guilin North (桂林北, for high-speed trains) and Guilin (桂林, for regular trains).` },
  { title: 'Where to Stay', body: `Guilin: near Shanhu Lake or the city centre (\$25-60/night). Yangshuo: West Street area is central but noisy; stay on the outskirts near the Yulong River for quiet (\$30-80/night). The Yangshuo Mountain Retreat on the Yulong River (¥400-800) is the best value for riverfront rooms.` },
  { title: 'When to Go', body: `April-June and September-November. The Li River is at its best after rain when mist clings to the karst peaks. Avoid July-August (hot, humid, crowds) and Chinese New Year (prices double). The Longji Terraces are most photogenic in late May (flooded) and late September (golden harvest).` },
];
const NEXT_STEPS = [
  { href: '/guangxi/guilin-longji-xingping', label: 'Extended Guilin route', description: 'Add Longji Terraces and Xingping photography spots' },
  { href: '/guizhou/huangguoshu-libo-miao', label: 'Guizhou route', description: 'Combine with Guizhou waterfalls and Miao villages' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Guangxi · 3-4 Days</Kicker>
          <h1>Guilin & Yangshuo: China\'s Most Beautiful Landscape</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>The 20 RMB note view, a Li River bamboo raft through karst peaks, and cycling through Yangshuo\'s rice paddies — this is the China you imagined.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>3-4 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Guilin → Li River → Yangshuo → Longji Rice Terraces</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$300-500/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Guilin\'s karst landscape — limestone peaks rising vertically from flat rice paddies — is the most reproduced image of China. It is on the 20 RMB note. It inspired generations of Chinese landscape painting. And it genuinely looks like the photos. The classic route is simple: Guilin city as the entry point, the Li River cruise to Yangshuo (4 hours through the heart of the karst), 2 days exploring Yangshuo\'s countryside by bike and bamboo raft, and an optional day at the Longji Rice Terraces.</p>
          </div>
          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Day-by-Day Itinerary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {STOPS.map((stop) => (
              <div key={stop.day} className="article-card">
                <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--primary-color)' }}>{stop.day}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }}>{stop.content}</p>
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
            {PRACTICAL.map((p) => (
              <div key={p.title} className="article-card">
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <TourCTA />
        <NextSteps steps={NEXT_STEPS} />
        <SignatureCard />
      </div>
    </div>
  );
}