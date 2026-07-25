import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Chengdu-Emeishan-Leshan (3-4 Days) | Sichuan Travel Guide | BeforeChina',
  description: 'Chengdu pandas, Emei Mountain\'s golden summit, and the world\'s largest Buddha at Leshan — Sichuan\'s cultural trinity in 3-4 days.',
  alternates: { canonical: '/sichuan/chengdu-emei-leshan' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can I visit Leshan and Emeishan in one day?', acceptedAnswer: { '@type': 'Answer', text: 'It\'s tight but possible: morning at Leshan Giant Buddha (2-3 hours), then a 45-minute train to Emeishan and take the bus to the midway point (Wannian Temple). But two days is better — one day for Leshan, one for Emeishan summit. Rushing both in one day means you won\'t see Emei\'s golden summit, which is the whole point.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Chengdu, Emei Mountain & Leshan Giant Buddha', item: 'https://beforechina.com/sichuan/chengdu-emei-leshan' },
  ],
};

const STOPS = [
  { day: 'Day 1: Chengdu → Leshan → Emeishan', content: `Morning: Chengdu Panda Base (7:30am). Then take the 50-minute high-speed train from Chengdu South to Leshan (¥54). Visit the Leshan Giant Buddha — walk down the cliffside staircase to see the Buddha from the base (the feet alone are 8.5m wide, each toenail fits a seated person). Take the ferry (¥70) for the frontal river-level view. Afternoon: train from Leshan to Emeishan (15 min, ¥11). Stay at the base town (Baoguo Temple area).`, tip: `The Leshan Buddha staircase has 250 steps and queues can be 2+ hours on weekends. Go on a weekday, or take the ferry instead — it\'s faster and gives a better frontal view for photos.` },
  { day: 'Day 2: Emeishan Summit', content: `Take the 6am shuttle bus from the base to Leidongping (2 hrs, ¥90 round trip). From Leidongping, walk 20 minutes to the cable car station, then take the cable car (¥65 up) to the Golden Summit (金顶) at 3,099m. The 48m golden statue of Samantabhadra (Puxian) on the summit is stunning against the clouds. On clear days, you can see the Gongga Mountains 100 km away. Walk down via the Wannian Temple path (or take the cable car back if short on time). Evening: return to Chengdu by train.`, tip: `Emeishan entrance: ¥160 (2-day validity). The summit is 15°C colder than the base — bring layers even in summer. The monkeys on the trail are aggressive and will grab food/water bottles. Don\'t carry visible food and don\'t make eye contact.` },
  { day: 'Day 3: Chengdu Food & Culture', content: `Morning: Jinli Ancient Street and Wuhou Temple (Three Kingdoms history). Afternoon: Sichuan cooking class — learn to make kung pao chicken, mapo tofu, and dan dan noodles (half-day classes from ¥200). Evening: Sichuan opera at Shufeng Yayun Teahouse — face-changing, fire-spitting, and hand-shadow performances.`, tip: `The Sichuan opera face-changing (变脸) is genuinely impressive — performers change masks in a split second with a flick of the head. Shufeng Yayun (¥150-280) is the best show in Chengdu. Book evening tickets the day before.` },
];
const PRACTICAL = [
  { title: 'Getting Around', body: `High-speed trains connect Chengdu, Leshan (50 min), and Emeishan (15 min from Leshan). All bookable on Trip.com or 12306. Emeishan base to summit requires the park shuttle bus + cable car (no private cars allowed).` },
  { title: 'Where to Stay', body: `Emeishan base: near Baoguo Temple (\$25-60/night). For sunrise, stay at the Golden Summit (Jinding Hotel, ¥400-800/night) or Leidongping (¥200-400/night). Leshan: day trip from Chengdu or Emei — no need to stay overnight.` },
  { title: 'Best Season', body: `April-May and September-November. Emeishan summit is below freezing in winter (Dec-Feb) but the snow-covered temples are beautiful. Summer (June-August) is rainy and the summit is often clouded in.` },
];
const NEXT_STEPS = [
  { href: '/sichuan/chengdu-jiuzhaigou-huanglong', label: 'Jiuzhaigou route', description: 'Add the turquoise lakes and travertine pools' },
  { href: '/sichuan/chengdu-dao-cheng-yading', label: 'Daocheng Yading', description: 'Extend to the last Shangri-La' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Sichuan · 3-4 Days</Kicker>
          <h1>Chengdu, Emei Mountain & Leshan Giant Buddha</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Pandas in the morning, a 71m Buddha carved into a cliff face, and sunrise from a 3,099m golden summit — Sichuan\'s holy trinity.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>3-4 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Chengdu → Leshan → Emeishan → Chengdu</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$350-550/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>This route pairs Chengdu\'s pandas with two of Sichuan\'s UNESCO sites, both reachable within 2 hours by high-speed train. Leshan Giant Buddha is a 71m Maitreya carved into a red sandstone cliff at the confluence of three rivers — it took 90 years to complete (713-803 AD) and is the world\'s largest pre-modern statue. Mount Emei is one of China\'s Four Sacred Buddhist Mountains, with a 3,099m summit where the sunrise creates a \'Buddha\'s halo\' optical phenomenon.</p>
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