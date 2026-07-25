import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_DIR = path.resolve(__dirname, "..", "src", "app");
const esc = (s) => (s || "").replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$").replace(/'/g, "\\'");

function writePage(dir, slug, data) {
  const fullDir = path.join(APP_DIR, dir, slug);
  fs.mkdirSync(fullDir, { recursive: true });

  const stopsJs = data.stops
    .map(
      (s) => `  { day: '${esc(s.day)}', content: \`${esc(s.content)}\`, tip: \`${esc(s.tip)}\` }`
    )
    .join(",\n");

  const practicalJs = data.practical
    .map(
      (p) => `  { title: '${esc(p.title)}', body: \`${esc(p.body)}\` }`
    )
    .join(",\n");

  const code = `import { Metadata } from 'next';
import Link from 'next/link';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '${esc(data.metaTitle)} | BeforeChina',
  description: '${esc(data.metaDesc)}',
  alternates: { canonical: '/${dir}/${slug}' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '${esc(data.faqQ)}',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '${esc(data.faqA)}',
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

const STOPS = [
${stopsJs},
];

const PRACTICAL = [
${practicalJs},
];

const NEXT_STEPS = [
${(data.nextSteps || [
  { href: '/visa', label: 'Check visa requirements', description: 'See if you qualify for visa-free entry to China' },
  { href: '/esim', label: 'Get an eSIM for China', description: 'Land with internet that bypasses the firewall' },
  { href: '/payment', label: 'Set up Alipay before you land', description: 'Link your foreign card and be ready to pay' },
]).map(s => `  { href: '${esc(s.href)}', label: '${esc(s.label)}', description: '${esc(s.description)}' }`).join(",\n")},
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>${esc(data.kicker)}</Kicker>
          <h1>${esc(data.title)}</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>${esc(data.subtitle)}</p>
        </div>
      </section>

      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>${esc(data.duration)}</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>${esc(data.route)}</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>${esc(data.budget)}</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>${esc(data.overview)}</p>
          </div>

          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Day-by-Day Itinerary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {STOPS.map((stop) => (
              <div key={stop.day} className="article-card">
                <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--primary-color)' }}>{stop.day}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }}>{stop.content}</p>
                <div style={{ backgroundColor: 'var(--callout-bg-warm)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', fontSize: '14px', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--accent-warm)' }}>Local tip:</strong> {stop.tip}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 64px', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px', paddingTop: '64px' }}>
            <Kicker>Practical Info</Kicker>
            <h2 style={{ fontSize: '32px' }}>Planning This Route</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {PRACTICAL.map((p) => (
              <div key={p.title} className="article-card">
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <TourCTA />
        <NextSteps steps={NEXT_STEPS} />
        <SignatureCard />
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(fullDir, "page.tsx"), code, "utf-8");
}

// ====== YUNNAN ROUTES ======
const DIR = "yunnan";

const routes = [
  {
    slug: "kunming-dali-lijiang-shangri-la",
    metaTitle: "Kunming-Dali-Lijiang-Shangri-La (7-8 Days) | Yunnan Travel Guide",
    metaDesc: "The classic Yunnan route: Stone Forest, Dali Old Town, Lijiang canals, Tiger Leaping Gorge, and Shangri-La's Tibetan monasteries — 7-8 days through China's most diverse province.",
    kicker: "Yunnan · 7-8 Days",
    title: "Kunming-Dali-Lijiang-Shangri-La: The Classic Yunnan Route",
    subtitle: "The ultimate Yunnan backpacker trail — from Kunming's Stone Forest through Dali's lakeside old town and Lijiang's cobblestone canals, to Shangri-La at 3,200m on the Tibetan plateau.",
    duration: "7-8 days",
    route: "Kunming → Dali → Lijiang → Tiger Leaping Gorge → Shangri-La",
    budget: "$600-900/person",
    overview: "This is the classic Yunnan circuit — the route every backpacker does and for good reason. Yunnan is China's most ethnically diverse province, home to 25 of China's 55 recognised ethnic minorities. The route climbs from subtropical Kunming (1,890m) to high-altitude Shangri-La (3,200m), passing through Bai, Naxi, and Tibetan cultures along the way. The infrastructure is excellent — high-speed trains connect Kunming, Dali, and Lijiang — and the food shifts from Yunnan rice noodles to Tibetan butter tea as you climb.",
    faqQ: "How many days do I need for the Kunming-Dali-Lijiang-Shangri-La route?",
    faqA: "7-8 days is the sweet spot. In 7 days you can do Kunming (1 day), Dali (2 days), Lijiang (2 days), Tiger Leaping Gorge (1 day), and Shangri-La (1 day). With 8-9 days, add an extra day in Shangri-La to acclimatise to the 3,200m altitude and visit Songzanlin Monastery.",
    stops: [
      { day: "Day 1: Kunming", content: "Fly into Kunming Changshui (KMG). Spend the day at the Stone Forest (石林) — 90 km southeast of the city, a UNESCO site of limestone pinnacles that look like petrified trees. Afternoon: Green Lake Park (翠湖) for people-watching and the surrounding Yunnan University area. Evening: across-the-bridge noodles (过桥米线) at a local restaurant — this is Yunnan's signature dish.", tip: "Kunming is called the 'City of Eternal Spring' for a reason — temperatures are 15-25°C year-round. The Stone Forest entrance is ¥175. Go early (before 9am) to beat the tour groups from Kunming." },
      { day: "Days 2-3: Dali", content: "Take the 2-hour high-speed train from Kunming to Dali (¥145). Dali is a lakeside town backed by the 4,000m Cangshan Mountains, and the old town is a grid of stone-paved streets lined with Bai minority architecture. Day 2: rent an e-bike (¥50/day) and cycle around Erhai Lake — stop at Xizhou Village for traditional Bai architecture and the famous Xizhou baba flatbread. Day 3: morning hike on Cangshan (take the cable car to 2,600m, then walk the Cloud Traveller's Path), afternoon exploring Dali Old Town and the Three Pagodas.", tip: "Skip the overpriced lakeside cafes aimed at tourists. Eat at the evening market near the South Gate — grilled Erhai lake fish (¥30), cross-bridge noodles (¥15), and the best grilled eggplant you'll ever eat." },
      { day: "Days 4-5: Lijiang", content: "Take the train from Dali to Lijiang (1.5 hrs, ¥80). Lijiang's old town (Dayan) is a UNESCO World Heritage site — a maze of cobblestone alleys, wooden bridges, and canals built by the Naxi people 800 years ago. Day 4: walk the old town, climb to Wangu Tower for the panoramic view, visit the Black Dragon Pool for the classic photo of Jade Dragon Snow Mountain reflected in the water. Day 5: Shuhe Ancient Town (4 km north, less touristy) and Baisha Village for the 500-year-old Ming dynasty murals.", tip: "Lijiang Old Town charges an ¥80 'maintenance fee' — but enforcement is lax and most travellers skip it. If asked at the gate, say you're staying at a hotel inside and they'll wave you through." },
      { day: "Day 6: Tiger Leaping Gorge", content: "Take a 2-hour minibus from Lijiang to Qiaotou (¥40). Tiger Leaping Gorge is one of the world's deepest river canyons — the Jinsha River cuts between Jade Dragon Snow Mountain (5,596m) and Haba Snow Mountain (5,396m), a vertical drop of 3,900m. The classic high trail is 22 km and takes 6-8 hours. Start at Jane's Guesthouse, hike to the Tea Horse Guesthouse for lunch (km 12, the best view), then continue to Tina's Guesthouse for the night. If you're short on time, do the first 12 km to Tea Horse and back — it has the best views.", tip: "The high trail is well-marked but has exposed cliff sections. Wear hiking shoes — the path is dusty and rocky. The Naxi Guesthouse at km 5 sells water and snacks. In rainy season (July-August), check if the trail is open before you go." },
      { day: "Day 7: Shangri-La", content: "From Tina's Guesthouse, take a 3-hour bus to Shangri-La (Zhongdian, 3,200m). Shangri-La is a Tibetan-majority town renamed in 2001 to cash in on the Lost Horizon mystique — but it genuinely feels different from anywhere else in Yunnan. Visit Songzanlin Monastery (the 'Little Potala Palace', built 1679, housing 700 monks), then walk the old town around Dukezong — the world's largest prayer wheel is here (21m tall, takes several people to turn). Evening: try yak hot pot and butter tea.", tip: "Shangri-La is at 3,200m — you will feel the altitude. Walk slowly, drink water, skip alcohol on your first night. Songzanlin Monastery is ¥115 — go in the morning when the monks are chanting." },
      { day: "Day 8 (optional): Shangri-La → Fly Out", content: "If you have an 8th day, visit Pudacuo National Park — alpine lakes, meadows, and forests 22 km east of town (¥100, half-day trip). Fly out from Diqing Shangri-La Airport (DIG) to Kunming or direct to Chengdu/Chongqing for onward travel.", tip: "Diqing Airport has flights to Kunming (1 hr, ¥400-600), Chengdu (1.5 hrs), and Chongqing. Book a few days ahead — flights are less frequent than from Kunming." },
    ],
    practical: [
      { title: "Getting Between Cities", body: "High-speed trains connect Kunming → Dali (2 hrs, ¥145) and Dali → Lijiang (1.5 hrs, ¥80). Lijiang → Tiger Leaping Gorge is by minibus (2 hrs, ¥40). Tiger Leaping Gorge → Shangri-La is by bus (3 hrs, ¥60). All routes are well-served and bookable day-of except during Chinese holidays." },
      { title: "Where to Stay", body: "Kunming: near Green Lake Park ($30-60/night). Dali: inside the old town or by Erhai Lake ($25-80/night). Lijiang: in the old town, but avoid the noisy Sifang Street area — the southern end is quieter ($30-80/night). Shangri-La: near Dukezong old town ($30-60/night)." },
      { title: "When to Go", body: "March-May and September-November are best. Spring brings wildflowers; autumn has clear skies and golden leaves. Avoid July-August (rainy season — trails are muddy, mountain views are clouded in) and Chinese New Year (prices double, trains sell out)." },
    ],
  },
  {
    slug: "lijiang-lugu-lake-tiger-leaping-gorge",
    metaTitle: "Lijiang, Lugu Lake & Tiger Leaping Gorge (4-5 Days) | Yunnan",
    metaDesc: "Lijiang old town, the matriarchal Mosuo culture at Lugu Lake, and hiking Tiger Leaping Gorge — a compact 4-5 day Yunnan itinerary.",
    kicker: "Yunnan · 4-5 Days",
    title: "Lijiang, Lugu Lake & Tiger Leaping Gorge",
    subtitle: "A compact Yunnan route focused on Lijiang — the cobblestone old town, the emerald waters of Lugu Lake, and one of the world's deepest canyons.",
    duration: "4-5 days",
    route: "Lijiang → Lugu Lake → Tiger Leaping Gorge → Lijiang",
    budget: "$400-600/person",
    overview: "This shorter Yunnan route skips Kunming and Dali, flying directly into Lijiang and focusing on three highlights within a 4-5 day window. Lugu Lake straddles the Yunnan-Sichuan border and is home to the Mosuo people, one of the world's last matriarchal societies. Tiger Leaping Gorge is one of the deepest river canyons on Earth. Lijiang ties it together as the base.",
    faqQ: "How do I get to Lugu Lake from Lijiang?",
    faqA: "The drive from Lijiang to Lugu Lake takes 4-5 hours by car or minibus (¥80-120). The road is winding but fully paved. There is no train. Most guesthouses in Lijiang can arrange a shared minibus — book the night before. Departures are typically 7-8am.",
    stops: [
      { day: "Day 1: Lijiang Old Town", content: "Fly into Lijiang Sanyi Airport (LJG) — direct flights from Chengdu, Chongqing, Kunming, and major Chinese cities. Spend the day exploring Dayan Old Town: the cobblestone alleys, wooden Naxi houses, and the canals that crisscross the town. Climb to Wangu Tower for the sunset view. Evening: Naxi grilled fish and yak yoghurt in a courtyard restaurant.", tip: "Lijiang Airport is 28 km south of town. The airport shuttle bus (¥20) runs every 30 minutes. A Didi costs ¥80-100." },
      { day: "Days 2-3: Lugu Lake", content: "Take a 4-5 hour minibus from Lijiang to Lugu Lake (depart 7am, arrive by noon). Lugu Lake is at 2,685m, spanning the Yunnan-Sichuan border with crystal-clear emerald water. Spend the afternoon walking the lakeshore. Day 3: take a boat to Liwubi Island (the Mosuo people use traditional dugout canoes), visit a Mosuo family home to learn about the 'walking marriage' tradition, and cycle the 50 km loop around the lake. Stay overnight in Luoshui Village on the Yunnan side.", tip: "The 50 km lake loop takes 4-5 hours by e-bike (¥80 rental). The Sichuan side of the lake is less developed and more authentic. The 'Walking Marriage Bridge' (走婚桥) on the Sichuan side is a wooden bridge through marshland — beautiful at sunset." },
      { day: "Day 4: Tiger Leaping Gorge", content: "Return to Lijiang by minibus (4-5 hrs, leave Lugu Lake at 7am). Transfer directly to Qiaotou for Tiger Leaping Gorge. If you arrive by 2pm, hike the first section of the high trail to Naxi Guesthouse (2 hours, the gentlest section) for sunset views. Stay overnight at a guesthouse on the trail.", tip: "If you're short on time, skip the hike and visit the lower Tiger Leaping Gorge scenic area (¥45) — a 1,000-step staircase down to the river. The rapids here are ferocious, and there is a viewing platform at the bottom." },
      { day: "Day 5 (optional): Return to Lijiang", content: "Complete the hike or take the bus back to Lijiang. Afternoon: Shuhe Ancient Town or Baisha murals before your flight out.", tip: "If flying out on Day 5, book an evening flight. The drive from Tiger Leaping Gorge back to Lijiang Airport takes 2.5 hours." },
    ],
    practical: [
      { title: "Getting There", body: "Fly into Lijiang Sanyi Airport (LJG) from Chengdu, Chongqing, or Kunming. Lijiang has direct flights from most major Chinese cities. The route works as a self-contained short trip or as an add-on after Dali." },
      { title: "Lugu Lake Tips", body: "The lake is at 2,685m — altitude is mild but noticeable. Water temperature is cold year-round (swimming not recommended). Mosuo culture is matriarchal — property passes through the female line and 'marriage' is a walking arrangement where partners live separately. Ask before photographing locals." },
      { title: "Best Season", body: "April-June and September-November. Lugu Lake is stunning in late October when the surrounding forests turn gold. Avoid July-August (rain) and December-February (cold, some guesthouses close)." },
    ],
    nextSteps: [
      { href: '/yunnan/kunming-dali-lijiang-shangri-la', label: 'Full Yunnan route', description: 'Add Kunming, Dali, and Shangri-La to this trip' },
      { href: '/esim', label: 'Get an eSIM for China', description: 'Land with internet that bypasses the firewall' },
      { href: '/visa', label: 'Check visa requirements', description: 'See if you qualify for visa-free entry' },
    ],
  },
  {
    slug: "dali-shaxi-tengchong",
    metaTitle: "Dali-Shaxi-Tengchong (4-5 Days) | Off-the-Beaten-Path Yunnan",
    metaDesc: "Dali's lakeside old town, Shaxi's ancient tea-horse road market, and Tengchong's hot springs and volcanoes — a slower, deeper Yunnan route.",
    kicker: "Yunnan · 4-5 Days",
    title: "Dali, Shaxi & Tengchong: Yunnan's Slow Road",
    subtitle: "Skip the crowds. Dali's Erhai Lake, Shaxi's ancient tea-horse caravanserai, and Tengchong's volcanic hot springs — a Yunnan route for travellers who want depth over checklist.",
    duration: "4-5 days",
    route: "Dali → Shaxi → Tengchong",
    budget: "$400-600/person",
    overview: "This route goes west from Dali into Yunnan's less-visited corners. Shaxi is a preserved market town on the ancient Tea Horse Road — what Lijiang was 30 years ago. Tengchong is a volcanic border town near Myanmar, famous for hot springs, a well-preserved old town, and the tragic WWII battlefield at the Huitong Bridge. This route has fewer tourists and a slower pace.",
    faqQ: "How do I get from Dali to Tengchong?",
    faqA: "Drive Dali → Shaxi (2.5 hrs), Shaxi → Tengchong (5 hrs via the Baoshan-Tengchong Expressway). There is no direct train — private car or long-distance bus are the options. A private car for the full route costs ¥1,500-2,000 including Shaxi and Tengchong stops.",
    stops: [
      { day: "Day 1: Dali → Shaxi", content: "Start in Dali (fly into Dali Airport or take the train from Kunming). Drive 2.5 hours north to Shaxi (沙溪) — a 2,400-year-old market town on the Tea Horse Road. Shaxi's Sideng Square is ringed by wooden shopfronts and a 600-year-old theatre stage. Walk the cobblestone lanes, visit the Xingjiao Temple (built 1415), and have dinner at a courtyard guesthouse. Shaxi has maybe 20 guesthouses total — it's what Lijiang was before the tour buses arrived.", tip: "Shaxi is best visited on a Friday — the weekly market fills Sideng Square with Bai and Yi villagers selling produce, handicrafts, and the best street snacks in western Yunnan." },
      { day: "Day 2: Shaxi → Tengchong", content: "Morning in Shaxi — hike to the Shibaoshan Grottoes (16 Buddhist cave temples from the Nanzhao Kingdom, 1,200 years old, 30 min drive). Then drive 5 hours to Tengchong. Arrive by evening, check into a hot spring hotel, and soak. Tengchong has 99 volcanoes and 88 hot springs — the town is geothermally active and the hot spring water is genuinely therapeutic.", tip: "Tengchong's Rehai (Hot Sea) Scenic Area has the best public hot springs — ¥288 for the full complex including the 'Big Boiling Pot' (大滚锅) where water emerges at 97°C. Bring your own swimsuit; rentals are overpriced." },
      { day: "Day 3: Tengchong Volcano Park", content: "Morning: Tengchong Volcano National Park — hike up Daying Mountain (the largest dormant volcano, 30-minute climb) for the crater view. The park has 97 volcanic cones, and you can take a hot air balloon ride (¥280, 15 min) over the craters. Afternoon: Heshun Old Town (和顺古镇) — a 600-year-old village of grey-brick courtyard houses built by Tengchong jade merchants who traded across Southeast Asia. The library here is the oldest rural library in China (built 1924).", tip: "Heshun Old Town's entrance fee is ¥55 — but if you stay at a guesthouse inside the old town, the owner can often get you in for free. The morning market in Heshun's main square is excellent for breakfast." },
      { day: "Day 4: WWII History & Fly Out", content: "Morning: National Cemetery of the Fallen (国殇墓园) — Tengchong was the site of a brutal 1944 battle where Chinese forces retook the city from the Japanese. The cemetery holds 3,346 soldiers and is deeply moving. If time permits, visit the Huitong Bridge — a key Burma Road crossing. Afternoon: fly out from Tengchong Tuofeng Airport (TCZ) to Kunming or Chengdu.", tip: "Tengchong Airport has flights to Kunming (1 hr), Chengdu (1.5 hrs), and Chongqing. Book 2-3 days ahead — fewer flights than major cities." },
    ],
    practical: [
      { title: "Getting Around", body: "This route requires a private car or a combination of buses. Dali → Shaxi: 2.5 hrs by car, or bus from Dali North Station to Jianchuan (1.5 hrs) then local minibus to Shaxi (40 min). Shaxi → Tengchong: 5 hrs by car. The roads are good — this is entirely doable." },
      { title: "Where to Stay", body: "Shaxi: Horse Pen 46 or Shaxi Laomadian Lodge (¥200-400/night). Tengchong: Heshun Old Town guesthouses (¥200-500/night) or the Angsana Hot Spring Resort for a splurge (¥800-1,200/night)." },
      { title: "Best Season", body: "March-May and October-November. Tengchong's ginkgo village (银杏村) turns brilliant yellow in late November — worth planning around. Avoid June-September (rainy season, hot springs are less appealing in heat)." },
    ],
    nextSteps: [
      { href: '/yunnan/kunming-dali-lijiang-shangri-la', label: 'Classic Yunnan route', description: 'The main backpacker trail through Yunnan' },
      { href: '/esim', label: 'Get an eSIM for China', description: 'Land with internet that bypasses the firewall' },
    ],
  },
  {
    slug: "xishuangbanna-tropical",
    metaTitle: "Xishuangbanna Tropical Rainforest (3-4 Days) | Yunnan Travel Guide",
    metaDesc: "Xishuangbanna: Dai minority culture, tropical rainforest, wild elephants, and Mekong River sunsets in southern Yunnan — China's Southeast Asia.",
    kicker: "Yunnan · 3-4 Days",
    title: "Xishuangbanna: China's Tropical Southeast Asia",
    subtitle: "Southern Yunnan's Dai heartland — tropical rainforest, wild elephants, Mekong River sunsets, and temples that look more like Thailand than China.",
    duration: "3-4 days",
    route: "Jinghong → Menglun → Mengla → Jinghong",
    budget: "$300-500/person",
    overview: "Xishuangbanna (西双版纳) sits at 21°N — the same latitude as Hawaii and at China's southern tip bordering Laos and Myanmar. The Dai people have lived here for 2,000 years, and their culture — Theravada Buddhism, stilt houses, spicy-sour food — has more in common with Thailand and Laos than Han China. This is where Chinese tourists go for a 'tropical paradise' experience, but Western tourists have barely discovered it.",
    faqQ: "When is the best time to visit Xishuangbanna?",
    faqA: "November to February is the dry season with pleasant temperatures (20-30°C) — this is the best time. March-April is hot (35°C+) but you can catch the Dai Water Splashing Festival (April 13-15), the biggest Dai celebration of the year. May-October is rainy season — daily downpours, high humidity, but the rainforest is at its most lush.",
    stops: [
      { day: "Day 1: Jinghong", content: "Fly into Xishuangbanna Gasa Airport (JHG) — direct flights from Kunming (1 hr), Chengdu, Chongqing, and major cities. Jinghong is the capital and feels more like a Southeast Asian town than a Chinese city: palm-lined streets, golden-roofed Dai temples, and the Mekong (called Lancang here) flowing through. Visit Manting Park — a former Dai royal garden with a temple and daily elephant show — and Gaozhuang Night Market in the evening for Dai barbecue and papaya salad.", tip: "Gaozhuang Night Market is massive — one of Yunnan's best night markets. Try the grilled Mekong fish (¥30), Dai-style papaya salad (som tam, ¥15), and sticky rice in bamboo tubes (¥10). The market runs from 6pm to midnight." },
      { day: "Day 2: Wild Elephant Valley & Dai Villages", content: "Morning: Wild Elephant Valley (野象谷, 40 km north of Jinghong) — a nature reserve protecting Asia's last wild elephants. There's a 2 km elevated walkway through the canopy, and if you're lucky (best Feb-March), wild elephants come to the river to drink. There's also an elephant show (the ethics are debatable, but the wild encounters are genuine). Afternoon: visit a Dai village — Manzhang Village or Ganlanba — to see traditional stilt houses, Dai weaving, and taste Dai cuisine.", tip: "Wild elephants are most active at dawn and dusk. Arrive at 8am when the park opens for the best chance of sightings. The walkway is wheelchair-accessible and takes about 2 hours." },
      { day: "Day 3: Menglun Tropical Botanical Garden", content: "Drive 1.5 hours east to the Menglun Tropical Botanical Garden — China's largest botanical garden, covering 900 hectares on a Mekong island. It has 13,000 plant species including a palm garden, orchid house, and a 'vine garden' where 100m-long rattan vines hang from 40m trees. It's genuinely world-class. Spend 3-4 hours walking. Afternoon: return to Jinghong via Mengyang for a tea tasting at a Puer tea plantation.", tip: "The botanical garden is ¥80 — worth every yuan. The best sections are the Palm Garden and the Tropical Rainforest section. A golf cart tour (¥50) covers the highlights in 2 hours if you're short on time." },
      { day: "Day 4 (optional): Mengla & Border", content: "Drive 3 hours to Mengla on the Laos border — the tropical rainforest here is the most intact in China. Visit the Wangtianshu (望天树) scenic area — a canopy walkway 36m above the forest floor suspended between towering Parashorea trees. It's the highest tree-top walkway in Asia. Fly out from Jinghong in the evening.", tip: "You can technically cross into Laos at the Mohan-Boten border (open 8am-6pm) — but you need a Laos visa in advance and onward transport on the Laos side is limited. Most visitors just visit the Chinese border area." },
    ],
    practical: [
      { title: "Getting There", body: "Fly into Xishuangbanna Gasa Airport (JHG). Direct flights from Kunming (1 hr, ¥400-600), Chengdu (2 hrs), Chongqing (2 hrs), and major cities. No train yet (the China-Laos railway passes through but has limited tourist stops)." },
      { title: "Where to Stay", body: "Jinghong: near Gaozhuang or along the Lancang River ($30-80/night). For a splurge: Anantara Xishuangbanna (¥1,200-2,000/night) — a luxury resort built in Dai architectural style by the river." },
      { title: "What to Eat", body: "Dai cuisine is spicy, sour, and herbaceous — totally different from northern Chinese food. Must-try: pineapple rice (菠萝饭), lemongrass grilled fish (香茅草烤鱼), Dai-style papaya salad, and the 'Dai family feast' (傣家宴) where a dozen small dishes are served on a banana leaf." },
    ],
    nextSteps: [
      { href: '/yunnan/kunming-dali-lijiang-shangri-la', label: 'Classic Yunnan route', description: 'Combine with the main Yunnan backpacker trail' },
      { href: '/esim', label: 'Get an eSIM for China', description: 'Land with internet that bypasses the firewall' },
    ],
  },
  {
    slug: "kunming-dongchuan-yuanyang",
    metaTitle: "Kunming-Dongchuan-Yuanyang Rice Terraces (5-6 Days) | Yunnan",
    metaDesc: "Photograph Dongchuan Red Land and Yuanyang Rice Terraces — two of China's most spectacular landscapes — on a 5-6 day photography-focused Yunnan route.",
    kicker: "Yunnan · 5-6 Days",
    title: "Dongchuan Red Land & Yuanyang Rice Terraces",
    subtitle: "A photographer's dream — the iron-red soils of Dongchuan and the mirror-like flooded terraces of Yuanyang, two of China's most photogenic landscapes.",
    duration: "5-6 days",
    route: "Kunming → Dongchuan → Kunming → Yuanyang",
    budget: "$400-600/person",
    overview: "This route is built for photographers. Dongchuan's Red Land, 250 km northeast of Kunming, has iron-rich soil that glows crimson at sunrise. Yuanyang's rice terraces, 330 km south, have been carved into the Ailao Mountains by the Hani people over 1,300 years — 3,000 steps from river to summit, each one flooded and reflecting the sky like a giant's staircase of mirrors.",
    faqQ: "When are the Yuanyang rice terraces flooded?",
    faqA: "November to March is the flooded season — the terraces are filled with water and reflect the sky, creating the iconic mirror effect. This is the best time for photography. April-October the terraces are green with growing rice, which is still beautiful but less dramatic for photos.",
    stops: [
      { day: "Day 1: Kunming → Dongchuan", content: "Drive 3.5 hours from Kunming to Dongchuan Red Land (东川红土地). The soil here contains iron oxide that turns brilliant red after rain. Arrive by mid-afternoon and photograph the sunset at Luoxiagou (Falling Sun Valley) — the red fields, green barley, and golden buckwheat create colour blocks like a painter's palette. Stay at a local farmhouse guesthouse.", tip: "The best Dongchuan photos are taken 1-2 days after rain, when the iron oxide is most vivid. Check the weather before making the trip — if it's been dry for a week, the colours are muted." },
      { day: "Day 2: Dongchuan → Kunming", content: "Sunrise at Damakan (the most famous viewpoint — a lone tree silhouetted against the red hills). Morning: photograph the red land from Jinxiuyuan and Qicaipo viewpoints. The light is best from 7-10am. Drive back to Kunming by afternoon. Evening: overnight train or rest before tomorrow's journey to Yuanyang.", tip: "Dongchuan's guesthouses are basic (¥100-150/night) — bring toilet paper and hand sanitiser. The farmhouse food is excellent: free-range chicken, wild mushrooms, and homegrown vegetables." },
      { day: "Day 3: Kunming → Yuanyang", content: "Drive 5-6 hours from Kunming to Yuanyang Rice Terraces. The road is winding — the terraces are carved into mountains at 1,200-2,000m. Arrive by late afternoon and photograph sunset at Bada scenic area — this is the classic wide-angle view of thousands of terraces cascading down the mountainside. Stay in Xinjie Town or at a guesthouse in Duoyishu village.", tip: "The Yuanyang entrance ticket is ¥100 (valid for 3 days, covers all viewpoints). Buy it at the entrance gate 30 km before Xinjie — you cannot buy tickets at the viewpoints themselves." },
      { day: "Day 4: Yuanyang Terraces", content: "Sunrise at Duoyishu — the most famous sunrise spot in Yuanyang. Arrive by 6am (the platform fills up by 6:30am) to watch the sun rise over the terraces as mist rises from the valley. Morning: Laohuzui (Tiger Mouth) — steep terraces plunging 1,000m into the valley. Afternoon: Qingkou Hani Village — a traditional Hani mushroom-shaped house village. Sunset: either Bada again or Longshuba depending on the light.", tip: "Yuanyang sunrise in January-March is crowded with Chinese photographers — tripods in every direction. The platform at Duoyishu has two levels; the upper level fills first. Go to the lower level for a less obstructed view." },
      { day: "Day 5: Yuanyang → Kunming", content: "Final sunrise at a quiet viewpoint (Shengcun or Mengnong). Visit a morning market in Xinjie or Laomeng — Hani, Yi, and Miao villagers in traditional clothing trading produce, textiles, and handicrafts. Drive back to Kunming (5-6 hrs). Fly out in the evening or stay overnight in Kunming.", tip: "The Hani market in Laomeng (Thursday) is the most authentic. Villagers walk 2-3 hours from mountain villages to trade. The textiles — indigo-dyed hemp — make excellent souvenirs (¥50-150 for a scarf)." },
    ],
    practical: [
      { title: "Photography Tips", body: "Wide-angle lens (16-35mm) for the terraces, telephoto (70-200mm) for details and compression. Tripod essential for sunrise/sunset. A polarising filter helps cut glare off the flooded terraces. Best months: December-February for flooded terraces and clear skies." },
      { title: "Where to Stay", body: "Yuanyang: Duoyishu village has the best sunrise access ($20-50/night, basic). Xinjie Town has more comfort ($30-80/night). Dongchuan: farmhouse guesthouses near the viewpoints ($15-30/night, very basic)." },
      { title: "Getting Around", body: "Both Dongchuan and Yuanyang require a private car. In Kunming, hire a driver for the full route (¥2,500-3,500 for 5-6 days including fuel). Public buses exist but are slow and don't reach the viewpoints." },
    ],
    nextSteps: [
      { href: '/yunnan/kunming-dali-lijiang-shangri-la', label: 'Classic Yunnan route', description: 'Combine with the main Yunnan backpacker trail' },
      { href: '/sichuan/chengdu-jiuzhaigou', label: 'Jiuzhaigou guide', description: 'Another photographer paradise in Sichuan' },
    ],
  },
];

for (const r of routes) {
  writePage(DIR, r.slug, r);
  console.log(`✅ ${DIR}/${r.slug}`);
}
console.log(`\nDone. ${routes.length} Yunnan pages.`);
