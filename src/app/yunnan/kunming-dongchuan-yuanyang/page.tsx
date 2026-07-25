import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Kunming-Dongchuan-Yuanyang Rice Terraces (5-6 Days) | Yunnan | BeforeChina',
  description: 'Photograph Dongchuan Red Land and Yuanyang Rice Terraces — two of China\'s most spectacular landscapes — on a 5-6 day photography-focused Yunnan route.',
  alternates: { canonical: '/yunnan/kunming-dongchuan-yuanyang' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When are the Yuanyang rice terraces flooded?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'November to March is the flooded season — the terraces are filled with water and reflect the sky, creating the iconic mirror effect. This is the best time for photography. April-October the terraces are green with growing rice, which is still beautiful but less dramatic for photos.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Dongchuan Red Land & Yuanyang Rice Terraces', item: 'https://beforechina.com/yunnan/kunming-dongchuan-yuanyang' },
  ],
};

const STOPS = [
  { day: 'Day 1: Kunming → Dongchuan', content: `Drive 3.5 hours from Kunming to Dongchuan Red Land (东川红土地). The soil here contains iron oxide that turns brilliant red after rain. Arrive by mid-afternoon and photograph the sunset at Luoxiagou (Falling Sun Valley) — the red fields, green barley, and golden buckwheat create colour blocks like a painter\'s palette. Stay at a local farmhouse guesthouse.`, tip: `The best Dongchuan photos are taken 1-2 days after rain, when the iron oxide is most vivid. Check the weather before making the trip — if it\'s been dry for a week, the colours are muted.` },
  { day: 'Day 2: Dongchuan → Kunming', content: `Sunrise at Damakan (the most famous viewpoint — a lone tree silhouetted against the red hills). Morning: photograph the red land from Jinxiuyuan and Qicaipo viewpoints. The light is best from 7-10am. Drive back to Kunming by afternoon. Evening: overnight train or rest before tomorrow\'s journey to Yuanyang.`, tip: `Dongchuan\'s guesthouses are basic (¥100-150/night) — bring toilet paper and hand sanitiser. The farmhouse food is excellent: free-range chicken, wild mushrooms, and homegrown vegetables.` },
  { day: 'Day 3: Kunming → Yuanyang', content: `Drive 5-6 hours from Kunming to Yuanyang Rice Terraces. The road is winding — the terraces are carved into mountains at 1,200-2,000m. Arrive by late afternoon and photograph sunset at Bada scenic area — this is the classic wide-angle view of thousands of terraces cascading down the mountainside. Stay in Xinjie Town or at a guesthouse in Duoyishu village.`, tip: `The Yuanyang entrance ticket is ¥100 (valid for 3 days, covers all viewpoints). Buy it at the entrance gate 30 km before Xinjie — you cannot buy tickets at the viewpoints themselves.` },
  { day: 'Day 4: Yuanyang Terraces', content: `Sunrise at Duoyishu — the most famous sunrise spot in Yuanyang. Arrive by 6am (the platform fills up by 6:30am) to watch the sun rise over the terraces as mist rises from the valley. Morning: Laohuzui (Tiger Mouth) — steep terraces plunging 1,000m into the valley. Afternoon: Qingkou Hani Village — a traditional Hani mushroom-shaped house village. Sunset: either Bada again or Longshuba depending on the light.`, tip: `Yuanyang sunrise in January-March is crowded with Chinese photographers — tripods in every direction. The platform at Duoyishu has two levels; the upper level fills first. Go to the lower level for a less obstructed view.` },
  { day: 'Day 5: Yuanyang → Kunming', content: `Final sunrise at a quiet viewpoint (Shengcun or Mengnong). Visit a morning market in Xinjie or Laomeng — Hani, Yi, and Miao villagers in traditional clothing trading produce, textiles, and handicrafts. Drive back to Kunming (5-6 hrs). Fly out in the evening or stay overnight in Kunming.`, tip: `The Hani market in Laomeng (Thursday) is the most authentic. Villagers walk 2-3 hours from mountain villages to trade. The textiles — indigo-dyed hemp — make excellent souvenirs (¥50-150 for a scarf).` },
];

const PRACTICAL = [
  { title: 'Photography Tips', body: `Wide-angle lens (16-35mm) for the terraces, telephoto (70-200mm) for details and compression. Tripod essential for sunrise/sunset. A polarising filter helps cut glare off the flooded terraces. Best months: December-February for flooded terraces and clear skies.` },
  { title: 'Where to Stay', body: `Yuanyang: Duoyishu village has the best sunrise access (\$20-50/night, basic). Xinjie Town has more comfort (\$30-80/night). Dongchuan: farmhouse guesthouses near the viewpoints (\$15-30/night, very basic).` },
  { title: 'Getting Around', body: `Both Dongchuan and Yuanyang require a private car. In Kunming, hire a driver for the full route (¥2,500-3,500 for 5-6 days including fuel). Public buses exist but are slow and don\'t reach the viewpoints.` },
];

const NEXT_STEPS = [
  { href: '/yunnan/kunming-dali-lijiang-shangri-la', label: 'Classic Yunnan route', description: 'Combine with the main Yunnan backpacker trail' },
  { href: '/sichuan/chengdu-jiuzhaigou', label: 'Jiuzhaigou guide', description: 'Another photographer paradise in Sichuan' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Yunnan · 5-6 Days</Kicker>
          <h1>Dongchuan Red Land & Yuanyang Rice Terraces</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>A photographer\'s dream — the iron-red soils of Dongchuan and the mirror-like flooded terraces of Yuanyang, two of China\'s most photogenic landscapes.</p>
        </div>
      </section>

      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>5-6 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Kunming → Dongchuan → Kunming → Yuanyang</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$400-600/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>This route is built for photographers. Dongchuan\'s Red Land, 250 km northeast of Kunming, has iron-rich soil that glows crimson at sunrise. Yuanyang\'s rice terraces, 330 km south, have been carved into the Ailao Mountains by the Hani people over 1,300 years — 3,000 steps from river to summit, each one flooded and reflecting the sky like a giant\'s staircase of mirrors.</p>
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
