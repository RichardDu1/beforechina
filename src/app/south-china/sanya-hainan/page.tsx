import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Sanya & Hainan (5-7 Days) | China\'s Tropical Island Getaway | BeforeChina',
  description: 'Sanya\'s beaches, rainforest hot springs, and Hainan\'s laid-back tropical vibe — 5-7 days on China\'s \'Hawaii\' island.',
  alternates: { canonical: '/south-china/sanya-hainan' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Sanya worth visiting compared to beaches in Thailand or Vietnam?', acceptedAnswer: { '@type': 'Answer', text: 'For beach quality alone, Thailand and Vietnam have better beaches and are cheaper. Hainan\'s value is the combination: good beaches (not world-class, but good) plus Chinese infrastructure, safety, food, and no language barrier if you speak some Mandarin. It is also a visa-free entry point to China. If you are already in China and want a tropical break, Sanya is excellent. If you are choosing between Hainan and Thailand purely for a beach holiday, go to Thailand.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Sanya & Hainan: China\'s Tropical Island', item: 'https://beforechina.com/south-china/sanya-hainan' },
  ],
};

const STOPS = [
  { day: 'Day 1: Arrive Sanya', content: `Fly into Sanya Phoenix Airport (SYX). Transfer to your hotel. Sanya has several bay areas: Yalong Bay (亚龙湾, most upscale, best beach), Sanya Bay (三亚湾, city centre, longest beach), Haitang Bay (海棠湾, newest development, luxury resorts), and Dadonghai (大东海, most popular with Russian tourists). Check in and hit the beach. Sanya Bay has a 22km beachfront promenade perfect for cycling. Evening: seafood dinner at a beachfront restaurant — Hainan\'s specialities are Wenchang chicken (文昌鸡), Hele crab (和乐蟹), and fresh tropical fruit.`, tip: `Sanya\'s beaches ranked: Yalong Bay (best sand, clearest water, ¥50-100 for a sunbed), Sanya Bay (longest, free, most convenient), Dadonghai (busy, lots of Russians, free), Haitang Bay (newest, luxury resorts). The water is warm year-round (22-28°C). The best swimming is March-November.` },
  { day: 'Day 2: Sanya — Beach Day', content: `Full beach day. Yalong Bay has the classic white-sand crescent beach — 7.5 km of sand with clear water. The beach is lined with resorts but the sand is public (Chinese law requires all beaches to be publicly accessible). Rent a sunbed (¥50-100), swim, and eat fresh coconut (¥10). Afternoon: Nanshan Temple (南山寺, ¥129) — a massive Buddhist complex on the coast with a 108m statue of Guanyin (the Goddess of Mercy) rising from the sea on an artificial island. The statue is visible from the plane as you land. Evening: Sanya Duty-Free Shopping Complex (the world\'s largest duty-free mall) if you want luxury shopping.`, tip: `The 108m Guanyin statue at Nanshan Temple is taller than the Statue of Liberty (93m). It has three faces — one facing the sea, one facing the land, and one facing the sky. The temple complex is large (40 km²) and takes 3-4 hours. It is a working Buddhist temple, not just a tourist attraction — be respectful.` },
  { day: 'Day 3: Wuzhishan Rainforest', content: `Day trip to Wuzhishan (五指山, \'Five Finger Mountain\'), 2 hours from Sanya. Wuzhishan is Hainan\'s highest mountain (1,867m) and the heart of the island\'s tropical rainforest. Hike the rainforest trail (2-4 hours, moderate) through a landscape of giant ferns, banyan trees, butterflies, and waterfalls. The air is cool and fresh compared to the coast. The Li and Miao minority villages in the area have cultural performances (¥100-150). Alternatively, visit Yanoda Rainforest (呀诺达雨林, ¥168) — a more developed rainforest park with zip lines, waterfalls, and a glass bridge, closer to Sanya (45 min).`, tip: `Wuzhishan is a genuine tropical rainforest — the biodiversity is extraordinary (Hainan has species found nowhere else). The hike is moderate (stairs and boardwalks). Yanoda is more developed and touristy but also more accessible — it has English signage, zip lines, and restaurants. Choose Wuzhishan for nature, Yanoda for convenience.` },
  { day: 'Day 4: Sanya — Water Sports & Hot Springs', content: `Morning: water sports at Wuzhizhou Island (蜈支洲岛, ¥144 including ferry) — a small island 30 minutes off the coast with the clearest water in Sanya. Snorkelling (¥200-400), diving (¥600-1,000), jet skiing, and parasailing. The coral is not world-class (Hainan\'s reefs have suffered from bleaching) but the water is clear and the fish are plentiful. Afternoon: Nantian Hot Springs (南田温泉, ¥198) — volcanic hot springs with 30+ pools of varying temperatures, surrounded by tropical gardens. Evening: Sanya Romance Park (三亚千古情, ¥280) — a theatrical show about Sanya\'s history, directed by the same company that does the Hangzhou Impression shows.`, tip: `Wuzhizhou Island ferry: ¥144 (includes island entrance). The ferry takes 20 minutes and can be rough. Book water sports online (Trip.com) for better prices than on the island. Nantian Hot Springs has pools ranging from 28-45°C, including a \'fish therapy\' pool where small fish nibble dead skin (¥30 extra).` },
  { day: 'Day 5: Sanya → Haikou (Optional)', content: `Option A: stay in Sanya for more beach time. Option B: take the 1.5-hour high-speed train from Sanya to Haikou (¥100). Haikou is Hainan\'s capital and has a more local, less resort feel. Visit Qilou Old Street (骑楼老街) — a neighbourhood of colonial-era arcade buildings built by returning overseas Chinese in the 1920s. Visit the Hainan Museum (free) for the island\'s history. Lunch: Haikou\'s version of Wenchang chicken and Hainan rice noodles (海南粉). Afternoon: volcanic cluster geopark (海口火山群, ¥60) — a dormant volcano 15 km from Haikou with a crater you can walk into. Evening: train back to Sanya (1.5 hrs, ¥100) or stay in Haikou and fly out from Haikou Meilan Airport (HAK).`, tip: `Haikou is less touristy than Sanya and worth a day. The Qilou Old Street arcades are a unique architectural style — Chinese shopfronts with European columns and Southeast Asian shutters. The volcanic park has a 1,000m-wide crater that last erupted 8,000 years ago. You can walk down into the crater — the temperature drops 5°C at the bottom.` },
  { day: 'Day 6-7: Departure or Extension', content: `Fly out from Sanya (SYX) or Haikou (HAK). Both airports have flights to major Chinese cities and international connections to Southeast Asia. If extending: Hainan has a 51km coastal road from Sanya to Lingshui — rent a car (¥300-500/day) and drive it. The road passes through fishing villages, coconut groves, and viewpoints over the South China Sea. Or visit the Bo\'ao Forum site (博鳌, 1.5 hrs from Haikou) — the \'Davos of Asia\', a conference centre on a river estuary.`, tip: `Hainan is one of the easiest places to drive in China as a foreigner — the roads are good, traffic is light outside Sanya, and the coastal scenery is beautiful. You need a Chinese driving licence (not an IDP). The 51km Sanya-Lingshui coastal road is a new tourist highway with viewpoints every few kilometres.` },
];
const PRACTICAL = [
  { title: 'Getting There & Visa', body: `Fly into Sanya (SYX) or Haikou (HAK). Hainan has visa-free access for 59 countries (up to 30 days) if you fly directly to Hainan and stay on the island. If you also want to visit mainland China, you need a full Chinese visa. High-speed train Sanya-Haikou: 1.5 hrs (¥100).` },
  { title: 'Where to Stay', body: `Yalong Bay: luxury resorts (\$150-400/night). Sanya Bay: mid-range (\$50-150/night). Dadonghai: budget-mid (\$40-100/night). Haitang Bay: luxury (\$200-500/night). Haikou: city hotels (\$30-80/night). Book ahead for Chinese New Year — Sanya hotels sell out and prices triple.` },
  { title: 'When to Go', body: `November-April is the best season — warm (22-28°C), dry, and sunny. This is Hainan\'s high season (Chinese tourists escaping northern winter). May-October is hot (30-35°C), humid, and the rainy/typhoon season (especially August-October). Prices drop 30-50% in summer.` },
  { title: 'What to Eat', body: `Wenchang chicken (文昌鸡, poached chicken with ginger-scallion oil), Hele crab (和乐蟹, steamed with ginger), Dongshan lamb (东山羊肉, braised goat), and Jiaji duck (加积鸭). Plus tropical fruit: coconut (¥10), mango, papaya, dragon fruit, and Hainan\'s unique \'stinky fruit\' (榴莲, durian). The seafood is fresh and cheap at local restaurants (not resort restaurants).` },
];
const NEXT_STEPS = [
  { href: '/south-china/hong-kong-macau', label: 'Hong Kong & Macau', description: 'Fly from Sanya to Hong Kong in 1.5 hours' },
  { href: '/south-china/guangzhou-shenzhen', label: 'Guangzhou & Shenzhen', description: 'Fly from Sanya to Guangzhou in 1.5 hours' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Hainan · 5-7 Days</Kicker>
          <h1>Sanya & Hainan: China\'s Tropical Island</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>White-sand beaches, rainforest hot springs, fresh seafood on the sand, and a 51km coastal road — Hainan is China\'s Hawaii, with better food and lower prices.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>5-7 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Sanya → Wuzhishan Rainforest → Haikou (optional) → Sanya</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$700-1,200/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Hainan is China\'s southernmost province — a tropical island the size of Belgium in the South China Sea. It is China\'s most popular beach destination (domestic tourists flock here in winter to escape the cold) and has a genuinely tropical vibe: coconut palms, white-sand beaches, fresh seafood, and a laid-back pace. Sanya (三亚) is the main resort city with the best beaches. The island also has volcanic hot springs, Li and Miao minority villages, and the Wuzhishan tropical rainforest. Hainan has visa-free access for 59 countries (up to 30 days) — one of the easiest ways to visit China.</p>
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