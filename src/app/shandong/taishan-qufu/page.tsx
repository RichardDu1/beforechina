import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Mount Tai & Qufu: Confucius's Hometown & China's Sacred Mountain | BeforeChina",
  description:
    "Climb 6,000 steps up China's most sacred mountain at dawn, then walk through Confucius's family mansion — 2,500 years of Chinese civilisation in 3 days.",
  alternates: { canonical: '/shandong/taishan-qufu' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/shandong/taishan-qufu',
    title: "Mount Tai & Qufu: Confucius's Hometown & China's Sacred Mountain | BeforeChina",
    description:
      "Climb 6,000 steps up China's most sacred mountain at dawn, then walk through Confucius's family mansion — 2,500 years of Chinese civilisation in 3 days.",
    images: [
      {
        url: '/images/destinations/shandong.webp',
        width: 1200,
        height: 630,
        alt: 'Mount Tai sunrise from Jade Emperor Peak',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mount Tai & Qufu: Confucius's Hometown & China's Sacred Mountain | BeforeChina",
    description:
      "Climb 6,000 steps up China's most sacred mountain at dawn, then walk through Confucius's family mansion — 2,500 years of Chinese civilisation in 3 days.",
    images: ['/images/destinations/shandong.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Mount Tai worth climbing or should I take the cable car?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The climb is the point. The traditional route from Hongmen (红门) to the South Heavenly Gate (南天门) is 6,000+ stone steps, takes 4-6 hours, and has been walked by billions of pilgrims over 3,000 years. The steps are lined with inscriptions carved into the rock by emperors and poets. The cable car (¥100) from the midway point takes 8 minutes and misses the entire cultural experience. Climb up, cable car down (to save your knees).',
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
      name: "Mount Tai & Qufu: Confucius's Hometown & China's Sacred Mountain",
      item: 'https://beforechina.com/shandong/taishan-qufu',
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
          src="/images/destinations/shandong.webp"
          alt="Mount Tai sunrise from Jade Emperor Peak"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Shandong &middot; 3-4 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Mount Tai & Qufu: Confucius\'s Hometown & China\'s Sacred Mountain
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
            Climb 6,000 steps up China\'s most sacred mountain at dawn, then walk through
            Confucius\'s family mansion — 2,500 years of Chinese civilisation in 3 days.
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
                  "Compact but deep — climb Mount Tai at night, explore Qufu's Confucian heritage the next day.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Jinan → Mount Tai → Qufu',
                description:
                  'Connected by 20-minute trains. Jinan has flights and high-speed rail from Beijing (1.5 hrs) and Shanghai (2.5 hrs).',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Mount Tai Sunrise, Confucius Temple, Dai Temple',
                description:
                  "China's most sacred mountain with 3,000 years of pilgrimage, plus the hometown of Confucius.",
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
            Mount Tai (泰山, 1,545m) is not China\'s highest or most beautiful mountain — but it is
            the most sacred. For 3,000 years, Chinese emperors climbed it to perform the Fengshan
            sacrifice, declaring their legitimacy to heaven. Mao Zedong climbed it. So did 72
            emperors before him. The mountain is carved with calligraphy and dotted with temples.
            Qufu (曲阜), 1 hour south, is the hometown of Confucius (551-479 BC), whose philosophy
            shaped Chinese civilisation for 2,500 years. The Confucius Mansion, Temple, and Cemetery
            are a UNESO site and a pilgrimage destination.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: "Day 1: Arrive Tai'an",
                content: `Fly into Jinan Yaoqiang Airport (TNA) or take the high-speed train to Tai\'an (1.5 hrs from Beijing, ¥120; 2.5 hrs from Shanghai, ¥200). Tai\'an (泰安) is the city at the foot of Mount Tai. Afternoon: visit Dai Temple (岱庙, ¥30) at the mountain base — the temple where emperors performed pre-climb rituals before ascending Mount Tai. The temple has a 2,100-year-old cypress tree, Song dynasty murals, and imperial steles. Evening: buy supplies for the climb (water, snacks, a headlamp for the night climb option). Sleep early — you will wake at midnight if doing the night climb.`,
                tip: `The classic Mount Tai experience is the night climb: start at 11pm-midnight from Hongmen Gate, climb 6,000 steps by headlamp, and reach the summit by 5am for sunrise. Thousands of Chinese climbers do this every night in summer. The steps are lit and there are vendors selling water and instant noodles all the way up. It is a pilgrimage, not a wilderness hike.`,
              },
              {
                day: 'Day 2: Mount Tai',
                content: `Night climb option: wake at midnight, start climbing at 1am from Hongmen Gate. The 6,000+ steps take 4-5 hours at a steady pace. You climb through the night with hundreds of Chinese climbers — the atmosphere is festive, not solitary. Arrive at the South Heavenly Gate (南天门) by 5am, then walk 20 minutes to Jade Emperor Peak (玉皇顶, 1,545m) for sunrise. The sunrise over a sea of clouds is the payoff. Day climb option: start at 6am, climb 4-6 hours, reach the summit by midday. The views are still spectacular but the night climb has the better atmosphere. Descend by cable car (¥100) and bus (¥30) to save your knees. Afternoon: train to Qufu (20 min, ¥30).`,
                tip: `Mount Tai entrance: ¥125 (peak) / ¥100 (off-peak). Cable car down: ¥100. The night climb is cold — the summit is 10-15°C colder than the base and windy. Bring a warm layer and a windbreaker. The summit has vendors renting military coats (¥20-50) — they are ugly but warm. The sunrise is visible about 50% of the time — clouds and fog obscure it. Check the forecast.`,
              },
              {
                day: 'Day 3: Qufu',
                content: `Qufu is a small city built around the legacy of Confucius. Visit the Confucius Temple (孔庙, ¥80) — China\'s second-largest ancient building complex after the Forbidden City, with 466 halls and pavillions built over 2,000 years. The temple is a forest of steles, ancient cypresses, and yellow-glazed imperial roofs. Then the Confucius Mansion (孔府, ¥60) — the residence of Confucius\'s direct descendants for 77 generations (the last descendant still lives in Taiwan). Finally, the Confucius Cemetery (孔林, ¥40) — a 200-hectare forest where Confucius and 100,000+ of his descendants are buried. The tomb of Confucius is a simple mound with a stele — understated, fitting his philosophy.`,
                tip: `The combined ticket for the Temple, Mansion, and Cemetery is ¥150 (saves ¥30 vs buying separately). The three sites are walkable from each other. The Temple is the highlight — give it 2 hours. The Cemetery is a peaceful forest of ancient trees and stone steles, best in the late afteroon light. Qufu has a touristy \'Confucius culture street\' selling calligraphy brushes and Confucius-branded everything — skip it.`,
              },
              {
                day: 'Day 4: Qufu → Depart',
                content: `Fly out from Jinan Yaoqiang Airport (TNA), 2 hours from Qufu by bus (¥60). Alternatively, take the high-speed train from Qufu East to Beijing (2 hrs, ¥200) or Shanghai (3 hrs, ¥300). If you have a late departure, visit the Nishan Holy Land (尼山圣境, ¥120) — a massive new Confucius theme park with a 72m bronze statue of Confucius and a spectacular evening light show. It is China\'s attempt to make Confucius Instagram-worthy.`,
                tip: `The Nishan Holy Land is a state-funded Confucius theme park opened in 2018. The 72m statue (Confucius lived to 72) is genuinely impressive. The evening drone and light show is spectacular in a very Chinese way — 500 drones forming Confucius quotes in the sky. It is ¥120 and 40 minutes from Qufu by bus.`,
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
                <blockquote className="pull" style={{ margin: '16px 00', fontSize: '16px' }}>
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
            href: '/shandong/qingdao-yantai',
            label: 'Qingdao & Yantai',
            description: "Add Shandong's coast, beer, and wine region",
            image: '/images/destinations/shandong.webp',
            imageAlt: 'Qingdao German colonial architecture and coastline',
            days: '4-5 days',
          },
          {
            href: '/ancient-capitals/pingyao-datong-yungang',
            label: 'Pingyao & Datong',
            description: "Combine with Shanxi's ancient cities",
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Pingyao ancient city wall',
            days: '5-7 days',
          },
          {
            href: '/huangshan/yellow-mountain',
            label: 'Huanshan',
            description: "Another of China's sacred mountains",
            image: '/images/destinations/huangshan.webp',
            imageAlt: 'Huanshan granite peaks in mist',
            days: '3-4 days',
          },
        ]}
      />
    </div>
  );
}
