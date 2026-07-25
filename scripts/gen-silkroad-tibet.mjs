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

function writePage(dir, slug, data) {
  const fullDir = path.join(APP_DIR, dir, slug);
  fs.mkdirSync(fullDir, { recursive: true });

  const highlightsJsx = data.highlights
    .map((h) => {
      const iconSvg = HIGHLIGHT_ICONS[h.icon] || HIGHLIGHT_ICONS.star;
      return `{
                icon: \`${iconSvg}\`,
                title: '${esc(h.title)}',
                description: '${esc(h.description)}',
              }`;
    })
    .join(',\n              ');

  const stopsJsx = data.stops
    .map(
      (s) => `{
                day: '${esc(s.day)}',
                content: \`${esc(s.content)}\`,
                tip: \`${esc(s.tip)}\`,
              }`,
    )
    .join(',\n              ');

  const relatedSection = generateRelatedSection(data.related);

  const code = `import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '${esc(data.metaTitle)} | BeforeChina',
  description: '${esc(data.metaDesc)}',
  alternates: { canonical: '/${dir}/${slug}' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/${dir}/${slug}',
    title: '${esc(data.metaTitle)} | BeforeChina',
    description: '${esc(data.metaDesc)}',
    images: [{ url: '${esc(data.heroImage)}', width: 1200, height: 630, alt: '${esc(data.heroImageAlt)}' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '${esc(data.metaTitle)} | BeforeChina',
    description: '${esc(data.metaDesc)}',
    images: ['${esc(data.heroImage)}'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience ${esc(data.title)}?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This journey typically takes ${esc(data.duration)}. ${esc(data.overview.slice(0, 200))}',
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
    { '@type': 'ListItem', position: 2, name: '${esc(data.title)}', item: 'https://beforechina.com/${dir}/${slug}' },
  ],
};

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      {/* Full-bleed Hero Image */}
      <section style={{ position: 'relative', width: '100%', height: '60vh', minHeight: '400px', overflow: 'hidden' }}>
        <img
          src="${esc(data.heroImage)}"
          alt="${esc(data.heroImageAlt)}"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}>
          <Kicker>${esc(data.kicker)} &middot; ${esc(data.duration)}</Kicker>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 500, marginBottom: '20px', lineHeight: 1.1 }}>
            ${esc(data.title)}
          </h1>
          <p style={{ fontFamily: 'var(--font-quote)', fontSize: 'clamp(16px, 2.5vw, 20px)', color: 'var(--text-secondary)', lineHeight: 1.5, maxWidth: '600px', margin: '0 auto' }}>
            ${esc(data.subtitle)}
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
            ${esc(data.overview)}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              ${stopsJsx},
            ].map((stop, i) => (
              <div
                key={stop.day}
                style={{
                  padding: '40px 0',
                  borderBottom: i < ${data.stops.length - 1} ? '1px solid var(--border-color)' : 'none',
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

// ====== SILK ROAD + TIBET ROUTES ======

const routes = [
  // --- SILK ROAD ---
  {
    dir: 'silk-road',
    slug: 'xian-lanzhou-dunhuang',
    metaTitle: 'Xian-Lanzhou-Dunhuang (7-8 Days) | Silk Road Highlights Guide',
    metaDesc:
      "The classic Chinese Silk Road route: Xian's Terracotta Warriors, Lanzhou's Yellow River, Zhangye's rainbow mountains, Jiayuguan's Great Wall fort, and Dunhuang's Mogao Caves.",
    kicker: 'Silk Road',
    title: 'Xian, Lanzhou & Dunhuang: The Classic Silk Road',
    subtitle:
      "From the Terracotta Warriors to the rainbow mountains of Zhangye, Jiayuguan's desert fortress, and Dunhuang's Mogao Caves — the Silk Road's greatest hits.",
    duration: '7-8 days',
    route: 'Xian → Lanzhou → Zhangye → Jiayuguan → Dunhuang',
    heroImage: '/images/destinations/silk-road.webp',
    heroImageAlt: 'Silk Road camel caravan in Dunhuang desert',
    highlights: [
      {
        icon: 'clock',
        title: '7-8 Days',
        description:
          'The classic Silk Road route at a comfortable pace — all the highlights without feeling rushed.',
      },
      {
        icon: 'map',
        title: 'Xian → Lanzhou → Zhangye → Jiayuguan → Dunhuang',
        description:
          "Connected by high-speed trains along the 1,000km Hexi Corridor — China's most historic road.",
      },
      {
        icon: 'star',
        title: 'Terracotta Warriors, Rainbow Mountains, Mogao Caves',
        description:
          "Three of China's most extraordinary sights along the route that changed world history.",
      },
    ],
    experienceTypes: ['culture', 'photography'],
    overview:
      "The Silk Road was not one road but a network of trade routes connecting China to Central Asia, Persia, and the Mediterranean for over 1,500 years. This route follows the Hexi Corridor (河西走廊) — the 1,000km narrow passage between the Tibetan Plateau and the Gobi Desert that was the Silk Road's main artery. You will travel from Xian (the eastern terminus) to Dunhuang (the western gateway), passing through Zhangye's rainbow-coloured mountains, Jiayuguan's Ming dynasty fortress at the Great Wall's western end, and the Mogao Caves — one of the world's greatest repositories of Buddhist art.",
    faqQ: 'What is the best way to travel the Hexi Corridor?',
    faqA: 'High-speed trains now connect Xian-Lanzhou (3 hrs), Lanzhou-Zhangye (3 hrs), and Zhangye-Jiayuguan (1.5 hrs). Jiayuguan to Dunhuang is a 4.5-hour drive (no direct train yet — a high-speed line is under construction). You can also do the entire route by car (1,800 km, 7 days of driving at 3-4 hours/day) for more flexibility, especially between Jiayuguan and Dunhuang.',
    stops: [
      {
        day: 'Day 1: Xian',
        content:
          'Arrive Xian. Afternoon: Xian City Wall and Muslim Quarter — a gentle introduction before the long journey west.',
        tip: "Xian is the eastern terminus of the Silk Road. The city was called Chang'an and was the largest city in the world during the Tang dynasty (618-907 AD), with over 1 million people including large communities of Persian, Arab, and Central Asian merchants.",
      },
      {
        day: 'Day 2: Xian',
        content:
          "Full day: Terracotta Warriors and Huaqing Hot Springs. The warriors are the most tangible connection to the Qin dynasty (221-206 BC) — an army of 8,000 life-sized soldiers buried to guard China's first emperor.",
        tip: 'Book the 8:30am slot at the Terracotta Warriors. The site is 40 km east of Xian — the public bus (¥8) takes 1 hour from Xian Railway Station. Go to Pit 1 first, then Pit 2, then Pit 3. The bronze chariot exhibition hall is the final stop and is often less crowded in the afternoon.',
      },
      {
        day: 'Day 3: Xian → Lanzhou',
        content:
          "Take the 3-hour high-speed train from Xian North to Lanzhou West (¥175). Lanzhou is a long, narrow city squeezed between mountains along the Yellow River. Afternoon: Zhongshan Bridge (中山桥) — a steel bridge built by a German company in 1909, the first permanent bridge across the Yellow River. Walk the riverfront promenade. Visit the White Pagoda Mountain (白塔山) for a panoramic view of the city. Evening: Lanzhou beef noodles (兰州牛肉面) — the city's claim to culinary fame.",
        tip: "Lanzhou beef noodles (兰州牛肉面) is one of China's most famous dishes. The best bowls are served for breakfast — locals queue at 6am. The noodles are hand-pulled to order in 7 different thicknesses. Must-try shops: Mazilu (马子禄, the most famous) or Wumule (吾穆勒, locals' favourite). A bowl costs ¥8-15.",
      },
      {
        day: 'Day 4: Lanzhou → Zhangye',
        content:
          "Take the 3-hour high-speed train from Lanzhou West to Zhangye West (¥150). Zhangye's Danxia Landform (张掖丹霞, ¥75) is a range of rainbow-coloured sandstone mountains — layers of red, orange, yellow, and green mineral deposits that look like a painter's palette. The best light is late afternoon (4-6pm) when the colours are most vivid. The scenic area has shuttle buses between 4 viewing platforms. Stay overnight in Zhangye.",
        tip: 'Zhangye Danxia looks Photoshopped in photos but is genuinely that colourful in person — the colours come from iron oxide (red), limonite (yellow), and chlorite (green) mineral deposits laid down over 24 million years. The best viewing platform is #4 (the highest). Go on a sunny day — the colours are muted in cloud or rain.',
      },
      {
        day: 'Day 5: Zhangye → Jiayuguan',
        content:
          "Take the 1.5-hour high-speed train from Zhangye West to Jiayuguan South (¥80). Jiayuguan (嘉峪关) is the western end of the Ming dynasty Great Wall — a massive fortress built in 1372 at a strategic choke point between the Qilian Mountains and the Gobi Desert. The fortress is remarkably well-preserved: walls 11m high, gates inscribed with 'Jiayuguan' in imperial calligraphy, and watchtowers with views across the desert. Afternoon: Overhanging Great Wall (悬壁长城, ¥20) — a section of wall climbing a 150m ridge north of the fortress. Evening: Jiayuguan barbecue (lamb skewers are the local speciality).",
        tip: 'Jiayuguan fortress is at its most atmospheric in late afternoon when the setting sun turns the walls golden and the desert stretches endlessly beyond. The ticket (¥120) includes the fortress, the Overhanging Wall, and the First Strategic Post (the westernmost point of the Ming Great Wall). The three sites are spread out — you will need a taxi or Didi to reach them all.',
      },
      {
        day: 'Day 6: Jiayuguan → Dunhuang',
        content:
          "Drive 4.5 hours from Jiayuguan to Dunhuang (¥150 by bus, ¥800 by private car). The road crosses the Gobi Desert — one of the most dramatic drives in China. Dunhuang was the Silk Road's western gateway: beyond here, the route split into the northern and southern routes around the Taklamakan Desert. Afternoon: Mingsha Sand Dunes (鸣沙山, ¥120) — massive singing sand dunes right on the edge of the city. Climb the dunes (30-40 minutes up, 5 minutes down running) for sunset over the desert. Crescent Moon Spring (月牙泉), a natural spring in the shape of a crescent moon, sits improbably between the dunes.",
        tip: 'Mingsha Sand Dunes are best at sunrise or sunset — the sand turns gold and the temperature is bearable. The climb is hard work (sand gives way with every step) but the view is worth it. Rent orange shoe covers (¥15) at the entrance — the sand will get everywhere otherwise. Camel rides are ¥100 for 40 minutes.',
      },
      {
        day: 'Day 7: Dunhuang',
        content:
          'Morning: Mogao Caves (莫高窟, ¥238, must book 2-4 weeks ahead) — 492 caves containing 2,000+ painted sculptures and 45,000 m² of murals spanning 1,000 years of Buddhist art (4th-14th centuries). Visits are by guided tour only; you will see 8 caves (the specific caves depend on the day). The highlight is Cave 45 — a Tang dynasty cave with perfectly preserved painted sculptures of the Buddha and bodhisattvas. Afternoon: Dunhuang Museum (free). Evening: Shazhou Night Market for camel kebabs and Dunhuang yellow noodles (黄面).',
        tip: 'Mogao Caves tickets (¥238, A-category) sell out 2-4 weeks in advance in summer. Book on the official WeChat mini-program (莫高窟参观预约网). The A ticket includes a 40-minute IMAX film, 8 caves with a guide, and transport from the Digital Centre. B-category tickets (¥100, 4 caves) are available 1-2 days ahead but sell out too. Plan ahead.',
      },
      {
        day: 'Day 8: Dunhuang → Fly Out',
        content:
          'Fly out from Dunhuang Mogao Airport (DNH). Direct flights to Xian (2.5 hrs), Lanzhou (1.5 hrs), and Beijing (4 hrs). If your flight is in the evening, visit the Western Thousand Buddha Caves (西千佛洞, ¥30) — a smaller, less-visited cave complex 35 km west of Dunhuang with 16 surviving caves.',
        tip: 'Dunhuang airport is small and 13 km east of the city. The airport bus (¥10) takes 20 minutes from the city centre. There is also a high-speed train station (Dunhuang) with trains to Lanzhou (8 hrs, overnight option).',
      },
    ],
    practical: [
      {
        title: 'Getting There',
        body: 'Xian-Lanzhou: train (3 hrs, ¥175). Lanzhou-Zhangye: train (3 hrs, ¥150). Zhangye-Jiayuguan: train (1.5 hrs, ¥80). Jiayuguan-Dunhuang: drive (4.5 hrs, bus ¥150 or private car ¥800). Fly out from Dunhuang (DNH).',
      },
      {
        title: 'Where to Stay',
        body: 'Xian: inside the city wall ($40-100/night). Lanzhou: near Zhongshan Bridge ($30-70/night). Zhangye: near the train station or city centre ($25-60/night). Jiayuguan: near the fortress ($30-70/night). Dunhuang: Shazhou Night Market area ($30-80/night).',
      },
      {
        title: 'When to Go',
        body: 'May-June and September-October. Summer (July-August) is peak season — hot (35-40°C in the desert) and crowded. The Mogao Caves are climate-controlled. May and September offer the best balance of weather and crowds. Avoid the May Day (1-5 May) and National Day (1-7 Oct) holidays.',
      },
      {
        title: 'What to Pack',
        body: 'Sunscreen, sunglasses, a wide-brim hat, and lip balm — the desert sun is intense year-round. A buff or scarf for sandstorms (common in spring). Layers — desert temperatures swing 20°C between day and night. Wet wipes — sand gets everywhere.',
      },
    ],
    nextSteps: [
      {
        href: '/xinjiang/silk-road',
        label: 'Xinjiang Silk Road',
        description: 'Continue the Silk Road west into Xinjiang',
      },
      {
        href: '/silk-road/hexi-corridor-deep',
        label: 'Hexi Corridor deep dive',
        description: 'A slower 10-day version with more stops',
      },
    ],
    related: [
      {
        href: '/silk-road/hexi-corridor-deep',
        label: 'Hexi Corridor Deep Dive',
        description: 'A slower 10-12 day version with more stops along the corridor.',
        image: '/images/destinations/silk-road.webp',
        imageAlt: 'Hexi Corridor rainbow mountains',
        days: '10-12 days',
      },
      {
        href: '/golden-triangle/beijing-xian-shanghai',
        label: "Beijing, Xi'an & Shanghai",
        description: "Combine Xi'an with Beijing and Shanghai for the full Golden Triangle.",
        image: '/images/destinations/golden-triangle.webp',
        imageAlt: 'The Forbidden City in Beijing',
        days: '8-10 days',
      },
      {
        href: '/sichuan/chengdu-jiuzhaigou-huanglong',
        label: 'Chengdu & Jiuzhaigou',
        description: 'Head south to Sichuan for pandas and turquoise lakes.',
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Jiuzhaigou turquoise lakes',
        days: '6-8 days',
      },
    ],
  },
  {
    dir: 'silk-road',
    slug: 'hexi-corridor-deep',
    metaTitle: 'Hexi Corridor Deep Dive (10-12 Days) | Complete Silk Road in Gansu',
    metaDesc:
      'A comprehensive Hexi Corridor route: Lanzhou to Dunhuang with all the stops — Bingling Temple, Wuwei, Zhangye, Jiayuguan, and the Mogao Caves at a slower pace.',
    kicker: 'Silk Road',
    title: 'Hexi Corridor Deep Dive: The Complete Gansu Silk Road',
    subtitle:
      'Every stop along the 1,000km Hexi Corridor — from Buddhist cave temples to rainbow mountains, desert fortresses, and the Mogao Caves — at a pace that lets you absorb it all.',
    duration: '10-12 days',
    route: 'Lanzhou → Wuwei → Zhangye → Jiayuguan → Dunhuang',
    heroImage: '/images/destinations/silk-road.webp',
    heroImageAlt: 'Hexi Corridor rainbow mountains',
    highlights: [
      {
        icon: 'clock',
        title: '10-12 Days',
        description:
          'The complete Hexi Corridor at a slower pace — time for detours, discoveries, and deeper exploration.',
      },
      {
        icon: 'map',
        title: 'Lanzhou → Wuwei → Zhangye → Jiayuguan → Dunhuang',
        description:
          "Every major stop along the 1,000km corridor that was the Silk Road's main artery for 1,000 years.",
      },
      {
        icon: 'star',
        title: 'Bingling Temple, Rainbow Mountains, Mogao Caves',
        description:
          "Three Buddhist cave complexes, rainbow-coloured mountains, and the Great Wall's western terminus.",
      },
    ],
    experienceTypes: ['culture', 'photography'],
    overview:
      "This is the Silk Road route for travellers who want to do the Hexi Corridor properly. It adds stops that the 7-day route skips: Bingling Temple (a Buddhist cave complex accessible only by boat), Wuwei (the historical heart of the corridor with a Han dynasty bronze horse that is China's national tourism symbol), and extra time in Zhangye and Dunhuang. The pace is slower — you are never rushing to make a train, and you have time for detours and discoveries.",
    faqQ: 'What is the Hexi Corridor and why is it important?',
    faqA: "The Hexi Corridor (河西走廊) is a 1,000km narrow passage in Gansu province between the Qilian Mountains and the Gobi Desert. It was the main artery of the Silk Road for over 1,000 years — all land trade between China and Central Asia passed through here. The corridor is dotted with Buddhist cave temples, Han dynasty watchtowers, Ming dynasty fortresses, and Silk Road trading posts. It is one of the world's great historical routes, comparable to the Inca Trail or the Silk Road through Uzbekistan.",
    stops: [
      {
        day: 'Day 1: Lanzhou',
        content:
          "Arrive Lanzhou. Afternoon: Zhongshan Bridge, White Pagoda Mountain, and the Gansu Provincial Museum (free) — home of the 'Flying Horse of Gansu', a Han dynasty bronze horse (2nd century AD) that is China's national tourism symbol. Evening: Lanzhou beef noodles for dinner.",
        tip: "The Gansu Provincial Museum's 'Flying Horse of Gansu' (马踏飞燕) is a 34.5cm bronze horse from a Han dynasty general's tomb, caught mid-gallop with one hoof on a flying swallow. It is China's most famous bronze sculpture and the symbol of the China Tourism Administration. The museum also has excellent Silk Road exhibits.",
      },
      {
        day: 'Day 2: Lanzhou → Bingling Temple → Lanzhou',
        content:
          'Day trip to Bingling Temple (炳灵寺, ¥50 + ¥120 boat) — a Buddhist cave complex 80 km from Lanzhou, accessible only by a 1-hour boat ride through the Liujiaxia Reservoir. The caves contain 183 niches with 694 stone statues and 900 m² of murals, carved from the 4th to 15th centuries. The highlight is a 27m seated Maitreya Buddha carved into the cliff face. Return to Lanzhou in the evening.',
        tip: "Bingling Temple is one of China's most underrated Buddhist sites. The boat ride through the reservoir (flooded in 1967 to build a dam) takes you through a landscape of eroded sandstone cliffs. The temple's remote location means far fewer visitors than Mogao or Longmen. The boat departs from Liujiaxia Dam — 1.5 hours from Lanzhou by bus (¥30).",
      },
      {
        day: 'Day 3: Lanzhou → Wuwei',
        content:
          "Take the 1.5-hour high-speed train from Lanzhou West to Wuwei East (¥90). Wuwei (武威) was the first city the Silk Road reached after leaving the Chinese heartland. Visit the Leitai Han Tomb (雷台汉墓, ¥45) where the Flying Horse of Gansu was discovered in 1969. The tomb is a brick-vaulted Han dynasty general's burial with 99 bronze chariots and horses. Afternoon: Confucius Temple (文庙, ¥30), the largest in northwest China, and the Wuwei Museum for Silk Road artefacts. Evening: Wuwei 'three sets' noodles (三套车) — noodles, braised pork, and tea.",
        tip: 'Wuwei is often skipped on Silk Road itineraries, but it was the most important city on the Hexi Corridor during the Han dynasty. The Leitai Han Tomb is the original find site of the Flying Horse — the original is in the Gansu Museum in Lanzhou, but the tomb itself is evocative.',
      },
      {
        day: 'Day 4: Wuwei → Zhangye',
        content:
          'Take the 1-hour high-speed train from Wuwei East to Zhangye West (¥75). Afternoon: Zhangye Danxia Landform — the rainbow mountains at their best in late afternoon light. Stay overnight in Zhangye.',
        tip: 'If you have a flexible schedule, consider spending a second day in Zhangye to visit the Mati Temple (马蹄寺, ¥75), a complex of Buddhist caves carved into a cliff 65 km south of the city. The caves include a 7-storey pagoda carved inside the mountain, with interior passages connecting the levels.',
      },
      {
        day: 'Day 5: Zhangye → Jiayuguan',
        content:
          'Take the 1.5-hour high-speed train from Zhangye West to Jiayuguan South (¥80). Full afternoon at Jiayuguan Fortress, the Overhanging Great Wall, and the First Strategic Post — the western end of the Ming dynasty Great Wall. Evening: Jiayuguan lamb skewers.',
        tip: "The 'First Strategic Post' (第一墩) is a weathered earthen mound 7.5 km southwest of the fortress — it was the actual westernmost point of the Ming Great Wall, standing on a 56m cliff above the Taolai River. The view from the glass observation deck is vertiginous.",
      },
      {
        day: 'Day 6: Jiayuguan → Dunhuang',
        content:
          'Drive 4.5 hours through the Gobi Desert to Dunhuang. Afternoon: Mingsha Sand Dunes and Crescent Moon Spring at sunset. Evening: Shazhou Night Market.',
        tip: 'The Jiayuguan-Dunhuang drive is on a good highway through a landscape of absolute emptiness — black gravel desert, distant snow-capped mountains, and the occasional camel herd. There is a rest stop at Guazhou (瓜州), famous for melons. Buy a honeydew melon (¥5-10) — they are the sweetest in China.',
      },
      {
        day: 'Day 7: Dunhuang — Mogao Caves',
        content:
          'Full morning at the Mogao Caves (book 2-4 weeks ahead). The guided tour (A-category, ¥238) covers 8 caves including the Tang dynasty masterpieces. Afternoon: Dunhuang Museum and a rest. Evening: optional second visit to Mingsha Sand Dunes (the ticket is valid for 3 days).',
        tip: "Mogao Caves Cave 45 is the highlight — a Tang dynasty cave with a perfectly preserved group of 7 painted sculptures: Buddha flanked by two disciples, two bodhisattvas, and two guardian kings. The colour on the bodhisattvas' robes is still vivid after 1,300 years. Cave 158 has a 16m reclining Buddha in nirvana.",
      },
      {
        day: 'Day 8: Dunhuang — Yulin Caves + Yadan',
        content:
          'Day trip: Yulin Caves (榆林窟, ¥40, 2.5 hrs east of Dunhuang) — a sister site to Mogao with 42 caves, less visited but with some of the finest Tang dynasty murals (including a famous mural of the Tang monk Xuanzang with a monkey — a precursor to Journey to the West). Afternoon: Yadan Ghost City (雅丹魔鬼城, ¥50 + ¥70 shuttle), a landscape of wind-eroded rock formations 180 km northwest of Dunhuang. Return to Dunhuang late evening.',
        tip: 'The Yulin Caves are smaller and less visited than Mogao but the quality of the murals in the Tang caves is equal or better. Cave 25 has a famous mural of the Amitabha Sutra that is considered one of the finest Tang dynasty paintings in existence. Yadan Ghost City is best at sunset — the rock formations glow orange against the darkening sky.',
      },
      {
        day: 'Day 9: Dunhuang → Fly Out',
        content:
          'Fly out from Dunhuang. If you have a late flight, visit the Western Thousand Buddha Caves (西千佛洞) or the Dunhuang night market for last-minute Silk Road souvenirs (camel-wool scarves, replica Mogao murals, Dunhuang yellow noodles to take home).',
        tip: 'Dunhuang souvenirs: replica Mogao mural paintings on silk (¥50-200), camel-wool scarves (¥30-80), and dried fruits from Xinjiang (dates, raisins, apricots). The night market is the best place to buy — bargain hard (start at 50% of asking price).',
      },
    ],
    practical: [
      {
        title: 'Getting There',
        body: 'Fly into Lanzhou (LHW) and out of Dunhuang (DNH). High-speed trains: Lanzhou-Wuwei (1.5 hrs), Wuwei-Zhangye (1 hr), Zhangye-Jiayuguan (1.5 hrs). Jiayuguan-Dunhuang: drive (4.5 hrs). Bingling Temple and Yulin/Yadan require day trips by car.',
      },
      {
        title: 'Where to Stay',
        body: 'Lanzhou (2 nights), Wuwei (1 night), Zhangye (1-2 nights), Jiayuguan (1 night), Dunhuang (3 nights). Budget $30-80/night throughout.',
      },
      {
        title: 'When to Go',
        body: 'May-June and September-October. The Hexi Corridor is desert climate — hot summers (35-40°C), cold winters (-15°C), and the best weather in May and September. Avoid the May Day and National Day holidays.',
      },
      {
        title: 'Mogao Tickets',
        body: 'Mogao Caves A-category tickets (¥238, 8 caves) must be booked 2-4 weeks ahead on WeChat. B-category tickets (¥100, 4 caves) are available 1-2 days ahead. The A ticket includes an IMAX film and guided tour. No photography inside the caves.',
      },
    ],
    nextSteps: [
      {
        href: '/silk-road/xian-lanzhou-dunhuang',
        label: 'Classic Silk Road',
        description: 'The 7-8 day version starting from Xian',
      },
      {
        href: '/xinjiang/silk-road',
        label: 'Xinjiang Silk Road',
        description: 'Continue west through Xinjiang to Kashgar',
      },
    ],
    related: [
      {
        href: '/silk-road/xian-lanzhou-dunhuang',
        label: 'Classic Silk Road',
        description: "The 7-8 day version starting from Xi'an — all the highlights.",
        image: '/images/destinations/silk-road.webp',
        imageAlt: 'Camel caravan in Dunhuang desert',
        days: '7-8 days',
      },
      {
        href: '/golden-triangle/beijing-xian-shanghai',
        label: "Beijing, Xi'an & Shanghai",
        description: "Combine Xi'an with Beijing and Shanghai.",
        image: '/images/destinations/golden-triangle.webp',
        imageAlt: 'The Forbidden City in Beijing',
        days: '8-10 days',
      },
      {
        href: '/tibet/lhasa-shigatse-everest',
        label: 'Lhasa, Shigatse & Everest',
        description: "Head to the Roof of the World — Tibet's essential route.",
        image: '/images/destinations/tibet.webp',
        imageAlt: 'Potala Palace at dawn in Lhasa',
        days: '8-10 days',
      },
    ],
  },

  // --- TIBET ---
  {
    dir: 'tibet',
    slug: 'lhasa-shigatse-everest',
    metaTitle: 'Lhasa-Shigatse-Everest (8-10 Days) | Tibet Travel Guide',
    metaDesc:
      "The essential Tibet route: Lhasa's Potala Palace and Jokhang Temple, Shigatse's Tashilhunpo Monastery, and Everest Base Camp — 8-10 days on the Roof of the World.",
    kicker: 'Tibet',
    title: 'Lhasa, Shigatse & Everest Base Camp: The Roof of the World',
    subtitle:
      "The Potala Palace at dawn, monks debating in Jokhang Temple, the turquoise Yamdrok Lake at 4,441m, and Everest Base Camp at 5,150m — Tibet's essential route.",
    duration: '8-10 days',
    route: 'Lhasa → Yamdrok Lake → Gyantse → Shigatse → Everest Base Camp → Lhasa',
    heroImage: '/images/destinations/tibet.webp',
    heroImageAlt: 'Potala Palace at dawn in Lhasa',
    highlights: [
      {
        icon: 'clock',
        title: '8-10 Days',
        description:
          'The essential Tibet route with acclimatisation built in — Lhasa first, then higher altitudes.',
      },
      {
        icon: 'map',
        title: 'Lhasa → Yamdrok Lake → Gyantse → Shigatse → EBC',
        description:
          "From Tibet's holiest temples to the north face of Everest — 5,150m at Base Camp.",
      },
      {
        icon: 'star',
        title: 'Potala Palace, Yamdrok Lake, Everest Base Camp',
        description:
          "The Potala's golden roofs, a turquoise sacred lake, and the world's highest mountain.",
      },
    ],
    experienceTypes: ['culture', 'nature', 'photography'],
    overview:
      "Tibet is not a casual destination — the altitude (Lhasa is at 3,650m, Everest Base Camp at 5,150m), the permit requirements, and the logistics make it one of the most complex trips in China. But it is also one of the most extraordinary: the Potala Palace rising 13 storeys above Lhasa, monks debating Buddhist philosophy in Jokhang Temple, turquoise lakes at 4,400m surrounded by snow peaks, and the north face of Everest from Base Camp. This route covers Tibet's essential sites in 8-10 days, with altitude acclimatisation built in.",
    faqQ: 'Do I need a special permit to visit Tibet?',
    faqA: "Yes. Foreign travellers need (1) a Chinese visa, (2) a Tibet Travel Permit (TTP) issued by the Tibet Tourism Bureau, and (3) if visiting Everest Base Camp or other restricted areas, an Aliens' Travel Permit (ATP). You MUST book through a registered Tibetan travel agency — independent travel is not allowed. The agency handles all permits. Allow 10-15 days for permit processing. You will be met at the airport or train station by your guide.",
    stops: [
      {
        day: 'Day 1: Arrive Lhasa (3,650m)',
        content:
          "Fly into Lhasa Gonggar Airport (LXA) or take the train from Xining (the Qinghai-Tibet Railway, 21 hours, one of the world's great train journeys). Your guide meets you at the airport/station. Transfer to hotel. REST. Do not underestimate altitude — your first 24 hours at 3,650m should be spent resting. Drink water, avoid alcohol, do not shower (the steam can trigger altitude sickness). Walk slowly. If you flew from sea level, you will feel the altitude.",
        tip: 'Altitude sickness hits 50-75% of travellers who fly directly to Lhasa. Symptoms: headache, nausea, insomnia, loss of appetite. It usually passes in 24-48 hours. Drink 3-4 litres of water, take Diamox (acetazolamide) starting 2 days before arrival, and rest. If symptoms worsen (vomiting, confusion, breathlessness at rest), tell your guide immediately — descent is the only cure.',
      },
      {
        day: 'Day 2: Lhasa Acclimatisation',
        content:
          "Gentle day exploring Lhasa. Morning: Barkhor Street (八廓街) — the 1 km pilgrim circuit around the Jokhang Temple, lined with shops selling prayer wheels, thangka paintings, and yak butter. Watch pilgrims prostrating their way around the circuit. Visit Jokhang Temple (大昭寺, ¥85) — Tibet's holiest temple, housing a life-sized gilded statue of the 12-year-old Buddha (Jowo Rinpoche) brought to Tibet in 641 AD. Afternoon: Sera Monastery (色拉寺, ¥50) for the famous monk debate (3-4pm daily except Sundays) — monks debate Buddhist philosophy in a courtyard with dramatic clapping gestures.",
        tip: 'The Jokhang Temple is the spiritual heart of Tibet. The Jowo Rinpoche statue is the most revered image in Tibetan Buddhism — pilgrims travel months on foot to see it. The temple is dark, smoky with yak-butter lamps, and intensely atmospheric. The monk debates at Sera Monastery are a 600-year-old tradition — philosophical argument as performance art.',
      },
      {
        day: 'Day 3: Lhasa — Potala Palace',
        content:
          "Morning: Potala Palace (布达拉宫, ¥200, book 1-7 days ahead) — the 13-storey, 1,000-room palace that was the winter residence of the Dalai Lamas from the 7th century. The visit (1 hour, strictly timed) climbs through the White Palace (administrative) and Red Palace (religious), past chapels, tombs of 8 Dalai Lamas, and the throne room. The view from the roof across Lhasa is extraordinary. Afternoon: Norbulingka (罗布林卡, ¥60), the Dalai Lama's summer palace — a peaceful park of pavilions, gardens, and ponds. Evening: traditional Tibetan dinner with yak-butter tea.",
        tip: 'Potala Palace tickets: ¥200, must be reserved 1-7 days in advance (your agency handles this). The visit is strictly timed to 1 hour and you must follow a set route. No photography inside. The climb is 365 steps at 3,650m altitude — take it slow. The palace is closed for maintenance November-March on rotating schedules.',
      },
      {
        day: 'Day 4: Lhasa → Yamdrok Lake → Gyantse (3,950m)',
        content:
          "Drive 2.5 hours from Lhasa to Yamdrok Lake (羊卓雍措, ¥60), one of Tibet's three sacred lakes. The first view from the Kamba La pass (4,794m) is unforgettable: a turquoise lake stretching 72 km, surrounded by snow peaks. Descend to the lake shore, then continue 3 hours to Gyantse (江孜). Visit the Pelkor Chode Monastery (白居寺, ¥60) and its Kumbum Stupa — a 32m, 9-storey chorten with 108 chapels and 100,000 Buddhist images. Gyantse was the site of a famous 1904 battle where Tibetan forces held off the British Younghusband Expedition.",
        tip: "Yamdrok Lake's colour changes with the light — turquoise in full sun, deep blue under clouds. The Kamba La pass viewpoint is cold and windy (4,794m). The road descends to the lake in a series of switchbacks. The lake is sacred — Tibetans circumambulate it on foot (7-10 days).",
      },
      {
        day: 'Day 5: Gyantse → Shigatse (3,800m)',
        content:
          "Drive 1.5 hours from Gyantse to Shigatse (日喀则), Tibet's second city. Visit Tashilhunpo Monastery (扎什伦布寺, ¥80) — the seat of the Panchen Lama (the second-highest lama in Tibetan Buddhism after the Dalai Lama). The monastery's highlight is the 26m gilded copper statue of the Future Buddha (Maitreya) — the largest gilded statue in the world, containing 279 kg of gold and 150,000 kg of copper. Walk the monastery's cobbled lanes among monks' quarters, chapels, and assembly halls. Afternoon: Shigatse market and old town.",
        tip: "Tashilhunpo Monastery was founded in 1447 and is one of Tibet's six great Gelug monasteries. The Maitreya statue is overwhelming — 26m of gilded copper in a chapel built around it. The monastery is less visited than Potala or Jokhang, so you can explore at a more relaxed pace.",
      },
      {
        day: 'Day 6: Shigatse → Everest Base Camp (5,150m)',
        content:
          'Drive 7-8 hours from Shigatse to Everest Base Camp. The road climbs through a series of high passes: Gyatso La (5,248m) and Gawu La (5,198m). From Gawu La, on a clear day you see the entire Himalayan range — Makalu (8,463m), Lhotse (8,516m), Everest (8,848m), and Cho Oyu (8,201m) in one panorama. Descend to Rongbuk Monastery (4,980m), the highest monastery in the world, then continue to Base Camp (5,150m). The north face of Everest fills the sky. Stay overnight in a tent guesthouse at Base Camp or at Rongbuk Monastery guesthouse.',
        tip: 'Everest Base Camp at 5,150m is COLD — even in summer, night temperatures drop to -5°C. The tent guesthouses have yak-dung stoves and thick blankets but no heating. Bring a -10°C sleeping bag, thermal layers, a warm hat, and gloves. The altitude at Base Camp is no joke — you will be short of breath just walking to the toilet. Diamox is essential.',
      },
      {
        day: 'Day 7: Everest Base Camp → Shigatse',
        content:
          'Sunrise at Everest Base Camp — the north face glows gold at dawn. Walk to the Base Camp marker (5,200m) for photos, then drive 7-8 hours back to Shigatse. The return drive retraces the route over the high passes. Stop at Sakya Monastery (萨迦寺, ¥45) en route — a 13th-century monastery of the Sakya school, with massive grey walls and a library of 84,000 manuscripts. Arrive Shigatse in the evening.',
        tip: "The sunrise on Everest's north face is one of the world's great sights — the mountain turns from grey to pink to gold in the space of 10 minutes. The Base Camp marker is a 20-minute walk from the tent area. The return drive is long but the Himalayan views from Gawu La are worth a second look.",
      },
      {
        day: 'Day 8: Shigatse → Lhasa',
        content:
          'Drive 5 hours back to Lhasa along the Yarlung Tsangpo River (the Brahmaputra). The road follows the river valley with views of barley fields, yak herds, and distant snow peaks. Optional stop at the Yarlung Valley — the cradle of Tibetan civilisation, with the first cultivated fields, first palace (Yumbulagang), and first monastery (Samye). Arrive Lhasa in the afternoon. Farewell dinner.',
        tip: "The Yarlung Valley, 1 hour south of Lhasa, is where Tibetan civilisation began. Yumbulagang (雍布拉康), perched on a hilltop, was Tibet's first building (2nd century BC). Samye Monastery (桑耶寺, ¥45), founded in 775 AD, was Tibet's first Buddhist monastery. Both can be visited as a day trip from Lhasa if you have an extra day.",
      },
      {
        day: 'Day 9: Depart Lhasa',
        content:
          'Fly out from Lhasa Gonggar Airport. If you have a morning flight, your guide transfers you to the airport (1 hour from Lhasa). If your flight is in the afternoon, visit the Tibetan Traditional Medicine Museum or the Tibet Museum for a final dose of Tibetan culture.',
        tip: 'Lhasa airport is 62 km from the city (1 hour by car). The airport bus (¥25) departs from the Civil Aviation Bureau near the Potala Palace. Security at Lhasa airport is strict — arrive 2 hours before your flight.',
      },
    ],
    practical: [
      {
        title: 'Getting There & Permits',
        body: "Fly into Lhasa (LXA) from Chengdu, Beijing, Shanghai, or Xian. Or take the Qinghai-Tibet Railway from Xining (21 hrs, one of the world's highest railways). You MUST book through a registered Tibetan travel agency — independent travel is not permitted. The agency arranges your Tibet Travel Permit (TTP), guides, transport, and accommodation. Allow 10-15 days for permit processing.",
      },
      {
        title: 'Where to Stay',
        body: 'Lhasa: near the Barkhor or Potala Palace ($50-150/night). Shigatse: near Tashilhunpo Monastery ($40-80/night). Everest Base Camp: tent guesthouses (¥80-150/person/night) or Rongbuk Monastery guesthouse (¥200-400/room). Your agency arranges all accommodation.',
      },
      {
        title: 'When to Go',
        body: 'April-June and September-October. July-August is monsoon — rain, clouds, and Everest is often hidden. November-March is bitterly cold (-15°C at Base Camp) but skies are clearest. April-May and October offer the best balance of weather and visibility. Tibet is closed to foreign travellers for 6-8 weeks around February-March (dates vary by Tibetan New Year).',
      },
      {
        title: 'Altitude & Health',
        body: 'Lhasa: 3,650m. Shigatse: 3,800m. Everest Base Camp: 5,150m. Altitude sickness affects 50-75% of travellers. Take Diamox (acetazolamide) starting 2 days before arrival. Drink 3-4L water/day. Avoid alcohol. Ascend slowly — this route builds in acclimatisation. If symptoms become severe, descent is the only treatment.',
      },
    ],
    nextSteps: [
      {
        href: '/tibet/lhasa-namtso-lake',
        label: 'Namtso Lake extension',
        description: "Add Tibet's largest salt lake to this route",
      },
      {
        href: '/sichuan/chengdu-daocheng-yading',
        label: 'Daocheng Yading',
        description: "Combine with Sichuan's Tibetan regions for acclimatisation",
      },
    ],
    related: [
      {
        href: '/tibet/lhasa-namtso-lake',
        label: 'Lhasa & Namtso Lake',
        description: 'A shorter Tibet route — the holy city and a heavenly turquoise lake.',
        image: '/images/destinations/tibet.webp',
        imageAlt: 'Namtso Lake turquoise water with snow peaks',
        days: '5-6 days',
      },
      {
        href: '/sichuan/chengdu-daocheng-yading',
        label: 'Daocheng Yading',
        description: "Sichuan's Tibetan regions — the perfect pre-Tibet acclimatisation.",
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Daocheng Yading snow peaks',
        days: '7-9 days',
      },
      {
        href: '/silk-road/xian-lanzhou-dunhuang',
        label: "Silk Road: Xi'an to Dunhuang",
        description: 'Follow the ancient Silk Road west through the Hexi Corridor.',
        image: '/images/destinations/silk-road.webp',
        imageAlt: 'Camel caravan in Dunhuang desert',
        days: '7-8 days',
      },
    ],
  },
  {
    dir: 'tibet',
    slug: 'lhasa-namtso-lake',
    metaTitle: 'Lhasa & Namtso Lake (5-6 Days) | Short Tibet Itinerary',
    metaDesc:
      "A shorter Tibet route: Lhasa's Potala Palace, Jokhang Temple, and Namtso Lake — one of the world's highest salt lakes at 4,718m.",
    kicker: 'Tibet',
    title: "Lhasa & Namtso Lake: Tibet's Holy City & Heavenly Lake",
    subtitle:
      "Lhasa's Potala Palace, the Jokhang Temple, and Namtso — a 1,920 km² salt lake at 4,718m, one of the most beautiful places on the Tibetan Plateau.",
    duration: '5-6 days',
    route: 'Lhasa → Namtso Lake → Lhasa',
    heroImage: '/images/destinations/tibet.webp',
    heroImageAlt: 'Namtso Lake turquoise water with snow peaks',
    highlights: [
      {
        icon: 'clock',
        title: '5-6 Days',
        description:
          "A shorter Tibet experience — the holy city of Lhasa plus one of the world's most beautiful high-altitude lakes.",
      },
      {
        icon: 'map',
        title: 'Lhasa → Namtso Lake → Lhasa',
        description:
          'Lhasa at 3,650m to Namtso Lake at 4,718m — a 4-5 hour drive across the Tibetan Plateau.',
      },
      {
        icon: 'star',
        title: 'Potala Palace, Jokhang Temple, Namtso Lake',
        description:
          "Tibet's holiest sites plus a 1,920 km² turquoise lake ringed by snow-capped peaks.",
      },
    ],
    experienceTypes: ['culture', 'nature'],
    overview:
      "For travellers who want a taste of Tibet without the long drives to Everest. This route focuses on Lhasa and Namtso Lake (纳木错) — one of the world's highest and largest salt lakes at 4,718m, 1,920 km² of turquoise water ringed by snow-capped peaks. Lhasa gives you Tibetan Buddhism's holiest sites; Namtso gives you the Tibetan Plateau's stark, high-altitude beauty. The 5-6 day timeline is ideal for those with limited time or as an add-on to a longer China trip.",
    faqQ: 'Can I visit Tibet independently?',
    faqA: 'No. All foreign travellers to Tibet must book through a registered travel agency, have a licensed guide, and travel on a pre-arranged itinerary with a private vehicle. The Tibet Travel Permit (TTP) is checked at airports, train stations, and checkpoints. Independent travel has not been permitted since 2008. Your agency handles all permits, transport, guides, and accommodation.',
    stops: [
      {
        day: 'Day 1: Arrive Lhasa (3,650m)',
        content:
          'Fly into Lhasa Gonggar Airport. Transfer to hotel. REST — your first 24 hours at altitude are for acclimatisation only. Drink water, avoid alcohol and showers. Walk slowly. Your guide will brief you on the itinerary and altitude safety.',
        tip: 'Same altitude rules apply: rest, hydrate, Diamox. Flying into Lhasa from sea level is a shock to your body. Take it seriously.',
      },
      {
        day: 'Day 2: Lhasa',
        content:
          'Morning: Jokhang Temple and Barkhor Street — the spiritual heart of Tibet. Walk the pilgrim circuit, absorb the atmosphere, visit the Jowo Rinpoche statue. Afternoon: Sera Monastery for the 3pm monk debate. Evening: traditional Tibetan dinner.',
        tip: 'The Barkhor circuit is best walked in the morning (8-10am) when pilgrims are most active. Walk clockwise. The smell of yak butter, incense, and the sound of chanting create an atmosphere found nowhere else in the world.',
      },
      {
        day: 'Day 3: Lhasa',
        content:
          'Morning: Potala Palace — the 1-hour timed visit through the White and Red Palaces. Afternoon: Norbulingka, the summer palace, or the Tibet Museum. Evening: preparation for the Namtso drive (your guide will check the weather forecast — Namtso is impassable in snow).',
        tip: "Potala Palace visit is strictly 1 hour. Your guide will set the pace. The climb is steep at altitude. The tomb of the 5th Dalai Lama (the 'Great Fifth') is 3,700 kg of gold and studded with 18,000 pearls and jewels.",
      },
      {
        day: 'Day 4: Lhasa → Namtso Lake (4,718m)',
        content:
          'Drive 4-5 hours from Lhasa to Namtso Lake. The road crosses the Nyenchen Tanglha Mountains and the Yangbajain geothermal fields (steam vents visible from the road). Namtso appears suddenly as you crest the Lhachen La pass (5,190m) — a vast expanse of turquoise stretching to the horizon, with the Nyenchen Tanglha snow range (7,162m) as a backdrop. Walk the shore, visit Tashi Dor Island (connected by a causeway in dry season), and watch the sunset. Stay overnight in a guesthouse near the lake (5,000m, basic).',
        tip: 'Namtso at 4,718m is COLDER than Everest Base Camp (5,150m) because of the wind off the lake. Night temperatures drop to -10°C even in summer. The guesthouses are very basic — dorm beds with thick blankets, no heating, squat toilets. The altitude is intense — you are sleeping 1,000m higher than Lhasa. Diamox essential.',
      },
      {
        day: 'Day 5: Namtso → Lhasa',
        content:
          "Sunrise at Namtso — the first light on the Nyenchen Tanglha peaks is one of Tibet's most beautiful sights. Walk the shore one last time, then drive 4-5 hours back to Lhasa. Afternoon: rest and recovery. Farewell dinner in Lhasa.",
        tip: 'Namtso sunrise is worth the cold. The lake is calmest at dawn, and the snow peaks turn from grey to pink to gold. The Tashi Dor hermitage on the island has meditation caves used by Tibetan hermits for centuries.',
      },
      {
        day: 'Day 6: Depart Lhasa',
        content:
          'Transfer to Lhasa airport. If your flight is late, visit the Tibetan Traditional Medicine Museum or buy thangka paintings and yak-wool products on Barkhor Street.',
        tip: 'Thangka paintings (Tibetan Buddhist scroll paintings on cotton or silk) make the best Tibet souvenir. A hand-painted thangka by a trained artist costs ¥500-5,000 depending on size and detail. Bargain at Barkhor Street but be respectful — these are religious objects.',
      },
    ],
    practical: [
      {
        title: 'Getting There & Permits',
        body: "Fly into Lhasa (LXA). Book through a registered Tibetan travel agency. Tibet Travel Permit (TTP) required. Namtso Lake may require an additional Aliens' Travel Permit (ATP) — your agency handles this.",
      },
      {
        title: 'Where to Stay',
        body: 'Lhasa: near Barkhor or Potala ($50-150/night). Namtso: basic guesthouse near the lake (¥100-200/person/night). The Namtso accommodation is very basic — dorm beds, shared squat toilets, no showers. Bring wet wipes and warm clothes.',
      },
      {
        title: 'When to Go',
        body: 'May-October. Namtso is inaccessible November-April due to snow and ice on the road. The best months are June-September for temperatures, though July-August can have afternoon clouds. May and October are colder but clearer.',
      },
      {
        title: 'Altitude & Health',
        body: 'Lhasa: 3,650m. Namtso Lake: 4,718m. The Namtso night is the highest-altitude sleep on this route. Diamox is essential. Watch for signs of worsening altitude sickness — headache, nausea, confusion. Your guide carries oxygen.',
      },
    ],
    nextSteps: [
      {
        href: '/tibet/lhasa-shigatse-everest',
        label: 'Full Tibet route',
        description: 'Add Shigatse and Everest Base Camp',
      },
      {
        href: '/sichuan/chengdu-daocheng-yading',
        label: 'Daocheng Yading',
        description: "Sichuan's Tibetan regions for pre-Tibet acclimatisation",
      },
    ],
    related: [
      {
        href: '/tibet/lhasa-shigatse-everest',
        label: 'Lhasa, Shigatse & Everest',
        description: 'The full Tibet route — add Shigatse and Everest Base Camp.',
        image: '/images/destinations/tibet.webp',
        imageAlt: 'Potala Palace at dawn in Lhasa',
        days: '8-10 days',
      },
      {
        href: '/sichuan/chengdu-daocheng-yading',
        label: 'Daocheng Yading',
        description: "Sichuan's Tibetan regions — perfect pre-Tibet acclimatisation.",
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Daocheng Yading snow peaks',
        days: '7-9 days',
      },
      {
        href: '/yunnan/kunming-dali-lijiang-shangri-la',
        label: 'Classic Yunnan Route',
        description: 'Explore Shangri-La and the ancient tea horse road.',
        image: '/images/destinations/yunnan.webp',
        imageAlt: 'Shangri-La old town',
        days: '8-12 days',
      },
    ],
  },
];

for (const r of routes) {
  writePage(r.dir, r.slug, r);
  console.log(`✅ ${r.dir}/${r.slug}`);
}
console.log(`\nDone. ${routes.length} Silk Road + Tibet pages.`);
