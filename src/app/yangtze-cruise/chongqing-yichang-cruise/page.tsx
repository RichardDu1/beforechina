import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Yangtze River Cruise (4-5 Days) | Chongqing to Yichang Three Gorges | BeforeChina',
  description: 'A 4-5 day Yangtze cruise from Chongqing to Yichang through the Three Gorges — the world\'s largest dam, limestone gorges, and Shennong Stream.',
  alternates: { canonical: '/yangtze-cruise/chongqing-yichang-cruise' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is the Yangtze cruise worth it after the Three Gorges Dam raised the water level?', acceptedAnswer: { '@type': 'Answer', text: 'The water level rose 100m after the dam was completed in 2003, which changed the gorges — they are narrower at the top than at the bottom now, and some archaeological sites were submerged. But the gorges are still dramatic (the cliffs are 1,000m+ high, so 100m of water rise is only 10% of the height), and the cruise is still a wonderful experience. The dam itself is an engineering marvel worth seeing. Go with realistic expectations: this is a comfortable river cruise through dramatic scenery, not an untouched wilderness experience.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Yangtze River Cruise: Chongqing to Yichang Through the Three Gorges', item: 'https://beforechina.com/yangtze-cruise/chongqing-yichang-cruise' },
  ],
};

const STOPS = [
  { day: 'Day 1: Chongqing → Board Ship', content: `Arrive Chongqing (重庆). Board your cruise ship at Chaotianmen Dock in the late afternoon/evening. Ships typically depart at 9-10pm. After boarding: safety briefing, welcome dinner, and watching Chongqing\'s skyline lights as you sail away. Chongqing\'s hilly skyline is spectacular at night — the city is built on a peninsula where the Yangtze and Jialing rivers meet.`, tip: `Chongqing deserves 1-2 days before the cruise. Visit the Ciqikou old town, eat Chongqing hotpot (the numbing-spicy version that is the city\'s signature), and take the Yangtze River cable car across the river. The best hotpot: find a busy local place in Jiefangbei or Nanbin Road — the more plastic stools on the pavement, the better the hotpot.` },
  { day: 'Day 2: Fengdu Ghost City / Shibaozhai', content: `Morning shore excursion to Fengdu Ghost City (丰都鬼城, included in cruise fare) — a Ming dynasty temple complex on Ming Mountain dedicated to the afterlife, with statues of demons, judges of the dead, and the \'Bridge of Helplessness\' you must cross to reach the afterlife. Alternatively, some cruises visit Shibaozhai (石宝寨) — a 12-storey wooden pagoda built against a 200m rock pillar, now an island after the dam raised the water. Afternoon: cruising through the countryside. Evening: captain\'s welcome dinner.`, tip: `Fengdu Ghost City is a 2-hour uphill walk (or cable car, ¥20). The temple complex is a folk-religion representation of the Chinese afterlife — 3 tests to determine if you go to heaven or hell. It is kitschy but culturally interesting. Shibaozhai is architecturally more impressive — the pagoda was built in 1819 without nails.` },
  { day: 'Day 3: Three Gorges', content: `Morning: enter Qutang Gorge (瞿塘峡) — the shortest (8 km) and most dramatic of the Three Gorges, with cliffs rising vertically from the water. This is the gorge on the ¥10 note. Then Wu Gorge (巫峡) — the longest and most beautiful (45 km), with 12 peaks rising through the mist. The ship\'s guide narrates the peaks and their legends. Afternoon: transfer to a small boat for the Shennong Stream (神农溪) excursion — a tributary through a narrow gorge where the original water level is visible on the cliffs. Local Tujia boatmen pole the boats. Evening: pass through the 5-stage ship locks at the Three Gorges Dam (3-4 hours, fascinating engineering).`, tip: `The Shennong Stream small boat excursion is the cruise highlight — you leave the big ship and go deep into a narrow tributary where the dam\'s impact is most visible (the old waterline is 100m above your head). The Tujia boatmen used to pole the boats manually — now they are motorised, but the scenery is still stunning.` },
  { day: 'Day 4: Three Gorges Dam → Yichang', content: `Morning: visit the Three Gorges Dam (三峡大坝, included in cruise fare) — the world\'s largest hydroelectric dam: 2.3 km wide, 185m high, generating 22,500 MW. The visitor centre has an observation deck, a model of the dam, and exhibits on the project (including the relocation of 1.3 million people). Afternoon: disembark at Yichang (宜昌). Transfer to Yichang East Railway Station for high-speed trains to Wuhan (2 hrs, ¥120), Chongqing (4 hrs), or Shanghai (7 hrs). Fly out from Yichang Sanxia Airport (YIH).`, tip: `The Three Gorges Dam visitor centre is state propaganda — it presents the dam as an unqualified triumph. The reality is more complex: 1.3 million people were relocated, 13 cities and 1,352 villages were submerged, and the environmental impact on the Yangtze ecosystem is significant. The engineering is genuinely extraordinary. Go for the engineering, but hold the official narrative lightly.` },
];
const PRACTICAL = [
  { title: 'Cruise Lines & Booking', body: `Major cruise lines: Victoria Cruises (American-managed, best for Westerners), Century Cruises, Yangtze Explorer (most luxurious), and President Cruises. Downstream (Chongqing→Yichang): 4 days/3 nights. Upstream (Yichang→Chongqing): 5 days/4 nights (slower against the current). Book through a travel agency or Trip.com.` },
  { title: 'Cabin Types', body: `Standard cabin (¥2,000-4,000/person for 4-day cruise), junior suite (¥4,000-6,000), and executive suite (¥6,000-10,000+). Standard cabins are comfortable (15-20 m², private bathroom, river-view window or balcony). Book a balcony cabin — the scenery is the point.` },
  { title: 'When to Go', body: `March-May and September-November. Spring has comfortable temperatures and blooming flowers. Autumn has clear skies and the best visibility of the gorges. Summer (June-August) is hot, humid, and the rainy season (river can be brown with silt). Winter (December-February) is cold on the water but cruises are 30-50% cheaper.` },
  { title: 'What to Pack', body: `Binoculars (essential for gorge viewing), a jacket (it is windy on deck), comfortable walking shoes for shore excursions, and motion sickness pills (the river is mostly calm but the section below the dam can be choppy).` },
];
const NEXT_STEPS = [
  { href: '/sichuan/chengdu-jiuzhaigou-huanglong', label: 'Chengdu & Jiuzhaigou', description: 'Start in Chengdu before the cruise departs Chongqing' },
  { href: '/golden-triangle/beijing-xian-shanghai', label: 'Golden Triangle', description: 'Combine with Beijing, Xian, and Shanghai' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Yangtze Cruise · 4-5 Days</Kicker>
          <h1>Yangtze River Cruise: Chongqing to Yichang Through the Three Gorges</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Four days on the world\'s third-longest river, through limestone gorges, past the largest dam ever built, and into tributary streams on small boats — the classic Yangtze cruise.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>4-5 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Chongqing → Fengdu → Three Gorges → Three Gorges Dam → Yichang</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$600-1,200/person (cruise only)</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>The Yangtze River cruise from Chongqing to Yichang is one of China\'s classic travel experiences. Over 4 days (downstream) or 5 days (upstream), you travel 660 km through the Three Gorges — Qutang (the shortest and most dramatic), Wu (the deepest and most beautiful), and Xiling (the longest) — on a river that has been China\'s main east-west artery for millennia. The cruise includes shore excursions to the Three Gorges Dam (the world\'s largest hydroelectric project), the \'Ghost City\' of Fengdu, and the Shennong Stream (a tributary explored by small wooden boats). It is a comfortable, scenic way to travel between Chongqing and Yichang.</p>
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