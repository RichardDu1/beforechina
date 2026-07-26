import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Chongqing, Wulong & Dazu Rock Carvings | BeforeChina',
  description:
    "China's most cyberpunk city, a natural limestone bridge formation that looks like Pandora, and 50,000 Buddhist statues carved into cliffs.",
  alternates: { canonical: '/sichuan/chongqing-wulong-dazu' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/sichuan/chongqing-wulong-dazu',
    title: 'Chongqing, Wulong & Dazu Rock Carvings | BeforeChina',
    description:
      "China's most cyberpunk city, a natural limestone bridge formation that looks like Pandora, and 50,000 Buddhist statues carved into cliffs.",
    images: [
      {
        url: '/images/destinations/sichuan.webp',
        width: 1200,
        height: 630,
        alt: 'Chongqing skyline and river confluence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chongqing, Wulong & Dazu Rock Carvings | BeforeChina',
    description:
      "China's most cyberpunk city, a natural limestone bridge formation that looks like Pandora, and 50,000 Buddhist statues carved into cliffs.",
    images: ['/images/destinations/sichuan.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Chongqing, Wulong & Dazu Rock Carvings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 3-4 days. Chongqing is China's most dramatic city — built on steep hills at the confluence of the Yangtze and Jialing rivers, with a skyline that rivals Hong Kong and a metro line that runs through a residentia",
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
      name: 'Chongqing, Wulong & Dazu Rock Carvings',
      item: 'https://beforechina.com/sichuan/chongqing-wulong-dazu',
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
          alt="Chongqing skyline and river confluence"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Chongqing &middot; 3-4 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Chongqing, Wulong & Dazu Rock Carvings
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
            China\'s most cyberpunk city, a natural limestone bridge formation that looks like
            Pandora, and 50,000 Buddhist statues carved into cliffs.
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
                description:
                  "China's most dramatic city, a natural wonder, and 50,000 Buddhist rock carvings.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Chongqing → Wulong → Dazu',
                description:
                  'Connected by high-speed trains. Chongqing is the gateway to the Yangtze River and eastern Sichuan.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Hongyadong, Three Natural Bridges, Dazu Carvings',
                description:
                  'An 11-storey cliffside complex, limestone arches from Transformers 4, and 1,000-year-old Buddhist art.',
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
            Chongqing is China\'s most dramatic city — built on steep hills at the confluence of the
            Yangtze and Jialing rivers, with a skyline that rivals Hong Kong and a metro line that
            runs through a residential building. Wulong\'s Three Natural Bridges are colossal
            limestone arches featured in Transformers 4. Dazu Rock Carvings are 50,000 Buddhist,
            Daoist, and Confucian statues carved between the 7th and 13th centuries — less famous
            than Dunhuang but arguably more impressive in scale and preservation.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Chongqing City',
                content: `Morning: Ciqikou Ancient Town — a 1,000-year-old porcelain trading port with flagstone streets and river views. Afternoon: Hongyadong — an 11-storey stilt-house complex built into a cliff face, lit up like a Chinese fantasy film at night. Evening: Chongqing hot pot at a local place (NOT the tourist ones in Hongyadong). The real Chongqing hot pot is 90% chillies and 10% broth — locals say \'if you\'re not crying, it\'s not hot enough\'.`,
                tip: `Hongyadong is beautiful but insanely crowded. The best view is from the Qiansimen Bridge across the Jialing River — you see the full cliffside complex without the crowds. Go at 8pm when the lights come on.`,
              },
              {
                day: 'Day 2: Wulong Karst',
                content: `Take the 2-hour high-speed train from Chongqing North to Wulong. Wulong\'s Three Natural Bridges are three massive limestone arches — Tianlong (Sky Dragon, 235m high), Qinglong (Azure Dragon), and Heilong (Black Dragon) — spanning a 1.2 km gorge. You walk through the gorge floor looking up at arches big enough to fit a 30-storey building. The site also includes the Houping Giant Sinkhole, a 300m-deep limestone crater. Return to Chongqing by evening.`,
                tip: `Wulong requires an entrance ticket (including shuttle bus). The site was used as a filming location for Transformers: Age of Extinction (the scene where Optimus Prime fights the Dinobots). There\'s a (tacky) statue of a Transformer at the entrance.`,
              },
              {
                day: 'Day 3: Dazu Rock Carvings',
                content: `Take the 1-hour high-speed train from Chongqing West to Dazu, then a 30-minute bus to the carvings. The Beishan (North Hill) site has 10,000 statues from the late Tang dynasty (9th century) — intricate, graceful, and well-preserved. The Baodingshan (Treasure Top Mountain) site is the masterpiece: a 500m cliff face with 10,000 figures carved into a continuous narrative of Buddhist hell and paradise, created between 1174-1252 under the monk Zhao Zhifeng. The \'Hell Scenes\' panel is gruesome and unforgettable.`,
                tip: `Dazu has a combined ticket for Beishan and Baodingshan, or Baodingshan alone — Baodingshan is the better site if you only have time for one. The carvings are exposed (no caves like Dunhuang) so visit on a clear day. The museum at Baodingshan is excellent for context.`,
              },
              {
                day: 'Day 4 (optional): Chongqing Deep Dive',
                content: `Morning: take the Yangtze River Cableway — a gondola across the river with skyline views. Visit the Three Gorges Museum (free, excellent overview of the Yangtze and the dam project). Afternoon: Eling Park for the best panoramic view of Chongqing\'s skyline. Evening: the \'ghost town\' of Fengdu or prepare for your Yangtze cruise departure.`,
                tip: `The Yangtze Cableway queue is 30-60 min on weekends. Go before 9am or take it from the south bank (less busy direction). The Three Gorges Museum is genuinely world-class — budget 2 hours.`,
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
            href: '/sichuan/chengdu-in-depth',
            label: 'Chengdu In Depth',
            description: 'Pandas, tea houses, and the original Sichuan hot pot — 1 hour by train.',
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Chengdu panda',
            days: '3-4 days',
          },
          {
            href: '/yangtze-cruise/chongqing-yichang-cruise',
            label: 'Yangtze River Cruise',
            description: 'Three Gorges cruise departing from Chongqing.',
            image: '/images/destinations/yangtze-cruise.webp',
            imageAlt: 'Three Gorges',
            days: '4-5 days',
          },
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: 'The classic Golden Triangle for first-time visitors.',
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City',
            days: '8-10 days',
          },
        ]}
      />
    </div>
  );
}
