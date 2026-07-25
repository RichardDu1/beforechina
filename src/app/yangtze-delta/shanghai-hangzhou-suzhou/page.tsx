import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Shanghai-Hangzhou-Suzhou (6-7 Days) | The Golden Watertown Triangle | BeforeChina',
  description: 'The classic Yangtze Delta route: Shanghai\'s skyline, Hangzhou\'s West Lake, Suzhou\'s classical gardens, and a water town day trip — 6-7 days through China\'s most prosperous region.',
  alternates: { canonical: '/yangtze-delta/shanghai-hangzhou-suzhou' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I get between Shanghai, Hangzhou, and Suzhou?', acceptedAnswer: { '@type': 'Answer', text: 'High-speed trains connect all three cities: Shanghai-Hangzhou (1 hr, ¥75), Shanghai-Suzhou (30 min, ¥40), Hangzhou-Suzhou (1.5 hrs, ¥110). No need to rent a car — the trains are frequent (every 20-30 minutes), clean, and the stations have English signage. Book tickets on Trip.com or at the station with your passport.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Shanghai, Hangzhou & Suzhou: The Golden Watertown Triangle', item: 'https://beforechina.com/yangtze-delta/shanghai-hangzhou-suzhou' },
  ],
};

const STOPS = [
  { day: 'Day 1: Shanghai', content: `Start on the Bund (外滩) — the 1.5km riverside promenade with colonial buildings on one side and Pudong\'s futuristic skyline on the other. Walk south toward the Old City and enter Yuyuan Garden (豫园, ¥40) — a 16th-century private garden of rockeries, pavilions, and carp ponds. Lunch: xiaolongbao (soup dumplings) at the Yuyuan branch of Nanxiang Steamed Bun Restaurant (est. 1900). Afternoon: Nanjing Road pedestrian street for the spectacle of Chinese consumerism, then the Shanghai Museum (free, book ahead). Evening: rooftop bar on the Bund for the skyline light show.`, tip: `The Bund is best at two times: early morning (6-7am, when locals do tai chi and the light is soft) and evening (6-7pm, when Pudong\'s lights come on). The evening light show starts at 7pm in summer, 6pm in winter. The Bund promenade gets packed at sunset — arrive 30 minutes early to claim a railing spot.` },
  { day: 'Day 2: Shanghai', content: `Morning: the French Concession — tree-lined streets of 1920s lane houses (lilong), now filled with boutiques, cafes, and galleries. Rent a bike and cycle through Wukang Road, Anfu Road, and Wulumuqi Road. Visit the Propaganda Poster Art Centre (¥20, a private museum of Mao-era posters in a basement — one of Shanghai\'s most unique museums). Afternoon: Tianzifang (田子坊), a maze of lane-house alleys turned into artist studios and craft shops. Evening: acrobatics show at Shanghai Circus World (¥200-400).`, tip: `The French Concession is best explored by bike — Shanghai has an excellent bike-share system (HelloBike, Meituan Bike). You will need Alipay to unlock bikes. The Propaganda Poster Art Centre is in the basement of an apartment building on Huashan Road — look for the small sign at the entrance. It closes at 4:30pm.` },
  { day: 'Day 3: Shanghai → Hangzhou', content: `Take the 1-hour high-speed train from Shanghai Hongqiao to Hangzhou East (¥75). Check in, then head to West Lake (西湖). Walk the Su Causeway (苏堤) — a 2.8km tree-lined dyke crossing the lake, built in 1090 by Su Dongpo, the poet-governor of Hangzhou. Visit the Lingyin Temple (灵隐寺, ¥75) — one of China\'s largest Buddhist temples, with grottoes of carved Buddha figures dating to the 10th century. Evening: Impression West Lake show (¥280-580), a nighttime spectacle of light, music, and dance on the lake, directed by Zhang Yimou.`, tip: `West Lake is free. The Su Causeway is best walked from north to south starting around 4pm — the afternoon light on the lake is beautiful and you will finish near the Leifeng Pagoda for sunset. Rent a public bike (red bikes, ¥1/hr) to circle the entire lake (12 km) in about 90 minutes.` },
  { day: 'Day 4: Hangzhou', content: `Morning: Longjing tea village (龙井村) — the terraced tea fields where China\'s most famous green tea is grown. Walk the path from Longjing village to the China Tea Museum (free) through the plantations. Taste fresh Longjing tea at a farmer\'s house (¥30-50/person). Afternoon: Xixi Wetland Park (¥80) — a network of ponds, streams, and islets on Hangzhou\'s western edge. Take a traditional pole-boat ride through the wetlands. Evening: Hefang Street for Hangzhou snacks — dongpo rou (东坡肉, braised pork belly) and pianerchuan noodles (片儿川).`, tip: `Longjing tea has different grades. The best (Mingqian Longjing) is picked before the Qingming Festival (early April) and costs ¥500-1,000/50g. What farmers serve you at tastings is usually the lower-grade summer harvest. Buy tea at the village cooperative, not from touts at the bus stop.` },
  { day: 'Day 5: Hangzhou → Suzhou', content: `Take the 1.5-hour high-speed train from Hangzhou East to Suzhou (¥110). Suzhou\'s classical gardens are UNESCO World Heritage — nine of them. You cannot see all nine. Visit two: the Humble Administrator\'s Garden (拙政园, ¥80, the largest and most famous) and the Lingering Garden (留园, ¥55, smaller and more intimate). Between gardens, walk Pingjiang Road (平江路) — a 1,600-year-old canal street lined with whitewashed Ming-Qing houses, tea houses, and silk shops.`, tip: `Suzhou gardens are at their best in rain — the dripping water, mist, and reflections are what the garden designers intended. Don\'t let rain stop you. The Humble Administrator\'s Garden opens at 7:30am — go at opening to experience it before the tour groups arrive at 9am. It transforms from a peaceful garden to a crowded theme park within 90 minutes.` },
  { day: 'Day 6: Suzhou → Water Town → Shanghai', content: `Morning: choose one water town. Tongli (同里, ¥100) is 30 minutes from Suzhou by metro — canals, stone bridges, and the Tuisi Garden (a UNESCO garden within the town). Zhouzhuang (周庄, ¥100) is more famous and more touristy — but its double bridge and Shen Family House are genuinely beautiful. Both are half-day visits. Return to Suzhou, pick up bags, take the 30-minute train to Shanghai for your flight out the next day.`, tip: `All Yangtze Delta water towns are variations on the same theme: canals + Ming-Qing houses + stone bridges. Pick the one that is logistically easiest. Tongli is the closest to Suzhou (30 min by metro line 4). Avoid the water towns on weekends and Chinese holidays — the narrow lanes become impassable.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Fly into Shanghai Pudong (PVG) or Hongqiao (SHA). Hongqiao is closer to the city centre (30 min by metro). High-speed trains connect all three cities every 20-30 minutes. Use Trip.com or 12306.cn to book — or buy at the station 30 minutes before departure.` },
  { title: 'Where to Stay', body: `Shanghai: the Bund or French Concession (\$80-200/night). Hangzhou: near West Lake or the Longjing tea area (\$50-120/night). Suzhou: Pingjiang Road area or near the gardens (\$40-100/night). All three cities have excellent hostels if you are on a budget (\$15-30/night).` },
  { title: 'When to Go', body: `March-May and September-November. Spring (March-May) is ideal — mild temperatures and green landscapes. Autumn (September-November) has the best light and fewer rainy days. Avoid July-August (oppressive humidity, 35-40°C) and Chinese New Year (everything closes, transport is chaos).` },
  { title: 'What to Eat', body: `Shanghai: xiaolongbao (soup dumplings), shengjianbao (pan-fried pork buns), hairy crab (autumn only). Hangzhou: dongpo rou (braised pork belly), West Lake vinegar fish, Longjing shrimp (shrimp stir-fried with tea leaves). Suzhou: squirrel-shaped mandarin fish (松鼠桂鱼), eel paste noodles, and Suzhou-style mooncakes (savoury pork-filled, not sweet).` },
];
const NEXT_STEPS = [
  { href: '/golden-triangle/beijing-xian-shanghai', label: 'Add Beijing & Xian', description: 'Extend this into the full Golden Triangle' },
  { href: '/ancient-capitals/xian-luoyang-kaifeng', label: 'Ancient Capitals route', description: 'Explore more of China\'s imperial history' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Yangtze Delta · 6-7 Days</Kicker>
          <h1>Shanghai, Hangzhou & Suzhou: The Golden Watertown Triangle</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Shanghai\'s future-facing skyline, Hangzhou\'s timeless West Lake, Suzhou\'s classical gardens, and a water town frozen in the Ming dynasty — the Yangtze Delta in a week.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>6-7 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Shanghai → Hangzhou → Suzhou → Tongli Water Town → Shanghai</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$700-1,000/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>The Yangtze Delta is China\'s wealthiest and most developed region — but also one of its most beautiful. Within a 1-hour high-speed train radius you have Shanghai (the future), Hangzhou (the romance — Marco Polo called it \'the city of heaven\'), and Suzhou (2,500 years of classical gardens and silk). This route connects all three with a water town day trip. It is the ideal first-timer\'s China trip: easy logistics, excellent infrastructure, and English signage everywhere.</p>
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