import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Hexi Corridor Deep Dive (10-12 Days) | Complete Silk Road in Gansu | BeforeChina',
  description:
    'A comprehensive Hexi Corridor route: Lanzhou to Dunhuang with all the stops — Bingling Temple, Wuwei, Zhangye, Jiayuguan, and the Mogao Caves at a slower pace.',
  alternates: { canonical: '/silk-road/hexi-corridor-deep' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/silk-road/hexi-corridor-deep',
    title: 'Hexi Corridor Deep Dive (10-12 Days) | Complete Silk Road in Gansu | BeforeChina',
    description:
      'A comprehensive Hexi Corridor route: Lanzhou to Dunhuang with all the stops — Bingling Temple, Wuwei, Zhangye, Jiayuguan, and the Mogao Caves at a slower pace.',
    images: [
      {
        url: '/images/destinations/silk-road.webp',
        width: 1200,
        height: 630,
        alt: 'Hexi Corridor rainbow mountains',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hexi Corridor Deep Dive (10-12 Days) | Complete Silk Road in Gansu | BeforeChina',
    description:
      'A comprehensive Hexi Corridor route: Lanzhou to Dunhuang with all the stops — Bingling Temple, Wuwei, Zhangye, Jiayuguan, and the Mogao Caves at a slower pace.',
    images: ['/images/destinations/silk-road.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Hexi Corridor Deep Dive: The Complete Gansu Silk Road?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This journey typically takes 10-12 days. This is the Silk Road route for travellers who want to do the Hexi Corridor properly. It adds stops that the 7-day route skips: Bingling Temple (a Buddhist cave complex accessible only by boat), Wuwei',
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
      name: 'Hexi Corridor Deep Dive: The Complete Gansu Silk Road',
      item: 'https://beforechina.com/silk-road/hexi-corridor-deep',
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
          src="/images/destinations/silk-road.webp"
          alt="Hexi Corridor rainbow mountains"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Silk Road &middot; 10-12 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Hexi Corridor Deep Dive: The Complete Gansu Silk Road
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
            Every stop along the 1,000km Hexi Corridor — from Buddhist cave temples to rainbow
            mountains, desert fortresses, and the Mogao Caves — at a pace that lets you absorb it
            all.
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
                title: '10-12 Days',
                description:
                  'The complete Hexi Corridor at a slower pace — time for detours, discoveries, and deeper exploration.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Lanzhou → Wuwei → Zhangye → Jiayuguan → Dunhuang',
                description:
                  "Every major stop along the 1,000km corridor that was the Silk Road's main artery for 1,000 years.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Bingling Temple, Rainbow Mountains, Mogao Caves',
                description:
                  "Three Buddhist cave complexes, rainbow-coloured mountains, and the Great Wall's western terminus.",
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
            This is the Silk Road route for travellers who want to do the Hexi Corridor properly. It
            adds stops that the 7-day route skips: Bingling Temple (a Buddhist cave complex
            accessible only by boat), Wuwei (the historical heart of the corridor with a Han dynasty
            bronze horse that is China\'s national tourism symbol), and extra time in Zhangye and
            Dunhuang. The pace is slower — you are never rushing to make a train, and you have time
            for detours and discoveries.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Lanzhou',
                content: `Arrive Lanzhou. Afternoon: Zhongshan Bridge, White Pagoda Mountain, and the Gansu Provincial Museum (free) — home of the \'Flying Horse of Gansu\', a Han dynasty bronze horse (2nd century AD) that is China\'s national tourism symbol. Evening: Lanzhou beef noodles for dinner.`,
                tip: `The Gansu Provincial Museum\'s \'Flying Horse of Gansu\' (马踏飞燕) is a 34.5cm bronze horse from a Han dynasty general\'s tomb, caught mid-gallop with one hoof on a flying swallow. It is China\'s most famous bronze sculpture and the symbol of the China Tourism Administration. The museum also has excellent Silk Road exhibits.`,
              },
              {
                day: 'Day 2: Lanzhou → Bingling Temple → Lanzhou',
                content: `Day trip to Bingling Temple (炳灵寺, ¥50 + ¥120 boat) — a Buddhist cave complex 80 km from Lanzhou, accessible only by a 1-hour boat ride through the Liujiaxia Reservoir. The caves contain 183 niches with 694 stone statues and 900 m² of murals, carved from the 4th to 15th centuries. The highlight is a 27m seated Maitreya Buddha carved into the cliff face. Return to Lanzhou in the evening.`,
                tip: `Bingling Temple is one of China\'s most underrated Buddhist sites. The boat ride through the reservoir (flooded in 1967 to build a dam) takes you through a landscape of eroded sandstone cliffs. The temple\'s remote location means far fewer visitors than Mogao or Longmen. The boat departs from Liujiaxia Dam — 1.5 hours from Lanzhou by bus (¥30).`,
              },
              {
                day: 'Day 3: Lanzhou → Wuwei',
                content: `Take the 1.5-hour high-speed train from Lanzhou West to Wuwei East (¥90). Wuwei (武威) was the first city the Silk Road reached after leaving the Chinese heartland. Visit the Leitai Han Tomb (雷台汉墓, ¥45) where the Flying Horse of Gansu was discovered in 1969. The tomb is a brick-vaulted Han dynasty general\'s burial with 99 bronze chariots and horses. Afternoon: Confucius Temple (文庙, ¥30), the largest in northwest China, and the Wuwei Museum for Silk Road artefacts. Evening: Wuwei \'three sets\' noodles (三套车) — noodles, braised pork, and tea.`,
                tip: `Wuwei is often skipped on Silk Road itineraries, but it was the most important city on the Hexi Corridor during the Han dynasty. The Leitai Han Tomb is the original find site of the Flying Horse — the original is in the Gansu Museum in Lanzhou, but the tomb itself is evocative.`,
              },
              {
                day: 'Day 4: Wuwei → Zhangye',
                content: `Take the 1-hour high-speed train from Wuwei East to Zhangye West (¥75). Afternoon: Zhangye Danxia Landform — the rainbow mountains at their best in late afternoon light. Stay overnight in Zhangye.`,
                tip: `If you have a flexible schedule, consider spending a second day in Zhangye to visit the Mati Temple (马蹄寺, ¥75), a complex of Buddhist caves carved into a cliff 65 km south of the city. The caves include a 7-storey pagoda carved inside the mountain, with interior passages connecting the levels.`,
              },
              {
                day: 'Day 5: Zhangye → Jiayuguan',
                content: `Take the 1.5-hour high-speed train from Zhangye West to Jiayuguan South (¥80). Full afternoon at Jiayuguan Fortress, the Overhanging Great Wall, and the First Strategic Post — the western end of the Ming dynasty Great Wall. Evening: Jiayuguan lamb skewers.`,
                tip: `The \'First Strategic Post\' (第一墩) is a weathered earthen mound 7.5 km southwest of the fortress — it was the actual westernmost point of the Ming Great Wall, standing on a 56m cliff above the Taolai River. The view from the glass observation deck is vertiginous.`,
              },
              {
                day: 'Day 6: Jiayuguan → Dunhuang',
                content: `Drive 4.5 hours through the Gobi Desert to Dunhuang. Afternoon: Mingsha Sand Dunes and Crescent Moon Spring at sunset. Evening: Shazhou Night Market.`,
                tip: `The Jiayuguan-Dunhuang drive is on a good highway through a landscape of absolute emptiness — black gravel desert, distant snow-capped mountains, and the occasional camel herd. There is a rest stop at Guazhou (瓜州), famous for melons. Buy a honeydew melon (¥5-10) — they are the sweetest in China.`,
              },
              {
                day: 'Day 7: Dunhuang — Mogao Caves',
                content: `Full morning at the Mogao Caves (book 2-4 weeks ahead). The guided tour (A-category, ¥238) covers 8 caves including the Tang dynasty masterpieces. Afternoon: Dunhuang Museum and a rest. Evening: optional second visit to Mingsha Sand Dunes (the ticket is valid for 3 days).`,
                tip: `Mogao Caves Cave 45 is the highlight — a Tang dynasty cave with a perfectly preserved group of 7 painted sculptures: Buddha flanked by two disciples, two bodhisattvas, and two guardian kings. The colour on the bodhisattvas\' robes is still vivid after 1,300 years. Cave 158 has a 16m reclining Buddha in nirvana.`,
              },
              {
                day: 'Day 8: Dunhuang — Yulin Caves + Yadan',
                content: `Day trip: Yulin Caves (榆林窟, ¥40, 2.5 hrs east of Dunhuang) — a sister site to Mogao with 42 caves, less visited but with some of the finest Tang dynasty murals (including a famous mural of the Tang monk Xuanzang with a monkey — a precursor to Journey to the West). Afternoon: Yadan Ghost City (雅丹魔鬼城, ¥50 + ¥70 shuttle), a landscape of wind-eroded rock formations 180 km northwest of Dunhuang. Return to Dunhuang late evening.`,
                tip: `The Yulin Caves are smaller and less visited than Mogao but the quality of the murals in the Tang caves is equal or better. Cave 25 has a famous mural of the Amitabha Sutra that is considered one of the finest Tang dynasty paintings in existence. Yadan Ghost City is best at sunset — the rock formations glow orange against the darkening sky.`,
              },
              {
                day: 'Day 9: Dunhuang → Fly Out',
                content: `Fly out from Dunhuang. If you have a late flight, visit the Western Thousand Buddha Caves (西千佛洞) or the Dunhuang night market for last-minute Silk Road souvenirs (camel-wool scarves, replica Mogao murals, Dunhuang yellow noodles to take home).`,
                tip: `Dunhuang souvenirs: replica Mogao mural paintings on silk (¥50-200), camel-wool scarves (¥30-80), and dried fruits from Xinjiang (dates, raisins, apricots). The night market is the best place to buy — bargain hard (start at 50% of asking price).`,
              },
            ].map((stop, i) => (
              <div
                key={stop.day}
                style={{
                  padding: '40px 0',
                  borderBottom: i < 8 ? '1px solid var(--border-color)' : 'none',
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
            href: '/silk-road/xian-lanzhou-dunhuang',
            label: 'Classic Silk Road',
            description: "The 7-8 day version starting from Xi'an — all the highlights.",
            image: '/images/destinations/silk-road.webp',
            imageAlt: 'Camel caravan in Dunhuang desert',
            days: '7-8 days',
          },
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: "Combine Xi'an with Beijing and Shanghai.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8-10 days',
          },
          {
            href: '/tibet/lhasa-shigatse-everest',
            label: 'Lhasa, Shigatse & Everest',
            description: "Head to the Roof of the World — Tibet's essential route.",
            image: '/images/destinations/tibet.webp',
            imageAlt: 'Potala Palace at dawn in Lhasa',
            days: '8-10 days',
          },
        ]}
      />
    </div>
  );
}
