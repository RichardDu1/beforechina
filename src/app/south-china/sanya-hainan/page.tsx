import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Sanya & Hainan: China's Tropical Island | BeforeChina",
  description:
    "White-sand beaches, rainforest hot springs, fresh seafood on the sand, and a 51km coastal road — Hainan is China's Hawaii, with better food and lower prices.",
  alternates: { canonical: '/south-china/sanya-hainan' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/south-china/sanya-hainan',
    title: "Sanya & Hainan: China's Tropical Island | BeforeChina",
    description:
      "White-sand beaches, rainforest hot springs, fresh seafood on the sand, and a 51km coastal road — Hainan is China's Hawaii, with better food and lower prices.",
    images: [
      {
        url: '/images/destinations/south-china.webp',
        width: 1200,
        height: 630,
        alt: 'Sanya white-sand beach and tropical coastline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sanya & Hainan: China's Tropical Island | BeforeChina",
    description:
      "White-sand beaches, rainforest hot springs, fresh seafood on the sand, and a 51km coastal road — Hainan is China's Hawaii, with better food and lower prices.",
    images: ['/images/destinations/south-china.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Sanya worth visiting compared to beaches in Thailand or Vietnam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For beach quality alone, Thailand and Vietnam have better beaches and are cheaper. Hainan's value is the combination: good beaches (not world-class, but good) plus Chinese infrastructure, safety, food, and no language barrier if you speak some Mandarin. It is also a visa-free entry point to China. If you are already in China and want a tropical break, Sanya is excellent. If you are choosing between Hainan and Thailand purely for a beach holiday, go to Thailand.",
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
      name: "Sanya & Hainan: China's Tropical Island",
      item: 'https://beforechina.com/south-china/sanya-hainan',
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
          alt="Sanya white-sand beach and tropical coastline"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Hainan &middot; 5-7 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Sanya & Hainan: China\'s Tropical Island
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
            White-sand beaches, rainforest hot springs, fresh seafood on the sand, and a 51km
            coastal road — Hainan is China\'s Hawaii, with better food and lower prices.
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
                title: '5-7 Days',
                description:
                  'A proper tropical escape — beach days, rainforest hiking, hot springs, and an optional Haikou day trip.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Sanya → Wuzhishan → Haikou',
                description:
                  'Connected by 1.5-hour high-speed trains. Sanya and Haikou both have airports with domestic and international flights.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Yalong Bay, Nanshan Temple, Wuzhishan Rainforest',
                description:
                  "China's best tropical beaches, a 108m Guanyin statue rising from the sea, and pristine rainforest.",
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
            Hainan is China\'s southernmost province — a tropical island the size of Belgium in the
            South China Sea. It is China\'s most popular beach destination (domestic tourists flock
            here in winter to escape the cold) and has a genuinely tropical vibe: coconut palms,
            white-sand beaches, fresh seafood, and a laid-back pace. Sanya (三亚) is the main resort
            city with the best beaches. The island also has volcanic hot springs, Li and Miao
            minority villages, and the Wuzhishan tropical rainforest. Hainan has visa-free access
            for 59 countries (up to 30 days) — one of the easiest ways to visit China.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Arrive Sanya',
                content: `Fly into Sanya Phoenix Airport (SYX). Transfer to your hotel. Sanya has several bay areas: Yalong Bay (亚龙湾, most upscale, best beach), Sanya Bay (三亚湾, city centre, longest beach), Haitang Bay (海棠湾, newest development, luxury resorts), and Dadonghai (大东海, most popular with Russian tourists). Check in and hit the beach. Sanya Bay has a 22km beachfront promenade perfect for cycling. Evening: seafood dinner at a beachfront restaurant — Hainan\'s specialities are Wenchang chicken (文昌鸡), Hele crab (和乐蟹), and fresh tropical fruit.`,
                tip: `Sanya\'s beaches ranked: Yalong Bay (best sand, clearest water, ¥50-100 for a sunbed), Sanya Bay (longest, free, most convenient), Dadonghai (busy, lots of Russians, free), Haitang Bay (newest, luxury resorts). The water is warm year-round (22-28°C). The best swimming is March-November.`,
              },
              {
                day: 'Day 2: Sanya — Beach Day',
                content: `Full beach day. Yalong Bay has the classic white-sand crescent beach — 7.5 km of sand with clear water. The beach is lined with resorts but the sand is public (Chinese law requires all beaches to be publicly accessible). Rent a sunbed (¥50-100), swim, and eat fresh coconut (¥10). Afternoon: Nanshan Temple (南山寺, ¥129) — a massive Buddhist complex on the coast with a 108m statue of Guanyin (the Goddess of Mercy) rising from the sea on an artificial island. The statue is visible from the plane as you land. Evening: Sanya Duty-Free Shopping Complex (the world\'s largest duty-free mall) if you want luxury shopping.`,
                tip: `The 108m Guanyin statue at Nanshan Temple is taller than the Statue of Liberty (93m). It has three faces — one facing the sea, one facing the land, and one facing the sky. The temple complex is large (40 km²) and takes 3-4 hours. It is a working Buddhist temple, not just a tourist attraction — be respectful.`,
              },
              {
                day: 'Day 3: Wuzhishan Rainforest',
                content: `Day trip to Wuzhishan (五指山, \'Five Finger Mountain\'), 2 hours from Sanya. Wuzhishan is Hainan\'s highest mountain (1,867m) and the heart of the island\'s tropical rainforest. Hike the rainforest trail (2-4 hours, moderate) through a landscape of giant ferns, banyan trees, butterflies, and waterfalls. The air is cool and fresh compared to the coast. The Li and Miao minority villages in the area have cultural performances (¥100-150). Alternatively, visit Yanoda Rainforest (呀诺达雨林, ¥168) — a more developed rainforest park with zip lines, waterfalls, and a glass bridge, closer to Sanya (45 min).`,
                tip: `Wuzhishan is a genuine tropical rainforest — the biodiversity is extraordinary (Hainan has species found nowhere else). The hike is moderate (stairs and boardwalks). Yanoda is more developed and touristy but also more accessible — it has English signage, zip lines, and restaurants. Choose Wuzhishan for nature, Yanoda for convenience.`,
              },
              {
                day: 'Day 4: Sanya — Water Sports & Hot Springs',
                content: `Morning: water sports at Wuzhizhou Island (蜈支洲岛, ¥144 including ferry) — a small island 30 minutes off the coast with the clearest water in Sanya. Snorkelling (¥200-400), diving (¥600-1,000), jet skiing, and parasailing. The coral is not world-class (Hainan\'s reefs have suffered from bleaching) but the water is clear and the fish are plentiful. Afternoon: Nantian Hot Springs (南田温泉, ¥198) — volcanic hot springs with 30+ pools of varying temperatures, surrounded by tropical gardens. Evening: Sanya Romance Park (三亚千古情, ¥280) — a theatrical show about Sanya\'s history, directed by the same company that does the Hangzhou Impression shows.`,
                tip: `Wuzhizhou Island ferry: ¥144 (includes island entrance). The ferry takes 20 minutes and can be rough. Book water sports online (Trip.com) for better prices than on the island. Nantian Hot Springs has pools ranging from 28-45°C, including a \'fish therapy\' pool where small fish nibble dead skin (¥30 extra).`,
              },
              {
                day: 'Day 5: Sanya → Haikou (Optional)',
                content: `Option A: stay in Sanya for more beach time. Option B: take the 1.5-hour high-speed train from Sanya to Haikou (¥100). Haikou is Hainan\'s capital and has a more local, less resort feel. Visit Qilou Old Street (骑楼老街) — a neighbourhood of colonial-era arcade buildings built by returning overseas Chinese in the 1920s. Visit the Hainan Museum (free) for the island\'s history. Lunch: Haikou\'s version of Wenchang chicken and Hainan rice noodles (海南粉). Afternoon: volcanic cluster geopark (海口火山群, ¥60) — a dormant volcano 15 km from Haikou with a crater you can walk into. Evening: train back to Sanya (1.5 hrs, ¥100) or stay in Haikou and fly out from Haikou Meilan Airport (HAK).`,
                tip: `Haikou is less touristy than Sanya and worth a day. The Qilou Old Street arcades are a unique architectural style — Chinese shopfronts with European columns and Southeast Asian shutters. The volcanic park has a 1,000m-wide crater that last erupted 8,000 years ago. You can walk down into the crater — the temperature drops 5°C at the bottom.`,
              },
              {
                day: 'Day 6-7: Departure or Extension',
                content: `Fly out from Sanya (SYX) or Haikou (HAK). Both airports have flights to major Chinese cities and international connections to Southeast Asia. If extending: Hainan has a 51km coastal road from Sanya to Lingshui — rent a car (¥300-500/day) and drive it. The road passes through fishing villages, coconut groves, and viewpoints over the South China Sea. Or visit the Bo\'ao Forum site (博鳌, 1.5 hrs from Haikou) — the \'Davos of Asia\', a conference centre on a river estuary.`,
                tip: `Hainan is one of the easiest places to drive in China as a foreigner — the roads are good, traffic is light outside Sanya, and the coastal scenery is beautiful. You need a Chinese driving licence (not an IDP). The 51km Sanya-Lingshui coastal road is a new tourist highway with viewpoints every few kilometres.`,
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
            href: '/south-china/hong-kong-macau',
            label: 'Hong Kong & Macau',
            description: 'Fly from Sanya to Hong Kong in 1.5 hours',
            image: '/images/destinations/south-china.webp',
            imageAlt: 'Hong Kong skyline',
            days: '5-7 days',
          },
          {
            href: '/south-china/guangzhou-shenzhen',
            label: 'Guangzhou & Shenzhen',
            description: 'Fly from Sanya to Guangzhou in 1.5 hours',
            image: '/images/destinations/south-china.webp',
            imageAlt: 'Guangzhou skyline',
            days: '4-5 days',
          },
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: 'Golden Triangle',
            description: "Start with the classic Beijing-Xi'an-Shanghai route",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8-10 days',
          },
        ]}
      />
    </div>
  );
}
