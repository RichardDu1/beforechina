import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Xishuangbanna: China's Tropical Southeast Asia | BeforeChina",
  description:
    "Southern Yunnan's Dai heartland — tropical rainforest, wild elephants, Mekong River sunsets, and temples that look more like Thailand than China.",
  alternates: { canonical: '/yunnan/xishuangbanna-tropical' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/yunnan/xishuangbanna-tropical',
    title: "Xishuangbanna: China's Tropical Southeast Asia | BeforeChina",
    description:
      "Southern Yunnan's Dai heartland — tropical rainforest, wild elephants, Mekong River sunsets, and temples that look more like Thailand than China.",
    images: [
      {
        url: '/images/destinations/yunnan.webp',
        width: 1200,
        height: 630,
        alt: 'Xishuangbanna tropical rainforest and Mekong River',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Xishuangbanna: China's Tropical Southeast Asia | BeforeChina",
    description:
      "Southern Yunnan's Dai heartland — tropical rainforest, wild elephants, Mekong River sunsets, and temples that look more like Thailand than China.",
    images: ['/images/destinations/yunnan.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is the best way to experience Xishuangbanna: China's Tropical Southeast Asia?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 3-4 days. Xishuangbanna (西双版纳) sits at 21°N — the same latitude as Hawaii and at China's southern tip bordering Laos and Myanmar. The Dai people have lived here for 2,000 years, and their culture — Theravada Bu",
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
      name: "Xishuangbanna: China's Tropical Southeast Asia",
      item: 'https://beforechina.com/yunnan/xishuangbanna-tropical',
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
          alt="Xishuangbanna tropical rainforest and Mekong River"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Yunnan &middot; 3-4 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Xishuangbanna: China\'s Tropical Southeast Asia
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
            Southern Yunnan\'s Dai heartland — tropical rainforest, wild elephants, Mekong River
            sunsets, and temples that look more like Thailand than China.
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
                title: '3-4 Days',
                description: 'A tropical escape in southern Yunnan — the same latitude as Hawaii.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Jinghong → Menglun → Mengla',
                description:
                  "At China's southern tip bordering Laos and Myanmar. Fly into Jinghong (JHG).",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Tropical Rainforest, Wild Elephants, Dai Culture',
                description:
                  'Theravada Buddhism, stilt houses, and spicy-sour food — more Southeast Asia than Han China.',
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
            Xishuangbanna (西双版纳) sits at 21°N — the same latitude as Hawaii and at China\'s
            southern tip bordering Laos and Myanmar. The Dai people have lived here for 2,000 years,
            and their culture — Theravada Buddhism, stilt houses, spicy-sour food — has more in
            common with Thailand and Laos than Han China. This is where Chinese tourists go for a
            \'tropical paradise\' experience, but Western tourists have barely discovered it.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Jinghong',
                content: `Fly into Xishuangbanna Gasa Airport (JHG) — direct flights from Kunming (1 hr), Chengdu, Chongqing, and major cities. Jinghong is the capital and feels more like a Southeast Asian town than a Chinese city: palm-lined streets, golden-roofed Dai temples, and the Mekong (called Lancang here) flowing through. Visit Manting Park — a former Dai royal garden with a temple and daily elephant show — and Gaozhuang Night Market in the evening for Dai barbecue and papaya salad.`,
                tip: `Gaozhuang Night Market is massive — one of Yunnan\'s best night markets. Try the grilled Mekong fish, Dai-style papaya salad (som tam), and sticky rice in bamboo tubes. The market runs from 6pm to midnight.`,
              },
              {
                day: 'Day 2: Wild Elephant Valley & Dai Villages',
                content: `Morning: Wild Elephant Valley (野象谷, 40 km north of Jinghong) — a nature reserve protecting Asia\'s last wild elephants. There\'s a 2 km elevated walkway through the canopy, and if you\'re lucky (best Feb-March), wild elephants come to the river to drink. There\'s also an elephant show (the ethics are debatable, but the wild encounters are genuine). Afternoon: visit a Dai village — Manzhang Village or Ganlanba — to see traditional stilt houses, Dai weaving, and taste Dai cuisine.`,
                tip: `Wild elephants are most active at dawn and dusk. Arrive at 8am when the park opens for the best chance of sightings. The walkway is wheelchair-accessible and takes about 2 hours.`,
              },
              {
                day: 'Day 3: Menglun Tropical Botanical Garden',
                content: `Drive 1.5 hours east to the Menglun Tropical Botanical Garden — China\'s largest botanical garden, covering 900 hectares on a Mekong island. It has 13,000 plant species including a palm garden, orchid house, and a \'vine garden\' where 100m-long rattan vines hang from 40m trees. It\'s genuinely world-class. Spend 3-4 hours walking. Afternoon: return to Jinghong via Mengyang for a tea tasting at a Puer tea plantation.`,
                tip: `The botanical garden has an entrance fee — worth every minute. The best sections are the Palm Garden and the Tropical Rainforest section. A golf cart tour covers the highlights in 2 hours if you\'re short on time.`,
              },
              {
                day: 'Day 4 (optional): Mengla & Border',
                content: `Drive 3 hours to Mengla on the Laos border — the tropical rainforest here is the most intact in China. Visit the Wangtianshu (望天树) scenic area — a canopy walkway 36m above the forest floor suspended between towering Parashorea trees. It\'s the highest tree-top walkway in Asia. Fly out from Jinghong in the evening.`,
                tip: `You can technically cross into Laos at the Mohan-Boten border (open 8am-6pm) — but you need a Laos visa in advance and onward transport on the Laos side is limited. Most visitors just visit the Chinese border area.`,
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
            href: '/yunnan/kunming-dali-lijiang-shangri-la',
            label: 'Classic Yunnan Route',
            description: 'Combine with the main Yunnan backpacker trail.',
            image: '/images/destinations/yunnan.webp',
            imageAlt: 'Lijiang old town',
            days: '7-8 days',
          },
          {
            href: '/south-china/sanya-hainan',
            label: 'Sanya & Hainan',
            description: "Another tropical destination: China's Hawaii island.",
            image: '/images/destinations/south-china.webp',
            imageAlt: 'Sanya beach',
            days: '5-7 days',
          },
          {
            href: '/guangxi/guilin-yangshuo-lijiang',
            label: 'Guilin & Yangshuo',
            description: 'Karst peaks and rivers — another iconic Chinese landscape.',
            image: '/images/destinations/guangxi.webp',
            imageAlt: 'Guilin karst peaks',
            days: '3-4 days',
          },
        ]}
      />
    </div>
  );
}
