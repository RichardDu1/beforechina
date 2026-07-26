import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Wuyishan: Tea Mountains & the Nine-Bend River | BeforeChina',
  description:
    "A UNESCO landscape of Danxia rock formations, primeval forests, a river that meanders through a canyon in 9 perfect bends, and the birthplace of Dahongpao — China's most legendary tea.",
  alternates: { canonical: '/fujian/wuyishan' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/fujian/wuyishan',
    title: 'Wuyishan: Tea Mountains & the Nine-Bend River | BeforeChina',
    description:
      "A UNESCO landscape of Danxia rock formations, primeval forests, a river that meanders through a canyon in 9 perfect bends, and the birthplace of Dahongpao — China's most legendary tea.",
    images: [
      {
        url: '/images/destinations/fujian.webp',
        width: 1200,
        height: 630,
        alt: 'Wuyishan Nine-Bend River and Danxia cliffs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wuyishan: Tea Mountains & the Nine-Bend River | BeforeChina',
    description:
      "A UNESCO landscape of Danxia rock formations, primeval forests, a river that meanders through a canyon in 9 perfect bends, and the birthplace of Dahongpao — China's most legendary tea.",
    images: ['/images/destinations/fujian.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Is Wuyishan worth visiting if I don't drink tea?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — the scenery alone justifies the trip. The Nine-Bend River bamboo raft (1.5 hours through a canyon of red cliffs and hanging coffins) is one of China's best river experiences. The hiking trails (Tianyou Peak, Tiger Roaring Rock, Water Curtain Cave) are well-maintained and the views are spectacular. The tea culture is an added layer, not the only reason to go.",
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
      name: 'Wuyishan: Tea Mountains & the Nine-Bend River',
      item: 'https://beforechina.com/fujian/wuyishan',
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
          alt="Wuyishan Nine-Bend River and Danxia cliffs"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Fujian &middot; 3-4 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Wuyishan: Tea Mountains & the Nine-Bend River
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
            A UNESCO landscape of Danxia rock formations, primeval forests, a river that meanders
            through a canyon in 9 perfect bends, and the birthplace of Dahongpao — China\'s most
            legendary tea.
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
                title: '3–4 Days',
                description:
                  'The perfect nature-focused side trip — bamboo rafts, tea trails, and Danxia peaks.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Xiamen → Wuyishan → Xiamen (or fly out)',
                description:
                  '3.5-hour high-speed train from Xiamen. Wuyishan also has a small airport with connections to Shanghai and Beijing.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Nine-Bend River, Tianyou Peak, Dahongpao Tea',
                description:
                  'Bamboo raft through a red-cliff canyon, climb 848 steps for the iconic panorama, and taste legendary rock oolong.',
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
            Wuyishan (武夷山) in northern Fujian is a UNESCO World Heritage site for both nature and
            culture — one of only 41 such sites in the world. The landscape is classic Danxia: red
            sandstone cliffs, clear rivers, deep gorges, and ancient forests. The Nine-Bend River
            (九曲溪) meanders through the canyon in 9 distinct bends, each prettier than the last.
            And the tea: Wuyishan is the birthplace of Dahongpao (大红袍, Big Red Robe), a rock
            oolong tea that is among the most prized in the world. The original mother bushes on a
            cliff face are 360 years old and considered a national treasure.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Xiamen → Wuyishan',
                content: `Take the 3.5-hour high-speed train from Xiamen North to Wuyishan North. Check into your accommodation near the scenic area entrance. Afternoon: Wuyishan Tea Museum (free) for an introduction to Dahongpao and the region\'s tea culture. Walk the old town of Wuyishan City and try the local speciality — smoked goose (武夷熏鹅).`,
                tip: `Wuyishan scenic area entrance: multi-day passes are available (1-day, 2-day, or 3-day options) plus a shuttle bus supplement. The 3-day pass is the best value for exploring fully. The bamboo raft experience must be booked separately and sells out — arrange through your hotel or the official website.`,
              },
              {
                day: 'Day 2: Nine-Bend River & Tianyou Peak',
                content: `Morning: Nine-Bend River bamboo raft (九曲溪竹筏, 1.5 hrs) — the essential Wuyishan experience. The raft (6 people + a boatman who narrates the scenery in Chinese) floats through the canyon from Bend 9 to Bend 1. You pass under red sandstone cliffs, past hanging coffins wedged into rock crevices 3,000 years ago (nobody knows how they got there), and through rapids that splash the raft. Afternoon: climb Tianyou Peak (天游峰) — the highest point in the scenic area (408m, 848 steps). The panoramic view of the Nine-Bend River snaking through the canyon is the iconic Wuyishan photo.`,
                tip: `The bamboo raft boatmen tell jokes and point out rock formations named after animals and legends — all in Chinese. Even if you don\'t understand, the scenery is the point. The hanging coffins (船棺) in the cliffs have been carbon-dated to 3,600 years old. Tianyou Peak is steep (848 steps) — go in the morning when it is cooler. The view from the top is worth every step.`,
              },
              {
                day: 'Day 3: Dahongpao Tea Trail',
                content: `Morning: walk the Dahongpao Tea Trail — a stone path through the canyon past tea plantations clinging to rock faces. The trail leads to the original Dahongpao mother bushes (大红袍母树) — 6 tea bushes growing from a crack in a cliff face, 360 years old. From here, hike the Rock Tea Trail (岩骨花香漫游道) through the tea-growing valley to the Water Curtain Cave (水帘洞) — a waterfall that cascades over a 100m cliff into a pool. Afternoon: tea tasting at a local tea farmer\'s house. Evening: soak in a Wuyishan hot spring.`,
                tip: `The original Dahongpao mother bushes are tiny — don\'t expect a grand sight. Their significance is cultural: all Dahongpao tea in the world is descended from these 6 bushes. The tea is no longer harvested from the mother bushes (the last harvest was in 2005 and fetched a record price at auction). What you buy as \'Dahongpao\' is from their cuttings, grown elsewhere in Wuyishan.`,
              },
              {
                day: 'Day 4: Wuyishan → Depart',
                content: `Morning: visit Tiger Roaring Rock (虎啸岩) — a trail through a narrow rock fissure and up to a viewpoint over the tea valley. Alternative: hike to the Wuyi Palace (武夷宫), a Song dynasty Daoist temple at the mouth of the Nine-Bend River. Afternoon: train back to Xiamen (3.5 hrs) or fly out from Wuyishan Airport (WUS) with connecting flights via Xiamen or Shanghai.`,
                tip: `Wuyishan Airport (WUS) has limited flights — mostly to Xiamen, Shanghai, and Beijing. If your schedule doesn\'t match, take the train back to Xiamen and fly from XMN. The train station is 30 minutes from the scenic area by bus.`,
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
            href: '/fujian/xiamen-tulou-quanzhou',
            label: 'Xiamen, Tulou & Quanzhou',
            description: "Combine with Fujian's Maritime Silk Road cities and UNESCO roundhouses.",
            image: '/images/destinations/fujian.webp',
            imageAlt: 'Fujian Tulou circular earthen roundhouses',
            days: '5–6 days',
          },
          {
            href: '/jiangxi/lushan-jingdezhen',
            label: 'Jingdezhen & Lushan',
            description: 'Next door in Jiangxi: the porcelain capital and a sacred mountain.',
            image: '/images/destinations/jiangxi.webp',
            imageAlt: 'Jingdezhen porcelain workshop',
            days: '4–5 days',
          },
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: 'Golden Triangle',
            description: "Continue to Beijing, Xi'an, and Shanghai for the classic route.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8–10 days',
          },
        ]}
      />
    </div>
  );
}
