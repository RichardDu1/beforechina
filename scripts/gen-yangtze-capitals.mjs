import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_DIR = path.resolve(__dirname, "..", "src", "app");
const esc = (s) => (s || "").replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$").replace(/'/g, "\\'");

function writePage(dir, slug, data) {
  const fullDir = path.join(APP_DIR, dir, slug);
  fs.mkdirSync(fullDir, { recursive: true });
  const stopsJs = data.stops.map((s) => `  { day: '${esc(s.day)}', content: \`${esc(s.content)}\`, tip: \`${esc(s.tip)}\` }`).join(",\n");
  const practicalJs = data.practical.map((p) => `  { title: '${esc(p.title)}', body: \`${esc(p.body)}\` }`).join(",\n");
  const nextSteps = data.nextSteps || [
    { href: '/visa', label: 'Check visa requirements', description: 'See if you qualify for visa-free entry' },
    { href: '/esim', label: 'Get an eSIM for China', description: 'Land with internet that bypasses the firewall' },
    { href: '/payment', label: 'Set up Alipay before you land', description: 'Link your foreign card and be ready to pay' },
  ];
  const nsJs = nextSteps.map(s => `  { href: '${esc(s.href)}', label: '${esc(s.label)}', description: '${esc(s.description)}' }`).join(",\n");

  const code = `import { Metadata } from 'next';
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
    { '@type': 'Question', name: '${esc(data.faqQ)}', acceptedAnswer: { '@type': 'Answer', text: '${esc(data.faqA)}' } },
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

const STOPS = [\n${stopsJs},\n];
const PRACTICAL = [\n${practicalJs},\n];
const NEXT_STEPS = [\n${nsJs},\n];

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
}`;
  fs.writeFileSync(path.join(fullDir, "page.tsx"), code, "utf-8");
}

// ====== YANGTZE DELTA (江南) ROUTES ======

const routes = [
  {
    dir: "yangtze-delta", slug: "shanghai-hangzhou-suzhou",
    metaTitle: "Shanghai-Hangzhou-Suzhou (6-7 Days) | The Golden Watertown Triangle",
    metaDesc: "The classic Yangtze Delta route: Shanghai's skyline, Hangzhou's West Lake, Suzhou's classical gardens, and a water town day trip — 6-7 days through China's most prosperous region.",
    kicker: "Yangtze Delta · 6-7 Days", title: "Shanghai, Hangzhou & Suzhou: The Golden Watertown Triangle",
    subtitle: "Shanghai's future-facing skyline, Hangzhou's timeless West Lake, Suzhou's classical gardens, and a water town frozen in the Ming dynasty — the Yangtze Delta in a week.",
    duration: "6-7 days", route: "Shanghai → Hangzhou → Suzhou → Tongli Water Town → Shanghai", budget: "$700-1,000/person",
    overview: "The Yangtze Delta is China's wealthiest and most developed region — but also one of its most beautiful. Within a 1-hour high-speed train radius you have Shanghai (the future), Hangzhou (the romance — Marco Polo called it 'the city of heaven'), and Suzhou (2,500 years of classical gardens and silk). This route connects all three with a water town day trip. It is the ideal first-timer's China trip: easy logistics, excellent infrastructure, and English signage everywhere.",
    faqQ: "How do I get between Shanghai, Hangzhou, and Suzhou?", faqA: "High-speed trains connect all three cities: Shanghai-Hangzhou (1 hr, ¥75), Shanghai-Suzhou (30 min, ¥40), Hangzhou-Suzhou (1.5 hrs, ¥110). No need to rent a car — the trains are frequent (every 20-30 minutes), clean, and the stations have English signage. Book tickets on Trip.com or at the station with your passport.",
    stops: [
      { day: "Day 1: Shanghai", content: "Start on the Bund (外滩) — the 1.5km riverside promenade with colonial buildings on one side and Pudong's futuristic skyline on the other. Walk south toward the Old City and enter Yuyuan Garden (豫园, ¥40) — a 16th-century private garden of rockeries, pavilions, and carp ponds. Lunch: xiaolongbao (soup dumplings) at the Yuyuan branch of Nanxiang Steamed Bun Restaurant (est. 1900). Afternoon: Nanjing Road pedestrian street for the spectacle of Chinese consumerism, then the Shanghai Museum (free, book ahead). Evening: rooftop bar on the Bund for the skyline light show.", tip: "The Bund is best at two times: early morning (6-7am, when locals do tai chi and the light is soft) and evening (6-7pm, when Pudong's lights come on). The evening light show starts at 7pm in summer, 6pm in winter. The Bund promenade gets packed at sunset — arrive 30 minutes early to claim a railing spot." },
      { day: "Day 2: Shanghai", content: "Morning: the French Concession — tree-lined streets of 1920s lane houses (lilong), now filled with boutiques, cafes, and galleries. Rent a bike and cycle through Wukang Road, Anfu Road, and Wulumuqi Road. Visit the Propaganda Poster Art Centre (¥20, a private museum of Mao-era posters in a basement — one of Shanghai's most unique museums). Afternoon: Tianzifang (田子坊), a maze of lane-house alleys turned into artist studios and craft shops. Evening: acrobatics show at Shanghai Circus World (¥200-400).", tip: "The French Concession is best explored by bike — Shanghai has an excellent bike-share system (HelloBike, Meituan Bike). You will need Alipay to unlock bikes. The Propaganda Poster Art Centre is in the basement of an apartment building on Huashan Road — look for the small sign at the entrance. It closes at 4:30pm." },
      { day: "Day 3: Shanghai → Hangzhou", content: "Take the 1-hour high-speed train from Shanghai Hongqiao to Hangzhou East (¥75). Check in, then head to West Lake (西湖). Walk the Su Causeway (苏堤) — a 2.8km tree-lined dyke crossing the lake, built in 1090 by Su Dongpo, the poet-governor of Hangzhou. Visit the Lingyin Temple (灵隐寺, ¥75) — one of China's largest Buddhist temples, with grottoes of carved Buddha figures dating to the 10th century. Evening: Impression West Lake show (¥280-580), a nighttime spectacle of light, music, and dance on the lake, directed by Zhang Yimou.", tip: "West Lake is free. The Su Causeway is best walked from north to south starting around 4pm — the afternoon light on the lake is beautiful and you will finish near the Leifeng Pagoda for sunset. Rent a public bike (red bikes, ¥1/hr) to circle the entire lake (12 km) in about 90 minutes." },
      { day: "Day 4: Hangzhou", content: "Morning: Longjing tea village (龙井村) — the terraced tea fields where China's most famous green tea is grown. Walk the path from Longjing village to the China Tea Museum (free) through the plantations. Taste fresh Longjing tea at a farmer's house (¥30-50/person). Afternoon: Xixi Wetland Park (¥80) — a network of ponds, streams, and islets on Hangzhou's western edge. Take a traditional pole-boat ride through the wetlands. Evening: Hefang Street for Hangzhou snacks — dongpo rou (东坡肉, braised pork belly) and pianerchuan noodles (片儿川).", tip: "Longjing tea has different grades. The best (Mingqian Longjing) is picked before the Qingming Festival (early April) and costs ¥500-1,000/50g. What farmers serve you at tastings is usually the lower-grade summer harvest. Buy tea at the village cooperative, not from touts at the bus stop." },
      { day: "Day 5: Hangzhou → Suzhou", content: "Take the 1.5-hour high-speed train from Hangzhou East to Suzhou (¥110). Suzhou's classical gardens are UNESCO World Heritage — nine of them. You cannot see all nine. Visit two: the Humble Administrator's Garden (拙政园, ¥80, the largest and most famous) and the Lingering Garden (留园, ¥55, smaller and more intimate). Between gardens, walk Pingjiang Road (平江路) — a 1,600-year-old canal street lined with whitewashed Ming-Qing houses, tea houses, and silk shops.", tip: "Suzhou gardens are at their best in rain — the dripping water, mist, and reflections are what the garden designers intended. Don't let rain stop you. The Humble Administrator's Garden opens at 7:30am — go at opening to experience it before the tour groups arrive at 9am. It transforms from a peaceful garden to a crowded theme park within 90 minutes." },
      { day: "Day 6: Suzhou → Water Town → Shanghai", content: "Morning: choose one water town. Tongli (同里, ¥100) is 30 minutes from Suzhou by metro — canals, stone bridges, and the Tuisi Garden (a UNESCO garden within the town). Zhouzhuang (周庄, ¥100) is more famous and more touristy — but its double bridge and Shen Family House are genuinely beautiful. Both are half-day visits. Return to Suzhou, pick up bags, take the 30-minute train to Shanghai for your flight out the next day.", tip: "All Yangtze Delta water towns are variations on the same theme: canals + Ming-Qing houses + stone bridges. Pick the one that is logistically easiest. Tongli is the closest to Suzhou (30 min by metro line 4). Avoid the water towns on weekends and Chinese holidays — the narrow lanes become impassable." },
    ],
    practical: [
      { title: "Getting There", body: "Fly into Shanghai Pudong (PVG) or Hongqiao (SHA). Hongqiao is closer to the city centre (30 min by metro). High-speed trains connect all three cities every 20-30 minutes. Use Trip.com or 12306.cn to book — or buy at the station 30 minutes before departure." },
      { title: "Where to Stay", body: "Shanghai: the Bund or French Concession ($80-200/night). Hangzhou: near West Lake or the Longjing tea area ($50-120/night). Suzhou: Pingjiang Road area or near the gardens ($40-100/night). All three cities have excellent hostels if you are on a budget ($15-30/night)." },
      { title: "When to Go", body: "March-May and September-November. Spring (March-May) is ideal — mild temperatures and green landscapes. Autumn (September-November) has the best light and fewer rainy days. Avoid July-August (oppressive humidity, 35-40°C) and Chinese New Year (everything closes, transport is chaos)." },
      { title: "What to Eat", body: "Shanghai: xiaolongbao (soup dumplings), shengjianbao (pan-fried pork buns), hairy crab (autumn only). Hangzhou: dongpo rou (braised pork belly), West Lake vinegar fish, Longjing shrimp (shrimp stir-fried with tea leaves). Suzhou: squirrel-shaped mandarin fish (松鼠桂鱼), eel paste noodles, and Suzhou-style mooncakes (savoury pork-filled, not sweet)." },
    ],
    nextSteps: [
      { href: '/golden-triangle/beijing-xian-shanghai', label: 'Add Beijing & Xian', description: 'Extend this into the full Golden Triangle' },
      { href: '/ancient-capitals/xian-luoyang-kaifeng', label: 'Ancient Capitals route', description: 'Explore more of China\'s imperial history' },
    ],
  },
  {
    dir: "yangtze-delta", slug: "hangzhou-wuzhen-mogan",
    metaTitle: "Hangzhou-Wuzhen-Moganshan (5-6 Days) | Tea, Water Towns & Bamboo Mountains",
    metaDesc: "A slower Yangtze Delta route: West Lake, Longjing tea terraces, Wuzhen water town at night, and Moganshan's bamboo forests and Republican-era villas.",
    kicker: "Yangtze Delta · 5-6 Days", title: "Hangzhou, Wuzhen & Moganshan: Tea, Water Towns & Mountain Retreats",
    subtitle: "Hangzhou's tea terraces at dawn, Wuzhen's lantern-lit canals after the day-trippers leave, and Moganshan's bamboo forests — a slower, deeper Yangtze Delta.",
    duration: "5-6 days", route: "Shanghai → Hangzhou → Wuzhen → Moganshan → Shanghai", budget: "$600-900/person",
    overview: "This route skips Suzhou's crowded gardens for something quieter: Wuzhen, a water town that is best experienced overnight when the day-trippers are gone, and Moganshan (Mount Mogan), a bamboo-covered mountain retreat where Shanghai's elite built stone villas in the 1920s. It is a slower, more atmospheric Yangtze Delta — tea at the source, canals after dark, and bamboo forests in the clouds.",
    faqQ: "Is Wuzhen worth staying overnight?", faqA: "Yes. Wuzhen has two sections: East Gate (东栅, more authentic, closes at 5pm) and West Gate (西栅, more polished, stays open until 10pm). The West Gate at night — lanterns reflecting in canals, empty stone bridges, and the sound of water — is completely different from the crowded daytime version. Stay inside the West Gate scenic area (¥600-1,500/night) for the full experience after the gates close to non-guests.",
    stops: [
      { day: "Day 1: Shanghai → Hangzhou", content: "Take the 1-hour train from Shanghai to Hangzhou. Afternoon: West Lake — walk the Su Causeway, visit the Leifeng Pagoda (¥40) for the lake panorama, and sit at a lakeside tea house. Evening: dinner at Louwailou (楼外楼, est. 1848) — Hangzhou's most famous restaurant, serving West Lake vinegar fish and dongpo rou on the lake shore.", tip: "Louwailou is expensive by Chinese standards (¥200-300/person) and some say it is resting on its reputation. But the location — right on the lake with views of the pagoda — is unbeatable. Book a window table. The West Lake vinegar fish (西湖醋鱼) is the dish to order." },
      { day: "Day 2: Hangzhou Tea Culture", content: "Early morning: cycle to Longjing tea village (龙井村) before the tour buses arrive. Walk through the tea terraces to the China Tea Museum. Midday: lunch at a tea farmer's house — they will cook simple Hangzhou dishes and serve their own tea. Afternoon: visit Meijiawu (梅家坞), a less touristy tea village further into the hills. Learn to brew Longjing tea properly — 80°C water, not boiling, steeped for 2-3 minutes in a glass cup so you can watch the leaves unfurl.", tip: "Longjing tea should be brewed at 80°C, not boiling. Boiling water scalds the leaves and makes the tea bitter. If you are at a tea farmer's house and they pour boiling water on the tea, they are serving you low-grade leaves that can handle the heat. Good Longjing is brewed with water cooled for 2-3 minutes after boiling." },
      { day: "Day 3: Hangzhou → Wuzhen", content: "Take a 1-hour bus from Hangzhou to Wuzhen (¥35). Wuzhen (乌镇) is one of China's six famous water towns, but the only one truly worth staying overnight. Check into a hotel inside the West Gate scenic area (book 2-4 weeks ahead). Afternoon: explore the West Gate — the indigo fabric workshop, the wedding museum, the ancient bed museum (surprisingly interesting). Walk the canals, cross the stone bridges. Evening: this is why you came. After 5pm, the West Gate empties of day-trippers. The lanterns come on. The canals become mirrors. Walk the bridges in near solitude. Dinner at a canal-side restaurant.", tip: "Wuzhen West Gate entrance: ¥150. If you stay inside the scenic area, you pay once and can come and go. The hotels inside are run by the Wuzhen management company — consistent quality but not cheap (¥600-1,500/night). Book on the official Wuzhen website or Trip.com. The cheaper guesthouses outside the gate mean you miss the empty night-time canals, which is the entire point of Wuzhen." },
      { day: "Day 4: Wuzhen → Moganshan", content: "Morning: visit Wuzhen's East Gate (东栅, ¥110) — older, less polished, with residents still living in the old houses. The East Gate has a lived-in quality the West Gate lacks. After lunch, take a Didi to Moganshan (1.5 hrs, ¥300). Moganshan (莫干山) is a bamboo-covered mountain at 700m where Shanghai's colonial elite built stone villas in the 1920s to escape the summer heat. It is now China's most famous mountain resort — boutique guesthouses, bamboo forests, and hiking trails. Check into a guesthouse and walk the villa trail.", tip: "Moganshan is a 1.5-hour drive from Wuzhen. There is no train — you need a private car or Didi (¥300). The mountain road is winding — take motion sickness pills if you are prone. The temperature is 5-8°C cooler than Hangzhou — it genuinely is a summer escape." },
      { day: "Day 5: Moganshan → Shanghai", content: "Morning: hike the Bamboo Forest Trail (2-3 hours) — a network of stone paths through dense bamboo groves that filter the light into green. Visit the Moganshan Villa (蒋介石官邸), where Chiang Kai-shek stayed in the 1930s, and the Sword Pond (剑池), a waterfall and pool where swords were supposedly forged 2,500 years ago. Afternoon: drive back to Shanghai (2.5 hrs, ¥400 by Didi) or take a bus from Deqing to Shanghai (2.5 hrs). Fly out in the evening or stay the night.", tip: "Moganshan is about atmosphere, not sights. The villa trail, the bamboo forest, the morning mist — it is a place to slow down, not check off a list. The best guesthouses (naked Retreats, Le Passage Mohkan Shan) are ¥1,500-3,000/night and book out weeks in advance. Mid-range guesthouses (¥400-800) are still excellent." },
    ],
    practical: [
      { title: "Getting There", body: "Shanghai-Hangzhou: high-speed train (1 hr, ¥75). Hangzhou-Wuzhen: bus from Hangzhou East Bus Station (1 hr, ¥35). Wuzhen-Moganshan: private car/Didi (1.5 hrs, ¥300). Moganshan-Shanghai: bus from Deqing (2.5 hrs, ¥80) or private car (2.5 hrs, ¥400)." },
      { title: "Where to Stay", body: "Hangzhou: near West Lake ($50-120/night). Wuzhen: inside the West Gate scenic area (¥600-1,500/night). Moganshan: boutique guesthouses in the bamboo forest ($60-400/night depending on luxury level). Book Moganshan 2-4 weeks ahead for weekends." },
      { title: "When to Go", body: "March-May and September-November. Moganshan is at its best in April (bamboo shoots emerging) and October (autumn colours). Summer (June-August) is Moganshan's high season for the mountain cool — prices double. Winter is quiet but cold and damp — many guesthouses close." },
    ],
    nextSteps: [
      { href: '/yangtze-delta/shanghai-hangzhou-suzhou', label: 'Shanghai-Suzhou route', description: 'Add Shanghai\'s skyline and Suzhou\'s classical gardens' },
      { href: '/yangtze-delta/nanjing-zhenjiang-yangzhou', label: 'Nanjing route', description: 'Extend west to Nanjing and Yangzhou' },
    ],
  },
  {
    dir: "yangtze-delta", slug: "nanjing-zhenjiang-yangzhou",
    metaTitle: "Nanjing-Yangzhou (4-5 Days) | Imperial Capitals & Canal Cities",
    metaDesc: "Nanjing's Ming dynasty walls, Sun Yat-sen's mausoleum, Yangzhou's Grand Canal and morning tea culture — 4-5 days in China's southern imperial capital.",
    kicker: "Yangtze Delta · 4-5 Days", title: "Nanjing & Yangzhou: Imperial Capital & Canal Cities",
    subtitle: "Nanjing's 600-year-old city walls, Sun Yat-sen's mountain-top mausoleum, and Yangzhou's Grand Canal morning tea culture — the Yangtze Delta's historic heart.",
    duration: "4-5 days", route: "Shanghai → Nanjing → Zhenjiang → Yangzhou → Shanghai", budget: "$500-750/person",
    overview: "Nanjing (南京, 'Southern Capital') was China's capital six times, most recently as the Republic of China's capital under Sun Yat-sen. It has Ming dynasty city walls (the longest surviving city walls in the world at 35 km), a mountain-top mausoleum, and a dark WWII history at the Nanjing Massacre Memorial. Yangzhou (扬州), 1 hour east, was one of China's wealthiest cities during the Tang dynasty thanks to its position on the Grand Canal. Today it is known for morning tea culture (早茶) — a leisurely dim sum ritual that rivals Guangzhou's.",
    faqQ: "How does Nanjing compare to Beijing as a historical capital?", faqA: "Nanjing is smaller, greener, and less visited by foreign tourists than Beijing. Its Ming dynasty sites (city walls, Xiaoling Tomb) are from the same dynasty as Beijing's Forbidden City but feel more integrated into the modern city. The Nanjing Massacre Memorial is a heavy but important site — plan it for the afternoon as it is emotionally draining. Nanjing's food is also distinct: salt-water duck (盐水鸭), duck blood vermicelli soup (鸭血粉丝汤), and xiaolongbao that locals claim predate Shanghai's.",
    stops: [
      { day: "Day 1: Shanghai → Nanjing", content: "Take the 1-hour high-speed train from Shanghai to Nanjing South (¥140). Afternoon: walk the Nanjing City Wall (¥30) — the best section is from Xuanwu Gate to Taicheng, with views over Xuanwu Lake and Purple Mountain. Visit Jiming Temple (鸡鸣寺, ¥15), a 1,500-year-old Buddhist temple on the city wall. Evening: Fuzimiao (夫子庙, Confucius Temple) area — the pedestrian streets along the Qinhuai River are touristy but atmospheric at night with lanterns reflecting in the canal.", tip: "The Nanjing City Wall section at Taicheng (台城) is the best-preserved section and has the classic view of Xuanwu Lake with the modern Nanjing skyline behind it. Go at sunset. The wall is wide enough to walk comfortably — it is up to 12m thick at the base." },
      { day: "Day 2: Nanjing", content: "Morning: Sun Yat-sen Mausoleum (中山陵, free, book ahead) — a grand staircase of 392 steps leading up Purple Mountain to a blue-roofed memorial hall. The mausoleum is China's most important Republican-era monument. Walk to the nearby Ming Xiaoling Tomb (明孝陵, ¥70) — the burial site of the Hongwu Emperor, founder of the Ming dynasty, with a 1.8km 'Spirit Way' lined with stone animals. Afternoon: Nanjing Massacre Memorial Hall (free, book ahead) — a somber, essential museum documenting the 1937 Japanese occupation. It is heavy but world-class.", tip: "Sun Yat-sen Mausoleum requires a free reservation on WeChat (search 钟山风景区). Book 2-3 days ahead. The 392 steps are not as intimidating as they look — there are rest platforms. The Ming Xiaoling Spirit Way is most atmospheric in autumn when the maple trees turn red." },
      { day: "Day 3: Nanjing → Zhenjiang → Yangzhou", content: "Morning: train from Nanjing to Zhenjiang (20 min, ¥30). Zhenjiang (镇江) is a small city on the Yangtze with three scenic hills. Visit Jinshan Temple (金山寺, ¥65) — a Buddhist temple on a hilltop island where legend says a white snake spirit was trapped under the pagoda. After lunch (Zhenjiang is famous for vinegar — try the vinegar-braised pork ribs), take the 30-minute bus across the Yangtze to Yangzhou. Afternoon: Slender West Lake (瘦西湖, ¥150) — a long, narrow lake with willow-lined banks, arched stone bridges, and Ming-Qing pavilions. It is West Lake's smaller, more refined cousin.", tip: "Slender West Lake is ¥150 — expensive by Chinese standards. The ticket is worth it for the Five Pavilion Bridge and the White Dagoba. Walk the full length (3 km, about 2 hours) from south to north. The lake is most beautiful in March-April when the peach blossoms and willows are in full display — '烟花三月下扬州' as the Tang poem says." },
      { day: "Day 4: Yangzhou → Shanghai", content: "Morning: Yangzhou morning tea (早茶) — this is the city's defining cultural experience. Go to Fuchun Tea House (富春茶社, est. 1885) or Yechun Tea House (冶春茶社) by 7:30am. Order san ding bao (三丁包, three-dice buns filled with chicken, pork, and bamboo shoots), crab roe soup dumplings (蟹黄汤包), and a pot of Biluochun green tea. The meal takes 1-2 hours — this is not fast food. Afternoon: visit Geyuan Garden (个园, ¥45), a Qing dynasty salt merchant's garden with bamboo groves and rockeries representing the four seasons. Then train back to Shanghai (2 hrs, ¥120).", tip: "Yangzhou morning tea is a ritual, not a meal. It is leisurely — do not rush. The most famous dish is crab roe soup dumpling (蟹黄汤包) — you drink the soup through a straw before eating the wrapper. Fuchun Tea House fills up by 8am on weekends. Go on a weekday or arrive by 7am. The old Fuchun on Deshengqiao Road is the original." },
    ],
    practical: [
      { title: "Getting There", body: "Shanghai-Nanjing: high-speed train (1 hr, ¥140). Nanjing-Zhenjiang: train (20 min, ¥30). Zhenjiang-Yangzhou: bus across the Yangtze bridge (30 min, ¥20). Yangzhou-Shanghai: train (2 hrs, ¥120). The entire route is on the high-speed rail network." },
      { title: "Where to Stay", body: "Nanjing: Xinjiekou area (city centre, $40-100/night) or near Fuzimiao for the river atmosphere. Yangzhou: near Slender West Lake or the old city ($30-80/night)." },
      { title: "When to Go", body: "March-April (spring blossoms, the classic 'going to Yangzhou in March' season) and October-November (autumn colours on Purple Mountain). Avoid July-August — Nanjing is one of China's 'Four Furnaces' and temperatures hit 38°C." },
    ],
    nextSteps: [
      { href: '/yangtze-delta/shanghai-hangzhou-suzhou', label: 'Shanghai-Suzhou-Hangzhou', description: 'The classic Yangtze Delta golden triangle' },
      { href: '/ancient-capitals/xian-luoyang-kaifeng', label: 'Ancient Capitals route', description: 'Continue west to Xian, Luoyang, and Kaifeng' },
    ],
  },

  // ====== ANCIENT CAPITALS ROUTES ======

  {
    dir: "ancient-capitals", slug: "xian-luoyang-kaifeng",
    metaTitle: "Xian-Luoyang-Kaifeng (6-7 Days) | China's Three Ancient Capitals",
    metaDesc: "Xian's Terracotta Warriors, Luoyang's Longmen Grottoes, and Kaifeng's Song dynasty heritage — 6-7 days along the Yellow River's imperial corridor.",
    kicker: "Ancient Capitals · 6-7 Days", title: "Xian, Luoyang & Kaifeng: China's Three Ancient Capitals",
    subtitle: "The Terracotta Warriors, the Longmen Buddhist grottoes carved into limestone cliffs, and Kaifeng — the Song dynasty capital that was once the world's largest city.",
    duration: "6-7 days", route: "Xian → Luoyang → Kaifeng → Zhengzhou", budget: "$700-1,000/person",
    overview: "China had eight great ancient capitals, and three of them sit along a 500km stretch of the Yellow River: Xian (Chang'an, capital of 13 dynasties including the Zhou, Qin, Han, and Tang), Luoyang (capital of 13 dynasties, home of the Longmen Grottoes and the first Buddhist temple in China), and Kaifeng (the Northern Song capital that was the world's largest city in 1000 AD with over 1 million people). This route connects them by high-speed train — Xian to Luoyang is 1.5 hours, Luoyang to Kaifeng is 1 hour. It is the essential China history itinerary for travellers who want to go deeper than the Beijing-Xian-Shanghai greatest-hits tour.",
    faqQ: "Should I visit Xian on this route or combine it with Beijing?", faqA: "Xian pairs well with either. If you are doing the classic Beijing-Xian-Shanghai loop, visit Xian as part of that and then do Luoyang-Kaifeng as a 3-4 day add-on from Zhengzhou. If you are focused specifically on ancient capitals, this Xian-Luoyang-Kaifeng route is self-contained and connects by high-speed train in 1-1.5 hours between each city.",
    stops: [
      { day: "Day 1: Arrive Xian", content: "Fly into Xian Xianyang Airport (XIY). Afternoon: Xian City Wall (¥54) — the most complete ancient city wall in China (14 km, built 1370). Rent a bike on the wall (¥45, 90 min to cycle the full circuit). Evening: Muslim Quarter (回民街) — Xian's Hui Muslim neighbourhood is a food street like no other: lamb skewers (¥3 each), yangrou paomo (羊肉泡馍, crumbled flatbread in lamb soup), and persimmon cakes (柿子饼). The Muslim Quarter has existed for 1,300 years since Silk Road traders settled here.", tip: "The city wall bike ride is 14 km and takes about 90 minutes at a leisurely pace. The wall is 12m wide — wide enough for a small car. Go in the late afternoon (4-5pm) when the light turns golden and the temperature drops. The south gate (永宁门) has the most dramatic entrance and the best bike rental station." },
      { day: "Day 2: Xian", content: "Morning: Terracotta Warriors (兵马俑, ¥120). Get there at 8:30am opening — the site is 40 km east of Xian and takes 1 hour by public bus (¥8 from Xian Railway Station) or 40 minutes by private car. The warriors are in three pits: Pit 1 is the largest (6,000 warriors in battle formation, only 2,000 excavated), Pit 2 has cavalry and chariots, Pit 3 is the command centre. Afternoon: Huaqing Hot Springs (¥120) at the foot of Mount Li — the Tang dynasty imperial bathing pools where Emperor Xuanzong and his consort Yang Guifei bathed. Evening: Tang Dynasty music and dance show (¥300-500).", tip: "Terracotta Warriors ticket: ¥120. Get there at 8:30am sharp — by 10am Pit 1 is a wall of tour groups. Walk to the far end of Pit 1 first (fewer people) and work your way back. The museum is in the countryside — there is nowhere good to eat nearby. Bring snacks or eat breakfast before you go. The warriors were originally painted in bright colours — the pigments faded within minutes of exposure to air when excavated." },
      { day: "Day 3: Xian → Luoyang", content: "Take the 1.5-hour high-speed train from Xian North to Luoyang Longmen (¥175). Afternoon: Longmen Grottoes (龙门石窟, ¥90) — a UNESCO site of over 100,000 Buddhist statues carved into 1 km of limestone cliffs along the Yi River. The carvings span 400 years (5th-9th centuries). The largest is the 17m Vairocana Buddha in the Fengxian Temple. Cross the river to see the grottoes from the opposite bank — the scale of the cliff carving becomes clear. Evening: Luoyang Water Banquet (洛阳水席) — a 24-course meal where every dish is served in broth.", tip: "Longmen Grottoes are best in afternoon light — the western cliffs (main grottoes) face east and are illuminated by the morning sun, but the afternoon gives you the best perspective from the east bank looking back. The Vairocana Buddha's face is 4m tall. Her smile is considered the most beautiful in Chinese Buddhist art. The site takes 3-4 hours." },
      { day: "Day 4: Luoyang", content: "Morning: White Horse Temple (白马寺, ¥35) — China's first Buddhist temple, founded in 68 AD when two Indian monks arrived on white horses carrying Buddhist scriptures. The temple has a working monastery, pagodas from multiple dynasties, and a recently built Indian/Thai/Myanmar temple complex. Afternoon: Luoyang Museum (free, book ahead) — an excellent collection of Tang dynasty ceramics, including the famous Tang sancai (唐三彩, three-colour glazed pottery). Evening: Luoyang Old Town for local snacks.", tip: "The White Horse Temple's international section (Indian, Thai, and Myanmar temples) was built in the 2000s and is more a curiosity than historically significant. The real value is in the original Chinese halls — the Qiyun Pagoda (built 1175) and the Hall of Heavenly Kings. The temple is 12 km east of Luoyang — 40 minutes by bus (¥2) or 25 minutes by Didi (¥40)." },
      { day: "Day 5: Luoyang → Shaolin Temple → Kaifeng", content: "Day trip to Shaolin Temple (少林寺, ¥100), 1.5 hours from Luoyang by bus. Shaolin is the birthplace of Chan (Zen) Buddhism and kung fu — the monks have practised martial arts here for 1,500 years. Visit the main temple, the Pagoda Forest (228 stone pagodas housing the ashes of abbots), and watch a kung fu demonstration (¥100) by the current generation of warrior monks. Afternoon: bus back to Luoyang, then high-speed train to Kaifeng (1 hr, ¥90).", tip: "Shaolin Temple is touristy — manage expectations. The kung fu demonstration is impressive (students breaking metal bars on their heads) but the temple itself is smaller than you might expect. The Pagoda Forest is the most atmospheric part — 228 stone pagodas from the 7th to 19th centuries in a quiet pine grove. The Shaolin area is also full of martial arts schools where Chinese parents send their children to study kung fu full-time." },
      { day: "Day 6: Kaifeng", content: "Kaifeng was the Northern Song capital (960-1127 AD) and the world's largest city at the time. Start at the Millennium City Park (清明上河园, ¥120) — a life-sized reconstruction of a Song dynasty city based on the famous scroll painting 'Along the River During the Qingming Festival'. Staff wear Song dynasty costumes and there are performances throughout the day. Afternoon: Dragon Pavilion (龙亭, ¥45) and the Iron Pagoda (铁塔, ¥40) — a 55m brick pagoda from 1049 with rust-coloured glazed tiles that look like iron. Evening: Kaifeng night market at Gulou (鼓楼) — xiaolongbao (Kaifeng claims to have invented soup dumplings), bucket chicken (桶子鸡), and almond tea.", tip: "The Kaifeng night market at Gulou Square is one of China's largest. The Kaifeng xiaolongbao (开封灌汤包) are different from Shanghai's — the skin is thicker and the filling is lamb, not pork. Kaifeng also has a significant Hui Muslim population, so lamb dishes are common. The almond tea (杏仁茶) is a Kaifeng speciality — sweet, nutty, and served hot." },
      { day: "Day 7: Kaifeng → Zhengzhou → Fly Out", content: "Morning: Xiangguo Temple (大相国寺, ¥45) — a Tang dynasty temple that was the Song dynasty's most important Buddhist institution, famous for its statue of Guanyin with 1,000 hands and eyes carved from a single ginkgo tree. Afternoon: 30-minute train to Zhengzhou (¥25), then fly out from Zhengzhou Xinzheng Airport (CGO).", tip: "Zhengzhou is the transport hub for this region. It has flights to most major Chinese cities and some international connections. The airport is 35 km from the city centre — 40 minutes by metro (line 2 extension). If your flight is late, the Henan Museum in Zhengzhou (free) is excellent for its Shang dynasty bronzes." },
    ],
    practical: [
      { title: "Getting There", body: "Fly into Xian (XIY) and out of Zhengzhou (CGO). High-speed trains: Xian-Luoyang (1.5 hrs, ¥175), Luoyang-Kaifeng (1 hr, ¥90), Kaifeng-Zhengzhou (30 min, ¥25). The entire route is on the Xuzhou-Lanzhou high-speed line." },
      { title: "Where to Stay", body: "Xian: inside the city wall near the Bell Tower ($40-100/night). Luoyang: near Longmen Grottoes or the old town ($30-70/night). Kaifeng: Gulou area for the night market ($25-60/night)." },
      { title: "When to Go", body: "March-May and September-November. April is the Luoyang Peony Festival — the city goes all-out with millions of peonies in bloom, but hotels double in price. Avoid Chinese New Year (Shaolin and Longmen are packed) and July-August (Henan is hot and dry)." },
      { title: "What to Eat", body: "Xian: yangrou paomo (lamb soup with bread), biangbiang noodles, lamb skewers, persimmon cakes. Luoyang: water banquet (24 courses), beef soup (牛肉汤) for breakfast. Kaifeng: soup dumplings (灌汤包), bucket chicken, almond tea, and wufu pi (deep-fried dough with five-spice)." },
    ],
    nextSteps: [
      { href: '/golden-triangle/beijing-xian-shanghai', label: 'Beijing-Xian-Shanghai', description: 'Add Beijing and Shanghai for the classic Golden Triangle' },
      { href: '/ancient-capitals/pingyao-datong-yungang', label: 'Pingyao & Datong', description: 'Continue north to Pingyao and the Yungang Grottoes' },
    ],
  },
  {
    dir: "ancient-capitals", slug: "pingyao-datong-yungang",
    metaTitle: "Pingyao-Datong-Yungang (5-6 Days) | Ancient Cities & Buddhist Caves",
    metaDesc: "Pingyao's Ming-Qing walled city, Datong's Yungang Grottoes (older and larger than Longmen), and the Hanging Temple — 5-6 days in Shanxi's ancient heartland.",
    kicker: "Ancient Capitals · 5-6 Days", title: "Pingyao, Datong & the Yungang Grottoes: Shanxi's Ancient Heartland",
    subtitle: "A Ming dynasty walled banking city, 51,000 Buddhist statues carved into a 1km cliff, and a temple suspended from a sheer rock face — Shanxi province is China's best-kept history secret.",
    duration: "5-6 days", route: "Beijing → Pingyao → Datong → Hanging Temple → Beijing", budget: "$500-800/person",
    overview: "Shanxi province (山西, 'West of the Mountains') is China's museum of ancient architecture. It has more surviving pre-14th-century wooden buildings than the rest of China combined. This route connects three extraordinary sites: Pingyao (平遥), a perfectly preserved Ming-Qing banking city with 6 km of intact city walls; the Yungang Grottoes (云冈石窟) near Datong — 51,000 Buddhist statues carved 1,500 years ago, older and larger than the Longmen Grottoes; and the Hanging Temple (悬空寺), a temple clinging to a cliff face 75m above a canyon floor.",
    faqQ: "How do the Yungang Grottoes compare to Longmen?", faqA: "Yungang (Datong) is older (5th century vs 6th-9th century at Longmen) and has more statues (51,000 vs 100,000 — but Yungang's are larger on average). The Yungang Buddhas are more Indian-influenced (rounder faces, Gandharan drapery) while Longmen's are more Sinicised. Both are UNESCO World Heritage. If you can only visit one: Yungang is more impressive for the scale of individual statues; Longmen is more beautiful for the riverside setting.",
    stops: [
      { day: "Day 1: Beijing → Pingyao", content: "Take the 4-hour high-speed train from Beijing Fengtai to Pingyao Ancient City (¥180). Pingyao is a walled city of 40,000 people that was China's banking capital in the 19th century — the 'Wall Street of China' during the Qing dynasty. The entire city within the walls is a UNESCO site. Check into a guesthouse inside the walls (converted courtyard house, ¥150-400/night). Walk the city walls (¥125 combined ticket covers the walls and all attractions) at sunset — the 6 km circuit gives a panorama of grey-tiled roofs and narrow lanes.", tip: "Pingyao's combined ticket (¥125) covers the city walls and 18 attractions, valid for 3 days. The must-sees: Rishengchang Draft Bank (the first bank in China, founded 1823), the city walls, and the Ming-Qing Street. The county yamen (government office) is interesting but takes 2 hours — skip it if you are tight on time." },
      { day: "Day 2: Pingyao", content: "Full day exploring Pingyao. Visit Rishengchang (日昇昌) — the first draft bank in Chinese history, founded in 1823. Its system of remittance receipts (basically paper money backed by silver deposits) transformed Chinese commerce. Walk Ming-Qing Street (明清街), the main commercial artery since the 14th century. Visit the Confucius Temple and the City God Temple. For lunch: Pingyao beef (平遥牛肉) — cured beef that is pink, tender, and sliced paper-thin. It has been made here since the Ming dynasty.", tip: "Pingyao beef (平遥牛肉) is the local speciality. The best is from Guanyun (冠云) brand, sold in red boxes everywhere. It is eaten cold, sliced thin, as a snack with beer. Also try the cat's ear noodles (猫耳朵) — small pieces of dough pressed into the shape of a cat's ear and stir-fried with vegetables." },
      { day: "Day 3: Pingyao → Datong", content: "Morning: visit the Shuanglin Temple (双林寺, ¥35), 6 km from Pingyao — a 1,500-year-old temple with over 2,000 painted clay statues from the Song, Yuan, Ming, and Qing dynasties. The statues are extraordinary: life-sized, individually expressive, and still bearing their original pigments. Afternoon: Didi to Pingyao Ancient City Station (15 min), then high-speed train to Datong South (3 hrs, ¥170). Datong is an industrial city (coal mining) with an ancient heart. Check in and walk the rebuilt Datong city wall at night.", tip: "Shuanglin Temple is often skipped by tourists who only visit the Pingyao old town. That is a mistake. The painted clay statues are among the finest surviving examples of Chinese polychrome sculpture. The 'Thousand-Armed Guanyin' hall is the highlight — the goddess is surrounded by hundreds of suspended miniature statues." },
      { day: "Day 4: Datong — Yungang Grottoes", content: "Take the 30-minute bus from Datong to the Yungang Grottoes (云冈石窟, ¥120). The grottoes stretch 1 km along a sandstone cliff and contain 51,000 Buddhist statues in 252 caves, carved between 460-525 AD. The largest is a 17m seated Buddha in Cave 5. Cave 20's open-air Buddha is the iconic image — a 13.7m seated Buddha exposed when the front wall collapsed centuries ago. The site takes 3-4 hours. Afternoon: Datong Museum (free) for the context on the Northern Wei dynasty that built the grottoes. Evening: Datong knife-shaved noodles (刀削面) — Shanxi's signature dish.", tip: "Yungang Caves 5-20 are the highlights. Cave 6 is the most ornate — a square pagoda pillar covered in carvings of the Buddha's life story. Cave 12 is the 'Music Cave' with celestial musicians carved across the ceiling. The open-air Buddha in Cave 20 is the photo everyone takes — but go further to Caves 16-19 for the full Northern Wei progression of styles." },
      { day: "Day 5: Hanging Temple & Yingxian Pagoda", content: "Full-day excursion: drive 1.5 hours to the Hanging Temple (悬空寺, ¥130) — a temple built into a sheer cliff face 75m above the canyon floor, supported by wooden beams wedged into the rock. It was built in 491 AD and is unique in China: it houses Buddhist, Daoist, and Confucian shrines in the same temple. Walk the narrow wooden walkways (they creak, which is part of the experience). Afternoon: drive 1 hour to the Yingxian Wooden Pagoda (应县木塔, ¥60) — the oldest surviving fully wooden pagoda in the world, built in 1056 without a single nail. At 67m (9 storeys), it is a miracle of Song dynasty engineering. Return to Datong for the night.", tip: "The Hanging Temple looks terrifying but is structurally sound — the beams are oak wedged into the rock, and the cliff overhang protects the temple from rain. The walkways are narrow (60cm) and the railing is knee-height. Not for those with severe fear of heights. The Yingxian Pagoda is leaning slightly (like the Tower of Pisa) — you can no longer climb it, only view from the outside." },
      { day: "Day 6: Datong → Beijing", content: "Morning: Huayan Temple (华严寺, ¥65) — a Liao dynasty (1038 AD) temple with the largest wooden Buddha hall in China and exquisite Liao dynasty clay sculptures. The temple library (薄伽教藏殿) has cabinets designed to look like miniature buildings. Afternoon: high-speed train back to Beijing (2 hrs, ¥160). Fly out or continue your China journey.", tip: "Huayan Temple's main hall (大雄宝殿) is one of the largest wooden Buddhist halls in China — 1,559 m². The clay sculptures in the Sutra Library are Liao dynasty originals (11th century) and are remarkably well-preserved. The temple is often empty because tourists prioritise Yungang — it is a quiet, atmospheric experience." },
    ],
    practical: [
      { title: "Getting There", body: "Beijing-Pingyao: high-speed train (4 hrs, ¥180). Pingyao-Datong: train (3 hrs, ¥170). Datong-Beijing: train (2 hrs, ¥160). The Hanging Temple and Yingxian Pagoda require a private car from Datong (¥400-500/day)." },
      { title: "Where to Stay", body: "Pingyao: inside the city walls in a converted courtyard guesthouse (¥150-400/night). Datong: near the old city or train station ($30-70/night). The Pingyao courtyard guesthouses (kangs — traditional heated brick beds) are a highlight in themselves." },
      { title: "When to Go", body: "April-June and September-October. Shanxi is cold in winter (-15°C in Datong) and the Hanging Temple can close due to ice. Summer is hot (30-35°C) but manageable. The best light at Yungang is morning (the caves face east)." },
    ],
    nextSteps: [
      { href: '/ancient-capitals/xian-luoyang-kaifeng', label: 'Xian-Luoyang-Kaifeng', description: 'Continue south to the other ancient capitals' },
      { href: '/golden-triangle/beijing-in-depth', label: 'Beijing in depth', description: 'Spend 5 days exploring Beijing before heading to Shanxi' },
    ],
  },
];

for (const r of routes) {
  writePage(r.dir, r.slug, r);
  console.log(`✅ ${r.dir}/${r.slug}`);
}
console.log(`\nDone. ${routes.length} Yangtze Delta + Ancient Capitals pages.`);