import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Fanjingshan-Zhenyuan (4-5 Days) | Guizhou Sacred Mountain & Ancient Town | BeforeChina',
  description: 'Fanjingshan\'s otherworldly red cloud golden summit and Zhenyuan\'s 2,300-year-old riverside town — eastern Guizhou\'s twin UNESCO sites.',
  alternates: { canonical: '/guizhou/fanjingshan-zhenyuan' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How difficult is the Fanjingshan climb?', acceptedAnswer: { '@type': 'Answer', text: 'The cable car takes you to 2,100m, then it is a 1-hour walk up wooden boardwalks to the Mushroom Stone (2,318m) and Red Cloud Golden Summit (2,336m). The final section to the summit involves near-vertical stairs with chain handrails — it is steep but not technical. The whole visit takes 5-6 hours. Not suitable for those with mobility issues or severe fear of heights.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Fanjingshan & Zhenyuan: Guizhou\'s Sacred Mountain', item: 'https://beforechina.com/guizhou/fanjingshan-zhenyuan' },
  ],
};

const STOPS = [
  { day: 'Day 1: Guiyang → Tongren', content: `Fly into Guiyang. Take the 1.5-hour high-speed train to Tongren (¥120). Tongren is the gateway city for Fanjingshan. Spend the afternoon exploring Tongren\'s old town along the Jin River and visiting the Dongshan Temple. Stay overnight near the Fanjingshan entrance or in Tongren.`, tip: `Fanjingshan limits visitors to 8,000/day and tickets sell out. Book on WeChat (search 梵净山) 7 days ahead — especially in summer and on weekends. The ticket (¥100 + ¥140 cable car) is for a specific entry time slot. Morning slots (7-9am) sell out first.` },
  { day: 'Day 2: Fanjingshan', content: `Arrive at the park entrance by 7:30am. Take the cable car up (20 min, from 800m to 2,100m). From the upper station, walk the wooden boardwalk (1 hr) through a primeval forest of rhododendrons and ancient firs to the Mushroom Stone — a 10m granite boulder balanced on a smaller rock, the symbol of Fanjingshan. Continue to the Red Cloud Golden Summit — the climb up the rock pinnacle is steep (near-vertical stairs, chain handrails) but the view from the top is unforgettable: a sea of karst peaks stretching to the horizon. Descend by cable car. Return to Tongren for the night.`, tip: `Fanjingshan weather is unpredictable — the summit is often in clouds. Check the forecast and go on a clear day. Morning is best. Bring layers — the summit is 10°C colder than the base. The stairs to the summit are genuinely steep; if you have a fear of heights, the Mushroom Stone area is still worth the trip without the summit climb.` },
  { day: 'Day 3: Tongren → Zhenyuan', content: `Take the 1-hour high-speed train from Tongren South to Sansui (¥45), then a 40-minute bus to Zhenyuan. Zhenyuan Ancient Town is built along the Wuyang River in a narrow gorge — stone houses, temple-studded cliffs, and a series of ancient bridges. Walk the old town, cross the Zhusheng Bridge (built 1372, rebuilt in Qing dynasty), and climb the cliffside path to the Qinglong Cave complex — a series of temples and pavilions built into a cliff face overlooking the river.`, tip: `Zhenyuan is free to enter. The Qinglong Cave complex (¥60) is a remarkable feat of construction — three religions (Buddhism, Daoism, Confucianism) sharing the same cliff face. The views from the highest pavilion are worth the climb.` },
  { day: 'Day 4: Zhenyuan → Guiyang', content: `Morning: Wuyang River boat ride through the gorge (¥120, 1 hr) — the cliffs rise vertically from the water and the perspective from the river is completely different from the town. Afternoon: walk the Black Dragon Cave path on the opposite cliff for the classic Zhenyuan photo — the town\'s curved river and temple-dotted cliffs in one frame. Take the train back to Guiyang (1.5 hrs, ¥120). Fly out in the evening.`, tip: `The Zhenyuan night view is famous among Chinese tourists — the old town\'s lanterns and the illuminated temple cliffs reflecting in the Wuyang River. The best night photo is from the Zhusheng Bridge. Stay one night in Zhenyuan for this — it transforms after dark.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Guiyang → Tongren: high-speed train (1.5 hrs, ¥120). Tongren → Sansui (for Zhenyuan): train (1 hr, ¥45). Zhenyuan → Guiyang: train (1.5 hrs, ¥120). Fanjingshan entrance is 1.5 hrs from Tongren by bus (¥30).` },
  { title: 'Where to Stay', body: `Tongren: near the train station or old town (\$25-50/night). Zhenyuan: riverside guesthouses in the old town (\$30-80/night) — get a room with a river-view balcony.` },
  { title: 'Fanjingshan Tips', body: `Book tickets on WeChat exactly 7 days ahead at 7am. The cable car runs 8am-5pm (last car down at 5pm). Bring your own food — the restaurants at the top are expensive and mediocre. If the summit is closed due to weather (common in winter), the Mushroom Stone area is still open and worth visiting.` },
];
const NEXT_STEPS = [
  { href: '/guizhou/huangguoshu-libo-miao', label: 'Full Guizhou route', description: 'Add Huangguoshu Waterfall and Miao villages' },
  { href: '/zhangjiajie/avatar-mountains', label: 'Zhangjiajie guide', description: 'The Avatar mountains, 2 hours from Guizhou' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Guizhou · 4-5 Days</Kicker>
          <h1>Fanjingshan & Zhenyuan: Guizhou\'s Sacred Mountain</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>A 2,570m red cloud summit with a temple split between two rock pillars, and a 2,300-year-old town built along a river gorge — eastern Guizhou at its most dramatic.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>4-5 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Guiyang → Fanjingshan → Zhenyuan → Guiyang</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$350-500/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Fanjingshan (梵净山) is one of China\'s five sacred Buddhist mountains, a UNESCO site in eastern Guizhou. Its iconic image is the Red Cloud Golden Summit — two temple halls (Buddha and Maitreya) perched on a split rock pinnacle at 2,336m, connected by a narrow stone bridge. Zhenyuan Ancient Town (镇远古镇) is a 2,300-year-old town built into a narrow gorge along the Wuyang River, with Ming dynasty temples clinging to cliff faces and a nightscape of lanterns reflecting in the water.</p>
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