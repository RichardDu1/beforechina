import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Huangshan (3-4 Days) | Yellow Mountain Travel Guide | BeforeChina',
  description: 'Huangshan\'s granite peaks, sea of clouds, and ancient pine trees — China\'s most painted and most beautiful mountain, plus Hongcun and Xidi ancient villages.',
  alternates: { canonical: '/huangshan/yellow-mountain' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is it worth sleeping on top of Huangshan?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, if you can. The sunrise over the sea of clouds from the summit is the essential Huangshan experience. There are 3 hotels on the mountain (¥800-1,500/night, book 2-4 weeks ahead). The alternative is sleeping at the base (Tangkou) and taking the first cable car up (6:30am) — you will miss sunrise but save ¥500-1,000. The summit hotels are expensive and basic (thin walls, simple rooms) — you are paying for the location, not the luxury.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Huangshan: The Yellow Mountain & Huizhou Villages', item: 'https://beforechina.com/huangshan/yellow-mountain' },
  ],
};

const STOPS = [
  { day: 'Day 1: Arrive Huangshan', content: `Fly into Huangshan Tunxi Airport (TXN) or take the high-speed train to Huangshan North (2.5 hrs from Shanghai, ¥200; 1.5 hrs from Hangzhou, ¥120). Transfer to Tangkou (汤口), the town at the mountain base (1 hr from the airport/train station). Afternoon: visit the Huangshan Hot Springs (¥200-300) — natural hot springs at the mountain base, perfect for relaxing before tomorrow\'s climb. Evening: pack a daypack for the mountain (warm clothes, snacks, water, headlamp for sunrise).`, tip: `Tangkou is the gateway town for Huangshan. Everything here is oriented around the mountain — hotels, restaurants, gear shops. Buy a walking stick (¥5-10) — it genuinely helps on the steep stairs. The Huangshan entrance ticket is ¥190 (peak season) / ¥150 (off-peak). The cable cars are ¥80-90 each way. The summit hotels charge ¥50-80 for a basic meal — bring instant noodles and snacks.` },
  { day: 'Day 2: Huangshan Mountain', content: `Enter the mountain at 6:30am. Take the Yungu Cable Car (云谷索道, ¥80) from the eastern side to the summit area. The cable car rises 1,000m through the clouds — when you emerge above the cloud layer, the view is unforgettable. The summit trail is a 6-8 km loop past the famous sights: Begin-to-Believe Peak (始信峰), the Brush Pen Peak (梦笔生花), and Lion Peak (狮子峰) for the first sea-of-clouds panorama. Check into your summit hotel. Afternoon: hike to the West Sea Grand Canyon (西海大峡谷) — a 2-3 hour loop through the most dramatic section of Huangshan, with paths carved into vertical cliffs and views of the canyon\'s granite spires. Sunset at Bright Summit Peak (光明顶, 1,860m) — the highest point on the mountain.`, tip: `The West Sea Grand Canyon is Huangshan\'s best hike — 2-3 hours on paths carved into cliffs, through tunnels, and across stone bridges. The trail descends 300m to the canyon floor, then you take the funicular tram back up (¥100). The canyon closes in rain or ice. Start the loop by 1pm to finish before dark. Bright Summit Peak is the best sunrise AND sunset spot — it is the highest point and has 360° views.` },
  { day: 'Day 3: Huangshan Sunrise → Hongcun → Depart', content: `Wake at 4:30am for sunrise at Bright Summit Peak or Lion Peak. The \'sea of clouds\' phenomenon — when clouds fill the valleys below and the peaks become islands — happens about 50-60 days per year, mostly after rain. If you get it, you will understand why Chinese painters have been painting this mountain for 1,000 years. After sunrise: descend by the Yuping Cable Car (玉屏索道, ¥90), stopping at the Welcoming Guest Pine (迎客松) — a 1,500-year-old pine tree growing horizontally from a cliff, the symbol of Huangshan. Descend to Tangkou by 11am. Afternoon: visit Hongcun (宏村, ¥104) and/or Xidi (西递, ¥104) — 900-year-old Huizhou villages. Hongcun is more famous (Crouching Tiger, Hidden Dragon), Xidi is quieter. Walk the cobbled lanes, photograph the whitewashed walls and horse-head roofs reflected in the moon pond. Evening: train or fly out.`, tip: `The Welcoming Guest Pine is Huangshan\'s most famous tree — and the most crowded photo spot on the mountain. Queue 20-30 minutes for a photo. The tree is 1,500 years old and has its own security guard. Hongcun (¥104) is touristy but genuinely beautiful — the reflection of the white walls and horse-head roofs in the moon pond is the classic Huizhou image. Go after 3pm when the tour groups thin out.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `High-speed train to Huangshan North from Shanghai (2.5 hrs, ¥200), Hangzhou (1.5 hrs, ¥120), or Nanjing (3 hrs). Huangshan North to Tangkou: 1 hr by bus (¥20). Alternatively fly into Huangshan Tunxi Airport (TXN).` },
  { title: 'Where to Stay', body: `Tangkou (mountain base): \$30-80/night. Summit hotels: Beihai Hotel, Xihai Hotel, or Shilin Hotel (¥800-1,500/night, book 2-4 weeks ahead). The summit hotels are basic for the price — you are paying for sunrise, not luxury.` },
  { title: 'When to Go', body: `March-May and September-November. Spring has blooming azaleas and the most \'sea of clouds\' days. Autumn has clear skies and golden light. Avoid July-August (rain, fog, crowds) and Chinese holidays (the mountain is packed). Winter (December-February) has snow — the mountain is beautiful and empty, but icy trails can close.` },
  { title: 'What to Pack', body: `Daypack with warm layers (the summit is 10-15°C colder than the base), rain jacket, snacks and water (everything is expensive on the mountain), headlamp for sunrise, and a walking stick (¥5-10 at Tangkou). No drones — they are banned in the park.` },
];
const NEXT_STEPS = [
  { href: '/yangtze-delta/hangzhou-wuzhen-mogan', label: 'Hangzhou route', description: 'Hangzhou is 1.5 hours from Huangshan by train' },
  { href: '/zhangjiajie/avatar-mountains', label: 'Zhangjiajie', description: 'Compare with China\'s other surreal mountain landscape' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Anhui · 3-4 Days</Kicker>
          <h1>Huangshan: The Yellow Mountain & Huizhou Villages</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>China\'s most painted mountain — granite peaks rising through a sea of clouds, ancient pine trees clinging to cliffs, and nearby Hongcun, the 900-year-old village that inspired Crouching Tiger, Hidden Dragon.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>3-4 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Huangshan City → Huangshan Mountain → Hongcun/Xidi → Huangshan City</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$400-600/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Huangshan (黄山, \'Yellow Mountain\') is not China\'s highest mountain (1,864m) or its most sacred — but it is widely considered the most beautiful. Its granite peaks, hot springs, ancient pine trees, and \'sea of clouds\' have inspired Chinese poets and painters for over 1,000 years. The saying goes: \'After seeing the Five Great Mountains, you don\'t need to see any others. After seeing Huangshan, you don\'t need to see the Five Great Mountains.\' Below the mountain, the Huizhou villages of Hongcun and Xidi — 900-year-old whitewashed villages with horse-head walls, reflected in lotus ponds — are UNESCO World Heritage and the setting for the opening scenes of Crouching Tiger, Hidden Dragon.</p>
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