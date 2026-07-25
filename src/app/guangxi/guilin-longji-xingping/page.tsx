import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Guilin, Longji & Xingping: The Photographer's Guangxi | BeforeChina",
  description:
    "Longji's dragon-scale terraces at sunrise, the Li River at dawn from Xingping, and Yangshuo's karst countryside — Guangxi at its most photogenic.",
  alternates: { canonical: '/guangxi/guilin-longji-xingping' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/guangxi/guilin-longji-xingping',
    title: "Guilin, Longji & Xingping: The Photographer's Guangxi | BeforeChina",
    description:
      "Longji's dragon-scale terraces at sunrise, the Li River at dawn from Xingping, and Yangshuo's karst countryside — Guangxi at its most photogenic.",
    images: [
      {
        url: '/images/destinations/guangxi.webp',
        width: 1200,
        height: 630,
        alt: 'Longji Rice Terraces at sunrise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Guilin, Longji & Xingping: The Photographer's Guangxi | BeforeChina",
    description:
      "Longji's dragon-scale terraces at sunrise, the Li River at dawn from Xingping, and Yangshuo's karst countryside — Guangxi at its most photogenic.",
    images: ['/images/destinations/guangxi.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is the best way to experience Guilin, Longji & Xingping: The Photographer's Guangxi?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 5-6 days. This extended Guilin route is built around light. Longji Rice Terraces at sunrise, when mist fills the valley. Xingping at dawn, when the 20 RMB note view is at its best and the tour groups haven't ar",
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
      name: "Guilin, Longji & Xingping: The Photographer's Guangxi",
      item: 'https://beforechina.com/guangxi/guilin-longji-xingping',
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
          alt="Longji Rice Terraces at sunrise"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Guangxi &middot; 5-6 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Guilin, Longji & Xingping: The Photographer\'s Guangxi
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
            Longji\'s dragon-scale terraces at sunrise, the Li River at dawn from Xingping, and
            Yangshuo\'s karst countryside — Guangxi at its most photogenic.
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
                  'A slower pace built around light — sunrise at the terraces, dawn on the Li River, and golden afternoons in Yangshuo.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Guilin → Longji → Xingping',
                description:
                  "A loop through Guangxi's most photogenic spots — terraces, rivers, and ancient towns.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Sunrise Chasing, Bamboo Rafting, Cycling',
                description:
                  "A photographer's itinerary — mist-filled valleys at dawn, the 20 RMB note view, and karst countryside cycling.",
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
            This extended Guilin route is built around light. Longji Rice Terraces at sunrise, when
            mist fills the valley. Xingping at dawn, when the 20 RMB note view is at its best and
            the tour groups haven\'t arrived. Yangshuo\'s countryside in golden afternoon light. It
            is the same destinations as the 3-4 day route but at a slower pace that rewards
            photographers and travellers who want more than a checklist.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Guilin → Longji',
                content: `Arrive Guilin (KWL). Drive 2.5 hours directly to Longji Rice Terraces. Check into a guesthouse in Ping\'an Village (the most accessible terrace area). Afternoon: walk the paths between Ping\'an and the \'Seven Stars Accompanying the Moon\' viewpoint — the classic Longji photo. The terraces are flooded April-June and golden September-October. Evening: Zhuang minority dinner at your guesthouse — bamboo rice (竹筒饭) cooked inside a bamboo tube over a fire, and smoked pork with wild vegetables.`,
                tip: `Stay inside the terrace area, not at the entrance gate. Ping\'an Village has guesthouses with terrace-view rooms (¥200-400/night). You will need to walk 20-30 minutes uphill from the parking lot — pack light or hire a Yao porter (¥50).`,
              },
              {
                day: 'Day 2: Longji → Guilin → Yangshuo',
                content: `Sunrise at Longji — the \'Nine Dragons and Five Tigers\' viewpoint has the best morning light. After breakfast, walk to the Jinkeng Terraces (cable car ¥100 or 2-hour hike). Jinkeng is larger and more dramatic than Ping\'an, with Yao minority villages scattered through the terraces. Descend by cable car, then drive back to Guilin (2.5 hrs). Take the afternoon bus to Yangshuo (1.5 hrs, ¥25). Evening: settle into Yangshuo and walk West Street.`,
                tip: `The Longji entrance is ¥80. Your ticket is checked at each village entrance — keep it accessible. The Yao women at Jinkeng wear traditional red clothing and floor-length hair wrapped in elaborate headdresses. They charge ¥20 for a photo — it is how they make a living in this remote area.`,
              },
              {
                day: 'Day 3: Xingping & Li River',
                content: `Take the 40-minute bus from Yangshuo to Xingping (¥10). Xingping is a small riverside town that was the original county seat before Yangshuo. Walk the ancient street (1 km of Ming-Qing shopfronts), then climb Laozhai Mountain (40 min, steep) for the aerial view of the Li River bending through the karst — this is the 20 RMB note view from above. Afternoon: bamboo raft from Xingping to Nine Horses Fresco Hill and back (¥120, 1.5 hrs). Evening: stay overnight in Xingping — the town is quiet after the day-trippers leave at 5pm.`,
                tip: `Laozhai Mountain is free and the best view in Guilin. But the climb is genuinely steep — sections require using both hands on chains. Start 1 hour before sunset. Bring a headlamp for the descent. The trailhead is behind the Xingping Wharf.`,
              },
              {
                day: 'Day 4: Xingping Sunrise → Yangshuo',
                content: `Sunrise at Xianggong Mountain (相公山, ¥60, 30-min drive from Xingping). The viewing platform overlooks the Li River in a perfect S-curve through a forest of karst peaks — this is THE Guilin sunrise photo. After sunrise, return to Yangshuo via the back roads through Baisha and Fuli villages. Afternoon: Yulong River bamboo raft and countryside cycling.`,
                tip: `Xianggong Mountain opens at 5am for sunrise. The platform has two levels — the upper level fills with tripods by 5:30am. Go early. The drive up is on a narrow paved road — a Didi from Yangshuo costs ¥80 each way.`,
              },
              {
                day: 'Day 5: Yangshuo → Fly Out',
                content: `Morning: final Yangshuo cycling or a tai chi class by the river. Visit the Yangshuo Cooking School for a half-day class — learn to make Guilin rice noodles and beer fish (啤酒鱼, the local speciality). Afternoon: bus to Guilin (1.5 hrs) for your flight out.`,
                tip: `Beer fish (啤酒鱼) is Yangshuo\'s signature dish — whole river fish braised in beer with tomatoes, peppers, and garlic. Every restaurant on West Street claims to be the original. Eat at a place locals recommend, not the ones with English menus and touts outside.`,
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
            description: 'The essential 3-4 day Guilin-Yangshuo itinerary for first-time visitors.',
            image: '/images/destinations/guangxi.webp',
            imageAlt: 'Li River karst peaks in Guilin',
            days: '3-4 days',
          },
          {
            href: '/guizhou/huangguoshu-libo-miao',
            label: 'Full Guizhou Route',
            description:
              "Combine Guilin with Guizhou's waterfalls, emerald rivers, and Miao villages.",
            image: '/images/destinations/guizhou.webp',
            imageAlt: 'Huangguoshu Waterfall in Guizhou',
            days: '5-6 days',
          },
          {
            href: '/yunnan/kunming-dali-lijiang-shangri-la',
            label: 'Classic Yunnan Route',
            description: 'Continue west to the ancient towns and mountain landscapes of Yunnan.',
            image: '/images/destinations/yunnan.webp',
            imageAlt: 'Dali Old Town with Cangshan mountains',
            days: '8-12 days',
          },
        ]}
      />
    </div>
  );
}
