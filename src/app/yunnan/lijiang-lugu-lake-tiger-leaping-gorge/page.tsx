import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Lijiang, Lugu Lake & Tiger Leaping Gorge | BeforeChina',
  description:
    "A compact Yunnan route focused on Lijiang — the cobblestone old town, the emerald waters of Lugu Lake, and one of the world's deepest canyons.",
  alternates: { canonical: '/yunnan/lijiang-lugu-lake-tiger-leaping-gorge' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/yunnan/lijiang-lugu-lake-tiger-leaping-gorge',
    title: 'Lijiang, Lugu Lake & Tiger Leaping Gorge | BeforeChina',
    description:
      "A compact Yunnan route focused on Lijiang — the cobblestone old town, the emerald waters of Lugu Lake, and one of the world's deepest canyons.",
    images: [
      {
        url: '/images/destinations/yunnan.webp',
        width: 1200,
        height: 630,
        alt: 'Lugu Lake emerald waters with Mosuo wooden boats',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lijiang, Lugu Lake & Tiger Leaping Gorge | BeforeChina',
    description:
      "A compact Yunnan route focused on Lijiang — the cobblestone old town, the emerald waters of Lugu Lake, and one of the world's deepest canyons.",
    images: ['/images/destinations/yunnan.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Lijiang, Lugu Lake & Tiger Leaping Gorge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This journey typically takes 4-5 days. This shorter Yunnan route skips Kunming and Dali, flying directly into Lijiang and focusing on three highlights within a 4-5 day window. Lugu Lake straddles the Yunnan-Sichuan border and is home to th',
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
      name: 'Lijiang, Lugu Lake & Tiger Leaping Gorge',
      item: 'https://beforechina.com/yunnan/lijiang-lugu-lake-tiger-leaping-gorge',
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
          alt="Lugu Lake emerald waters with Mosuo wooden boats"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Yunnan &middot; 4-5 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Lijiang, Lugu Lake & Tiger Leaping Gorge
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
            A compact Yunnan route focused on Lijiang — the cobblestone old town, the emerald waters
            of Lugu Lake, and one of the world\'s deepest canyons.
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
                  'A compact Yunnan route focused on Lijiang — skip Kunming and Dali for a tighter loop.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Lijiang → Lugu Lake → Tiger Leaping Gorge',
                description:
                  "All within 4-5 hours' drive from Lijiang. Fly directly into Lijiang Airport (LJG).",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Lugu Lake, Tiger Leaping Gorge, Lijiang Old Town',
                description:
                  "Matriarchal Mosuo culture, one of the world's deepest canyons, and a UNESCO-listed old town.",
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
            This shorter Yunnan route skips Kunming and Dali, flying directly into Lijiang and
            focusing on three highlights within a 4-5 day window. Lugu Lake straddles the
            Yunnan-Sichuan border and is home to the Mosuo people, one of the world\'s last
            matriarchal societies. Tiger Leaping Gorge is one of the deepest river canyons on Earth.
            Lijiang ties it together as the base.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Lijiang Old Town',
                content: `Fly into Lijiang Sanyi Airport (LJG) — direct flights from Chengdu, Chongqing, Kunming, and major Chinese cities. Spend the day exploring Dayan Old Town: the cobblestone alleys, wooden Naxi houses, and the canals that crisscross the town. Climb to Wangu Tower for the sunset view. Evening: Naxi grilled fish and yak yoghurt in a courtyard restaurant.`,
                tip: `Lijiang Airport is 28 km south of town. The airport shuttle bus (¥20) runs every 30 minutes. A Didi costs ¥80-100.`,
              },
              {
                day: 'Days 2-3: Lugu Lake',
                content: `Take a 4-5 hour minibus from Lijiang to Lugu Lake (depart 7am, arrive by noon). Lugu Lake is at 2,685m, spanning the Yunnan-Sichuan border with crystal-clear emerald water. Spend the afternoon walking the lakeshore. Day 3: take a boat to Liwubi Island (the Mosuo people use traditional dugout canoes), visit a Mosuo family home to learn about the \'walking marriage\' tradition, and cycle the 50 km loop around the lake. Stay overnight in Luoshui Village on the Yunnan side.`,
                tip: `The 50 km lake loop takes 4-5 hours by e-bike (¥80 rental). The Sichuan side of the lake is less developed and more authentic. The \'Walking Marriage Bridge\' (走婚桥) on the Sichuan side is a wooden bridge through marshland — beautiful at sunset.`,
              },
              {
                day: 'Day 4: Tiger Leaping Gorge',
                content: `Return to Lijiang by minibus (4-5 hrs, leave Lugu Lake at 7am). Transfer directly to Qiaotou for Tiger Leaping Gorge. If you arrive by 2pm, hike the first section of the high trail to Naxi Guesthouse (2 hours, the gentlest section) for sunset views. Stay overnight at a guesthouse on the trail.`,
                tip: `If you\'re short on time, skip the hike and visit the lower Tiger Leaping Gorge scenic area (¥45) — a 1,000-step staircase down to the river. The rapids here are ferocious, and there is a viewing platform at the bottom.`,
              },
              {
                day: 'Day 5 (optional): Return to Lijiang',
                content: `Complete the hike or take the bus back to Lijiang. Afternoon: Shuhe Ancient Town or Baisha murals before your flight out.`,
                tip: `If flying out on Day 5, book an evening flight. The drive from Tiger Leaping Gorge back to Lijiang Airport takes 2.5 hours.`,
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
            label: 'Full Yunnan Route',
            description: 'Add Kunming, Dali, and Shangri-La to this trip.',
            image: '/images/destinations/yunnan.webp',
            imageAlt: 'Lijiang old town canals',
            days: '7-8 days',
          },
          {
            href: '/sichuan/chengdu-in-depth',
            label: 'Chengdu In Depth',
            description: 'Fly from Lijiang to Chengdu for pandas and hot pot.',
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Chengdu panda',
            days: '3-4 days',
          },
          {
            href: '/guangxi/guilin-yangshuo-lijiang',
            label: 'Guilin & Yangshuo',
            description: 'Another iconic Chinese landscape in Guangxi.',
            image: '/images/destinations/guangxi.webp',
            imageAlt: 'Guilin karst peaks',
            days: '3-4 days',
          },
        ]}
      />
    </div>
  );
}
