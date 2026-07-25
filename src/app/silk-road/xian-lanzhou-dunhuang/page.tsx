import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Xian-Lanzhou-Dunhuang (7-8 Days) | Silk Road Highlights Guide | BeforeChina',
  description:
    "The classic Chinese Silk Road route: Xian's Terracotta Warriors, Lanzhou's Yellow River, Zhangye's rainbow mountains, Jiayuguan's Great Wall fort, and Dunhuang's Mogao Caves.",
  alternates: { canonical: '/silk-road/xian-lanzhou-dunhuang' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/silk-road/xian-lanzhou-dunhuang',
    title: 'Xian-Lanzhou-Dunhuang (7-8 Days) | Silk Road Highlights Guide | BeforeChina',
    description:
      "The classic Chinese Silk Road route: Xian's Terracotta Warriors, Lanzhou's Yellow River, Zhangye's rainbow mountains, Jiayuguan's Great Wall fort, and Dunhuang's Mogao Caves.",
    images: [
      {
        url: '/images/destinations/silk-road.webp',
        width: 1200,
        height: 630,
        alt: 'Silk Road camel caravan in Dunhuang desert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xian-Lanzhou-Dunhuang (7-8 Days) | Silk Road Highlights Guide | BeforeChina',
    description:
      "The classic Chinese Silk Road route: Xian's Terracotta Warriors, Lanzhou's Yellow River, Zhangye's rainbow mountains, Jiayuguan's Great Wall fort, and Dunhuang's Mogao Caves.",
    images: ['/images/destinations/silk-road.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Xian, Lanzhou & Dunhuang: The Classic Silk Road?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This journey typically takes 7-8 days. The Silk Road was not one road but a network of trade routes connecting China to Central Asia, Persia, and the Mediterranean for over 1,500 years. This route follows the Hexi Corridor (河西走廊) — the 1,0',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this itinerary customizable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — every BeforeChina journey is 100% tailor-made. The itinerary above is a suggested framework. We can adjust the pace, add or remove stops, and tailor every detail to your interests.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Xian, Lanzhou & Dunhuang: The Classic Silk Road',
      item: 'https://beforechina.com/silk-road/xian-lanzhou-dunhuang',
    },
  ],
};

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      {/* Full-bleed Hero Image */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '60vh',
          minHeight: '400px',
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/destinations/silk-road.webp"
          alt="Silk Road camel caravan in Dunhuang desert"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Silk Road &middot; 7-8 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Xian, Lanzhou & Dunhuang: The Classic Silk Road
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-quote)',
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            From the Terracotta Warriors to the rainbow mountains of Zhangye, Jiayuguan\'s desert
            fortress, and Dunhuang\'s Mogao Caves — the Silk Road\'s greatest hits.
          </p>
        </div>
      </section>

      {/* Trip Highlights */}
      <section style={{ padding: 'var(--section-gap-sm) 0' }}>
        <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
            {[
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
                title: '7-8 Days',
                description:
                  'The classic Silk Road route at a comfortable pace — all the highlights without feeling rushed.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Xian → Lanzhou → Zhangye → Jiayuguan → Dunhuang',
                description:
                  "Connected by high-speed trains along the 1,000km Hexi Corridor — China's most historic road.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Terracotta Warriors, Rainbow Mountains, Mogao Caves',
                description:
                  "Three of China's most extraordinary sights along the route that changed world history.",
              },
            ].map((h) => (
              <div key={h.title} style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--primary-color)', marginBottom: '12px', opacity: 0.85 }}>
                  <span dangerouslySetInnerHTML={{ __html: h.icon }} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    fontWeight: 600,
                    marginBottom: '8px',
                  }}
                >
                  {h.title}
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '15px',
                    lineHeight: 1.5,
                    maxWidth: '280px',
                    margin: '0 auto',
                  }}
                >
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-by-Day Narrative */}
      <section style={{ padding: 'var(--section-gap-sm) 0', backgroundColor: 'var(--bg-surface)' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 3.5vw, 34px)',
              fontWeight: 500,
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            The Journey
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '17px',
              lineHeight: 1.8,
              marginBottom: '48px',
            }}
          >
            The Silk Road was not one road but a network of trade routes connecting China to Central
            Asia, Persia, and the Mediterranean for over 1,500 years. This route follows the Hexi
            Corridor (河西走廊) — the 1,000km narrow passage between the Tibetan Plateau and the
            Gobi Desert that was the Silk Road\'s main artery. You will travel from Xian (the
            eastern terminus) to Dunhuang (the western gateway), passing through Zhangye\'s
            rainbow-coloured mountains, Jiayuguan\'s Ming dynasty fortress at the Great Wall\'s
            western end, and the Mogao Caves — one of the world\'s greatest repositories of Buddhist
            art.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Xian',
                content: `Arrive Xian. Afternoon: Xian City Wall and Muslim Quarter — a gentle introduction before the long journey west.`,
                tip: `Xian is the eastern terminus of the Silk Road. The city was called Chang\'an and was the largest city in the world during the Tang dynasty (618-907 AD), with over 1 million people including large communities of Persian, Arab, and Central Asian merchants.`,
              },
              {
                day: 'Day 2: Xian',
                content: `Full day: Terracotta Warriors and Huaqing Hot Springs. The warriors are the most tangible connection to the Qin dynasty (221-206 BC) — an army of 8,000 life-sized soldiers buried to guard China\'s first emperor.`,
                tip: `Book the 8:30am slot at the Terracotta Warriors. The site is 40 km east of Xian — the public bus (¥8) takes 1 hour from Xian Railway Station. Go to Pit 1 first, then Pit 2, then Pit 3. The bronze chariot exhibition hall is the final stop and is often less crowded in the afternoon.`,
              },
              {
                day: 'Day 3: Xian → Lanzhou',
                content: `Take the 3-hour high-speed train from Xian North to Lanzhou West (¥175). Lanzhou is a long, narrow city squeezed between mountains along the Yellow River. Afternoon: Zhongshan Bridge (中山桥) — a steel bridge built by a German company in 1909, the first permanent bridge across the Yellow River. Walk the riverfront promenade. Visit the White Pagoda Mountain (白塔山) for a panoramic view of the city. Evening: Lanzhou beef noodles (兰州牛肉面) — the city\'s claim to culinary fame.`,
                tip: `Lanzhou beef noodles (兰州牛肉面) is one of China\'s most famous dishes. The best bowls are served for breakfast — locals queue at 6am. The noodles are hand-pulled to order in 7 different thicknesses. Must-try shops: Mazilu (马子禄, the most famous) or Wumule (吾穆勒, locals\' favourite). A bowl costs ¥8-15.`,
              },
              {
                day: 'Day 4: Lanzhou → Zhangye',
                content: `Take the 3-hour high-speed train from Lanzhou West to Zhangye West (¥150). Zhangye\'s Danxia Landform (张掖丹霞, ¥75) is a range of rainbow-coloured sandstone mountains — layers of red, orange, yellow, and green mineral deposits that look like a painter\'s palette. The best light is late afternoon (4-6pm) when the colours are most vivid. The scenic area has shuttle buses between 4 viewing platforms. Stay overnight in Zhangye.`,
                tip: `Zhangye Danxia looks Photoshopped in photos but is genuinely that colourful in person — the colours come from iron oxide (red), limonite (yellow), and chlorite (green) mineral deposits laid down over 24 million years. The best viewing platform is #4 (the highest). Go on a sunny day — the colours are muted in cloud or rain.`,
              },
              {
                day: 'Day 5: Zhangye → Jiayuguan',
                content: `Take the 1.5-hour high-speed train from Zhangye West to Jiayuguan South (¥80). Jiayuguan (嘉峪关) is the western end of the Ming dynasty Great Wall — a massive fortress built in 1372 at a strategic choke point between the Qilian Mountains and the Gobi Desert. The fortress is remarkably well-preserved: walls 11m high, gates inscribed with \'Jiayuguan\' in imperial calligraphy, and watchtowers with views across the desert. Afternoon: Overhanging Great Wall (悬壁长城, ¥20) — a section of wall climbing a 150m ridge north of the fortress. Evening: Jiayuguan barbecue (lamb skewers are the local speciality).`,
                tip: `Jiayuguan fortress is at its most atmospheric in late afternoon when the setting sun turns the walls golden and the desert stretches endlessly beyond. The ticket (¥120) includes the fortress, the Overhanging Wall, and the First Strategic Post (the westernmost point of the Ming Great Wall). The three sites are spread out — you will need a taxi or Didi to reach them all.`,
              },
              {
                day: 'Day 6: Jiayuguan → Dunhuang',
                content: `Drive 4.5 hours from Jiayuguan to Dunhuang (¥150 by bus, ¥800 by private car). The road crosses the Gobi Desert — one of the most dramatic drives in China. Dunhuang was the Silk Road\'s western gateway: beyond here, the route split into the northern and southern routes around the Taklamakan Desert. Afternoon: Mingsha Sand Dunes (鸣沙山, ¥120) — massive singing sand dunes right on the edge of the city. Climb the dunes (30-40 minutes up, 5 minutes down running) for sunset over the desert. Crescent Moon Spring (月牙泉), a natural spring in the shape of a crescent moon, sits improbably between the dunes.`,
                tip: `Mingsha Sand Dunes are best at sunrise or sunset — the sand turns gold and the temperature is bearable. The climb is hard work (sand gives way with every step) but the view is worth it. Rent orange shoe covers (¥15) at the entrance — the sand will get everywhere otherwise. Camel rides are ¥100 for 40 minutes.`,
              },
              {
                day: 'Day 7: Dunhuang',
                content: `Morning: Mogao Caves (莫高窟, ¥238, must book 2-4 weeks ahead) — 492 caves containing 2,000+ painted sculptures and 45,000 m² of murals spanning 1,000 years of Buddhist art (4th-14th centuries). Visits are by guided tour only; you will see 8 caves (the specific caves depend on the day). The highlight is Cave 45 — a Tang dynasty cave with perfectly preserved painted sculptures of the Buddha and bodhisattvas. Afternoon: Dunhuang Museum (free). Evening: Shazhou Night Market for camel kebabs and Dunhuang yellow noodles (黄面).`,
                tip: `Mogao Caves tickets (¥238, A-category) sell out 2-4 weeks in advance in summer. Book on the official WeChat mini-program (莫高窟参观预约网). The A ticket includes a 40-minute IMAX film, 8 caves with a guide, and transport from the Digital Centre. B-category tickets (¥100, 4 caves) are available 1-2 days ahead but sell out too. Plan ahead.`,
              },
              {
                day: 'Day 8: Dunhuang → Fly Out',
                content: `Fly out from Dunhuang Mogao Airport (DNH). Direct flights to Xian (2.5 hrs), Lanzhou (1.5 hrs), and Beijing (4 hrs). If your flight is in the evening, visit the Western Thousand Buddha Caves (西千佛洞, ¥30) — a smaller, less-visited cave complex 35 km west of Dunhuang with 16 surviving caves.`,
                tip: `Dunhuang airport is small and 13 km east of the city. The airport bus (¥10) takes 20 minutes from the city centre. There is also a high-speed train station (Dunhuang) with trains to Lanzhou (8 hrs, overnight option).`,
              },
            ].map((stop, i) => (
              <div
                key={stop.day}
                style={{
                  padding: '40px 0',
                  borderBottom: i < 7 ? '1px solid var(--border-color)' : 'none',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '24px',
                    fontWeight: 500,
                    marginBottom: '12px',
                  }}
                >
                  {stop.day}
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '17px',
                    lineHeight: 1.8,
                    marginBottom: '16px',
                  }}
                >
                  {stop.content}
                </p>
                <blockquote className="pull" style={{ margin: '16px 0 0', fontSize: '16px' }}>
                  <strong>Local tip:</strong> {stop.tip}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailor-Made Signal */}
      <section style={{ padding: 'var(--section-gap-sm) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-quote)',
              fontSize: '18px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              fontStyle: 'italic',
            }}
          >
            This is a suggested itinerary. Every journey we design is tailored to your interests,
            pace, and budget.
          </p>
        </div>
      </section>

      {/* Enquiry Form */}
      <EnquiryForm />

      {/* Related Journeys */}
      <NextSteps
        steps={[
          {
            href: '/silk-road/hexi-corridor-deep',
            label: 'Hexi Corridor Deep Dive',
            description: 'A slower 10-12 day version with more stops along the corridor.',
            image: '/images/destinations/silk-road.webp',
            imageAlt: 'Hexi Corridor rainbow mountains',
            days: '10-12 days',
          },
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: "Combine Xi'an with Beijing and Shanghai for the full Golden Triangle.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8-10 days',
          },
          {
            href: '/sichuan/chengdu-jiuzhaigou-huanglong',
            label: 'Chengdu & Jiuzhaigou',
            description: 'Head south to Sichuan for pandas and turquoise lakes.',
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Jiuzhaigou turquoise lakes',
            days: '6-8 days',
          },
        ]}
      />
    </div>
  );
}
