import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Xiamen, Tulou & Quanzhou: Fujian's Maritime Silk Road | BeforeChina",
  description:
    "A car-free island of colonial villas, the Hakka people's extraordinary earthen roundhouses, and Quanzhou — the port Marco Polo called 'the Alexandria of the East.'",
  alternates: { canonical: '/fujian/xiamen-tulou-quanzhou' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/fujian/xiamen-tulou-quanzhou',
    title: "Xiamen, Tulou & Quanzhou: Fujian's Maritime Silk Road | BeforeChina",
    description:
      "A car-free island of colonial villas, the Hakka people's extraordinary earthen roundhouses, and Quanzhou — the port Marco Polo called 'the Alexandria of the East.'",
    images: [
      {
        url: '/images/destinations/fujian.webp',
        width: 1200,
        height: 630,
        alt: 'Fujian Tulou circular earthen roundhouses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Xiamen, Tulou & Quanzhou: Fujian's Maritime Silk Road | BeforeChina",
    description:
      "A car-free island of colonial villas, the Hakka people's extraordinary earthen roundhouses, and Quanzhou — the port Marco Polo called 'the Alexandria of the East.'",
    images: ['/images/destinations/fujian.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the Fujian Tulou and are they worth the trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Tulou (土楼) are large circular earthen buildings, 3-5 storeys high, built by the Hakka people between the 12th and 20th centuries. Each tulou housed an entire clan — up to 800 people — in rooms arranged around a central courtyard. They are UNESCO World Heritage and genuinely unlike anything else in the world. The most famous cluster is at Nanjing (南靖), 3 hours from Xiamen. Yes, they are worth the trip.',
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
      name: "Xiamen, Tulou & Quanzhou: Fujian's Maritime Silk Road",
      item: 'https://beforechina.com/fujian/xiamen-tulou-quanzhou',
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
          src="/images/destinations/fujian.webp"
          alt="Fujian Tulou circular earthen roundhouses"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Fujian &middot; 5-6 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Xiamen, Tulou & Quanzhou: Fujian\'s Maritime Silk Road
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
            A car-free island of colonial villas, the Hakka people\'s extraordinary earthen
            roundhouses, and Quanzhou — the port Marco Polo called \'the Alexandria of the East.\'
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
                title: '5–6 Days',
                description:
                  "The perfect pace for Fujian's three UNESCO sites — enough time to go deep without feeling rushed.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Xiamen → Gulangyu → Nanjing Tulou → Quanzhou → Xiamen',
                description:
                  'Connected by high-speed train and bus. Xiamen has an international airport with flights across Asia.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Gulangyu Island, Fujian Tulou, Kaiyuan Temple',
                description:
                  "A car-free colonial island, extraordinary earthen roundhouses, and the Maritime Silk Road's start.",
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
            Fujian province faces Taiwan across the strait and has always been China\'s maritime
            frontier. This route connects three of its UNESCO sites: Gulangyu Island, a car-free
            island of colonial villas, gardens, and piano museums; the Fujian Tulou — enormous
            circular earthen buildings that housed entire Hakka clans for centuries; and Quanzhou,
            the starting point of the Maritime Silk Road, added to the UNESCO list in 2021 as
            \'Quanzhou: Emporium of the World in Song-Yuan China.\'
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Xiamen',
                content: `Fly into Xiamen Gaoqi Airport (XMN). Xiamen (厦门, \'Amoy\' in the old colonial name) is a pleasant coastal city that was one of the first treaty ports opened to foreign trade in 1842. Afternoon: Zhongshan Road (中山路) — a pedestrian shopping street with colonial arcade architecture. Visit Nanputuo Temple (南普陀寺, free) — a Tang dynasty Buddhist temple at the foot of Wulao Mountain. Evening: seafood dinner on Huandao Road.`,
                tip: `Xiamen is one of China\'s most liveable cities — clean air, good food, and a relaxed pace. The city is built on an island connected to the mainland by bridges and a BRT (Bus Rapid Transit) system. The BRT is the easiest way to get around — it is an elevated bus-only road, effectively an above-ground metro.`,
              },
              {
                day: 'Day 2: Gulangyu Island',
                content: `Take the 10-minute ferry from Xiamen to Gulangyu Island (鼓浪屿, ¥35 round trip). Gulangyu is a car-free island of colonial villas, tropical gardens, and narrow lanes. It was a foreign concession from 1903-1945, and the architecture reflects this: British consulates, Japanese hospitals, Spanish cathedrals. Visit Shuzhuang Garden (菽庄花园, ¥30) — a seaside garden with a piano museum housing 100 antique pianos. Climb Sunlight Rock (日光岩, ¥50) for the island panorama. Evening: ferry back to Xiamen.`,
                tip: `Gulangyu ferry tickets sell out in summer and on weekends. Book on the official WeChat mini-program (厦门轮渡). The ferry from Dongdu Jetty (for tourists) costs ¥35. The ferry from Lundu Jetty (for locals) costs ¥8 but tourists cannot use it. The island has no cars, no bikes — you will walk everywhere. Wear comfortable shoes.`,
              },
              {
                day: 'Day 3: Xiamen → Nanjing Tulou',
                content: `Take a 3-hour bus from Xiamen to Nanjing Tulou cluster (¥45). The Nanjing Tulou are the most scenic group. Visit Tianluokeng Tulou Cluster (田螺坑, ¥100 combined ticket) — five tulou arranged in a pattern locals call \'four dishes and a soup\' (four round buildings around one square). Then Yuchang Lou (裕昌楼) — a 700-year-old tulou whose pillars lean at 15° (it is called the \'Leaning Tower of Pisa of Fujian\'). Finish at Taxia Village (塔下村) — a Hakka village along a stream with a unique stone flagpole forest honouring successful scholars. Stay overnight in a tulou guesthouse.`,
                tip: `Stay overnight in a tulou — several have been converted into guesthouses (¥150-300/night). The rooms are simple (shared bathrooms, thin walls) but the experience of waking up inside a 500-year-old earthen fortress is unforgettable. The Hakka hosts will cook dinner for you — home-style Hakka food: salt-baked chicken, stuffed tofu, and yam noodles.`,
              },
              {
                day: 'Day 4: Tulou → Xiamen → Quanzhou',
                content: `Morning: visit Hekeng Tulou Cluster (河坑, quieter, less touristy) or Yunshuiyao Ancient Village (云水谣, a riverside village with a thousand-year-old banyan tree used in the film \'The Knot\'). Afternoon: bus back to Xiamen (3 hrs), then 30-minute high-speed train to Quanzhou (¥25). Check into hotel. Evening: walk Quanzhou\'s old town — the Tumen Street area with its mosque, temple, and church within walking distance of each other.`,
                tip: `Quanzhou is inexpensive by Fujian standards. Hotels near the old town run ¥150-300/night. The city was recently discovered by Chinese tourists after its 2021 UNESCO listing but still sees very few Western visitors.`,
              },
              {
                day: 'Day 5: Quanzhou',
                content: `Quanzhou was the starting point of the Maritime Silk Road and, during the Song-Yuan period (10th-14th centuries), one of the world\'s largest ports. Start at Kaiyuan Temple (开元寺, free) — a Tang dynasty Buddhist temple with twin stone pagodas that have survived since the 13th century. Behind the main hall, two stone pillars are carved with Hindu deities — a legacy of Tamil traders who lived here 700 years ago. Visit the Qingjing Mosque (清净寺, ¥3) — China\'s oldest surviving mosque, built in 1009 AD. Lunch: Quanzhou oyster omelette (海蛎煎) and \'vermicelli paste\' (面线糊) — rice noodles in a thick seafood broth. Afternoon: Maritime Museum (free) and the ancient Maritime Silk Road ship excavated from Quanzhou Bay. Evening: train back to Xiamen (30 min, ¥25).`,
                tip: `Quanzhou\'s religious diversity in the Song-Yuan period was remarkable: Buddhist temples, Hindu shrines, a mosque (1009 AD), a Manichaean temple (the only surviving Manichaean statue in the world is near Quanzhou), a Daoist temple, and a Catholic cathedral. The Kaiyuan Temple\'s Hindu pillars are unique in China — Tamil merchants from the Chola dynasty donated them in the 13th century.`,
              },
              {
                day: 'Day 6: Xiamen → Fly Out',
                content: `If your flight is in the evening: visit the Xiamen Botanical Garden (¥40) or cycle the Huandao Road coastal path (rental bikes ¥20/hr). Buy oolong tea (Fujian is the home of Tieguanyin and Dahongpao) and dried seafood as souvenirs.`,
                tip: `Fujian tea: Tieguanyin (铁观音, Iron Goddess of Mercy, a floral oolong from Anxi, ¥100-500/500g) and Dahongpao (大红袍, Big Red Robe, a legendary rock oolong from Wuyi Mountain, ¥200-2,000/500g). Buy at a tea market, not a tourist shop — the Xiamen Tea Market (厦门茶叶市场) is wholesale.`,
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
            href: '/fujian/wuyishan',
            label: 'Wuyishan',
            description: "Add Fujian's UNESCO tea mountains to your journey.",
            image: '/images/destinations/fujian.webp',
            imageAlt: 'Wuyishan Nine-Bend River and Danxia cliffs',
            days: '3–4 days',
          },
          {
            href: '/south-china/hong-kong-macau',
            label: 'Hong Kong & Macau',
            description: "Combine with the Pearl River Delta's two most distinctive cities.",
            image: '/images/destinations/south-china.webp',
            imageAlt: 'Hong Kong Victoria Harbour skyline',
            days: '4–5 days',
          },
          {
            href: '/jiangxi/lushan-jingdezhen',
            label: 'Jingdezhen & Lushan',
            description: 'Next door in Jiangxi: the porcelain capital and a sacred mountain.',
            image: '/images/destinations/jiangxi.webp',
            imageAlt: 'Jingdezhen porcelain workshop',
            days: '4–5 days',
          },
        ]}
      />
    </div>
  );
}
