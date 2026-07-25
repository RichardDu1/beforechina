import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Xiamen-Tulou-Quanzhou (5-6 Days) | Fujian Travel Guide | BeforeChina',
  description: 'Xiamen\'s Gulangyu Island, the Hakka Tulou (earthen roundhouses), and Quanzhou — the starting point of the Maritime Silk Road and China\'s newest UNESCO city.',
  alternates: { canonical: '/fujian/xiamen-tulou-quanzhou' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the Fujian Tulou and are they worth the trip?', acceptedAnswer: { '@type': 'Answer', text: 'The Tulou (土楼) are large circular earthen buildings, 3-5 storeys high, built by the Hakka people between the 12th and 20th centuries. Each tulou housed an entire clan — up to 800 people — in rooms arranged around a central courtyard. They are UNESCO World Heritage and genuinely unlike anything else in the world. The most famous cluster is at Nanjing (南靖), 3 hours from Xiamen. Yes, they are worth the trip.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Xiamen, Tulou & Quanzhou: Fujian\'s Maritime Silk Road', item: 'https://beforechina.com/fujian/xiamen-tulou-quanzhou' },
  ],
};

const STOPS = [
  { day: 'Day 1: Xiamen', content: `Fly into Xiamen Gaoqi Airport (XMN). Xiamen (厦门, \'Amoy\' in the old colonial name) is a pleasant coastal city that was one of the first treaty ports opened to foreign trade in 1842. Afternoon: Zhongshan Road (中山路) — a pedestrian shopping street with colonial arcade architecture. Visit Nanputuo Temple (南普陀寺, free) — a Tang dynasty Buddhist temple at the foot of Wulao Mountain. Evening: seafood dinner on Huandao Road.`, tip: `Xiamen is one of China\'s most liveable cities — clean air, good food, and a relaxed pace. The city is built on an island connected to the mainland by bridges and a BRT (Bus Rapid Transit) system. The BRT is the easiest way to get around — it is an elevated bus-only road, effectively an above-ground metro.` },
  { day: 'Day 2: Gulangyu Island', content: `Take the 10-minute ferry from Xiamen to Gulangyu Island (鼓浪屿, ¥35 round trip). Gulangyu is a car-free island of colonial villas, tropical gardens, and narrow lanes. It was a foreign concession from 1903-1945, and the architecture reflects this: British consulates, Japanese hospitals, Spanish cathedrals. Visit Shuzhuang Garden (菽庄花园, ¥30) — a seaside garden with a piano museum housing 100 antique pianos. Climb Sunlight Rock (日光岩, ¥50) for the island panorama. Evening: ferry back to Xiamen.`, tip: `Gulangyu ferry tickets sell out in summer and on weekends. Book on the official WeChat mini-program (厦门轮渡). The ferry from Dongdu Jetty (for tourists) costs ¥35. The ferry from Lundu Jetty (for locals) costs ¥8 but tourists cannot use it. The island has no cars, no bikes — you will walk everywhere. Wear comfortable shoes.` },
  { day: 'Day 3: Xiamen → Nanjing Tulou', content: `Take a 3-hour bus from Xiamen to Nanjing Tulou cluster (¥45). The Nanjing Tulou are the most scenic group. Visit Tianluokeng Tulou Cluster (田螺坑, ¥100 combined ticket) — five tulou arranged in a pattern locals call \'four dishes and a soup\' (four round buildings around one square). Then Yuchang Lou (裕昌楼) — a 700-year-old tulou whose pillars lean at 15° (it is called the \'Leaning Tower of Pisa of Fujian\'). Finish at Taxia Village (塔下村) — a Hakka village along a stream with a unique stone flagpole forest honouring successful scholars. Stay overnight in a tulou guesthouse.`, tip: `Stay overnight in a tulou — several have been converted into guesthouses (¥150-300/night). The rooms are simple (shared bathrooms, thin walls) but the experience of waking up inside a 500-year-old earthen fortress is unforgettable. The Hakka hosts will cook dinner for you — home-style Hakka food: salt-baked chicken, stuffed tofu, and yam noodles.` },
  { day: 'Day 4: Tulou → Xiamen → Quanzhou', content: `Morning: visit Hekeng Tulou Cluster (河坑, quieter, less touristy) or Yunshuiyao Ancient Village (云水谣, a riverside village with a thousand-year-old banyan tree used in the film \'The Knot\'). Afternoon: bus back to Xiamen (3 hrs), then 30-minute high-speed train to Quanzhou (¥25). Check into hotel. Evening: walk Quanzhou\'s old town — the Tumen Street area with its mosque, temple, and church within walking distance of each other.`, tip: `Quanzhou is inexpensive by Fujian standards. Hotels near the old town run ¥150-300/night. The city was recently discovered by Chinese tourists after its 2021 UNESCO listing but still sees very few Western visitors.` },
  { day: 'Day 5: Quanzhou', content: `Quanzhou was the starting point of the Maritime Silk Road and, during the Song-Yuan period (10th-14th centuries), one of the world\'s largest ports. Start at Kaiyuan Temple (开元寺, free) — a Tang dynasty Buddhist temple with twin stone pagodas that have survived since the 13th century. Behind the main hall, two stone pillars are carved with Hindu deities — a legacy of Tamil traders who lived here 700 years ago. Visit the Qingjing Mosque (清净寺, ¥3) — China\'s oldest surviving mosque, built in 1009 AD. Lunch: Quanzhou oyster omelette (海蛎煎) and \'vermicelli paste\' (面线糊) — rice noodles in a thick seafood broth. Afternoon: Maritime Museum (free) and the ancient Maritime Silk Road ship excavated from Quanzhou Bay. Evening: train back to Xiamen (30 min, ¥25).`, tip: `Quanzhou\'s religious diversity in the Song-Yuan period was remarkable: Buddhist temples, Hindu shrines, a mosque (1009 AD), a Manichaean temple (the only surviving Manichaean statue in the world is near Quanzhou), a Daoist temple, and a Catholic cathedral. The Kaiyuan Temple\'s Hindu pillars are unique in China — Tamil merchants from the Chola dynasty donated them in the 13th century.` },
  { day: 'Day 6: Xiamen → Fly Out', content: `If your flight is in the evening: visit the Xiamen Botanical Garden (¥40) or cycle the Huandao Road coastal path (rental bikes ¥20/hr). Buy oolong tea (Fujian is the home of Tieguanyin and Dahongpao) and dried seafood as souvenirs.`, tip: `Fujian tea: Tieguanyin (铁观音, Iron Goddess of Mercy, a floral oolong from Anxi, ¥100-500/500g) and Dahongpao (大红袍, Big Red Robe, a legendary rock oolong from Wuyi Mountain, ¥200-2,000/500g). Buy at a tea market, not a tourist shop — the Xiamen Tea Market (厦门茶叶市场) is wholesale.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Fly into Xiamen (XMN). Xiamen-Quanzhou: high-speed train (30 min, ¥25). Xiamen-Tulou: bus (3 hrs, ¥45). Ferry to Gulangyu: 10 min, ¥35 round trip.` },
  { title: 'Where to Stay', body: `Xiamen: Zhongshan Road area or near Xiamen University (\$40-100/night). Tulou: stay overnight in a tulou guesthouse (¥150-300/night). Quanzhou: near the old town (\$30-70/night).` },
  { title: 'When to Go', body: `March-May and October-December. Xiamen is subtropical — mild winters (10-15°C) and hot, humid summers (30-35°C). Typhoon season is July-September (Gulangyu ferries may stop). Spring and autumn are ideal.` },
  { title: 'What to Eat', body: `Xiamen: oyster omelette (海蛎煎), satay noodles (沙茶面), peanut soup (花生汤). Quanzhou: vermicelli paste (面线糊), oyster omelette (different from Xiamen\'s version), zongzi (粽子, sticky rice dumplings). Tulou area: Hakka salt-baked chicken, stuffed tofu, yam noodles.` },
];
const NEXT_STEPS = [
  { href: '/fujian/wuyishan', label: 'Wuyi Mountain', description: 'Add Fujian\'s UNESCO tea mountains' },
  { href: '/south-china/hong-kong-macau', label: 'Hong Kong & Macau', description: 'Combine with the Pearl River Delta' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Fujian · 5-6 Days</Kicker>
          <h1>Xiamen, Tulou & Quanzhou: Fujian\'s Maritime Silk Road</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>A car-free island of colonial villas, the Hakka people\'s extraordinary earthen roundhouses, and Quanzhou — the port Marco Polo called \'the Alexandria of the East.\'</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>5-6 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Xiamen → Gulangyu → Nanjing Tulou → Quanzhou → Xiamen</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$550-800/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Fujian province faces Taiwan across the strait and has always been China\'s maritime frontier. This route connects three of its UNESCO sites: Gulangyu Island, a car-free island of colonial villas, gardens, and piano museums; the Fujian Tulou — enormous circular earthen buildings that housed entire Hakka clans for centuries; and Quanzhou, the starting point of the Maritime Silk Road, added to the UNESCO list in 2021 as \'Quanzhou: Emporium of the World in Song-Yuan China.\'</p>
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