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

  const highlightsJsx = (data.highlights || [])
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
  title: '${esc(data.title)} | BeforeChina',
  description: '${esc(data.subtitle)}',
  alternates: { canonical: '/${dir}/${slug}' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/${dir}/${slug}',
    title: '${esc(data.title)} | BeforeChina',
    description: '${esc(data.subtitle)}',
    images: [{ url: '${esc(data.heroImage)}', width: 1200, height: 630, alt: '${esc(data.heroImageAlt)}' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '${esc(data.title)} | BeforeChina',
    description: '${esc(data.subtitle)}',
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

// ====== YUNNAN ROUTES ======
const DIR = 'yunnan';

const routes = [
  {
    slug: 'kunming-dali-lijiang-shangri-la',
    metaTitle: 'Kunming-Dali-Lijiang-Shangri-La (7-8 Days) | Yunnan Travel Guide',
    metaDesc:
      "The classic Yunnan route: Stone Forest, Dali Old Town, Lijiang canals, Tiger Leaping Gorge, and Shangri-La's Tibetan monasteries — 7-8 days through China's most diverse province.",
    kicker: 'Yunnan',
    title: 'Kunming-Dali-Lijiang-Shangri-La: The Classic Yunnan Route',
    subtitle:
      "The ultimate Yunnan backpacker trail — from Kunming's Stone Forest through Dali's lakeside old town and Lijiang's cobblestone canals, to Shangri-La at 3,200m on the Tibetan plateau.",
    duration: '7-8 days',
    route: 'Kunming → Dali → Lijiang → Tiger Leaping Gorge → Shangri-La',
    heroImage: '/images/destinations/yunnan.webp',
    heroImageAlt: 'Lijiang Old Town canals with Jade Dragon Snow Mountain in the background',
    highlights: [
      {
        icon: 'clock',
        title: '7-8 Days',
        description:
          "The perfect pace for Yunnan's classic backpacker trail — enough time to go deep without feeling rushed.",
      },
      {
        icon: 'map',
        title: 'Kunming → Dali → Lijiang → Shangri-La',
        description:
          'Connected by high-speed trains. Climbs from subtropical Kunming (1,890m) to Tibetan Shangri-La (3,200m).',
      },
      {
        icon: 'star',
        title: 'Stone Forest, Erhai Lake, Tiger Leaping Gorge',
        description:
          "China's most ethnically diverse province — 25 of 55 recognised ethnic minorities.",
      },
    ],
    experienceTypes: ['culture', 'nature', 'photography'],
    budget: 'Moderate — mid-range',
    overview:
      "This is the classic Yunnan circuit — the route every backpacker does and for good reason. Yunnan is China's most ethnically diverse province, home to 25 of China's 55 recognised ethnic minorities. The route climbs from subtropical Kunming (1,890m) to high-altitude Shangri-La (3,200m), passing through Bai, Naxi, and Tibetan cultures along the way. The infrastructure is excellent — high-speed trains connect Kunming, Dali, and Lijiang — and the food shifts from Yunnan rice noodles to Tibetan butter tea as you climb.",
    faqQ: 'How many days do I need for the Kunming-Dali-Lijiang-Shangri-La route?',
    faqA: '7-8 days is the sweet spot. In 7 days you can do Kunming (1 day), Dali (2 days), Lijiang (2 days), Tiger Leaping Gorge (1 day), and Shangri-La (1 day). With 8-9 days, add an extra day in Shangri-La to acclimatise to the 3,200m altitude and visit Songzanlin Monastery.',
    stops: [
      {
        day: 'Day 1: Kunming',
        content:
          "Fly into Kunming Changshui (KMG). Spend the day at the Stone Forest (石林) — 90 km southeast of the city, a UNESCO site of limestone pinnacles that look like petrified trees. Afternoon: Green Lake Park (翠湖) for people-watching and the surrounding Yunnan University area. Evening: across-the-bridge noodles (过桥米线) at a local restaurant — this is Yunnan's signature dish.",
        tip: "Kunming is called the 'City of Eternal Spring' for a reason — temperatures are 15-25°C year-round. The Stone Forest has a modest entrance fee. Go early (before 9am) to beat the tour groups from Kunming.",
      },
      {
        day: 'Days 2-3: Dali',
        content:
          "Take the 2-hour high-speed train from Kunming to Dali. Dali is a lakeside town backed by the 4,000m Cangshan Mountains, and the old town is a grid of stone-paved streets lined with Bai minority architecture. Day 2: rent an e-bike and cycle around Erhai Lake — stop at Xizhou Village for traditional Bai architecture and the famous Xizhou baba flatbread. Day 3: morning hike on Cangshan (take the cable car to 2,600m, then walk the Cloud Traveller's Path), afternoon exploring Dali Old Town and the Three Pagodas.",
        tip: "Skip the overpriced lakeside cafes aimed at tourists. Eat at the evening market near the South Gate — grilled Erhai lake fish, cross-bridge noodles, and the best grilled eggplant you'll ever eat.",
      },
      {
        day: 'Days 4-5: Lijiang',
        content:
          "Take the train from Dali to Lijiang (1.5 hrs). Lijiang's old town (Dayan) is a UNESCO World Heritage site — a maze of cobblestone alleys, wooden bridges, and canals built by the Naxi people 800 years ago. Day 4: walk the old town, climb to Wangu Tower for the panoramic view, visit the Black Dragon Pool for the classic photo of Jade Dragon Snow Mountain reflected in the water. Day 5: Shuhe Ancient Town (4 km north, less touristy) and Baisha Village for the 500-year-old Ming dynasty murals.",
        tip: "Lijiang Old Town charges a maintenance fee — but enforcement is lax and most travellers skip it. If asked at the gate, say you're staying at a hotel inside and they'll wave you through.",
      },
      {
        day: 'Day 6: Tiger Leaping Gorge',
        content:
          "Take a 2-hour minibus from Lijiang to Qiaotou. Tiger Leaping Gorge is one of the world's deepest river canyons — the Jinsha River cuts between Jade Dragon Snow Mountain (5,596m) and Haba Snow Mountain (5,396m), a vertical drop of 3,900m. The classic high trail is 22 km and takes 6-8 hours. Start at Jane's Guesthouse, hike to the Tea Horse Guesthouse for lunch (km 12, the best view), then continue to Tina's Guesthouse for the night. If you're short on time, do the first 12 km to Tea Horse and back — it has the best views.",
        tip: 'The high trail is well-marked but has exposed cliff sections. Wear hiking shoes — the path is dusty and rocky. The Naxi Guesthouse at km 5 sells water and snacks. In rainy season (July-August), check if the trail is open before you go.',
      },
      {
        day: 'Day 7: Shangri-La',
        content:
          "From Tina's Guesthouse, take a 3-hour bus to Shangri-La (Zhongdian, 3,200m). Shangri-La is a Tibetan-majority town renamed in 2001 to cash in on the Lost Horizon mystique — but it genuinely feels different from anywhere else in Yunnan. Visit Songzanlin Monastery (the 'Little Potala Palace', built 1679, housing 700 monks), then walk the old town around Dukezong — the world's largest prayer wheel is here (21m tall, takes several people to turn). Evening: try yak hot pot and butter tea.",
        tip: 'Shangri-La is at 3,200m — you will feel the altitude. Walk slowly, drink water, skip alcohol on your first night. Songzanlin Monastery has an entrance fee — go in the morning when the monks are chanting.',
      },
      {
        day: 'Day 8 (optional): Shangri-La → Fly Out',
        content:
          'If you have an 8th day, visit Pudacuo National Park — alpine lakes, meadows, and forests 22 km east of town (a rewarding half-day trip). Fly out from Diqing Shangri-La Airport (DIG) to Kunming or direct to Chengdu/Chongqing for onward travel.',
        tip: 'Diqing Airport has flights to Kunming (1 hr), Chengdu (1.5 hrs), and Chongqing. Book a few days ahead — flights are less frequent than from Kunming.',
      },
    ],
    practical: [
      {
        title: 'Getting Between Cities',
        body: 'High-speed trains connect Kunming to Dali (2 hrs) and Dali to Lijiang (1.5 hrs). Lijiang to Tiger Leaping Gorge is by minibus (2 hrs). Tiger Leaping Gorge to Shangri-La is by bus (3 hrs). All routes are well-served and bookable day-of except during Chinese holidays.',
      },
      {
        title: 'Where to Stay',
        body: 'Kunming: near Green Lake Park — boutique hotels in a leafy neighbourhood. Dali: inside the old town for atmosphere or by Erhai Lake for views — charming Bai-style courtyard guesthouses abound. Lijiang: in the old town, but avoid the noisy Sifang Street area — the southern end is quieter with intimate Naxi courtyard inns. Shangri-La: near Dukezong old town — Tibetan-style lodges with mountain views.',
      },
      {
        title: 'When to Go',
        body: 'March-May and September-November are best. Spring brings wildflowers; autumn has clear skies and golden leaves. Avoid July-August (rainy season — trails are muddy, mountain views are clouded in) and Chinese New Year (prices double, trains sell out).',
      },
    ],
    related: [
      {
        href: '/sichuan/chengdu-jiuzhaigou-huanglong',
        label: 'Chengdu & Jiuzhaigou',
        description: "Combine Yunnan with Sichuan's turquoise lakes and pandas.",
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Jiuzhaigou turquoise lakes',
        days: '5-6 days',
      },
      {
        href: '/guangxi/guilin-yangshuo-lijiang',
        label: 'Guilin & Yangshuo',
        description: "Pair Yunnan's mountains with Guangxi's karst peaks.",
        image: '/images/destinations/guangxi.webp',
        imageAlt: 'Guilin karst peaks',
        days: '3-4 days',
      },
      {
        href: '/silk-road/xian-lanzhou-dunhuang',
        label: "Silk Road: Xi'an to Dunhuang",
        description: "Head north to the Silk Road's Hexi Corridor.",
        image: '/images/destinations/silk-road.webp',
        imageAlt: 'Dunhuang sand dunes',
        days: '7-8 days',
      },
    ],
  },
  {
    slug: 'lijiang-lugu-lake-tiger-leaping-gorge',
    metaTitle: 'Lijiang, Lugu Lake & Tiger Leaping Gorge (4-5 Days) | Yunnan',
    metaDesc:
      'Lijiang old town, the matriarchal Mosuo culture at Lugu Lake, and hiking Tiger Leaping Gorge — a compact 4-5 day Yunnan itinerary.',
    kicker: 'Yunnan',
    title: 'Lijiang, Lugu Lake & Tiger Leaping Gorge',
    subtitle:
      "A compact Yunnan route focused on Lijiang — the cobblestone old town, the emerald waters of Lugu Lake, and one of the world's deepest canyons.",
    duration: '4-5 days',
    route: 'Lijiang → Lugu Lake → Tiger Leaping Gorge → Lijiang',
    heroImage: '/images/destinations/yunnan.webp',
    heroImageAlt: 'Lugu Lake emerald waters with Mosuo wooden boats',
    highlights: [
      {
        icon: 'clock',
        title: '4-5 Days',
        description:
          'A compact Yunnan route focused on Lijiang — skip Kunming and Dali for a tighter loop.',
      },
      {
        icon: 'map',
        title: 'Lijiang → Lugu Lake → Tiger Leaping Gorge',
        description:
          "All within 4-5 hours' drive from Lijiang. Fly directly into Lijiang Airport (LJG).",
      },
      {
        icon: 'star',
        title: 'Lugu Lake, Tiger Leaping Gorge, Lijiang Old Town',
        description:
          "Matriarchal Mosuo culture, one of the world's deepest canyons, and a UNESCO-listed old town.",
      },
    ],
    experienceTypes: ['culture', 'nature'],
    budget: 'Moderate — mid-range',
    overview:
      "This shorter Yunnan route skips Kunming and Dali, flying directly into Lijiang and focusing on three highlights within a 4-5 day window. Lugu Lake straddles the Yunnan-Sichuan border and is home to the Mosuo people, one of the world's last matriarchal societies. Tiger Leaping Gorge is one of the deepest river canyons on Earth. Lijiang ties it together as the base.",
    faqQ: 'How do I get to Lugu Lake from Lijiang?',
    faqA: 'The drive from Lijiang to Lugu Lake takes 4-5 hours by car or shared minibus. The road is winding but fully paved. There is no train. Most guesthouses in Lijiang can arrange a shared minibus — book the night before. Departures are typically 7-8am.',
    stops: [
      {
        day: 'Day 1: Lijiang Old Town',
        content:
          'Fly into Lijiang Sanyi Airport (LJG) — direct flights from Chengdu, Chongqing, Kunming, and major Chinese cities. Spend the day exploring Dayan Old Town: the cobblestone alleys, wooden Naxi houses, and the canals that crisscross the town. Climb to Wangu Tower for the sunset view. Evening: Naxi grilled fish and yak yoghurt in a courtyard restaurant.',
        tip: 'Lijiang Airport is 28 km south of town. The airport shuttle bus runs every 30 minutes. A ride-hailing car is also an option.',
      },
      {
        day: 'Days 2-3: Lugu Lake',
        content:
          "Take a 4-5 hour minibus from Lijiang to Lugu Lake (depart 7am, arrive by noon). Lugu Lake is at 2,685m, spanning the Yunnan-Sichuan border with crystal-clear emerald water. Spend the afternoon walking the lakeshore. Day 3: take a boat to Liwubi Island (the Mosuo people use traditional dugout canoes), visit a Mosuo family home to learn about the 'walking marriage' tradition, and cycle the 50 km loop around the lake. Stay overnight in Luoshui Village on the Yunnan side.",
        tip: "The 50 km lake loop takes 4-5 hours by e-bike (easily rented in Luoshui Village). The Sichuan side of the lake is less developed and more authentic. The 'Walking Marriage Bridge' (走婚桥) on the Sichuan side is a wooden bridge through marshland — beautiful at sunset.",
      },
      {
        day: 'Day 4: Tiger Leaping Gorge',
        content:
          'Return to Lijiang by minibus (4-5 hrs, leave Lugu Lake at 7am). Transfer directly to Qiaotou for Tiger Leaping Gorge. If you arrive by 2pm, hike the first section of the high trail to Naxi Guesthouse (2 hours, the gentlest section) for sunset views. Stay overnight at a guesthouse on the trail.',
        tip: "If you're short on time, skip the hike and visit the lower Tiger Leaping Gorge scenic area — a 1,000-step staircase down to the river. The rapids here are ferocious, and there is a viewing platform at the bottom.",
      },
      {
        day: 'Day 5 (optional): Return to Lijiang',
        content:
          'Complete the hike or take the bus back to Lijiang. Afternoon: Shuhe Ancient Town or Baisha murals before your flight out.',
        tip: 'If flying out on Day 5, book an evening flight. The drive from Tiger Leaping Gorge back to Lijiang Airport takes 2.5 hours.',
      },
    ],
    practical: [
      {
        title: 'Getting There',
        body: 'Fly into Lijiang Sanyi Airport (LJG) from Chengdu, Chongqing, or Kunming. Lijiang has direct flights from most major Chinese cities. The route works as a self-contained short trip or as an add-on after Dali.',
      },
      {
        title: 'Lugu Lake Tips',
        body: "The lake is at 2,685m — altitude is mild but noticeable. Water temperature is cold year-round (swimming not recommended). Mosuo culture is matriarchal — property passes through the female line and 'marriage' is a walking arrangement where partners live separately. Ask before photographing locals.",
      },
      {
        title: 'Best Season',
        body: 'April-June and September-November. Lugu Lake is stunning in late October when the surrounding forests turn gold. Avoid July-August (rain) and December-February (cold, some guesthouses close).',
      },
    ],
    related: [
      {
        href: '/yunnan/kunming-dali-lijiang-shangri-la',
        label: 'Full Yunnan Route',
        description: 'Add Kunming, Dali, and Shangri-La to this trip.',
        image: '/images/destinations/yunnan.webp',
        imageAlt: 'Lijiang old town canals',
        days: '7-8 days',
      },
      {
        href: '/sichuan/chengdu-in-depth',
        label: 'Chengdu In Depth',
        description: 'Fly from Lijiang to Chengdu for pandas and hot pot.',
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Chengdu panda',
        days: '3-4 days',
      },
      {
        href: '/guangxi/guilin-yangshuo-lijiang',
        label: 'Guilin & Yangshuo',
        description: 'Another iconic Chinese landscape in Guangxi.',
        image: '/images/destinations/guangxi.webp',
        imageAlt: 'Guilin karst peaks',
        days: '3-4 days',
      },
    ],
  },
  {
    slug: 'dali-shaxi-tengchong',
    metaTitle: 'Dali-Shaxi-Tengchong (4-5 Days) | Off-the-Beaten-Path Yunnan',
    metaDesc:
      "Dali's lakeside old town, Shaxi's ancient tea-horse road market, and Tengchong's hot springs and volcanoes — a slower, deeper Yunnan route.",
    kicker: 'Yunnan',
    title: "Dali, Shaxi & Tengchong: Yunnan's Slow Road",
    subtitle:
      "Skip the crowds. Dali's Erhai Lake, Shaxi's ancient tea-horse caravanserai, and Tengchong's volcanic hot springs — a Yunnan route for travellers who want depth over checklist.",
    duration: '4-5 days',
    route: 'Dali → Shaxi → Tengchong',
    heroImage: '/images/destinations/yunnan.webp',
    heroImageAlt: 'Shaxi ancient market town cobblestone square',
    highlights: [
      {
        icon: 'clock',
        title: '4-5 Days',
        description:
          'A slower-paced Yunnan route through less-visited corners — depth over checklist.',
      },
      {
        icon: 'map',
        title: 'Dali → Shaxi → Tengchong',
        description: "Goes west from Dali into Yunnan's hidden gems. Private car recommended.",
      },
      {
        icon: 'star',
        title: 'Shaxi, Tengchong Hot Springs, Heshun Old Town',
        description:
          "A preserved Tea Horse Road market town, volcanic hot springs, and a 600-year-old jade merchants' village.",
      },
    ],
    experienceTypes: ['culture', 'nature'],
    budget: 'Moderate — mid-range',
    overview:
      "This route goes west from Dali into Yunnan's less-visited corners. Shaxi is a preserved market town on the ancient Tea Horse Road — what Lijiang was 30 years ago. Tengchong is a volcanic border town near Myanmar, famous for hot springs, a well-preserved old town, and the tragic WWII battlefield at the Huitong Bridge. This route has fewer tourists and a slower pace.",
    faqQ: 'How do I get from Dali to Tengchong?',
    faqA: 'Drive Dali to Shaxi (2.5 hrs), Shaxi to Tengchong (5 hrs via the Baoshan-Tengchong Expressway). There is no direct train — private car or long-distance bus are the options. A private car for the full route can be arranged through your hotel or a local driver.',
    stops: [
      {
        day: 'Day 1: Dali → Shaxi',
        content:
          "Start in Dali (fly into Dali Airport or take the train from Kunming). Drive 2.5 hours north to Shaxi (沙溪) — a 2,400-year-old market town on the Tea Horse Road. Shaxi's Sideng Square is ringed by wooden shopfronts and a 600-year-old theatre stage. Walk the cobblestone lanes, visit the Xingjiao Temple (built 1415), and have dinner at a courtyard guesthouse. Shaxi has maybe 20 guesthouses total — it's what Lijiang was before the tour buses arrived.",
        tip: 'Shaxi is best visited on a Friday — the weekly market fills Sideng Square with Bai and Yi villagers selling produce, handicrafts, and the best street snacks in western Yunnan.',
      },
      {
        day: 'Day 2: Shaxi → Tengchong',
        content:
          'Morning in Shaxi — hike to the Shibaoshan Grottoes (16 Buddhist cave temples from the Nanzhao Kingdom, 1,200 years old, 30 min drive). Then drive 5 hours to Tengchong. Arrive by evening, check into a hot spring hotel, and soak. Tengchong has 99 volcanoes and 88 hot springs — the town is geothermally active and the hot spring water is genuinely therapeutic.',
        tip: "Tengchong's Rehai (Hot Sea) Scenic Area has the best public hot springs — the full complex includes the 'Big Boiling Pot' (大滚锅) where water emerges at 97°C. Bring your own swimsuit; rentals are overpriced.",
      },
      {
        day: 'Day 3: Tengchong Volcano Park',
        content:
          'Morning: Tengchong Volcano National Park — hike up Daying Mountain (the largest dormant volcano, 30-minute climb) for the crater view. The park has 97 volcanic cones, and you can take a hot air balloon ride over the craters (about 15 minutes). Afternoon: Heshun Old Town (和顺古镇) — a 600-year-old village of grey-brick courtyard houses built by Tengchong jade merchants who traded across Southeast Asia. The library here is the oldest rural library in China (built 1924).',
        tip: "Heshun Old Town has an entrance fee — but if you stay at a guesthouse inside the old town, the owner can often get you in for free. The morning market in Heshun's main square is excellent for breakfast.",
      },
      {
        day: 'Day 4: WWII History & Fly Out',
        content:
          'Morning: National Cemetery of the Fallen (国殇墓园) — Tengchong was the site of a brutal 1944 battle where Chinese forces retook the city from the Japanese. The cemetery holds 3,346 soldiers and is deeply moving. If time permits, visit the Huitong Bridge — a key Burma Road crossing. Afternoon: fly out from Tengchong Tuofeng Airport (TCZ) to Kunming or Chengdu.',
        tip: 'Tengchong Airport has flights to Kunming (1 hr), Chengdu (1.5 hrs), and Chongqing. Book 2-3 days ahead — fewer flights than major cities.',
      },
    ],
    practical: [
      {
        title: 'Getting Around',
        body: 'This route requires a private car or a combination of buses. Dali → Shaxi: 2.5 hrs by car, or bus from Dali North Station to Jianchuan (1.5 hrs) then local minibus to Shaxi (40 min). Shaxi → Tengchong: 5 hrs by car. The roads are good — this is entirely doable.',
      },
      {
        title: 'Where to Stay',
        body: 'Shaxi: Horse Pen 46 or Shaxi Laomadian Lodge — beautifully restored courtyard inns on the old square. Tengchong: Heshun Old Town guesthouses in converted merchant homes, or the Angsana Hot Spring Resort for a splurge — a luxury spa resort with private hot spring pools.',
      },
      {
        title: 'Best Season',
        body: "March-May and October-November. Tengchong's ginkgo village (银杏村) turns brilliant yellow in late November — worth planning around. Avoid June-September (rainy season, hot springs are less appealing in heat).",
      },
    ],
    related: [
      {
        href: '/yunnan/kunming-dali-lijiang-shangri-la',
        label: 'Classic Yunnan Route',
        description: 'The main backpacker trail through Yunnan.',
        image: '/images/destinations/yunnan.webp',
        imageAlt: 'Lijiang old town',
        days: '7-8 days',
      },
      {
        href: '/sichuan/chengdu-in-depth',
        label: 'Chengdu In Depth',
        description: 'Fly from Tengchong to Chengdu for pandas and Sichuan food.',
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Chengdu panda',
        days: '3-4 days',
      },
      {
        href: '/guizhou/huangguoshu-libo-miao',
        label: 'Guizhou Waterfalls & Miao Villages',
        description: "Next door: Asia's largest waterfall and minority culture.",
        image: '/images/destinations/guizhou.webp',
        imageAlt: 'Huangguoshu waterfall',
        days: '5-6 days',
      },
    ],
  },
  {
    slug: 'xishuangbanna-tropical',
    metaTitle: 'Xishuangbanna Tropical Rainforest (3-4 Days) | Yunnan Travel Guide',
    metaDesc:
      "Xishuangbanna: Dai minority culture, tropical rainforest, wild elephants, and Mekong River sunsets in southern Yunnan — China's Southeast Asia.",
    kicker: 'Yunnan',
    title: "Xishuangbanna: China's Tropical Southeast Asia",
    subtitle:
      "Southern Yunnan's Dai heartland — tropical rainforest, wild elephants, Mekong River sunsets, and temples that look more like Thailand than China.",
    duration: '3-4 days',
    route: 'Jinghong → Menglun → Mengla → Jinghong',
    heroImage: '/images/destinations/yunnan.webp',
    heroImageAlt: 'Xishuangbanna tropical rainforest and Mekong River',
    highlights: [
      {
        icon: 'clock',
        title: '3-4 Days',
        description: 'A tropical escape in southern Yunnan — the same latitude as Hawaii.',
      },
      {
        icon: 'map',
        title: 'Jinghong → Menglun → Mengla',
        description: "At China's southern tip bordering Laos and Myanmar. Fly into Jinghong (JHG).",
      },
      {
        icon: 'star',
        title: 'Tropical Rainforest, Wild Elephants, Dai Culture',
        description:
          'Theravada Buddhism, stilt houses, and spicy-sour food — more Southeast Asia than Han China.',
      },
    ],
    experienceTypes: ['nature', 'culture'],
    budget: 'Budget-friendly — great value',
    overview:
      "Xishuangbanna (西双版纳) sits at 21°N — the same latitude as Hawaii and at China's southern tip bordering Laos and Myanmar. The Dai people have lived here for 2,000 years, and their culture — Theravada Buddhism, stilt houses, spicy-sour food — has more in common with Thailand and Laos than Han China. This is where Chinese tourists go for a 'tropical paradise' experience, but Western tourists have barely discovered it.",
    faqQ: 'When is the best time to visit Xishuangbanna?',
    faqA: 'November to February is the dry season with pleasant temperatures (20-30°C) — this is the best time. March-April is hot (35°C+) but you can catch the Dai Water Splashing Festival (April 13-15), the biggest Dai celebration of the year. May-October is rainy season — daily downpours, high humidity, but the rainforest is at its most lush.',
    stops: [
      {
        day: 'Day 1: Jinghong',
        content:
          'Fly into Xishuangbanna Gasa Airport (JHG) — direct flights from Kunming (1 hr), Chengdu, Chongqing, and major cities. Jinghong is the capital and feels more like a Southeast Asian town than a Chinese city: palm-lined streets, golden-roofed Dai temples, and the Mekong (called Lancang here) flowing through. Visit Manting Park — a former Dai royal garden with a temple and daily elephant show — and Gaozhuang Night Market in the evening for Dai barbecue and papaya salad.',
        tip: "Gaozhuang Night Market is massive — one of Yunnan's best night markets. Try the grilled Mekong fish, Dai-style papaya salad (som tam), and sticky rice in bamboo tubes. The market runs from 6pm to midnight.",
      },
      {
        day: 'Day 2: Wild Elephant Valley & Dai Villages',
        content:
          "Morning: Wild Elephant Valley (野象谷, 40 km north of Jinghong) — a nature reserve protecting Asia's last wild elephants. There's a 2 km elevated walkway through the canopy, and if you're lucky (best Feb-March), wild elephants come to the river to drink. There's also an elephant show (the ethics are debatable, but the wild encounters are genuine). Afternoon: visit a Dai village — Manzhang Village or Ganlanba — to see traditional stilt houses, Dai weaving, and taste Dai cuisine.",
        tip: 'Wild elephants are most active at dawn and dusk. Arrive at 8am when the park opens for the best chance of sightings. The walkway is wheelchair-accessible and takes about 2 hours.',
      },
      {
        day: 'Day 3: Menglun Tropical Botanical Garden',
        content:
          "Drive 1.5 hours east to the Menglun Tropical Botanical Garden — China's largest botanical garden, covering 900 hectares on a Mekong island. It has 13,000 plant species including a palm garden, orchid house, and a 'vine garden' where 100m-long rattan vines hang from 40m trees. It's genuinely world-class. Spend 3-4 hours walking. Afternoon: return to Jinghong via Mengyang for a tea tasting at a Puer tea plantation.",
        tip: "The botanical garden has an entrance fee — worth every minute. The best sections are the Palm Garden and the Tropical Rainforest section. A golf cart tour covers the highlights in 2 hours if you're short on time.",
      },
      {
        day: 'Day 4 (optional): Mengla & Border',
        content:
          "Drive 3 hours to Mengla on the Laos border — the tropical rainforest here is the most intact in China. Visit the Wangtianshu (望天树) scenic area — a canopy walkway 36m above the forest floor suspended between towering Parashorea trees. It's the highest tree-top walkway in Asia. Fly out from Jinghong in the evening.",
        tip: 'You can technically cross into Laos at the Mohan-Boten border (open 8am-6pm) — but you need a Laos visa in advance and onward transport on the Laos side is limited. Most visitors just visit the Chinese border area.',
      },
    ],
    practical: [
      {
        title: 'Getting There',
        body: 'Fly into Xishuangbanna Gasa Airport (JHG). Direct flights from Kunming (1 hr), Chengdu (2 hrs), Chongqing (2 hrs), and major cities. No train yet (the China-Laos railway passes through but has limited tourist stops).',
      },
      {
        title: 'Where to Stay',
        body: 'Jinghong: near Gaozhuang or along the Lancang River — boutique hotels and guesthouses with river views. For a splurge: Anantara Xishuangbanna — a luxury resort built in Dai architectural style by the river.',
      },
      {
        title: 'What to Eat',
        body: "Dai cuisine is spicy, sour, and herbaceous — totally different from northern Chinese food. Must-try: pineapple rice (菠萝饭), lemongrass grilled fish (香茅草烤鱼), Dai-style papaya salad, and the 'Dai family feast' (傣家宴) where a dozen small dishes are served on a banana leaf.",
      },
    ],
    related: [
      {
        href: '/yunnan/kunming-dali-lijiang-shangri-la',
        label: 'Classic Yunnan Route',
        description: 'Combine with the main Yunnan backpacker trail.',
        image: '/images/destinations/yunnan.webp',
        imageAlt: 'Lijiang old town',
        days: '7-8 days',
      },
      {
        href: '/south-china/sanya-hainan',
        label: 'Sanya & Hainan',
        description: "Another tropical destination: China's Hawaii island.",
        image: '/images/destinations/south-china.webp',
        imageAlt: 'Sanya beach',
        days: '5-7 days',
      },
      {
        href: '/guangxi/guilin-yangshuo-lijiang',
        label: 'Guilin & Yangshuo',
        description: 'Karst peaks and rivers — another iconic Chinese landscape.',
        image: '/images/destinations/guangxi.webp',
        imageAlt: 'Guilin karst peaks',
        days: '3-4 days',
      },
    ],
  },
  {
    slug: 'kunming-dongchuan-yuanyang',
    metaTitle: 'Kunming-Dongchuan-Yuanyang Rice Terraces (5-6 Days) | Yunnan',
    metaDesc:
      "Photograph Dongchuan Red Land and Yuanyang Rice Terraces — two of China's most spectacular landscapes — on a 5-6 day photography-focused Yunnan route.",
    kicker: 'Yunnan',
    title: 'Dongchuan Red Land & Yuanyang Rice Terraces',
    subtitle:
      "A photographer's dream — the iron-red soils of Dongchuan and the mirror-like flooded terraces of Yuanyang, two of China's most photogenic landscapes.",
    duration: '5-6 days',
    route: 'Kunming → Dongchuan → Kunming → Yuanyang',
    heroImage: '/images/destinations/yunnan.webp',
    heroImageAlt: 'Yuanyang rice terraces at sunrise with mist',
    highlights: [
      {
        icon: 'clock',
        title: '5-6 Days',
        description: "Two of China's most photogenic landscapes — built for photographers.",
      },
      {
        icon: 'map',
        title: 'Kunming → Dongchuan → Yuanyang',
        description:
          'Dongchuan is 250 km northeast of Kunming; Yuanyang is 330 km south. Both require a private car.',
      },
      {
        icon: 'star',
        title: 'Dongchuan Red Land, Yuanyang Rice Terraces',
        description:
          'Iron-red soils at sunrise and 1,300-year-old mirror terraces carved by the Hani people.',
      },
    ],
    experienceTypes: ['photography', 'nature'],
    budget: 'Moderate — mid-range',
    overview:
      "This route is built for photographers. Dongchuan's Red Land, 250 km northeast of Kunming, has iron-rich soil that glows crimson at sunrise. Yuanyang's rice terraces, 330 km south, have been carved into the Ailao Mountains by the Hani people over 1,300 years — 3,000 steps from river to summit, each one flooded and reflecting the sky like a giant's staircase of mirrors.",
    faqQ: 'When are the Yuanyang rice terraces flooded?',
    faqA: 'November to March is the flooded season — the terraces are filled with water and reflect the sky, creating the iconic mirror effect. This is the best time for photography. April-October the terraces are green with growing rice, which is still beautiful but less dramatic for photos.',
    stops: [
      {
        day: 'Day 1: Kunming → Dongchuan',
        content:
          "Drive 3.5 hours from Kunming to Dongchuan Red Land (东川红土地). The soil here contains iron oxide that turns brilliant red after rain. Arrive by mid-afternoon and photograph the sunset at Luoxiagou (Falling Sun Valley) — the red fields, green barley, and golden buckwheat create colour blocks like a painter's palette. Stay at a local farmhouse guesthouse.",
        tip: "The best Dongchuan photos are taken 1-2 days after rain, when the iron oxide is most vivid. Check the weather before making the trip — if it's been dry for a week, the colours are muted.",
      },
      {
        day: 'Day 2: Dongchuan → Kunming',
        content:
          "Sunrise at Damakan (the most famous viewpoint — a lone tree silhouetted against the red hills). Morning: photograph the red land from Jinxiuyuan and Qicaipo viewpoints. The light is best from 7-10am. Drive back to Kunming by afternoon. Evening: overnight train or rest before tomorrow's journey to Yuanyang.",
        tip: "Dongchuan's guesthouses are simple farmhouse stays — bring toilet paper and hand sanitiser. The farmhouse food is excellent: free-range chicken, wild mushrooms, and homegrown vegetables.",
      },
      {
        day: 'Day 3: Kunming → Yuanyang',
        content:
          'Drive 5-6 hours from Kunming to Yuanyang Rice Terraces. The road is winding — the terraces are carved into mountains at 1,200-2,000m. Arrive by late afternoon and photograph sunset at Bada scenic area — this is the classic wide-angle view of thousands of terraces cascading down the mountainside. Stay in Xinjie Town or at a guesthouse in Duoyishu village.',
        tip: 'The Yuanyang entrance ticket is valid for 3 days and covers all viewpoints. Buy it at the entrance gate 30 km before Xinjie — you cannot buy tickets at the viewpoints themselves.',
      },
      {
        day: 'Day 4: Yuanyang Terraces',
        content:
          'Sunrise at Duoyishu — the most famous sunrise spot in Yuanyang. Arrive by 6am (the platform fills up by 6:30am) to watch the sun rise over the terraces as mist rises from the valley. Morning: Laohuzui (Tiger Mouth) — steep terraces plunging 1,000m into the valley. Afternoon: Qingkou Hani Village — a traditional Hani mushroom-shaped house village. Sunset: either Bada again or Longshuba depending on the light.',
        tip: 'Yuanyang sunrise in January-March is crowded with Chinese photographers — tripods in every direction. The platform at Duoyishu has two levels; the upper level fills first. Go to the lower level for a less obstructed view.',
      },
      {
        day: 'Day 5: Yuanyang → Kunming',
        content:
          'Final sunrise at a quiet viewpoint (Shengcun or Mengnong). Visit a morning market in Xinjie or Laomeng — Hani, Yi, and Miao villagers in traditional clothing trading produce, textiles, and handicrafts. Drive back to Kunming (5-6 hrs). Fly out in the evening or stay overnight in Kunming.',
        tip: 'The Hani market in Laomeng (Thursday) is the most authentic. Villagers walk 2-3 hours from mountain villages to trade. The textiles — indigo-dyed hemp — make excellent souvenirs.',
      },
    ],
    practical: [
      {
        title: 'Photography Tips',
        body: 'Wide-angle lens (16-35mm) for the terraces, telephoto (70-200mm) for details and compression. Tripod essential for sunrise/sunset. A polarising filter helps cut glare off the flooded terraces. Best months: December-February for flooded terraces and clear skies.',
      },
      {
        title: 'Where to Stay',
        body: 'Yuanyang: Duoyishu village has the best sunrise access (simple guesthouses, unbeatable location). Xinjie Town has more comfort with proper hotels. Dongchuan: farmhouse guesthouses near the viewpoints (very basic but the views from your doorstep are spectacular).',
      },
      {
        title: 'Getting Around',
        body: "Both Dongchuan and Yuanyang require a private car. In Kunming, hire a driver for the full route — this is the standard way to do it and your hotel can help arrange one. Public buses exist but are slow and don't reach the viewpoints.",
      },
    ],
    related: [
      {
        href: '/yunnan/kunming-dali-lijiang-shangri-la',
        label: 'Classic Yunnan Route',
        description: 'Combine with the main Yunnan backpacker trail.',
        image: '/images/destinations/yunnan.webp',
        imageAlt: 'Lijiang old town',
        days: '7-8 days',
      },
      {
        href: '/sichuan/chengdu-jiuzhaigou-huanglong',
        label: 'Chengdu & Jiuzhaigou',
        description: "Another photographer's paradise in Sichuan.",
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Jiuzhaigou turquoise lake',
        days: '5-6 days',
      },
      {
        href: '/guangxi/guilin-yangshuo-lijiang',
        label: 'Guilin & Yangshuo',
        description: "Karst peaks — one of the world's most photogenic landscapes.",
        image: '/images/destinations/guangxi.webp',
        imageAlt: 'Guilin karst peaks',
        days: '3-4 days',
      },
    ],
  },
];

for (const r of routes) {
  writePage(DIR, r.slug, r);
  console.log(`✅ ${DIR}/${r.slug}`);
}
console.log(`\nDone. ${routes.length} Yunnan pages.`);
