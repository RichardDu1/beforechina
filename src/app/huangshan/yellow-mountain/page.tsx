import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Huangshan (3-4 Days) | Yellow Mountain Travel Guide | BeforeChina',
  description:
    "Huangshan's granite peaks, sea of clouds, and ancient pine trees — China's most painted and most beautiful mountain, plus Hongcun and Xidi ancient villages.",
  alternates: { canonical: '/huangshan/yellow-mountain' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/huangshan/yellow-mountain',
    title: 'Huangshan (3-4 Days) | Yellow Mountain Travel Guide | BeforeChina',
    description:
      "Huangshan's granite peaks, sea of clouds, and ancient pine trees — China's most painted and most beautiful mountain, plus Hongcun and Xidi ancient villages.",
    images: [
      {
        url: '/images/destinations/huangshan.webp',
        width: 1200,
        height: 630,
        alt: 'Huangshan granite peaks above a sea of clouds',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huangshan (3-4 Days) | Yellow Mountain Travel Guide | BeforeChina',
    description:
      "Huangshan's granite peaks, sea of clouds, and ancient pine trees — China's most painted and most beautiful mountain, plus Hongcun and Xidi ancient villages.",
    images: ['/images/destinations/huangshan.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it worth sleeping on top of Huangshan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if you can. The sunrise over the sea of clouds from the summit is the essential Huangshan experience. There are 3 hotels on the mountain (book 2-4 weeks ahead). The alternative is sleeping at the base (Tangkou) and taking the first cable car up (6:30am) — you will miss sunrise but save on the summit hotel premium. The summit hotels are basic (thin walls, simple rooms) — you are paying for the location, not the luxury.',
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
      name: 'Huangshan: The Yellow Mountain & Huizhou Villages',
      item: 'https://beforechina.com/huangshan/yellow-mountain',
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
          src="/images/destinations/huangshan.webp"
          alt="Huangshan granite peaks above a sea of clouds"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Anhui &middot; 3-4 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Huangshan: The Yellow Mountain & Huizhou Villages
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
            China\'s most painted mountain — granite peaks rising through a sea of clouds, ancient
            pine trees clinging to cliffs, and nearby Hongcun, the 900-year-old village that
            inspired Crouching Tiger, Hidden Dragon.
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
                  'The perfect duration — one day for the mountain, one for the summit sunrise, one for the ancient villages.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Huangshan Mountain → Hongcun',
                description:
                  "Climb China's most painted mountain, then descend to 900-year-old Huizhou villages with whitewashed walls and horse-head roofs.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Sea of Clouds, West Sea Canyon, Welcoming Guest Pine',
                description:
                  'A 1,500-year-old pine tree, cliff-hanging trails through a granite canyon, and sunrise above the clouds.',
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
            Huangshan (黄山, \'Yellow Mountain\') is not China\'s highest mountain (1,864m) or its
            most sacred — but it is widely considered the most beautiful. Its granite peaks, hot
            springs, ancient pine trees, and \'sea of clouds\' have inspired Chinese poets and
            painters for over 1,000 years. The saying goes: \'After seeing the Five Great Mountains,
            you don\'t need to see any others. After seeing Huangshan, you don\'t need to see the
            Five Great Mountains.\' Below the mountain, the Huizhou villages of Hongcun and Xidi —
            900-year-old whitewashed villages with horse-head walls, reflected in lotus ponds — are
            UNESCO World Heritage and the setting for the opening scenes of Crouching Tiger, Hidden
            Dragon.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Arrive Huangshan',
                content: `Fly into Huangshan Tunxi Airport (TXN) or take the high-speed train to Huangshan North (2.5 hrs from Shanghai; 1.5 hrs from Hangzhou). Transfer to Tangkou (汤口), the town at the mountain base (1 hr from the airport/train station). Afternoon: visit the Huangshan Hot Springs — natural hot springs at the mountain base, perfect for relaxing before tomorrow\'s climb. Evening: pack a daypack for the mountain (warm clothes, snacks, water, headlamp for sunrise).`,
                tip: `Tangkou is the gateway town for Huangshan. Everything here is oriented around the mountain — hotels, restaurants, gear shops. Buy a walking stick — it genuinely helps on the steep stairs. The Huangshan entrance ticket is cheaper in the off-peak season. Cable cars run each way. The summit hotels serve basic meals — bring instant noodles and snacks.`,
              },
              {
                day: 'Day 2: Huangshan Mountain',
                content: `Enter the mountain at 6:30am. Take the Yungu Cable Car (云谷索道) from the eastern side to the summit area. The cable car rises 1,000m through the clouds — when you emerge above the cloud layer, the view is unforgettable. The summit trail is a 6-8 km loop past the famous sights: Begin-to-Believe Peak (始信峰), the Brush Pen Peak (梦笔生花), and Lion Peak (狮子峰) for the first sea-of-clouds panorama. Check into your summit hotel. Afternoon: hike to the West Sea Grand Canyon (西海大峡谷) — a 2-3 hour loop through the most dramatic section of Huangshan, with paths carved into vertical cliffs and views of the canyon\'s granite spires. Sunset at Bright Summit Peak (光明顶, 1,860m) — the highest point on the mountain.`,
                tip: `The West Sea Grand Canyon is Huangshan\'s best hike — 2-3 hours on paths carved into cliffs, through tunnels, and across stone bridges. The trail descends 300m to the canyon floor, then you take the funicular tram back up. The canyon closes in rain or ice. Start the loop by 1pm to finish before dark. Bright Summit Peak is the best sunrise AND sunset spot — it is the highest point and has 360° views.`,
              },
              {
                day: 'Day 3: Huangshan Sunrise → Hongcun → Depart',
                content: `Wake at 4:30am for sunrise at Bright Summit Peak or Lion Peak. The \'sea of clouds\' phenomenon — when clouds fill the valleys below and the peaks become islands — happens about 50-60 days per year, mostly after rain. If you get it, you will understand why Chinese painters have been painting this mountain for 1,000 years. After sunrise: descend by the Yuping Cable Car (玉屏索道), stopping at the Welcoming Guest Pine (迎客松) — a 1,500-year-old pine tree growing horizontally from a cliff, the symbol of Huangshan. Descend to Tangkou by 11am. Afternoon: visit Hongcun (宏村) and/or Xidi (西递) — 900-year-old Huizhou villages. Hongcun is more famous (Crouching Tiger, Hidden Dragon), Xidi is quieter. Walk the cobbled lanes, photograph the whitewashed walls and horse-head roofs reflected in the moon pond. Evening: train or fly out.`,
                tip: `The Welcoming Guest Pine is Huangshan\'s most famous tree — and the most crowded photo spot on the mountain. Queue 20-30 minutes for a photo. The tree is 1,500 years old and has its own security guard. Hongcun is touristy but genuinely beautiful — the reflection of the white walls and horse-head roofs in the moon pond is the classic Huizhou image. Go after 3pm when the tour groups thin out.`,
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
            href: '/yangtze-delta/hangzhou-wuzhen-mogan',
            label: 'Hangzhou route',
            description:
              'Hangzhou is 1.5 hours from Huangshan by train — add West Lake and tea plantations.',
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Hangzhou West Lake',
            days: '3–4 days',
          },
          {
            href: '/zhangjiajie/avatar-mountains',
            label: 'Zhangjiajie',
            description:
              "Compare China's two most iconic mountain landscapes — granite peaks vs. sandstone pillars.",
            image: '/images/destinations/zhangjiajie.webp',
            imageAlt: 'Zhangjiajie sandstone pillars',
            days: '4–5 days',
          },
          {
            href: '/golden-triangle/beijing-in-depth',
            label: 'Beijing In Depth',
            description:
              "Start or end in China's 3,000-year capital — 5 hours from Huangshan by high-speed train.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '4–5 days',
          },
        ]}
      />
    </div>
  );
}
