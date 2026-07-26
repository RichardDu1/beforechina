import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Huangguoshu Waterfall, Libo & Miao Villages | BeforeChina',
  description:
    "Asia's largest waterfall, emerald karst rivers in Libo, and the world's largest Miao village — Guizhou is China's most underrated province.",
  alternates: { canonical: '/guizhou/huangguoshu-libo-miao' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/guizhou/huangguoshu-libo-miao',
    title: 'Huangguoshu Waterfall, Libo & Miao Villages | BeforeChina',
    description:
      "Asia's largest waterfall, emerald karst rivers in Libo, and the world's largest Miao village — Guizhou is China's most underrated province.",
    images: [
      {
        url: '/images/destinations/guizhou.webp',
        width: 1200,
        height: 630,
        alt: 'Huangguoshu Waterfall in Guizhou',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huangguoshu Waterfall, Libo & Miao Villages | BeforeChina',
    description:
      "Asia's largest waterfall, emerald karst rivers in Libo, and the world's largest Miao village — Guizhou is China's most underrated province.",
    images: ['/images/destinations/guizhou.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Huangguoshu Waterfall, Libo & Miao Villages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This journey typically takes 5-6 days. Guizhou is the province that even Chinese tourists sleep on. It sits between Yunnan, Sichuan, and Guangxi, and has the best of all three: karst landscapes like Guilin, minority cultures like Yunnan, a',
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
      name: 'Huangguoshu Waterfall, Libo & Miao Villages',
      item: 'https://beforechina.com/guizhou/huangguoshu-libo-miao',
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
          src="/images/destinations/guizhou.webp"
          alt="Huangguoshu Waterfall in Guizhou"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Guizhou &middot; 5-6 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Huangguoshu Waterfall, Libo & Miao Villages
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
            Asia\'s largest waterfall, emerald karst rivers in Libo, and the world\'s largest Miao
            village — Guizhou is China\'s most underrated province.
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
                  "Cover Guizhou's three highlights at a comfortable pace — waterfalls, karst rivers, and minority villages.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Guiyang → Anshun → Libo → Kaili',
                description:
                  'Connected by new high-speed trains (the Guiyang-Libo line opened 2023). A loop from Guiyang.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Huangguoshu, Libo, Miao Villages',
                description:
                  "Asia's largest waterfall, UNESCO karst rivers, and the world's largest Miao village — Guizhou's greatest hits.",
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
            Guizhou is the province that even Chinese tourists sleep on. It sits between Yunnan,
            Sichuan, and Guangxi, and has the best of all three: karst landscapes like Guilin,
            minority cultures like Yunnan, and spicy-sour food that rivals Sichuan. The
            infrastructure has improved dramatically — high-speed trains now connect the major towns
            — but foreign tourists are still rare. This route covers Guizhou\'s three highlights:
            Huangguoshu Waterfall (Asia\'s largest at 77.8m high and 101m wide), Libo\'s UNESCO
            karst rivers (think Guilin but with emerald-green water and one-tenth the tourists), and
            the Miao minority villages around Kaili.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Guiyang → Huangguoshu',
                content: `Fly into Guiyang Longdongbao Airport (KWE). Take the 30-minute high-speed train from Guiyang North to Anshun West, then a 40-minute bus to Huangguoshu Waterfall. The waterfall is 77.8m high and 101m wide — Asia\'s largest. Walk the path behind the waterfall through the \'Water Curtain Cave\' (prepare to get wet — the spray is intense). The scenic area also includes Doupotang Waterfall (wider but shorter) and Tianxingqiao (a karst stone forest with bonsai trees and natural bridges). Spend 4-5 hours. Return to Anshun or Guiyang for the night.`,
                tip: `Huangguoshu charges an entrance fee (lower in winter). The Water Curtain Cave is the highlight — you walk behind a 77m curtain of water. A raincoat is essential (vendors sell them at the entrance). Wear shoes with grip — the path is wet and slippery.`,
              },
              {
                day: 'Day 2: Guiyang → Libo',
                content: `Take the high-speed train from Guiyang North to Libo (1.5 hrs — opened 2023, this line transformed Libo accessibility). Libo is a UNESCO World Heritage site of karst cone peaks, emerald rivers, and primeval forest. Check into your hotel, then visit the Small Seven Arches (Xiaoqikong) scenic area: a 1.5 km walking path along an emerald river past seven small stone bridges, waterfalls, and forest. The water colour is unreal — a milky turquoise from dissolved limestone.`,
                tip: `Libo\'s water really is that colour — no filters needed. The Small Seven Arches ticket includes the shuttle bus (slightly cheaper in winter). Go after 3pm when the morning tour groups have left — the light is better and the path is quieter.`,
              },
              {
                day: 'Day 3: Libo Full Day',
                content: `Morning: Daqikong (Big Seven Arches) scenic area — less famous than Xiaoqikong but arguably more dramatic, with a massive natural stone arch and a canyon walk along a turquoise river. Afternoon: explore Libo\'s countryside — the karst cone peaks here look like Guilin but are surrounded by rice paddies and Buyi minority villages instead of tourist shops. Rent an e-bike and cycle the country roads.`,
                tip: `The Buyi people are Guizhou\'s largest minority. Their villages around Libo have stone houses with distinctive tiled roofs. Yaojia Village (瑶寨) is a Buyi village 5 km from Libo town — walkable, and you will be invited in for tea if you show genuine interest.`,
              },
              {
                day: 'Day 4: Libo → Kaili',
                content: `Take the train from Libo to Guiyang (1.5 hrs), then transfer to a high-speed train to Kaili (40 min). Kaili is the capital of the Qiandongnan Miao and Dong Autonomous Prefecture — the heart of Miao country. Afternoon: visit the Kaili Ethnic Minorities Museum (free, excellent context on Miao, Dong, and other Guizhou minorities) and the old street market. Evening: sour soup fish (酸汤鱼) — Guizhou\'s signature dish.`,
                tip: `Sour soup fish (酸汤鱼) is a Guizhou invention — river fish poached in a broth of fermented tomatoes, pickled chillies, and wild herbs. It is sour, spicy, and unlike anything in Sichuan or Yunnan. The best is at Kaili\'s Laoteng Sour Soup Fish (老腾酸汤鱼).`,
              },
              {
                day: 'Day 5: Xijiang Miao Village',
                content: `Take a 1-hour bus from Kaili to Xijiang Qianhu Miao Village (西江千户苗寨) — the world\'s largest Miao village, with 1,400 households built into a hillside amphitheatre. The wooden stilt houses (diaojiaolou) stack up the mountain in layers, and at night the lights make the whole hillside look like a galaxy. Walk through the village, visit the Miao embroidery workshop, and watch the daily dance performance at the central square. Stay overnight in the village — the night view from the observation platform is the reason to come.`,
                tip: `Xijiang charges an entrance fee. The village is touristy (Chinese tourists, not Western) but still genuinely inhabited by Miao people. The best experience is walking the back lanes away from the main street, where grandmothers sit in doorways doing embroidery and children play in the alleys. The night view from the observation platform is best around 8pm when all the houses are lit.`,
              },
              {
                day: 'Day 6: Kaili → Fly Out',
                content: `Return to Kaili (1 hr). If your flight is in the evening, visit Langde Miao Village — a smaller, less touristy alternative to Xijiang (40 min from Kaili). Langde has a traditional welcome ceremony with rice wine at the village gate. Alternatively, visit a Dong village — Zhaoxing (3 hrs from Kaili) is the most famous Dong village with a drum tower and wind-rain bridge. Fly out from Guiyang in the evening.`,
                tip: `Langde Miao Village has a modest entrance fee but the welcome ceremony (12-gun salute and rice wine) is included. The rice wine is strong — take a symbolic sip, don\'t drink the whole bowl unless you want to be carried back to the bus.`,
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
            href: '/guangxi/guilin-yangshuo-lijiang',
            label: 'Classic Guilin Route',
            description: "Combine Guizhou with Guangxi's iconic karst landscapes and the Li River.",
            image: '/images/destinations/guangxi.webp',
            imageAlt: 'Li River karst peaks in Guilin',
            days: '3-4 days',
          },
          {
            href: '/yunnan/kunming-dali-lijiang-shangri-la',
            label: 'Classic Yunnan Route',
            description:
              'Continue west to the ancient towns, mountain landscapes, and Tibetan culture of Yunnan.',
            image: '/images/destinations/yunnan.webp',
            imageAlt: 'Dali Old Town with Cangshan mountains',
            days: '8-12 days',
          },
          {
            href: '/sichuan/chengdu-jiuzhaigou-huanglong',
            label: 'Chengdu & Jiuzhaigou',
            description:
              'Head northwest to Sichuan for pandas, spicy hotpot, and turquoise alpine lakes.',
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Jiuzhaigou turquoise lakes',
            days: '5-7 days',
          },
        ]}
      />
    </div>
  );
}
