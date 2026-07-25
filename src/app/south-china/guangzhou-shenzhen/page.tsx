import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Guangzhou-Shenzhen (4-5 Days) | Pearl River Delta Tech & Cantonese Culture | BeforeChina',
  description: 'Guangzhou\'s Cantonese food scene, Chen Clan Academy, and Shenzhen\'s futuristic skyline — 4-5 days in the heart of the Greater Bay Area.',
  alternates: { canonical: '/south-china/guangzhou-shenzhen' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Shenzhen worth visiting as a tourist?', acceptedAnswer: { '@type': 'Answer', text: 'Shenzhen is not a traditional tourist city — it has no ancient temples or UNESCO sites. But it is fascinating as a vision of China\'s future: futuristic architecture, the world\'s largest electronics market (Huaqiangbei), and a thriving maker/culture scene. It is also the gateway to Hong Kong (15 min by high-speed train to Kowloon). Visit Shenzhen for a day or two as part of a Guangzhou-Hong Kong loop.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Guangzhou & Shenzhen: Cantonese Food & China\'s Silicon Valley', item: 'https://beforechina.com/south-china/guangzhou-shenzhen' },
  ],
};

const STOPS = [
  { day: 'Day 1: Guangzhou', content: `Fly into Guangzhou Baiyun Airport (CAN). Afternoon: Chen Clan Academy (陈家祠, ¥10) — an 1894 ancestral hall that is the finest surviving example of Lingnan architecture, with intricate ceramic friezes, wood carvings, and ivory sculptures on every surface. Walk Shamian Island (沙面) — a sandbank island that was the British-French concession, now a quiet neighbourhood of colonial buildings, banyan trees, and cafes. Evening: dinner at a traditional Cantonese restaurant — roast goose (烧鹅), white-cut chicken (白切鸡), and claypot rice (煲仔饭).`, tip: `The Chen Clan Academy (¥10) is one of Guangzhou\'s best sights and absurdly cheap. Every roof ridge, beam, and door panel is decorated with carvings and sculptures. It now houses the Guangdong Folk Art Museum. Go in the morning for the best light on the ceramic friezes.` },
  { day: 'Day 2: Guangzhou — Food & Culture', content: `Morning: dim sum at Panxi Restaurant (泮溪酒家, est. 1947) or Dian Dou De (点都德, a popular chain with consistent quality). Cantonese dim sum is the original and best — har gow (shrimp dumplings), siu mai (pork dumplings), char siu bao (BBQ pork buns), and egg tarts. Afternoon: visit the Mausoleum of the Nanyue King (南越王墓, ¥12) — a 2,000-year-old tomb of a regional king from the Nanyue kingdom (204-111 BC), with a jade burial suit sewn with silk thread. Then Guangdong Museum (free, book ahead). Evening: Pearl River night cruise (¥55-95) for the Canton Tower light show.`, tip: `Cantonese dim sum is traditionally a morning affair (6am-11am), served from trolleys pushed by elderly ladies (\'aunties\') who call out the dishes. The best dim sum restaurants still do trolley service. The proper way to order: flag down a trolley, point at what you want, and the auntie stamps your card. Tea is essential — oolong, pu-erh, or jasmine.` },
  { day: 'Day 3: Guangzhou → Shenzhen', content: `Take the 30-minute high-speed train from Guangzhou South to Shenzhen North (¥75). Shenzhen is a city built in a generation — 17 million people where there were 30,000 in 1980. Visit Huaqiangbei Electronics Market (华强北) — a multi-building district where you can buy every electronic component, gadget, and accessory in existence. It is the world\'s largest electronics market. If you want a custom phone, drone parts, or an obscure charging cable — this is where it exists. Afternoon: OCT-LOFT Creative Culture Park — a former factory complex turned into galleries, design studios, and cafes. Evening: dinner and drinks in the Shekou (蛇口) area — Shenzhen\'s expat neighbourhood with international restaurants and bars.`, tip: `Huaqiangbei is overwhelming — 10+ buildings, each with 5-7 floors of electronics stalls. The main building is SEG Electronics Market (赛格电子市场). The first 2 floors are consumer electronics (phones, drones, accessories), upper floors are components. Haggle — prices drop 20-30% if you negotiate. Even if you buy nothing, it is one of the most extraordinary market experiences in the world.` },
  { day: 'Day 4: Shenzhen', content: `Morning: climb Lianhua Mountain (莲花山, free) — a city park with a giant bronze statue of Deng Xiaoping (the leader who created Shenzhen as China\'s first Special Economic Zone) and a panoramic view of Shenzhen\'s skyline. Visit the Shenzhen Museum (free) for the story of how a fishing village became China\'s richest city. Afternoon: Dafen Oil Painting Village (大芬油画村) — a neighbourhood where thousands of painters produce replica oil paintings. You can commission a custom painting (¥100-500) or buy an off-the-shelf replica of Van Gogh, Monet, or classical Chinese art. Evening: option to continue to Hong Kong (15 min by high-speed train from Shenzhen North, ¥75).`, tip: `The Deng Xiaoping statue on Lianhua Mountain faces Hong Kong — symbolic. The Shenzhen Museum\'s \'Reform and Opening Up\' exhibition is fascinating propaganda: it tells the Shenzhen story as a triumph of Communist Party policy. Dafen Village produces 60% of the world\'s replica oil paintings. Artists paint assembly-line style — one does skies, another trees, another faces.` },
  { day: 'Day 5: Departure or Hong Kong', content: `Option A: Fly out from Shenzhen Bao\'an Airport (SZX) or Guangzhou (CAN). Option B: take the 15-minute high-speed train from Shenzhen North to Hong Kong West Kowloon (¥75) and continue to Hong Kong (see the Hong Kong & Macau route).`, tip: `Shenzhen airport (SZX) has good connections to major Chinese cities and international flights to Southeast Asia. The airport express (Line 11) from the city centre takes 30 minutes (¥8). If flying from Guangzhou (CAN), the train from Shenzhen to Guangzhou is 30 minutes (¥75).` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Fly into Guangzhou (CAN) or Shenzhen (SZX). Train Guangzhou-Shenzhen: 30 min (¥75). Shenzhen-Hong Kong: 15 min (¥75). The entire Pearl River Delta is connected by high-speed rail within 30 minutes.` },
  { title: 'Where to Stay', body: `Guangzhou: Yuexiu District (old city, near Chen Clan Academy, \$40-100/night) or Tianhe District (new business district, \$60-150/night). Shenzhen: Futian (central, \$50-120/night) or Shekou (expat area, \$60-150/night).` },
  { title: 'When to Go', body: `October-December — autumn in the Pearl River Delta is pleasant (20-28°C, low humidity). Spring (March-April) is warm but foggy. Summer (June-September) is brutal — 33-38°C with 90% humidity. The Canton Fair (April and October) drives hotel prices up 50-100% in Guangzhou.` },
];
const NEXT_STEPS = [
  { href: '/south-china/hong-kong-macau', label: 'Hong Kong & Macau', description: 'Continue to the SARs 15 minutes from Shenzhen' },
  { href: '/guangxi/guilin-yangshuo-lijiang', label: 'Guilin & Yangshuo', description: '2.5 hours by train from Guangzhou to the karst peaks' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>South China · 4-5 Days</Kicker>
          <h1>Guangzhou & Shenzhen: Cantonese Food & China\'s Silicon Valley</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Guangzhou\'s 2,200-year-old temples and the birthplace of Cantonese cuisine, paired with Shenzhen — the fishing village that became China\'s richest city in 40 years.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>4-5 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Guangzhou → Shenzhen → Hong Kong (optional)</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$500-750/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Guangzhou (Cantonese name: \'Canton\') is the capital of Cantonese culture and cuisine — a 2,200-year-old trading port where dim sum was invented and where the food is so central to local identity that Cantonese people say \'we eat everything with four legs except the table.\' Shenzhen, 30 minutes away by train, is Guangzhou\'s opposite: a fishing village of 30,000 people in 1980, now a metropolis of 17 million and the headquarters of Tencent, Huawei, and DJI. Together they represent southern China\'s past and future.</p>
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