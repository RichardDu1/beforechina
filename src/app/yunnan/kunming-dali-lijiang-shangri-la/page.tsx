import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Kunming-Dali-Lijiang-Shangri-La: The Classic Yunnan Route | BeforeChina',
  description:
    "The ultimate Yunnan backpacker trail — from Kunming's Stone Forest through Dali's lakeside old town and Lijiang's cobblestone canals, to Shangri-La at 3,200m on the Tibetan plateau.",
  alternates: { canonical: '/yunnan/kunming-dali-lijiang-shangri-la' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/yunnan/kunming-dali-lijiang-shangri-la',
    title: 'Kunming-Dali-Lijiang-Shangri-La: The Classic Yunnan Route | BeforeChina',
    description:
      "The ultimate Yunnan backpacker trail — from Kunming's Stone Forest through Dali's lakeside old town and Lijiang's cobblestone canals, to Shangri-La at 3,200m on the Tibetan plateau.",
    images: [
      {
        url: '/images/destinations/yunnan.webp',
        width: 1200,
        height: 630,
        alt: 'Lijiang Old Town canals with Jade Dragon Snow Mountain in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kunming-Dali-Lijiang-Shangri-La: The Classic Yunnan Route | BeforeChina',
    description:
      "The ultimate Yunnan backpacker trail — from Kunming's Stone Forest through Dali's lakeside old town and Lijiang's cobblestone canals, to Shangri-La at 3,200m on the Tibetan plateau.",
    images: ['/images/destinations/yunnan.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Kunming-Dali-Lijiang-Shangri-La: The Classic Yunnan Route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 7-8 days. This is the classic Yunnan circuit — the route every backpacker does and for good reason. Yunnan is China's most ethnically diverse province, home to 25 of China's 55 recognised ethnic minorities. The",
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
      name: 'Kunming-Dali-Lijiang-Shangri-La: The Classic Yunnan Route',
      item: 'https://beforechina.com/yunnan/kunming-dali-lijiang-shangri-la',
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
          alt="Lijiang Old Town canals with Jade Dragon Snow Mountain in the background"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Yunnan &middot; 7-8 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Kunming-Dali-Lijiang-Shangri-La: The Classic Yunnan Route
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
            The ultimate Yunnan backpacker trail — from Kunming\'s Stone Forest through Dali\'s
            lakeside old town and Lijiang\'s cobblestone canals, to Shangri-La at 3,200m on the
            Tibetan plateau.
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
                title: '7-8 Days',
                description:
                  "The perfect pace for Yunnan's classic backpacker trail — enough time to go deep without feeling rushed.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Kunming → Dali → Lijiang → Shangri-La',
                description:
                  'Connected by high-speed trains. Climbs from subtropical Kunming (1,890m) to Tibetan Shangri-La (3,200m).',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Stone Forest, Erhai Lake, Tiger Leaping Gorge',
                description:
                  "China's most ethnically diverse province — 25 of 55 recognised ethnic minorities.",
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
            This is the classic Yunnan circuit — the route every backpacker does and for good
            reason. Yunnan is China\'s most ethnically diverse province, home to 25 of China\'s 55
            recognised ethnic minorities. The route climbs from subtropical Kunming (1,890m) to
            high-altitude Shangri-La (3,200m), passing through Bai, Naxi, and Tibetan cultures along
            the way. The infrastructure is excellent — high-speed trains connect Kunming, Dali, and
            Lijiang — and the food shifts from Yunnan rice noodles to Tibetan butter tea as you
            climb.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Kunming',
                content: `Fly into Kunming Changshui (KMG). Spend the day at the Stone Forest (石林) — 90 km southeast of the city, a UNESCO site of limestone pinnacles that look like petrified trees. Afternoon: Green Lake Park (翠湖) for people-watching and the surrounding Yunnan University area. Evening: across-the-bridge noodles (过桥米线) at a local restaurant — this is Yunnan\'s signature dish.`,
                tip: `Kunming is called the \'City of Eternal Spring\' for a reason — temperatures are 15-25°C year-round. The Stone Forest entrance is ¥175. Go early (before 9am) to beat the tour groups from Kunming.`,
              },
              {
                day: 'Days 2-3: Dali',
                content: `Take the 2-hour high-speed train from Kunming to Dali (¥145). Dali is a lakeside town backed by the 4,000m Cangshan Mountains, and the old town is a grid of stone-paved streets lined with Bai minority architecture. Day 2: rent an e-bike (¥50/day) and cycle around Erhai Lake — stop at Xizhou Village for traditional Bai architecture and the famous Xizhou baba flatbread. Day 3: morning hike on Cangshan (take the cable car to 2,600m, then walk the Cloud Traveller\'s Path), afternoon exploring Dali Old Town and the Three Pagodas.`,
                tip: `Skip the overpriced lakeside cafes aimed at tourists. Eat at the evening market near the South Gate — grilled Erhai lake fish (¥30), cross-bridge noodles (¥15), and the best grilled eggplant you\'ll ever eat.`,
              },
              {
                day: 'Days 4-5: Lijiang',
                content: `Take the train from Dali to Lijiang (1.5 hrs, ¥80). Lijiang\'s old town (Dayan) is a UNESCO World Heritage site — a maze of cobblestone alleys, wooden bridges, and canals built by the Naxi people 800 years ago. Day 4: walk the old town, climb to Wangu Tower for the panoramic view, visit the Black Dragon Pool for the classic photo of Jade Dragon Snow Mountain reflected in the water. Day 5: Shuhe Ancient Town (4 km north, less touristy) and Baisha Village for the 500-year-old Ming dynasty murals.`,
                tip: `Lijiang Old Town charges an ¥80 \'maintenance fee\' — but enforcement is lax and most travellers skip it. If asked at the gate, say you\'re staying at a hotel inside and they\'ll wave you through.`,
              },
              {
                day: 'Day 6: Tiger Leaping Gorge',
                content: `Take a 2-hour minibus from Lijiang to Qiaotou (¥40). Tiger Leaping Gorge is one of the world\'s deepest river canyons — the Jinsha River cuts between Jade Dragon Snow Mountain (5,596m) and Haba Snow Mountain (5,396m), a vertical drop of 3,900m. The classic high trail is 22 km and takes 6-8 hours. Start at Jane\'s Guesthouse, hike to the Tea Horse Guesthouse for lunch (km 12, the best view), then continue to Tina\'s Guesthouse for the night. If you\'re short on time, do the first 12 km to Tea Horse and back — it has the best views.`,
                tip: `The high trail is well-marked but has exposed cliff sections. Wear hiking shoes — the path is dusty and rocky. The Naxi Guesthouse at km 5 sells water and snacks. In rainy season (July-August), check if the trail is open before you go.`,
              },
              {
                day: 'Day 7: Shangri-La',
                content: `From Tina\'s Guesthouse, take a 3-hour bus to Shangri-La (Zhongdian, 3,200m). Shangri-La is a Tibetan-majority town renamed in 2001 to cash in on the Lost Horizon mystique — but it genuinely feels different from anywhere else in Yunnan. Visit Songzanlin Monastery (the \'Little Potala Palace\', built 1679, housing 700 monks), then walk the old town around Dukezong — the world\'s largest prayer wheel is here (21m tall, takes several people to turn). Evening: try yak hot pot and butter tea.`,
                tip: `Shangri-La is at 3,200m — you will feel the altitude. Walk slowly, drink water, skip alcohol on your first night. Songzanlin Monastery is ¥115 — go in the morning when the monks are chanting.`,
              },
              {
                day: 'Day 8 (optional): Shangri-La → Fly Out',
                content: `If you have an 8th day, visit Pudacuo National Park — alpine lakes, meadows, and forests 22 km east of town (¥100, half-day trip). Fly out from Diqing Shangri-La Airport (DIG) to Kunming or direct to Chengdu/Chongqing for onward travel.`,
                tip: `Diqing Airport has flights to Kunming (1 hr, ¥400-600), Chengdu (1.5 hrs), and Chongqing. Book a few days ahead — flights are less frequent than from Kunming.`,
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
            href: '/sichuan/chengdu-jiuzhaigou-huanglong',
            label: 'Chengdu & Jiuzhaigou',
            description: "Combine Yunnan with Sichuan's turquoise lakes and pandas.",
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Jiuzhaigou turquoise lakes',
            days: '5-6 days',
          },
          {
            href: '/guangxi/guilin-yangshuo-lijiang',
            label: 'Guilin & Yangshuo',
            description: "Pair Yunnan's mountains with Guangxi's karst peaks.",
            image: '/images/destinations/guangxi.webp',
            imageAlt: 'Guilin karst peaks',
            days: '3-4 days',
          },
          {
            href: '/silk-road/xian-lanzhou-dunhuang',
            label: "Silk Road: Xi'an to Dunhuang",
            description: "Head north to the Silk Road's Hexi Corridor.",
            image: '/images/destinations/silk-road.webp',
            imageAlt: 'Dunhuang sand dunes',
            days: '7-8 days',
          },
        ]}
      />
    </div>
  );
}
