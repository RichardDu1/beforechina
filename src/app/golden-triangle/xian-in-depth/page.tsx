import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Xi'an In Depth | BeforeChina",
  description:
    "Beyond the warriors — cycle the 14 km city wall, eat your way through the Muslim Quarter, and discover why Xi'an was the start of the Silk Road.",
  alternates: { canonical: '/golden-triangle/xian-in-depth' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/golden-triangle/xian-in-depth',
    title: "Xi'an In Depth | BeforeChina",
    description:
      "Beyond the warriors — cycle the 14 km city wall, eat your way through the Muslim Quarter, and discover why Xi'an was the start of the Silk Road.",
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
    title: "Xi'an In Depth | BeforeChina",
    description:
      "Beyond the warriors — cycle the 14 km city wall, eat your way through the Muslim Quarter, and discover why Xi'an was the start of the Silk Road.",
    images: ['/images/destinations/ancient-capitals.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is the best way to experience Xi'an In Depth?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 3–4 days. Xi'an was China's capital for 1,100 years across 13 dynasties. The Terracotta Warriors are the headline, but the 600-year-old city wall, the Muslim Quarter's street food, and the option to climb Huash",
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
      name: "Xi'an In Depth",
      item: 'https://beforechina.com/golden-triangle/xian-in-depth',
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
          <Kicker>Xi\'an &middot; 3–4 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Xi\'an In Depth
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
            Beyond the warriors — cycle the 14 km city wall, eat your way through the Muslim
            Quarter, and discover why Xi\'an was the start of the Silk Road.
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
                  "The perfect deep dive into China's ancient capital — enough time for the warriors and the wall.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: "Xi'an",
                description:
                  "China's capital for 1,100 years across 13 dynasties — the eastern terminus of the Silk Road.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Terracotta Warriors, City Wall, Muslim Quarter',
                description:
                  "One of the world's greatest archaeological discoveries, plus the best street food in China.",
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
            Xi\'an was China\'s capital for 1,100 years across 13 dynasties. The Terracotta Warriors
            are the headline, but the 600-year-old city wall, the Muslim Quarter\'s street food, and
            the option to climb Huashan (one of China\'s five sacred mountains) make it worth 3-4
            days.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: The Warriors',
                content: `Terracotta Warriors Museum — hire a guide at the entrance. Visit the pits in order: Pit 1 (the famous one, 6,000 warriors), Pit 2 (cavalry and archers), Pit 3 (command centre). The bronze chariot exhibition hall is excellent. Afternoon: Huaqing Hot Springs at the foot of Mount Li.`,
                tip: `Go to Pit 1 last, not first. The crowd rushes to Pit 1 immediately. Do Pits 2 and 3 first for a much calmer experience, then Pit 1 when the morning rush thins around 11am.`,
              },
              {
                day: 'Day 2: City Wall & Muslim Quarter',
                content: `Rent a bike on the city wall and cycle the full 14 km loop. Takes 90 minutes at a relaxed pace. After lunch, the Great Mosque — a 1,300-year-old mosque built in Chinese temple style. Evening: Muslim Quarter food crawl — lamb skewers, biangbiang noodles, yangrou paomo (lamb soup with crumbled flatbread).`,
                tip: `The Muslim Quarter is touristy at the entrance (Beiyuanmen Street), but gets more authentic as you walk deeper. Head to Sajinqiao for the real local food stalls.`,
              },
              {
                day: 'Day 3: Huashan or History',
                content: `Option A: Huashan day trip — one of China\'s five sacred mountains, with a via ferrata-style cliffside plank walk (the \'Plank Walk in the Sky\'). 30 minutes by high-speed train from Xi\'an North. Option B (easier): Shaanxi History Museum (book 3 days ahead on WeChat), Big Wild Goose Pagoda, and Tang Paradise in the evening.`,
                tip: `If you do Huashan, take the cable car up the West Peak and down the North Peak. The Plank Walk is genuinely scary — there is a harness but the drop is 700m vertical onto a narrow wooden plank. Not for anyone with a fear of heights.`,
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
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: 'Add Beijing and Shanghai for the full Golden Triangle.',
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8–10 days',
          },
          {
            href: '/ancient-capitals/xian-luoyang-kaifeng',
            label: 'Three Ancient Capitals',
            description: 'Continue east to Luoyang and Kaifeng.',
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Xian city wall at sunset',
            days: '6–8 days',
          },
          {
            href: '/silk-road/xian-lanzhou-dunhuang',
            label: "Silk Road: Xi'an to Dunhuang",
            description: 'Follow the Silk Road west into the desert.',
            image: '/images/destinations/silk-road.webp',
            imageAlt: 'Camel caravan in Dunhuang dunes',
            days: '7–10 days',
          },
        ]}
      />
    </div>
  );
}
