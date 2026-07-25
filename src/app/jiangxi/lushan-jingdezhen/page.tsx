import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Jingdezhen & Lushan: Porcelain Capital & Misty Mountain | BeforeChina',
  description:
    "Jingdezhen's 1,000-year-old kilns, hands-on porcelain workshops, and Lushan — the mountain where China's leaders held secret meetings in colonial stone villas.",
  alternates: { canonical: '/jiangxi/lushan-jingdezhen' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/jiangxi/lushan-jingdezhen',
    title: 'Jingdezhen & Lushan: Porcelain Capital & Misty Mountain | BeforeChina',
    description:
      "Jingdezhen's 1,000-year-old kilns, hands-on porcelain workshops, and Lushan — the mountain where China's leaders held secret meetings in colonial stone villas.",
    images: [
      {
        url: '/images/destinations/jiangxi.webp',
        width: 1200,
        height: 630,
        alt: 'Jingdezhen ancient porcelain kiln workshops',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jingdezhen & Lushan: Porcelain Capital & Misty Mountain | BeforeChina',
    description:
      "Jingdezhen's 1,000-year-old kilns, hands-on porcelain workshops, and Lushan — the mountain where China's leaders held secret meetings in colonial stone villas.",
    images: ['/images/destinations/jiangxi.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Is Jingdezhen worth visiting if I'm not into pottery?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — Jingdezhen is one of China's most underrated small cities. The ancient kiln area, the porcelain markets, and the artist studios are fascinating even if you have no interest in making pottery. The city has a creative, youthful energy (many young Chinese artists have moved here for the cheap studio space and ceramic heritage). The food is excellent (Jiangxi cuisine is spicy and underrated), and it is a pleasant, walkable city with a river running through it.",
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
      name: 'Jingdezhen & Lushan: Porcelain Capital & Misty Mountain',
      item: 'https://beforechina.com/jiangxi/lushan-jingdezhen',
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
          src="/images/destinations/jiangxi.webp"
          alt="Jingdezhen ancient porcelain kiln workshops"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Jiangxi &middot; 4-5 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Jingdezhen & Lushan: Porcelain Capital & Misty Mountain
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
            Jingdezhen\'s 1,000-year-old kilns, hands-on porcelain workshops, and Lushan — the
            mountain where China\'s leaders held secret meetings in colonial stone villas.
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
                  "The perfect pace for Jiangxi's two gems — two days in the porcelain capital, two days on the misty mountain.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Jingdezhen → Lushan → Nanchang',
                description:
                  'Connected by 2-hour high-speed trains. Jingdezhen and Nanchang both have airports with domestic connections.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Ancient Kilns, Porcelain Workshops, Lushan Villas',
                description:
                  '1,000 years of porcelain history, hands-on pottery, and a mountain resort with colonial villas.',
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
            Jingdezhen (景德镇) has produced the world\'s finest porcelain for 1,000 years. The
            imperial kilns supplied every Chinese emperor from the Song to the Qing dynasty, and
            \'china\' (porcelain) is named after \'China\' for a reason — Jingdezhen\'s exports
            defined how the world saw Chinese craftsmanship. Today the city is a fascinating mix of
            ancient kilns, artist studios, and a thriving contemporary ceramics scene. Lushan
            (庐山), 2 hours north, is a mountain resort where missionaries, colonialists, and later
            China\'s communist leaders built stone villas in the cool mountain air. Mao held the
            1959 Lushan Plenum here, where he purged Peng Dehuai for criticising the Great Leap
            Forward.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Arrive Jingdezhen',
                content: `Fly into Jingdezhen Luojia Airport (JDZ) or take the high-speed train from Shanghai (4 hrs, ¥250), Hangzhou (3 hrs, ¥180), or Nanchang (1 hr, ¥50). Afternoon: Jingdezhen Ceramic History Museum (景德镇陶瓷博物馆, free) — the world\'s largest ceramics museum, covering the history of Chinese porcelain from the Neolitic to the present. The museum building is a replica of a Song dynasty kiln. Evening: walk the Ancient Kiln Folk Customs Museum area (古窑民俗博览区, ¥95) — a reconstructed Ming-Qing kiln village with working potters demonstrating traditional techniques.`,
                tip: `The Ancient Kiln Folk Customs Museum (¥95) is touristy but worthwile — you watch master potters throw porcelain on kick-wheels, paint blue-and-white designs, and fire wood kilns. The potters are genuine craftspeople, not actors. You can buy their work — a hand-painted teacup costs ¥50-200 directly from the maker.`,
              },
              {
                day: 'Day 2: Jingdezhen — Porcelain Immersion',
                content: `Morning: visit a porcelain workshop for a hands-on experience. The Pottery Workshop (乐天陶社) in the Sculpture Factory area runs half-day classes (¥200-400) where you throw a bowl on a wheel, paint blue-and-white designs, and fire your piece (it ships to your home, ¥50-100 international shipping). Afternoon: explore the Sculpture Factory area (雕塑瓷厂) — a former state-owned factory turned into a creative park of artist studios, galleries, and cafes. Saturday mornings have the best creative market in China (乐天集市, 8am-12pm) — young ceramic artists selling their work. Evening: Taoxichuan (陶溪川) — a former state porcelain factory turned into a cultural district of galleries, design shops, and restaurants in red-brick industrial buildings.`,
                tip: `The Saturday morning Creative Market (乐天集市) at the Sculpture Factory is the best time to be in Jingdezhen — 100+ young ceramic artists selling their work, from ¥20 earings to ¥2,000 vases. The market runs 8am-12pm. Arrive early — the best pieces sell in the first hour. This is where Chinese galleries scout new talent.`,
              },
              {
                day: 'Day 3: Jingdezhen → Lushan',
                content: `Take the 2-hour high-speed train from Jingdezhen North to Jiujiang (¥60), then 1-hour bus up the mountain to Lushan (庐山, ¥180 entrance + ¥80 shuttle bus). Lushan is a mountain resort at 1,100m where missionaries built stone villas in the late 19th century and China\'s leaders followed. The mountain has over 600 villas representing 18 countries\' architectural styles. Check into a hotel (converted villa or modern). Afternoon: walk the villa trail — visit the Meilu Villa (美庐, ¥25), the former summer residence of Chiang Kai-shek and later Mao Zedong. The villa is preserved as it was when Mao stayed here in 1959, with his bedroom and study intact. Evening: Lushan speciality — stone fish (石鱼), tiny fish from the mountain streams, and stone ear fungus (石耳).`,
                tip: `Lushan entrance: ¥180. The mountain has a permanent population of 20,000 and a town (Guling, 牯岭镇) at the summit with hotels, restaurants, and shops. The temperature at 1,100m is 8-10°C cooler than the plains — Lushan has been a summer escape for 100 years. The mountain is often in clouds — embrace the mist.`,
              },
              {
                day: 'Day 4: Lushan',
                content: `Full day hiking Lushan. The mountain\'s main sights are waterfalls, peaks, and the views of the Yangtze River and Poyang Lake from the summit. Visit the Three-Step Waterfall (三叠泉, ¥64) — Lushan\'s most famous waterfall, descending in three cascades over 155m. The hike is 3,000+ steps down to the base and back up — hard work but worth it. Then the Immortal\'s Cave (仙人洞) — a natural cave where a Daoist immortal supposedly lived, with a view over a sea of clouds. Lushan is also famous for its \'cloud tea\' (云雾茶) — tea grown in the mountain mist, one of China\'s top 10 teas. Visit a tea plantation for a tasting.`,
                tip: `The Three-Step Waterfall (三叠泉) is a 3,000-step descent (and climb back up). The steps are steep and uneven. The cable car (¥80) covers the flatter approach but you still have to climb 1,500+ steps to the base. Go early morning (7am) to avoid the crowds. The waterfall is most powerful after rain.`,
              },
              {
                day: 'Day 5: Lushan → Nanchang → Depart',
                content: `Morning: final Lushan walk — the Brocade Valley (锦绣谷) is a 1.5 km cliffside path through misty peaks and rock formations, ending at the Immortal\'s Cave. Then descend the mountain by bus (1 hr) to Jiujiang. Train from Jiujiang to Nanchang (1 hr, ¥40) for your flight out. If you have time in Nanchang: visit the Tengwang Pavillion (滕王阁, ¥50) — a Tang dynasty pavillion on the Gan River, one of China\'s \'Four Great Towers\', or the Nanchang Star (南昌之星, ¥50) — a 160m Ferris wheel with views over the city.`,
                tip: `Nanchang is Jiangxi\'s capital and a transport hub. The airport (KHN) has flights to most major Chinese cities. The Tengwang Pavillion is a 1989 reconstruction (the original was destroyed 28 times over 1,300 years) — it is historically inauthentic but architecturally impressive.`,
              },
            ].map((stop, i) => (
              <div
                key={stop.day}
                style={{
                  padding: '40px 0',
                  borderBottom: i < 4 ? '1px solid var(--border-color)' : 'none',
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
                <blockquote className="pull" style={{ margin: '16px 00', fontSize: '16px' }}>
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
            href: '/huangshan/yellow-mountain',
            label: 'Huanshan',
            description: 'The Yellow Mountain is 1.5 hours from Jingdezhen by train',
            image: '/images/destinations/huangshan.webp',
            imageAlt: 'Huanshan granite peaks in mist',
            days: '3-4 days',
          },
          {
            href: '/fujian/wuyishan',
            label: 'Wuyishan',
            description: "Combine with Fujian's tea mountains and Nine-Bend River",
            image: '/images/destinations/fujian.webp',
            imageAlt: 'Wuyishan Nine-Bend River',
            days: '3-4 days',
          },
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: 'Golden Triangle',
            description: "Start with Beijing, Xi'an and Shanghai before heading to Jiangxi",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8-10 days',
          },
        ]}
      />
    </div>
  );
}
