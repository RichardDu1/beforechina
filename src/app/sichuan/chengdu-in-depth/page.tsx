import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Chengdu In Depth (3-4 Days) | Sichuan Food & Culture Guide | BeforeChina',
  description: 'A deep dive into Chengdu: pandas, Sichuan cuisine, tea houses, Jinli Street, and the Leshan Giant Buddha day trip — China\'s most laid-back city.',
  alternates: { canonical: '/sichuan/chengdu-in-depth' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is 3 days enough for Chengdu?', acceptedAnswer: { '@type': 'Answer', text: '3 days covers the essentials: pandas, Sichuan food, a tea house, and one day trip (Leshan or Dujiangyan). 4 days lets you add a cooking class and explore the Jinli/Wuhouci area more deeply. Chengdu rewards slow travel — you can easily spend a week just eating.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Chengdu In Depth: Pandas, Hot Pot & Tea Houses', item: 'https://beforechina.com/sichuan/chengdu-in-depth' },
  ],
};

const STOPS = [
  { day: 'Day 1: Pandas & Parks', content: `Panda Base (7:30am-11am), then People\'s Park — drink jasmine tea at Heming Teahouse, watch the matchmaking corner (parents post their children\'s resumes on umbrellas looking for marriage partners), and get your ears cleaned by a professional ear-picker (¥30, a Chengdu tradition). Evening: Sichuan hot pot at Shujiuxiang or Dalongyi.`, tip: `The matchmaking corner at People\'s Park is surreal — hundreds of parents with printed sheets listing their child\'s age, height, salary, and housing status. It\'s a uniquely Chengdu experience. Weekends are busiest.` },
  { day: 'Day 2: Leshan Giant Buddha Day Trip', content: `Take the 50-minute high-speed train to Leshan (¥54). Visit the 71m Buddha — walk the cliffside stairs or take the river ferry. Lunch: Leshan\'s famous qiaojiao beef (跷脚牛肉) — a medicinal beef soup. Return to Chengdu by late afternoon. Evening: Jinli Ancient Street for lantern-lit shopping and street snacks.`, tip: `Leshan\'s qiaojiao beef is legendary. The best is at Feng Siniang (冯四孃跷脚牛肉) near the Buddha scenic area. Order the mixed beef soup (¥38) and the blood curd (¥15).` },
  { day: 'Day 3: Culture & Cooking', content: `Morning: Wuhou Temple (Three Kingdoms history, ¥60) and Jinli Street (adjacent). Afternoon: Sichuan cooking class — learn dan dan noodles, kung pao chicken, and mapo tofu. Evening: Kuanzhai Alley (宽窄巷子) — Qing dynasty courtyard houses converted into bars, tea houses, and restaurants. Then Sichuan opera at Shufeng Yayun.`, tip: `Cooking classes in Chengdu run ¥200-350 for a half-day. The best include a market tour to buy ingredients first. The Cooking Club Chengdu and Chilli Cool China both have excellent English-speaking instructors.` },
  { day: 'Day 4 (optional): Dujiangyan & Qingcheng', content: `Day trip to Dujiangyan — a 2,300-year-old irrigation system that still works today, diverting the Min River without a single dam. It\'s a UNESCO site and an engineering marvel. Afternoon: Qingcheng Mountain, one of Daoism\'s birthplaces. The front mountain has temples and pavilions; the back mountain is wilder with waterfalls and fewer tourists.`, tip: `Dujiangyan is 1 hour from Chengdu by high-speed train from Xipu Station (¥10!). The panda base at Dujiangyan (Panda Valley) is less crowded than the Chengdu one and you can volunteer as a panda keeper (¥700, book 1 month ahead).` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Chengdu Tianfu International (TFU) has direct flights from London, Amsterdam, Seoul, Tokyo, and major Asian hubs. Shuangliu (CTU) handles domestic flights. Metro Line 18 connects Tianfu to downtown (50 min, ¥10).` },
  { title: 'Where to Stay', body: `Chunxi Road area for shopping and convenience (\$50-120/night). Jinli/Wuhouci area for atmosphere (\$40-100/night). For a splurge: The Temple House (¥1,500-2,500/night) — a boutique hotel built into a restored Qing dynasty courtyard.` },
  { title: 'What to Eat', body: `Sichuan food is NOT just spicy — it\'s 麻辣 (numbing-spicy) from Sichuan peppercorns. Must-try: mapo tofu (麻婆豆腐), kung pao chicken (宫保鸡丁), dan dan noodles (担担面), twice-cooked pork (回锅肉), and shuizhu yu (水煮鱼 — fish in a cauldron of chillies). For hot pot, the old-school places (蜀九香, 大龙燚) are better than Haidilao.` },
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
          <Kicker>Sichuan · 3-4 Days</Kicker>
          <h1>Chengdu In Depth: Pandas, Hot Pot & Tea Houses</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>China\'s most laid-back city — spend your mornings with pandas, afternoons in 100-year-old tea houses, and evenings sweating through Sichuan hot pot.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>3-4 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Chengdu city + Leshan day trip option</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$300-500/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Chengdu is the city Chinese people dream of retiring to. The pace is slower, the food is bolder, and the tea house culture — old men playing mahjong in bamboo groves — is still alive. This guide goes deep on the city itself, with optional day trips to Leshan and the Dujiangyan irrigation system.</p>
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