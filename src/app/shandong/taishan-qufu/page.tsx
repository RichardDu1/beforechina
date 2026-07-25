import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Mount Tai & Qufu (3-4 Days) | Confucius Hometown & China\'s Sacred Mountain | BeforeChina',
  description: 'Mount Tai — China\'s most sacred mountain with 3,000 years of imperial pilgrimage — and Qufu, the hometown of Confucius, in 3-4 days.',
  alternates: { canonical: '/shandong/taishan-qufu' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Mount Tai worth climbing or should I take the cable car?', acceptedAnswer: { '@type': 'Answer', text: 'The climb is the point. The traditional route from Hongmen (红门) to the South Heavenly Gate (南天门) is 6,000+ stone steps, takes 4-6 hours, and has been walked by billions of pilgrims over 3,000 years. The steps are lined with inscriptions carved into the rock by emperors and poets. The cable car (¥100) from the midway point takes 8 minutes and misses the entire cultural experience. Climb up, cable car down (to save your knees).' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Mount Tai & Qufu: Confucius\'s Hometown & China\'s Sacred Mountain', item: 'https://beforechina.com/shandong/taishan-qufu' },
  ],
};

const STOPS = [
  { day: 'Day 1: Arrive Tai\'an', content: `Fly into Jinan Yaoqiang Airport (TNA) or take the high-speed train to Tai\'an (1.5 hrs from Beijing, ¥120; 2.5 hrs from Shanghai, ¥200). Tai\'an (泰安) is the city at the foot of Mount Tai. Afternoon: visit Dai Temple (岱庙, ¥30) at the mountain base — the temple where emperors performed pre-climb rituals before ascending Mount Tai. The temple has a 2,100-year-old cypress tree, Song dynasty murals, and imperial steles. Evening: buy supplies for the climb (water, snacks, a headlamp for the night climb option). Sleep early — you will wake at midnight if doing the night climb.`, tip: `The classic Mount Tai experience is the night climb: start at 11pm-midnight from Hongmen Gate, climb 6,000 steps by headlamp, and reach the summit by 5am for sunrise. Thousands of Chinese climbers do this every night in summer. The steps are lit and there are vendors selling water and instant noodles all the way up. It is a pilgrimage, not a wilderness hike.` },
  { day: 'Day 2: Mount Tai', content: `Night climb option: wake at midnight, start climbing at 1am from Hongmen Gate. The 6,000+ steps take 4-5 hours at a steady pace. You climb through the night with hundreds of Chinese climbers — the atmosphere is festive, not solitary. Arrive at the South Heavenly Gate (南天门) by 5am, then walk 20 minutes to Jade Emperor Peak (玉皇顶, 1,545m) for sunrise. The sunrise over a sea of clouds is the payoff. Day climb option: start at 6am, climb 4-6 hours, reach the summit by midday. The views are still spectacular but the night climb has the better atmosphere. Descend by cable car (¥100) and bus (¥30) to save your knees. Afternoon: train to Qufu (20 min, ¥30).`, tip: `Mount Tai entrance: ¥125 (peak) / ¥100 (off-peak). Cable car down: ¥100. The night climb is cold — the summit is 10-15°C colder than the base and windy. Bring a warm layer and a windbreaker. The summit has vendors renting military coats (¥20-50) — they are ugly but warm. The sunrise is visible about 50% of the time — clouds and fog obscure it. Check the forecast.` },
  { day: 'Day 3: Qufu', content: `Qufu is a small city built around the legacy of Confucius. Visit the Confucius Temple (孔庙, ¥80) — China\'s second-largest ancient building complex after the Forbidden City, with 466 halls and pavilions built over 2,000 years. The temple is a forest of steles, ancient cypresses, and yellow-glazed imperial roofs. Then the Confucius Mansion (孔府, ¥60) — the residence of Confucius\'s direct descendants for 77 generations (the last descendant still lives in Taiwan). Finally, the Confucius Cemetery (孔林, ¥40) — a 200-hectare forest where Confucius and 100,000+ of his descendants are buried. The tomb of Confucius is a simple mound with a stele — understated, fitting his philosophy.`, tip: `The combined ticket for the Temple, Mansion, and Cemetery is ¥150 (saves ¥30 vs buying separately). The three sites are walkable from each other. The Temple is the highlight — give it 2 hours. The Cemetery is a peaceful forest of ancient trees and stone steles, best in the late afternoon light. Qufu has a touristy \'Confucius culture street\' selling calligraphy brushes and Confucius-branded everything — skip it.` },
  { day: 'Day 4: Qufu → Depart', content: `Fly out from Jinan Yaoqiang Airport (TNA), 2 hours from Qufu by bus (¥60). Alternatively, take the high-speed train from Qufu East to Beijing (2 hrs, ¥200) or Shanghai (3 hrs, ¥300). If you have a late departure, visit the Nishan Holy Land (尼山圣境, ¥120) — a massive new Confucius theme park with a 72m bronze statue of Confucius and a spectacular evening light show. It is China\'s attempt to make Confucius Instagram-worthy.`, tip: `The Nishan Holy Land is a state-funded Confucius theme park opened in 2018. The 72m statue (Confucius lived to 72) is genuinely impressive. The evening drone and light show is spectacular in a very Chinese way — 500 drones forming Confucius quotes in the sky. It is ¥120 and 40 minutes from Qufu by bus.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Fly into Jinan (TNA). High-speed trains: Beijing-Tai\'an (1.5 hrs, ¥120), Shanghai-Tai\'an (2.5 hrs, ¥200). Tai\'an-Qufu: 20 min by train (¥30). Qufu-Jinan: 2 hrs by bus (¥60) or 30 min by train.` },
  { title: 'Where to Stay', body: `Tai\'an: near Hongmen Gate for the night climb (\$25-60/night). Qufu: near the Confucius Temple (\$25-60/night). Both cities are small and inexpensive.` },
  { title: 'When to Go', body: `March-May and September-November. The night climb is most popular in summer (June-August) when it is warm enough to climb in a t-shirt. Avoid Chinese holidays — Mount Tai gets 30,000+ climbers on National Day. The mountain can close in winter if there is ice on the steps.` },
  { title: 'Mount Tai Night Climb Tips', body: `Start at midnight from Hongmen Gate. Wear layers — you will be hot climbing and cold at the summit. Bring a headlamp, water (vendors sell bottles for ¥5-10), snacks, and a warm layer. The steps are uneven granite — wear sturdy shoes. Arrive at the summit by 5am for sunrise. The cable car down starts at 6:30am.` },
];
const NEXT_STEPS = [
  { href: '/shandong/qingdao-yantai', label: 'Qingdao & Yantai', description: 'Add Shandong\'s coast, beer, and wine region' },
  { href: '/ancient-capitals/pingyao-datong-yungang', label: 'Pingyao & Datong', description: 'Combine with Shanxi\'s ancient cities' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Shandong · 3-4 Days</Kicker>
          <h1>Mount Tai & Qufu: Confucius\'s Hometown & China\'s Sacred Mountain</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Climb 6,000 steps up China\'s most sacred mountain at dawn, then walk through Confucius\'s family mansion — 2,500 years of Chinese civilisation in 3 days.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>3-4 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Jinan → Mount Tai → Qufu → Jinan</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$350-500/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Mount Tai (泰山, 1,545m) is not China\'s highest or most beautiful mountain — but it is the most sacred. For 3,000 years, Chinese emperors climbed it to perform the Fengshan sacrifice, declaring their legitimacy to heaven. Mao Zedong climbed it. So did 72 emperors before him. The mountain is carved with calligraphy and dotted with temples. Qufu (曲阜), 1 hour south, is the hometown of Confucius (551-479 BC), whose philosophy shaped Chinese civilisation for 2,500 years. The Confucius Mansion, Temple, and Cemetery are a UNESCO site and a pilgrimage destination.</p>
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