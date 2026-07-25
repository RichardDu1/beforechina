import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Beijing & Xi'an | BeforeChina",
  description:
    "Seven days split between Beijing's imperial grandeur and Xi'an's Silk Road history — less rushed than the full Golden Triangle, with time for the details.",
  alternates: { canonical: '/golden-triangle/beijing-xian' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/golden-triangle/beijing-xian',
    title: "Beijing & Xi'an | BeforeChina",
    description:
      "Seven days split between Beijing's imperial grandeur and Xi'an's Silk Road history — less rushed than the full Golden Triangle, with time for the details.",
    images: [
      {
        url: '/images/destinations/ancient-capitals.webp',
        width: 1200,
        height: 630,
        alt: 'Xian city wall and watchtowers at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Beijing & Xi'an | BeforeChina",
    description:
      "Seven days split between Beijing's imperial grandeur and Xi'an's Silk Road history — less rushed than the full Golden Triangle, with time for the details.",
    images: ['/images/destinations/ancient-capitals.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is the best way to experience Beijing & Xi'an?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 6–7 days. The full Golden Triangle is the standard recommendation, but 8-10 days is a lot of time. This 6-7 day version drops Shanghai and goes deep on China's two greatest ancient capitals. Beijing brings the ",
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
      name: "Beijing & Xi'an",
      item: 'https://beforechina.com/golden-triangle/beijing-xian',
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
          src="/images/destinations/ancient-capitals.webp"
          alt="Xian city wall and watchtowers at sunset"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Ancient Capitals &middot; 6–7 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Beijing & Xi\'an
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
            Seven days split between Beijing\'s imperial grandeur and Xi\'an\'s Silk Road history —
            less rushed than the full Golden Triangle, with time for the details.
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
                  'Less rushed than the full Golden Triangle — time to go deep on two great capitals.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: "Beijing → Xi'an",
                description:
                  'Connected by a 4.5-hour high-speed train. Both cities have international airports.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Two Great Ancient Capitals',
                description:
                  "Beijing brings the Ming and Qing dynasties, Xi'an brings the Han and Tang — 2,000 years of history.",
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
            The full Golden Triangle is the standard recommendation, but 8-10 days is a lot of time.
            This 6-7 day version drops Shanghai and goes deep on China\'s two greatest ancient
            capitals. Beijing brings the Ming and Qing dynasties, Xi\'an brings the Han and Tang —
            together they cover 2,000 years of Chinese imperial history.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Days 1–3: Beijing',
                content: `Forbidden City, Mutianyu Great Wall, Temple of Heaven, Summer Palace, and a hutong evening. See the Beijing In Depth page for full details.`,
                tip: `With only 3 days, drop 798 Art District and focus on the imperial sights. The Lama Temple is worth squeezing in if you have a free morning.`,
              },
              {
                day: "Days 4–6: Xi'an",
                content: `Take the 4.5-hour high-speed train from Beijing West to Xi\'an North. Terracotta Warriors, city wall bike ride, Muslim Quarter food crawl. If you have a 7th day, add Huashan. See the Xi\'an In Depth page for full details.`,
                tip: `The Beijing West → Xi\'an North train departs hourly from 6:30am to 5:30pm. Book the 8am train to arrive by 12:30pm and have the afternoon for the city wall.`,
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
            description: 'Add Shanghai for the full Golden Triangle experience.',
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8–10 days',
          },
          {
            href: '/ancient-capitals/xian-luoyang-kaifeng',
            label: 'Three Ancient Capitals',
            description: "Continue from Xi'an to Luoyang and Kaifeng.",
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Xian city wall at sunset',
            days: '6–8 days',
          },
          {
            href: '/golden-triangle/beijing-shanghai',
            label: 'Beijing & Shanghai',
            description: "Swap Xi'an for Shanghai — imperial China meets the future.",
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Shanghai skyline',
            days: '6–7 days',
          },
        ]}
      />
    </div>
  );
}
