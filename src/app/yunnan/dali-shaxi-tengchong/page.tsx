import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Dali-Shaxi-Tengchong (4-5 Days) | Off-the-Beaten-Path Yunnan | BeforeChina',
  description: 'Dali\'s lakeside old town, Shaxi\'s ancient tea-horse road market, and Tengchong\'s hot springs and volcanoes — a slower, deeper Yunnan route.',
  alternates: { canonical: '/yunnan/dali-shaxi-tengchong' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get from Dali to Tengchong?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drive Dali → Shaxi (2.5 hrs), Shaxi → Tengchong (5 hrs via the Baoshan-Tengchong Expressway). There is no direct train — private car or long-distance bus are the options. A private car for the full route costs ¥1,500-2,000 including Shaxi and Tengchong stops.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Dali, Shaxi & Tengchong: Yunnan\'s Slow Road', item: 'https://beforechina.com/yunnan/dali-shaxi-tengchong' },
  ],
};

const STOPS = [
  { day: 'Day 1: Dali → Shaxi', content: `Start in Dali (fly into Dali Airport or take the train from Kunming). Drive 2.5 hours north to Shaxi (沙溪) — a 2,400-year-old market town on the Tea Horse Road. Shaxi\'s Sideng Square is ringed by wooden shopfronts and a 600-year-old theatre stage. Walk the cobblestone lanes, visit the Xingjiao Temple (built 1415), and have dinner at a courtyard guesthouse. Shaxi has maybe 20 guesthouses total — it\'s what Lijiang was before the tour buses arrived.`, tip: `Shaxi is best visited on a Friday — the weekly market fills Sideng Square with Bai and Yi villagers selling produce, handicrafts, and the best street snacks in western Yunnan.` },
  { day: 'Day 2: Shaxi → Tengchong', content: `Morning in Shaxi — hike to the Shibaoshan Grottoes (16 Buddhist cave temples from the Nanzhao Kingdom, 1,200 years old, 30 min drive). Then drive 5 hours to Tengchong. Arrive by evening, check into a hot spring hotel, and soak. Tengchong has 99 volcanoes and 88 hot springs — the town is geothermally active and the hot spring water is genuinely therapeutic.`, tip: `Tengchong\'s Rehai (Hot Sea) Scenic Area has the best public hot springs — ¥288 for the full complex including the \'Big Boiling Pot\' (大滚锅) where water emerges at 97°C. Bring your own swimsuit; rentals are overpriced.` },
  { day: 'Day 3: Tengchong Volcano Park', content: `Morning: Tengchong Volcano National Park — hike up Daying Mountain (the largest dormant volcano, 30-minute climb) for the crater view. The park has 97 volcanic cones, and you can take a hot air balloon ride (¥280, 15 min) over the craters. Afternoon: Heshun Old Town (和顺古镇) — a 600-year-old village of grey-brick courtyard houses built by Tengchong jade merchants who traded across Southeast Asia. The library here is the oldest rural library in China (built 1924).`, tip: `Heshun Old Town\'s entrance fee is ¥55 — but if you stay at a guesthouse inside the old town, the owner can often get you in for free. The morning market in Heshun\'s main square is excellent for breakfast.` },
  { day: 'Day 4: WWII History & Fly Out', content: `Morning: National Cemetery of the Fallen (国殇墓园) — Tengchong was the site of a brutal 1944 battle where Chinese forces retook the city from the Japanese. The cemetery holds 3,346 soldiers and is deeply moving. If time permits, visit the Huitong Bridge — a key Burma Road crossing. Afternoon: fly out from Tengchong Tuofeng Airport (TCZ) to Kunming or Chengdu.`, tip: `Tengchong Airport has flights to Kunming (1 hr), Chengdu (1.5 hrs), and Chongqing. Book 2-3 days ahead — fewer flights than major cities.` },
];

const PRACTICAL = [
  { title: 'Getting Around', body: `This route requires a private car or a combination of buses. Dali → Shaxi: 2.5 hrs by car, or bus from Dali North Station to Jianchuan (1.5 hrs) then local minibus to Shaxi (40 min). Shaxi → Tengchong: 5 hrs by car. The roads are good — this is entirely doable.` },
  { title: 'Where to Stay', body: `Shaxi: Horse Pen 46 or Shaxi Laomadian Lodge (¥200-400/night). Tengchong: Heshun Old Town guesthouses (¥200-500/night) or the Angsana Hot Spring Resort for a splurge (¥800-1,200/night).` },
  { title: 'Best Season', body: `March-May and October-November. Tengchong\'s ginkgo village (银杏村) turns brilliant yellow in late November — worth planning around. Avoid June-September (rainy season, hot springs are less appealing in heat).` },
];

const NEXT_STEPS = [
  { href: '/yunnan/kunming-dali-lijiang-shangri-la', label: 'Classic Yunnan route', description: 'The main backpacker trail through Yunnan' },
  { href: '/esim', label: 'Get an eSIM for China', description: 'Land with internet that bypasses the firewall' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Yunnan · 4-5 Days</Kicker>
          <h1>Dali, Shaxi & Tengchong: Yunnan\'s Slow Road</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Skip the crowds. Dali\'s Erhai Lake, Shaxi\'s ancient tea-horse caravanserai, and Tengchong\'s volcanic hot springs — a Yunnan route for travellers who want depth over checklist.</p>
        </div>
      </section>

      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>4-5 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Dali → Shaxi → Tengchong</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$400-600/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>This route goes west from Dali into Yunnan\'s less-visited corners. Shaxi is a preserved market town on the ancient Tea Horse Road — what Lijiang was 30 years ago. Tengchong is a volcanic border town near Myanmar, famous for hot springs, a well-preserved old town, and the tragic WWII battlefield at the Huitong Bridge. This route has fewer tourists and a slower pace.</p>
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
