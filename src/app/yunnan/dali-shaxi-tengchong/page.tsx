import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Dali, Shaxi & Tengchong: Yunnan's Slow Road | BeforeChina",
  description:
    "Skip the crowds. Dali's Erhai Lake, Shaxi's ancient tea-horse caravanserai, and Tengchong's volcanic hot springs — a Yunnan route for travellers who want depth over checklist.",
  alternates: { canonical: '/yunnan/dali-shaxi-tengchong' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/yunnan/dali-shaxi-tengchong',
    title: "Dali, Shaxi & Tengchong: Yunnan's Slow Road | BeforeChina",
    description:
      "Skip the crowds. Dali's Erhai Lake, Shaxi's ancient tea-horse caravanserai, and Tengchong's volcanic hot springs — a Yunnan route for travellers who want depth over checklist.",
    images: [
      {
        url: '/images/destinations/yunnan.webp',
        width: 1200,
        height: 630,
        alt: 'Shaxi ancient market town cobblestone square',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dali, Shaxi & Tengchong: Yunnan's Slow Road | BeforeChina",
    description:
      "Skip the crowds. Dali's Erhai Lake, Shaxi's ancient tea-horse caravanserai, and Tengchong's volcanic hot springs — a Yunnan route for travellers who want depth over checklist.",
    images: ['/images/destinations/yunnan.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is the best way to experience Dali, Shaxi & Tengchong: Yunnan's Slow Road?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 4-5 days. This route goes west from Dali into Yunnan's less-visited corners. Shaxi is a preserved market town on the ancient Tea Horse Road — what Lijiang was 30 years ago. Tengchong is a volcanic border town n",
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
      name: "Dali, Shaxi & Tengchong: Yunnan's Slow Road",
      item: 'https://beforechina.com/yunnan/dali-shaxi-tengchong',
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
          src="/images/destinations/yunnan.webp"
          alt="Shaxi ancient market town cobblestone square"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Yunnan &middot; 4-5 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Dali, Shaxi & Tengchong: Yunnan\'s Slow Road
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
            Skip the crowds. Dali\'s Erhai Lake, Shaxi\'s ancient tea-horse caravanserai, and
            Tengchong\'s volcanic hot springs — a Yunnan route for travellers who want depth over
            checklist.
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
                title: '4-5 Days',
                description:
                  'A slower-paced Yunnan route through less-visited corners — depth over checklist.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Dali → Shaxi → Tengchong',
                description:
                  "Goes west from Dali into Yunnan's hidden gems. Private car recommended.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Shaxi, Tengchong Hot Springs, Heshun Old Town',
                description:
                  "A preserved Tea Horse Road market town, volcanic hot springs, and a 600-year-old jade merchants' village.",
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
            This route goes west from Dali into Yunnan\'s less-visited corners. Shaxi is a preserved
            market town on the ancient Tea Horse Road — what Lijiang was 30 years ago. Tengchong is
            a volcanic border town near Myanmar, famous for hot springs, a well-preserved old town,
            and the tragic WWII battlefield at the Huitong Bridge. This route has fewer tourists and
            a slower pace.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Dali → Shaxi',
                content: `Start in Dali (fly into Dali Airport or take the train from Kunming). Drive 2.5 hours north to Shaxi (沙溪) — a 2,400-year-old market town on the Tea Horse Road. Shaxi\'s Sideng Square is ringed by wooden shopfronts and a 600-year-old theatre stage. Walk the cobblestone lanes, visit the Xingjiao Temple (built 1415), and have dinner at a courtyard guesthouse. Shaxi has maybe 20 guesthouses total — it\'s what Lijiang was before the tour buses arrived.`,
                tip: `Shaxi is best visited on a Friday — the weekly market fills Sideng Square with Bai and Yi villagers selling produce, handicrafts, and the best street snacks in western Yunnan.`,
              },
              {
                day: 'Day 2: Shaxi → Tengchong',
                content: `Morning in Shaxi — hike to the Shibaoshan Grottoes (16 Buddhist cave temples from the Nanzhao Kingdom, 1,200 years old, 30 min drive). Then drive 5 hours to Tengchong. Arrive by evening, check into a hot spring hotel, and soak. Tengchong has 99 volcanoes and 88 hot springs — the town is geothermally active and the hot spring water is genuinely therapeutic.`,
                tip: `Tengchong\'s Rehai (Hot Sea) Scenic Area has the best public hot springs — the full complex includes the \'Big Boiling Pot\' (大滚锅) where water emerges at 97°C. Bring your own swimsuit; rentals are overpriced.`,
              },
              {
                day: 'Day 3: Tengchong Volcano Park',
                content: `Morning: Tengchong Volcano National Park — hike up Daying Mountain (the largest dormant volcano, 30-minute climb) for the crater view. The park has 97 volcanic cones, and you can take a hot air balloon ride over the craters (about 15 minutes). Afternoon: Heshun Old Town (和顺古镇) — a 600-year-old village of grey-brick courtyard houses built by Tengchong jade merchants who traded across Southeast Asia. The library here is the oldest rural library in China (built 1924).`,
                tip: `Heshun Old Town has an entrance fee — but if you stay at a guesthouse inside the old town, the owner can often get you in for free. The morning market in Heshun\'s main square is excellent for breakfast.`,
              },
              {
                day: 'Day 4: WWII History & Fly Out',
                content: `Morning: National Cemetery of the Fallen (国殇墓园) — Tengchong was the site of a brutal 1944 battle where Chinese forces retook the city from the Japanese. The cemetery holds 3,346 soldiers and is deeply moving. If time permits, visit the Huitong Bridge — a key Burma Road crossing. Afternoon: fly out from Tengchong Tuofeng Airport (TCZ) to Kunming or Chengdu.`,
                tip: `Tengchong Airport has flights to Kunming (1 hr), Chengdu (1.5 hrs), and Chongqing. Book 2-3 days ahead — fewer flights than major cities.`,
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
            href: '/yunnan/kunming-dali-lijiang-shangri-la',
            label: 'Classic Yunnan Route',
            description: 'The main backpacker trail through Yunnan.',
            image: '/images/destinations/yunnan.webp',
            imageAlt: 'Lijiang old town',
            days: '7-8 days',
          },
          {
            href: '/sichuan/chengdu-in-depth',
            label: 'Chengdu In Depth',
            description: 'Fly from Tengchong to Chengdu for pandas and Sichuan food.',
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Chengdu panda',
            days: '3-4 days',
          },
          {
            href: '/guizhou/huangguoshu-libo-miao',
            label: 'Guizhou Waterfalls & Miao Villages',
            description: "Next door: Asia's largest waterfall and minority culture.",
            image: '/images/destinations/guizhou.webp',
            imageAlt: 'Huangguoshu waterfall',
            days: '5-6 days',
          },
        ]}
      />
    </div>
  );
}
