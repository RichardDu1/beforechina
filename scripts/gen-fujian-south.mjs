import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_DIR = path.resolve(__dirname, '..', 'src', 'app');
const esc = (s) =>
  (s || '').replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/'/g, "\\'");

const HIGHLIGHT_ICONS = {
  clock:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  map: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  star: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
};

function generateRelatedSection(related) {
  if (!related || related.length === 0) return '';
  const items = related
    .map(
      (r) => `{
              href: '${esc(r.href)}',
              label: '${esc(r.label)}',
              description: '${esc(r.description)}',
              image: '${esc(r.image)}',
              imageAlt: '${esc(r.imageAlt)}',
              days: '${esc(r.days)}',
            }`,
    )
    .join(',\n            ');
  return `        <NextSteps
            steps={[
            ${items},
            ]}
          />`;
}

function writePage(dir, slug, route) {
  const fullDir = path.join(APP_DIR, dir, slug);
  fs.mkdirSync(fullDir, { recursive: true });

  const highlightsJsx = route.highlights
    .map((h) => {
      const iconSvg = HIGHLIGHT_ICONS[h.icon] || HIGHLIGHT_ICONS.star;
      return `{
                icon: \`${iconSvg}\`,
                title: '${esc(h.title)}',
                description: '${esc(h.description)}',
              }`;
    })
    .join(',\n              ');

  const stopsJsx = route.stops
    .map(
      (s) => `{
                day: '${esc(s.day)}',
                content: \`${esc(s.content)}\`,
                tip: \`${esc(s.tip)}\`,
              }`,
    )
    .join(',\n              ');

  const relatedSection = generateRelatedSection(route.related);

  const code = `import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '${esc(route.title)} | BeforeChina',
  description: '${esc(route.subtitle)}',
  alternates: { canonical: '/${dir}/${slug}' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/${dir}/${slug}',
    title: '${esc(route.title)} | BeforeChina',
    description: '${esc(route.subtitle)}',
    images: [{ url: '${esc(route.heroImage)}', width: 1200, height: 630, alt: '${esc(route.heroImageAlt)}' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '${esc(route.title)} | BeforeChina',
    description: '${esc(route.subtitle)}',
    images: ['${esc(route.heroImage)}'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '${esc(route.faqQ)}',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '${esc(route.faqA)}',
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
    { '@type': 'ListItem', position: 2, name: '${esc(route.title)}', item: 'https://beforechina.com/${dir}/${slug}' },
  ],
};

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      {/* Full-bleed Hero Image */}
      <section style={{ position: 'relative', width: '100%', height: '60vh', minHeight: '400px', overflow: 'hidden' }}>
        <img
          src="${esc(route.heroImage)}"
          alt="${esc(route.heroImageAlt)}"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}>
          <Kicker>${esc(route.kicker)} &middot; ${esc(route.duration)}</Kicker>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 500, marginBottom: '20px', lineHeight: 1.1 }}>
            ${esc(route.title)}
          </h1>
          <p style={{ fontFamily: 'var(--font-quote)', fontSize: 'clamp(16px, 2.5vw, 20px)', color: 'var(--text-secondary)', lineHeight: 1.5, maxWidth: '600px', margin: '0 auto' }}>
            ${esc(route.subtitle)}
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
              ${highlightsJsx},
            ].map((h) => (
              <div key={h.title} style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--primary-color)', marginBottom: '12px', opacity: 0.85 }}>
                  <span dangerouslySetInnerHTML={{ __html: h.icon }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
                  {h.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.5, maxWidth: '280px', margin: '0 auto' }}>
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-by-Day Narrative */}
      <section style={{ padding: 'var(--section-gap-sm) 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3.5vw, 34px)', fontWeight: 500, marginBottom: '40px', textAlign: 'center' }}>
            The Journey
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.8, marginBottom: '48px' }}>
            ${esc(route.overview)}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              ${stopsJsx},
            ].map((stop, i) => (
              <div
                key={stop.day}
                style={{
                  padding: '40px 0',
                  borderBottom: i < ${route.stops.length - 1} ? '1px solid var(--border-color)' : 'none',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 500, marginBottom: '12px' }}>
                  {stop.day}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.8, marginBottom: '16px' }}>
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
          <p style={{ fontFamily: 'var(--font-quote)', fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
            This is a suggested itinerary. Every journey we design is tailored to your interests, pace, and budget.
          </p>
        </div>
      </section>

      {/* Enquiry Form */}
      <EnquiryForm />

      {/* Related Journeys */}
      ${relatedSection}
    </div>
  );
}
`;

  fs.writeFileSync(path.join(fullDir, 'page.tsx'), code, 'utf-8');
}

// ====== FUJIAN + SOUTH CHINA ======

const routes = [
  // --- FUJIAN ---
  {
    dir: 'fujian',
    slug: 'xiamen-tulou-quanzhou',
    heroImage: '/images/destinations/fujian.webp',
    heroImageAlt: 'Fujian Tulou circular earthen roundhouses',
    highlights: [
      {
        icon: 'clock',
        title: '5–6 Days',
        description:
          "The perfect pace for Fujian's three UNESCO sites — enough time to go deep without feeling rushed.",
      },
      {
        icon: 'map',
        title: 'Xiamen → Gulangyu → Nanjing Tulou → Quanzhou → Xiamen',
        description:
          'Connected by high-speed train and bus. Xiamen has an international airport with flights across Asia.',
      },
      {
        icon: 'star',
        title: 'Gulangyu Island, Fujian Tulou, Kaiyuan Temple',
        description:
          "A car-free colonial island, extraordinary earthen roundhouses, and the Maritime Silk Road's start.",
      },
    ],
    experienceTypes: ['culture', 'culinary'],
    metaTitle: 'Xiamen-Tulou-Quanzhou (5-6 Days) | Fujian Travel Guide',
    metaDesc:
      "Xiamen's Gulangyu Island, the Hakka Tulou (earthen roundhouses), and Quanzhou — the starting point of the Maritime Silk Road and China's newest UNESCO city.",
    kicker: 'Fujian',
    title: "Xiamen, Tulou & Quanzhou: Fujian's Maritime Silk Road",
    subtitle:
      "A car-free island of colonial villas, the Hakka people's extraordinary earthen roundhouses, and Quanzhou — the port Marco Polo called 'the Alexandria of the East.'",
    duration: '5-6 days',
    route: 'Xiamen → Gulangyu → Nanjing Tulou → Quanzhou → Xiamen',
    overview:
      "Fujian province faces Taiwan across the strait and has always been China's maritime frontier. This route connects three of its UNESCO sites: Gulangyu Island, a car-free island of colonial villas, gardens, and piano museums; the Fujian Tulou — enormous circular earthen buildings that housed entire Hakka clans for centuries; and Quanzhou, the starting point of the Maritime Silk Road, added to the UNESCO list in 2021 as 'Quanzhou: Emporium of the World in Song-Yuan China.'",
    faqQ: 'What are the Fujian Tulou and are they worth the trip?',
    faqA: 'The Tulou (土楼) are large circular earthen buildings, 3-5 storeys high, built by the Hakka people between the 12th and 20th centuries. Each tulou housed an entire clan — up to 800 people — in rooms arranged around a central courtyard. They are UNESCO World Heritage and genuinely unlike anything else in the world. The most famous cluster is at Nanjing (南靖), 3 hours from Xiamen. Yes, they are worth the trip.',
    stops: [
      {
        day: 'Day 1: Xiamen',
        content:
          "Fly into Xiamen Gaoqi Airport (XMN). Xiamen (厦门, 'Amoy' in the old colonial name) is a pleasant coastal city that was one of the first treaty ports opened to foreign trade in 1842. Afternoon: Zhongshan Road (中山路) — a pedestrian shopping street with colonial arcade architecture. Visit Nanputuo Temple (南普陀寺, free) — a Tang dynasty Buddhist temple at the foot of Wulao Mountain. Evening: seafood dinner on Huandao Road.",
        tip: "Xiamen is one of China's most liveable cities — clean air, good food, and a relaxed pace. The city is built on an island connected to the mainland by bridges and a BRT (Bus Rapid Transit) system. The BRT is the easiest way to get around — it is an elevated bus-only road, effectively an above-ground metro.",
      },
      {
        day: 'Day 2: Gulangyu Island',
        content:
          'Take the 10-minute ferry from Xiamen to Gulangyu Island (鼓浪屿, ¥35 round trip). Gulangyu is a car-free island of colonial villas, tropical gardens, and narrow lanes. It was a foreign concession from 1903-1945, and the architecture reflects this: British consulates, Japanese hospitals, Spanish cathedrals. Visit Shuzhuang Garden (菽庄花园, ¥30) — a seaside garden with a piano museum housing 100 antique pianos. Climb Sunlight Rock (日光岩, ¥50) for the island panorama. Evening: ferry back to Xiamen.',
        tip: 'Gulangyu ferry tickets sell out in summer and on weekends. Book on the official WeChat mini-program (厦门轮渡). The ferry from Dongdu Jetty (for tourists) costs ¥35. The ferry from Lundu Jetty (for locals) costs ¥8 but tourists cannot use it. The island has no cars, no bikes — you will walk everywhere. Wear comfortable shoes.',
      },
      {
        day: 'Day 3: Xiamen → Nanjing Tulou',
        content:
          "Take a 3-hour bus from Xiamen to Nanjing Tulou cluster (¥45). The Nanjing Tulou are the most scenic group. Visit Tianluokeng Tulou Cluster (田螺坑, ¥100 combined ticket) — five tulou arranged in a pattern locals call 'four dishes and a soup' (four round buildings around one square). Then Yuchang Lou (裕昌楼) — a 700-year-old tulou whose pillars lean at 15° (it is called the 'Leaning Tower of Pisa of Fujian'). Finish at Taxia Village (塔下村) — a Hakka village along a stream with a unique stone flagpole forest honouring successful scholars. Stay overnight in a tulou guesthouse.",
        tip: 'Stay overnight in a tulou — several have been converted into guesthouses (¥150-300/night). The rooms are simple (shared bathrooms, thin walls) but the experience of waking up inside a 500-year-old earthen fortress is unforgettable. The Hakka hosts will cook dinner for you — home-style Hakka food: salt-baked chicken, stuffed tofu, and yam noodles.',
      },
      {
        day: 'Day 4: Tulou → Xiamen → Quanzhou',
        content:
          "Morning: visit Hekeng Tulou Cluster (河坑, quieter, less touristy) or Yunshuiyao Ancient Village (云水谣, a riverside village with a thousand-year-old banyan tree used in the film 'The Knot'). Afternoon: bus back to Xiamen (3 hrs), then 30-minute high-speed train to Quanzhou (¥25). Check into hotel. Evening: walk Quanzhou's old town — the Tumen Street area with its mosque, temple, and church within walking distance of each other.",
        tip: 'Quanzhou is inexpensive by Fujian standards. Hotels near the old town run ¥150-300/night. The city was recently discovered by Chinese tourists after its 2021 UNESCO listing but still sees very few Western visitors.',
      },
      {
        day: 'Day 5: Quanzhou',
        content:
          "Quanzhou was the starting point of the Maritime Silk Road and, during the Song-Yuan period (10th-14th centuries), one of the world's largest ports. Start at Kaiyuan Temple (开元寺, free) — a Tang dynasty Buddhist temple with twin stone pagodas that have survived since the 13th century. Behind the main hall, two stone pillars are carved with Hindu deities — a legacy of Tamil traders who lived here 700 years ago. Visit the Qingjing Mosque (清净寺, ¥3) — China's oldest surviving mosque, built in 1009 AD. Lunch: Quanzhou oyster omelette (海蛎煎) and 'vermicelli paste' (面线糊) — rice noodles in a thick seafood broth. Afternoon: Maritime Museum (free) and the ancient Maritime Silk Road ship excavated from Quanzhou Bay. Evening: train back to Xiamen (30 min, ¥25).",
        tip: "Quanzhou's religious diversity in the Song-Yuan period was remarkable: Buddhist temples, Hindu shrines, a mosque (1009 AD), a Manichaean temple (the only surviving Manichaean statue in the world is near Quanzhou), a Daoist temple, and a Catholic cathedral. The Kaiyuan Temple's Hindu pillars are unique in China — Tamil merchants from the Chola dynasty donated them in the 13th century.",
      },
      {
        day: 'Day 6: Xiamen → Fly Out',
        content:
          'If your flight is in the evening: visit the Xiamen Botanical Garden (¥40) or cycle the Huandao Road coastal path (rental bikes ¥20/hr). Buy oolong tea (Fujian is the home of Tieguanyin and Dahongpao) and dried seafood as souvenirs.',
        tip: 'Fujian tea: Tieguanyin (铁观音, Iron Goddess of Mercy, a floral oolong from Anxi, ¥100-500/500g) and Dahongpao (大红袍, Big Red Robe, a legendary rock oolong from Wuyi Mountain, ¥200-2,000/500g). Buy at a tea market, not a tourist shop — the Xiamen Tea Market (厦门茶叶市场) is wholesale.',
      },
    ],
    related: [
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
    ],
  },
  {
    dir: 'fujian',
    slug: 'wuyishan',
    heroImage: '/images/destinations/fujian.webp',
    heroImageAlt: 'Wuyishan Nine-Bend River and Danxia cliffs',
    highlights: [
      {
        icon: 'clock',
        title: '3–4 Days',
        description:
          'The perfect nature-focused side trip — bamboo rafts, tea trails, and Danxia peaks.',
      },
      {
        icon: 'map',
        title: 'Xiamen → Wuyishan → Xiamen (or fly out)',
        description:
          '3.5-hour high-speed train from Xiamen. Wuyishan also has a small airport with connections to Shanghai and Beijing.',
      },
      {
        icon: 'star',
        title: 'Nine-Bend River, Tianyou Peak, Dahongpao Tea',
        description:
          'Bamboo raft through a red-cliff canyon, climb 848 steps for the iconic panorama, and taste legendary rock oolong.',
      },
    ],
    experienceTypes: ['culture', 'photography'],
    metaTitle: 'Wuyishan (3-4 Days) | Fujian Tea Mountains & Danxia Scenery',
    metaDesc:
      "Wuyishan's Nine-Bend River, Danxia rock formations, and the birthplace of Dahongpao rock oolong tea — 3-4 days in Fujian's UNESCO mountain wilderness.",
    kicker: 'Fujian',
    title: 'Wuyishan: Tea Mountains & the Nine-Bend River',
    subtitle:
      "A UNESCO landscape of Danxia rock formations, primeval forests, a river that meanders through a canyon in 9 perfect bends, and the birthplace of Dahongpao — China's most legendary tea.",
    duration: '3-4 days',
    route: 'Xiamen → Wuyishan → Xiamen (or fly out)',
    overview:
      'Wuyishan (武夷山) in northern Fujian is a UNESCO World Heritage site for both nature and culture — one of only 41 such sites in the world. The landscape is classic Danxia: red sandstone cliffs, clear rivers, deep gorges, and ancient forests. The Nine-Bend River (九曲溪) meanders through the canyon in 9 distinct bends, each prettier than the last. And the tea: Wuyishan is the birthplace of Dahongpao (大红袍, Big Red Robe), a rock oolong tea that is among the most expensive in the world. The original mother bushes on a cliff face are 360 years old and insured for ¥100 million.',
    faqQ: "Is Wuyishan worth visiting if I don't drink tea?",
    faqA: "Yes — the scenery alone justifies the trip. The Nine-Bend River bamboo raft (1.5 hours through a canyon of red cliffs and hanging coffins) is one of China's best river experiences. The hiking trails (Tianyou Peak, Tiger Roaring Rock, Water Curtain Cave) are well-maintained and the views are spectacular. The tea culture is an added layer, not the only reason to go.",
    stops: [
      {
        day: 'Day 1: Xiamen → Wuyishan',
        content:
          "Take the 3.5-hour high-speed train from Xiamen North to Wuyishan North (¥230). Check into your accommodation near the scenic area entrance. Afternoon: Wuyishan Tea Museum (free) for an introduction to Dahongpao and the region's tea culture. Walk the old town of Wuyishan City and try the local speciality — smoked goose (武夷熏鹅).",
        tip: 'Wuyishan scenic area entrance: ¥140 (1-day), ¥150 (2-day), ¥160 (3-day) plus ¥85 for the shuttle bus. The 3-day pass is the best value. The bamboo raft (¥130) must be booked separately and sells out — arrange through your hotel or the official website.',
      },
      {
        day: 'Day 2: Nine-Bend River & Tianyou Peak',
        content:
          'Morning: Nine-Bend River bamboo raft (九曲溪竹筏, ¥130, 1.5 hrs) — the essential Wuyishan experience. The raft (6 people + a boatman who narrates the scenery in Chinese) floats through the canyon from Bend 9 to Bend 1. You pass under red sandstone cliffs, past hanging coffins wedged into rock crevices 3,000 years ago (nobody knows how they got there), and through rapids that splash the raft. Afternoon: climb Tianyou Peak (天游峰) — the highest point in the scenic area (408m, 848 steps). The panoramic view of the Nine-Bend River snaking through the canyon is the iconic Wuyishan photo.',
        tip: "The bamboo raft boatmen tell jokes and point out rock formations named after animals and legends — all in Chinese. Even if you don't understand, the scenery is the point. The hanging coffins (船棺) in the cliffs have been carbon-dated to 3,600 years old. Tianyou Peak is steep (848 steps) — go in the morning when it is cooler. The view from the top is worth every step.",
      },
      {
        day: 'Day 3: Dahongpao Tea Trail',
        content:
          "Morning: walk the Dahongpao Tea Trail — a stone path through the canyon past tea plantations clinging to rock faces. The trail leads to the original Dahongpao mother bushes (大红袍母树) — 6 tea bushes growing from a crack in a cliff face, 360 years old. From here, hike the Rock Tea Trail (岩骨花香漫游道) through the tea-growing valley to the Water Curtain Cave (水帘洞) — a waterfall that cascades over a 100m cliff into a pool. Afternoon: tea tasting at a local tea farmer's house. Evening: soak in a Wuyishan hot spring.",
        tip: "The original Dahongpao mother bushes are tiny — don't expect a grand sight. Their significance is cultural: all Dahongpao tea in the world is descended from these 6 bushes. The tea is no longer harvested from the mother bushes (the last harvest was in 2005 and sold for ¥200,000). What you buy as 'Dahongpao' is from their cuttings, grown elsewhere in Wuyishan.",
      },
      {
        day: 'Day 4: Wuyishan → Depart',
        content:
          'Morning: visit Tiger Roaring Rock (虎啸岩) — a trail through a narrow rock fissure and up to a viewpoint over the tea valley. Alternative: hike to the Wuyi Palace (武夷宫), a Song dynasty Daoist temple at the mouth of the Nine-Bend River. Afternoon: train back to Xiamen (3.5 hrs, ¥230) or fly out from Wuyishan Airport (WUS) with connecting flights via Xiamen or Shanghai.',
        tip: "Wuyishan Airport (WUS) has limited flights — mostly to Xiamen, Shanghai, and Beijing. If your schedule doesn't match, take the train back to Xiamen and fly from XMN. The train station is 30 minutes from the scenic area by bus.",
      },
    ],
    related: [
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
    ],
  },

  // --- SOUTH CHINA ---
  {
    dir: 'south-china',
    slug: 'hong-kong-macau',
    heroImage: '/images/destinations/south-china.webp',
    heroImageAlt: 'Hong Kong Victoria Harbour skyline',
    highlights: [
      {
        icon: 'clock',
        title: '4–5 Days',
        description:
          "The perfect pace for two of China's most distinctive cities — dim sum, hiking, and Portuguese egg tarts.",
      },
      {
        icon: 'map',
        title: 'Hong Kong → Macau → Hong Kong',
        description:
          'Connected by a 1-hour TurboJET ferry every 15-30 minutes. Hong Kong has a world-class international airport.',
      },
      {
        icon: 'star',
        title: "Victoria Peak, Star Ferry, Ruins of St. Paul's",
        description:
          "The world's most dramatic skyline, a 130-year-old ferry, and a 17th-century Jesuit facade.",
      },
    ],
    experienceTypes: ['culture', 'culinary'],
    metaTitle: 'Hong Kong & Macau (4-5 Days) | Two Special Administrative Regions',
    metaDesc:
      "Hong Kong's skyline, dim sum, and hiking trails plus Macau's Portuguese-Chinese fusion — 4-5 days in two of China's most unique cities.",
    kicker: 'South China',
    title: 'Hong Kong & Macau: Two Cities, Two Worlds',
    subtitle:
      "Hong Kong's Victoria Harbour skyline and dim sum temples, plus Macau's Portuguese tiles, egg tarts, and casinos — two former European colonies, now China's most distinctive cities.",
    duration: '4-5 days',
    route: 'Hong Kong → Macau → Hong Kong',
    overview:
      "Hong Kong and Macau are China but not quite China — they are Special Administrative Regions with their own currencies, legal systems, and border controls. Hong Kong needs no introduction: the most dramatic skyline in the world, the best dim sum on earth, and surprisingly good hiking. Macau is the former Portuguese enclave where pastel-coloured colonial buildings sit next to the world's largest casinos, and where the food is a 400-year-old fusion of Portuguese and Cantonese. They are 1 hour apart by ferry, making a combined trip natural.",
    faqQ: 'Do I need a visa for Hong Kong and Macau?',
    faqA: "Hong Kong and Macau have separate immigration policies from mainland China. Most Western passports get visa-free entry: 90 days (Hong Kong), 30 days (Macau). If you are entering mainland China as well, check if you qualify for the 144-hour transit visa-free policy. Hong Kong and Macau count as 'third regions' for the transit policy — you can enter China via Hong Kong and exit to another country within 144 hours.",
    stops: [
      {
        day: 'Day 1: Hong Kong Island',
        content:
          "Start at Victoria Peak (太平山) — take the Peak Tram (¥45 one way, est. 1888) to the top for the classic Hong Kong skyline view. Walk the Peak Circle Walk (3.5 km, 1 hour) for 360° views. Descend to Central and walk the Mid-Levels Escalators — the world's longest outdoor covered escalator system (800m), past bars, galleries, and noodle shops. Lunch: dim sum at Tim Ho Wan (添好运, the world's cheapest Michelin-starred restaurant, ¥50/person). Afternoon: Man Mo Temple (文武庙, free), dedicated to the gods of literature and war, with giant incense coils hanging from the ceiling. Evening: Star Ferry across Victoria Harbour (¥3, 10 min, running since 1888) to Tsim Sha Tsui. Watch the Symphony of Lights (8pm) from the TST waterfront.",
        tip: 'The Peak Tram queue can be 1-2 hours in peak times. Take the bus (Bus 15 from Exchange Square, ¥10, 30 min) instead — it winds up the mountain through the forest and drops you at the same place. The Star Ferry is ¥3 on the upper deck, ¥2.50 on the lower deck. Pay with Octopus card or coins. Do the crossing at sunset.',
      },
      {
        day: 'Day 2: Kowloon & New Territories',
        content:
          "Morning: Kowloon — visit the Wong Tai Sin Temple (黄大仙祠, free), where locals shake fortune sticks to predict their future. Then the Chi Lin Nunnery (志莲净苑, free) — a Tang dynasty-style Buddhist temple complex with lotus ponds and immaculate gardens, flanked by a modern skyscraper (startling contrast). Lunch: wonton noodle soup at Mak's Noodle (麦奀云吞面, ¥40). Afternoon: hike the Dragon's Back (龙脊, 2-3 hours) — Hong Kong's most famous trail along a ridge with views of beaches, islands, and the South China Sea. Evening: Temple Street Night Market (庙街夜市) for fortune tellers, street opera, and claypot rice.",
        tip: "Hong Kong has world-class hiking. The Dragon's Back is a 2-3 hour trail rated moderate, with ocean views the whole way. It ends at Big Wave Bay beach — bring a swimsuit. The trailhead is a 15-minute bus ride from Shau Kei Wan MTR station. Hong Kong is 40% country park — you can go from skyscraper to rainforest in 30 minutes.",
      },
      {
        day: 'Day 3: Hong Kong → Macau',
        content:
          "Morning: take the 1-hour TurboJET ferry from Hong Kong Macau Ferry Terminal (Sheung Wan) to Macau (¥160). Macau was a Portuguese colony from 1557-1999. Start at Senado Square (议事亭前地) — a wave-patterned cobblestone plaza surrounded by pastel-coloured colonial buildings. Walk to the Ruins of St. Paul's (大三巴牌坊, free) — the 17th-century facade of a Jesuit church that burned down in 1835, now Macau's symbol. Visit the Macau Museum (¥15) inside the Monte Fort for the city's history. Lunch: Portuguese egg tart (葡式蛋挞) at Lord Stow's Bakery (¥10 each) — the flaky, caramelised version that is Macau's most famous food. Afternoon: Taipa Village — a quieter area of pastel houses, narrow lanes, and the Taipa Houses-Museum (¥5). Evening: casino walk on the Cotai Strip (the Venetian, the Parisian — Macau's casinos are 3x Las Vegas's revenue).",
        tip: "Macau's Portuguese egg tarts were invented by Andrew Stow, an Englishman who opened a bakery in Coloane in 1989. The original Lord Stow's is in Coloane Village (a 20-minute bus from the city centre). The tart is slightly burnt on top (caramelised) with a flaky pastry — different from the Cantonese egg tart's smooth top and shortcrust pastry. ¥10 each, eat 3-4 minimum.",
      },
      {
        day: 'Day 4: Macau → Hong Kong → Depart',
        content:
          "Morning: A-Ma Temple (妈阁庙, free) — Macau's oldest temple (1488), dedicated to the sea goddess Mazu (Macau's name comes from 'A-Ma Gau' — 'Bay of A-Ma'). Visit the Macau Tower (¥135) for the 360° view from 338m, or walk the Coloane Village — Macau's southernmost island with a fishing village atmosphere, pastel houses, and the original Lord Stow's Bakery. Afternoon: ferry back to Hong Kong (1 hr, ¥160). Fly out from Hong Kong International Airport (HKG).",
        tip: "Macau's casinos run free shuttle buses ('casino express') between the ferry terminal, border gate, and airport. You don't need to gamble to use them. The Venetian-Taipa route is the most useful. The buses are free, comfortable, and more frequent than public buses.",
      },
    ],
    related: [
      {
        href: '/south-china/sanya-hainan',
        label: 'Sanya & Hainan',
        description: "Add China's tropical island for beach time after the urban energy.",
        image: '/images/destinations/south-china.webp',
        imageAlt: 'Sanya tropical beach',
        days: '4–5 days',
      },
      {
        href: '/golden-triangle/beijing-xian-shanghai',
        label: 'Golden Triangle',
        description: "Continue to Beijing, Xi'an, and Shanghai for the classic first-timer route.",
        image: '/images/destinations/golden-triangle.webp',
        imageAlt: 'The Forbidden City in Beijing',
        days: '8–10 days',
      },
      {
        href: '/south-china/guangzhou-shenzhen',
        label: 'Guangzhou & Shenzhen',
        description: "Add Cantonese food and China's Silicon Valley, 30 minutes from each other.",
        image: '/images/destinations/south-china.webp',
        imageAlt: 'Guangzhou Canton Tower skyline',
        days: '4–5 days',
      },
    ],
  },
  {
    dir: 'south-china',
    slug: 'guangzhou-shenzhen',
    heroImage: '/images/destinations/south-china.webp',
    heroImageAlt: 'Guangzhou Canton Tower skyline',
    highlights: [
      {
        icon: 'clock',
        title: '4–5 Days',
        description:
          "Two sides of the Pearl River Delta — 2,200 years of Cantonese culture, then China's tech future in 40 years.",
      },
      {
        icon: 'map',
        title: 'Guangzhou → Shenzhen → Hong Kong (optional)',
        description:
          'Connected by a 30-minute high-speed train. The entire Greater Bay Area is within 30 minutes by rail.',
      },
      {
        icon: 'star',
        title: 'Chen Clan Academy, Dim Sum, Huaqiangbei',
        description:
          "The finest Lingnan architecture, the birthplace of dim sum, and the world's largest electronics market.",
      },
    ],
    experienceTypes: ['culture', 'culinary'],
    metaTitle: 'Guangzhou-Shenzhen (4-5 Days) | Pearl River Delta Tech & Cantonese Culture',
    metaDesc:
      "Guangzhou's Cantonese food scene, Chen Clan Academy, and Shenzhen's futuristic skyline — 4-5 days in the heart of the Greater Bay Area.",
    kicker: 'South China',
    title: "Guangzhou & Shenzhen: Cantonese Food & China's Silicon Valley",
    subtitle:
      "Guangzhou's 2,200-year-old temples and the birthplace of Cantonese cuisine, paired with Shenzhen — the fishing village that became China's richest city in 40 years.",
    duration: '4-5 days',
    route: 'Guangzhou → Shenzhen → Hong Kong (optional)',
    overview:
      "Guangzhou (Cantonese name: 'Canton') is the capital of Cantonese culture and cuisine — a 2,200-year-old trading port where dim sum was invented and where the food is so central to local identity that Cantonese people say 'we eat everything with four legs except the table.' Shenzhen, 30 minutes away by train, is Guangzhou's opposite: a fishing village of 30,000 people in 1980, now a metropolis of 17 million and the headquarters of Tencent, Huawei, and DJI. Together they represent southern China's past and future.",
    faqQ: 'Is Shenzhen worth visiting as a tourist?',
    faqA: "Shenzhen is not a traditional tourist city — it has no ancient temples or UNESCO sites. But it is fascinating as a vision of China's future: futuristic architecture, the world's largest electronics market (Huaqiangbei), and a thriving maker/culture scene. It is also the gateway to Hong Kong (15 min by high-speed train to Kowloon). Visit Shenzhen for a day or two as part of a Guangzhou-Hong Kong loop.",
    stops: [
      {
        day: 'Day 1: Guangzhou',
        content:
          'Fly into Guangzhou Baiyun Airport (CAN). Afternoon: Chen Clan Academy (陈家祠, ¥10) — an 1894 ancestral hall that is the finest surviving example of Lingnan architecture, with intricate ceramic friezes, wood carvings, and ivory sculptures on every surface. Walk Shamian Island (沙面) — a sandbank island that was the British-French concession, now a quiet neighbourhood of colonial buildings, banyan trees, and cafes. Evening: dinner at a traditional Cantonese restaurant — roast goose (烧鹅), white-cut chicken (白切鸡), and claypot rice (煲仔饭).',
        tip: "The Chen Clan Academy (¥10) is one of Guangzhou's best sights and absurdly cheap. Every roof ridge, beam, and door panel is decorated with carvings and sculptures. It now houses the Guangdong Folk Art Museum. Go in the morning for the best light on the ceramic friezes.",
      },
      {
        day: 'Day 2: Guangzhou — Food & Culture',
        content:
          'Morning: dim sum at Panxi Restaurant (泮溪酒家, est. 1947) or Dian Dou De (点都德, a popular chain with consistent quality). Cantonese dim sum is the original and best — har gow (shrimp dumplings), siu mai (pork dumplings), char siu bao (BBQ pork buns), and egg tarts. Afternoon: visit the Mausoleum of the Nanyue King (南越王墓, ¥12) — a 2,000-year-old tomb of a regional king from the Nanyue kingdom (204-111 BC), with a jade burial suit sewn with silk thread. Then Guangdong Museum (free, book ahead). Evening: Pearl River night cruise (¥55-95) for the Canton Tower light show.',
        tip: "Cantonese dim sum is traditionally a morning affair (6am-11am), served from trolleys pushed by elderly ladies ('aunties') who call out the dishes. The best dim sum restaurants still do trolley service. The proper way to order: flag down a trolley, point at what you want, and the auntie stamps your card. Tea is essential — oolong, pu-erh, or jasmine.",
      },
      {
        day: 'Day 3: Guangzhou → Shenzhen',
        content:
          "Take the 30-minute high-speed train from Guangzhou South to Shenzhen North (¥75). Shenzhen is a city built in a generation — 17 million people where there were 30,000 in 1980. Visit Huaqiangbei Electronics Market (华强北) — a multi-building district where you can buy every electronic component, gadget, and accessory in existence. It is the world's largest electronics market. If you want a custom phone, drone parts, or an obscure charging cable — this is where it exists. Afternoon: OCT-LOFT Creative Culture Park — a former factory complex turned into galleries, design studios, and cafes. Evening: dinner and drinks in the Shekou (蛇口) area — Shenzhen's expat neighbourhood with international restaurants and bars.",
        tip: 'Huaqiangbei is overwhelming — 10+ buildings, each with 5-7 floors of electronics stalls. The main building is SEG Electronics Market (赛格电子市场). The first 2 floors are consumer electronics (phones, drones, accessories), upper floors are components. Haggle — prices drop 20-30% if you negotiate. Even if you buy nothing, it is one of the most extraordinary market experiences in the world.',
      },
      {
        day: 'Day 4: Shenzhen',
        content:
          "Morning: climb Lianhua Mountain (莲花山, free) — a city park with a giant bronze statue of Deng Xiaoping (the leader who created Shenzhen as China's first Special Economic Zone) and a panoramic view of Shenzhen's skyline. Visit the Shenzhen Museum (free) for the story of how a fishing village became China's richest city. Afternoon: Dafen Oil Painting Village (大芬油画村) — a neighbourhood where thousands of painters produce replica oil paintings. You can commission a custom painting (¥100-500) or buy an off-the-shelf replica of Van Gogh, Monet, or classical Chinese art. Evening: option to continue to Hong Kong (15 min by high-speed train from Shenzhen North, ¥75).",
        tip: "The Deng Xiaoping statue on Lianhua Mountain faces Hong Kong — symbolic. The Shenzhen Museum's 'Reform and Opening Up' exhibition is fascinating propaganda: it tells the Shenzhen story as a triumph of Communist Party policy. Dafen Village produces 60% of the world's replica oil paintings. Artists paint assembly-line style — one does skies, another trees, another faces.",
      },
      {
        day: 'Day 5: Departure or Hong Kong',
        content:
          "Option A: Fly out from Shenzhen Bao'an Airport (SZX) or Guangzhou (CAN). Option B: take the 15-minute high-speed train from Shenzhen North to Hong Kong West Kowloon (¥75) and continue to Hong Kong (see the Hong Kong & Macau route).",
        tip: 'Shenzhen airport (SZX) has good connections to major Chinese cities and international flights to Southeast Asia. The airport express (Line 11) from the city centre takes 30 minutes (¥8). If flying from Guangzhou (CAN), the train from Shenzhen to Guangzhou is 30 minutes (¥75).',
      },
    ],
    related: [
      {
        href: '/south-china/hong-kong-macau',
        label: 'Hong Kong & Macau',
        description: 'Continue to the SARs — 15 minutes from Shenzhen by high-speed train.',
        image: '/images/destinations/south-china.webp',
        imageAlt: 'Hong Kong Victoria Harbour skyline',
        days: '4–5 days',
      },
      {
        href: '/guangxi/guilin-yangshuo-lijiang',
        label: 'Guilin & Yangshuo',
        description: '2.5 hours by train from Guangzhou to the karst peaks and Li River.',
        image: '/images/destinations/guangxi.webp',
        imageAlt: 'Guilin karst peaks along the Li River',
        days: '4–5 days',
      },
      {
        href: '/golden-triangle/beijing-xian-shanghai',
        label: 'Golden Triangle',
        description: "Head north to Beijing, Xi'an, and Shanghai for the classic route.",
        image: '/images/destinations/golden-triangle.webp',
        imageAlt: 'The Forbidden City in Beijing',
        days: '8–10 days',
      },
    ],
  },
];

for (const r of routes) {
  writePage(r.dir, r.slug, r);
  console.log(`✅ ${r.dir}/${r.slug}`);
}
console.log(`\nDone. ${routes.length} Fujian + South China pages.`);
