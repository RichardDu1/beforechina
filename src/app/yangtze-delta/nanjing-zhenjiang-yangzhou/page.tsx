import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Nanjing & Yangzhou: Imperial Capital & Canal Cities | BeforeChina',
  description:
    "Nanjing's 600-year-old city walls, Sun Yat-sen's mountain-top mausoleum, and Yangzhou's Grand Canal morning tea culture — the Yangtze Delta's historic heart.",
  alternates: { canonical: '/yangtze-delta/nanjing-zhenjiang-yangzhou' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/yangtze-delta/nanjing-zhenjiang-yangzhou',
    title: 'Nanjing & Yangzhou: Imperial Capital & Canal Cities | BeforeChina',
    description:
      "Nanjing's 600-year-old city walls, Sun Yat-sen's mountain-top mausoleum, and Yangzhou's Grand Canal morning tea culture — the Yangtze Delta's historic heart.",
    images: [
      {
        url: '/images/destinations/yangtze-delta.webp',
        width: 1200,
        height: 630,
        alt: 'Nanjing Ming dynasty city walls',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nanjing & Yangzhou: Imperial Capital & Canal Cities | BeforeChina',
    description:
      "Nanjing's 600-year-old city walls, Sun Yat-sen's mountain-top mausoleum, and Yangzhou's Grand Canal morning tea culture — the Yangtze Delta's historic heart.",
    images: ['/images/destinations/yangtze-delta.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Nanjing & Yangzhou: Imperial Capital & Canal Cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 4-5 days. Nanjing (南京, 'Southern Capital') was China's capital six times, most recently as the Republic of China's capital under Sun Yat-sen. It has Ming dynasty city walls (the longest surviving city walls in ",
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
      name: 'Nanjing & Yangzhou: Imperial Capital & Canal Cities',
      item: 'https://beforechina.com/yangtze-delta/nanjing-zhenjiang-yangzhou',
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
          src="/images/destinations/yangtze-delta.webp"
          alt="Nanjing Ming dynasty city walls"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Yangtze Delta &middot; 4-5 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Nanjing & Yangzhou: Imperial Capital & Canal Cities
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
            Nanjing\'s 600-year-old city walls, Sun Yat-sen\'s mountain-top mausoleum, and
            Yangzhou\'s Grand Canal morning tea culture — the Yangtze Delta\'s historic heart.
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
                  "A compact route through the Yangtze Delta's historic heart — Nanjing, Zhenjiang, and Yangzhou.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Nanjing → Zhenjiang → Yangzhou',
                description:
                  'Connected by high-speed rail and bus. All three cities are within 2 hours of Shanghai.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'City Walls, Mausoleum, Morning Tea',
                description:
                  "Ming dynasty fortifications, Sun Yat-sen's mountain-top memorial, and a leisurely dim sum ritual.",
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
            Nanjing (南京, \'Southern Capital\') was China\'s capital six times, most recently as
            the Republic of China\'s capital under Sun Yat-sen. It has Ming dynasty city walls (the
            longest surviving city walls in the world at 35 km), a mountain-top mausoleum, and a
            dark WWII history at the Nanjing Massacre Memorial. Yangzhou (扬州), 1 hour east, was
            one of China\'s wealthiest cities during the Tang dynasty thanks to its position on the
            Grand Canal. Today it is known for morning tea culture (早茶) — a leisurely dim sum
            ritual that rivals Guangzhou\'s.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Shanghai → Nanjing',
                content: `Take the 1-hour high-speed train from Shanghai to Nanjing South. Afternoon: walk the Nanjing City Wall — the best section is from Xuanwu Gate to Taicheng, with views over Xuanwu Lake and Purple Mountain. Visit Jiming Temple (鸡鸣寺), a 1,500-year-old Buddhist temple perched on the city wall. Evening: Fuzimiao (夫子庙, Confucius Temple) area — the pedestrian streets along the Qinhuai River are touristy but atmospheric at night with lanterns reflecting in the canal.`,
                tip: `The Nanjing City Wall section at Taicheng (台城) is the best-preserved section and has the classic view of Xuanwu Lake with the modern Nanjing skyline behind it. Go at sunset. The wall is wide enough to walk comfortably — it is up to 12m thick at the base.`,
              },
              {
                day: 'Day 2: Nanjing',
                content: `Morning: Sun Yat-sen Mausoleum (中山陵, free, book ahead) — a grand staircase of 392 steps leading up Purple Mountain to a blue-roofed memorial hall. The mausoleum is China\'s most important Republican-era monument. Walk to the nearby Ming Xiaoling Tomb (明孝陵) — the burial site of the Hongwu Emperor, founder of the Ming dynasty, with a 1.8km \'Spirit Way\' lined with stone animals. Afternoon: Nanjing Massacre Memorial Hall (free, book ahead) — a somber, essential museum documenting the 1937 Japanese occupation. It is heavy but world-class.`,
                tip: `Sun Yat-sen Mausoleum requires a free reservation on WeChat (search 钟山风景区). Book 2-3 days ahead. The 392 steps are not as intimidating as they look — there are rest platforms. The Ming Xiaoling Spirit Way is most atmospheric in autumn when the maple trees turn red.`,
              },
              {
                day: 'Day 3: Nanjing → Zhenjiang → Yangzhou',
                content: `Morning: train from Nanjing to Zhenjiang (20 min). Zhenjiang (镇江) is a small city on the Yangtze with three scenic hills. Visit Jinshan Temple (金山寺) — a Buddhist temple on a hilltop island where legend says a white snake spirit was trapped under the pagoda. After lunch (Zhenjiang is famous for vinegar — try the vinegar-braised pork ribs), take the 30-minute bus across the Yangtze to Yangzhou. Afternoon: Slender West Lake (瘦西湖) — a long, narrow lake with willow-lined banks, arched stone bridges, and Ming-Qing pavilions. It is West Lake\'s smaller, more refined cousin.`,
                tip: `Slender West Lake has an entrance fee that some travellers find steep, but it\'s worth it for the Five Pavilion Bridge and the White Dagoba. Walk the full length (3 km, about 2 hours) from south to north. The lake is most beautiful in March-April when the peach blossoms and willows are in full display — \'烟花三月下扬州\' as the Tang poem says.`,
              },
              {
                day: 'Day 4: Yangzhou → Shanghai',
                content: `Morning: Yangzhou morning tea (早茶) — this is the city\'s defining cultural experience. Go to Fuchun Tea House (富春茶社, est. 1885) or Yechun Tea House (冶春茶社) by 7:30am. Order san ding bao (三丁包, three-dice buns filled with chicken, pork, and bamboo shoots), crab roe soup dumplings (蟹黄汤包), and a pot of Biluochun green tea. The meal takes 1-2 hours — this is not fast food. Afternoon: visit Geyuan Garden (个园), a Qing dynasty salt merchant\'s garden with bamboo groves and rockeries representing the four seasons. Then train back to Shanghai (2 hrs).`,
                tip: `Yangzhou morning tea is a ritual, not a meal. It is leisurely — do not rush. The most famous dish is crab roe soup dumpling (蟹黄汤包) — you drink the soup through a straw before eating the wrapper. Fuchun Tea House fills up by 8am on weekends. Go on a weekday or arrive by 7am. The old Fuchun on Deshengqiao Road is the original.`,
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
            href: '/yangtze-delta/shanghai-hangzhou-suzhou',
            label: 'Shanghai, Hangzhou & Suzhou',
            description: 'The classic Yangtze Delta golden triangle.',
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Shanghai Pudong skyline at night',
            days: '6-7 days',
          },
          {
            href: '/ancient-capitals/xian-luoyang-kaifeng',
            label: 'Three Ancient Capitals',
            description: 'Continue west to Xian, Luoyang, and Kaifeng.',
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Xian Terracotta Warriors in battle formation',
            days: '6-7 days',
          },
          {
            href: '/golden-triangle/beijing-in-depth',
            label: 'Beijing In Depth',
            description: "Add Beijing — China's 3,000-year capital.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '4-5 days',
          },
        ]}
      />
    </div>
  );
}
