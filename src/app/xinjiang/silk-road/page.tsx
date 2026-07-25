import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import EnquiryForm from '@/components/EnquiryForm';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Classic Silk Road: Urumqi to Kashgar (7-10 Days) | BeforeChina',
  description:
    'The classic Silk Road route through Xinjiang: Urumqi → Turpan → Korla → Kuqa → Kashgar. Heavenly Lake, Jiaohe Ruins, Kizil Caves, and Kashgar Bazaar in 7-10 days.',
  alternates: { canonical: '/xinjiang/silk-road' },
  openGraph: {
    type: 'website',
    url: 'https://beforechina.com/xinjiang/silk-road',
    title: 'Classic Silk Road: Urumqi to Kashgar | BeforeChina',
    description:
      'Heavenly Lake, the Flaming Mountains, Kizil Caves, and the Kashgar Sunday Bazaar.',
    images: [
      {
        url: '/images/destinations/xinjiang.webp',
        width: 1200,
        height: 630,
        alt: 'Karakul Lake in Xinjiang',
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
      name: 'How many days do I need for the Silk Road in Xinjiang?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '7-10 days covers the classic highlight route from Urumqi to Kashgar. In 7 days you can do Urumqi → Turpan → Kashgar (fly the long leg). With 10 days, add Korla and Kuqa for the full Silk Road experience including the Kizil Thousand Buddha Caves.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit the Silk Road route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'April-May and September-October are ideal. Summer (June-August) is hot, especially in Turpan where temperatures hit 45°C (113°F). Winter (November-March) is cold but Kashgar and Urumqi are still accessible — and you will see far fewer tourists.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this itinerary customisable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — every BeforeChina itinerary is built from scratch. You can extend the trip with a detour to the Karakoram Highway, swap train journeys for flights, or add extra days in Kashgar for a deeper dive into the Old City.',
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
      name: 'Classic Silk Road Route',
      item: 'https://beforechina.com/xinjiang/silk-road',
    },
  ],
};

const HIGHLIGHTS = [
  {
    icon: 'lake',
    title: 'Heavenly Lake',
    description:
      'An alpine lake at 2,000m backed by the snow-capped Bogda Peak — a cool escape an hour from Urumqi.',
  },
  {
    icon: 'history',
    title: 'Jiaohe Ruins',
    description:
      'A 2,300-year-old Silk Road city carved into a desert plateau — one of the best-preserved ancient cities in the world.',
  },
  {
    icon: 'art',
    title: 'Kizil Caves',
    description:
      'Buddhist cave murals from the 3rd century, older than Dunhuang, carved into cliffs above the Muzat River.',
  },
  {
    icon: 'bazaar',
    title: 'Kashgar Sunday Bazaar',
    description:
      'The largest outdoor market in Central Asia — not a tourist market, but the real thing.',
  },
];

const HIGHLIGHT_ICONS: Record<string, string> = {
  lake: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12h2m16 0h2M6 12a6 6 0 0 1 12 0"/><path d="M12 6v6l4 2"/></svg>',
  history:
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12a9 9 0 1 0 9-9 9 9 0 0 0-9 9z"/><path d="M12 7v5l3 3"/></svg>',
  art: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>',
  bazaar:
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>',
};

const RELATED = [
  {
    href: '/xinjiang/karakoram-highway',
    label: 'Karakoram Highway',
    description: 'From Kashgar to the Pakistan border through the Pamir Mountains.',
    image: '/images/destinations/xinjiang.webp',
    imageAlt: 'Karakoram Highway mountain scenery',
    days: '5-7 days',
  },
  {
    href: '/xinjiang/northern-loop',
    label: 'Northern Xinjiang Loop',
    description: 'Kanas Lake, Hemu Village, and Kazakh grasslands.',
    image: '/images/destinations/xinjiang.webp',
    imageAlt: 'Kanas Lake in autumn',
    days: '8-12 days',
  },
  {
    href: '/silk-road/xian-lanzhou-dunhuang',
    label: "Silk Road: Xi'an to Dunhuang",
    description: 'The eastern half of the Silk Road through the Hexi Corridor.',
    image: '/images/destinations/silk-road.webp',
    imageAlt: 'Camel caravan in Dunhuang desert',
    days: '7-10 days',
  },
];

const ITINERARY = [
  {
    day: 'Days 1-2',
    title: 'Urumqi',
    content:
      'Fly into Urumqi Diwopu (URC). Spend day one at Heavenly Lake (Tianchi) — a stunning alpine lake 110 km east of the city at 2,000m elevation, backed by snow-capped Bogda Peak. Day two: Xinjiang Regional Museum (see the 3,800-year-old Tarim mummies) and the Grand Bazaar. Urumqi is modern and Mandarin-speaking — a soft landing before the deeper Silk Road.',
    tip: 'Stay near Hongshan Park for easy access to both the museum and the bazaar. The area is central and walkable.',
  },
  {
    day: 'Days 3-4',
    title: 'Turpan',
    content:
      "Take the 1-hour high-speed train to Turpan. This is China's lowest and hottest city — 154m below sea level in the Turpan Depression. Visit the Jiaohe Ruins (a 2,300-year-old Silk Road city carved into a plateau), the Emin Minaret, and the Grape Valley. Don't miss the karez irrigation system — an underground aqueduct network built 2,000 years ago that still works today.",
    tip: 'Turpan is brutally hot June-August (40°C+). Visit Jiaohe Ruins at sunrise — the light is magical and you will beat both the heat and the tour groups.',
  },
  {
    day: 'Days 5-6',
    title: 'Korla & Kuqa',
    content:
      "Take the train to Korla (4 hrs), then transfer to Kuqa (2 hrs). Kuqa was the ancient Buddhist kingdom of Kucha. Visit the Kizil Thousand Buddha Caves — 236 caves carved into cliffs, with murals dating from the 3rd to 8th centuries, older than Dunhuang. Also see the Kuqa Grand Mosque and the old town's Sunday market.",
    tip: 'Kizil Caves are 75 km from Kuqa — hire a driver for the day. Only a handful of caves are open to visitors. Photography is prohibited inside.',
  },
  {
    day: 'Days 7-8',
    title: 'Kashgar',
    content:
      "Fly from Kuqa to Kashgar (1.5 hrs) or take the train (10 hrs overnight). Kashgar is the climax. Spend your first day at the Kashgar Sunday Bazaar — the largest outdoor market in Central Asia. It is not a tourist market; locals buy and sell livestock, carpets, spices, and everything else here. Day two: Id Kah Mosque (China's largest, built 1442), the Old City lanes, and Apak Khoja Mausoleum. In the evening, eat lamb kebabs at the night market near Id Kah.",
    tip: "The Sunday Bazaar starts early (by 9am) and winds down by 2pm. Go early for the livestock section — it is the most atmospheric part. Bring cash; many vendors don't take digital payments.",
  },
];

export default function SilkRoadPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="silk-road-schema" />

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
          alt="Karakul Lake with Muztagh Ata peak, Xinjiang"
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
            Classic Silk Road: Urumqi to Kashgar
          </h1>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
            7-10 days
          </div>
          <p
            style={{
              fontFamily: 'var(--font-quote)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
            }}
          >
            The route that Marco Polo took — Heavenly Lake, the Flaming Mountains of Turpan,
            thousand-year-old Buddhist caves at Kizil, and the legendary Kashgar Sunday Bazaar.
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
            This is the classic introduction to Xinjiang. You start in the regional capital Urumqi,
            follow the northern arc of the Taklamakan Desert through ancient oasis towns, and finish
            in Kashgar — the heart of Central Asian Silk Road culture. The total driving distance is
            roughly 1,500 km, but you will fly the Korla-Kashgar leg.
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
                Getting Between Cities
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '17px' }}>
                High-speed rail connects Urumqi → Turpan (1 hr) and Turpan → Korla (3 hrs). For Kuqa
                → Kashgar, flying is strongly recommended — the train takes 10 hours. All cities
                have reliable ride-hailing for local transport.
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
                All cities on this route have comfortable hotels. In Kashgar, stay in the Old City
                area for atmosphere — there are guesthouses with rooftop views of the Id Kah
                minaret. In Urumqi, the area around Hongshan Park is central and walkable.
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
                What to Pack
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '17px' }}>
                Sunscreen and a hat are non-negotiable — Xinjiang sun is intense, especially in the
                desert. A scarf or light jacket for mosque visits (shoulders covered). Download
                offline maps before you go — Google Maps is inaccurate in China. A portable battery
                pack; you will use your phone for everything.
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
            Every Silk Road itinerary we design is tailored to your pace, interests, and travel
            style. Tell us what moves you, and we'll craft a journey that's yours alone.
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
