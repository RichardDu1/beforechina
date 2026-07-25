import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import EnquiryForm from '@/components/EnquiryForm';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Karakoram Highway: Kashgar to Khunjerab Pass (5-7 Days) | BeforeChina',
  description:
    "Drive the Karakoram Highway from Kashgar to the Pakistan border. Karakul Lake at 3,600m, Tajik villages, Pamir Mountains, and Khunjerab Pass — one of the world's highest paved roads.",
  alternates: { canonical: '/xinjiang/karakoram-highway' },
  openGraph: {
    type: 'website',
    url: 'https://beforechina.com/xinjiang/karakoram-highway',
    title: 'Karakoram Highway: Kashgar to the Roof of the World | BeforeChina',
    description: 'Karakul Lake at 3,600m, Tajik stone villages, and the Pakistan border at 4,700m.',
    images: [
      {
        url: '/images/destinations/xinjiang.webp',
        width: 1200,
        height: 630,
        alt: 'Karakoram Highway through the Pamir Mountains',
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
      name: 'How difficult is the Karakoram Highway drive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The road is paved and in good condition, but it climbs from 1,300m (Kashgar) to 4,700m (Khunjerab Pass) in under 400 km. Altitude sickness affects most travellers above 3,500m. You do not need a 4x4 — a standard SUV with a local driver is sufficient. The drive from Kashgar to Tashkurgan takes 6-8 hours with photo stops.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I cross into Pakistan from Khunjerab Pass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — Khunjerab Pass is an official border crossing open May through November (closed in winter due to snow). You need a Pakistan visa in advance and the China-Pakistan border crossing permit. Most travellers visit the pass as a day trip from Tashkurgan and return to Kashgar rather than crossing into Pakistan, as the Pakistani side has limited onward transport.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this itinerary customisable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — every BeforeChina itinerary is built from scratch. You can add extra days in Kashgar, extend the trip with a detour to the Taklamakan Desert, or arrange a guide for trekking in the Pamir foothills.',
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
      name: 'Karakoram Highway',
      item: 'https://beforechina.com/xinjiang/karakoram-highway',
    },
  ],
};

const HIGHLIGHTS = [
  {
    icon: 'mountain',
    title: 'Karakul Lake',
    description:
      'A shockingly blue alpine lake at 3,600m with the 7,546m Muztagh Ata reflected in its surface.',
  },
  {
    icon: 'village',
    title: 'Tajik Tashkurgan',
    description:
      'A stone-built Tajik town with a 1,300-year-old fortress, poplar-lined streets, and yaks grazing in the grasslands.',
  },
  {
    icon: 'pass',
    title: 'Khunjerab Pass',
    description:
      'Stand at 4,700m on the Pakistan border — snow-covered peaks in every direction, one of the highest paved roads on earth.',
  },
  {
    icon: 'road',
    title: 'The Drive Itself',
    description:
      'Red sandstone canyons give way to sand dunes, then 7,000m peaks — 400 km of the most dramatic road in China.',
  },
];

const HIGHLIGHT_ICONS: Record<string, string> = {
  mountain:
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>',
  village:
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v1"/><path d="M9 13v1"/></svg>',
  pass: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/><path d="M2 12h20"/></svg>',
  road: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
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
    href: '/xinjiang/taklamakan-desert',
    label: 'Taklamakan Desert Crossing',
    description: 'The southern route — 550 km of desert highway.',
    image: '/images/destinations/xinjiang.webp',
    imageAlt: 'Taklamakan Desert dunes',
    days: '5-7 days',
  },
  {
    href: '/tibet/lhasa-shigatse-everest',
    label: 'Tibet: Lhasa to Everest',
    description: 'Another high-altitude epic — the road to Base Camp.',
    image: '/images/destinations/tibet.webp',
    imageAlt: 'Everest from Tibet side',
    days: '8-10 days',
  },
];

const ITINERARY = [
  {
    day: 'Day 1',
    title: 'Kashgar',
    content:
      'Arrive in Kashgar (fly from Urumqi). Spend the day acclimatising and exploring the Old City. The Id Kah Mosque, Apak Khoja Mausoleum, and the labyrinthine alleys of the old town are all walkable. In the evening, eat at the night market — the lamb kebabs (kawap) here are the best in China. Arrange a driver for tomorrow morning through your hotel or a local agency.',
    tip: 'Book your driver the night before. A private car with driver for the KKH is the only practical option — your driver will handle the police checkpoint registrations, which you cannot do yourself.',
  },
  {
    day: 'Day 2',
    title: 'Kashgar to Karakul Lake',
    content:
      'Leave Kashgar early (7am). The first 80 km are flat desert, then the road climbs through the Gez River canyon — red sandstone cliffs on both sides. At the Opal checkpoint, your driver registers with the police (30-45 min). After the checkpoint, the valley opens up and you see your first snow peaks. By early afternoon you reach Karakul Lake at 3,600m — a shockingly blue alpine lake with Muztagh Ata (7,546m) reflected in its surface. Stay overnight in a Kyrgyz yurt camp on the lake shore.',
    tip: 'The yurt camps have no heating and temperatures drop to near freezing even in summer. Bring a warm sleeping bag. There is no running water — wet wipes are your friend.',
  },
  {
    day: 'Days 3-4',
    title: 'Karakul to Tashkurgan',
    content:
      'Morning at Karakul Lake — walk the shoreline, photograph the sunrise on Muztagh Ata, and visit the Kyrgyz herder families who live here year-round. Midday, continue south to Tashkurgan (Tajik Autonomous County). The road crosses the 4,100m Subash Pass, then descends into the Tashkurgan Valley. Tashkurgan is a Tajik-majority town with stone houses, poplar-lined streets, and a 1,300-year-old stone fortress. Spend two nights here to acclimatise before the pass. Visit the Stone Fortress, the Tajik museum, and the grasslands outside town where yaks graze.',
    tip: 'Tashkurgan is at 3,100m — you will feel the altitude. Walk slowly, drink water constantly, and avoid alcohol.',
  },
  {
    day: 'Day 5',
    title: 'Khunjerab Pass & Return',
    content:
      'Leave Tashkurgan at 7am for Khunjerab Pass (125 km, 2.5 hrs). The road climbs steadily past grazing yaks and occasional camel herds. At the pass (4,700m), you are standing at the Pakistan border — snow-covered peaks in every direction. There is a Chinese border post with a large sign for photos. Spend 30-45 minutes (longer and the altitude hits hard), then drive back to Tashkurgan for the night or push through to Kashgar if you are short on time.',
    tip: 'The pass is open May-November. Even in July, temperatures at the pass are around 5-10°C. Bring a down jacket. The border police may deny access without warning due to military activity — your driver will know before you leave Tashkurgan.',
  },
];

export default function KarakoramPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="karakoram-schema" />

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
          alt="Karakoram Highway through the Pamir Mountains"
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
            Karakoram Highway: Kashgar to the Roof of the World
          </h1>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
            5-7 days &middot; Max elevation 4,700m
          </div>
          <p
            style={{
              fontFamily: 'var(--font-quote)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
            }}
          >
            One of the world's highest paved roads — through the Pamir Mountains, past a lake at
            3,600m, through Tajik stone villages, to the Pakistan border at 4,700m.
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
            The Karakoram Highway (KKH) is the highest paved international road in the world,
            connecting Kashgar, China to Islamabad, Pakistan. The Chinese side — from Kashgar to
            Khunjerab Pass — is roughly 400 km of increasingly dramatic scenery: red sandstone
            canyons give way to sand dunes, then snow-capped 7,000m peaks of the Pamir and Kunlun
            ranges. This is the route that ancient Silk Road traders took, and the landscape has
            barely changed.
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
                Altitude & Safety
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '17px' }}>
                This route goes from 1,300m to 4,700m. Acute Mountain Sickness (AMS) is a real risk
                above 3,500m. Symptoms include headache, nausea, and shortness of breath. The best
                prevention: spend 2 nights at Karakul (3,600m) before going to Khunjerab (4,700m).
                Diamox (acetazolamide) helps but requires a prescription. If symptoms worsen,
                descend immediately — Tashkurgan is 400m lower than Karakul and Kashgar is at
                1,300m.
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
                Permits & Paperwork
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '17px' }}>
                Your driver handles most paperwork. You need your passport and Chinese visa (or
                visa-free entry proof). At the Gez checkpoint, police register your entry to the
                border zone — this is routine and takes 30-45 minutes. No special permit is required
                for foreign tourists on the KKH as of 2026, but rules can change. Your hotel or
                driver will know the current situation.
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
                Internet & Connectivity
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '17px' }}>
                Mobile signal is patchy beyond Karakul Lake. Download offline maps before leaving
                Kashgar. An international eSIM (see our{' '}
                <a href="/esim" className="text-link">
                  eSIM guide
                </a>
                ) is the most reliable option — it routes through Singapore or Hong Kong. A VPN is
                essential for Kashgar hotel WiFi.
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
            Every Karakoram journey we design is tailored to your pace and comfort level. Tell us
            how you like to travel, and we'll craft an itinerary that's yours alone.
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
