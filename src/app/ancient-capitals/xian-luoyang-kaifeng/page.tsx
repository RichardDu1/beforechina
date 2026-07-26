import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Xian, Luoyang & Kaifeng: China's Three Ancient Capitals | BeforeChina",
  description:
    "The Terracotta Warriors, the Longmen Buddhist grottoes carved into limestone cliffs, and Kaifeng — the Song dynasty capital that was once the world's largest city.",
  alternates: { canonical: '/ancient-capitals/xian-luoyang-kaifeng' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/ancient-capitals/xian-luoyang-kaifeng',
    title: "Xian, Luoyang & Kaifeng: China's Three Ancient Capitals | BeforeChina",
    description:
      "The Terracotta Warriors, the Longmen Buddhist grottoes carved into limestone cliffs, and Kaifeng — the Song dynasty capital that was once the world's largest city.",
    images: [
      {
        url: '/images/destinations/ancient-capitals.webp',
        width: 1200,
        height: 630,
        alt: 'Xian Terracotta Warriors in battle formation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Xian, Luoyang & Kaifeng: China's Three Ancient Capitals | BeforeChina",
    description:
      "The Terracotta Warriors, the Longmen Buddhist grottoes carved into limestone cliffs, and Kaifeng — the Song dynasty capital that was once the world's largest city.",
    images: ['/images/destinations/ancient-capitals.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is the best way to experience Xian, Luoyang & Kaifeng: China's Three Ancient Capitals?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 6-7 days. China had eight great ancient capitals, and three of them sit along a 500km stretch of the Yellow River: Xian (Chang'an, capital of 13 dynasties including the Zhou, Qin, Han, and Tang), Luoyang (capit",
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
      name: "Xian, Luoyang & Kaifeng: China's Three Ancient Capitals",
      item: 'https://beforechina.com/ancient-capitals/xian-luoyang-kaifeng',
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
          src="/images/destinations/ancient-capitals.webp"
          alt="Xian Terracotta Warriors in battle formation"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Ancient Capitals &middot; 6-7 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Xian, Luoyang & Kaifeng: China\'s Three Ancient Capitals
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
            The Terracotta Warriors, the Longmen Buddhist grottoes carved into limestone cliffs, and
            Kaifeng — the Song dynasty capital that was once the world\'s largest city.
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
                  "The essential China history itinerary — three ancient capitals along the Yellow River's imperial corridor.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Xian → Luoyang → Kaifeng',
                description:
                  'Connected by 1-1.5 hour high-speed trains. Fly into Xian and out of Zhengzhou.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Terracotta Warriors, Longmen Grottoes, Song Dynasty Kaifeng',
                description:
                  "2,200-year-old warriors, 100,000 Buddhist statues, and the world's largest city in 1000 AD.",
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
            China had eight great ancient capitals, and three of them sit along a 500km stretch of
            the Yellow River: Xian (Chang\'an, capital of 13 dynasties including the Zhou, Qin, Han,
            and Tang), Luoyang (capital of 13 dynasties, home of the Longmen Grottoes and the first
            Buddhist temple in China), and Kaifeng (the Northern Song capital that was the world\'s
            largest city in 1000 AD with over 1 million people). This route connects them by
            high-speed train — Xian to Luoyang is 1.5 hours, Luoyang to Kaifeng is 1 hour. It is the
            essential China history itinerary for travellers who want to go deeper than the
            Beijing-Xian-Shanghai greatest-hits tour.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Arrive Xian',
                content: `Fly into Xian Xianyang Airport (XIY). Afternoon: Xian City Wall — the most complete ancient city wall in China (14 km, built 1370). Rent a bike on the wall (90 min to cycle the full circuit). Evening: Muslim Quarter (回民街) — Xian\'s Hui Muslim neighbourhood is a food street like no other: lamb skewers sizzling over charcoal, yangrou paomo (羊肉泡馍, crumbled flatbread in lamb soup), and persimmon cakes (柿子饼). The Muslim Quarter has existed for 1,300 years since Silk Road traders settled here.`,
                tip: `The city wall bike ride is 14 km and takes about 90 minutes at a leisurely pace. The wall is 12m wide — wide enough for a small car. Go in the late afternoon (4-5pm) when the light turns golden and the temperature drops. The south gate (永宁门) has the most dramatic entrance and the best bike rental station.`,
              },
              {
                day: 'Day 2: Xian',
                content: `Morning: Terracotta Warriors (兵马俑). Get there at 8:30am opening — the site is 40 km east of Xian and takes 1 hour by public bus from Xian Railway Station or 40 minutes by private car. The warriors are in three pits: Pit 1 is the largest (6,000 warriors in battle formation, only 2,000 excavated), Pit 2 has cavalry and chariots, Pit 3 is the command centre. Afternoon: Huaqing Hot Springs at the foot of Mount Li — the Tang dynasty imperial bathing pools where Emperor Xuanzong and his consort Yang Guifei bathed. Evening: Tang Dynasty music and dance show.`,
                tip: `Terracotta Warriors ticket: book ahead online. Get there at 8:30am sharp — by 10am Pit 1 is a wall of tour groups. Walk to the far end of Pit 1 first (fewer people) and work your way back. The museum is in the countryside — there is nowhere good to eat nearby. Bring snacks or eat breakfast before you go. The warriors were originally painted in bright colours — the pigments faded within minutes of exposure to air when excavated.`,
              },
              {
                day: 'Day 3: Xian → Luoyang',
                content: `Take the 1.5-hour high-speed train from Xian North to Luoyang Longmen. Afternoon: Longmen Grottoes (龙门石窟) — a UNESCO site of over 100,000 Buddhist statues carved into 1 km of limestone cliffs along the Yi River. The carvings span 400 years (5th-9th centuries). The largest is the 17m Vairocana Buddha in the Fengxian Temple. Cross the river to see the grottoes from the opposite bank — the scale of the cliff carving becomes clear. Evening: Luoyang Water Banquet (洛阳水席) — a 24-course meal where every dish is served in broth.`,
                tip: `Longmen Grottoes are best in afternoon light — the western cliffs (main grottoes) face east and are illuminated by the morning sun, but the afternoon gives you the best perspective from the east bank looking back. The Vairocana Buddha\'s face is 4m tall. Her smile is considered the most beautiful in Chinese Buddhist art. The site takes 3-4 hours.`,
              },
              {
                day: 'Day 4: Luoyang',
                content: `Morning: White Horse Temple (白马寺) — China\'s first Buddhist temple, founded in 68 AD when two Indian monks arrived on white horses carrying Buddhist scriptures. The temple has a working monastery, pagodas from multiple dynasties, and a recently built Indian/Thai/Myanmar temple complex. Afternoon: Luoyang Museum (free, book ahead) — an excellent collection of Tang dynasty ceramics, including the famous Tang sancai (唐三彩, three-colour glazed pottery). Evening: Luoyang Old Town for local snacks.`,
                tip: `The White Horse Temple\'s international section (Indian, Thai, and Myanmar temples) was built in the 2000s and is more a curiosity than historically significant. The real value is in the original Chinese halls — the Qiyun Pagoda (built 1175) and the Hall of Heavenly Kings. The temple is 12 km east of Luoyang — 40 minutes by bus or 25 minutes by Didi.`,
              },
              {
                day: 'Day 5: Luoyang → Shaolin Temple → Kaifeng',
                content: `Day trip to Shaolin Temple (少林寺), 1.5 hours from Luoyang by bus. Shaolin is the birthplace of Chan (Zen) Buddhism and kung fu — the monks have practised martial arts here for 1,500 years. Visit the main temple, the Pagoda Forest (228 stone pagodas housing the ashes of abbots), and watch a kung fu demonstration by the current generation of warrior monks. Afternoon: bus back to Luoyang, then high-speed train to Kaifeng (1 hr).`,
                tip: `Shaolin Temple is touristy — manage expectations. The kung fu demonstration is impressive (students breaking metal bars on their heads) but the temple itself is smaller than you might expect. The Pagoda Forest is the most atmospheric part — 228 stone pagodas from the 7th to 19th centuries in a quiet pine grove. The Shaolin area is also full of martial arts schools where Chinese parents send their children to study kung fu full-time.`,
              },
              {
                day: 'Day 6: Kaifeng',
                content: `Kaifeng was the Northern Song capital (960-1127 AD) and the world\'s largest city at the time. Start at the Millennium City Park (清明上河园) — a life-sized reconstruction of a Song dynasty city based on the famous scroll painting \'Along the River During the Qingming Festival\'. Staff wear Song dynasty costumes and there are performances throughout the day. Afternoon: Dragon Pavilion (龙亭) and the Iron Pagoda (铁塔) — a 55m brick pagoda from 1049 with rust-coloured glazed tiles that look like iron. Evening: Kaifeng night market at Gulou (鼓楼) — xiaolongbao (Kaifeng claims to have invented soup dumplings), bucket chicken (桶子鸡), and almond tea.`,
                tip: `The Kaifeng night market at Gulou Square is one of China\'s largest. The Kaifeng xiaolongbao (开封灌汤包) are different from Shanghai\'s — the skin is thicker and the filling is lamb, not pork. Kaifeng also has a significant Hui Muslim population, so lamb dishes are common. The almond tea (杏仁茶) is a Kaifeng speciality — sweet, nutty, and served hot.`,
              },
              {
                day: 'Day 7: Kaifeng → Zhengzhou → Fly Out',
                content: `Morning: Xiangguo Temple (大相国寺) — a Tang dynasty temple that was the Song dynasty\'s most important Buddhist institution, famous for its statue of Guanyin with 1,000 hands and eyes carved from a single ginkgo tree. Afternoon: 30-minute train to Zhengzhou, then fly out from Zhengzhou Xinzheng Airport (CGO).`,
                tip: `Zhengzhou is the transport hub for this region. It has flights to most major Chinese cities and some international connections. The airport is 35 km from the city centre — 40 minutes by metro (line 2 extension). If your flight is late, the Henan Museum in Zhengzhou (free) is excellent for its Shang dynasty bronzes.`,
              },
            ].map((stop, i) => (
              <div
                key={stop.day}
                style={{
                  padding: '40px 0',
                  borderBottom: i < 6 ? '1px solid var(--border-color)' : 'none',
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
            description: 'Add Beijing and Shanghai for the classic Golden Triangle.',
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8-10 days',
          },
          {
            href: '/ancient-capitals/pingyao-datong-yungang',
            label: 'Pingyao, Datong & Yungang',
            description: "Continue north to Pingyao's walled city and the Yungang Grottoes.",
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Yungang Grottoes giant Buddha statues',
            days: '5-6 days',
          },
          {
            href: '/silk-road/xian-lanzhou-dunhuang',
            label: "Silk Road: Xi'an to Dunhuang",
            description: "Follow the Silk Road west from Xi'an into the desert.",
            image: '/images/destinations/silk-road.webp',
            imageAlt: 'Camel caravan in Dunhuang dunes',
            days: '7-10 days',
          },
        ]}
      />
    </div>
  );
}
