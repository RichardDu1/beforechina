import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Xian-Lanzhou-Dunhuang (7-8 Days) | Silk Road Highlights Guide | BeforeChina',
  description: 'The classic Chinese Silk Road route: Xian\'s Terracotta Warriors, Lanzhou\'s Yellow River, Zhangye\'s rainbow mountains, Jiayuguan\'s Great Wall fort, and Dunhuang\'s Mogao Caves.',
  alternates: { canonical: '/silk-road/xian-lanzhou-dunhuang' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best way to travel the Hexi Corridor?', acceptedAnswer: { '@type': 'Answer', text: 'High-speed trains now connect Xian-Lanzhou (3 hrs), Lanzhou-Zhangye (3 hrs), and Zhangye-Jiayuguan (1.5 hrs). Jiayuguan to Dunhuang is a 4.5-hour drive (no direct train yet — a high-speed line is under construction). You can also do the entire route by car (1,800 km, 7 days of driving at 3-4 hours/day) for more flexibility, especially between Jiayuguan and Dunhuang.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Xian, Lanzhou & Dunhuang: The Classic Silk Road', item: 'https://beforechina.com/silk-road/xian-lanzhou-dunhuang' },
  ],
};

const STOPS = [
  { day: 'Day 1: Xian', content: `Arrive Xian. Afternoon: Xian City Wall and Muslim Quarter — a gentle introduction before the long journey west.`, tip: `Xian is the eastern terminus of the Silk Road. The city was called Chang\'an and was the largest city in the world during the Tang dynasty (618-907 AD), with over 1 million people including large communities of Persian, Arab, and Central Asian merchants.` },
  { day: 'Day 2: Xian', content: `Full day: Terracotta Warriors and Huaqing Hot Springs. The warriors are the most tangible connection to the Qin dynasty (221-206 BC) — an army of 8,000 life-sized soldiers buried to guard China\'s first emperor.`, tip: `Book the 8:30am slot at the Terracotta Warriors. The site is 40 km east of Xian — the public bus (¥8) takes 1 hour from Xian Railway Station. Go to Pit 1 first, then Pit 2, then Pit 3. The bronze chariot exhibition hall is the final stop and is often less crowded in the afternoon.` },
  { day: 'Day 3: Xian → Lanzhou', content: `Take the 3-hour high-speed train from Xian North to Lanzhou West (¥175). Lanzhou is a long, narrow city squeezed between mountains along the Yellow River. Afternoon: Zhongshan Bridge (中山桥) — a steel bridge built by a German company in 1909, the first permanent bridge across the Yellow River. Walk the riverfront promenade. Visit the White Pagoda Mountain (白塔山) for a panoramic view of the city. Evening: Lanzhou beef noodles (兰州牛肉面) — the city\'s claim to culinary fame.`, tip: `Lanzhou beef noodles (兰州牛肉面) is one of China\'s most famous dishes. The best bowls are served for breakfast — locals queue at 6am. The noodles are hand-pulled to order in 7 different thicknesses. Must-try shops: Mazilu (马子禄, the most famous) or Wumule (吾穆勒, locals\' favourite). A bowl costs ¥8-15.` },
  { day: 'Day 4: Lanzhou → Zhangye', content: `Take the 3-hour high-speed train from Lanzhou West to Zhangye West (¥150). Zhangye\'s Danxia Landform (张掖丹霞, ¥75) is a range of rainbow-coloured sandstone mountains — layers of red, orange, yellow, and green mineral deposits that look like a painter\'s palette. The best light is late afternoon (4-6pm) when the colours are most vivid. The scenic area has shuttle buses between 4 viewing platforms. Stay overnight in Zhangye.`, tip: `Zhangye Danxia looks Photoshopped in photos but is genuinely that colourful in person — the colours come from iron oxide (red), limonite (yellow), and chlorite (green) mineral deposits laid down over 24 million years. The best viewing platform is #4 (the highest). Go on a sunny day — the colours are muted in cloud or rain.` },
  { day: 'Day 5: Zhangye → Jiayuguan', content: `Take the 1.5-hour high-speed train from Zhangye West to Jiayuguan South (¥80). Jiayuguan (嘉峪关) is the western end of the Ming dynasty Great Wall — a massive fortress built in 1372 at a strategic choke point between the Qilian Mountains and the Gobi Desert. The fortress is remarkably well-preserved: walls 11m high, gates inscribed with \'Jiayuguan\' in imperial calligraphy, and watchtowers with views across the desert. Afternoon: Overhanging Great Wall (悬壁长城, ¥20) — a section of wall climbing a 150m ridge north of the fortress. Evening: Jiayuguan barbecue (lamb skewers are the local speciality).`, tip: `Jiayuguan fortress is at its most atmospheric in late afternoon when the setting sun turns the walls golden and the desert stretches endlessly beyond. The ticket (¥120) includes the fortress, the Overhanging Wall, and the First Strategic Post (the westernmost point of the Ming Great Wall). The three sites are spread out — you will need a taxi or Didi to reach them all.` },
  { day: 'Day 6: Jiayuguan → Dunhuang', content: `Drive 4.5 hours from Jiayuguan to Dunhuang (¥150 by bus, ¥800 by private car). The road crosses the Gobi Desert — one of the most dramatic drives in China. Dunhuang was the Silk Road\'s western gateway: beyond here, the route split into the northern and southern routes around the Taklamakan Desert. Afternoon: Mingsha Sand Dunes (鸣沙山, ¥120) — massive singing sand dunes right on the edge of the city. Climb the dunes (30-40 minutes up, 5 minutes down running) for sunset over the desert. Crescent Moon Spring (月牙泉), a natural spring in the shape of a crescent moon, sits improbably between the dunes.`, tip: `Mingsha Sand Dunes are best at sunrise or sunset — the sand turns gold and the temperature is bearable. The climb is hard work (sand gives way with every step) but the view is worth it. Rent orange shoe covers (¥15) at the entrance — the sand will get everywhere otherwise. Camel rides are ¥100 for 40 minutes.` },
  { day: 'Day 7: Dunhuang', content: `Morning: Mogao Caves (莫高窟, ¥238, must book 2-4 weeks ahead) — 492 caves containing 2,000+ painted sculptures and 45,000 m² of murals spanning 1,000 years of Buddhist art (4th-14th centuries). Visits are by guided tour only; you will see 8 caves (the specific caves depend on the day). The highlight is Cave 45 — a Tang dynasty cave with perfectly preserved painted sculptures of the Buddha and bodhisattvas. Afternoon: Dunhuang Museum (free). Evening: Shazhou Night Market for camel kebabs and Dunhuang yellow noodles (黄面).`, tip: `Mogao Caves tickets (¥238, A-category) sell out 2-4 weeks in advance in summer. Book on the official WeChat mini-program (莫高窟参观预约网). The A ticket includes a 40-minute IMAX film, 8 caves with a guide, and transport from the Digital Centre. B-category tickets (¥100, 4 caves) are available 1-2 days ahead but sell out too. Plan ahead.` },
  { day: 'Day 8: Dunhuang → Fly Out', content: `Fly out from Dunhuang Mogao Airport (DNH). Direct flights to Xian (2.5 hrs), Lanzhou (1.5 hrs), and Beijing (4 hrs). If your flight is in the evening, visit the Western Thousand Buddha Caves (西千佛洞, ¥30) — a smaller, less-visited cave complex 35 km west of Dunhuang with 16 surviving caves.`, tip: `Dunhuang airport is small and 13 km east of the city. The airport bus (¥10) takes 20 minutes from the city centre. There is also a high-speed train station (Dunhuang) with trains to Lanzhou (8 hrs, overnight option).` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Xian-Lanzhou: train (3 hrs, ¥175). Lanzhou-Zhangye: train (3 hrs, ¥150). Zhangye-Jiayuguan: train (1.5 hrs, ¥80). Jiayuguan-Dunhuang: drive (4.5 hrs, bus ¥150 or private car ¥800). Fly out from Dunhuang (DNH).` },
  { title: 'Where to Stay', body: `Xian: inside the city wall (\$40-100/night). Lanzhou: near Zhongshan Bridge (\$30-70/night). Zhangye: near the train station or city centre (\$25-60/night). Jiayuguan: near the fortress (\$30-70/night). Dunhuang: Shazhou Night Market area (\$30-80/night).` },
  { title: 'When to Go', body: `May-June and September-October. Summer (July-August) is peak season — hot (35-40°C in the desert) and crowded. The Mogao Caves are climate-controlled. May and September offer the best balance of weather and crowds. Avoid the May Day (1-5 May) and National Day (1-7 Oct) holidays.` },
  { title: 'What to Pack', body: `Sunscreen, sunglasses, a wide-brim hat, and lip balm — the desert sun is intense year-round. A buff or scarf for sandstorms (common in spring). Layers — desert temperatures swing 20°C between day and night. Wet wipes — sand gets everywhere.` },
];
const NEXT_STEPS = [
  { href: '/xinjiang/silk-road', label: 'Xinjiang Silk Road', description: 'Continue the Silk Road west into Xinjiang' },
  { href: '/silk-road/hexi-corridor-deep', label: 'Hexi Corridor deep dive', description: 'A slower 10-day version with more stops' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Silk Road · 7-8 Days</Kicker>
          <h1>Xian, Lanzhou & Dunhuang: The Classic Silk Road</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>From the Terracotta Warriors to the rainbow mountains of Zhangye, Jiayuguan\'s desert fortress, and Dunhuang\'s Mogao Caves — the Silk Road\'s greatest hits.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>7-8 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Xian → Lanzhou → Zhangye → Jiayuguan → Dunhuang</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$800-1,200/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>The Silk Road was not one road but a network of trade routes connecting China to Central Asia, Persia, and the Mediterranean for over 1,500 years. This route follows the Hexi Corridor (河西走廊) — the 1,000km narrow passage between the Tibetan Plateau and the Gobi Desert that was the Silk Road\'s main artery. You will travel from Xian (the eastern terminus) to Dunhuang (the western gateway), passing through Zhangye\'s rainbow-coloured mountains, Jiayuguan\'s Ming dynasty fortress at the Great Wall\'s western end, and the Mogao Caves — one of the world\'s greatest repositories of Buddhist art.</p>
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