import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Beijing, Xi'an & Shanghai | BeforeChina",
  description:
    "The essential first-timer's route through China's three iconic cities — imperial Beijing, ancient Xi'an, and futuristic Shanghai — connected by high-speed rail.",
  alternates: { canonical: '/golden-triangle/beijing-xian-shanghai' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/golden-triangle/beijing-xian-shanghai',
    title: "Beijing, Xi'an & Shanghai | BeforeChina",
    description:
      "The essential first-timer's route through China's three iconic cities — imperial Beijing, ancient Xi'an, and futuristic Shanghai — connected by high-speed rail.",
    images: [
      {
        url: '/images/destinations/golden-triangle.webp',
        width: 1200,
        height: 630,
        alt: 'The Forbidden City palace complex in Beijing at golden hour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Beijing, Xi'an & Shanghai | BeforeChina",
    description:
      "The essential first-timer's route through China's three iconic cities — imperial Beijing, ancient Xi'an, and futuristic Shanghai — connected by high-speed rail.",
    images: ['/images/destinations/golden-triangle.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is the best way to experience Beijing, Xi'an & Shanghai?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 8–10 days. This is the classic Golden Triangle — the route 80% of first-time visitors take. It covers China's three most iconic cities: Beijing's Forbidden City and Great Wall, Xi'an's Terracotta Warriors, and S",
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
      name: "Beijing, Xi'an & Shanghai",
      item: 'https://beforechina.com/golden-triangle/beijing-xian-shanghai',
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
          src="/images/destinations/golden-triangle.webp"
          alt="The Forbidden City palace complex in Beijing at golden hour"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Golden Triangle &middot; 8–10 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Beijing, Xi\'an & Shanghai
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
            The essential first-timer\'s route through China\'s three iconic cities — imperial
            Beijing, ancient Xi\'an, and futuristic Shanghai — connected by high-speed rail.
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
                title: '8–10 Days',
                description:
                  'The perfect pace for three iconic cities — enough time to go deep without feeling rushed.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: "Beijing → Xi'an → Shanghai",
                description:
                  'Connected by 4–6 hour high-speed trains. All three cities have international airports.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Forbidden City, Terracotta Warriors, The Bund',
                description:
                  "China's three most iconic sights in a single journey — 2,000 years of history.",
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
            This is the classic Golden Triangle — the route 80% of first-time visitors take. It
            covers China\'s three most iconic cities: Beijing\'s Forbidden City and Great Wall,
            Xi\'an\'s Terracotta Warriors, and Shanghai\'s futuristic skyline. All three cities are
            connected by 4-6 hour high-speed trains, making logistics straightforward.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Days 1–3: Beijing',
                content: `Fly into Beijing Capital (PEK) or Daxing (PKX). Day 1: Tiananmen Square and the Forbidden City (book tickets 7 days ahead on WeChat). Day 2: Mutianyu Great Wall — less crowded than Badaling, with a toboggan ride down. Day 3: Temple of Heaven at sunrise for the pensioners\' tai chi, then the hutongs near Gulou for lunch. Evening: Peking duck at Dadong or Siji Minfu.`,
                tip: `Skip Badaling. Mutianyu has better views, fewer crowds, and the toboggan slide down is genuinely fun. Book a private driver through your hotel (~¥600 round trip).`,
              },
              {
                day: "Days 4–5: Xi'an",
                content: `Take the 4.5-hour high-speed train from Beijing West to Xi\'an North (¥550). Day 4: Terracotta Warriors — go early (8:30am) to beat the crowds. The museum is 40 km east of the city. Day 5: Xi\'an City Wall — rent a bike and cycle the full 14 km loop. Evening: Muslim Quarter for lamb skewers, biangbiang noodles, and persimmon cakes.`,
                tip: `Hire a guide at the Terracotta Warriors (official guides at the entrance, ~¥200). The context they provide transforms the experience from \'piles of clay statues\' to \'holy crap, this is 2,200 years old.\'`,
              },
              {
                day: 'Days 6–8: Shanghai',
                content: `Take the 6-hour high-speed train from Xi\'an to Shanghai (¥670). Day 6: The Bund at dusk for the Pudong skyline. Walk Nanjing Road to People\'s Square. Day 7: Former French Concession — Fuxing Road, Tianzifang, and a coffee at Manner. Day 8: Shanghai Museum or a day trip to Zhujiajiao Water Town (1 hr by metro). Fly out from Pudong (PVG).`,
                tip: `The Bund is best at golden hour (5–6pm) when the colonial buildings glow. Skip the Bund sightseeing tunnel — it is a tourist trap. Take the ¥2 ferry across the Huangpu instead.`,
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
            description: 'Add water towns and classical gardens to your Shanghai stay.',
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Shanghai Pudong skyline',
            days: '6–8 days',
          },
          {
            href: '/ancient-capitals/xian-luoyang-kaifeng',
            label: 'Three Ancient Capitals',
            description: 'Extend your journey through 3,000 years of imperial history.',
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Xian city wall at sunset',
            days: '6–8 days',
          },
          {
            href: '/golden-triangle/beijing-in-depth',
            label: 'Beijing In-Depth',
            description: "Spend more time in China's 3,000-year capital.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '4–5 days',
          },
        ]}
      />
    </div>
  );
}
