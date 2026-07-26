import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Chengdu In Depth: Pandas, Hot Pot & Tea Houses | BeforeChina',
  description:
    "China's most laid-back city — spend your mornings with pandas, afternoons in 100-year-old tea houses, and evenings sweating through Sichuan hot pot.",
  alternates: { canonical: '/sichuan/chengdu-in-depth' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/sichuan/chengdu-in-depth',
    title: 'Chengdu In Depth: Pandas, Hot Pot & Tea Houses | BeforeChina',
    description:
      "China's most laid-back city — spend your mornings with pandas, afternoons in 100-year-old tea houses, and evenings sweating through Sichuan hot pot.",
    images: [
      {
        url: '/images/destinations/sichuan.webp',
        width: 1200,
        height: 630,
        alt: 'Chengdu skyline with Jinli Ancient Street',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chengdu In Depth: Pandas, Hot Pot & Tea Houses | BeforeChina',
    description:
      "China's most laid-back city — spend your mornings with pandas, afternoons in 100-year-old tea houses, and evenings sweating through Sichuan hot pot.",
    images: ['/images/destinations/sichuan.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Chengdu In Depth: Pandas, Hot Pot & Tea Houses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This journey typically takes 3-4 days. Chengdu is the city Chinese people dream of retiring to. The pace is slower, the food is bolder, and the tea house culture — old men playing mahjong in bamboo groves — is still alive. This guide goes ',
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
      name: 'Chengdu In Depth: Pandas, Hot Pot & Tea Houses',
      item: 'https://beforechina.com/sichuan/chengdu-in-depth',
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
          alt="Chengdu skyline with Jinli Ancient Street"
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
            Chengdu In Depth: Pandas, Hot Pot & Tea Houses
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
            China\'s most laid-back city — spend your mornings with pandas, afternoons in
            100-year-old tea houses, and evenings sweating through Sichuan hot pot.
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
                  "The perfect deep dive into China's most laid-back city — pandas, parks, and Sichuan food.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Chengdu',
                description:
                  "Sichuan's capital — the panda capital of the world and the spiritual home of China's boldest cuisine.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Pandas, Tea Houses, Sichuan Hot Pot',
                description:
                  'Breakfast with pandas, afternoon tea in a bamboo grove, and the numbing-spicy broth that defines Sichuan.',
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
            Chengdu is the city Chinese people dream of retiring to. The pace is slower, the food is
            bolder, and the tea house culture — old men playing mahjong in bamboo groves — is still
            alive. This guide goes deep on the city itself, with optional day trips to Leshan and
            the Dujiangyan irrigation system.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Pandas & Parks',
                content: `Panda Base (7:30am-11am), then People\'s Park — drink jasmine tea at Heming Teahouse, watch the matchmaking corner (parents post their children\'s resumes on umbrellas looking for marriage partners), and get your ears cleaned by a professional ear-picker (a Chengdu tradition). Evening: Sichuan hot pot at Shujiuxiang or Dalongyi.`,
                tip: `The matchmaking corner at People\'s Park is surreal — hundreds of parents with printed sheets listing their child\'s age, height, salary, and housing status. It\'s a uniquely Chengdu experience. Weekends are busiest.`,
              },
              {
                day: 'Day 2: Leshan Giant Buddha Day Trip',
                content: `Take the 50-minute high-speed train to Leshan. Visit the 71m Buddha — walk the cliffside stairs or take the river ferry. Lunch: Leshan\'s famous qiaojiao beef (跷脚牛肉) — a medicinal beef soup. Return to Chengdu by late afternoon. Evening: Jinli Ancient Street for lantern-lit shopping and street snacks.`,
                tip: `Leshan\'s qiaojiao beef is legendary. The best is at Feng Siniang (冯四孃跷脚牛肉) near the Buddha scenic area. Order the mixed beef soup — a rich, aromatic broth simmered with herbs — and the blood curd.`,
              },
              {
                day: 'Day 3: Culture & Cooking',
                content: `Morning: Wuhou Temple (Three Kingdoms history) and Jinli Street (adjacent). Afternoon: Sichuan cooking class — learn dan dan noodles, kung pao chicken, and mapo tofu. Evening: Kuanzhai Alley (宽窄巷子) — Qing dynasty courtyard houses converted into bars, tea houses, and restaurants. Then Sichuan opera at Shufeng Yayun.`,
                tip: `Cooking classes in Chengdu run for a half-day. The best include a market tour to buy ingredients first. The Cooking Club Chengdu and Chilli Cool China both have excellent English-speaking instructors.`,
              },
              {
                day: 'Day 4 (optional): Dujiangyan & Qingcheng',
                content: `Day trip to Dujiangyan — a 2,300-year-old irrigation system that still works today, diverting the Min River without a single dam. It\'s a UNESCO site and an engineering marvel. Afternoon: Qingcheng Mountain, one of Daoism\'s birthplaces. The front mountain has temples and pavilions; the back mountain is wilder with waterfalls and fewer tourists.`,
                tip: `Dujiangyan is 1 hour from Chengdu by high-speed train from Xipu Station — remarkably easy to reach. The panda base at Dujiangyan (Panda Valley) is less crowded than the Chengdu one and you can volunteer as a panda keeper (book 1 month ahead).`,
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
            href: '/sichuan/chengdu-jiuzhaigou-huanglong',
            label: 'Chengdu & Jiuzhaigou',
            description: "Add Sichuan's turquoise lakes and golden travertine pools.",
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Jiuzhaigou turquoise lake',
            days: '5-6 days',
          },
          {
            href: '/sichuan/chengdu-emei-leshan',
            label: 'Chengdu, Emei & Leshan',
            description: "Add Emei Mountain's golden summit and the Leshan Giant Buddha.",
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Leshan Giant Buddha',
            days: '3-4 days',
          },
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: "The classic Golden Triangle — add China's three iconic cities.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City',
            days: '8-10 days',
          },
        ]}
      />
    </div>
  );
}
