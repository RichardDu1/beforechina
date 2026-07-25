import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Hong Kong & Macau (4-5 Days) | Two Special Administrative Regions | BeforeChina',
  description: 'Hong Kong\'s skyline, dim sum, and hiking trails plus Macau\'s Portuguese-Chinese fusion — 4-5 days in two of China\'s most unique cities.',
  alternates: { canonical: '/south-china/hong-kong-macau' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do I need a visa for Hong Kong and Macau?', acceptedAnswer: { '@type': 'Answer', text: 'Hong Kong and Macau have separate immigration policies from mainland China. Most Western passports get visa-free entry: 90 days (Hong Kong), 30 days (Macau). If you are entering mainland China as well, check if you qualify for the 144-hour transit visa-free policy. Hong Kong and Macau count as \'third regions\' for the transit policy — you can enter China via Hong Kong and exit to another country within 144 hours.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Hong Kong & Macau: Two Cities, Two Worlds', item: 'https://beforechina.com/south-china/hong-kong-macau' },
  ],
};

const STOPS = [
  { day: 'Day 1: Hong Kong Island', content: `Start at Victoria Peak (太平山) — take the Peak Tram (¥45 one way, est. 1888) to the top for the classic Hong Kong skyline view. Walk the Peak Circle Walk (3.5 km, 1 hour) for 360° views. Descend to Central and walk the Mid-Levels Escalators — the world\'s longest outdoor covered escalator system (800m), past bars, galleries, and noodle shops. Lunch: dim sum at Tim Ho Wan (添好运, the world\'s cheapest Michelin-starred restaurant, ¥50/person). Afternoon: Man Mo Temple (文武庙, free), dedicated to the gods of literature and war, with giant incense coils hanging from the ceiling. Evening: Star Ferry across Victoria Harbour (¥3, 10 min, running since 1888) to Tsim Sha Tsui. Watch the Symphony of Lights (8pm) from the TST waterfront.`, tip: `The Peak Tram queue can be 1-2 hours in peak times. Take the bus (Bus 15 from Exchange Square, ¥10, 30 min) instead — it winds up the mountain through the forest and drops you at the same place. The Star Ferry is ¥3 on the upper deck, ¥2.50 on the lower deck. Pay with Octopus card or coins. Do the crossing at sunset.` },
  { day: 'Day 2: Kowloon & New Territories', content: `Morning: Kowloon — visit the Wong Tai Sin Temple (黄大仙祠, free), where locals shake fortune sticks to predict their future. Then the Chi Lin Nunnery (志莲净苑, free) — a Tang dynasty-style Buddhist temple complex with lotus ponds and immaculate gardens, flanked by a modern skyscraper (startling contrast). Lunch: wonton noodle soup at Mak\'s Noodle (麦奀云吞面, ¥40). Afternoon: hike the Dragon\'s Back (龙脊, 2-3 hours) — Hong Kong\'s most famous trail along a ridge with views of beaches, islands, and the South China Sea. Evening: Temple Street Night Market (庙街夜市) for fortune tellers, street opera, and claypot rice.`, tip: `Hong Kong has world-class hiking. The Dragon\'s Back is a 2-3 hour trail rated moderate, with ocean views the whole way. It ends at Big Wave Bay beach — bring a swimsuit. The trailhead is a 15-minute bus ride from Shau Kei Wan MTR station. Hong Kong is 40% country park — you can go from skyscraper to rainforest in 30 minutes.` },
  { day: 'Day 3: Hong Kong → Macau', content: `Morning: take the 1-hour TurboJET ferry from Hong Kong Macau Ferry Terminal (Sheung Wan) to Macau (¥160). Macau was a Portuguese colony from 1557-1999. Start at Senado Square (议事亭前地) — a wave-patterned cobblestone plaza surrounded by pastel-coloured colonial buildings. Walk to the Ruins of St. Paul\'s (大三巴牌坊, free) — the 17th-century facade of a Jesuit church that burned down in 1835, now Macau\'s symbol. Visit the Macau Museum (¥15) inside the Monte Fort for the city\'s history. Lunch: Portuguese egg tart (葡式蛋挞) at Lord Stow\'s Bakery (¥10 each) — the flaky, caramelised version that is Macau\'s most famous food. Afternoon: Taipa Village — a quieter area of pastel houses, narrow lanes, and the Taipa Houses-Museum (¥5). Evening: casino walk on the Cotai Strip (the Venetian, the Parisian — Macau\'s casinos are 3x Las Vegas\'s revenue).`, tip: `Macau\'s Portuguese egg tarts were invented by Andrew Stow, an Englishman who opened a bakery in Coloane in 1989. The original Lord Stow\'s is in Coloane Village (a 20-minute bus from the city centre). The tart is slightly burnt on top (caramelised) with a flaky pastry — different from the Cantonese egg tart\'s smooth top and shortcrust pastry. ¥10 each, eat 3-4 minimum.` },
  { day: 'Day 4: Macau → Hong Kong → Depart', content: `Morning: A-Ma Temple (妈阁庙, free) — Macau\'s oldest temple (1488), dedicated to the sea goddess Mazu (Macau\'s name comes from \'A-Ma Gau\' — \'Bay of A-Ma\'). Visit the Macau Tower (¥135) for the 360° view from 338m, or walk the Coloane Village — Macau\'s southernmost island with a fishing village atmosphere, pastel houses, and the original Lord Stow\'s Bakery. Afternoon: ferry back to Hong Kong (1 hr, ¥160). Fly out from Hong Kong International Airport (HKG).`, tip: `Macau\'s casinos run free shuttle buses (\'casino express\') between the ferry terminal, border gate, and airport. You don\'t need to gamble to use them. The Venetian-Taipa route is the most useful. The buses are free, comfortable, and more frequent than public buses.` },
];
const PRACTICAL = [
  { title: 'Getting There & Around', body: `Fly into Hong Kong (HKG). Hong Kong-Macau: TurboJET ferry (1 hr, ¥160) every 15-30 minutes. Hong Kong has the world\'s best public transport — the MTR (metro), buses, trams, and ferries. Get an Octopus card (¥50 deposit) at the airport — it works on all transport and in most shops.` },
  { title: 'Where to Stay', body: `Hong Kong: Kowloon side (Tsim Sha Tsui, Mongkok) is cheaper than Hong Kong Island (\$80-200/night). Macau: Macau Peninsula for culture, Cotai for casinos (\$80-250/night). Hong Kong hotel rooms are famously small — 15-20 m² is normal in the budget-mid range.` },
  { title: 'When to Go', body: `October-December — Hong Kong\'s autumn is the best season (22-28°C, low humidity, clear skies). Spring (March-April) is warm but foggy. Summer (June-September) is hot, humid, and typhoon season. Avoid Chinese New Year (prices triple) and the first week of October (Golden Week).` },
  { title: 'Practical Notes', body: `Currency: Hong Kong Dollar (HKD, pegged to USD) and Macau Pataca (MOP). HKD is accepted in Macau. English is widely spoken in Hong Kong, less so in Macau (older Portuguese speakers, younger Cantonese speakers). Both cities have the Great Firewall exemption — Google, WhatsApp, and Instagram work without a VPN.` },
];
const NEXT_STEPS = [
  { href: '/south-china/sanya-hainan', label: 'Sanya & Hainan', description: 'Add China\'s tropical island for beach time' },
  { href: '/golden-triangle/beijing-xian-shanghai', label: 'Golden Triangle', description: 'Continue to Beijing, Xian, and Shanghai' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>South China · 4-5 Days</Kicker>
          <h1>Hong Kong & Macau: Two Cities, Two Worlds</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Hong Kong\'s Victoria Harbour skyline and dim sum temples, plus Macau\'s Portuguese tiles, egg tarts, and casinos — two former European colonies, now China\'s most distinctive cities.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>4-5 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Hong Kong → Macau → Hong Kong</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$700-1,100/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Hong Kong and Macau are China but not quite China — they are Special Administrative Regions with their own currencies, legal systems, and border controls. Hong Kong needs no introduction: the most dramatic skyline in the world, the best dim sum on earth, and surprisingly good hiking. Macau is the former Portuguese enclave where pastel-coloured colonial buildings sit next to the world\'s largest casinos, and where the food is a 400-year-old fusion of Portuguese and Cantonese. They are 1 hour apart by ferry, making a combined trip natural.</p>
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