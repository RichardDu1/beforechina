import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Lijiang, Lugu Lake & Tiger Leaping Gorge (4-5 Days) | Yunnan | BeforeChina',
  description: 'Lijiang old town, the matriarchal Mosuo culture at Lugu Lake, and hiking Tiger Leaping Gorge — a compact 4-5 day Yunnan itinerary.',
  alternates: { canonical: '/yunnan/lijiang-lugu-lake-tiger-leaping-gorge' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get to Lugu Lake from Lijiang?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The drive from Lijiang to Lugu Lake takes 4-5 hours by car or minibus (¥80-120). The road is winding but fully paved. There is no train. Most guesthouses in Lijiang can arrange a shared minibus — book the night before. Departures are typically 7-8am.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Lijiang, Lugu Lake & Tiger Leaping Gorge', item: 'https://beforechina.com/yunnan/lijiang-lugu-lake-tiger-leaping-gorge' },
  ],
};

const STOPS = [
  { day: 'Day 1: Lijiang Old Town', content: `Fly into Lijiang Sanyi Airport (LJG) — direct flights from Chengdu, Chongqing, Kunming, and major Chinese cities. Spend the day exploring Dayan Old Town: the cobblestone alleys, wooden Naxi houses, and the canals that crisscross the town. Climb to Wangu Tower for the sunset view. Evening: Naxi grilled fish and yak yoghurt in a courtyard restaurant.`, tip: `Lijiang Airport is 28 km south of town. The airport shuttle bus (¥20) runs every 30 minutes. A Didi costs ¥80-100.` },
  { day: 'Days 2-3: Lugu Lake', content: `Take a 4-5 hour minibus from Lijiang to Lugu Lake (depart 7am, arrive by noon). Lugu Lake is at 2,685m, spanning the Yunnan-Sichuan border with crystal-clear emerald water. Spend the afternoon walking the lakeshore. Day 3: take a boat to Liwubi Island (the Mosuo people use traditional dugout canoes), visit a Mosuo family home to learn about the \'walking marriage\' tradition, and cycle the 50 km loop around the lake. Stay overnight in Luoshui Village on the Yunnan side.`, tip: `The 50 km lake loop takes 4-5 hours by e-bike (¥80 rental). The Sichuan side of the lake is less developed and more authentic. The \'Walking Marriage Bridge\' (走婚桥) on the Sichuan side is a wooden bridge through marshland — beautiful at sunset.` },
  { day: 'Day 4: Tiger Leaping Gorge', content: `Return to Lijiang by minibus (4-5 hrs, leave Lugu Lake at 7am). Transfer directly to Qiaotou for Tiger Leaping Gorge. If you arrive by 2pm, hike the first section of the high trail to Naxi Guesthouse (2 hours, the gentlest section) for sunset views. Stay overnight at a guesthouse on the trail.`, tip: `If you\'re short on time, skip the hike and visit the lower Tiger Leaping Gorge scenic area (¥45) — a 1,000-step staircase down to the river. The rapids here are ferocious, and there is a viewing platform at the bottom.` },
  { day: 'Day 5 (optional): Return to Lijiang', content: `Complete the hike or take the bus back to Lijiang. Afternoon: Shuhe Ancient Town or Baisha murals before your flight out.`, tip: `If flying out on Day 5, book an evening flight. The drive from Tiger Leaping Gorge back to Lijiang Airport takes 2.5 hours.` },
];

const PRACTICAL = [
  { title: 'Getting There', body: `Fly into Lijiang Sanyi Airport (LJG) from Chengdu, Chongqing, or Kunming. Lijiang has direct flights from most major Chinese cities. The route works as a self-contained short trip or as an add-on after Dali.` },
  { title: 'Lugu Lake Tips', body: `The lake is at 2,685m — altitude is mild but noticeable. Water temperature is cold year-round (swimming not recommended). Mosuo culture is matriarchal — property passes through the female line and \'marriage\' is a walking arrangement where partners live separately. Ask before photographing locals.` },
  { title: 'Best Season', body: `April-June and September-November. Lugu Lake is stunning in late October when the surrounding forests turn gold. Avoid July-August (rain) and December-February (cold, some guesthouses close).` },
];

const NEXT_STEPS = [
  { href: '/yunnan/kunming-dali-lijiang-shangri-la', label: 'Full Yunnan route', description: 'Add Kunming, Dali, and Shangri-La to this trip' },
  { href: '/esim', label: 'Get an eSIM for China', description: 'Land with internet that bypasses the firewall' },
  { href: '/visa', label: 'Check visa requirements', description: 'See if you qualify for visa-free entry' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Yunnan · 4-5 Days</Kicker>
          <h1>Lijiang, Lugu Lake & Tiger Leaping Gorge</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>A compact Yunnan route focused on Lijiang — the cobblestone old town, the emerald waters of Lugu Lake, and one of the world\'s deepest canyons.</p>
        </div>
      </section>

      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>4-5 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Lijiang → Lugu Lake → Tiger Leaping Gorge → Lijiang</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$400-600/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>This shorter Yunnan route skips Kunming and Dali, flying directly into Lijiang and focusing on three highlights within a 4-5 day window. Lugu Lake straddles the Yunnan-Sichuan border and is home to the Mosuo people, one of the world\'s last matriarchal societies. Tiger Leaping Gorge is one of the deepest river canyons on Earth. Lijiang ties it together as the base.</p>
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
