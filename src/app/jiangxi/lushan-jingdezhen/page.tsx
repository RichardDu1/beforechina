import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Lushan & Jingdezhen (4-5 Days) | Jiangxi Porcelain Capital & Sacred Mountain | BeforeChina',
  description: 'Jingdezhen\'s 1,000-year porcelain workshops and Lushan\'s misty mountain villas — 4-5 days in Jiangxi\'s most elegant destinations.',
  alternates: { canonical: '/jiangxi/lushan-jingdezhen' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Jingdezhen worth visiting if I\'m not into pottery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — Jingdezhen is one of China\'s most underrated small cities. The ancient kiln area, the porcelain markets, and the artist studios are fascinating even if you have no interest in making pottery. The city has a creative, youthful energy (many young Chinese artists have moved here for the cheap studio space and ceramic heritage). The food is excellent (Jiangxi cuisine is spicy and underrated), and it is a pleasant, walkable city with a river running through it.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Jingdezhen & Lushan: Porcelain Capital & Misty Mountain', item: 'https://beforechina.com/jiangxi/lushan-jingdezhen' },
  ],
};

const STOPS = [
  { day: 'Day 1: Arrive Jingdezhen', content: `Fly into Jingdezhen Luojia Airport (JDZ) or take the high-speed train from Shanghai (4 hrs, ¥250), Hangzhou (3 hrs, ¥180), or Nanchang (1 hr, ¥50). Afternoon: Jingdezhen Ceramic History Museum (景德镇陶瓷博物馆, free) — the world\'s largest ceramics museum, covering the history of Chinese porcelain from the Neolithic to the present. The museum building is a replica of a Song dynasty kiln. Evening: walk the Ancient Kiln Folk Customs Museum area (古窑民俗博览区, ¥95) — a reconstructed Ming-Qing kiln village with working potters demonstrating traditional techniques.`, tip: `The Ancient Kiln Folk Customs Museum (¥95) is touristy but worthwhile — you watch master potters throw porcelain on kick-wheels, paint blue-and-white designs, and fire wood kilns. The potters are genuine craftspeople, not actors. You can buy their work — a hand-painted teacup costs ¥50-200 directly from the maker.` },
  { day: 'Day 2: Jingdezhen — Porcelain Immersion', content: `Morning: visit a porcelain workshop for a hands-on experience. The Pottery Workshop (乐天陶社) in the Sculpture Factory area runs half-day classes (¥200-400) where you throw a bowl on a wheel, paint blue-and-white designs, and fire your piece (it ships to your home, ¥50-100 international shipping). Afternoon: explore the Sculpture Factory area (雕塑瓷厂) — a former state-owned factory turned into a creative park of artist studios, galleries, and cafes. Saturday mornings have the best creative market in China (乐天集市, 8am-12pm) — young ceramic artists selling their work. Evening: Taoxichuan (陶溪川) — a former state porcelain factory turned into a cultural district of galleries, design shops, and restaurants in red-brick industrial buildings.`, tip: `The Saturday morning Creative Market (乐天集市) at the Sculpture Factory is the best time to be in Jingdezhen — 100+ young ceramic artists selling their work, from ¥20 earrings to ¥2,000 vases. The market runs 8am-12pm. Arrive early — the best pieces sell in the first hour. This is where Chinese galleries scout new talent.` },
  { day: 'Day 3: Jingdezhen → Lushan', content: `Take the 2-hour high-speed train from Jingdezhen North to Jiujiang (¥60), then 1-hour bus up the mountain to Lushan (庐山, ¥180 entrance + ¥80 shuttle bus). Lushan is a mountain resort at 1,100m where missionaries built stone villas in the late 19th century and China\'s leaders followed. The mountain has over 600 villas representing 18 countries\' architectural styles. Check into a hotel (converted villa or modern). Afternoon: walk the villa trail — visit the Meilu Villa (美庐, ¥25), the former summer residence of Chiang Kai-shek and later Mao Zedong. The villa is preserved as it was when Mao stayed here in 1959, with his bedroom and study intact. Evening: Lushan speciality — stone fish (石鱼), tiny fish from the mountain streams, and stone ear fungus (石耳).`, tip: `Lushan entrance: ¥180. The mountain has a permanent population of 20,000 and a town (Guling, 牯岭镇) at the summit with hotels, restaurants, and shops. The temperature at 1,100m is 8-10°C cooler than the plains — Lushan has been a summer escape for 100 years. The mountain is often in clouds — embrace the mist.` },
  { day: 'Day 4: Lushan', content: `Full day hiking Lushan. The mountain\'s main sights are waterfalls, peaks, and the views of the Yangtze River and Poyang Lake from the summit. Visit the Three-Step Waterfall (三叠泉, ¥64) — Lushan\'s most famous waterfall, descending in three cascades over 155m. The hike is 3,000+ steps down to the base and back up — hard work but worth it. Then the Immortal\'s Cave (仙人洞) — a natural cave where a Daoist immortal supposedly lived, with a view over a sea of clouds. Lushan is also famous for its \'cloud tea\' (云雾茶) — tea grown in the mountain mist, one of China\'s top 10 teas. Visit a tea plantation for a tasting.`, tip: `The Three-Step Waterfall (三叠泉) is a 3,000-step descent (and climb back up). The steps are steep and uneven. The cable car (¥80) covers the flatter approach but you still have to climb 1,500+ steps to the base. Go early morning (7am) to avoid the crowds. The waterfall is most powerful after rain.` },
  { day: 'Day 5: Lushan → Nanchang → Depart', content: `Morning: final Lushan walk — the Brocade Valley (锦绣谷) is a 1.5 km cliffside path through misty peaks and rock formations, ending at the Immortal\'s Cave. Then descend the mountain by bus (1 hr) to Jiujiang. Train from Jiujiang to Nanchang (1 hr, ¥40) for your flight out. If you have time in Nanchang: visit the Tengwang Pavilion (滕王阁, ¥50) — a Tang dynasty pavilion on the Gan River, one of China\'s \'Four Great Towers\', or the Nanchang Star (南昌之星, ¥50) — a 160m Ferris wheel with views over the city.`, tip: `Nanchang is Jiangxi\'s capital and a transport hub. The airport (KHN) has flights to most major Chinese cities. The Tengwang Pavilion is a 1989 reconstruction (the original was destroyed 28 times over 1,300 years) — it is historically inauthentic but architecturally impressive.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Fly into Jingdezhen (JDZ) or Nanchang (KHN). High-speed trains: Shanghai-Jingdezhen (4 hrs, ¥250), Hangzhou-Jingdezhen (3 hrs, ¥180). Jingdezhen-Lushan: train to Jiujiang (2 hrs, ¥60) + bus up the mountain (1 hr, ¥20). Lushan-Nanchang: bus down + train (2 hrs total, ¥60).` },
  { title: 'Where to Stay', body: `Jingdezhen: Sculpture Factory area (creative vibe, \$30-80/night) or near Taoxichuan (\$40-100/night). Lushan: Guling town at the summit (\$40-120/night) — converted villas or modern hotels. Nanchang: near Tengwang Pavilion or the train station (\$30-70/night).` },
  { title: 'When to Go', body: `March-May and September-November. Lushan\'s \'sea of clouds\' is most frequent in spring. Jingdezhen is year-round. Summer (July-August) is Lushan\'s high season (cool mountain escape) — book ahead. The Jingdezhen Creative Market is Saturday mornings year-round.` },
  { title: 'Porcelain Buying Tips', body: `Jingdezhen porcelain ranges from ¥10 machine-made teacups to ¥100,000 masterworks. For a genuine hand-painted piece: ¥50-200 (teacup), ¥200-800 (teapot), ¥500-2,000 (vase). Buy from artists at the Saturday market or Sculpture Factory studios, not from shops on the main tourist street. Bargaining is acceptable at the market (10-20% off), not at artist studios.` },
];
const NEXT_STEPS = [
  { href: '/huangshan/yellow-mountain', label: 'Huangshan', description: 'The Yellow Mountain is 1.5 hours from Jingdezhen by train' },
  { href: '/fujian/wuyishan', label: 'Wuyishan', description: 'Combine with Fujian\'s tea mountains and Nine-Bend River' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Jiangxi · 4-5 Days</Kicker>
          <h1>Jingdezhen & Lushan: Porcelain Capital & Misty Mountain</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Jingdezhen\'s 1,000-year-old kilns, hands-on porcelain workshops, and Lushan — the mountain where China\'s leaders held secret meetings in colonial stone villas.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>4-5 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Jingdezhen → Lushan → Nanchang</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$450-650/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Jingdezhen (景德镇) has produced the world\'s finest porcelain for 1,000 years. The imperial kilns supplied every Chinese emperor from the Song to the Qing dynasty, and \'china\' (porcelain) is named after \'China\' for a reason — Jingdezhen\'s exports defined how the world saw Chinese craftsmanship. Today the city is a fascinating mix of ancient kilns, artist studios, and a thriving contemporary ceramics scene. Lushan (庐山), 2 hours north, is a mountain resort where missionaries, colonialists, and later China\'s communist leaders built stone villas in the cool mountain air. Mao held the 1959 Lushan Plenum here, where he purged Peng Dehuai for criticising the Great Leap Forward.</p>
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