import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import EnquiryForm from '@/components/EnquiryForm';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Northern Xinjiang Loop: Kanas, Sayram Lake & Grasslands (8-12 Days) | BeforeChina',
  description:
    'The Northern Xinjiang loop: Kanas Lake, Hemu Village, Sayram Lake, Kazakh grasslands, and Ghost City. Alpine scenery, autumn colours, and nomadic culture in 8-12 days.',
  alternates: { canonical: '/xinjiang/northern-loop' },
  openGraph: {
    type: 'website',
    url: 'https://beforechina.com/xinjiang/northern-loop',
    title: 'Northern Xinjiang Loop: Lakes, Mountains & Kazakh Grasslands | BeforeChina',
    description:
      'Kanas Lake in autumn gold, the wooden village of Hemu, and Sayram Lake at 2,070m.',
    images: [
      {
        url: '/images/destinations/xinjiang.webp',
        width: 1200,
        height: 630,
        alt: 'Kanas Lake in autumn',
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
      name: 'When is the best time to visit Northern Xinjiang?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Late September to early October is peak season for autumn foliage — the birch and poplar forests around Kanas Lake turn brilliant gold and red. June-July is best for green grasslands and wildflowers. May and September offer a sweet spot of good weather with fewer crowds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Kanas Lake?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fly from Urumqi to Kanas Airport (KJI) in Burqin County (1.5 hrs), then drive 1.5-2 hrs to the lake. Alternatively, take an overnight train from Urumqi to Beitun (10 hrs), then drive 4 hrs. The lake area requires an entrance fee and you must use the park shuttle buses inside.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this itinerary customisable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — every BeforeChina itinerary is built from scratch. You can add extra days for trekking around Kanas, include a detour to Nalati Grassland, or combine with the Classic Silk Road route.',
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
      name: 'Northern Xinjiang Loop',
      item: 'https://beforechina.com/xinjiang/northern-loop',
    },
  ],
};

const HIGHLIGHTS = [
  {
    icon: 'lake',
    title: 'Kanas Lake',
    description:
      'A crescent-shaped alpine lake in the Altai Mountains — the water shifts colour through the day from turquoise to emerald.',
  },
  {
    icon: 'village',
    title: 'Hemu Village',
    description:
      'A Tuvan and Kazakh village of wooden cabins in a valley ringed by birch forests — pure gold in autumn.',
  },
  {
    icon: 'mountain',
    title: 'Sayram Lake',
    description:
      'The largest alpine lake in Xinjiang at 2,070m, surrounded by summer pastures where Kazakh herders graze horses.',
  },
  {
    icon: 'rock',
    title: 'Ghost City',
    description:
      'Wind-carved sandstone formations that look like ruined castles and pagodas — best seen at sunset.',
  },
];

const HIGHLIGHT_ICONS: Record<string, string> = {
  lake: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12h2m16 0h2M6 12a6 6 0 0 1 12 0"/><path d="M12 6v6l4 2"/></svg>',
  village:
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v1"/><path d="M9 13v1"/></svg>',
  mountain:
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>',
  rock: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 22h20L12 2z"/></svg>',
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
    href: '/sichuan/chengdu-jiuzhaigou-huanglong',
    label: 'Sichuan: Jiuzhaigou',
    description: 'Another alpine lake paradise — turquoise pools and waterfalls.',
    image: '/images/destinations/sichuan.webp',
    imageAlt: 'Jiuzhaigou turquoise lakes',
    days: '6-8 days',
  },
];

const ITINERARY = [
  {
    day: 'Days 1-2',
    title: 'Urumqi to Kanas Lake',
    content:
      'Fly into Urumqi (URC). Spend one night, then take a morning flight to Kanas Airport (KJI, 1.5 hrs) or drive 8 hrs from Urumqi. Kanas Lake is a crescent-shaped alpine lake in the Altai Mountains, surrounded by Siberian larch and birch forests. The water shifts colour through the day — turquoise in the morning, deep blue at midday, emerald by afternoon. Take the park shuttle to the Fish-Watching Pavilion for the panoramic view — 1,068 steps up but worth every one.',
    tip: 'Stay inside the park at one of the wooden guesthouses near the lake. This saves you the entrance fee on day 2 and gives you the lake at sunrise before the tour buses arrive.',
  },
  {
    day: 'Days 3-4',
    title: 'Hemu Village',
    content:
      'Hemu Village is 60 km from Kanas but feels like a different century. It is a Tuvan and Kazakh village of wooden cabins in a valley ringed by birch forests. There is no "sight" here — you walk through the village at dawn as smoke rises from chimneys, cross the wooden bridge over the Hemu River, and climb the hillside for the classic view of the village in morning mist. In autumn, the surrounding hillsides are pure gold. In summer, everything is green and wildflowers carpet the meadows.',
    tip: 'The best photo spot is the hillside viewpoint on the east side of the village — a 20-minute climb from the river bridge. Go at 6:30am for sunrise mist. Bring a tripod if you are serious about photography.',
  },
  {
    day: 'Days 5-6',
    title: 'Karamay & Ghost City',
    content:
      'Drive south from Kanas to Karamay (6-7 hrs). Karamay is an oil town, but the reason to stop here is the Ghost City — a landscape of wind-carved sandstone formations that look like ruined castles, pagodas, and animals. Visit at sunset when the low light turns the rocks orange and red. The site has been used as a filming location for Crouching Tiger, Hidden Dragon.',
    tip: 'Sunset is around 7:30pm in summer, 6pm in autumn. There is a shuttle bus that loops through the formations — take it to the far end and walk back (3 km) for the best experience.',
  },
  {
    day: 'Days 7-8',
    title: 'Sayram Lake',
    content:
      'From Karamay, drive west to Sayram Lake (5-6 hrs) — a massive alpine lake at 2,070m on the northern slope of the Tianshan Mountains. It is the largest and highest alpine lake in Xinjiang, nicknamed "the last tear of the Atlantic" because it is the furthest inland point reached by Atlantic moisture. The lake is surrounded by summer pastures where Kazakh herders graze horses and sheep. In June, the lakeshore explodes with wildflowers.',
    tip: 'You can camp or stay in a Kazakh yurt by the lake (dinner and breakfast included). No showers, but the experience of waking up to the lake at sunrise is unmatched. The road around the lake is 90 km — a car is essential.',
  },
  {
    day: 'Days 9-10',
    title: 'Yining & Return',
    content:
      'Continue west to Yining (2 hrs from Sayram), the capital of Ili Kazakh Autonomous Prefecture. Yining has a strong Russian influence — visit the Russian Quarter and the Ili River Bridge. In April, the apricot blossoms in the Ili Valley are spectacular. Fly back to Urumqi from Yining Airport (YIN, 1.5 hrs) or drive back (7 hrs).',
    tip: "Yining Airport has flights to Urumqi roughly every 2 hours. Book the evening flight to maximise your last day. If you have extra time, Nalati Grassland (4 hrs east) is worth a detour — it is often called China's most beautiful grassland.",
  },
];

export default function NorthernLoopPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="northern-loop-schema" />

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
          alt="Kanas Lake in autumn with golden birch forests"
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
            Northern Xinjiang Loop: Lakes, Mountains & Kazakh Grasslands
          </h1>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
            8-12 days &middot; Best season: late Sept for autumn, June-July for green
          </div>
          <p
            style={{
              fontFamily: 'var(--font-quote)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
            }}
          >
            Kanas Lake in autumn gold, the wooden village of Hemu, Sayram Lake at 2,070m, and the
            endless green steppes of the Kazakh herders. This is the Xinjiang you see on postcards.
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
            Northern Xinjiang is a different world from the desert south. Here you find alpine
            forests, glacier-fed lakes, and rolling grasslands dotted with Kazakh yurts. This loop
            is the most photogenic route in Xinjiang — especially in late September when the birch
            forests turn gold. The driving distances are longer than the Silk Road route (roughly
            2,000 km total), so 10-12 days is more comfortable than 8.
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
                <strong>Late Sept-early Oct:</strong> Peak autumn foliage. Book everything 2-3
                months ahead — Kanas accommodation sells out. <strong>June-July:</strong> Green
                grasslands, wildflowers, pleasant temperatures (20-28°C).{' '}
                <strong>May & Sept:</strong> Shoulder season — good weather, fewer crowds.{' '}
                <strong>Winter (Nov-March):</strong> Kanas is accessible but buried in snow —
                beautiful if you are prepared for -20°C and limited services.
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
                Transportation
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '17px' }}>
                This route requires a private vehicle. Public transport exists between major towns
                (Urumqi, Karamay, Yining) but does not serve Kanas or Sayram Lake. Hire a car with
                driver in Urumqi — your hotel or a local agency can arrange a driver. Self-driving
                is possible but not recommended: road signs in remote areas are often Chinese-only
                and GPS is unreliable.
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
                Where to Stay
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '17px' }}>
                Accommodation in Northern Xinjiang ranges from international hotels in Urumqi to
                basic wooden guesthouses in Kanas and Hemu. Yurts at Sayram Lake are the most
                atmospheric option. Book Kanas and Hemu at least a month ahead in autumn. In smaller
                towns, your driver can recommend family-run guesthouses that are not on booking
                platforms.
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
            Every Northern Xinjiang journey we design is tailored to your pace and the season. Tell
            us when you want to go and what you love, and we'll craft an itinerary that's yours
            alone.
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
