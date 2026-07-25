import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Huangguoshu-Libo-Miao Villages (5-6 Days) | Guizhou Travel Guide | BeforeChina',
  description: 'Guizhou\'s greatest hits: Huangguoshu Waterfall, Libo\'s emerald karst rivers, and Xijiang Miao Village — 5-6 days through China\'s most underrated province.',
  alternates: { canonical: '/guizhou/huangguoshu-libo-miao' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Guizhou worth visiting compared to Yunnan or Guangxi?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — Guizhou has similar karst scenery to Guilin (at Libo) but with far fewer tourists, minority cultures as rich as Yunnan (Miao, Dong, Buyi) but less commercialised, and food that is uniquely sour-spicy rather than Sichuan numbing-spicy. The trade-off is less English signage and fewer Western-oriented services. If you have already done Yunnan and want something less discovered, Guizhou is the next frontier.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Huangguoshu Waterfall, Libo & Miao Villages', item: 'https://beforechina.com/guizhou/huangguoshu-libo-miao' },
  ],
};

const STOPS = [
  { day: 'Day 1: Guiyang → Huangguoshu', content: `Fly into Guiyang Longdongbao Airport (KWE). Take the 30-minute high-speed train from Guiyang North to Anshun West (¥47), then a 40-minute bus to Huangguoshu Waterfall. The waterfall is 77.8m high and 101m wide — Asia\'s largest. Walk the path behind the waterfall through the \'Water Curtain Cave\' (prepare to get wet — the spray is intense). The scenic area also includes Doupotang Waterfall (wider but shorter) and Tianxingqiao (a karst stone forest with bonsai trees and natural bridges). Spend 4-5 hours. Return to Anshun or Guiyang for the night.`, tip: `Huangguoshu entrance: ¥180 (summer) / ¥160 (winter). The Water Curtain Cave is the highlight — you walk behind a 77m curtain of water. A raincoat is essential (vendors sell them at the entrance for ¥5). Wear shoes with grip — the path is wet and slippery.` },
  { day: 'Day 2: Guiyang → Libo', content: `Take the high-speed train from Guiyang North to Libo (1.5 hrs, ¥120 — opened 2023, this line transformed Libo accessibility). Libo is a UNESCO World Heritage site of karst cone peaks, emerald rivers, and primeval forest. Check into your hotel, then visit the Small Seven Arches (Xiaoqikong) scenic area: a 1.5 km walking path along an emerald river past seven small stone bridges, waterfalls, and forest. The water colour is unreal — a milky turquoise from dissolved limestone.`, tip: `Libo\'s water really is that colour — no filters needed. The Small Seven Arches ticket is ¥130 (summer) / ¥100 (winter) and includes the shuttle bus. Go after 3pm when the morning tour groups have left — the light is better and the path is quieter.` },
  { day: 'Day 3: Libo Full Day', content: `Morning: Daqikong (Big Seven Arches) scenic area — less famous than Xiaoqikong but arguably more dramatic, with a massive natural stone arch and a canyon walk along a turquoise river. Afternoon: explore Libo\'s countryside — the karst cone peaks here look like Guilin but are surrounded by rice paddies and Buyi minority villages instead of tourist shops. Rent an e-bike and cycle the country roads.`, tip: `The Buyi people are Guizhou\'s largest minority. Their villages around Libo have stone houses with distinctive tiled roofs. Yaojia Village (瑶寨) is a Buyi village 5 km from Libo town — walkable, and you will be invited in for tea if you show genuine interest.` },
  { day: 'Day 4: Libo → Kaili', content: `Take the train from Libo to Guiyang (1.5 hrs), then transfer to a high-speed train to Kaili (40 min, ¥60). Kaili is the capital of the Qiandongnan Miao and Dong Autonomous Prefecture — the heart of Miao country. Afternoon: visit the Kaili Ethnic Minorities Museum (free, excellent context on Miao, Dong, and other Guizhou minorities) and the old street market. Evening: sour soup fish (酸汤鱼) — Guizhou\'s signature dish.`, tip: `Sour soup fish (酸汤鱼) is a Guizhou invention — river fish poached in a broth of fermented tomatoes, pickled chillies, and wild herbs. It is sour, spicy, and unlike anything in Sichuan or Yunnan. The best is at Kaili\'s Laoteng Sour Soup Fish (老腾酸汤鱼).` },
  { day: 'Day 5: Xijiang Miao Village', content: `Take a 1-hour bus from Kaili to Xijiang Qianhu Miao Village (西江千户苗寨) — the world\'s largest Miao village, with 1,400 households built into a hillside amphitheatre. The wooden stilt houses (diaojiaolou) stack up the mountain in layers, and at night the lights make the whole hillside look like a galaxy. Walk through the village, visit the Miao embroidery workshop, and watch the daily dance performance at the central square. Stay overnight in the village — the night view from the observation platform is the reason to come.`, tip: `Xijiang entrance: ¥100. The village is touristy (Chinese tourists, not Western) but still genuinely inhabited by Miao people. The best experience is walking the back lanes away from the main street, where grandmothers sit in doorways doing embroidery and children play in the alleys. The night view from the observation platform is best around 8pm when all the houses are lit.` },
  { day: 'Day 6: Kaili → Fly Out', content: `Return to Kaili (1 hr). If your flight is in the evening, visit Langde Miao Village — a smaller, less touristy alternative to Xijiang (40 min from Kaili). Langde has a traditional welcome ceremony with rice wine at the village gate. Alternatively, visit a Dong village — Zhaoxing (3 hrs from Kaili) is the most famous Dong village with a drum tower and wind-rain bridge. Fly out from Guiyang in the evening.`, tip: `Langde Miao Village charges ¥50 but the welcome ceremony (12-gun salute and rice wine) is included. The rice wine is strong — take a symbolic sip, don\'t drink the whole bowl unless you want to be carried back to the bus.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Fly into Guiyang Longdongbao Airport (KWE). High-speed trains connect Guiyang to Anshun (30 min), Libo (1.5 hrs), and Kaili (40 min). The new Guiyang-Libo line (opened 2023) transformed Libo from a 4-hour drive to a 1.5-hour train — it is now easily accessible.` },
  { title: 'Where to Stay', body: `Guiyang: near the city centre (\$30-70/night). Libo: Libo Old Town or near Xiaoqikong (\$25-60/night). Xijiang: inside the village for the night view (¥200-500/night, book ahead). Kaili: city centre (\$25-50/night).` },
  { title: 'When to Go', body: `April-May and September-October. Summer (June-August) is rainy but the waterfalls are at their most powerful. Winter (November-March) is cold and damp but hotel prices drop 40%. The Miao New Year (November, dates vary by lunar calendar) is the biggest Miao festival — book 2 months ahead.` },
  { title: 'What to Eat', body: `Guizhou cuisine is 酸辣 (sour-spicy). Must-try: sour soup fish (酸汤鱼), spicy chicken (辣子鸡 — the Guizhou version is different from Sichuan), changwang noodles (肠旺面, pork intestine and blood curd noodles), and silken tofu with century egg (皮蛋豆腐). The street snack \'恋爱豆腐果\' (love tofu fruit) is grilled tofu stuffed with chilli and herbs.` },
];
const NEXT_STEPS = [
  { href: '/guangxi/guilin-yangshuo-lijiang', label: 'Guilin & Yangshuo', description: 'Combine Guizhou with Guangxi\'s karst landscapes' },
  { href: '/yunnan/kunming-dali-lijiang-shangri-la', label: 'Yunnan route', description: 'The classic Yunnan backpacker trail next door' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Guizhou · 5-6 Days</Kicker>
          <h1>Huangguoshu Waterfall, Libo & Miao Villages</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Asia\'s largest waterfall, emerald karst rivers in Libo, and the world\'s largest Miao village — Guizhou is China\'s most underrated province.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>5-6 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Guiyang → Anshun (Huangguoshu) → Libo → Kaili (Xijiang) → Guiyang</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$500-750/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Guizhou is the province that even Chinese tourists sleep on. It sits between Yunnan, Sichuan, and Guangxi, and has the best of all three: karst landscapes like Guilin, minority cultures like Yunnan, and spicy-sour food that rivals Sichuan. The infrastructure has improved dramatically — high-speed trains now connect the major towns — but foreign tourists are still rare. This route covers Guizhou\'s three highlights: Huangguoshu Waterfall (Asia\'s largest at 77.8m high and 101m wide), Libo\'s UNESCO karst rivers (think Guilin but with emerald-green water and one-tenth the tourists), and the Miao minority villages around Kaili.</p>
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