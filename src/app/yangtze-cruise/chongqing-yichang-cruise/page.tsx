import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Yangtze River Cruise (4-5 Days) | Chongqing to Yichang Three Gorges | BeforeChina',
  description:
    "A 4-5 day Yangtze cruise from Chongqing to Yichang through the Three Gorges — the world's largest dam, limestone gorges, and Shennong Stream.",
  alternates: { canonical: '/yangtze-cruise/chongqing-yichang-cruise' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/yangtze-cruise/chongqing-yichang-cruise',
    title: 'Yangtze River Cruise (4-5 Days) | Chongqing to Yichang Three Gorges | BeforeChina',
    description:
      "A 4-5 day Yangtze cruise from Chongqing to Yichang through the Three Gorges — the world's largest dam, limestone gorges, and Shennong Stream.",
    images: [
      {
        url: '/images/destinations/yangtze-cruise.webp',
        width: 1200,
        height: 630,
        alt: 'Yangtze River Three Gorges limestone cliffs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yangtze River Cruise (4-5 Days) | Chongqing to Yichang Three Gorges | BeforeChina',
    description:
      "A 4-5 day Yangtze cruise from Chongqing to Yichang through the Three Gorges — the world's largest dam, limestone gorges, and Shennong Stream.",
    images: ['/images/destinations/yangtze-cruise.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the Yangtze cruise worth it after the Three Gorges Dam raised the water level?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The water level rose 100m after the dam was completed in 2003, which changed the gorges — they are narrower at the top than at the bottom now, and some archaeological sites were submerged. But the gorges are still dramatic (the cliffs are 1,000m+ high, so 100m of water rise is only 10% of the height), and the cruise is still a wonderful experience. The dam itself is an engineering marvel worth seeing. Go with realistic expectations: this is a comfortable river cruise through dramatic scenery, not an untouched wilderness experience.',
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
      name: 'Yangtze River Cruise: Chongqing to Yichang Through the Three Gorges',
      item: 'https://beforechina.com/yangtze-cruise/chongqing-yichang-cruise',
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
          src="/images/destinations/yangtze-cruise.webp"
          alt="Yangtze River Three Gorges limestone cliffs"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Yangtze Cruise &middot; 4-5 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Yangtze River Cruise: Chongqing to Yichang Through the Three Gorges
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
            Four days on the world\'s third-longest river, through limestone gorges, past the
            largest dam ever built, and into tributary streams on small boats — the classic Yangtze
            cruise.
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
                title: '4–5 Days',
                description:
                  'The classic Yangtze cruise — 660 km downstream through the Three Gorges, from Chongqing to Yichang.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Chongqing → Yichang',
                description:
                  "Sail 660 km on China's longest river, through limestone gorges and the world's largest hydroelectric dam.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Three Gorges, Shennong Stream, Three Gorges Dam',
                description:
                  'Dramatic limestone gorges, a tributary explored by small boat, and the largest dam ever built.',
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
            The Yangtze River cruise from Chongqing to Yichang is one of China\'s classic travel
            experiences. Over 4 days (downstream) or 5 days (upstream), you travel 660 km through
            the Three Gorges — Qutang (the shortest and most dramatic), Wu (the deepest and most
            beautiful), and Xiling (the longest) — on a river that has been China\'s main east-west
            artery for millennia. The cruise includes shore excursions to the Three Gorges Dam (the
            world\'s largest hydroelectric project), the \'Ghost City\' of Fengdu, and the Shennong
            Stream (a tributary explored by small wooden boats). It is a comfortable, scenic way to
            travel between Chongqing and Yichang.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Chongqing → Board Ship',
                content: `Arrive Chongqing (重庆). Board your cruise ship at Chaotianmen Dock in the late afternoon/evening. Ships typically depart at 9-10pm. After boarding: safety briefing, welcome dinner, and watching Chongqing\'s skyline lights as you sail away. Chongqing\'s hilly skyline is spectacular at night — the city is built on a peninsula where the Yangtze and Jialing rivers meet.`,
                tip: `Chongqing deserves 1-2 days before the cruise. Visit the Ciqikou old town, eat Chongqing hotpot (the numbing-spicy version that is the city\'s signature), and take the Yangtze River cable car across the river. The best hotpot: find a busy local place in Jiefangbei or Nanbin Road — the more plastic stools on the pavement, the better the hotpot.`,
              },
              {
                day: 'Day 2: Fengdu Ghost City / Shibaozhai',
                content: `Morning shore excursion to Fengdu Ghost City (丰都鬼城, included in cruise fare) — a Ming dynasty temple complex on Ming Mountain dedicated to the afterlife, with statues of demons, judges of the dead, and the \'Bridge of Helplessness\' you must cross to reach the afterlife. Alternatively, some cruises visit Shibaozhai (石宝寨) — a 12-storey wooden pagoda built against a 200m rock pillar, now an island after the dam raised the water. Afternoon: cruising through the countryside. Evening: captain\'s welcome dinner.`,
                tip: `Fengdu Ghost City is a 2-hour uphill walk (or cable car, ¥20). The temple complex is a folk-religion representation of the Chinese afterlife — 3 tests to determine if you go to heaven or hell. It is kitschy but culturally interesting. Shibaozhai is architecturally more impressive — the pagoda was built in 1819 without nails.`,
              },
              {
                day: 'Day 3: Three Gorges',
                content: `Morning: enter Qutang Gorge (瞿塘峡) — the shortest (8 km) and most dramatic of the Three Gorges, with cliffs rising vertically from the water. This is the gorge on the ¥10 note. Then Wu Gorge (巫峡) — the longest and most beautiful (45 km), with 12 peaks rising through the mist. The ship\'s guide narrates the peaks and their legends. Afternoon: transfer to a small boat for the Shennong Stream (神农溪) excursion — a tributary through a narrow gorge where the original water level is visible on the cliffs. Local Tujia boatmen pole the boats. Evening: pass through the 5-stage ship locks at the Three Gorges Dam (3-4 hours, fascinating engineering).`,
                tip: `The Shennong Stream small boat excursion is the cruise highlight — you leave the big ship and go deep into a narrow tributary where the dam\'s impact is most visible (the old waterline is 100m above your head). The Tujia boatmen used to pole the boats manually — now they are motorised, but the scenery is still stunning.`,
              },
              {
                day: 'Day 4: Three Gorges Dam → Yichang',
                content: `Morning: visit the Three Gorges Dam (三峡大坝, included in cruise fare) — the world\'s largest hydroelectric dam: 2.3 km wide, 185m high, generating 22,500 MW. The visitor centre has an observation deck, a model of the dam, and exhibits on the project (including the relocation of 1.3 million people). Afternoon: disembark at Yichang (宜昌). Transfer to Yichang East Railway Station for high-speed trains to Wuhan (2 hrs, ¥120), Chongqing (4 hrs), or Shanghai (7 hrs). Fly out from Yichang Sanxia Airport (YIH).`,
                tip: `The Three Gorges Dam visitor centre is state propaganda — it presents the dam as an unqualified triumph. The reality is more complex: 1.3 million people were relocated, 13 cities and 1,352 villages were submerged, and the environmental impact on the Yangtze ecosystem is significant. The engineering is genuinely extraordinary. Go for the engineering, but hold the official narrative lightly.`,
              },
            ].map((stop, i) => (
              <div
                key={stop.day}
                style={{
                  padding: '40px 0',
                  borderBottom: i < 3 ? '1px solid var(--border-color)' : 'none',
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
            href: '/sichuan/chengdu-jiuzhaigou-huanglong',
            label: 'Chengdu & Jiuzhaigou',
            description:
              'Start in Chengdu before the cruise departs Chongqing — pandas, hotpot, and alpine lakes.',
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Jiuzhaigou turquoise lakes',
            days: '5–7 days',
          },
          {
            href: '/golden-triangle/beijing-in-depth',
            label: 'Beijing In Depth',
            description: "Begin or end your trip in China's 3,000-year capital.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '4–5 days',
          },
          {
            href: '/guangxi/guilin-yangshuo-lijiang',
            label: 'Guilin & Yangshuo',
            description: "Trade the Yangtze's gorges for the Li River's karst peaks.",
            image: '/images/destinations/guangxi.webp',
            imageAlt: 'Guilin karst landscape',
            days: '4–5 days',
          },
        ]}
      />
    </div>
  );
}
