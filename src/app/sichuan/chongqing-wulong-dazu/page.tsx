import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Chongqing-Wulong-Dazu (3-4 Days) | Mountain City & Rock Carvings | BeforeChina',
  description: 'Chongqing\'s mountain city skyline, Wulong\'s natural sinkholes, and Dazu\'s 1,000-year-old Buddhist rock carvings — a 3-4 day route through eastern Sichuan.',
  alternates: { canonical: '/sichuan/chongqing-wulong-dazu' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Chongqing worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Chongqing is one of China\'s most visually spectacular cities — the skyline, the river confluence, the hot pot, and the sheer verticality make it unlike anywhere else. It\'s also the launching point for Yangtze River cruises and a major food destination (Chongqing hot pot is the fieriest in China).' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Chongqing, Wulong & Dazu Rock Carvings', item: 'https://beforechina.com/sichuan/chongqing-wulong-dazu' },
  ],
};

const STOPS = [
  { day: 'Day 1: Chongqing City', content: `Morning: Ciqikou Ancient Town — a 1,000-year-old porcelain trading port with flagstone streets and river views. Afternoon: Hongyadong — an 11-storey stilt-house complex built into a cliff face, lit up like a Chinese fantasy film at night. Evening: Chongqing hot pot at a local place (NOT the tourist ones in Hongyadong). The real Chongqing hot pot is 90% chillies and 10% broth — locals say \'if you\'re not crying, it\'s not hot enough\'.`, tip: `Hongyadong is beautiful but insanely crowded. The best view is from the Qiansimen Bridge across the Jialing River — you see the full cliffside complex without the crowds. Go at 8pm when the lights come on.` },
  { day: 'Day 2: Wulong Karst', content: `Take the 2-hour high-speed train from Chongqing North to Wulong (¥65). Wulong\'s Three Natural Bridges are three massive limestone arches — Tianlong (Sky Dragon, 235m high), Qinglong (Azure Dragon), and Heilong (Black Dragon) — spanning a 1.2 km gorge. You walk through the gorge floor looking up at arches big enough to fit a 30-storey building. The site also includes the Houping Giant Sinkhole, a 300m-deep limestone crater. Return to Chongqing by evening.`, tip: `Wulong entrance: ¥135 including shuttle bus. The site was used as a filming location for Transformers: Age of Extinction (the scene where Optimus Prime fights the Dinobots). There\'s a (tacky) statue of a Transformer at the entrance.` },
  { day: 'Day 3: Dazu Rock Carvings', content: `Take the 1-hour high-speed train from Chongqing West to Dazu (¥45), then a 30-minute bus to the carvings. The Beishan (North Hill) site has 10,000 statues from the late Tang dynasty (9th century) — intricate, graceful, and well-preserved. The Baodingshan (Treasure Top Mountain) site is the masterpiece: a 500m cliff face with 10,000 figures carved into a continuous narrative of Buddhist hell and paradise, created between 1174-1252 under the monk Zhao Zhifeng. The \'Hell Scenes\' panel is gruesome and unforgettable.`, tip: `Dazu is ¥135 for Beishan + Baodingshan. Baodingshan alone is ¥115 and is the better site if you only have time for one. The carvings are exposed (no caves like Dunhuang) so visit on a clear day. The museum at Baodingshan is excellent for context.` },
  { day: 'Day 4 (optional): Chongqing Deep Dive', content: `Morning: take the Yangtze River Cableway (¥20) — a gondola across the river with skyline views. Visit the Three Gorges Museum (free, excellent overview of the Yangtze and the dam project). Afternoon: Eling Park for the best panoramic view of Chongqing\'s skyline. Evening: the \'ghost town\' of Fengdu or prepare for your Yangtze cruise departure.`, tip: `The Yangtze Cableway queue is 30-60 min on weekends. Go before 9am or take it from the south bank (less busy direction). The Three Gorges Museum is genuinely world-class — budget 2 hours.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Chongqing Jiangbei Airport (CKG) has international flights from Seoul, Bangkok, Singapore, and domestic from everywhere. The metro connects the airport to downtown (Line 3, ¥7). Chongqing is also a major high-speed rail hub — Chengdu (1 hr, ¥150), Xi\'an (5 hrs, ¥280).` },
  { title: 'Where to Stay', body: `Jiefangbei area for the skyline views (\$50-120/night). Nanbin Road (south bank) for river views of the Hongyadong skyline (\$40-100/night). The Regent Chongqing has the best river-view rooms (¥1,200-2,000).` },
  { title: 'Chongqing Hot Pot Guide', body: `Real Chongqing hot pot uses 牛油 (beef tallow) as the base, not vegetable oil. It is SIGNIFICANTLY spicier than Chengdu hot pot. Order: tripe (毛肚, 15 seconds), aorta (黄喉, 30 seconds), beef (嫩牛肉), and lotus root (藕片). Dip in sesame oil (not soy sauce) to cut the heat. The best local places are in the Shapingba and Nan\'an districts.` },
];
const NEXT_STEPS = [
  { href: '/sichuan/chengdu-in-depth', label: 'Chengdu guide', description: 'Pandas and tea houses, 1 hour by train' },
  { href: '/yangtze/chongqing-yichang-cruise', label: 'Yangtze River Cruise', description: 'Three Gorges cruise departing from Chongqing' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Chongqing · 3-4 Days</Kicker>
          <h1>Chongqing, Wulong & Dazu Rock Carvings</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>China\'s most cyberpunk city, a natural limestone bridge formation that looks like Pandora, and 50,000 Buddhist statues carved into cliffs.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>3-4 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Chongqing → Wulong → Dazu → Chongqing</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$350-550/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Chongqing is China\'s most dramatic city — built on steep hills at the confluence of the Yangtze and Jialing rivers, with a skyline that rivals Hong Kong and a metro line that runs through a residential building. Wulong\'s Three Natural Bridges are colossal limestone arches featured in Transformers 4. Dazu Rock Carvings are 50,000 Buddhist, Daoist, and Confucian statues carved between the 7th and 13th centuries — less famous than Dunhuang but arguably more impressive in scale and preservation.</p>
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