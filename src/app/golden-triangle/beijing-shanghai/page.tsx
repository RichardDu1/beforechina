import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Beijing & Shanghai | BeforeChina',
  description:
    "Six days split between 3,000-year-old Beijing and 21st-century Shanghai — the Forbidden City to the world's second-tallest skyscraper.",
  alternates: { canonical: '/golden-triangle/beijing-shanghai' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/golden-triangle/beijing-shanghai',
    title: 'Beijing & Shanghai | BeforeChina',
    description:
      "Six days split between 3,000-year-old Beijing and 21st-century Shanghai — the Forbidden City to the world's second-tallest skyscraper.",
    images: [
      {
        url: '/images/destinations/yangtze-delta.webp',
        width: 1200,
        height: 630,
        alt: 'Shanghai Pudong skyline at night',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beijing & Shanghai | BeforeChina',
    description:
      "Six days split between 3,000-year-old Beijing and 21st-century Shanghai — the Forbidden City to the world's second-tallest skyscraper.",
    images: ['/images/destinations/yangtze-delta.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Beijing & Shanghai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 6–7 days. This route skips Xi'an in favour of a sharper Beijing-Shanghai contrast — the ancient and the futuristic in one trip. You see China's imperial past and its present-day ambition, connected by a 4.5-hou",
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
      name: 'Beijing & Shanghai',
      item: 'https://beforechina.com/golden-triangle/beijing-shanghai',
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
          alt="Shanghai Pudong skyline at night"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Old & New &middot; 6–7 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Beijing & Shanghai
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
            Six days split between 3,000-year-old Beijing and 21st-century Shanghai — the Forbidden
            City to the world\'s second-tallest skyscraper.
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
                title: '6–7 Days',
                description:
                  'The sharpest contrast in China — ancient capital to futuristic metropolis.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Beijing → Shanghai',
                description:
                  'Connected by a 4.5-hour high-speed train — faster than flying door-to-door.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Forbidden City to the Bund',
                description:
                  "From 3,000-year-old imperial palaces to the world's second-tallest building.",
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
            This route skips Xi\'an in favour of a sharper Beijing-Shanghai contrast — the ancient
            and the futuristic in one trip. You see China\'s imperial past and its present-day
            ambition, connected by a 4.5-hour high-speed train.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Days 1–3: Beijing',
                content: `Forbidden City, Mutianyu Great Wall, Temple of Heaven, and a hutong evening. See the Beijing In Depth page for full details.`,
                tip: `The Beijing → Shanghai high-speed train departs from Beijing South. The 4.5-hour trains (G1, G3, G5, G7) are the fastest — book these specifically.`,
              },
              {
                day: 'Days 4–6: Shanghai',
                content: `Bund at golden hour, French Concession, soup dumplings, and a day trip to Zhujiajiao Water Town. See the Shanghai In Depth page for full details.`,
                tip: `The G1 train (Beijing South → Shanghai Hongqiao) departs at 7am, arrives 11:29am — you get a full afternoon in Shanghai. This is the best option for maximising your time.`,
              },
            ].map((stop, i) => (
              <div
                key={stop.day}
                style={{
                  padding: '40px 0',
                  borderBottom: i < 1 ? '1px solid var(--border-color)' : 'none',
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
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: "Add Xi'an for the full Golden Triangle.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City',
            days: '8–10 days',
          },
          {
            href: '/yangtze-delta/shanghai-hangzhou-suzhou',
            label: 'Shanghai, Hangzhou & Suzhou',
            description: 'Add the West Lake and classical gardens to your Shanghai stay.',
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Shanghai skyline',
            days: '6–8 days',
          },
          {
            href: '/golden-triangle/beijing-xian',
            label: "Beijing & Xi'an",
            description: "Swap Shanghai for Xi'an — two ancient capitals.",
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Xian city wall',
            days: '6–7 days',
          },
        ]}
      />
    </div>
  );
}
