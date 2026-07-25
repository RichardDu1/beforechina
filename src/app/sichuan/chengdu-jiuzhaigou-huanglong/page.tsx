import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Chengdu, Jiuzhaigou & Huanglong: Pandas & Turquoise Lakes | BeforeChina',
  description:
    "Chengdu's giant pandas, Jiuzhaigou's 114 turquoise lakes, and Huanglong's golden travertine terraces — Sichuan's three icons in one trip.",
  alternates: { canonical: '/sichuan/chengdu-jiuzhaigou-huanglong' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/sichuan/chengdu-jiuzhaigou-huanglong',
    title: 'Chengdu, Jiuzhaigou & Huanglong: Pandas & Turquoise Lakes | BeforeChina',
    description:
      "Chengdu's giant pandas, Jiuzhaigou's 114 turquoise lakes, and Huanglong's golden travertine terraces — Sichuan's three icons in one trip.",
    images: [
      {
        url: '/images/destinations/sichuan.webp',
        width: 1200,
        height: 630,
        alt: 'Jiuzhaigou turquoise lakes and waterfalls',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chengdu, Jiuzhaigou & Huanglong: Pandas & Turquoise Lakes | BeforeChina',
    description:
      "Chengdu's giant pandas, Jiuzhaigou's 114 turquoise lakes, and Huanglong's golden travertine terraces — Sichuan's three icons in one trip.",
    images: ['/images/destinations/sichuan.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Chengdu, Jiuzhaigou & Huanglong: Pandas & Turquoise Lakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 5-6 days. Sichuan is China's outdoor playground, and this route hits the province's three biggest draws. Chengdu is the panda capital of the world and the spiritual home of Sichuan cuisine. Jiuzhaigou (九寨沟) is ",
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
      name: 'Chengdu, Jiuzhaigou & Huanglong: Pandas & Turquoise Lakes',
      item: 'https://beforechina.com/sichuan/chengdu-jiuzhaigou-huanglong',
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
          src="/images/destinations/sichuan.webp"
          alt="Jiuzhaigou turquoise lakes and waterfalls"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Sichuan &middot; 5-6 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Chengdu, Jiuzhaigou & Huanglong: Pandas & Turquoise Lakes
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
            Chengdu\'s giant pandas, Jiuzhaigou\'s 114 turquoise lakes, and Huanglong\'s golden
            travertine terraces — Sichuan\'s three icons in one trip.
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
                title: '5-6 Days',
                description:
                  "The perfect pace for Sichuan's three icons — pandas, turquoise lakes, and golden travertine terraces.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Chengdu → Jiuzhaigou → Huanglong',
                description:
                  'Fly from Chengdu to Jiuzhaigou (1 hr), then drive 2.5 hrs to Huanglong.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Pandas, Five Flower Lake, Huanglong Pools',
                description:
                  "China's cutest animal, its most beautiful lake, and a 3.6 km golden travertine cascade.",
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
            Sichuan is China\'s outdoor playground, and this route hits the province\'s three
            biggest draws. Chengdu is the panda capital of the world and the spiritual home of
            Sichuan cuisine. Jiuzhaigou (九寨沟) is a UNESCO-listed valley of 114 turquoise lakes,
            waterfalls, and snow-capped peaks — arguably China\'s most beautiful national park.
            Huanglong (黄龙) is a 3.6 km travertine terrace system of golden calcified pools,
            nicknamed the \'Yellow Dragon\' for the way the pools cascade down the valley.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Chengdu Pandas & Hot Pot',
                content: `Morning: Chengdu Research Base of Giant Panda Breeding — arrive at 7:30am (opening time) to see the pandas at their most active during breakfast feeding. The babies are in the nursery in August-September. Afternoon: People\'s Park for tea in a bamboo grove at the Heming Teahouse (built 1923). Evening: Sichuan hot pot — the numbing-spicy (麻辣) broth is a Chengdu rite of passage.`,
                tip: `Panda base opens at 7:30am. The pandas are fed at 8-9am and sleep most of the afternoon. Go early or you\'ll be photographing sleeping pandas. Entrance ¥55.`,
              },
              {
                day: 'Day 2: Chengdu → Jiuzhaigou',
                content: `Morning flight from Chengdu Tianfu (TFU) to Jiuzhaigou Huanglong Airport (JZH, 1 hr). The approach through the Min Mountains is spectacular — snow peaks in every direction. Drive 2 hours from the airport to Jiuzhaigou Valley. Check into your hotel near the park entrance. Afternoon: walk the village area, acclimatise to the 2,000m altitude. If you have energy, visit the Zharu Monastery just outside the park.`,
                tip: `The airport is at 3,400m — you will feel the altitude immediately. Don\'t rush. The drive to Jiuzhaigou descends 1,400m through a stunning river gorge. The road is good but winding.`,
              },
              {
                day: 'Day 3: Jiuzhaigou Full Day',
                content: `Enter the park at 8am. Jiuzhaigou is a Y-shaped valley with three main branches. Take the shuttle bus to the top of Rize Valley (Primeval Forest, 3,060m), then walk down past Swan Lake, Arrow Bamboo Lake, Panda Lake, Five Flower Lake (the most photogenic — turquoise, emerald, and sapphire in a single lake), Pearl Shoal Waterfall, and Mirror Lake. After lunch at Nuorilang, do Zechawa Valley: Long Lake (the largest at 3,100m) and Five-Color Pond (tiny but intensely blue). End at Shuzheng Valley for the Tibetan villages and Shuzheng Waterfall.`,
                tip: `Jiuzhaigou ticket: ¥169 + ¥90 shuttle bus. Book on WeChat (search 九寨沟) up to 7 days ahead. The park limits visitors to 41,000/day and sells out in autumn. The shuttle bus is hop-on-hop-off — use it to skip the long walks between valleys.`,
              },
              {
                day: 'Day 4: Huanglong',
                content: `Drive 2.5 hours from Jiuzhaigou to Huanglong. Take the cable car up (¥80) and walk 2 km to the Five-Color Pool at 3,570m — the highest and most spectacular of the travertine terraces, with pools ranging from yellow to green to blue depending on mineral content and algae. Then walk down 4 km through the valley past hundreds of terraced pools. The whole descent takes 3-4 hours. Drive back to Chuanzhusi Town or Jiuzhaigou for the night.`,
                tip: `Huanglong is at 3,200-3,570m — higher than Jiuzhaigou. Altitude sickness is common here. Buy an oxygen canister (¥30) at the entrance if you\'re prone to altitude issues. The walk is downhill from the top — much easier than going up.`,
              },
              {
                day: 'Day 5: Return to Chengdu',
                content: `Morning: visit Munigou Valley (a quieter alternative to Huanglong with similar travertine pools, fewer tourists) or relax. Afternoon flight from JZH back to Chengdu. Evening: Chengdu farewell dinner — try mapo tofu (the real version, not the Westernised one) and dan dan noodles at a local restaurant.`,
                tip: `If your flight from JZH is delayed (common in winter due to snow), have a backup plan. Jiuzhaigou Airport has a reputation for cancellations December-February. Fly in the morning to have the afternoon as a buffer.`,
              },
            ].map((stop, i) => (
              <div
                key={stop.day}
                style={{
                  padding: '40px 0',
                  borderBottom: i < 4 ? '1px solid var(--border-color)' : 'none',
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
            href: '/sichuan/chengdu-in-depth',
            label: 'Chengdu In Depth',
            description: 'Spend more time with pandas, hot pot, and tea houses.',
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Chengdu panda',
            days: '3-4 days',
          },
          {
            href: '/sichuan/chengdu-daocheng-yading',
            label: 'Daocheng Yading',
            description: "Extend to the 'Last Shangri-La' — three sacred snow mountains.",
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Daocheng Yading snow mountain',
            days: '7-8 days',
          },
          {
            href: '/yunnan/kunming-dali-lijiang-shangri-la',
            label: 'Classic Yunnan Route',
            description: 'Next door: Stone Forest, Erhai Lake, and Tibetan Shangri-La.',
            image: '/images/destinations/yunnan.webp',
            imageAlt: 'Lijiang old town',
            days: '7-8 days',
          },
        ]}
      />
    </div>
  );
}
