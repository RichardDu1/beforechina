import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Shanghai In Depth | BeforeChina',
  description:
    "A proper guide to China's most international city — not just the Bund, but the French Concession backstreets, the 1930s lilong lanes, and where to eat soup dumplings.",
  alternates: { canonical: '/golden-triangle/shanghai-in-depth' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/golden-triangle/shanghai-in-depth',
    title: 'Shanghai In Depth | BeforeChina',
    description:
      "A proper guide to China's most international city — not just the Bund, but the French Concession backstreets, the 1930s lilong lanes, and where to eat soup dumplings.",
    images: [
      {
        url: '/images/destinations/yangtze-delta.webp',
        width: 1200,
        height: 630,
        alt: 'Shanghai Pudong skyline at night across the Huangpu River',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shanghai In Depth | BeforeChina',
    description:
      "A proper guide to China's most international city — not just the Bund, but the French Concession backstreets, the 1930s lilong lanes, and where to eat soup dumplings.",
    images: ['/images/destinations/yangtze-delta.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Shanghai In Depth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 3–4 days. Shanghai is China's most cosmopolitan city — a 1920s 'Paris of the East' that now hosts the world's second-tallest building. But the real Shanghai is in the details: art deco lobbies, lilong lane hous",
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
      name: 'Shanghai In Depth',
      item: 'https://beforechina.com/golden-triangle/shanghai-in-depth',
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
          src="/images/destinations/yangtze-delta.webp"
          alt="Shanghai Pudong skyline at night across the Huangpu River"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Shanghai &middot; 3–4 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Shanghai In Depth
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
            A proper guide to China\'s most international city — not just the Bund, but the French
            Concession backstreets, the 1930s lilong lanes, and where to eat soup dumplings.
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
                title: '3–4 Days',
                description:
                  'Enough time to go beyond the skyline — into the art deco lobbies and lilong lane houses.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Shanghai',
                description:
                  "China's most cosmopolitan city — the 1920s 'Paris of the East' meets the world's second-tallest building.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'The Bund, French Concession, Soup Dumplings',
                description:
                  'Colonial grandeur, tree-lined backstreets, and the best xiaolongbao of your life.',
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
            Shanghai is China\'s most cosmopolitan city — a 1920s \'Paris of the East\' that now
            hosts the world\'s second-tallest building. But the real Shanghai is in the details: art
            deco lobbies, lilong lane houses, and soup dumpling shops where the owner has been
            folding xiaolongbao for 40 years.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: The Bund & Pudong',
                content: `Start at the Bund at golden hour — the colonial buildings on one side, Pudong\'s skyline on the other. Walk south to the Old City (Yu Garden, City God Temple). Evening: Dinner at Jia Jia Tang Bao for the best soup dumplings in Shanghai, then a drink at a rooftop bar on the Bund (Flair at Ritz-Carlton or Vue Bar at Hyatt on the Bund).`,
                tip: `Skip the Bund Sightseeing Tunnel — it\'s an overpriced 3-minute ride in a slow cart through a tunnel with coloured lights. Take the public ferry from Jinling East Road to Dongchang Road instead for the same river crossing with an open-air view.`,
              },
              {
                day: 'Day 2: French Concession',
                content: `Spend the morning walking Fuxing Road and Wukang Road — the French Concession at its best. Stop at Manner Coffee (China\'s answer to Blue Bottle), browse the boutiques on Anfu Road, and have lunch at Din Tai Fung or a local noodle shop. Afternoon: Shanghai Propaganda Poster Art Centre (incredible collection of Mao-era posters) or the Power Station of Art in a converted power plant.`,
                tip: `Wukang Road and Anfu Road are influencer central on weekends — go on a weekday morning for a much calmer experience. The best buildings are Wukang Mansion (Normandie Apartments, 1924) and the Moller Villa.`,
              },
              {
                day: 'Day 3: Water Town or Art',
                content: `Option A: Day trip to Zhujiajiao Water Town — 1 hour by metro (Line 17). Canals, stone bridges, and a quieter side of Shanghai. Option B: Stay in the city — Long Museum (West Bund) for contemporary art, then the former Expo 2010 site along the Huangpu River. Evening: Cocktails at Speak Low (hidden bookshelf entrance, ranked among Asia\'s 50 Best Bars).`,
                tip: `Zhujiajiao is the most accessible water town from Shanghai. Go early (before 10am) to avoid the tour groups. A gondola ride through the canals is touristy but worth it for the photos.`,
              },
            ].map((stop, i) => (
              <div
                key={stop.day}
                style={{
                  padding: '40px 0',
                  borderBottom: i < 2 ? '1px solid var(--border-color)' : 'none',
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
            href: '/yangtze-delta/shanghai-hangzhou-suzhou',
            label: 'Shanghai, Hangzhou & Suzhou',
            description: 'Add the West Lake and classical gardens.',
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Shanghai skyline',
            days: '6–8 days',
          },
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: 'The full Golden Triangle route.',
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City',
            days: '8–10 days',
          },
          {
            href: '/south-china/hong-kong-macau',
            label: 'Hong Kong & Macau',
            description: 'Continue south to Victoria Harbour and Portuguese egg tarts.',
            image: '/images/destinations/south-china.webp',
            imageAlt: 'Hong Kong skyline',
            days: '5–7 days',
          },
        ]}
      />
    </div>
  );
}
