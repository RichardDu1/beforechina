import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Zhangjiajie (4-5 Days) | Avatar Mountains Travel Guide | BeforeChina',
  description:
    "Zhangjiajie's sandstone pillars that inspired Avatar's floating mountains, the world's longest glass bridge, and Tianmen Mountain's cliff-hanging walkway.",
  alternates: { canonical: '/zhangjiajie/avatar-mountains' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/zhangjiajie/avatar-mountains',
    title: 'Zhangjiajie (4-5 Days) | Avatar Mountains Travel Guide | BeforeChina',
    description:
      "Zhangjiajie's sandstone pillars that inspired Avatar's floating mountains, the world's longest glass bridge, and Tianmen Mountain's cliff-hanging walkway.",
    images: [
      {
        url: '/images/destinations/zhangjiajie.webp',
        width: 1200,
        height: 630,
        alt: 'Zhangjiajie sandstone pillars rising through mist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zhangjiajie (4-5 Days) | Avatar Mountains Travel Guide | BeforeChina',
    description:
      "Zhangjiajie's sandstone pillars that inspired Avatar's floating mountains, the world's longest glass bridge, and Tianmen Mountain's cliff-hanging walkway.",
    images: ['/images/destinations/zhangjiajie.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Zhangjiajie as crowded as people say?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, in peak season (July-August, Chinese holidays). The park receives 50 million+ visitors annually, most of them Chinese domestic tourists. The key to avoiding crowds: go in shoulder season (April, September, November), enter the park at opening (7am), and stay inside the park or at the park gate (so you can enter before the tour buses arrive at 9am). The park is large enough that even on a busy day, you can find quiet trails if you walk away from the main viewpoints.',
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
      name: 'Zhangjiajie: The Avatar Mountains of Hunan',
      item: 'https://beforechina.com/zhangjiajie/avatar-mountains',
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
          src="/images/destinations/zhangjiajie.webp"
          alt="Zhangjiajie sandstone pillars rising through mist"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Hunan &middot; 4-5 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Zhangjiajie: The Avatar Mountains of Hunan
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
            3,000 sandstone pillars rising through mist, the world\'s longest and highest glass
            bridge, and a cliff-hanging walkway at 1,430m — Zhangjiajie is China\'s most surreal
            landscape.
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
                  'The right pace for the three main sites — the national park, the glass bridge, and Tianmen Mountain.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Zhangjiajie, Hunan',
                description:
                  "3,000 sandstone pillars up to 200m tall in a subtropical forest — the landscape that inspired Avatar's Hallelujah Mountains.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Avatar Mountains, Glass Bridge, Tianmen Cave',
                description:
                  "The world's tallest outdoor elevator, the longest glass bridge, and a natural arch 131m high.",
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
            Zhangjiajie\'s sandstone pillars — 3,000 of them, up to 200m tall, rising vertically
            from a subtropical forest — are one of the most otherworldly landscapes on Earth. They
            directly inspired the floating Hallelujah Mountains in James Cameron\'s Avatar. The area
            is now China\'s first UNESCO Global Geopark and one of its most popular natural
            attractions. This route covers the three main sites: Zhangjiajie National Forest Park
            (the pillars), the Grand Canyon Glass Bridge (the world\'s longest and highest), and
            Tianmen Mountain (the cliff-hanging walkway and the 999-step \'Stairway to Heaven\').
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Arrive Zhangjiajie',
                content: `Fly into Zhangjiajie Hehua Airport (DYG) or take the high-speed train from Changsha (2.5 hrs, ¥120). Check into accommodation at Wulingyuan (the town at the park entrance). Afternoon: Zhangjiajie Grand Canyon Glass Bridge (张家界大峡谷玻璃桥, ¥219) — the world\'s longest (430m) and highest (300m above the canyon floor) glass-bottom bridge. Walking across a transparent bridge suspended 300m above a canyon is genuinely terrifying. After the bridge, walk the Grand Canyon trail (2-3 hours) through waterfalls, pools, and a limestone cave. Evening: Wulingyuan town for dinner.`,
                tip: `The Glass Bridge ticket (¥219) must be booked in advance — it sells out. Book on Trip.com or the official WeChat account. No large bags, cameras with detachable lenses, or selfie sticks allowed on the bridge (they provide lockers). The canyon walk after the bridge is a 2-3 hour downhill hike with beautiful scenery — wear good shoes.`,
              },
              {
                day: 'Day 2: Zhangjiajie National Forest Park — Yuanjiajie & Tianzi Mountain',
                content: `Enter the park at 7am (¥228, 4-day pass). Take the Bailong Elevator (百龙天梯, ¥72) — a glass elevator built against a 326m cliff face, the world\'s tallest outdoor elevator. At the top, walk to Yuanjiajie Scenic Area (袁家界) — the Avatar Hallelujah Mountains viewpoint. The \'Southern Sky Pillar\' (南天一柱), renamed \'Avatar Hallelujah Mountain\' in 2010, is the pillar that inspired the film. Then shuttle bus to Tianzi Mountain (天子山) — panoramic views of the pillar forest from 1,262m. Descend by cable car (¥72).`,
                tip: `The Bailong Elevator has 2-3 hour queues from 9am-2pm in peak season. Enter the park at 7am (opening time) and go straight there. The elevator ride is 88 seconds. Yuanjiajie and Tianzi Mountain are the two essential viewpoints. Do Yuanjiajie first (it is busier) and Tianzi Mountain in the afternoon when the light is better for photography.`,
              },
              {
                day: 'Day 3: Zhangjiajie National Forest Park — Golden Whip Stream & Yellow Stone Village',
                content: `Enter the park early. Walk the Golden Whip Stream (金鞭溪) — a 7.5 km flat trail along a crystal-clear stream at the bottom of the gorge, looking up at the sandstone pillars. The walk takes 2-3 hours and is the most peaceful part of Zhangjiajie (most visitors stay on the mountain tops). You will see wild macaques along the trail — do not feed them (they bite). Afternoon: cable car up to Yellow Stone Village (黄石寨, ¥65) — the oldest developed area of the park with a 3.8 km loop trail around the summit. Fewer visitors than Yuanjiajie, equally good views.`,
                tip: `Golden Whip Stream is a flat, easy walk and the most underrated part of Zhangjiajie. The perspective from the bottom of the gorge is completely different from the mountain-top views — you appreciate the scale of the pillars when you are standing at their base. The macaques are aggressive — keep food hidden, do not make eye contact, and do not smile (showing teeth is a threat to monkeys).`,
              },
              {
                day: 'Day 4: Tianmen Mountain → Depart',
                content: `Morning: Tianmen Mountain (天门山, ¥258) — take the world\'s longest cable car (7.5 km, 30 minutes) from Zhangjiajie city centre to the summit at 1,430m. The cable car rises over the city, farmland, and then up the mountain face. At the top, walk the cliff-hanging walkway (玻璃栈道) — a 60m glass path bolted to a vertical cliff. Then walk to Tianmen Cave (天门洞) — a natural arch 131.5m high in the mountain, reached by the 999-step \'Stairway to Heaven\' or an escalator inside the mountain. Descend by bus on the 99-bend road (通天大道), one of the world\'s most dramatic roads. Afternoon: fly out or take the train.`,
                tip: `Tianmen Mountain ticket (¥258) includes the cable car up and bus down (or vice versa). Book a morning slot — the cable car queue can be 2-3 hours from 9am. The cliff walkway (¥5 shoe covers) is more psychological than actually dangerous — the glass is thick and the walkway is bolted into the cliff. The 999 steps down through Tianmen Cave are steep and can be slippery — the escalator inside the mountain (¥32) is an alternative.`,
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
            href: '/zhangjiajie/fenghuang-ancient-town',
            label: 'Fenghuang Ancient Town',
            description: 'Add the riverside stilt-house town 3 hours from Zhangjiajie.',
            image: '/images/destinations/zhangjiajie.webp',
            imageAlt: 'Fenghuang Ancient Town at night',
            days: '1–2 days',
          },
          {
            href: '/guangxi/guilin-yangshuo-lijiang',
            label: 'Guilin & Yangshuo',
            description:
              'Another iconic Chinese landscape — karst peaks along the Li River, 4 hours by train.',
            image: '/images/destinations/guangxi.webp',
            imageAlt: 'Guilin karst landscape',
            days: '4–5 days',
          },
          {
            href: '/huangshan/yellow-mountain',
            label: 'Huangshan',
            description:
              "Compare China's two most surreal mountain landscapes — pillars vs. granite peaks.",
            image: '/images/destinations/huangshan.webp',
            imageAlt: 'Huangshan granite peaks',
            days: '3–4 days',
          },
        ]}
      />
    </div>
  );
}
