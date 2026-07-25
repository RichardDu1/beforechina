import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Wuyishan (3-4 Days) | Fujian Tea Mountains & Danxia Scenery | BeforeChina',
  description: 'Wuyishan\'s Nine-Bend River, Danxia rock formations, and the birthplace of Dahongpao rock oolong tea — 3-4 days in Fujian\'s UNESCO mountain wilderness.',
  alternates: { canonical: '/fujian/wuyishan' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Wuyishan worth visiting if I don\'t drink tea?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — the scenery alone justifies the trip. The Nine-Bend River bamboo raft (1.5 hours through a canyon of red cliffs and hanging coffins) is one of China\'s best river experiences. The hiking trails (Tianyou Peak, Tiger Roaring Rock, Water Curtain Cave) are well-maintained and the views are spectacular. The tea culture is an added layer, not the only reason to go.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Wuyishan: Tea Mountains & the Nine-Bend River', item: 'https://beforechina.com/fujian/wuyishan' },
  ],
};

const STOPS = [
  { day: 'Day 1: Xiamen → Wuyishan', content: `Take the 3.5-hour high-speed train from Xiamen North to Wuyishan North (¥230). Check into your accommodation near the scenic area entrance. Afternoon: Wuyishan Tea Museum (free) for an introduction to Dahongpao and the region\'s tea culture. Walk the old town of Wuyishan City and try the local speciality — smoked goose (武夷熏鹅).`, tip: `Wuyishan scenic area entrance: ¥140 (1-day), ¥150 (2-day), ¥160 (3-day) plus ¥85 for the shuttle bus. The 3-day pass is the best value. The bamboo raft (¥130) must be booked separately and sells out — arrange through your hotel or the official website.` },
  { day: 'Day 2: Nine-Bend River & Tianyou Peak', content: `Morning: Nine-Bend River bamboo raft (九曲溪竹筏, ¥130, 1.5 hrs) — the essential Wuyishan experience. The raft (6 people + a boatman who narrates the scenery in Chinese) floats through the canyon from Bend 9 to Bend 1. You pass under red sandstone cliffs, past hanging coffins wedged into rock crevices 3,000 years ago (nobody knows how they got there), and through rapids that splash the raft. Afternoon: climb Tianyou Peak (天游峰) — the highest point in the scenic area (408m, 848 steps). The panoramic view of the Nine-Bend River snaking through the canyon is the iconic Wuyishan photo.`, tip: `The bamboo raft boatmen tell jokes and point out rock formations named after animals and legends — all in Chinese. Even if you don\'t understand, the scenery is the point. The hanging coffins (船棺) in the cliffs have been carbon-dated to 3,600 years old. Tianyou Peak is steep (848 steps) — go in the morning when it is cooler. The view from the top is worth every step.` },
  { day: 'Day 3: Dahongpao Tea Trail', content: `Morning: walk the Dahongpao Tea Trail — a stone path through the canyon past tea plantations clinging to rock faces. The trail leads to the original Dahongpao mother bushes (大红袍母树) — 6 tea bushes growing from a crack in a cliff face, 360 years old. From here, hike the Rock Tea Trail (岩骨花香漫游道) through the tea-growing valley to the Water Curtain Cave (水帘洞) — a waterfall that cascades over a 100m cliff into a pool. Afternoon: tea tasting at a local tea farmer\'s house. Evening: soak in a Wuyishan hot spring.`, tip: `The original Dahongpao mother bushes are tiny — don\'t expect a grand sight. Their significance is cultural: all Dahongpao tea in the world is descended from these 6 bushes. The tea is no longer harvested from the mother bushes (the last harvest was in 2005 and sold for ¥200,000). What you buy as \'Dahongpao\' is from their cuttings, grown elsewhere in Wuyishan.` },
  { day: 'Day 4: Wuyishan → Depart', content: `Morning: visit Tiger Roaring Rock (虎啸岩) — a trail through a narrow rock fissure and up to a viewpoint over the tea valley. Alternative: hike to the Wuyi Palace (武夷宫), a Song dynasty Daoist temple at the mouth of the Nine-Bend River. Afternoon: train back to Xiamen (3.5 hrs, ¥230) or fly out from Wuyishan Airport (WUS) with connecting flights via Xiamen or Shanghai.`, tip: `Wuyishan Airport (WUS) has limited flights — mostly to Xiamen, Shanghai, and Beijing. If your schedule doesn\'t match, take the train back to Xiamen and fly from XMN. The train station is 30 minutes from the scenic area by bus.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `High-speed trains from Xiamen North to Wuyishan North (3.5 hrs, ¥230), Fuzhou to Wuyishan North (1.5 hrs, ¥100), or Shanghai to Wuyishan North (3 hrs, ¥220). The scenic area is 30 minutes from the train station by bus (¥10).` },
  { title: 'Where to Stay', body: `Wuyishan Sangu Resort Area (三姑度假区) — the main tourist base near the scenic area entrance (\$30-80/night). Wuyishan City (武夷山市) — the local town, cheaper but further from the scenic area (\$20-40/night).` },
  { title: 'When to Go', body: `March-May and September-November. April-May is the tea harvest season — the tea factories are active and you can watch tea processing. Summer is hot (35°C+) and the rainy season (May-June) makes the river high and fast (but more exciting rafting).` },
  { title: 'Tea Buying Tips', body: `Dahongpao: ¥200-2,000/500g for genuine Wuyi rock oolong (beware of ¥50 \'Dahongpao\' — it is blended). Shuixian (水仙): a more affordable Wuyi oolong, ¥100-400/500g. Buy from tea farmers, not souvenir shops. A good tea farmer will let you taste before buying.` },
];
const NEXT_STEPS = [
  { href: '/fujian/xiamen-tulou-quanzhou', label: 'Xiamen, Tulou & Quanzhou', description: 'Combine with Fujian\'s maritime silk road cities' },
  { href: '/jiangxi/lushan-jingdezhen', label: 'Jingdezhen & Lushan', description: 'Next door in Jiangxi: porcelain capital and sacred mountain' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Fujian · 3-4 Days</Kicker>
          <h1>Wuyishan: Tea Mountains & the Nine-Bend River</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>A UNESCO landscape of Danxia rock formations, primeval forests, a river that meanders through a canyon in 9 perfect bends, and the birthplace of Dahongpao — China\'s most legendary tea.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>3-4 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Xiamen → Wuyishan → Xiamen (or fly out)</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$400-600/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Wuyishan (武夷山) in northern Fujian is a UNESCO World Heritage site for both nature and culture — one of only 41 such sites in the world. The landscape is classic Danxia: red sandstone cliffs, clear rivers, deep gorges, and ancient forests. The Nine-Bend River (九曲溪) meanders through the canyon in 9 distinct bends, each prettier than the last. And the tea: Wuyishan is the birthplace of Dahongpao (大红袍, Big Red Robe), a rock oolong tea that is among the most expensive in the world. The original mother bushes on a cliff face are 360 years old and insured for ¥100 million.</p>
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