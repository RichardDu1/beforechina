import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Hong Kong & Macau: Two Cities, Two Worlds | BeforeChina',
  description:
    "Hong Kong's Victoria Harbour skyline and dim sum temples, plus Macau's Portuguese tiles, egg tarts, and casinos — two former European colonies, now China's most distinctive cities.",
  alternates: { canonical: '/south-china/hong-kong-macau' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/south-china/hong-kong-macau',
    title: 'Hong Kong & Macau: Two Cities, Two Worlds | BeforeChina',
    description:
      "Hong Kong's Victoria Harbour skyline and dim sum temples, plus Macau's Portuguese tiles, egg tarts, and casinos — two former European colonies, now China's most distinctive cities.",
    images: [
      {
        url: '/images/destinations/south-china.webp',
        width: 1200,
        height: 630,
        alt: 'Hong Kong Victoria Harbour skyline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hong Kong & Macau: Two Cities, Two Worlds | BeforeChina',
    description:
      "Hong Kong's Victoria Harbour skyline and dim sum temples, plus Macau's Portuguese tiles, egg tarts, and casinos — two former European colonies, now China's most distinctive cities.",
    images: ['/images/destinations/south-china.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a visa for Hong Kong and Macau?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Hong Kong and Macau have separate immigration policies from mainland China. Most Western passports get visa-free entry: 90 days (Hong Kong), 30 days (Macau). If you are entering mainland China as well, check if you qualify for the 144-hour transit visa-free policy. Hong Kong and Macau count as 'third regions' for the transit policy — you can enter China via Hong Kong and exit to another country within 144 hours.",
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
      name: 'Hong Kong & Macau: Two Cities, Two Worlds',
      item: 'https://beforechina.com/south-china/hong-kong-macau',
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
          src="/images/destinations/south-china.webp"
          alt="Hong Kong Victoria Harbour skyline"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>South China &middot; 4-5 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Hong Kong & Macau: Two Cities, Two Worlds
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
            Hong Kong\'s Victoria Harbour skyline and dim sum temples, plus Macau\'s Portuguese
            tiles, egg tarts, and casinos — two former European colonies, now China\'s most
            distinctive cities.
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
                title: '4–5 Days',
                description:
                  "The perfect pace for two of China's most distinctive cities — dim sum, hiking, and Portuguese egg tarts.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Hong Kong → Macau → Hong Kong',
                description:
                  'Connected by a 1-hour TurboJET ferry every 15-30 minutes. Hong Kong has a world-class international airport.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: "Victoria Peak, Star Ferry, Ruins of St. Paul's",
                description:
                  "The world's most dramatic skyline, a 130-year-old ferry, and a 17th-century Jesuit facade.",
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
            Hong Kong and Macau are China but not quite China — they are Special Administrative
            Regions with their own currencies, legal systems, and border controls. Hong Kong needs
            no introduction: the most dramatic skyline in the world, the best dim sum on earth, and
            surprisingly good hiking. Macau is the former Portuguese enclave where pastel-coloured
            colonial buildings sit next to the world\'s largest casinos, and where the food is a
            400-year-old fusion of Portuguese and Cantonese. They are 1 hour apart by ferry, making
            a combined trip natural.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Hong Kong Island',
                content: `Start at Victoria Peak (太平山) — take the Peak Tram (est. 1888) to the top for the classic Hong Kong skyline view. Walk the Peak Circle Walk (3.5 km, 1 hour) for 360° views. Descend to Central and walk the Mid-Levels Escalators — the world\'s longest outdoor covered escalator system (800m), past bars, galleries, and noodle shops. Lunch: dim sum at Tim Ho Wan (添好运, the world\'s most affordable Michelin-starred restaurant). Afternoon: Man Mo Temple (文武庙, free), dedicated to the gods of literature and war, with giant incense coils hanging from the ceiling. Evening: Star Ferry across Victoria Harbour (10 min, running since 1888) to Tsim Sha Tsui. Watch the Symphony of Lights (8pm) from the TST waterfront.`,
                tip: `The Peak Tram queue can be 1-2 hours in peak times. Take the bus (Bus 15 from Exchange Square, 30 min) instead — it winds up the mountain through the forest and drops you at the same place. The Star Ferry costs a few coins for the crossing — upper deck and lower deck available. Pay with Octopus card or coins. Do the crossing at sunset.`,
              },
              {
                day: 'Day 2: Kowloon & New Territories',
                content: `Morning: Kowloon — visit the Wong Tai Sin Temple (黄大仙祠, free), where locals shake fortune sticks to predict their future. Then the Chi Lin Nunnery (志莲净苑, free) — a Tang dynasty-style Buddhist temple complex with lotus ponds and immaculate gardens, flanked by a modern skyscraper (startling contrast). Lunch: wonton noodle soup at Mak\'s Noodle (麦奀云吞面) — a Hong Kong institution serving delicate shrimp wontons in a clear, fragrant broth. Afternoon: hike the Dragon\'s Back (龙脊, 2-3 hours) — Hong Kong\'s most famous trail along a ridge with views of beaches, islands, and the South China Sea. Evening: Temple Street Night Market (庙街夜市) for fortune tellers, street opera, and claypot rice.`,
                tip: `Hong Kong has world-class hiking. The Dragon\'s Back is a 2-3 hour trail rated moderate, with ocean views the whole way. It ends at Big Wave Bay beach — bring a swimsuit. The trailhead is a 15-minute bus ride from Shau Kei Wan MTR station. Hong Kong is 40% country park — you can go from skyscraper to rainforest in 30 minutes.`,
              },
              {
                day: 'Day 3: Hong Kong → Macau',
                content: `Morning: take the 1-hour TurboJET ferry from Hong Kong Macau Ferry Terminal (Sheung Wan) to Macau. Macau was a Portuguese colony from 1557-1999. Start at Senado Square (议事亭前地) — a wave-patterned cobblestone plaza surrounded by pastel-coloured colonial buildings. Walk to the Ruins of St. Paul\'s (大三巴牌坊, free) — the 17th-century facade of a Jesuit church that burned down in 1835, now Macau\'s symbol. Visit the Macau Museum inside the Monte Fort for the city\'s history. Lunch: Portuguese egg tart (葡式蛋挞) at Lord Stow\'s Bakery — the flaky, caramelised version that is Macau\'s most famous food. Afternoon: Taipa Village — a quieter area of pastel houses, narrow lanes, and the Taipa Houses-Museum. Evening: casino walk on the Cotai Strip (the Venetian, the Parisian — Macau\'s casinos are 3x Las Vegas\'s revenue).`,
                tip: `Macau\'s Portuguese egg tarts were invented by Andrew Stow, an Englishman who opened a bakery in Coloane in 1989. The original Lord Stow\'s is in Coloane Village (a 20-minute bus from the city centre). The tart is slightly burnt on top (caramelised) with a flaky pastry — different from the Cantonese egg tart\'s smooth top and shortcrust pastry. Eat at least 3-4 — they\'re small and irresistible.`,
              },
              {
                day: 'Day 4: Macau → Hong Kong → Depart',
                content: `Morning: A-Ma Temple (妈阁庙, free) — Macau\'s oldest temple (1488), dedicated to the sea goddess Mazu (Macau\'s name comes from \'A-Ma Gau\' — \'Bay of A-Ma\'). Visit the Macau Tower for the 360° view from 338m, or walk the Coloane Village — Macau\'s southernmost island with a fishing village atmosphere, pastel houses, and the original Lord Stow\'s Bakery. Afternoon: ferry back to Hong Kong (1 hr). Fly out from Hong Kong International Airport (HKG).`,
                tip: `Macau\'s casinos run free shuttle buses (\'casino express\') between the ferry terminal, border gate, and airport. You don\'t need to gamble to use them. The Venetian-Taipa route is the most useful. The buses are free, comfortable, and more frequent than public buses.`,
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
            href: '/south-china/sanya-hainan',
            label: 'Sanya & Hainan',
            description: "Add China's tropical island for beach time after the urban energy.",
            image: '/images/destinations/south-china.webp',
            imageAlt: 'Sanya tropical beach',
            days: '4–5 days',
          },
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: 'Golden Triangle',
            description:
              "Continue to Beijing, Xi'an, and Shanghai for the classic first-timer route.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8–10 days',
          },
          {
            href: '/south-china/guangzhou-shenzhen',
            label: 'Guangzhou & Shenzhen',
            description:
              "Add Cantonese food and China's Silicon Valley, 30 minutes from each other.",
            image: '/images/destinations/south-china.webp',
            imageAlt: 'Guangzhou Canton Tower skyline',
            days: '4–5 days',
          },
        ]}
      />
    </div>
  );
}
