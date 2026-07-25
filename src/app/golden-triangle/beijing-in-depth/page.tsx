import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Beijing In Depth | BeforeChina',
  description:
    "A deep dive into China's 3,000-year capital — from the Forbidden City to the Great Wall, with time for hidden temples and hutong bars.",
  alternates: { canonical: '/golden-triangle/beijing-in-depth' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/golden-triangle/beijing-in-depth',
    title: 'Beijing In Depth | BeforeChina',
    description:
      "A deep dive into China's 3,000-year capital — from the Forbidden City to the Great Wall, with time for hidden temples and hutong bars.",
    images: [
      {
        url: '/images/destinations/golden-triangle.webp',
        width: 1200,
        height: 630,
        alt: 'The Forbidden City palace complex in Beijing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beijing In Depth | BeforeChina',
    description:
      "A deep dive into China's 3,000-year capital — from the Forbidden City to the Great Wall, with time for hidden temples and hutong bars.",
    images: ['/images/destinations/golden-triangle.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Beijing In Depth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 4–5 days. Beijing deserves more than the rushed 2-day stop on most Golden Triangle tours. With 4-5 days, you can see the big hitters, explore Beijing's vanishing hutong alleyways, visit lesser-known temples, an",
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
      name: 'Beijing In Depth',
      item: 'https://beforechina.com/golden-triangle/beijing-in-depth',
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
          src="/images/destinations/golden-triangle.webp"
          alt="The Forbidden City palace complex in Beijing"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Beijing &middot; 4–5 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Beijing In Depth
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
            A deep dive into China\'s 3,000-year capital — from the Forbidden City to the Great
            Wall, with time for hidden temples and hutong bars.
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
                title: '4–5 Days',
                description:
                  "Enough time to see the icons and discover Beijing's vanishing hutong alleyways.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Beijing',
                description:
                  "China's 3,000-year capital — imperial palaces, ancient temples, and cutting-edge art districts.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Forbidden City, Great Wall, Temple of Heaven',
                description:
                  "The three essentials, plus hidden temples and the city's best food streets.",
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
            Beijing deserves more than the rushed 2-day stop on most Golden Triangle tours. With 4-5
            days, you can see the big hitters, explore Beijing\'s vanishing hutong alleyways, visit
            lesser-known temples, and still have an evening free for craft cocktails in Gulou.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: The Imperial Core',
                content: `Start at Tiananmen Square, then walk north through the Forbidden City (book 7 days ahead via WeChat mini-program). The full walk from south gate to north gate takes 3-4 hours. Exit through Jingshan Park — climb the hill for the panoramic view over the Forbidden City\'s golden roofs. Evening: Dinner at a hutong restaurant near Nanluoguxiang.`,
                tip: `Forbidden City tickets sell out. Book exactly 7 days before at 8pm Beijing time on the \'故宫博物院\' WeChat mini-program. Have your passport number ready.`,
              },
              {
                day: 'Day 2: Great Wall',
                content: `Mutianyu Great Wall — leave at 7am, arrive by 8:30am. Take the cable car up, walk east toward Watchtower 20 for the steepest section, then toboggan down. Back in Beijing by 2pm. Afternoon: Summer Palace — the marble boat and Long Corridor are iconic. Evening: Peking duck at Dadong.`,
                tip: `The toboggan slide (¥100) is genuinely thrilling — a 1.5 km metal slide down the mountain. Worth going to Mutianyu just for this.`,
              },
              {
                day: 'Day 3: Temples & Art',
                content: `Temple of Heaven at 7am — join the pensioners doing tai chi, shuttlecock kicking, and water calligraphy. Then the Lama Temple (Yonghegong) with its 26m sandalwood Buddha. Afternoon: 798 Art District — galleries, coffee shops, and a Bauhaus factory turned creative hub.`,
                tip: `The Lama Temple is an active Tibetan Buddhist monastery. Dress respectfully (covered shoulders). The giant Buddha at the end is 18m tall and carved from a single sandalwood tree.`,
              },
              {
                day: 'Day 4: Hidden Beijing',
                content: `Morning: White Cloud Temple (Baiyun Guan) — Beijing\'s largest Daoist temple, peaceful and rarely touristy. Walk the old hutong alleys from Qianmen to Dashilan. Afternoon: National Museum of China (free, book ahead) or Panjiayuan flea market for antiques and souvenirs. Fly out in the evening or extend one more day.`,
                tip: `Panjiayuan on weekends is the best. Most \'antiques\' are reproductions, but haggle hard (start at 30% of asking price) and you\'ll find great souvenirs.`,
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
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: "The full Golden Triangle — add Xi'an and Shanghai.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8–10 days',
          },
          {
            href: '/golden-triangle/beijing-xian',
            label: "Beijing & Xi'an",
            description: "Combine China's two great ancient capitals.",
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Xian city wall',
            days: '6–7 days',
          },
          {
            href: '/dongbei/harbin-snow-town',
            label: 'Harbin & Snow Town',
            description: "Head northeast for the world's largest ice festival.",
            image: '/images/destinations/dongbei.webp',
            imageAlt: 'Harbin ice sculptures',
            days: '5–7 days',
          },
        ]}
      />
    </div>
  );
}
