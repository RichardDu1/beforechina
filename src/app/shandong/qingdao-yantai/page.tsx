import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Qingdao & Yantai: Beaches, Beer & German Colonial History | BeforeChina',
  description:
    "China's beer capital with German colonial architecture, a coastline of sandy beaches, fresh seafood from the Yellow Sea, and China's oldest wine region.",
  alternates: { canonical: '/shandong/qingdao-yantai' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/shandong/qingdao-yantai',
    title: 'Qingdao & Yantai: Beaches, Beer & German Colonial History | BeforeChina',
    description:
      "China's beer capital with German colonial architecture, a coastline of sandy beaches, fresh seafood from the Yellow Sea, and China's oldest wine region.",
    images: [
      {
        url: '/images/destinations/shandong.webp',
        width: 1200,
        height: 630,
        alt: 'Qingdao German colonial architecture and coastline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qingdao & Yantai: Beaches, Beer & German Colonial History | BeforeChina',
    description:
      "China's beer capital with German colonial architecture, a coastline of sandy beaches, fresh seafood from the Yellow Sea, and China's oldest wine region.",
    images: ['/images/destinations/shandong.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Qingdao worth visiting outside of the beer festival?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Tsingtao International Beer Festival (July-August) is a crowded, commercialised event — fun but not the best time to visit. Qingdao is at its best in May-June and September-October: pleasant weather, empty beaches, and the German architecture is beautiful in the soft light. The beer museum, the old town, and the fresh seafood are year-round attractions.',
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
      name: 'Qingdao & Yantai: Beaches, Beer & German Colonial History',
      item: 'https://beforechina.com/shandong/qingdao-yantai',
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
          src="/images/destinations/shandong.webp"
          alt="Qingdao German colonial architecture and coastline"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Shandong &middot; 4-5 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Qingdao & Yantai: Beaches, Beer & German Colonial History
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
            China\'s beer capital with German colonial architecture, a coastline of sandy beaches,
            fresh seafood from the Yellow Sea, and China\'s oldest wine region.
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
                  "A relaxed coastal route — enough time for Qingdao's old town, Yantai's wine region, and a Penglai day trip.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Qingdao → Yantai → Penglai',
                description:
                  'Connected by 1-hour high-speed trains. Qingdao has direct flights from major Chinese cities and international connections.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Tsingtao Beer Museum, German Quarter, Changyu Winery',
                description:
                  "China's beer capital, 100-year-old German architecture, and the country's oldest wine region.",
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
            Qingdao (青岛) is China\'s most European-feeling coastal city — a legacy of German
            colonial rule from 1898-1914. The German Quarter has Bavarian-style buildings, the
            city\'s most famous export is Tsingtao Beer (founded by German settlers in 1903), and
            the coastline is lined with sandy beaches and rocky headlands. Yantai (烟台), 1 hour
            north by train, is China\'s oldest wine region — Changyu Winery was founded here in 1892
            and the climate and soil are comparable to Bordeaux. This is a relaxed coastal route:
            beer, seafood, beaches, and German architecture.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Arrive Qingdao',
                content: `Fly into Qingdao Jiaodong Airport (TAO). Transfer to the old town. Afternoon: walk the German Quarter around the Zhanqiao Pier (栈桥) — a 440m pier with a Chinese pavilion at the end, Qingdao\'s symbol. Then St. Michael\'s Cathedral (圣弥额尔大教堂, a modest entrance fee) — a German-built Catholic cathedral from 1934, the largest Gothic building in China. Walk through the old town\'s cobbled streets past German colonial buildings now housing cafes, galleries, and seafood restaurants. Evening: fresh Tsingtao beer and seafood on a rooftop terrace in the old town.`,
                tip: `Qingdao\'s old town is compact and walkable — you can see the main sights in an afteroon. The German buildings are concentrated around Zhanqiao Pier and the cathedral. A bottle of Tsingtao beer costs pocket change at local restaurants — the fresh draft version is lighter and better than the exported bottled version.`,
              },
              {
                day: 'Day 2: Qingdao',
                content: `Morning: Tsingtao Beer Museum (青岛啤酒博物馆, a modest entrance fee) — built in the original 1903 brewery, with the old copper brewing kettles, a history of the German and Japanese ownership of the brewery, and a tasting room with unlimited fresh draft beer (the best museum tasting in China). Afternoon: Badaguan (八大关, \'Eight Great Passes\') — a neighbourhood of tree-lined streets and European villas built in the 1920s-30s, named after Chinese military passes. Walk to Huashi Lou (花石楼, a small entrance fee) — a granite castle built by a Russian aristocrat in 1932. Evening: seafood at a local restaurant — Qingdao\'s specialities are clams (蛤蜊), sea cucumber (海参), and mackerel dumplings (鲅鱼饺子).`,
                tip: `The Tsingtao Beer Museum tasting room gives you two glasses of fresh draft beer — one unfiltered (cloudy, yeasty, the best) and one filtered. The unfiltered beer only exists in Qingdao — it has a 24-hour shelf life and cannot be exported. Badaguan is most beautiful in autumn when the plane trees turn gold.`,
              },
              {
                day: 'Day 3: Qingdao → Yantai',
                content: `Take the 1-hour high-speed train from Qingdao North to Yantai. Yantai is a quieter coastal city. Visit Changyu Wine Culture Museum (张裕酒文化博物馆, a modest entrance fee) — China\'s oldest winery (1892), with a labyrinthine underground cellar of 100-year-old oak barrels (the \'underground wine city\'). Wine tasting included. Afternoon: Yantai Mountain (烟台山, free) — a headland park with a lighthouse, former consulate buildings (Yantai was a treaty port), and views over the Yellow Sea. Evening: Yantai seafood — the city is famous for sea urchin, abalone, and prawns from the cold Yellow Sea waters.`,
                tip: `Changyu Winery was founded by Zhang Bishi, a Chinese entrepreneur who brought French vines and Austrian winemakers to Yantai in 1892. The underground cellar (1,976 m²) has 158 oak barrels, 3 of which are the original 100-year-old barrels. The wine is decent but not world-class — the experience is the history and the cellar. Yantai produces 40% of China\'s wine.`,
              },
              {
                day: 'Day 4: Penglai Day Trip',
                content: `Take a 1-hour bus from Yantai to Penglai (蓬莱). Penglai is a coastal town famous in Chinese mythology as the home of the Eight Immortals and the place where mirages appear over the sea. Visit Penglai Pavillion (蓬莱阁, an entrance fee applies) — a Song dynasty (1061) pavillion complex on a cliff above the sea, one of China\'s \'Four Great Towers\'. The view from the pavillion across the Bohai Sea is spectacular — on clear days you can sometimes see a mirage of distant islands. Afternoon: Penglai Polar Ocean World (ticketed) if you want an aquarium, or walk the beach at Golden Beach (金沙滩). Evening: bus back to Yantai, train back to Qingdao.`,
                tip: `Pengai Pavillion is the highlight. The entrance fee covers the pavillion, an ancient ship museum, and the surrounding fortifications — well worth it. The mirage phenomenon (海市蜃楼) occurs occasionally in spring and early summer when warm air sits over the cold sea — it is rare but real. The pavillion has been a tourist attraction for 1,000 years.`,
              },
              {
                day: 'Day 5: Depart Qingdao',
                content: `Fly out from Qingdao. If your flight is in the afteroon: visit Laoshan Mountain (崂山, a modest entrance fee) — a sacred Daoist mountain 30 km east of Qingdao, with temples, waterfalls, and coastal hiking trails. The mountain rises directly from the sea — one of the few places in China where you can hike from the beach to a mountain summit in a few hours. The Qingdao Beer Street (啤酒街) near the museum is a final feast of seafood and draft beer.`,
                tip: `Laoshan is a half-day trip from Qingdao (40 min by bus). The mountain is sacred to Daoism and has a working Daoist temple (Taiqing Palace, a small entrance fee). The coastal hiking trail from Taiqing Palace to Yangkou has views of the Yellow Sea and the mountain\'s granite peaks.`,
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
            href: '/shandong/taishan-qufu',
            label: 'Mount Tai & Qufu',
            description: "Add Confucius's hometown and China's most sacred mountain",
            image: '/images/destinations/shandong.webp',
            imageAlt: 'Mount Tai sunrise from Jade Emperor Peak',
            days: '3-4 days',
          },
          {
            href: '/golden-triangle/beijing-in-depth',
            label: 'Beijing In Depth',
            description: 'Beijing is 3 hours from Qingdao by train',
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '4-5 days',
          },
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: 'Golden Triangle',
            description: "Combine with Beijing, Xi'an and Shanghai",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8-10 days',
          },
        ]}
      />
    </div>
  );
}
