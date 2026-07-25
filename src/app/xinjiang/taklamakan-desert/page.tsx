import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import EnquiryForm from '@/components/EnquiryForm';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Taklamakan Desert Crossing (5-7 Days) | BeforeChina',
  description:
    "Cross the Taklamakan Desert via the Desert Highway. Korla to Kashgar through the world's second-largest shifting sand desert, with stops in Minfeng, Hotan, and Yarkand.",
  alternates: { canonical: '/xinjiang/taklamakan-desert' },
  openGraph: {
    type: 'website',
    url: 'https://beforechina.com/xinjiang/taklamakan-desert',
    title: 'Taklamakan Desert Crossing: The Southern Silk Road | BeforeChina',
    description: "550 km of paved road through the world's second-largest shifting sand desert.",
    images: [
      {
        url: '/images/destinations/xinjiang.webp',
        width: 1200,
        height: 630,
        alt: 'Taklamakan Desert dunes',
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it safe to cross the Taklamakan Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — the Desert Highway (Tarim Desert Highway) is a fully paved 550 km road with guard rails, regular service stations, and cell phone coverage. It is regularly maintained and patrolled. The main risk is sandstorms in spring (March-May), which can reduce visibility to near zero. Check the weather forecast and avoid the highway during sandstorm warnings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is there to see in the Taklamakan Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beyond the desert itself, the southern route visits Hotan (Khotan) — famous for its Sunday Market, jade, and silk workshops; Minfeng — a small oasis town and the northern gateway to the desert; and Yarkand — a historic Silk Road kingdom with a 16th-century royal mausoleum. The desert highway itself is the main attraction: 550 km of sand dunes stretching to the horizon.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this itinerary customisable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — every BeforeChina itinerary is built from scratch. You can extend the trip with extra days in Kashgar, add the Karakoram Highway, or combine with the Classic Silk Road route.',
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
      name: 'Xinjiang Travel Guide',
      item: 'https://beforechina.com/xinjiang',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Taklamakan Desert Crossing',
      item: 'https://beforechina.com/xinjiang/taklamakan-desert',
    },
  ],
};

const HIGHLIGHTS = [
  {
    icon: 'desert',
    title: 'The Desert Highway',
    description:
      '550 km of blacktop flanked by dunes up to 100m high, held back by a grid of straw checkerboard barriers.',
  },
  {
    icon: 'market',
    title: 'Hotan Sunday Market',
    description:
      'One of the most authentic bazaars on the Silk Road — carpets, silk, jade, and spices in every direction.',
  },
  {
    icon: 'history',
    title: 'Yarkand Old City',
    description:
      'A mud-brick Silk Road kingdom that rivals Kashgar in historical importance but sees a fraction of the tourists.',
  },
  {
    icon: 'camel',
    title: 'Camel Rides',
    description: 'Ride a camel into the dunes at sunset — the quintessential Silk Road experience.',
  },
];

const HIGHLIGHT_ICONS: Record<string, string> = {
  desert:
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12h20M6 12a6 6 0 0 1 12 0M12 2v20"/></svg>',
  market:
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>',
  history:
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12a9 9 0 1 0 9-9 9 9 0 0 0-9 9z"/><path d="M12 7v5l3 3"/></svg>',
  camel:
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 18c0 2 2 3 4 3h10c2 0 4-1 4-3M8 8h3l2-4H7L5 8h3z"/></svg>',
};

const RELATED = [
  {
    href: '/xinjiang/silk-road',
    label: 'Classic Silk Road',
    description: 'Urumqi to Kashgar through ancient oasis towns.',
    image: '/images/destinations/xinjiang.webp',
    imageAlt: 'Xinjiang Silk Road scenery',
    days: '7-10 days',
  },
  {
    href: '/xinjiang/karakoram-highway',
    label: 'Karakoram Highway',
    description: 'To the Pakistan border through the Pamir Mountains.',
    image: '/images/destinations/xinjiang.webp',
    imageAlt: 'Karakoram Highway',
    days: '5-7 days',
  },
  {
    href: '/xinjiang/northern-loop',
    label: 'Northern Xinjiang Loop',
    description: 'Kanas Lake, Hemu Village, and Kazakh grasslands.',
    image: '/images/destinations/xinjiang.webp',
    imageAlt: 'Kanas Lake',
    days: '8-12 days',
  },
];

const ITINERARY = [
  {
    day: 'Day 1',
    title: 'Korla',
    content:
      "Arrive in Korla (fly from Urumqi, 1 hr, or train 4 hrs). Korla is the gateway to the southern route and a pleasant mid-sized city famous for fragrant pears. Visit the Iron Gate (Tiemen Pass) — a historic Silk Road checkpoint in a narrow gorge 7 km north of the city — and Bosten Lake if you have time. Stock up on water, snacks, and download offline maps before tomorrow's desert crossing.",
    tip: 'Fill your tank in Korla — there are gas stations on the desert highway but they are spaced roughly 100 km apart. A full tank will get you across.',
  },
  {
    day: 'Day 2',
    title: 'Desert Highway: Korla to Minfeng',
    content:
      'The main event. Leave Korla at sunrise and drive south onto the Tarim Desert Highway. The first 100 km are semi-desert scrub, then the vegetation disappears and you are in pure sand dunes. The road is dead straight for hundreds of kilometres — dunes on both sides, the Tarim River to the west, nothing but sand to the east for 300+ km. Stop at the marked viewpoints to walk into the dunes. The sand is finer than you expect, almost like talcum powder. Arrive in Minfeng by late afternoon. Total driving time: 6-7 hours with stops.',
    tip: 'The best dune photos are at the pull-offs around km 200-250, where the dunes are highest. Bring a scarf or buff — sand gets everywhere when the wind picks up. Do not drive off the paved road; you will get stuck.',
  },
  {
    day: 'Days 3-4',
    title: 'Minfeng to Hotan',
    content:
      "From Minfeng, drive west to Hotan (300 km, 4-5 hrs). Hotan (Khotan) is one of the oldest continuously inhabited oasis towns on the Silk Road. The Sunday Market here rivals Kashgar's — it is less touristy and more chaotic in the best way: carpets, silk, jade, spices, livestock, and Uyghur street food in every direction. Visit the Hotan Silk Workshop where women weave silk on looms unchanged for centuries, and the White Jade River where locals still pan for jade. Spend two nights — one day for the market, one for the workshops and river.",
    tip: "Hotan's Sunday Market is the real thing. You can buy raw jade pebbles from the river — most are low-grade but make great souvenirs. The silk workshop is free to visit and you can buy scarves direct from the weavers.",
  },
  {
    day: 'Days 5-6',
    title: 'Hotan to Yarkand & Kashgar',
    content:
      "Drive from Hotan to Kashgar (500 km, 6-7 hrs) with a stop in Yarkand (Shache). Yarkand was once the capital of the Yarkand Khanate and rivals Kashgar in Silk Road importance, but sees a fraction of the tourists. Visit the Amanisahan Mausoleum (16th-century queen and poet) and the Yarkand Old City — a maze of mud-brick alleys that feels more authentic than Kashgar's renovated old town. Arrive in Kashgar by evening. If you have a 7th day, spend it exploring Kashgar's Old City, Id Kah Mosque, and the livestock bazaar.",
    tip: 'Yarkand is a hidden gem. The old city here has not been renovated for tourism — the mud-brick houses and narrow lanes are the real Silk Road. Stop for lunch at a local laghman shop; you will be the only foreigner there.',
  },
];

export default function TaklamakanPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="taklamakan-schema" />

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
          src="/images/destinations/xinjiang.webp"
          alt="Taklamakan Desert dunes stretching to the horizon"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Xinjiang</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 500,
              marginBottom: '16px',
              lineHeight: 1.15,
            }}
          >
            Taklamakan Desert Crossing: The Southern Silk Road
          </h1>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
            5-7 days &middot; 550 km desert section
          </div>
          <p
            style={{
              fontFamily: 'var(--font-quote)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
            }}
          >
            550 km of paved road through the world's second-largest shifting sand desert. Oasis
            towns, jade markets, and camel rides — the southern route that most tourists skip.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-gap-sm) 0' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '17px',
              lineHeight: 1.8,
              marginBottom: '48px',
            }}
          >
            The Taklamakan Desert — "the place of no return" in Uyghur — is the world's
            second-largest shifting sand desert. The Tarim Desert Highway cuts straight through its
            heart: 550 km of blacktop flanked by dunes up to 100m high, held back by a grid of straw
            checkerboard barriers and lines of drought-resistant poplars. This is the road less
            travelled in Xinjiang — while tourists crowd Kanas and Kashgar, you will see more camels
            than tour buses on this route.
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(22px, 3vw, 28px)',
              fontWeight: 500,
              marginBottom: '28px',
              textAlign: 'center',
            }}
          >
            Highlights
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              marginBottom: '56px',
            }}
          >
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    color: 'var(--accent-color)',
                    marginBottom: '12px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  dangerouslySetInnerHTML={{ __html: HIGHLIGHT_ICONS[h.icon] || '' }}
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    fontWeight: 500,
                    marginBottom: '6px',
                  }}
                >
                  {h.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.5 }}>
                  {h.description}
                </p>
              </div>
            ))}
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(22px, 3vw, 28px)',
              fontWeight: 500,
              marginBottom: '32px',
              textAlign: 'center',
            }}
          >
            Day-by-Day Itinerary
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {ITINERARY.map((stop) => (
              <div
                key={stop.day}
                style={{ borderBottom: '1px solid var(--border-color)', padding: '28px 0' }}
              >
                <div
                  style={{
                    fontSize: '12px',
                    color: 'var(--accent-color)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '8px',
                  }}
                >
                  {stop.day}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 500,
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                  }}
                >
                  {stop.title}
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                    fontSize: '17px',
                    marginBottom: '12px',
                  }}
                >
                  {stop.content}
                </p>
                <blockquote className="pull" style={{ marginTop: '16px' }}>
                  {stop.tip}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--section-gap-sm) 0', backgroundColor: 'var(--bg-surface)' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(22px, 3vw, 28px)',
              fontWeight: 500,
              marginBottom: '28px',
              textAlign: 'center',
            }}
          >
            Planning This Route
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  fontWeight: 500,
                  marginBottom: '10px',
                }}
              >
                When to Go
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '17px' }}>
                <strong>April-May and Sept-Oct</strong> are the best months — temperatures are
                moderate (20-30°C) and sandstorm risk is lower.{' '}
                <strong>Summer (June-August):</strong> Very hot — daytime temperatures in the desert
                can hit 45°C. If you go in summer, drive the desert section at dawn.{' '}
                <strong>Winter (Nov-March):</strong> Cold but doable — daytime temps around 0-10°C,
                nights below freezing. The highway remains open year-round.{' '}
                <strong>Avoid March-April</strong> if possible — this is sandstorm season and
                visibility can drop to zero.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  fontWeight: 500,
                  marginBottom: '10px',
                }}
              >
                Desert Driving Tips
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '17px' }}>
                The Desert Highway is safe and well-maintained, but remote. Key tips:
              </p>
              <ul
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  paddingLeft: '20px',
                  marginTop: '8px',
                }}
              >
                <li>
                  Start at sunrise — the morning light on the dunes is spectacular and you avoid
                  midday heat.
                </li>
                <li>Carry at least 5L of water per person and emergency food.</li>
                <li>Fill your tank at every gas station — the next one may be closed.</li>
                <li>Download offline maps (Baidu Maps or Maps.me) before leaving Korla.</li>
                <li>
                  Tell your hotel in Minfeng your expected arrival time and call them when you
                  arrive.
                </li>
                <li>Do not drive off the paved road — the sand will swallow your vehicle.</li>
              </ul>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  fontWeight: 500,
                  marginBottom: '10px',
                }}
              >
                What to Pack
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '17px' }}>
                Sunglasses (the glare off the sand is intense), a wide-brimmed hat, sunscreen (SPF
                50+), a scarf or buff for sand protection, layers (desert temperatures swing 15-20°C
                between day and night), hand sanitiser (service station bathrooms are basic), and a
                power bank (there are no charging points on the highway). If you are driving
                yourself, bring a tyre pressure gauge — you may need to air down slightly for the
                desert section.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--section-gap-sm) 0 0' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto', textAlign: 'center' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-quote)',
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              marginBottom: '24px',
            }}
          >
            Every desert journey we design is tailored to your pace and comfort level. Tell us what
            moves you, and we'll craft an itinerary that's yours alone.
          </p>
        </div>
      </section>

      <EnquiryForm />

      <NextSteps
        steps={RELATED.map((r) => ({
          href: r.href,
          label: r.label,
          description: r.description,
          image: r.image,
          imageAlt: r.imageAlt,
          days: r.days,
        }))}
      />
    </div>
  );
}
