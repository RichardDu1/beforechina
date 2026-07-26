import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Lhasa & Namtso Lake (5-6 Days) | Short Tibet Itinerary | BeforeChina',
  description:
    "A shorter Tibet route: Lhasa's Potala Palace, Jokhang Temple, and Namtso Lake — one of the world's highest salt lakes at 4,718m.",
  alternates: { canonical: '/tibet/lhasa-namtso-lake' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/tibet/lhasa-namtso-lake',
    title: 'Lhasa & Namtso Lake (5-6 Days) | Short Tibet Itinerary | BeforeChina',
    description:
      "A shorter Tibet route: Lhasa's Potala Palace, Jokhang Temple, and Namtso Lake — one of the world's highest salt lakes at 4,718m.",
    images: [
      {
        url: '/images/destinations/tibet.webp',
        width: 1200,
        height: 630,
        alt: 'Namtso Lake turquoise water with snow peaks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lhasa & Namtso Lake (5-6 Days) | Short Tibet Itinerary | BeforeChina',
    description:
      "A shorter Tibet route: Lhasa's Potala Palace, Jokhang Temple, and Namtso Lake — one of the world's highest salt lakes at 4,718m.",
    images: ['/images/destinations/tibet.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is the best way to experience Lhasa & Namtso Lake: Tibet's Holy City & Heavenly Lake?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 5-6 days. For travellers who want a taste of Tibet without the long drives to Everest. This route focuses on Lhasa and Namtso Lake (纳木错) — one of the world's highest and largest salt lakes at 4,718m, 1,920 km² ",
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
      name: "Lhasa & Namtso Lake: Tibet's Holy City & Heavenly Lake",
      item: 'https://beforechina.com/tibet/lhasa-namtso-lake',
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
          src="/images/destinations/tibet.webp"
          alt="Namtso Lake turquoise water with snow peaks"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Tibet &middot; 5-6 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Lhasa & Namtso Lake: Tibet\'s Holy City & Heavenly Lake
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
            Lhasa\'s Potala Palace, the Jokhang Temple, and Namtso — a 1,920 km² salt lake at
            4,718m, one of the most beautiful places on the Tibetan Plateau.
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
                  "A shorter Tibet experience — the holy city of Lhasa plus one of the world's most beautiful high-altitude lakes.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Lhasa → Namtso Lake → Lhasa',
                description:
                  'Lhasa at 3,650m to Namtso Lake at 4,718m — a 4-5 hour drive across the Tibetan Plateau.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Potala Palace, Jokhang Temple, Namtso Lake',
                description:
                  "Tibet's holiest sites plus a 1,920 km² turquoise lake ringed by snow-capped peaks.",
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
            For travellers who want a taste of Tibet without the long drives to Everest. This route
            focuses on Lhasa and Namtso Lake (纳木错) — one of the world\'s highest and largest salt
            lakes at 4,718m, 1,920 km² of turquoise water ringed by snow-capped peaks. Lhasa gives
            you Tibetan Buddhism\'s holiest sites; Namtso gives you the Tibetan Plateau\'s stark,
            high-altitude beauty. The 5-6 day timeline is ideal for those with limited time or as an
            add-on to a longer China trip.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Arrive Lhasa (3,650m)',
                content: `Fly into Lhasa Gonggar Airport. Transfer to hotel. REST — your first 24 hours at altitude are for acclimatisation only. Drink water, avoid alcohol and showers. Walk slowly. Your guide will brief you on the itinerary and altitude safety.`,
                tip: `Same altitude rules apply: rest, hydrate, Diamox. Flying into Lhasa from sea level is a shock to your body. Take it seriously.`,
              },
              {
                day: 'Day 2: Lhasa',
                content: `Morning: Jokhang Temple and Barkhor Street — the spiritual heart of Tibet. Walk the pilgrim circuit, absorb the atmosphere, visit the Jowo Rinpoche statue. Afternoon: Sera Monastery for the 3pm monk debate. Evening: traditional Tibetan dinner.`,
                tip: `The Barkhor circuit is best walked in the morning (8-10am) when pilgrims are most active. Walk clockwise. The smell of yak butter, incense, and the sound of chanting create an atmosphere found nowhere else in the world.`,
              },
              {
                day: 'Day 3: Lhasa',
                content: `Morning: Potala Palace — the 1-hour timed visit through the White and Red Palaces. Afternoon: Norbulingka, the summer palace, or the Tibet Museum. Evening: preparation for the Namtso drive (your guide will check the weather forecast — Namtso is impassable in snow).`,
                tip: `Potala Palace visit is strictly 1 hour. Your guide will set the pace. The climb is steep at altitude. The tomb of the 5th Dalai Lama (the \'Great Fifth\') is 3,700 kg of gold and studded with 18,000 pearls and jewels.`,
              },
              {
                day: 'Day 4: Lhasa → Namtso Lake (4,718m)',
                content: `Drive 4-5 hours from Lhasa to Namtso Lake. The road crosses the Nyenchen Tanglha Mountains and the Yangbajain geothermal fields (steam vents visible from the road). Namtso appears suddenly as you crest the Lhachen La pass (5,190m) — a vast expanse of turquoise stretching to the horizon, with the Nyenchen Tanglha snow range (7,162m) as a backdrop. Walk the shore, visit Tashi Dor Island (connected by a causeway in dry season), and watch the sunset. Stay overnight in a guesthouse near the lake (5,000m, basic).`,
                tip: `Namtso at 4,718m is COLDER than Everest Base Camp (5,150m) because of the wind off the lake. Night temperatures drop to -10°C even in summer. The guesthouses are very basic — dorm beds with thick blankets, no heating, squat toilets. The altitude is intense — you are sleeping 1,000m higher than Lhasa. Diamox essential.`,
              },
              {
                day: 'Day 5: Namtso → Lhasa',
                content: `Sunrise at Namtso — the first light on the Nyenchen Tanglha peaks is one of Tibet\'s most beautiful sights. Walk the shore one last time, then drive 4-5 hours back to Lhasa. Afternoon: rest and recovery. Farewell dinner in Lhasa.`,
                tip: `Namtso sunrise is worth the cold. The lake is calmest at dawn, and the snow peaks turn from grey to pink to gold. The Tashi Dor hermitage on the island has meditation caves used by Tibetan hermits for centuries.`,
              },
              {
                day: 'Day 6: Depart Lhasa',
                content: `Transfer to Lhasa airport. If your flight is late, visit the Tibetan Traditional Medicine Museum or buy thangka paintings and yak-wool products on Barkhor Street.`,
                tip: `Thangka paintings (Tibetan Buddhist scroll paintings on cotton or silk) make the best Tibet souvenir. A hand-painted thangka by a trained artist is a serious investment — the finest pieces take months to complete and reflect generations of artistic tradition. Browse the galleries on Barkhor Street but be respectful — these are religious objects.`,
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
            href: '/tibet/lhasa-shigatse-everest',
            label: 'Lhasa, Shigatse & Everest',
            description: 'The full Tibet route — add Shigatse and Everest Base Camp.',
            image: '/images/destinations/tibet.webp',
            imageAlt: 'Potala Palace at dawn in Lhasa',
            days: '8-10 days',
          },
          {
            href: '/sichuan/chengdu-daocheng-yading',
            label: 'Daocheng Yading',
            description: "Sichuan's Tibetan regions — perfect pre-Tibet acclimatisation.",
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Daocheng Yading snow peaks',
            days: '7-9 days',
          },
          {
            href: '/yunnan/kunming-dali-lijiang-shangri-la',
            label: 'Classic Yunnan Route',
            description: 'Explore Shangri-La and the ancient tea horse road.',
            image: '/images/destinations/yunnan.webp',
            imageAlt: 'Shangri-La old town',
            days: '8-12 days',
          },
        ]}
      />
    </div>
  );
}
