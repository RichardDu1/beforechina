import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Guilin & Yangshuo: China's Most Beautiful Landscape | BeforeChina",
  description:
    "The 20 RMB note view, a Li River bamboo raft through karst peaks, and cycling through Yangshuo's rice paddies — this is the China you imagined.",
  alternates: { canonical: '/guangxi/guilin-yangshuo-lijiang' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/guangxi/guilin-yangshuo-lijiang',
    title: "Guilin & Yangshuo: China's Most Beautiful Landscape | BeforeChina",
    description:
      "The 20 RMB note view, a Li River bamboo raft through karst peaks, and cycling through Yangshuo's rice paddies — this is the China you imagined.",
    images: [
      {
        url: '/images/destinations/guangxi.webp',
        width: 1200,
        height: 630,
        alt: 'Li River karst peaks in Guilin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Guilin & Yangshuo: China's Most Beautiful Landscape | BeforeChina",
    description:
      "The 20 RMB note view, a Li River bamboo raft through karst peaks, and cycling through Yangshuo's rice paddies — this is the China you imagined.",
    images: ['/images/destinations/guangxi.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is the best way to experience Guilin & Yangshuo: China's Most Beautiful Landscape?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 3-4 days. Guilin's karst landscape — limestone peaks rising vertically from flat rice paddies — is the most reproduced image of China. It is on the 20 RMB note. It inspired generations of Chinese landscape pain",
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
      name: "Guilin & Yangshuo: China's Most Beautiful Landscape",
      item: 'https://beforechina.com/guangxi/guilin-yangshuo-lijiang',
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
          src="/images/destinations/guangxi.webp"
          alt="Li River karst peaks in Guilin"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Guangxi &middot; 3-4 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Guilin & Yangshuo: China\'s Most Beautiful Landscape
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
            The 20 RMB note view, a Li River bamboo raft through karst peaks, and cycling through
            Yangshuo\'s rice paddies — this is the China you imagined.
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
                  "The perfect first-timer's Guilin trip — the iconic Li River cruise and Yangshuo countryside in a long weekend.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Guilin → Yangshuo → Longji',
                description:
                  'Connected by road — Guilin is the hub, Yangshuo is 1.5 hours south, Longji is 2.5 hours north.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Li River, Karst Peaks, Rice Terraces',
                description:
                  'The 20 RMB note view, bamboo rafting through limestone peaks, and cycling through rice paddies.',
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
            Guilin\'s karst landscape — limestone peaks rising vertically from flat rice paddies —
            is the most reproduced image of China. It is on the 20 RMB note. It inspired generations
            of Chinese landscape painting. And it genuinely looks like the photos. The classic route
            is simple: Guilin city as the entry point, the Li River cruise to Yangshuo (4 hours
            through the heart of the karst), 2 days exploring Yangshuo\'s countryside by bike and
            bamboo raft, and an optional day at the Longji Rice Terraces.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Guilin',
                content: `Fly into Guilin Liangjiang Airport (KWL). Guilin city itself is a pleasant small city with two lakes (Shanhu and Ronghu) connected by the Li River. Visit Elephant Trunk Hill (the city symbol, ¥55), walk around the Sun and Moon Pagodas on Shanhu Lake, and explore the night market on Zhengyang Pedestrian Street. Guilin rice noodles (桂林米粉) for breakfast tomorrow — this is the city\'s signature dish.`,
                tip: `Elephant Trunk Hill is ¥55 and takes 30 minutes. It is fine but not worth the price. Instead, walk the Binjiang Road promenade for a free view of the river and the karst peaks. The real Guilin experience starts tomorrow on the Li River.`,
              },
              {
                day: 'Day 2: Li River → Yangshuo',
                content: `Option A: Take the 4-hour Li River cruise from Guilin to Yangshuo (departs 9am, arrives 1pm). The boat passes through the heart of the karst — peaks named \'Nine Horses Fresco Hill\', \'Yellow Cloth Shoal\' (this is the 20 RMB note view), and \'Mural Hill\'. Option B: Drive to Yangdi (1 hr from Guilin) and take a bamboo raft from Yangdi to Xingping (90 min, ¥120/person) — this covers the most scenic section and avoids the large tour groups. From Xingping, take the 40-min bus to Yangshuo. Evening: West Street (Xi Jie) for dinner and bars.`,
                tip: `The bamboo raft from Yangdi to Xingping is the better experience — you are closer to the water, the rafts are smaller, and the scenery is the best section of the river. Each raft takes 4 people. If you are alone or a couple, you may need to wait for others to fill the raft or pay for the empty seats (¥50/seat).`,
              },
              {
                day: 'Day 3: Yangshuo Countryside',
                content: `Rent a bicycle (¥30/day) or e-bike (¥60/day) and cycle into the Yangshuo countryside. The classic loop: Yangshuo → Aishanmen → Gongnong Bridge → Moon Hill → Baisha → Yulong River → Yangshuo (25 km, 3-4 hours). You cycle through rice paddies with karst peaks in every direction. Stop at Moon Hill (¥15, 800 steps up a natural limestone arch) for the panoramic view. Afternoon: Yulong River bamboo raft (¥200/raft, 90 min) — this is the quieter, more intimate river compared to the Li. The rafts here are actual bamboo (not motorised PVC) and poled by a boatman.`,
                tip: `The Yulong River bamboo raft is better than the Li River raft — no motors, just a boatman with a bamboo pole. The stretch from Jinlong Bridge to Jiuxian is the best section. Go before 10am or after 3pm to avoid the midday crowds. Wear shoes you can get wet — there are small weirs the raft slides down.`,
              },
              {
                day: 'Day 4 (optional): Longji Rice Terraces',
                content: `Day trip from Guilin or Yangshuo to the Longji Rice Terraces (2.5-hour drive). The terraces were built by the Zhuang and Yao minorities over 600 years and look like dragon scales wrapping around the mountains. Two main viewpoints: Ping\'an (the classic view, easier walk) and Jinkeng (larger, more dramatic, accessible by cable car ¥100 round trip). Visit one — both is too much for a day trip. Return to Guilin for your flight out.`,
                tip: `Longji is best May-June (flooded terraces reflect the sky) and September-October (golden rice ready for harvest). The Yao women at the entrance will offer to carry your bag up (¥50) — they are genuinely helpful and the income supports their village. You can hire one even if your bag is light.`,
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
            href: '/guangxi/guilin-longji-xingping',
            label: 'Extended Guilin Route',
            description:
              'Add Longji Terraces and Xingping photography spots for a deeper Guangxi experience.',
            image: '/images/destinations/guangxi.webp',
            imageAlt: 'Longji Rice Terraces at sunrise',
            days: '5-6 days',
          },
          {
            href: '/guizhou/huangguoshu-libo-miao',
            label: 'Full Guizhou Route',
            description:
              "Combine Guilin with Guizhou's waterfalls, karst rivers, and Miao villages.",
            image: '/images/destinations/guizhou.webp',
            imageAlt: 'Huangguoshu Waterfall in Guizhou',
            days: '5-6 days',
          },
          {
            href: '/yunnan/kunming-dali-lijiang-shangri-la',
            label: 'Classic Yunnan Route',
            description:
              'Continue west to Yunnan — the classic backpacker trail through Dali, Lijiang, and Shangri-La.',
            image: '/images/destinations/yunnan.webp',
            imageAlt: 'Dali Old Town with Cangshan mountains',
            days: '8-12 days',
          },
        ]}
      />
    </div>
  );
}
