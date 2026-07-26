import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Daocheng Yading: The Last Shangri-La | BeforeChina',
  description:
    "Three sacred snow mountains at 6,000m, turquoise glacier lakes, and Tibetan plateau grasslands — Sichuan's wildest landscape, 800 km west of Chengdu.",
  alternates: { canonical: '/sichuan/chengdu-daocheng-yading' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/sichuan/chengdu-daocheng-yading',
    title: 'Daocheng Yading: The Last Shangri-La | BeforeChina',
    description:
      "Three sacred snow mountains at 6,000m, turquoise glacier lakes, and Tibetan plateau grasslands — Sichuan's wildest landscape, 800 km west of Chengdu.",
    images: [
      {
        url: '/images/destinations/sichuan.webp',
        width: 1200,
        height: 630,
        alt: 'Daocheng Yading snow mountains and turquoise lake',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daocheng Yading: The Last Shangri-La | BeforeChina',
    description:
      "Three sacred snow mountains at 6,000m, turquoise glacier lakes, and Tibetan plateau grasslands — Sichuan's wildest landscape, 800 km west of Chengdu.",
    images: ['/images/destinations/sichuan.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Daocheng Yading: The Last Shangri-La?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This journey typically takes 7-8 days. Daocheng Yading (稻城亚丁) is what happens when you cross the Tibetan Plateau with Yosemite. Three sacred peaks — Chenrezig (6,032m), Jampelyang (5,958m), and Chanadorje (5,958m) — ring a valley of glacie',
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
      name: 'Daocheng Yading: The Last Shangri-La',
      item: 'https://beforechina.com/sichuan/chengdu-daocheng-yading',
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
          alt="Daocheng Yading snow mountains and turquoise lake"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Sichuan &middot; 7-8 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Daocheng Yading: The Last Shangri-La
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
            Three sacred snow mountains at 6,000m, turquoise glacier lakes, and Tibetan plateau
            grasslands — Sichuan\'s wildest landscape, 800 km west of Chengdu.
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
                  "An epic journey from Chengdu to 4,700m — Sichuan's wildest and most remote landscape.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Chengdu → Kangding → Litang → Yading',
                description:
                  "800 km west of Chengdu on the G318 highway — China's Route 66 to Tibet.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Three Sacred Peaks, Milk Lake, Five-Color Lake',
                description:
                  'Chenrezig (6,032m), Jampelyang (5,958m), and Chanadorje (5,958m) ring glacier-fed lakes so blue they look Photoshopped.',
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
            Daocheng Yading (稻城亚丁) is what happens when you cross the Tibetan Plateau with
            Yosemite. Three sacred peaks — Chenrezig (6,032m), Jampelyang (5,958m), and Chanadorje
            (5,958m) — ring a valley of glacier-fed lakes so blue they look Photoshopped. The route
            from Chengdu climbs from 500m to 4,700m over the Tibetan Plateau, passing through
            Kangding (the gateway to Tibetan Sichuan), Xinduqiao (the \'photographer\'s paradise\'),
            and Litang (a 4,000m grassland town that\'s the birthplace of the 7th Dalai Lama).
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Chengdu → Kangding (2,560m)',
                content: `Drive 4.5 hours west from Chengdu on the G318 highway. The road climbs through the Erlangshan Tunnel (8.6 km, China\'s longest high-altitude tunnel) and emerges into a completely different world — Tibetan prayer flags, stone houses, and yak herds. Kangding is the historic border town between Han China and Tibet. Walk the old town and visit the Paoma Mountain.`,
                tip: `The G318 is the \'National Highway 318\' — China\'s Route 66 from Shanghai to Tibet. The Chengdu-Kangding section is paved and well-maintained. A private car with driver can be arranged through your hotel or travel agent.`,
              },
              {
                day: 'Day 2: Kangding → Xinduqiao → Litang (4,014m)',
                content: `Cross the 4,298m Zheduo Pass — the first time you break 4,000m. Stop at Xinduqiao, a small Tibetan town famous among Chinese photographers for the golden poplar trees and distant snow peaks. Continue to Litang through the 4,700m Kazila Pass. Litang is one of the world\'s highest towns at 4,014m — the sky is a deeper blue and you\'ll feel the altitude. Visit the Litang Monastery and the grasslands outside town.`,
                tip: `Litang is where you really feel the altitude. Take diamox if you have it. Drink 3-4 litres of water. Don\'t shower on your first night at 4,000m+ (the steam and heat can trigger altitude sickness). The Litang Monastery was founded in 1580 and is the largest Gelugpa monastery in southern Sichuan.`,
              },
              {
                day: 'Day 3: Litang → Daocheng (3,750m)',
                content: `Drive 3 hours south to Daocheng. The road passes through the Haizi Mountain scenic area — a landscape of glacial boulders and 1,145 alpine lakes at 4,500m, looking like a giant scattered marbles across a moonscape. Daocheng town is a pleasant Tibetan county seat with white-walled houses and poplar-lined streets. Visit the White Pagoda Park and the Daocheng Monastery. Spend the night to acclimatise.`,
                tip: `Daocheng has a small airport (DCY) — the world\'s highest civilian airport at 4,411m. Flights from Chengdu (1 hour) land here. If you fly in, spend 2 nights in Daocheng before attempting the Yading hike to acclimatise.`,
              },
              {
                day: 'Day 4: Daocheng → Yading Nature Reserve',
                content: `Drive 1.5 hours to Yading (the reserve entrance is at Riwacun, 2,900m). Take the park shuttle bus 34 km into the reserve to Yading Village (3,900m) or Longlongba. Spend the afternoon on the short hike to Chonggu Monastery (3,900m) and the Pearl Lake viewpoint — your first close view of Chenrezig (6,032m) reflected in a glacial lake. This is a gentle 3 km walk to acclimatise.`,
                tip: `Yading has an entrance ticket and shuttle bus pass (valid for 2 days). The last shuttle into the reserve departs at 5pm — don\'t arrive late or you\'ll be stuck outside. Yading Village has basic guesthouses — electricity is from generators and hot water is limited.`,
              },
              {
                day: 'Day 5: Yading — The Big Hike',
                content: `Take the 7am shuttle from Yading Village to Luorong Pasture (4,180m). The hike begins here. Walk 3 km to the Horse Stop (horses available for hire), then climb 5 km on a steep rocky path to Milk Lake (4,600m) — a startling turquoise lake at the foot of Jampelyang, fed by a hanging glacier. Continue 500m uphill to Five-Color Lake (4,700m) — smaller but with a colour gradient from deep blue to emerald green. The view of all three peaks from here is the money shot. Descend the same way. Total: 10 km, 6-8 hours.`,
                tip: `Start by 7:30am. The weather turns by 2pm — clouds roll in and the peaks disappear. Bring 2L water, high-energy snacks, and rain gear even on sunny days. The last section to Five-Color Lake is a 100m climb on loose rock — poles help. If you\'re struggling with altitude, skip Five-Color Lake — Milk Lake is the better view.`,
              },
              {
                day: 'Day 6: Yading → Daocheng',
                content: `Morning: short walk to Xiannairi Snow Mountain viewpoint or the lower section of the valley. Take the shuttle bus out of the reserve by noon. Drive back to Daocheng. Afternoon: hot springs in Daocheng County — the Rupuchaka Hot Springs are natural sulphur pools and the perfect post-hike reward.`,
                tip: `The Daocheng hot springs are in Rumuchu Village, 5 km from town. The outdoor pools have mountain views. Bring your own towel and swimsuit — rental ones are questionable.`,
              },
              {
                day: 'Day 7: Daocheng → Chengdu',
                content: `Fly from Daocheng Yading Airport (DCY) to Chengdu (1 hour) — the takeoff at 4,411m is an experience in itself. Or drive back via the southern route through Xiangcheng and Shangri-La (2 days). Evening in Chengdu: celebratory hot pot.`,
                tip: `Daocheng Airport flights are frequently delayed or cancelled due to high winds and low visibility. Book a morning flight (best conditions) and have a buffer day. The drive back to Chengdu takes 2 days via the southern route.`,
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
            href: '/sichuan/chengdu-in-depth',
            label: 'Chengdu In Depth',
            description: 'Pandas, hot pot, and tea houses before or after your adventure.',
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Chengdu panda',
            days: '3-4 days',
          },
          {
            href: '/yunnan/kunming-dali-lijiang-shangri-la',
            label: 'Classic Yunnan Route',
            description: 'Another high-altitude adventure in Shangri-La.',
            image: '/images/destinations/yunnan.webp',
            imageAlt: 'Lijiang old town',
            days: '7-8 days',
          },
          {
            href: '/tibet/lhasa-shigatse-everest',
            label: 'Tibet: Lhasa to Everest',
            description: "The ultimate high-altitude journey — Tibet's essential route.",
            image: '/images/destinations/tibet.webp',
            imageAlt: 'Potala Palace',
            days: '8-10 days',
          },
        ]}
      />
    </div>
  );
}
