import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Pingyao, Datong & the Yungang Grottoes: Shanxi's Ancient Heartland | BeforeChina",
  description:
    "A Ming dynasty walled banking city, 51,000 Buddhist statues carved into a 1km cliff, and a temple suspended from a sheer rock face — Shanxi province is China's best-kept history secret.",
  alternates: { canonical: '/ancient-capitals/pingyao-datong-yungang' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/ancient-capitals/pingyao-datong-yungang',
    title: "Pingyao, Datong & the Yungang Grottoes: Shanxi's Ancient Heartland | BeforeChina",
    description:
      "A Ming dynasty walled banking city, 51,000 Buddhist statues carved into a 1km cliff, and a temple suspended from a sheer rock face — Shanxi province is China's best-kept history secret.",
    images: [
      {
        url: '/images/destinations/ancient-capitals.webp',
        width: 1200,
        height: 630,
        alt: 'Yungang Grottoes giant Buddha statues',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pingyao, Datong & the Yungang Grottoes: Shanxi's Ancient Heartland | BeforeChina",
    description:
      "A Ming dynasty walled banking city, 51,000 Buddhist statues carved into a 1km cliff, and a temple suspended from a sheer rock face — Shanxi province is China's best-kept history secret.",
    images: ['/images/destinations/ancient-capitals.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is the best way to experience Pingyao, Datong & the Yungang Grottoes: Shanxi's Ancient Heartland?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 5-6 days. Shanxi province (山西, 'West of the Mountains') is China's museum of ancient architecture. It has more surviving pre-14th-century wooden buildings than the rest of China combined. This route connects th",
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
      name: "Pingyao, Datong & the Yungang Grottoes: Shanxi's Ancient Heartland",
      item: 'https://beforechina.com/ancient-capitals/pingyao-datong-yungang',
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
          alt="Yungang Grottoes giant Buddha statues"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Ancient Capitals &middot; 5-6 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Pingyao, Datong & the Yungang Grottoes: Shanxi\'s Ancient Heartland
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
            A Ming dynasty walled banking city, 51,000 Buddhist statues carved into a 1km cliff, and
            a temple suspended from a sheer rock face — Shanxi province is China\'s best-kept
            history secret.
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
                title: '5-6 Days',
                description:
                  "Shanxi province is China's museum of ancient architecture — more pre-14th-century wooden buildings than the rest of China combined.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Beijing → Pingyao → Datong',
                description:
                  'Connected by high-speed rail. Beijing to Pingyao in 4 hours, Pingyao to Datong in 3 hours.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Pingyao Walls, Yungang Grottoes, Hanging Temple',
                description:
                  'A Ming banking city, 51,000 Buddhist statues, and a temple clinging to a cliff 75m up.',
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
            Shanxi province (山西, \'West of the Mountains\') is China\'s museum of ancient
            architecture. It has more surviving pre-14th-century wooden buildings than the rest of
            China combined. This route connects three extraordinary sites: Pingyao (平遥), a
            perfectly preserved Ming-Qing banking city with 6 km of intact city walls; the Yungang
            Grottoes (云冈石窟) near Datong — 51,000 Buddhist statues carved 1,500 years ago, older
            and larger than the Longmen Grottoes; and the Hanging Temple (悬空寺), a temple clinging
            to a cliff face 75m above a canyon floor.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Beijing → Pingyao',
                content: `Take the 4-hour high-speed train from Beijing Fengtai to Pingyao Ancient City (¥180). Pingyao is a walled city of 40,000 people that was China\'s banking capital in the 19th century — the \'Wall Street of China\' during the Qing dynasty. The entire city within the walls is a UNESCO site. Check into a guesthouse inside the walls (converted courtyard house, ¥150-400/night). Walk the city walls (¥125 combined ticket covers the walls and all attractions) at sunset — the 6 km circuit gives a panorama of grey-tiled roofs and narrow lanes.`,
                tip: `Pingyao\'s combined ticket (¥125) covers the city walls and 18 attractions, valid for 3 days. The must-sees: Rishengchang Draft Bank (the first bank in China, founded 1823), the city walls, and the Ming-Qing Street. The county yamen (government office) is interesting but takes 2 hours — skip it if you are tight on time.`,
              },
              {
                day: 'Day 2: Pingyao',
                content: `Full day exploring Pingyao. Visit Rishengchang (日昇昌) — the first draft bank in Chinese history, founded in 1823. Its system of remittance receipts (basically paper money backed by silver deposits) transformed Chinese commerce. Walk Ming-Qing Street (明清街), the main commercial artery since the 14th century. Visit the Confucius Temple and the City God Temple. For lunch: Pingyao beef (平遥牛肉) — cured beef that is pink, tender, and sliced paper-thin. It has been made here since the Ming dynasty.`,
                tip: `Pingyao beef (平遥牛肉) is the local speciality. The best is from Guanyun (冠云) brand, sold in red boxes everywhere. It is eaten cold, sliced thin, as a snack with beer. Also try the cat\'s ear noodles (猫耳朵) — small pieces of dough pressed into the shape of a cat\'s ear and stir-fried with vegetables.`,
              },
              {
                day: 'Day 3: Pingyao → Datong',
                content: `Morning: visit the Shuanglin Temple (双林寺, ¥35), 6 km from Pingyao — a 1,500-year-old temple with over 2,000 painted clay statues from the Song, Yuan, Ming, and Qing dynasties. The statues are extraordinary: life-sized, individually expressive, and still bearing their original pigments. Afternoon: Didi to Pingyao Ancient City Station (15 min), then high-speed train to Datong South (3 hrs, ¥170). Datong is an industrial city (coal mining) with an ancient heart. Check in and walk the rebuilt Datong city wall at night.`,
                tip: `Shuanglin Temple is often skipped by tourists who only visit the Pingyao old town. That is a mistake. The painted clay statues are among the finest surviving examples of Chinese polychrome sculpture. The \'Thousand-Armed Guanyin\' hall is the highlight — the goddess is surrounded by hundreds of suspended miniature statues.`,
              },
              {
                day: 'Day 4: Datong — Yungang Grottoes',
                content: `Take the 30-minute bus from Datong to the Yungang Grottoes (云冈石窟, ¥120). The grottoes stretch 1 km along a sandstone cliff and contain 51,000 Buddhist statues in 252 caves, carved between 460-525 AD. The largest is a 17m seated Buddha in Cave 5. Cave 20\'s open-air Buddha is the iconic image — a 13.7m seated Buddha exposed when the front wall collapsed centuries ago. The site takes 3-4 hours. Afternoon: Datong Museum (free) for the context on the Northern Wei dynasty that built the grottoes. Evening: Datong knife-shaved noodles (刀削面) — Shanxi\'s signature dish.`,
                tip: `Yungang Caves 5-20 are the highlights. Cave 6 is the most ornate — a square pagoda pillar covered in carvings of the Buddha\'s life story. Cave 12 is the \'Music Cave\' with celestial musicians carved across the ceiling. The open-air Buddha in Cave 20 is the photo everyone takes — but go further to Caves 16-19 for the full Northern Wei progression of styles.`,
              },
              {
                day: 'Day 5: Hanging Temple & Yingxian Pagoda',
                content: `Full-day excursion: drive 1.5 hours to the Hanging Temple (悬空寺, ¥130) — a temple built into a sheer cliff face 75m above the canyon floor, supported by wooden beams wedged into the rock. It was built in 491 AD and is unique in China: it houses Buddhist, Daoist, and Confucian shrines in the same temple. Walk the narrow wooden walkways (they creak, which is part of the experience). Afternoon: drive 1 hour to the Yingxian Wooden Pagoda (应县木塔, ¥60) — the oldest surviving fully wooden pagoda in the world, built in 1056 without a single nail. At 67m (9 storeys), it is a miracle of Song dynasty engineering. Return to Datong for the night.`,
                tip: `The Hanging Temple looks terrifying but is structurally sound — the beams are oak wedged into the rock, and the cliff overhang protects the temple from rain. The walkways are narrow (60cm) and the railing is knee-height. Not for those with severe fear of heights. The Yingxian Pagoda is leaning slightly (like the Tower of Pisa) — you can no longer climb it, only view from the outside.`,
              },
              {
                day: 'Day 6: Datong → Beijing',
                content: `Morning: Huayan Temple (华严寺, ¥65) — a Liao dynasty (1038 AD) temple with the largest wooden Buddha hall in China and exquisite Liao dynasty clay sculptures. The temple library (薄伽教藏殿) has cabinets designed to look like miniature buildings. Afternoon: high-speed train back to Beijing (2 hrs, ¥160). Fly out or continue your China journey.`,
                tip: `Huayan Temple\'s main hall (大雄宝殿) is one of the largest wooden Buddhist halls in China — 1,559 m². The clay sculptures in the Sutra Library are Liao dynasty originals (11th century) and are remarkably well-preserved. The temple is often empty because tourists prioritise Yungang — it is a quiet, atmospheric experience.`,
              },
            ].map((stop, i) => (
              <div
                key={stop.day}
                style={{
                  padding: '40px 0',
                  borderBottom: i < 5 ? '1px solid var(--border-color)' : 'none',
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
            href: '/ancient-capitals/xian-luoyang-kaifeng',
            label: 'Xian, Luoyang & Kaifeng',
            description: 'Continue south to the other ancient capitals.',
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Xian Terracotta Warriors in battle formation',
            days: '6-7 days',
          },
          {
            href: '/golden-triangle/beijing-in-depth',
            label: 'Beijing In Depth',
            description: 'Spend 4-5 days exploring Beijing before heading to Shanxi.',
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '4-5 days',
          },
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: "The full Golden Triangle — add Xi'an and Shanghai.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8-10 days',
          },
        ]}
      />
    </div>
  );
}
