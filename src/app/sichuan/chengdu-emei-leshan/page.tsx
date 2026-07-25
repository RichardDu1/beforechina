import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Chengdu, Emei Mountain & Leshan Giant Buddha | BeforeChina',
  description:
    "Pandas in the morning, a 71m Buddha carved into a cliff face, and sunrise from a 3,099m golden summit — Sichuan's holy trinity.",
  alternates: { canonical: '/sichuan/chengdu-emei-leshan' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/sichuan/chengdu-emei-leshan',
    title: 'Chengdu, Emei Mountain & Leshan Giant Buddha | BeforeChina',
    description:
      "Pandas in the morning, a 71m Buddha carved into a cliff face, and sunrise from a 3,099m golden summit — Sichuan's holy trinity.",
    images: [
      {
        url: '/images/destinations/sichuan.webp',
        width: 1200,
        height: 630,
        alt: 'Leshan Giant Buddha carved into red sandstone cliff',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chengdu, Emei Mountain & Leshan Giant Buddha | BeforeChina',
    description:
      "Pandas in the morning, a 71m Buddha carved into a cliff face, and sunrise from a 3,099m golden summit — Sichuan's holy trinity.",
    images: ['/images/destinations/sichuan.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Chengdu, Emei Mountain & Leshan Giant Buddha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 3-4 days. This route pairs Chengdu's pandas with two of Sichuan's UNESCO sites, both reachable within 2 hours by high-speed train. Leshan Giant Buddha is a 71m Maitreya carved into a red sandstone cliff at the ",
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
      name: 'Chengdu, Emei Mountain & Leshan Giant Buddha',
      item: 'https://beforechina.com/sichuan/chengdu-emei-leshan',
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
          src="/images/destinations/sichuan.webp"
          alt="Leshan Giant Buddha carved into red sandstone cliff"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Sichuan &middot; 3-4 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Chengdu, Emei Mountain & Leshan Giant Buddha
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
            Pandas in the morning, a 71m Buddha carved into a cliff face, and sunrise from a 3,099m
            golden summit — Sichuan\'s holy trinity.
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
                  "Sichuan's holy trinity — pandas, a 71m Buddha, and a sacred 3,099m summit.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Chengdu → Leshan → Emeishan',
                description:
                  'Connected by high-speed trains: Chengdu to Leshan (50 min), Leshan to Emeishan (15 min).',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Pandas, Leshan Giant Buddha, Emei Golden Summit',
                description:
                  "The world's largest pre-modern statue and one of China's Four Sacred Buddhist Mountains.",
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
            This route pairs Chengdu\'s pandas with two of Sichuan\'s UNESCO sites, both reachable
            within 2 hours by high-speed train. Leshan Giant Buddha is a 71m Maitreya carved into a
            red sandstone cliff at the confluence of three rivers — it took 90 years to complete
            (713-803 AD) and is the world\'s largest pre-modern statue. Mount Emei is one of
            China\'s Four Sacred Buddhist Mountains, with a 3,099m summit where the sunrise creates
            a \'Buddha\'s halo\' optical phenomenon.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Chengdu → Leshan → Emeishan',
                content: `Morning: Chengdu Panda Base (7:30am). Then take the 50-minute high-speed train from Chengdu South to Leshan (¥54). Visit the Leshan Giant Buddha — walk down the cliffside staircase to see the Buddha from the base (the feet alone are 8.5m wide, each toenail fits a seated person). Take the ferry (¥70) for the frontal river-level view. Afternoon: train from Leshan to Emeishan (15 min, ¥11). Stay at the base town (Baoguo Temple area).`,
                tip: `The Leshan Buddha staircase has 250 steps and queues can be 2+ hours on weekends. Go on a weekday, or take the ferry instead — it\'s faster and gives a better frontal view for photos.`,
              },
              {
                day: 'Day 2: Emeishan Summit',
                content: `Take the 6am shuttle bus from the base to Leidongping (2 hrs, ¥90 round trip). From Leidongping, walk 20 minutes to the cable car station, then take the cable car (¥65 up) to the Golden Summit (金顶) at 3,099m. The 48m golden statue of Samantabhadra (Puxian) on the summit is stunning against the clouds. On clear days, you can see the Gongga Mountains 100 km away. Walk down via the Wannian Temple path (or take the cable car back if short on time). Evening: return to Chengdu by train.`,
                tip: `Emeishan entrance: ¥160 (2-day validity). The summit is 15°C colder than the base — bring layers even in summer. The monkeys on the trail are aggressive and will grab food/water bottles. Don\'t carry visible food and don\'t make eye contact.`,
              },
              {
                day: 'Day 3: Chengdu Food & Culture',
                content: `Morning: Jinli Ancient Street and Wuhou Temple (Three Kingdoms history). Afternoon: Sichuan cooking class — learn to make kung pao chicken, mapo tofu, and dan dan noodles (half-day classes from ¥200). Evening: Sichuan opera at Shufeng Yayun Teahouse — face-changing, fire-spitting, and hand-shadow performances.`,
                tip: `The Sichuan opera face-changing (变脸) is genuinely impressive — performers change masks in a split second with a flick of the head. Shufeng Yayun (¥150-280) is the best show in Chengdu. Book evening tickets the day before.`,
              },
            ].map((stop, i) => (
              <div
                key={stop.day}
                style={{
                  padding: '40px 0',
                  borderBottom: i < 2 ? '1px solid var(--border-color)' : 'none',
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
            href: '/sichuan/chengdu-jiuzhaigou-huanglong',
            label: 'Jiuzhaigou Route',
            description: 'Add the turquoise lakes and travertine pools.',
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Jiuzhaigou turquoise lake',
            days: '5-6 days',
          },
          {
            href: '/sichuan/chengdu-in-depth',
            label: 'Chengdu In Depth',
            description: 'Go deeper into pandas, hot pot, and tea house culture.',
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Chengdu panda',
            days: '3-4 days',
          },
          {
            href: '/sichuan/chengdu-daocheng-yading',
            label: 'Daocheng Yading',
            description: 'Extend to the Last Shangri-La for high-altitude adventure.',
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Daocheng Yading',
            days: '7-8 days',
          },
        ]}
      />
    </div>
  );
}
