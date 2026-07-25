import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Pingyao-Datong-Yungang (5-6 Days) | Ancient Cities & Buddhist Caves | BeforeChina',
  description: 'Pingyao\'s Ming-Qing walled city, Datong\'s Yungang Grottoes (older and larger than Longmen), and the Hanging Temple — 5-6 days in Shanxi\'s ancient heartland.',
  alternates: { canonical: '/ancient-capitals/pingyao-datong-yungang' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do the Yungang Grottoes compare to Longmen?', acceptedAnswer: { '@type': 'Answer', text: 'Yungang (Datong) is older (5th century vs 6th-9th century at Longmen) and has more statues (51,000 vs 100,000 — but Yungang\'s are larger on average). The Yungang Buddhas are more Indian-influenced (rounder faces, Gandharan drapery) while Longmen\'s are more Sinicised. Both are UNESCO World Heritage. If you can only visit one: Yungang is more impressive for the scale of individual statues; Longmen is more beautiful for the riverside setting.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Pingyao, Datong & the Yungang Grottoes: Shanxi\'s Ancient Heartland', item: 'https://beforechina.com/ancient-capitals/pingyao-datong-yungang' },
  ],
};

const STOPS = [
  { day: 'Day 1: Beijing → Pingyao', content: `Take the 4-hour high-speed train from Beijing Fengtai to Pingyao Ancient City (¥180). Pingyao is a walled city of 40,000 people that was China\'s banking capital in the 19th century — the \'Wall Street of China\' during the Qing dynasty. The entire city within the walls is a UNESCO site. Check into a guesthouse inside the walls (converted courtyard house, ¥150-400/night). Walk the city walls (¥125 combined ticket covers the walls and all attractions) at sunset — the 6 km circuit gives a panorama of grey-tiled roofs and narrow lanes.`, tip: `Pingyao\'s combined ticket (¥125) covers the city walls and 18 attractions, valid for 3 days. The must-sees: Rishengchang Draft Bank (the first bank in China, founded 1823), the city walls, and the Ming-Qing Street. The county yamen (government office) is interesting but takes 2 hours — skip it if you are tight on time.` },
  { day: 'Day 2: Pingyao', content: `Full day exploring Pingyao. Visit Rishengchang (日昇昌) — the first draft bank in Chinese history, founded in 1823. Its system of remittance receipts (basically paper money backed by silver deposits) transformed Chinese commerce. Walk Ming-Qing Street (明清街), the main commercial artery since the 14th century. Visit the Confucius Temple and the City God Temple. For lunch: Pingyao beef (平遥牛肉) — cured beef that is pink, tender, and sliced paper-thin. It has been made here since the Ming dynasty.`, tip: `Pingyao beef (平遥牛肉) is the local speciality. The best is from Guanyun (冠云) brand, sold in red boxes everywhere. It is eaten cold, sliced thin, as a snack with beer. Also try the cat\'s ear noodles (猫耳朵) — small pieces of dough pressed into the shape of a cat\'s ear and stir-fried with vegetables.` },
  { day: 'Day 3: Pingyao → Datong', content: `Morning: visit the Shuanglin Temple (双林寺, ¥35), 6 km from Pingyao — a 1,500-year-old temple with over 2,000 painted clay statues from the Song, Yuan, Ming, and Qing dynasties. The statues are extraordinary: life-sized, individually expressive, and still bearing their original pigments. Afternoon: Didi to Pingyao Ancient City Station (15 min), then high-speed train to Datong South (3 hrs, ¥170). Datong is an industrial city (coal mining) with an ancient heart. Check in and walk the rebuilt Datong city wall at night.`, tip: `Shuanglin Temple is often skipped by tourists who only visit the Pingyao old town. That is a mistake. The painted clay statues are among the finest surviving examples of Chinese polychrome sculpture. The \'Thousand-Armed Guanyin\' hall is the highlight — the goddess is surrounded by hundreds of suspended miniature statues.` },
  { day: 'Day 4: Datong — Yungang Grottoes', content: `Take the 30-minute bus from Datong to the Yungang Grottoes (云冈石窟, ¥120). The grottoes stretch 1 km along a sandstone cliff and contain 51,000 Buddhist statues in 252 caves, carved between 460-525 AD. The largest is a 17m seated Buddha in Cave 5. Cave 20\'s open-air Buddha is the iconic image — a 13.7m seated Buddha exposed when the front wall collapsed centuries ago. The site takes 3-4 hours. Afternoon: Datong Museum (free) for the context on the Northern Wei dynasty that built the grottoes. Evening: Datong knife-shaved noodles (刀削面) — Shanxi\'s signature dish.`, tip: `Yungang Caves 5-20 are the highlights. Cave 6 is the most ornate — a square pagoda pillar covered in carvings of the Buddha\'s life story. Cave 12 is the \'Music Cave\' with celestial musicians carved across the ceiling. The open-air Buddha in Cave 20 is the photo everyone takes — but go further to Caves 16-19 for the full Northern Wei progression of styles.` },
  { day: 'Day 5: Hanging Temple & Yingxian Pagoda', content: `Full-day excursion: drive 1.5 hours to the Hanging Temple (悬空寺, ¥130) — a temple built into a sheer cliff face 75m above the canyon floor, supported by wooden beams wedged into the rock. It was built in 491 AD and is unique in China: it houses Buddhist, Daoist, and Confucian shrines in the same temple. Walk the narrow wooden walkways (they creak, which is part of the experience). Afternoon: drive 1 hour to the Yingxian Wooden Pagoda (应县木塔, ¥60) — the oldest surviving fully wooden pagoda in the world, built in 1056 without a single nail. At 67m (9 storeys), it is a miracle of Song dynasty engineering. Return to Datong for the night.`, tip: `The Hanging Temple looks terrifying but is structurally sound — the beams are oak wedged into the rock, and the cliff overhang protects the temple from rain. The walkways are narrow (60cm) and the railing is knee-height. Not for those with severe fear of heights. The Yingxian Pagoda is leaning slightly (like the Tower of Pisa) — you can no longer climb it, only view from the outside.` },
  { day: 'Day 6: Datong → Beijing', content: `Morning: Huayan Temple (华严寺, ¥65) — a Liao dynasty (1038 AD) temple with the largest wooden Buddha hall in China and exquisite Liao dynasty clay sculptures. The temple library (薄伽教藏殿) has cabinets designed to look like miniature buildings. Afternoon: high-speed train back to Beijing (2 hrs, ¥160). Fly out or continue your China journey.`, tip: `Huayan Temple\'s main hall (大雄宝殿) is one of the largest wooden Buddhist halls in China — 1,559 m². The clay sculptures in the Sutra Library are Liao dynasty originals (11th century) and are remarkably well-preserved. The temple is often empty because tourists prioritise Yungang — it is a quiet, atmospheric experience.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Beijing-Pingyao: high-speed train (4 hrs, ¥180). Pingyao-Datong: train (3 hrs, ¥170). Datong-Beijing: train (2 hrs, ¥160). The Hanging Temple and Yingxian Pagoda require a private car from Datong (¥400-500/day).` },
  { title: 'Where to Stay', body: `Pingyao: inside the city walls in a converted courtyard guesthouse (¥150-400/night). Datong: near the old city or train station (\$30-70/night). The Pingyao courtyard guesthouses (kangs — traditional heated brick beds) are a highlight in themselves.` },
  { title: 'When to Go', body: `April-June and September-October. Shanxi is cold in winter (-15°C in Datong) and the Hanging Temple can close due to ice. Summer is hot (30-35°C) but manageable. The best light at Yungang is morning (the caves face east).` },
];
const NEXT_STEPS = [
  { href: '/ancient-capitals/xian-luoyang-kaifeng', label: 'Xian-Luoyang-Kaifeng', description: 'Continue south to the other ancient capitals' },
  { href: '/golden-triangle/beijing-in-depth', label: 'Beijing in depth', description: 'Spend 5 days exploring Beijing before heading to Shanxi' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Ancient Capitals · 5-6 Days</Kicker>
          <h1>Pingyao, Datong & the Yungang Grottoes: Shanxi\'s Ancient Heartland</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>A Ming dynasty walled banking city, 51,000 Buddhist statues carved into a 1km cliff, and a temple suspended from a sheer rock face — Shanxi province is China\'s best-kept history secret.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>5-6 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Beijing → Pingyao → Datong → Hanging Temple → Beijing</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$500-800/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Shanxi province (山西, \'West of the Mountains\') is China\'s museum of ancient architecture. It has more surviving pre-14th-century wooden buildings than the rest of China combined. This route connects three extraordinary sites: Pingyao (平遥), a perfectly preserved Ming-Qing banking city with 6 km of intact city walls; the Yungang Grottoes (云冈石窟) near Datong — 51,000 Buddhist statues carved 1,500 years ago, older and larger than the Longmen Grottoes; and the Hanging Temple (悬空寺), a temple clinging to a cliff face 75m above a canyon floor.</p>
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