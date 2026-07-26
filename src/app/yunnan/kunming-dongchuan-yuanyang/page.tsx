import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Dongchuan Red Land & Yuanyang Rice Terraces | BeforeChina',
  description:
    "A photographer's dream — the iron-red soils of Dongchuan and the mirror-like flooded terraces of Yuanyang, two of China's most photogenic landscapes.",
  alternates: { canonical: '/yunnan/kunming-dongchuan-yuanyang' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/yunnan/kunming-dongchuan-yuanyang',
    title: 'Dongchuan Red Land & Yuanyang Rice Terraces | BeforeChina',
    description:
      "A photographer's dream — the iron-red soils of Dongchuan and the mirror-like flooded terraces of Yuanyang, two of China's most photogenic landscapes.",
    images: [
      {
        url: '/images/destinations/yunnan.webp',
        width: 1200,
        height: 630,
        alt: 'Yuanyang rice terraces at sunrise with mist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dongchuan Red Land & Yuanyang Rice Terraces | BeforeChina',
    description:
      "A photographer's dream — the iron-red soils of Dongchuan and the mirror-like flooded terraces of Yuanyang, two of China's most photogenic landscapes.",
    images: ['/images/destinations/yunnan.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Dongchuan Red Land & Yuanyang Rice Terraces?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 5-6 days. This route is built for photographers. Dongchuan's Red Land, 250 km northeast of Kunming, has iron-rich soil that glows crimson at sunrise. Yuanyang's rice terraces, 330 km south, have been carved int",
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
      name: 'Dongchuan Red Land & Yuanyang Rice Terraces',
      item: 'https://beforechina.com/yunnan/kunming-dongchuan-yuanyang',
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
          src="/images/destinations/yunnan.webp"
          alt="Yuanyang rice terraces at sunrise with mist"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Yunnan &middot; 5-6 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Dongchuan Red Land & Yuanyang Rice Terraces
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
            A photographer\'s dream — the iron-red soils of Dongchuan and the mirror-like flooded
            terraces of Yuanyang, two of China\'s most photogenic landscapes.
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
                description: "Two of China's most photogenic landscapes — built for photographers.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Kunming → Dongchuan → Yuanyang',
                description:
                  'Dongchuan is 250 km northeast of Kunming; Yuanyang is 330 km south. Both require a private car.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Dongchuan Red Land, Yuanyang Rice Terraces',
                description:
                  'Iron-red soils at sunrise and 1,300-year-old mirror terraces carved by the Hani people.',
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
            This route is built for photographers. Dongchuan\'s Red Land, 250 km northeast of
            Kunming, has iron-rich soil that glows crimson at sunrise. Yuanyang\'s rice terraces,
            330 km south, have been carved into the Ailao Mountains by the Hani people over 1,300
            years — 3,000 steps from river to summit, each one flooded and reflecting the sky like a
            giant\'s staircase of mirrors.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Kunming → Dongchuan',
                content: `Drive 3.5 hours from Kunming to Dongchuan Red Land (东川红土地). The soil here contains iron oxide that turns brilliant red after rain. Arrive by mid-afternoon and photograph the sunset at Luoxiagou (Falling Sun Valley) — the red fields, green barley, and golden buckwheat create colour blocks like a painter\'s palette. Stay at a local farmhouse guesthouse.`,
                tip: `The best Dongchuan photos are taken 1-2 days after rain, when the iron oxide is most vivid. Check the weather before making the trip — if it\'s been dry for a week, the colours are muted.`,
              },
              {
                day: 'Day 2: Dongchuan → Kunming',
                content: `Sunrise at Damakan (the most famous viewpoint — a lone tree silhouetted against the red hills). Morning: photograph the red land from Jinxiuyuan and Qicaipo viewpoints. The light is best from 7-10am. Drive back to Kunming by afternoon. Evening: overnight train or rest before tomorrow\'s journey to Yuanyang.`,
                tip: `Dongchuan\'s guesthouses are simple farmhouse stays — bring toilet paper and hand sanitiser. The farmhouse food is excellent: free-range chicken, wild mushrooms, and homegrown vegetables.`,
              },
              {
                day: 'Day 3: Kunming → Yuanyang',
                content: `Drive 5-6 hours from Kunming to Yuanyang Rice Terraces. The road is winding — the terraces are carved into mountains at 1,200-2,000m. Arrive by late afternoon and photograph sunset at Bada scenic area — this is the classic wide-angle view of thousands of terraces cascading down the mountainside. Stay in Xinjie Town or at a guesthouse in Duoyishu village.`,
                tip: `The Yuanyang entrance ticket is valid for 3 days and covers all viewpoints. Buy it at the entrance gate 30 km before Xinjie — you cannot buy tickets at the viewpoints themselves.`,
              },
              {
                day: 'Day 4: Yuanyang Terraces',
                content: `Sunrise at Duoyishu — the most famous sunrise spot in Yuanyang. Arrive by 6am (the platform fills up by 6:30am) to watch the sun rise over the terraces as mist rises from the valley. Morning: Laohuzui (Tiger Mouth) — steep terraces plunging 1,000m into the valley. Afternoon: Qingkou Hani Village — a traditional Hani mushroom-shaped house village. Sunset: either Bada again or Longshuba depending on the light.`,
                tip: `Yuanyang sunrise in January-March is crowded with Chinese photographers — tripods in every direction. The platform at Duoyishu has two levels; the upper level fills first. Go to the lower level for a less obstructed view.`,
              },
              {
                day: 'Day 5: Yuanyang → Kunming',
                content: `Final sunrise at a quiet viewpoint (Shengcun or Mengnong). Visit a morning market in Xinjie or Laomeng — Hani, Yi, and Miao villagers in traditional clothing trading produce, textiles, and handicrafts. Drive back to Kunming (5-6 hrs). Fly out in the evening or stay overnight in Kunming.`,
                tip: `The Hani market in Laomeng (Thursday) is the most authentic. Villagers walk 2-3 hours from mountain villages to trade. The textiles — indigo-dyed hemp — make excellent souvenirs.`,
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
            href: '/yunnan/kunming-dali-lijiang-shangri-la',
            label: 'Classic Yunnan Route',
            description: 'Combine with the main Yunnan backpacker trail.',
            image: '/images/destinations/yunnan.webp',
            imageAlt: 'Lijiang old town',
            days: '7-8 days',
          },
          {
            href: '/sichuan/chengdu-jiuzhaigou-huanglong',
            label: 'Chengdu & Jiuzhaigou',
            description: "Another photographer's paradise in Sichuan.",
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Jiuzhaigou turquoise lake',
            days: '5-6 days',
          },
          {
            href: '/guangxi/guilin-yangshuo-lijiang',
            label: 'Guilin & Yangshuo',
            description: "Karst peaks — one of the world's most photogenic landscapes.",
            image: '/images/destinations/guangxi.webp',
            imageAlt: 'Guilin karst peaks',
            days: '3-4 days',
          },
        ]}
      />
    </div>
  );
}
