import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Nanjing-Yangzhou (4-5 Days) | Imperial Capitals & Canal Cities | BeforeChina',
  description: 'Nanjing\'s Ming dynasty walls, Sun Yat-sen\'s mausoleum, Yangzhou\'s Grand Canal and morning tea culture — 4-5 days in China\'s southern imperial capital.',
  alternates: { canonical: '/yangtze-delta/nanjing-zhenjiang-yangzhou' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does Nanjing compare to Beijing as a historical capital?', acceptedAnswer: { '@type': 'Answer', text: 'Nanjing is smaller, greener, and less visited by foreign tourists than Beijing. Its Ming dynasty sites (city walls, Xiaoling Tomb) are from the same dynasty as Beijing\'s Forbidden City but feel more integrated into the modern city. The Nanjing Massacre Memorial is a heavy but important site — plan it for the afternoon as it is emotionally draining. Nanjing\'s food is also distinct: salt-water duck (盐水鸭), duck blood vermicelli soup (鸭血粉丝汤), and xiaolongbao that locals claim predate Shanghai\'s.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Nanjing & Yangzhou: Imperial Capital & Canal Cities', item: 'https://beforechina.com/yangtze-delta/nanjing-zhenjiang-yangzhou' },
  ],
};

const STOPS = [
  { day: 'Day 1: Shanghai → Nanjing', content: `Take the 1-hour high-speed train from Shanghai to Nanjing South (¥140). Afternoon: walk the Nanjing City Wall (¥30) — the best section is from Xuanwu Gate to Taicheng, with views over Xuanwu Lake and Purple Mountain. Visit Jiming Temple (鸡鸣寺, ¥15), a 1,500-year-old Buddhist temple on the city wall. Evening: Fuzimiao (夫子庙, Confucius Temple) area — the pedestrian streets along the Qinhuai River are touristy but atmospheric at night with lanterns reflecting in the canal.`, tip: `The Nanjing City Wall section at Taicheng (台城) is the best-preserved section and has the classic view of Xuanwu Lake with the modern Nanjing skyline behind it. Go at sunset. The wall is wide enough to walk comfortably — it is up to 12m thick at the base.` },
  { day: 'Day 2: Nanjing', content: `Morning: Sun Yat-sen Mausoleum (中山陵, free, book ahead) — a grand staircase of 392 steps leading up Purple Mountain to a blue-roofed memorial hall. The mausoleum is China\'s most important Republican-era monument. Walk to the nearby Ming Xiaoling Tomb (明孝陵, ¥70) — the burial site of the Hongwu Emperor, founder of the Ming dynasty, with a 1.8km \'Spirit Way\' lined with stone animals. Afternoon: Nanjing Massacre Memorial Hall (free, book ahead) — a somber, essential museum documenting the 1937 Japanese occupation. It is heavy but world-class.`, tip: `Sun Yat-sen Mausoleum requires a free reservation on WeChat (search 钟山风景区). Book 2-3 days ahead. The 392 steps are not as intimidating as they look — there are rest platforms. The Ming Xiaoling Spirit Way is most atmospheric in autumn when the maple trees turn red.` },
  { day: 'Day 3: Nanjing → Zhenjiang → Yangzhou', content: `Morning: train from Nanjing to Zhenjiang (20 min, ¥30). Zhenjiang (镇江) is a small city on the Yangtze with three scenic hills. Visit Jinshan Temple (金山寺, ¥65) — a Buddhist temple on a hilltop island where legend says a white snake spirit was trapped under the pagoda. After lunch (Zhenjiang is famous for vinegar — try the vinegar-braised pork ribs), take the 30-minute bus across the Yangtze to Yangzhou. Afternoon: Slender West Lake (瘦西湖, ¥150) — a long, narrow lake with willow-lined banks, arched stone bridges, and Ming-Qing pavilions. It is West Lake\'s smaller, more refined cousin.`, tip: `Slender West Lake is ¥150 — expensive by Chinese standards. The ticket is worth it for the Five Pavilion Bridge and the White Dagoba. Walk the full length (3 km, about 2 hours) from south to north. The lake is most beautiful in March-April when the peach blossoms and willows are in full display — \'烟花三月下扬州\' as the Tang poem says.` },
  { day: 'Day 4: Yangzhou → Shanghai', content: `Morning: Yangzhou morning tea (早茶) — this is the city\'s defining cultural experience. Go to Fuchun Tea House (富春茶社, est. 1885) or Yechun Tea House (冶春茶社) by 7:30am. Order san ding bao (三丁包, three-dice buns filled with chicken, pork, and bamboo shoots), crab roe soup dumplings (蟹黄汤包), and a pot of Biluochun green tea. The meal takes 1-2 hours — this is not fast food. Afternoon: visit Geyuan Garden (个园, ¥45), a Qing dynasty salt merchant\'s garden with bamboo groves and rockeries representing the four seasons. Then train back to Shanghai (2 hrs, ¥120).`, tip: `Yangzhou morning tea is a ritual, not a meal. It is leisurely — do not rush. The most famous dish is crab roe soup dumpling (蟹黄汤包) — you drink the soup through a straw before eating the wrapper. Fuchun Tea House fills up by 8am on weekends. Go on a weekday or arrive by 7am. The old Fuchun on Deshengqiao Road is the original.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Shanghai-Nanjing: high-speed train (1 hr, ¥140). Nanjing-Zhenjiang: train (20 min, ¥30). Zhenjiang-Yangzhou: bus across the Yangtze bridge (30 min, ¥20). Yangzhou-Shanghai: train (2 hrs, ¥120). The entire route is on the high-speed rail network.` },
  { title: 'Where to Stay', body: `Nanjing: Xinjiekou area (city centre, \$40-100/night) or near Fuzimiao for the river atmosphere. Yangzhou: near Slender West Lake or the old city (\$30-80/night).` },
  { title: 'When to Go', body: `March-April (spring blossoms, the classic \'going to Yangzhou in March\' season) and October-November (autumn colours on Purple Mountain). Avoid July-August — Nanjing is one of China\'s \'Four Furnaces\' and temperatures hit 38°C.` },
];
const NEXT_STEPS = [
  { href: '/yangtze-delta/shanghai-hangzhou-suzhou', label: 'Shanghai-Suzhou-Hangzhou', description: 'The classic Yangtze Delta golden triangle' },
  { href: '/ancient-capitals/xian-luoyang-kaifeng', label: 'Ancient Capitals route', description: 'Continue west to Xian, Luoyang, and Kaifeng' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Yangtze Delta · 4-5 Days</Kicker>
          <h1>Nanjing & Yangzhou: Imperial Capital & Canal Cities</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Nanjing\'s 600-year-old city walls, Sun Yat-sen\'s mountain-top mausoleum, and Yangzhou\'s Grand Canal morning tea culture — the Yangtze Delta\'s historic heart.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>4-5 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Shanghai → Nanjing → Zhenjiang → Yangzhou → Shanghai</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$500-750/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Nanjing (南京, \'Southern Capital\') was China\'s capital six times, most recently as the Republic of China\'s capital under Sun Yat-sen. It has Ming dynasty city walls (the longest surviving city walls in the world at 35 km), a mountain-top mausoleum, and a dark WWII history at the Nanjing Massacre Memorial. Yangzhou (扬州), 1 hour east, was one of China\'s wealthiest cities during the Tang dynasty thanks to its position on the Grand Canal. Today it is known for morning tea culture (早茶) — a leisurely dim sum ritual that rivals Guangzhou\'s.</p>
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