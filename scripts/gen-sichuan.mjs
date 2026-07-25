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

const DIR = 'sichuan';
const routes = [
  {
    slug: 'chengdu-jiuzhaigou-huanglong',
    metaTitle: 'Chengdu-Jiuzhaigou-Huanglong (5-6 Days) | Sichuan Travel Guide',
    metaDesc:
      "Chengdu pandas, Jiuzhaigou's turquoise lakes, and Huanglong's travertine pools — the classic Sichuan nature route in 5-6 days.",
    kicker: 'Sichuan',
    title: 'Chengdu, Jiuzhaigou & Huanglong: Pandas & Turquoise Lakes',
    subtitle:
      "Chengdu's giant pandas, Jiuzhaigou's 114 turquoise lakes, and Huanglong's golden travertine terraces — Sichuan's three icons in one trip.",
    duration: '5-6 days',
    route: 'Chengdu → Jiuzhaigou → Huanglong → Chengdu',
    heroImage: '/images/destinations/sichuan.webp',
    heroImageAlt: 'Jiuzhaigou turquoise lakes and waterfalls',
    highlights: [
      {
        icon: 'clock',
        title: '5-6 Days',
        description:
          "The perfect pace for Sichuan's three icons — pandas, turquoise lakes, and golden travertine terraces.",
      },
      {
        icon: 'map',
        title: 'Chengdu → Jiuzhaigou → Huanglong',
        description: 'Fly from Chengdu to Jiuzhaigou (1 hr), then drive 2.5 hrs to Huanglong.',
      },
      {
        icon: 'star',
        title: 'Pandas, Five Flower Lake, Huanglong Pools',
        description:
          "China's cutest animal, its most beautiful lake, and a 3.6 km golden travertine cascade.",
      },
    ],
    experienceTypes: ['nature', 'culture'],
    budget: '$600-900/person',
    overview:
      "Sichuan is China's outdoor playground, and this route hits the province's three biggest draws. Chengdu is the panda capital of the world and the spiritual home of Sichuan cuisine. Jiuzhaigou (九寨沟) is a UNESCO-listed valley of 114 turquoise lakes, waterfalls, and snow-capped peaks — arguably China's most beautiful national park. Huanglong (黄龙) is a 3.6 km travertine terrace system of golden calcified pools, nicknamed the 'Yellow Dragon' for the way the pools cascade down the valley.",
    faqQ: 'How do I get to Jiuzhaigou from Chengdu?',
    faqA: 'Fly from Chengdu to Jiuzhaigou Huanglong Airport (JZH) — 1 hour, ¥500-900. Alternatively, take a 7-9 hour bus from Chengdu Chadianzi Station (¥150). Flying is strongly recommended. The airport is at 3,400m and you descend to Jiuzhaigou at 2,000-3,000m.',
    stops: [
      {
        day: 'Day 1: Chengdu Pandas & Hot Pot',
        content:
          "Morning: Chengdu Research Base of Giant Panda Breeding — arrive at 7:30am (opening time) to see the pandas at their most active during breakfast feeding. The babies are in the nursery in August-September. Afternoon: People's Park for tea in a bamboo grove at the Heming Teahouse (built 1923). Evening: Sichuan hot pot — the numbing-spicy (麻辣) broth is a Chengdu rite of passage.",
        tip: "Panda base opens at 7:30am. The pandas are fed at 8-9am and sleep most of the afternoon. Go early or you'll be photographing sleeping pandas. Entrance ¥55.",
      },
      {
        day: 'Day 2: Chengdu → Jiuzhaigou',
        content:
          'Morning flight from Chengdu Tianfu (TFU) to Jiuzhaigou Huanglong Airport (JZH, 1 hr). The approach through the Min Mountains is spectacular — snow peaks in every direction. Drive 2 hours from the airport to Jiuzhaigou Valley. Check into your hotel near the park entrance. Afternoon: walk the village area, acclimatise to the 2,000m altitude. If you have energy, visit the Zharu Monastery just outside the park.',
        tip: "The airport is at 3,400m — you will feel the altitude immediately. Don't rush. The drive to Jiuzhaigou descends 1,400m through a stunning river gorge. The road is good but winding.",
      },
      {
        day: 'Day 3: Jiuzhaigou Full Day',
        content:
          'Enter the park at 8am. Jiuzhaigou is a Y-shaped valley with three main branches. Take the shuttle bus to the top of Rize Valley (Primeval Forest, 3,060m), then walk down past Swan Lake, Arrow Bamboo Lake, Panda Lake, Five Flower Lake (the most photogenic — turquoise, emerald, and sapphire in a single lake), Pearl Shoal Waterfall, and Mirror Lake. After lunch at Nuorilang, do Zechawa Valley: Long Lake (the largest at 3,100m) and Five-Color Pond (tiny but intensely blue). End at Shuzheng Valley for the Tibetan villages and Shuzheng Waterfall.',
        tip: 'Jiuzhaigou ticket: ¥169 + ¥90 shuttle bus. Book on WeChat (search 九寨沟) up to 7 days ahead. The park limits visitors to 41,000/day and sells out in autumn. The shuttle bus is hop-on-hop-off — use it to skip the long walks between valleys.',
      },
      {
        day: 'Day 4: Huanglong',
        content:
          'Drive 2.5 hours from Jiuzhaigou to Huanglong. Take the cable car up (¥80) and walk 2 km to the Five-Color Pool at 3,570m — the highest and most spectacular of the travertine terraces, with pools ranging from yellow to green to blue depending on mineral content and algae. Then walk down 4 km through the valley past hundreds of terraced pools. The whole descent takes 3-4 hours. Drive back to Chuanzhusi Town or Jiuzhaigou for the night.',
        tip: "Huanglong is at 3,200-3,570m — higher than Jiuzhaigou. Altitude sickness is common here. Buy an oxygen canister (¥30) at the entrance if you're prone to altitude issues. The walk is downhill from the top — much easier than going up.",
      },
      {
        day: 'Day 5: Return to Chengdu',
        content:
          'Morning: visit Munigou Valley (a quieter alternative to Huanglong with similar travertine pools, fewer tourists) or relax. Afternoon flight from JZH back to Chengdu. Evening: Chengdu farewell dinner — try mapo tofu (the real version, not the Westernised one) and dan dan noodles at a local restaurant.',
        tip: 'If your flight from JZH is delayed (common in winter due to snow), have a backup plan. Jiuzhaigou Airport has a reputation for cancellations December-February. Fly in the morning to have the afternoon as a buffer.',
      },
    ],
    practical: [
      {
        title: 'Getting There',
        body: "Fly into Chengdu Tianfu International (TFU) — one of China's newest and largest airports with international connections. Chengdu → Jiuzhaigou: 1-hour flight from TFU to JZH. Jiuzhaigou → Huanglong: 2.5-hour drive.",
      },
      {
        title: 'Where to Stay',
        body: 'Chengdu: near Chunxi Road or Jinli Ancient Street ($40-100/night). Jiuzhaigou: near the park entrance at Zhangzha Town ($30-80/night, book ahead in autumn). The Hilton Jiuzhaigou (¥800-1,200) is the best international option.',
      },
      {
        title: 'When to Go',
        body: 'Late October is peak — autumn colours at Jiuzhaigou are world-famous and the park is at its most beautiful. May-June for green and waterfalls. Avoid Golden Week (Oct 1-7) — Jiuzhaigou hits capacity by 9am. Winter (Dec-Feb) is quiet but some trails close due to snow.',
      },
    ],
    related: [
      {
        href: '/sichuan/chengdu-in-depth',
        label: 'Chengdu In Depth',
        description: 'Spend more time with pandas, hot pot, and tea houses.',
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Chengdu panda',
        days: '3-4 days',
      },
      {
        href: '/sichuan/chengdu-daocheng-yading',
        label: 'Daocheng Yading',
        description: "Extend to the 'Last Shangri-La' — three sacred snow mountains.",
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Daocheng Yading snow mountain',
        days: '7-8 days',
      },
      {
        href: '/yunnan/kunming-dali-lijiang-shangri-la',
        label: 'Classic Yunnan Route',
        description: 'Next door: Stone Forest, Erhai Lake, and Tibetan Shangri-La.',
        image: '/images/destinations/yunnan.webp',
        imageAlt: 'Lijiang old town',
        days: '7-8 days',
      },
    ],
  },
  {
    slug: 'chengdu-emei-leshan',
    metaTitle: 'Chengdu-Emeishan-Leshan (3-4 Days) | Sichuan Travel Guide',
    metaDesc:
      "Chengdu pandas, Emei Mountain's golden summit, and the world's largest Buddha at Leshan — Sichuan's cultural trinity in 3-4 days.",
    kicker: 'Sichuan',
    title: 'Chengdu, Emei Mountain & Leshan Giant Buddha',
    subtitle:
      "Pandas in the morning, a 71m Buddha carved into a cliff face, and sunrise from a 3,099m golden summit — Sichuan's holy trinity.",
    duration: '3-4 days',
    route: 'Chengdu → Leshan → Emeishan → Chengdu',
    heroImage: '/images/destinations/sichuan.webp',
    heroImageAlt: 'Leshan Giant Buddha carved into red sandstone cliff',
    highlights: [
      {
        icon: 'clock',
        title: '3-4 Days',
        description: "Sichuan's holy trinity — pandas, a 71m Buddha, and a sacred 3,099m summit.",
      },
      {
        icon: 'map',
        title: 'Chengdu → Leshan → Emeishan',
        description:
          'Connected by high-speed trains: Chengdu to Leshan (50 min), Leshan to Emeishan (15 min).',
      },
      {
        icon: 'star',
        title: 'Pandas, Leshan Giant Buddha, Emei Golden Summit',
        description:
          "The world's largest pre-modern statue and one of China's Four Sacred Buddhist Mountains.",
      },
    ],
    experienceTypes: ['culture', 'nature'],
    budget: '$350-550/person',
    overview:
      "This route pairs Chengdu's pandas with two of Sichuan's UNESCO sites, both reachable within 2 hours by high-speed train. Leshan Giant Buddha is a 71m Maitreya carved into a red sandstone cliff at the confluence of three rivers — it took 90 years to complete (713-803 AD) and is the world's largest pre-modern statue. Mount Emei is one of China's Four Sacred Buddhist Mountains, with a 3,099m summit where the sunrise creates a 'Buddha's halo' optical phenomenon.",
    faqQ: 'Can I visit Leshan and Emeishan in one day?',
    faqA: "It's tight but possible: morning at Leshan Giant Buddha (2-3 hours), then a 45-minute train to Emeishan and take the bus to the midway point (Wannian Temple). But two days is better — one day for Leshan, one for Emeishan summit. Rushing both in one day means you won't see Emei's golden summit, which is the whole point.",
    stops: [
      {
        day: 'Day 1: Chengdu → Leshan → Emeishan',
        content:
          'Morning: Chengdu Panda Base (7:30am). Then take the 50-minute high-speed train from Chengdu South to Leshan (¥54). Visit the Leshan Giant Buddha — walk down the cliffside staircase to see the Buddha from the base (the feet alone are 8.5m wide, each toenail fits a seated person). Take the ferry (¥70) for the frontal river-level view. Afternoon: train from Leshan to Emeishan (15 min, ¥11). Stay at the base town (Baoguo Temple area).',
        tip: "The Leshan Buddha staircase has 250 steps and queues can be 2+ hours on weekends. Go on a weekday, or take the ferry instead — it's faster and gives a better frontal view for photos.",
      },
      {
        day: 'Day 2: Emeishan Summit',
        content:
          'Take the 6am shuttle bus from the base to Leidongping (2 hrs, ¥90 round trip). From Leidongping, walk 20 minutes to the cable car station, then take the cable car (¥65 up) to the Golden Summit (金顶) at 3,099m. The 48m golden statue of Samantabhadra (Puxian) on the summit is stunning against the clouds. On clear days, you can see the Gongga Mountains 100 km away. Walk down via the Wannian Temple path (or take the cable car back if short on time). Evening: return to Chengdu by train.',
        tip: "Emeishan entrance: ¥160 (2-day validity). The summit is 15°C colder than the base — bring layers even in summer. The monkeys on the trail are aggressive and will grab food/water bottles. Don't carry visible food and don't make eye contact.",
      },
      {
        day: 'Day 3: Chengdu Food & Culture',
        content:
          'Morning: Jinli Ancient Street and Wuhou Temple (Three Kingdoms history). Afternoon: Sichuan cooking class — learn to make kung pao chicken, mapo tofu, and dan dan noodles (half-day classes from ¥200). Evening: Sichuan opera at Shufeng Yayun Teahouse — face-changing, fire-spitting, and hand-shadow performances.',
        tip: 'The Sichuan opera face-changing (变脸) is genuinely impressive — performers change masks in a split second with a flick of the head. Shufeng Yayun (¥150-280) is the best show in Chengdu. Book evening tickets the day before.',
      },
    ],
    practical: [
      {
        title: 'Getting Around',
        body: 'High-speed trains connect Chengdu, Leshan (50 min), and Emeishan (15 min from Leshan). All bookable on Trip.com or 12306. Emeishan base to summit requires the park shuttle bus + cable car (no private cars allowed).',
      },
      {
        title: 'Where to Stay',
        body: 'Emeishan base: near Baoguo Temple ($25-60/night). For sunrise, stay at the Golden Summit (Jinding Hotel, ¥400-800/night) or Leidongping (¥200-400/night). Leshan: day trip from Chengdu or Emei — no need to stay overnight.',
      },
      {
        title: 'Best Season',
        body: 'April-May and September-November. Emeishan summit is below freezing in winter (Dec-Feb) but the snow-covered temples are beautiful. Summer (June-August) is rainy and the summit is often clouded in.',
      },
    ],
    related: [
      {
        href: '/sichuan/chengdu-jiuzhaigou-huanglong',
        label: 'Jiuzhaigou Route',
        description: 'Add the turquoise lakes and travertine pools.',
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Jiuzhaigou turquoise lake',
        days: '5-6 days',
      },
      {
        href: '/sichuan/chengdu-in-depth',
        label: 'Chengdu In Depth',
        description: 'Go deeper into pandas, hot pot, and tea house culture.',
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Chengdu panda',
        days: '3-4 days',
      },
      {
        href: '/sichuan/chengdu-daocheng-yading',
        label: 'Daocheng Yading',
        description: 'Extend to the Last Shangri-La for high-altitude adventure.',
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Daocheng Yading',
        days: '7-8 days',
      },
    ],
  },
  {
    slug: 'chengdu-in-depth',
    metaTitle: 'Chengdu In Depth (3-4 Days) | Sichuan Food & Culture Guide',
    metaDesc:
      "A deep dive into Chengdu: pandas, Sichuan cuisine, tea houses, Jinli Street, and the Leshan Giant Buddha day trip — China's most laid-back city.",
    kicker: 'Sichuan',
    title: 'Chengdu In Depth: Pandas, Hot Pot & Tea Houses',
    subtitle:
      "China's most laid-back city — spend your mornings with pandas, afternoons in 100-year-old tea houses, and evenings sweating through Sichuan hot pot.",
    duration: '3-4 days',
    route: 'Chengdu city + Leshan day trip option',
    heroImage: '/images/destinations/sichuan.webp',
    heroImageAlt: 'Chengdu skyline with Jinli Ancient Street',
    highlights: [
      {
        icon: 'clock',
        title: '3-4 Days',
        description:
          "The perfect deep dive into China's most laid-back city — pandas, parks, and Sichuan food.",
      },
      {
        icon: 'map',
        title: 'Chengdu',
        description:
          "Sichuan's capital — the panda capital of the world and the spiritual home of China's boldest cuisine.",
      },
      {
        icon: 'star',
        title: 'Pandas, Tea Houses, Sichuan Hot Pot',
        description:
          'Breakfast with pandas, afternoon tea in a bamboo grove, and the numbing-spicy broth that defines Sichuan.',
      },
    ],
    experienceTypes: ['culture', 'culinary'],
    budget: '$300-500/person',
    overview:
      'Chengdu is the city Chinese people dream of retiring to. The pace is slower, the food is bolder, and the tea house culture — old men playing mahjong in bamboo groves — is still alive. This guide goes deep on the city itself, with optional day trips to Leshan and the Dujiangyan irrigation system.',
    faqQ: 'Is 3 days enough for Chengdu?',
    faqA: '3 days covers the essentials: pandas, Sichuan food, a tea house, and one day trip (Leshan or Dujiangyan). 4 days lets you add a cooking class and explore the Jinli/Wuhouci area more deeply. Chengdu rewards slow travel — you can easily spend a week just eating.',
    stops: [
      {
        day: 'Day 1: Pandas & Parks',
        content:
          "Panda Base (7:30am-11am), then People's Park — drink jasmine tea at Heming Teahouse, watch the matchmaking corner (parents post their children's resumes on umbrellas looking for marriage partners), and get your ears cleaned by a professional ear-picker (¥30, a Chengdu tradition). Evening: Sichuan hot pot at Shujiuxiang or Dalongyi.",
        tip: "The matchmaking corner at People's Park is surreal — hundreds of parents with printed sheets listing their child's age, height, salary, and housing status. It's a uniquely Chengdu experience. Weekends are busiest.",
      },
      {
        day: 'Day 2: Leshan Giant Buddha Day Trip',
        content:
          "Take the 50-minute high-speed train to Leshan (¥54). Visit the 71m Buddha — walk the cliffside stairs or take the river ferry. Lunch: Leshan's famous qiaojiao beef (跷脚牛肉) — a medicinal beef soup. Return to Chengdu by late afternoon. Evening: Jinli Ancient Street for lantern-lit shopping and street snacks.",
        tip: "Leshan's qiaojiao beef is legendary. The best is at Feng Siniang (冯四孃跷脚牛肉) near the Buddha scenic area. Order the mixed beef soup (¥38) and the blood curd (¥15).",
      },
      {
        day: 'Day 3: Culture & Cooking',
        content:
          'Morning: Wuhou Temple (Three Kingdoms history, ¥60) and Jinli Street (adjacent). Afternoon: Sichuan cooking class — learn dan dan noodles, kung pao chicken, and mapo tofu. Evening: Kuanzhai Alley (宽窄巷子) — Qing dynasty courtyard houses converted into bars, tea houses, and restaurants. Then Sichuan opera at Shufeng Yayun.',
        tip: 'Cooking classes in Chengdu run ¥200-350 for a half-day. The best include a market tour to buy ingredients first. The Cooking Club Chengdu and Chilli Cool China both have excellent English-speaking instructors.',
      },
      {
        day: 'Day 4 (optional): Dujiangyan & Qingcheng',
        content:
          "Day trip to Dujiangyan — a 2,300-year-old irrigation system that still works today, diverting the Min River without a single dam. It's a UNESCO site and an engineering marvel. Afternoon: Qingcheng Mountain, one of Daoism's birthplaces. The front mountain has temples and pavilions; the back mountain is wilder with waterfalls and fewer tourists.",
        tip: 'Dujiangyan is 1 hour from Chengdu by high-speed train from Xipu Station (¥10!). The panda base at Dujiangyan (Panda Valley) is less crowded than the Chengdu one and you can volunteer as a panda keeper (¥700, book 1 month ahead).',
      },
    ],
    practical: [
      {
        title: 'Getting There',
        body: 'Chengdu Tianfu International (TFU) has direct flights from London, Amsterdam, Seoul, Tokyo, and major Asian hubs. Shuangliu (CTU) handles domestic flights. Metro Line 18 connects Tianfu to downtown (50 min, ¥10).',
      },
      {
        title: 'Where to Stay',
        body: 'Chunxi Road area for shopping and convenience ($50-120/night). Jinli/Wuhouci area for atmosphere ($40-100/night). For a splurge: The Temple House (¥1,500-2,500/night) — a boutique hotel built into a restored Qing dynasty courtyard.',
      },
      {
        title: 'What to Eat',
        body: "Sichuan food is NOT just spicy — it's 麻辣 (numbing-spicy) from Sichuan peppercorns. Must-try: mapo tofu (麻婆豆腐), kung pao chicken (宫保鸡丁), dan dan noodles (担担面), twice-cooked pork (回锅肉), and shuizhu yu (水煮鱼 — fish in a cauldron of chillies). For hot pot, the old-school places (蜀九香, 大龙燚) are better than Haidilao.",
      },
    ],
    related: [
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
    ],
  },
  {
    slug: 'chengdu-daocheng-yading',
    metaTitle: "Chengdu-Daocheng Yading (7-8 Days) | Sichuan's Last Shangri-La",
    metaDesc:
      'Journey from Chengdu to Daocheng Yading Nature Reserve — three sacred snow mountains, turquoise lakes, and Tibetan plateau scenery on a 7-8 day Sichuan adventure.',
    kicker: 'Sichuan',
    title: 'Daocheng Yading: The Last Shangri-La',
    subtitle:
      "Three sacred snow mountains at 6,000m, turquoise glacier lakes, and Tibetan plateau grasslands — Sichuan's wildest landscape, 800 km west of Chengdu.",
    duration: '7-8 days',
    route: 'Chengdu → Kangding → Litang → Daocheng → Yading → Chengdu',
    heroImage: '/images/destinations/sichuan.webp',
    heroImageAlt: 'Daocheng Yading snow mountains and turquoise lake',
    highlights: [
      {
        icon: 'clock',
        title: '7-8 Days',
        description:
          "An epic journey from Chengdu to 4,700m — Sichuan's wildest and most remote landscape.",
      },
      {
        icon: 'map',
        title: 'Chengdu → Kangding → Litang → Yading',
        description: "800 km west of Chengdu on the G318 highway — China's Route 66 to Tibet.",
      },
      {
        icon: 'star',
        title: 'Three Sacred Peaks, Milk Lake, Five-Color Lake',
        description:
          'Chenrezig (6,032m), Jampelyang (5,958m), and Chanadorje (5,958m) ring glacier-fed lakes so blue they look Photoshopped.',
      },
    ],
    experienceTypes: ['nature', 'adventure'],
    budget: '$800-1,200/person',
    overview:
      "Daocheng Yading (稻城亚丁) is what happens when you cross the Tibetan Plateau with Yosemite. Three sacred peaks — Chenrezig (6,032m), Jampelyang (5,958m), and Chanadorje (5,958m) — ring a valley of glacier-fed lakes so blue they look Photoshopped. The route from Chengdu climbs from 500m to 4,700m over the Tibetan Plateau, passing through Kangding (the gateway to Tibetan Sichuan), Xinduqiao (the 'photographer's paradise'), and Litang (a 4,000m grassland town that's the birthplace of the 7th Dalai Lama).",
    faqQ: 'How difficult is the Yading hike?',
    faqA: "The main hike to Milk Lake (4,600m) and Five-Color Lake (4,700m) is a 10 km round trip from Luorong Pasture (4,180m). It gains 500m elevation and takes 6-8 hours. The altitude makes it challenging — the air has 60% of sea-level oxygen. You don't need technical skills, but you need to be fit and acclimatised. Horses are available for the first 3 km (¥300 one-way).",
    stops: [
      {
        day: 'Day 1: Chengdu → Kangding (2,560m)',
        content:
          "Drive 4.5 hours west from Chengdu on the G318 highway. The road climbs through the Erlangshan Tunnel (8.6 km, China's longest high-altitude tunnel) and emerges into a completely different world — Tibetan prayer flags, stone houses, and yak herds. Kangding is the historic border town between Han China and Tibet. Walk the old town and visit the Paoma Mountain.",
        tip: "The G318 is the 'National Highway 318' — China's Route 66 from Shanghai to Tibet. The Chengdu-Kangding section is paved and well-maintained. A private car with driver costs ¥1,200-1,500/day.",
      },
      {
        day: 'Day 2: Kangding → Xinduqiao → Litang (4,014m)',
        content:
          "Cross the 4,298m Zheduo Pass — the first time you break 4,000m. Stop at Xinduqiao, a small Tibetan town famous among Chinese photographers for the golden poplar trees and distant snow peaks. Continue to Litang through the 4,700m Kazila Pass. Litang is one of the world's highest towns at 4,014m — the sky is a deeper blue and you'll feel the altitude. Visit the Litang Monastery and the grasslands outside town.",
        tip: "Litang is where you really feel the altitude. Take diamox if you have it. Drink 3-4 litres of water. Don't shower on your first night at 4,000m+ (the steam and heat can trigger altitude sickness). The Litang Monastery was founded in 1580 and is the largest Gelugpa monastery in southern Sichuan.",
      },
      {
        day: 'Day 3: Litang → Daocheng (3,750m)',
        content:
          'Drive 3 hours south to Daocheng. The road passes through the Haizi Mountain scenic area — a landscape of glacial boulders and 1,145 alpine lakes at 4,500m, looking like a giant scattered marbles across a moonscape. Daocheng town is a pleasant Tibetan county seat with white-walled houses and poplar-lined streets. Visit the White Pagoda Park and the Daocheng Monastery. Spend the night to acclimatise.',
        tip: "Daocheng has a small airport (DCY) — the world's highest civilian airport at 4,411m. Flights from Chengdu (1 hr, ¥1,200-1,800) land here. If you fly in, spend 2 nights in Daocheng before attempting the Yading hike to acclimatise.",
      },
      {
        day: 'Day 4: Daocheng → Yading Nature Reserve',
        content:
          'Drive 1.5 hours to Yading (the reserve entrance is at Riwacun, 2,900m). Take the park shuttle bus 34 km into the reserve to Yading Village (3,900m) or Longlongba. Spend the afternoon on the short hike to Chonggu Monastery (3,900m) and the Pearl Lake viewpoint — your first close view of Chenrezig (6,032m) reflected in a glacial lake. This is a gentle 3 km walk to acclimatise.',
        tip: "Yading entrance: ¥150 + ¥120 shuttle bus (2-day validity). The last shuttle into the reserve departs at 5pm — don't arrive late or you'll be stuck outside. Yading Village has basic guesthouses (¥100-200/night) — electricity is from generators and hot water is limited.",
      },
      {
        day: 'Day 5: Yading — The Big Hike',
        content:
          'Take the 7am shuttle from Yading Village to Luorong Pasture (4,180m). The hike begins here. Walk 3 km to the Horse Stop (optional horse ¥300), then climb 5 km on a steep rocky path to Milk Lake (4,600m) — a startling turquoise lake at the foot of Jampelyang, fed by a hanging glacier. Continue 500m uphill to Five-Color Lake (4,700m) — smaller but with a colour gradient from deep blue to emerald green. The view of all three peaks from here is the money shot. Descend the same way. Total: 10 km, 6-8 hours.',
        tip: "Start by 7:30am. The weather turns by 2pm — clouds roll in and the peaks disappear. Bring 2L water, high-energy snacks, and rain gear even on sunny days. The last section to Five-Color Lake is a 100m climb on loose rock — poles help. If you're struggling with altitude, skip Five-Color Lake — Milk Lake is the better view.",
      },
      {
        day: 'Day 6: Yading → Daocheng',
        content:
          'Morning: short walk to Xiannairi Snow Mountain viewpoint or the lower section of the valley. Take the shuttle bus out of the reserve by noon. Drive back to Daocheng. Afternoon: hot springs in Daocheng County — the Rupuchaka Hot Springs are natural sulphur pools (¥30) and the perfect post-hike reward.',
        tip: 'The Daocheng hot springs are in Rumuchu Village, 5 km from town. The outdoor pools have mountain views. Bring your own towel and swimsuit — rental ones are questionable.',
      },
      {
        day: 'Day 7: Daocheng → Chengdu',
        content:
          'Fly from Daocheng Yading Airport (DCY) to Chengdu (1 hr, ¥1,200-1,800) — the takeoff at 4,411m is an experience in itself. Or drive back via the southern route through Xiangcheng and Shangri-La (2 days). Evening in Chengdu: celebratory hot pot.',
        tip: 'Daocheng Airport flights are frequently delayed or cancelled due to high winds and low visibility. Book a morning flight (best conditions) and have a buffer day. The drive back to Chengdu takes 2 days via the southern route.',
      },
    ],
    practical: [
      {
        title: 'Altitude Safety',
        body: 'This route stays above 3,500m for most of the trip. Acute Mountain Sickness (AMS) is the main risk. Symptoms: headache, nausea, dizziness, insomnia. Prevention: ascend slowly (our itinerary builds in acclimatisation days), drink 3-4L water/day, avoid alcohol, take diamox (prescription only, start 2 days before ascent). If symptoms are severe, descend immediately.',
      },
      {
        title: 'Where to Stay',
        body: 'Kangding: Zhilam Hostel (¥150-300, great for acclimatisation info). Litang: basic Tibetan guesthouses (¥100-200). Daocheng: Tibetan-style hotels (¥200-400). Yading Village: very basic guesthouses (¥100-200, limited electricity).',
      },
      {
        title: 'When to Go',
        body: 'Late September to mid-October is peak — golden grasslands, clear skies, and the larch forests turn brilliant yellow. May-June for wildflowers. The park is closed December-March due to heavy snow. Book accommodation 1-2 months ahead for October.',
      },
    ],
    related: [
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
    ],
  },
  {
    slug: 'chongqing-wulong-dazu',
    metaTitle: 'Chongqing-Wulong-Dazu (3-4 Days) | Mountain City & Rock Carvings',
    metaDesc:
      "Chongqing's mountain city skyline, Wulong's natural sinkholes, and Dazu's 1,000-year-old Buddhist rock carvings — a 3-4 day route through eastern Sichuan.",
    kicker: 'Chongqing',
    title: 'Chongqing, Wulong & Dazu Rock Carvings',
    subtitle:
      "China's most cyberpunk city, a natural limestone bridge formation that looks like Pandora, and 50,000 Buddhist statues carved into cliffs.",
    duration: '3-4 days',
    route: 'Chongqing → Wulong → Dazu → Chongqing',
    heroImage: '/images/destinations/sichuan.webp',
    heroImageAlt: 'Chongqing skyline and river confluence',
    highlights: [
      {
        icon: 'clock',
        title: '3-4 Days',
        description:
          "China's most dramatic city, a natural wonder, and 50,000 Buddhist rock carvings.",
      },
      {
        icon: 'map',
        title: 'Chongqing → Wulong → Dazu',
        description:
          'Connected by high-speed trains. Chongqing is the gateway to the Yangtze River and eastern Sichuan.',
      },
      {
        icon: 'star',
        title: 'Hongyadong, Three Natural Bridges, Dazu Carvings',
        description:
          'An 11-storey cliffside complex, limestone arches from Transformers 4, and 1,000-year-old Buddhist art.',
      },
    ],
    experienceTypes: ['culture', 'nature'],
    budget: '$350-550/person',
    overview:
      "Chongqing is China's most dramatic city — built on steep hills at the confluence of the Yangtze and Jialing rivers, with a skyline that rivals Hong Kong and a metro line that runs through a residential building. Wulong's Three Natural Bridges are colossal limestone arches featured in Transformers 4. Dazu Rock Carvings are 50,000 Buddhist, Daoist, and Confucian statues carved between the 7th and 13th centuries — less famous than Dunhuang but arguably more impressive in scale and preservation.",
    faqQ: 'Is Chongqing worth visiting?',
    faqA: "Absolutely. Chongqing is one of China's most visually spectacular cities — the skyline, the river confluence, the hot pot, and the sheer verticality make it unlike anywhere else. It's also the launching point for Yangtze River cruises and a major food destination (Chongqing hot pot is the fieriest in China).",
    stops: [
      {
        day: 'Day 1: Chongqing City',
        content:
          "Morning: Ciqikou Ancient Town — a 1,000-year-old porcelain trading port with flagstone streets and river views. Afternoon: Hongyadong — an 11-storey stilt-house complex built into a cliff face, lit up like a Chinese fantasy film at night. Evening: Chongqing hot pot at a local place (NOT the tourist ones in Hongyadong). The real Chongqing hot pot is 90% chillies and 10% broth — locals say 'if you're not crying, it's not hot enough'.",
        tip: 'Hongyadong is beautiful but insanely crowded. The best view is from the Qiansimen Bridge across the Jialing River — you see the full cliffside complex without the crowds. Go at 8pm when the lights come on.',
      },
      {
        day: 'Day 2: Wulong Karst',
        content:
          "Take the 2-hour high-speed train from Chongqing North to Wulong (¥65). Wulong's Three Natural Bridges are three massive limestone arches — Tianlong (Sky Dragon, 235m high), Qinglong (Azure Dragon), and Heilong (Black Dragon) — spanning a 1.2 km gorge. You walk through the gorge floor looking up at arches big enough to fit a 30-storey building. The site also includes the Houping Giant Sinkhole, a 300m-deep limestone crater. Return to Chongqing by evening.",
        tip: "Wulong entrance: ¥135 including shuttle bus. The site was used as a filming location for Transformers: Age of Extinction (the scene where Optimus Prime fights the Dinobots). There's a (tacky) statue of a Transformer at the entrance.",
      },
      {
        day: 'Day 3: Dazu Rock Carvings',
        content:
          "Take the 1-hour high-speed train from Chongqing West to Dazu (¥45), then a 30-minute bus to the carvings. The Beishan (North Hill) site has 10,000 statues from the late Tang dynasty (9th century) — intricate, graceful, and well-preserved. The Baodingshan (Treasure Top Mountain) site is the masterpiece: a 500m cliff face with 10,000 figures carved into a continuous narrative of Buddhist hell and paradise, created between 1174-1252 under the monk Zhao Zhifeng. The 'Hell Scenes' panel is gruesome and unforgettable.",
        tip: 'Dazu is ¥135 for Beishan + Baodingshan. Baodingshan alone is ¥115 and is the better site if you only have time for one. The carvings are exposed (no caves like Dunhuang) so visit on a clear day. The museum at Baodingshan is excellent for context.',
      },
      {
        day: 'Day 4 (optional): Chongqing Deep Dive',
        content:
          "Morning: take the Yangtze River Cableway (¥20) — a gondola across the river with skyline views. Visit the Three Gorges Museum (free, excellent overview of the Yangtze and the dam project). Afternoon: Eling Park for the best panoramic view of Chongqing's skyline. Evening: the 'ghost town' of Fengdu or prepare for your Yangtze cruise departure.",
        tip: 'The Yangtze Cableway queue is 30-60 min on weekends. Go before 9am or take it from the south bank (less busy direction). The Three Gorges Museum is genuinely world-class — budget 2 hours.',
      },
    ],
    practical: [
      {
        title: 'Getting There',
        body: "Chongqing Jiangbei Airport (CKG) has international flights from Seoul, Bangkok, Singapore, and domestic from everywhere. The metro connects the airport to downtown (Line 3, ¥7). Chongqing is also a major high-speed rail hub — Chengdu (1 hr, ¥150), Xi'an (5 hrs, ¥280).",
      },
      {
        title: 'Where to Stay',
        body: 'Jiefangbei area for the skyline views ($50-120/night). Nanbin Road (south bank) for river views of the Hongyadong skyline ($40-100/night). The Regent Chongqing has the best river-view rooms (¥1,200-2,000).',
      },
      {
        title: 'Chongqing Hot Pot Guide',
        body: "Real Chongqing hot pot uses 牛油 (beef tallow) as the base, not vegetable oil. It is SIGNIFICANTLY spicier than Chengdu hot pot. Order: tripe (毛肚, 15 seconds), aorta (黄喉, 30 seconds), beef (嫩牛肉), and lotus root (藕片). Dip in sesame oil (not soy sauce) to cut the heat. The best local places are in the Shapingba and Nan'an districts.",
      },
    ],
    related: [
      {
        href: '/sichuan/chengdu-in-depth',
        label: 'Chengdu In Depth',
        description: 'Pandas, tea houses, and the original Sichuan hot pot — 1 hour by train.',
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Chengdu panda',
        days: '3-4 days',
      },
      {
        href: '/yangtze-cruise/chongqing-yichang-cruise',
        label: 'Yangtze River Cruise',
        description: 'Three Gorges cruise departing from Chongqing.',
        image: '/images/destinations/yangtze-cruise.webp',
        imageAlt: 'Three Gorges',
        days: '4-5 days',
      },
      {
        href: '/golden-triangle/beijing-xian-shanghai',
        label: "Beijing, Xi'an & Shanghai",
        description: 'The classic Golden Triangle for first-time visitors.',
        image: '/images/destinations/golden-triangle.webp',
        imageAlt: 'The Forbidden City',
        days: '8-10 days',
      },
    ],
  },
];

for (const r of routes) {
  writePage(DIR, r.slug, r);
  console.log(`✅ ${DIR}/${r.slug}`);
}
console.log(`\nDone. ${routes.length} Sichuan pages.`);
