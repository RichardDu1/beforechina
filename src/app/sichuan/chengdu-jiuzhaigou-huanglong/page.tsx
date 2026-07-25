import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Chengdu-Jiuzhaigou-Huanglong (5-6 Days) | Sichuan Travel Guide | BeforeChina',
  description: 'Chengdu pandas, Jiuzhaigou\'s turquoise lakes, and Huanglong\'s travertine pools — the classic Sichuan nature route in 5-6 days.',
  alternates: { canonical: '/sichuan/chengdu-jiuzhaigou-huanglong' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I get to Jiuzhaigou from Chengdu?', acceptedAnswer: { '@type': 'Answer', text: 'Fly from Chengdu to Jiuzhaigou Huanglong Airport (JZH) — 1 hour, ¥500-900. Alternatively, take a 7-9 hour bus from Chengdu Chadianzi Station (¥150). Flying is strongly recommended. The airport is at 3,400m and you descend to Jiuzhaigou at 2,000-3,000m.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Chengdu, Jiuzhaigou & Huanglong: Pandas & Turquoise Lakes', item: 'https://beforechina.com/sichuan/chengdu-jiuzhaigou-huanglong' },
  ],
};

const STOPS = [
  { day: 'Day 1: Chengdu Pandas & Hot Pot', content: `Morning: Chengdu Research Base of Giant Panda Breeding — arrive at 7:30am (opening time) to see the pandas at their most active during breakfast feeding. The babies are in the nursery in August-September. Afternoon: People\'s Park for tea in a bamboo grove at the Heming Teahouse (built 1923). Evening: Sichuan hot pot — the numbing-spicy (麻辣) broth is a Chengdu rite of passage.`, tip: `Panda base opens at 7:30am. The pandas are fed at 8-9am and sleep most of the afternoon. Go early or you\'ll be photographing sleeping pandas. Entrance ¥55.` },
  { day: 'Day 2: Chengdu → Jiuzhaigou', content: `Morning flight from Chengdu Tianfu (TFU) to Jiuzhaigou Huanglong Airport (JZH, 1 hr). The approach through the Min Mountains is spectacular — snow peaks in every direction. Drive 2 hours from the airport to Jiuzhaigou Valley. Check into your hotel near the park entrance. Afternoon: walk the village area, acclimatise to the 2,000m altitude. If you have energy, visit the Zharu Monastery just outside the park.`, tip: `The airport is at 3,400m — you will feel the altitude immediately. Don\'t rush. The drive to Jiuzhaigou descends 1,400m through a stunning river gorge. The road is good but winding.` },
  { day: 'Day 3: Jiuzhaigou Full Day', content: `Enter the park at 8am. Jiuzhaigou is a Y-shaped valley with three main branches. Take the shuttle bus to the top of Rize Valley (Primeval Forest, 3,060m), then walk down past Swan Lake, Arrow Bamboo Lake, Panda Lake, Five Flower Lake (the most photogenic — turquoise, emerald, and sapphire in a single lake), Pearl Shoal Waterfall, and Mirror Lake. After lunch at Nuorilang, do Zechawa Valley: Long Lake (the largest at 3,100m) and Five-Color Pond (tiny but intensely blue). End at Shuzheng Valley for the Tibetan villages and Shuzheng Waterfall.`, tip: `Jiuzhaigou ticket: ¥169 + ¥90 shuttle bus. Book on WeChat (search 九寨沟) up to 7 days ahead. The park limits visitors to 41,000/day and sells out in autumn. The shuttle bus is hop-on-hop-off — use it to skip the long walks between valleys.` },
  { day: 'Day 4: Huanglong', content: `Drive 2.5 hours from Jiuzhaigou to Huanglong. Take the cable car up (¥80) and walk 2 km to the Five-Color Pool at 3,570m — the highest and most spectacular of the travertine terraces, with pools ranging from yellow to green to blue depending on mineral content and algae. Then walk down 4 km through the valley past hundreds of terraced pools. The whole descent takes 3-4 hours. Drive back to Chuanzhusi Town or Jiuzhaigou for the night.`, tip: `Huanglong is at 3,200-3,570m — higher than Jiuzhaigou. Altitude sickness is common here. Buy an oxygen canister (¥30) at the entrance if you\'re prone to altitude issues. The walk is downhill from the top — much easier than going up.` },
  { day: 'Day 5: Return to Chengdu', content: `Morning: visit Munigou Valley (a quieter alternative to Huanglong with similar travertine pools, fewer tourists) or relax. Afternoon flight from JZH back to Chengdu. Evening: Chengdu farewell dinner — try mapo tofu (the real version, not the Westernised one) and dan dan noodles at a local restaurant.`, tip: `If your flight from JZH is delayed (common in winter due to snow), have a backup plan. Jiuzhaigou Airport has a reputation for cancellations December-February. Fly in the morning to have the afternoon as a buffer.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Fly into Chengdu Tianfu International (TFU) — one of China\'s newest and largest airports with international connections. Chengdu → Jiuzhaigou: 1-hour flight from TFU to JZH. Jiuzhaigou → Huanglong: 2.5-hour drive.` },
  { title: 'Where to Stay', body: `Chengdu: near Chunxi Road or Jinli Ancient Street (\$40-100/night). Jiuzhaigou: near the park entrance at Zhangzha Town (\$30-80/night, book ahead in autumn). The Hilton Jiuzhaigou (¥800-1,200) is the best international option.` },
  { title: 'When to Go', body: `Late October is peak — autumn colours at Jiuzhaigou are world-famous and the park is at its most beautiful. May-June for green and waterfalls. Avoid Golden Week (Oct 1-7) — Jiuzhaigou hits capacity by 9am. Winter (Dec-Feb) is quiet but some trails close due to snow.` },
];
const NEXT_STEPS = [
  { href: '/visa', label: 'Check visa requirements', description: 'See if you qualify for visa-free entry' },
  { href: '/esim', label: 'Get an eSIM for China', description: 'Land with internet that bypasses the firewall' },
  { href: '/payment', label: 'Set up Alipay before you land', description: 'Link your foreign card and be ready to pay' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Sichuan · 5-6 Days</Kicker>
          <h1>Chengdu, Jiuzhaigou & Huanglong: Pandas & Turquoise Lakes</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Chengdu\'s giant pandas, Jiuzhaigou\'s 114 turquoise lakes, and Huanglong\'s golden travertine terraces — Sichuan\'s three icons in one trip.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>5-6 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Chengdu → Jiuzhaigou → Huanglong → Chengdu</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$600-900/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Sichuan is China\'s outdoor playground, and this route hits the province\'s three biggest draws. Chengdu is the panda capital of the world and the spiritual home of Sichuan cuisine. Jiuzhaigou (九寨沟) is a UNESCO-listed valley of 114 turquoise lakes, waterfalls, and snow-capped peaks — arguably China\'s most beautiful national park. Huanglong (黄龙) is a 3.6 km travertine terrace system of golden calcified pools, nicknamed the \'Yellow Dragon\' for the way the pools cascade down the valley.</p>
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