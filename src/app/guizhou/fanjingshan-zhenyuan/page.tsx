import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Fanjingshan & Zhenyuan: Guizhou's Sacred Mountain | BeforeChina",
  description:
    'A 2,570m red cloud summit with a temple split between two rock pillars, and a 2,300-year-old town built along a river gorge — eastern Guizhou at its most dramatic.',
  alternates: { canonical: '/guizhou/fanjingshan-zhenyuan' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/guizhou/fanjingshan-zhenyuan',
    title: "Fanjingshan & Zhenyuan: Guizhou's Sacred Mountain | BeforeChina",
    description:
      'A 2,570m red cloud summit with a temple split between two rock pillars, and a 2,300-year-old town built along a river gorge — eastern Guizhou at its most dramatic.',
    images: [
      {
        url: '/images/destinations/guizhou.webp',
        width: 1200,
        height: 630,
        alt: 'Fanjingshan Red Cloud Golden Summit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fanjingshan & Zhenyuan: Guizhou's Sacred Mountain | BeforeChina",
    description:
      'A 2,570m red cloud summit with a temple split between two rock pillars, and a 2,300-year-old town built along a river gorge — eastern Guizhou at its most dramatic.',
    images: ['/images/destinations/guizhou.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is the best way to experience Fanjingshan & Zhenyuan: Guizhou's Sacred Mountain?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 4-5 days. Fanjingshan (梵净山) is one of China's five sacred Buddhist mountains, a UNESCO site in eastern Guizhou. Its iconic image is the Red Cloud Golden Summit — two temple halls (Buddha and Maitreya) perched o",
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
      name: "Fanjingshan & Zhenyuan: Guizhou's Sacred Mountain",
      item: 'https://beforechina.com/guizhou/fanjingshan-zhenyuan',
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
          src="/images/destinations/guizhou.webp"
          alt="Fanjingshan Red Cloud Golden Summit"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Guizhou &middot; 4-5 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Fanjingshan & Zhenyuan: Guizhou\'s Sacred Mountain
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
            A 2,570m red cloud summit with a temple split between two rock pillars, and a
            2,300-year-old town built along a river gorge — eastern Guizhou at its most dramatic.
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
                title: '4-5 Days',
                description:
                  'A focused eastern Guizhou route — one sacred mountain, one ancient town, at a comfortable pace.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Guiyang → Fanjingshan → Zhenyuan',
                description:
                  'Connected by high-speed trains — Guiyang to Tongren (1.5 hrs), then south to Zhenyuan and back to Guiyang.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Red Cloud Summit, Ancient Zhenyuan',
                description:
                  'A temple split between two rock pillars at 2,336m, and a 2,300-year-old town built into a river gorge.',
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
            Fanjingshan (梵净山) is one of China\'s five sacred Buddhist mountains, a UNESCO site in
            eastern Guizhou. Its iconic image is the Red Cloud Golden Summit — two temple halls
            (Buddha and Maitreya) perched on a split rock pinnacle at 2,336m, connected by a narrow
            stone bridge. Zhenyuan Ancient Town (镇远古镇) is a 2,300-year-old town built into a
            narrow gorge along the Wuyang River, with Ming dynasty temples clinging to cliff faces
            and a nightscape of lanterns reflecting in the water.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Guiyang → Tongren',
                content: `Fly into Guiyang. Take the 1.5-hour high-speed train to Tongren. Tongren is the gateway city for Fanjingshan. Spend the afternoon exploring Tongren\'s old town along the Jin River and visiting the Dongshan Temple. Stay overnight near the Fanjingshan entrance or in Tongren.`,
                tip: `Fanjingshan limits visitors to 8,000/day and tickets sell out. Book on WeChat (search 梵净山) 7 days ahead — especially in summer and on weekends. The combined entrance and cable car ticket is for a specific entry time slot. Morning slots (7-9am) sell out first.`,
              },
              {
                day: 'Day 2: Fanjingshan',
                content: `Arrive at the park entrance by 7:30am. Take the cable car up (20 min, from 800m to 2,100m). From the upper station, walk the wooden boardwalk (1 hr) through a primeval forest of rhododendrons and ancient firs to the Mushroom Stone — a 10m granite boulder balanced on a smaller rock, the symbol of Fanjingshan. Continue to the Red Cloud Golden Summit — the climb up the rock pinnacle is steep (near-vertical stairs, chain handrails) but the view from the top is unforgettable: a sea of karst peaks stretching to the horizon. Descend by cable car. Return to Tongren for the night.`,
                tip: `Fanjingshan weather is unpredictable — the summit is often in clouds. Check the forecast and go on a clear day. Morning is best. Bring layers — the summit is 10°C colder than the base. The stairs to the summit are genuinely steep; if you have a fear of heights, the Mushroom Stone area is still worth the trip without the summit climb.`,
              },
              {
                day: 'Day 3: Tongren → Zhenyuan',
                content: `Take the 1-hour high-speed train from Tongren South to Sansui, then a 40-minute bus to Zhenyuan. Zhenyuan Ancient Town is built along the Wuyang River in a narrow gorge — stone houses, temple-studded cliffs, and a series of ancient bridges. Walk the old town, cross the Zhusheng Bridge (built 1372, rebuilt in Qing dynasty), and climb the cliffside path to the Qinglong Cave complex — a series of temples and pavilions built into a cliff face overlooking the river.`,
                tip: `Zhenyuan is free to enter. The Qinglong Cave complex charges a modest entrance fee and is a remarkable feat of construction — three religions (Buddhism, Daoism, Confucianism) sharing the same cliff face. The views from the highest pavilion are worth the climb.`,
              },
              {
                day: 'Day 4: Zhenyuan → Guiyang',
                content: `Morning: Wuyang River boat ride through the gorge (1 hr) — the cliffs rise vertically from the water and the perspective from the river is completely different from the town. Afternoon: walk the Black Dragon Cave path on the opposite cliff for the classic Zhenyuan photo — the town\'s curved river and temple-dotted cliffs in one frame. Take the train back to Guiyang (1.5 hrs). Fly out in the evening.`,
                tip: `The Zhenyuan night view is famous among Chinese tourists — the old town\'s lanterns and the illuminated temple cliffs reflecting in the Wuyang River. The best night photo is from the Zhusheng Bridge. Stay one night in Zhenyuan for this — it transforms after dark.`,
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
            href: '/guizhou/huangguoshu-libo-miao',
            label: 'Full Guizhou Route',
            description:
              "Add Huangguoshu Waterfall, Libo's karst rivers, and Miao villages in western Guizhou.",
            image: '/images/destinations/guizhou.webp',
            imageAlt: 'Huangguoshu Waterfall in Guizhou',
            days: '5-6 days',
          },
          {
            href: '/zhangjiajie/avatar-mountains',
            label: 'Zhangjiajie Avatar Mountains',
            description:
              "Continue east to Hunan's floating peaks — the scenery that inspired Avatar, 2 hours from Guizhou.",
            image: '/images/destinations/zhangjiajie.webp',
            imageAlt: 'Zhangjiajie sandstone pillars in mist',
            days: '3-4 days',
          },
          {
            href: '/yunnan/kunming-dali-lijiang-shangri-la',
            label: 'Classic Yunnan Route',
            description:
              'Go west to Yunnan — the ancient towns, Tibetan culture, and mountain landscapes of the classic backpacker trail.',
            image: '/images/destinations/yunnan.webp',
            imageAlt: 'Dali Old Town with Cangshan mountains',
            days: '8-12 days',
          },
        ]}
      />
    </div>
  );
}
