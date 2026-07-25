import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Shanghai, Hangzhou & Suzhou: The Golden Watertown Triangle | BeforeChina',
  description:
    "Shanghai's future-facing skyline, Hangzhou's timeless West Lake, Suzhou's classical gardens, and a water town frozen in the Ming dynasty — the Yangtze Delta in a week.",
  alternates: { canonical: '/yangtze-delta/shanghai-hangzhou-suzhou' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/yangtze-delta/shanghai-hangzhou-suzhou',
    title: 'Shanghai, Hangzhou & Suzhou: The Golden Watertown Triangle | BeforeChina',
    description:
      "Shanghai's future-facing skyline, Hangzhou's timeless West Lake, Suzhou's classical gardens, and a water town frozen in the Ming dynasty — the Yangtze Delta in a week.",
    images: [
      {
        url: '/images/destinations/yangtze-delta.webp',
        width: 1200,
        height: 630,
        alt: 'Shanghai Pudong skyline at night',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shanghai, Hangzhou & Suzhou: The Golden Watertown Triangle | BeforeChina',
    description:
      "Shanghai's future-facing skyline, Hangzhou's timeless West Lake, Suzhou's classical gardens, and a water town frozen in the Ming dynasty — the Yangtze Delta in a week.",
    images: ['/images/destinations/yangtze-delta.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Shanghai, Hangzhou & Suzhou: The Golden Watertown Triangle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 6-7 days. The Yangtze Delta is China's wealthiest and most developed region — but also one of its most beautiful. Within a 1-hour high-speed train radius you have Shanghai (the future), Hangzhou (the romance — ",
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
      name: 'Shanghai, Hangzhou & Suzhou: The Golden Watertown Triangle',
      item: 'https://beforechina.com/yangtze-delta/shanghai-hangzhou-suzhou',
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
          alt="Shanghai Pudong skyline at night"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Yangtze Delta &middot; 6-7 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Shanghai, Hangzhou & Suzhou: The Golden Watertown Triangle
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
            Shanghai\'s future-facing skyline, Hangzhou\'s timeless West Lake, Suzhou\'s classical
            gardens, and a water town frozen in the Ming dynasty — the Yangtze Delta in a week.
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
                title: '6-7 Days',
                description:
                  "The ideal first-timer's China trip — easy logistics, excellent infrastructure, and English signage everywhere.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Shanghai → Hangzhou → Suzhou',
                description:
                  'Three cities connected by 30-90 minute high-speed trains. Fly into Shanghai Pudong or Hongqiao.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'The Bund, West Lake, Classical Gardens',
                description:
                  "China's most prosperous region — futuristic skylines, UNESCO lakes, and 2,500-year-old gardens.",
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
            The Yangtze Delta is China\'s wealthiest and most developed region — but also one of its
            most beautiful. Within a 1-hour high-speed train radius you have Shanghai (the future),
            Hangzhou (the romance — Marco Polo called it \'the city of heaven\'), and Suzhou (2,500
            years of classical gardens and silk). This route connects all three with a water town
            day trip. It is the ideal first-timer\'s China trip: easy logistics, excellent
            infrastructure, and English signage everywhere.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Shanghai',
                content: `Start on the Bund (外滩) — the 1.5km riverside promenade with colonial buildings on one side and Pudong\'s futuristic skyline on the other. Walk south toward the Old City and enter Yuyuan Garden (豫园, ¥40) — a 16th-century private garden of rockeries, pavilions, and carp ponds. Lunch: xiaolongbao (soup dumplings) at the Yuyuan branch of Nanxiang Steamed Bun Restaurant (est. 1900). Afternoon: Nanjing Road pedestrian street for the spectacle of Chinese consumerism, then the Shanghai Museum (free, book ahead). Evening: rooftop bar on the Bund for the skyline light show.`,
                tip: `The Bund is best at two times: early morning (6-7am, when locals do tai chi and the light is soft) and evening (6-7pm, when Pudong\'s lights come on). The evening light show starts at 7pm in summer, 6pm in winter. The Bund promenade gets packed at sunset — arrive 30 minutes early to claim a railing spot.`,
              },
              {
                day: 'Day 2: Shanghai',
                content: `Morning: the French Concession — tree-lined streets of 1920s lane houses (lilong), now filled with boutiques, cafes, and galleries. Rent a bike and cycle through Wukang Road, Anfu Road, and Wulumuqi Road. Visit the Propaganda Poster Art Centre (¥20, a private museum of Mao-era posters in a basement — one of Shanghai\'s most unique museums). Afternoon: Tianzifang (田子坊), a maze of lane-house alleys turned into artist studios and craft shops. Evening: acrobatics show at Shanghai Circus World (¥200-400).`,
                tip: `The French Concession is best explored by bike — Shanghai has an excellent bike-share system (HelloBike, Meituan Bike). You will need Alipay to unlock bikes. The Propaganda Poster Art Centre is in the basement of an apartment building on Huashan Road — look for the small sign at the entrance. It closes at 4:30pm.`,
              },
              {
                day: 'Day 3: Shanghai → Hangzhou',
                content: `Take the 1-hour high-speed train from Shanghai Hongqiao to Hangzhou East (¥75). Check in, then head to West Lake (西湖). Walk the Su Causeway (苏堤) — a 2.8km tree-lined dyke crossing the lake, built in 1090 by Su Dongpo, the poet-governor of Hangzhou. Visit the Lingyin Temple (灵隐寺, ¥75) — one of China\'s largest Buddhist temples, with grottoes of carved Buddha figures dating to the 10th century. Evening: Impression West Lake show (¥280-580), a nighttime spectacle of light, music, and dance on the lake, directed by Zhang Yimou.`,
                tip: `West Lake is free. The Su Causeway is best walked from north to south starting around 4pm — the afternoon light on the lake is beautiful and you will finish near the Leifeng Pagoda for sunset. Rent a public bike (red bikes, ¥1/hr) to circle the entire lake (12 km) in about 90 minutes.`,
              },
              {
                day: 'Day 4: Hangzhou',
                content: `Morning: Longjing tea village (龙井村) — the terraced tea fields where China\'s most famous green tea is grown. Walk the path from Longjing village to the China Tea Museum (free) through the plantations. Taste fresh Longjing tea at a farmer\'s house (¥30-50/person). Afternoon: Xixi Wetland Park (¥80) — a network of ponds, streams, and islets on Hangzhou\'s western edge. Take a traditional pole-boat ride through the wetlands. Evening: Hefang Street for Hangzhou snacks — dongpo rou (东坡肉, braised pork belly) and pianerchuan noodles (片儿川).`,
                tip: `Longjing tea has different grades. The best (Mingqian Longjing) is picked before the Qingming Festival (early April) and costs ¥500-1,000/50g. What farmers serve you at tastings is usually the lower-grade summer harvest. Buy tea at the village cooperative, not from touts at the bus stop.`,
              },
              {
                day: 'Day 5: Hangzhou → Suzhou',
                content: `Take the 1.5-hour high-speed train from Hangzhou East to Suzhou (¥110). Suzhou\'s classical gardens are UNESCO World Heritage — nine of them. You cannot see all nine. Visit two: the Humble Administrator\'s Garden (拙政园, ¥80, the largest and most famous) and the Lingering Garden (留园, ¥55, smaller and more intimate). Between gardens, walk Pingjiang Road (平江路) — a 1,600-year-old canal street lined with whitewashed Ming-Qing houses, tea houses, and silk shops.`,
                tip: `Suzhou gardens are at their best in rain — the dripping water, mist, and reflections are what the garden designers intended. Don\'t let rain stop you. The Humble Administrator\'s Garden opens at 7:30am — go at opening to experience it before the tour groups arrive at 9am. It transforms from a peaceful garden to a crowded theme park within 90 minutes.`,
              },
              {
                day: 'Day 6: Suzhou → Water Town → Shanghai',
                content: `Morning: choose one water town. Tongli (同里, ¥100) is 30 minutes from Suzhou by metro — canals, stone bridges, and the Tuisi Garden (a UNESCO garden within the town). Zhouzhuang (周庄, ¥100) is more famous and more touristy — but its double bridge and Shen Family House are genuinely beautiful. Both are half-day visits. Return to Suzhou, pick up bags, take the 30-minute train to Shanghai for your flight out the next day.`,
                tip: `All Yangtze Delta water towns are variations on the same theme: canals + Ming-Qing houses + stone bridges. Pick the one that is logistically easiest. Tongli is the closest to Suzhou (30 min by metro line 4). Avoid the water towns on weekends and Chinese holidays — the narrow lanes become impassable.`,
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
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: "Add Beijing and Xi'an for the classic Golden Triangle.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8-10 days',
          },
          {
            href: '/yangtze-delta/nanjing-zhenjiang-yangzhou',
            label: 'Nanjing & Yangzhou',
            description:
              "Extend west to Nanjing's Ming dynasty walls and Yangzhou's morning tea culture.",
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Nanjing Ming dynasty city walls',
            days: '4-5 days',
          },
          {
            href: '/ancient-capitals/xian-luoyang-kaifeng',
            label: 'Three Ancient Capitals',
            description: 'Continue west to Xian, Luoyang, and Kaifeng.',
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Xian Terracotta Warriors in battle formation',
            days: '6-7 days',
          },
        ]}
      />
    </div>
  );
}
