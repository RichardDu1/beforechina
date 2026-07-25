import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Xishuangbanna Tropical Rainforest (3-4 Days) | Yunnan Travel Guide | BeforeChina',
  description: 'Xishuangbanna: Dai minority culture, tropical rainforest, wild elephants, and Mekong River sunsets in southern Yunnan — China\'s Southeast Asia.',
  alternates: { canonical: '/yunnan/xishuangbanna-tropical' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is the best time to visit Xishuangbanna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'November to February is the dry season with pleasant temperatures (20-30°C) — this is the best time. March-April is hot (35°C+) but you can catch the Dai Water Splashing Festival (April 13-15), the biggest Dai celebration of the year. May-October is rainy season — daily downpours, high humidity, but the rainforest is at its most lush.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Xishuangbanna: China\'s Tropical Southeast Asia', item: 'https://beforechina.com/yunnan/xishuangbanna-tropical' },
  ],
};

const STOPS = [
  { day: 'Day 1: Jinghong', content: `Fly into Xishuangbanna Gasa Airport (JHG) — direct flights from Kunming (1 hr), Chengdu, Chongqing, and major cities. Jinghong is the capital and feels more like a Southeast Asian town than a Chinese city: palm-lined streets, golden-roofed Dai temples, and the Mekong (called Lancang here) flowing through. Visit Manting Park — a former Dai royal garden with a temple and daily elephant show — and Gaozhuang Night Market in the evening for Dai barbecue and papaya salad.`, tip: `Gaozhuang Night Market is massive — one of Yunnan\'s best night markets. Try the grilled Mekong fish (¥30), Dai-style papaya salad (som tam, ¥15), and sticky rice in bamboo tubes (¥10). The market runs from 6pm to midnight.` },
  { day: 'Day 2: Wild Elephant Valley & Dai Villages', content: `Morning: Wild Elephant Valley (野象谷, 40 km north of Jinghong) — a nature reserve protecting Asia\'s last wild elephants. There\'s a 2 km elevated walkway through the canopy, and if you\'re lucky (best Feb-March), wild elephants come to the river to drink. There\'s also an elephant show (the ethics are debatable, but the wild encounters are genuine). Afternoon: visit a Dai village — Manzhang Village or Ganlanba — to see traditional stilt houses, Dai weaving, and taste Dai cuisine.`, tip: `Wild elephants are most active at dawn and dusk. Arrive at 8am when the park opens for the best chance of sightings. The walkway is wheelchair-accessible and takes about 2 hours.` },
  { day: 'Day 3: Menglun Tropical Botanical Garden', content: `Drive 1.5 hours east to the Menglun Tropical Botanical Garden — China\'s largest botanical garden, covering 900 hectares on a Mekong island. It has 13,000 plant species including a palm garden, orchid house, and a \'vine garden\' where 100m-long rattan vines hang from 40m trees. It\'s genuinely world-class. Spend 3-4 hours walking. Afternoon: return to Jinghong via Mengyang for a tea tasting at a Puer tea plantation.`, tip: `The botanical garden is ¥80 — worth every yuan. The best sections are the Palm Garden and the Tropical Rainforest section. A golf cart tour (¥50) covers the highlights in 2 hours if you\'re short on time.` },
  { day: 'Day 4 (optional): Mengla & Border', content: `Drive 3 hours to Mengla on the Laos border — the tropical rainforest here is the most intact in China. Visit the Wangtianshu (望天树) scenic area — a canopy walkway 36m above the forest floor suspended between towering Parashorea trees. It\'s the highest tree-top walkway in Asia. Fly out from Jinghong in the evening.`, tip: `You can technically cross into Laos at the Mohan-Boten border (open 8am-6pm) — but you need a Laos visa in advance and onward transport on the Laos side is limited. Most visitors just visit the Chinese border area.` },
];

const PRACTICAL = [
  { title: 'Getting There', body: `Fly into Xishuangbanna Gasa Airport (JHG). Direct flights from Kunming (1 hr, ¥400-600), Chengdu (2 hrs), Chongqing (2 hrs), and major cities. No train yet (the China-Laos railway passes through but has limited tourist stops).` },
  { title: 'Where to Stay', body: `Jinghong: near Gaozhuang or along the Lancang River (\$30-80/night). For a splurge: Anantara Xishuangbanna (¥1,200-2,000/night) — a luxury resort built in Dai architectural style by the river.` },
  { title: 'What to Eat', body: `Dai cuisine is spicy, sour, and herbaceous — totally different from northern Chinese food. Must-try: pineapple rice (菠萝饭), lemongrass grilled fish (香茅草烤鱼), Dai-style papaya salad, and the \'Dai family feast\' (傣家宴) where a dozen small dishes are served on a banana leaf.` },
];

const NEXT_STEPS = [
  { href: '/yunnan/kunming-dali-lijiang-shangri-la', label: 'Classic Yunnan route', description: 'Combine with the main Yunnan backpacker trail' },
  { href: '/esim', label: 'Get an eSIM for China', description: 'Land with internet that bypasses the firewall' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Yunnan · 3-4 Days</Kicker>
          <h1>Xishuangbanna: China\'s Tropical Southeast Asia</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Southern Yunnan\'s Dai heartland — tropical rainforest, wild elephants, Mekong River sunsets, and temples that look more like Thailand than China.</p>
        </div>
      </section>

      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>3-4 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Jinghong → Menglun → Mengla → Jinghong</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$300-500/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Xishuangbanna (西双版纳) sits at 21°N — the same latitude as Hawaii and at China\'s southern tip bordering Laos and Myanmar. The Dai people have lived here for 2,000 years, and their culture — Theravada Buddhism, stilt houses, spicy-sour food — has more in common with Thailand and Laos than Han China. This is where Chinese tourists go for a \'tropical paradise\' experience, but Western tourists have barely discovered it.</p>
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
