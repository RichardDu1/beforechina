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

// ====== SHANDONG + JIANGXI + SANYA ======

const routes = [
  // --- SHANDONG ---
  {
    dir: "shandong", slug: "qingdao-yantai",
    metaTitle: "Qingdao & Yantai (4-5 Days) | Shandong Coast & Beer Culture",
    metaDesc: "Qingdao's German colonial architecture, Tsingtao Beer Museum, and fresh seafood plus Yantai's wine region — 4-5 days on the Shandong coast.",
    kicker: "Shandong · 4-5 Days", title: "Qingdao & Yantai: Beaches, Beer & German Colonial History",
    subtitle: "China's beer capital with German colonial architecture, a coastline of sandy beaches, fresh seafood from the Yellow Sea, and China's oldest wine region.",
    duration: "4-5 days", route: "Qingdao → Yantai → Penglai → Qingdao", budget: "$450-700/person",
    overview: "Qingdao (青岛) is China's most European-feeling coastal city — a legacy of German colonial rule from 1898-1914. The German Quarter has Bavarian-style buildings, the city's most famous export is Tsingtao Beer (founded by German settlers in 1903), and the coastline is lined with sandy beaches and rocky headlands. Yantai (烟台), 1 hour north by train, is China's oldest wine region — Changyu Winery was founded here in 1892 and the climate and soil are comparable to Bordeaux. This is a relaxed coastal route: beer, seafood, beaches, and German architecture.",
    faqQ: "Is Qingdao worth visiting outside of the beer festival?", faqA: "Yes. The Tsingtao International Beer Festival (July-August) is a crowded, commercialised event — fun but not the best time to visit. Qingdao is at its best in May-June and September-October: pleasant weather, empty beaches, and the German architecture is beautiful in the soft light. The beer museum, the old town, and the fresh seafood are year-round attractions.",
    stops: [
      { day: "Day 1: Arrive Qingdao", content: "Fly into Qingdao Jiaodong Airport (TAO). Transfer to the old town. Afternoon: walk the German Quarter around the Zhanqiao Pier (栈桥) — a 440m pier with a Chinese pavilion at the end, Qingdao's symbol. Then St. Michael's Cathedral (圣弥额尔大教堂, ¥10) — a German-built Catholic cathedral from 1934, the largest Gothic building in China. Walk through the old town's cobbled streets past German colonial buildings now housing cafes, galleries, and seafood restaurants. Evening: fresh Tsingtao beer and seafood on a rooftop terrace in the old town.", tip: "Qingdao's old town is compact and walkable — you can see the main sights in an afternoon. The German buildings are concentrated around Zhanqiao Pier and the cathedral. Tsingtao beer is ¥5-10 per bottle in restaurants. The fresh draft version is lighter and better than the exported bottled version." },
      { day: "Day 2: Qingdao", content: "Morning: Tsingtao Beer Museum (青岛啤酒博物馆, ¥60) — built in the original 1903 brewery, with the old copper brewing kettles, a history of the German and Japanese ownership of the brewery, and a tasting room with unlimited fresh draft beer (the best museum tasting in China). Afternoon: Badaguan (八大关, 'Eight Great Passes') — a neighbourhood of tree-lined streets and European villas built in the 1920s-30s, named after Chinese military passes. Walk to Huashi Lou (花石楼, ¥8.50) — a granite castle built by a Russian aristocrat in 1932. Evening: seafood at a local restaurant — Qingdao's specialities are clams (蛤蜊), sea cucumber (海参), and mackerel dumplings (鲅鱼饺子).", tip: "The Tsingtao Beer Museum tasting room gives you two glasses of fresh draft beer — one unfiltered (cloudy, yeasty, the best) and one filtered. The unfiltered beer only exists in Qingdao — it has a 24-hour shelf life and cannot be exported. Badaguan is most beautiful in autumn when the plane trees turn gold." },
      { day: "Day 3: Qingdao → Yantai", content: "Take the 1-hour high-speed train from Qingdao North to Yantai (¥80). Yantai is a quieter coastal city. Visit Changyu Wine Culture Museum (张裕酒文化博物馆, ¥80) — China's oldest winery (1892), with a labyrinthine underground cellar of 100-year-old oak barrels (the 'underground wine city'). Wine tasting included. Afternoon: Yantai Mountain (烟台山, free) — a headland park with a lighthouse, former consulate buildings (Yantai was a treaty port), and views over the Yellow Sea. Evening: Yantai seafood — the city is famous for sea urchin, abalone, and prawns from the cold Yellow Sea waters.", tip: "Changyu Winery was founded by Zhang Bishi, a Chinese entrepreneur who brought French vines and Austrian winemakers to Yantai in 1892. The underground cellar (1,976 m²) has 158 oak barrels, 3 of which are the original 100-year-old barrels. The wine is decent but not world-class — the experience is the history and the cellar. Yantai produces 40% of China's wine." },
      { day: "Day 4: Penglai Day Trip", content: "Take a 1-hour bus from Yantai to Penglai (蓬莱, ¥25). Penglai is a coastal town famous in Chinese mythology as the home of the Eight Immortals and the place where mirages appear over the sea. Visit Penglai Pavilion (蓬莱阁, ¥140) — a Song dynasty (1061) pavilion complex on a cliff above the sea, one of China's 'Four Great Towers'. The view from the pavilion across the Bohai Sea is spectacular — on clear days you can sometimes see a mirage of distant islands. Afternoon: Penglai Polar Ocean World (¥190) if you want an aquarium, or walk the beach at Golden Beach (金沙滩). Evening: bus back to Yantai, train back to Qingdao.", tip: "Penglai Pavilion is the highlight. The entrance (¥140) is steep but includes the pavilion, an ancient ship museum, and the surrounding fortifications. The mirage phenomenon (海市蜃楼) occurs occasionally in spring and early summer when warm air sits over the cold sea — it is rare but real. The pavilion has been a tourist attraction for 1,000 years." },
      { day: "Day 5: Depart Qingdao", content: "Fly out from Qingdao. If your flight is in the afternoon: visit Laoshan Mountain (崂山, ¥130) — a sacred Daoist mountain 30 km east of Qingdao, with temples, waterfalls, and coastal hiking trails. The mountain rises directly from the sea — one of the few places in China where you can hike from the beach to a mountain summit in a few hours. The Qingdao Beer Street (啤酒街) near the museum is a final feast of seafood and draft beer.", tip: "Laoshan is a half-day trip from Qingdao (40 min by bus, ¥10). The mountain is sacred to Daoism and has a working Daoist temple (Taiqing Palace, ¥27). The coastal hiking trail from Taiqing Palace to Yangkou has views of the Yellow Sea and the mountain's granite peaks." },
    ],
    practical: [
      { title: "Getting There", body: "Fly into Qingdao (TAO). High-speed trains: Qingdao-Yantai (1 hr, ¥80), Qingdao-Beijing (3 hrs, ¥180), Qingdao-Shanghai (5 hrs, ¥350). Penglai: 1 hr by bus from Yantai (¥25)." },
      { title: "Where to Stay", body: "Qingdao: old town near Zhanqiao Pier ($40-100/night) or Badaguan for a quieter stay ($60-150/night). Yantai: near the coast or Yantai Mountain ($30-70/night)." },
      { title: "When to Go", body: "May-June and September-October. July-August is the Tsingtao Beer Festival — fun but crowded and hotel prices double. The water is warm enough for swimming July-September. Avoid winter (December-February) — cold, windy, and many beachfront places close." },
      { title: "What to Eat", body: "Qingdao: fresh draft Tsingtao beer (¥5-10), clams in chilli (辣炒蛤蜊), mackerel dumplings (鲅鱼饺子), and seafood BBQ on the street. Yantai: sea urchin, abalone, and Changyu wine. The Shandong coast has China's best seafood — it is fresh, cheap, and simply prepared." },
    ],
    nextSteps: [
      { href: '/shandong/taishan-qufu', label: 'Mount Tai & Qufu', description: 'Add Confucius\'s hometown and China\'s most sacred mountain' },
      { href: '/golden-triangle/beijing-in-depth', label: 'Beijing in depth', description: 'Beijing is 3 hours from Qingdao by train' },
    ],
  },
  {
    dir: "shandong", slug: "taishan-qufu",
    metaTitle: "Mount Tai & Qufu (3-4 Days) | Confucius Hometown & China's Sacred Mountain",
    metaDesc: "Mount Tai — China's most sacred mountain with 3,000 years of imperial pilgrimage — and Qufu, the hometown of Confucius, in 3-4 days.",
    kicker: "Shandong · 3-4 Days", title: "Mount Tai & Qufu: Confucius's Hometown & China's Sacred Mountain",
    subtitle: "Climb 6,000 steps up China's most sacred mountain at dawn, then walk through Confucius's family mansion — 2,500 years of Chinese civilisation in 3 days.",
    duration: "3-4 days", route: "Jinan → Mount Tai → Qufu → Jinan", budget: "$350-500/person",
    overview: "Mount Tai (泰山, 1,545m) is not China's highest or most beautiful mountain — but it is the most sacred. For 3,000 years, Chinese emperors climbed it to perform the Fengshan sacrifice, declaring their legitimacy to heaven. Mao Zedong climbed it. So did 72 emperors before him. The mountain is carved with calligraphy and dotted with temples. Qufu (曲阜), 1 hour south, is the hometown of Confucius (551-479 BC), whose philosophy shaped Chinese civilisation for 2,500 years. The Confucius Mansion, Temple, and Cemetery are a UNESCO site and a pilgrimage destination.",
    faqQ: "Is Mount Tai worth climbing or should I take the cable car?", faqA: "The climb is the point. The traditional route from Hongmen (红门) to the South Heavenly Gate (南天门) is 6,000+ stone steps, takes 4-6 hours, and has been walked by billions of pilgrims over 3,000 years. The steps are lined with inscriptions carved into the rock by emperors and poets. The cable car (¥100) from the midway point takes 8 minutes and misses the entire cultural experience. Climb up, cable car down (to save your knees).",
    stops: [
      { day: "Day 1: Arrive Tai'an", content: "Fly into Jinan Yaoqiang Airport (TNA) or take the high-speed train to Tai'an (1.5 hrs from Beijing, ¥120; 2.5 hrs from Shanghai, ¥200). Tai'an (泰安) is the city at the foot of Mount Tai. Afternoon: visit Dai Temple (岱庙, ¥30) at the mountain base — the temple where emperors performed pre-climb rituals before ascending Mount Tai. The temple has a 2,100-year-old cypress tree, Song dynasty murals, and imperial steles. Evening: buy supplies for the climb (water, snacks, a headlamp for the night climb option). Sleep early — you will wake at midnight if doing the night climb.", tip: "The classic Mount Tai experience is the night climb: start at 11pm-midnight from Hongmen Gate, climb 6,000 steps by headlamp, and reach the summit by 5am for sunrise. Thousands of Chinese climbers do this every night in summer. The steps are lit and there are vendors selling water and instant noodles all the way up. It is a pilgrimage, not a wilderness hike." },
      { day: "Day 2: Mount Tai", content: "Night climb option: wake at midnight, start climbing at 1am from Hongmen Gate. The 6,000+ steps take 4-5 hours at a steady pace. You climb through the night with hundreds of Chinese climbers — the atmosphere is festive, not solitary. Arrive at the South Heavenly Gate (南天门) by 5am, then walk 20 minutes to Jade Emperor Peak (玉皇顶, 1,545m) for sunrise. The sunrise over a sea of clouds is the payoff. Day climb option: start at 6am, climb 4-6 hours, reach the summit by midday. The views are still spectacular but the night climb has the better atmosphere. Descend by cable car (¥100) and bus (¥30) to save your knees. Afternoon: train to Qufu (20 min, ¥30).", tip: "Mount Tai entrance: ¥125 (peak) / ¥100 (off-peak). Cable car down: ¥100. The night climb is cold — the summit is 10-15°C colder than the base and windy. Bring a warm layer and a windbreaker. The summit has vendors renting military coats (¥20-50) — they are ugly but warm. The sunrise is visible about 50% of the time — clouds and fog obscure it. Check the forecast." },
      { day: "Day 3: Qufu", content: "Qufu is a small city built around the legacy of Confucius. Visit the Confucius Temple (孔庙, ¥80) — China's second-largest ancient building complex after the Forbidden City, with 466 halls and pavilions built over 2,000 years. The temple is a forest of steles, ancient cypresses, and yellow-glazed imperial roofs. Then the Confucius Mansion (孔府, ¥60) — the residence of Confucius's direct descendants for 77 generations (the last descendant still lives in Taiwan). Finally, the Confucius Cemetery (孔林, ¥40) — a 200-hectare forest where Confucius and 100,000+ of his descendants are buried. The tomb of Confucius is a simple mound with a stele — understated, fitting his philosophy.", tip: "The combined ticket for the Temple, Mansion, and Cemetery is ¥150 (saves ¥30 vs buying separately). The three sites are walkable from each other. The Temple is the highlight — give it 2 hours. The Cemetery is a peaceful forest of ancient trees and stone steles, best in the late afternoon light. Qufu has a touristy 'Confucius culture street' selling calligraphy brushes and Confucius-branded everything — skip it." },
      { day: "Day 4: Qufu → Depart", content: "Fly out from Jinan Yaoqiang Airport (TNA), 2 hours from Qufu by bus (¥60). Alternatively, take the high-speed train from Qufu East to Beijing (2 hrs, ¥200) or Shanghai (3 hrs, ¥300). If you have a late departure, visit the Nishan Holy Land (尼山圣境, ¥120) — a massive new Confucius theme park with a 72m bronze statue of Confucius and a spectacular evening light show. It is China's attempt to make Confucius Instagram-worthy.", tip: "The Nishan Holy Land is a state-funded Confucius theme park opened in 2018. The 72m statue (Confucius lived to 72) is genuinely impressive. The evening drone and light show is spectacular in a very Chinese way — 500 drones forming Confucius quotes in the sky. It is ¥120 and 40 minutes from Qufu by bus." },
    ],
    practical: [
      { title: "Getting There", body: "Fly into Jinan (TNA). High-speed trains: Beijing-Tai'an (1.5 hrs, ¥120), Shanghai-Tai'an (2.5 hrs, ¥200). Tai'an-Qufu: 20 min by train (¥30). Qufu-Jinan: 2 hrs by bus (¥60) or 30 min by train." },
      { title: "Where to Stay", body: "Tai'an: near Hongmen Gate for the night climb ($25-60/night). Qufu: near the Confucius Temple ($25-60/night). Both cities are small and inexpensive." },
      { title: "When to Go", body: "March-May and September-November. The night climb is most popular in summer (June-August) when it is warm enough to climb in a t-shirt. Avoid Chinese holidays — Mount Tai gets 30,000+ climbers on National Day. The mountain can close in winter if there is ice on the steps." },
      { title: "Mount Tai Night Climb Tips", body: "Start at midnight from Hongmen Gate. Wear layers — you will be hot climbing and cold at the summit. Bring a headlamp, water (vendors sell bottles for ¥5-10), snacks, and a warm layer. The steps are uneven granite — wear sturdy shoes. Arrive at the summit by 5am for sunrise. The cable car down starts at 6:30am." },
    ],
    nextSteps: [
      { href: '/shandong/qingdao-yantai', label: 'Qingdao & Yantai', description: 'Add Shandong\'s coast, beer, and wine region' },
      { href: '/ancient-capitals/pingyao-datong-yungang', label: 'Pingyao & Datong', description: 'Combine with Shanxi\'s ancient cities' },
    ],
  },

  // --- JIANGXI ---
  {
    dir: "jiangxi", slug: "lushan-jingdezhen",
    metaTitle: "Lushan & Jingdezhen (4-5 Days) | Jiangxi Porcelain Capital & Sacred Mountain",
    metaDesc: "Jingdezhen's 1,000-year porcelain workshops and Lushan's misty mountain villas — 4-5 days in Jiangxi's most elegant destinations.",
    kicker: "Jiangxi · 4-5 Days", title: "Jingdezhen & Lushan: Porcelain Capital & Misty Mountain",
    subtitle: "Jingdezhen's 1,000-year-old kilns, hands-on porcelain workshops, and Lushan — the mountain where China's leaders held secret meetings in colonial stone villas.",
    duration: "4-5 days", route: "Jingdezhen → Lushan → Nanchang", budget: "$450-650/person",
    overview: "Jingdezhen (景德镇) has produced the world's finest porcelain for 1,000 years. The imperial kilns supplied every Chinese emperor from the Song to the Qing dynasty, and 'china' (porcelain) is named after 'China' for a reason — Jingdezhen's exports defined how the world saw Chinese craftsmanship. Today the city is a fascinating mix of ancient kilns, artist studios, and a thriving contemporary ceramics scene. Lushan (庐山), 2 hours north, is a mountain resort where missionaries, colonialists, and later China's communist leaders built stone villas in the cool mountain air. Mao held the 1959 Lushan Plenum here, where he purged Peng Dehuai for criticising the Great Leap Forward.",
    faqQ: "Is Jingdezhen worth visiting if I'm not into pottery?", faqA: "Yes — Jingdezhen is one of China's most underrated small cities. The ancient kiln area, the porcelain markets, and the artist studios are fascinating even if you have no interest in making pottery. The city has a creative, youthful energy (many young Chinese artists have moved here for the cheap studio space and ceramic heritage). The food is excellent (Jiangxi cuisine is spicy and underrated), and it is a pleasant, walkable city with a river running through it.",
    stops: [
      { day: "Day 1: Arrive Jingdezhen", content: "Fly into Jingdezhen Luojia Airport (JDZ) or take the high-speed train from Shanghai (4 hrs, ¥250), Hangzhou (3 hrs, ¥180), or Nanchang (1 hr, ¥50). Afternoon: Jingdezhen Ceramic History Museum (景德镇陶瓷博物馆, free) — the world's largest ceramics museum, covering the history of Chinese porcelain from the Neolithic to the present. The museum building is a replica of a Song dynasty kiln. Evening: walk the Ancient Kiln Folk Customs Museum area (古窑民俗博览区, ¥95) — a reconstructed Ming-Qing kiln village with working potters demonstrating traditional techniques.", tip: "The Ancient Kiln Folk Customs Museum (¥95) is touristy but worthwhile — you watch master potters throw porcelain on kick-wheels, paint blue-and-white designs, and fire wood kilns. The potters are genuine craftspeople, not actors. You can buy their work — a hand-painted teacup costs ¥50-200 directly from the maker." },
      { day: "Day 2: Jingdezhen — Porcelain Immersion", content: "Morning: visit a porcelain workshop for a hands-on experience. The Pottery Workshop (乐天陶社) in the Sculpture Factory area runs half-day classes (¥200-400) where you throw a bowl on a wheel, paint blue-and-white designs, and fire your piece (it ships to your home, ¥50-100 international shipping). Afternoon: explore the Sculpture Factory area (雕塑瓷厂) — a former state-owned factory turned into a creative park of artist studios, galleries, and cafes. Saturday mornings have the best creative market in China (乐天集市, 8am-12pm) — young ceramic artists selling their work. Evening: Taoxichuan (陶溪川) — a former state porcelain factory turned into a cultural district of galleries, design shops, and restaurants in red-brick industrial buildings.", tip: "The Saturday morning Creative Market (乐天集市) at the Sculpture Factory is the best time to be in Jingdezhen — 100+ young ceramic artists selling their work, from ¥20 earrings to ¥2,000 vases. The market runs 8am-12pm. Arrive early — the best pieces sell in the first hour. This is where Chinese galleries scout new talent." },
      { day: "Day 3: Jingdezhen → Lushan", content: "Take the 2-hour high-speed train from Jingdezhen North to Jiujiang (¥60), then 1-hour bus up the mountain to Lushan (庐山, ¥180 entrance + ¥80 shuttle bus). Lushan is a mountain resort at 1,100m where missionaries built stone villas in the late 19th century and China's leaders followed. The mountain has over 600 villas representing 18 countries' architectural styles. Check into a hotel (converted villa or modern). Afternoon: walk the villa trail — visit the Meilu Villa (美庐, ¥25), the former summer residence of Chiang Kai-shek and later Mao Zedong. The villa is preserved as it was when Mao stayed here in 1959, with his bedroom and study intact. Evening: Lushan speciality — stone fish (石鱼), tiny fish from the mountain streams, and stone ear fungus (石耳).", tip: "Lushan entrance: ¥180. The mountain has a permanent population of 20,000 and a town (Guling, 牯岭镇) at the summit with hotels, restaurants, and shops. The temperature at 1,100m is 8-10°C cooler than the plains — Lushan has been a summer escape for 100 years. The mountain is often in clouds — embrace the mist." },
      { day: "Day 4: Lushan", content: "Full day hiking Lushan. The mountain's main sights are waterfalls, peaks, and the views of the Yangtze River and Poyang Lake from the summit. Visit the Three-Step Waterfall (三叠泉, ¥64) — Lushan's most famous waterfall, descending in three cascades over 155m. The hike is 3,000+ steps down to the base and back up — hard work but worth it. Then the Immortal's Cave (仙人洞) — a natural cave where a Daoist immortal supposedly lived, with a view over a sea of clouds. Lushan is also famous for its 'cloud tea' (云雾茶) — tea grown in the mountain mist, one of China's top 10 teas. Visit a tea plantation for a tasting.", tip: "The Three-Step Waterfall (三叠泉) is a 3,000-step descent (and climb back up). The steps are steep and uneven. The cable car (¥80) covers the flatter approach but you still have to climb 1,500+ steps to the base. Go early morning (7am) to avoid the crowds. The waterfall is most powerful after rain." },
      { day: "Day 5: Lushan → Nanchang → Depart", content: "Morning: final Lushan walk — the Brocade Valley (锦绣谷) is a 1.5 km cliffside path through misty peaks and rock formations, ending at the Immortal's Cave. Then descend the mountain by bus (1 hr) to Jiujiang. Train from Jiujiang to Nanchang (1 hr, ¥40) for your flight out. If you have time in Nanchang: visit the Tengwang Pavilion (滕王阁, ¥50) — a Tang dynasty pavilion on the Gan River, one of China's 'Four Great Towers', or the Nanchang Star (南昌之星, ¥50) — a 160m Ferris wheel with views over the city.", tip: "Nanchang is Jiangxi's capital and a transport hub. The airport (KHN) has flights to most major Chinese cities. The Tengwang Pavilion is a 1989 reconstruction (the original was destroyed 28 times over 1,300 years) — it is historically inauthentic but architecturally impressive." },
    ],
    practical: [
      { title: "Getting There", body: "Fly into Jingdezhen (JDZ) or Nanchang (KHN). High-speed trains: Shanghai-Jingdezhen (4 hrs, ¥250), Hangzhou-Jingdezhen (3 hrs, ¥180). Jingdezhen-Lushan: train to Jiujiang (2 hrs, ¥60) + bus up the mountain (1 hr, ¥20). Lushan-Nanchang: bus down + train (2 hrs total, ¥60)." },
      { title: "Where to Stay", body: "Jingdezhen: Sculpture Factory area (creative vibe, $30-80/night) or near Taoxichuan ($40-100/night). Lushan: Guling town at the summit ($40-120/night) — converted villas or modern hotels. Nanchang: near Tengwang Pavilion or the train station ($30-70/night)." },
      { title: "When to Go", body: "March-May and September-November. Lushan's 'sea of clouds' is most frequent in spring. Jingdezhen is year-round. Summer (July-August) is Lushan's high season (cool mountain escape) — book ahead. The Jingdezhen Creative Market is Saturday mornings year-round." },
      { title: "Porcelain Buying Tips", body: "Jingdezhen porcelain ranges from ¥10 machine-made teacups to ¥100,000 masterworks. For a genuine hand-painted piece: ¥50-200 (teacup), ¥200-800 (teapot), ¥500-2,000 (vase). Buy from artists at the Saturday market or Sculpture Factory studios, not from shops on the main tourist street. Bargaining is acceptable at the market (10-20% off), not at artist studios." },
    ],
    nextSteps: [
      { href: '/huangshan/yellow-mountain', label: 'Huangshan', description: 'The Yellow Mountain is 1.5 hours from Jingdezhen by train' },
      { href: '/fujian/wuyishan', label: 'Wuyishan', description: 'Combine with Fujian\'s tea mountains and Nine-Bend River' },
    ],
  },

  // --- SANYA ---
  {
    dir: "south-china", slug: "sanya-hainan",
    metaTitle: "Sanya & Hainan (5-7 Days) | China's Tropical Island Getaway",
    metaDesc: "Sanya's beaches, rainforest hot springs, and Hainan's laid-back tropical vibe — 5-7 days on China's 'Hawaii' island.",
    kicker: "Hainan · 5-7 Days", title: "Sanya & Hainan: China's Tropical Island",
    subtitle: "White-sand beaches, rainforest hot springs, fresh seafood on the sand, and a 51km coastal road — Hainan is China's Hawaii, with better food and lower prices.",
    duration: "5-7 days", route: "Sanya → Wuzhishan Rainforest → Haikou (optional) → Sanya", budget: "$700-1,200/person",
    overview: "Hainan is China's southernmost province — a tropical island the size of Belgium in the South China Sea. It is China's most popular beach destination (domestic tourists flock here in winter to escape the cold) and has a genuinely tropical vibe: coconut palms, white-sand beaches, fresh seafood, and a laid-back pace. Sanya (三亚) is the main resort city with the best beaches. The island also has volcanic hot springs, Li and Miao minority villages, and the Wuzhishan tropical rainforest. Hainan has visa-free access for 59 countries (up to 30 days) — one of the easiest ways to visit China.",
    faqQ: "Is Sanya worth visiting compared to beaches in Thailand or Vietnam?", faqA: "For beach quality alone, Thailand and Vietnam have better beaches and are cheaper. Hainan's value is the combination: good beaches (not world-class, but good) plus Chinese infrastructure, safety, food, and no language barrier if you speak some Mandarin. It is also a visa-free entry point to China. If you are already in China and want a tropical break, Sanya is excellent. If you are choosing between Hainan and Thailand purely for a beach holiday, go to Thailand.",
    stops: [
      { day: "Day 1: Arrive Sanya", content: "Fly into Sanya Phoenix Airport (SYX). Transfer to your hotel. Sanya has several bay areas: Yalong Bay (亚龙湾, most upscale, best beach), Sanya Bay (三亚湾, city centre, longest beach), Haitang Bay (海棠湾, newest development, luxury resorts), and Dadonghai (大东海, most popular with Russian tourists). Check in and hit the beach. Sanya Bay has a 22km beachfront promenade perfect for cycling. Evening: seafood dinner at a beachfront restaurant — Hainan's specialities are Wenchang chicken (文昌鸡), Hele crab (和乐蟹), and fresh tropical fruit.", tip: "Sanya's beaches ranked: Yalong Bay (best sand, clearest water, ¥50-100 for a sunbed), Sanya Bay (longest, free, most convenient), Dadonghai (busy, lots of Russians, free), Haitang Bay (newest, luxury resorts). The water is warm year-round (22-28°C). The best swimming is March-November." },
      { day: "Day 2: Sanya — Beach Day", content: "Full beach day. Yalong Bay has the classic white-sand crescent beach — 7.5 km of sand with clear water. The beach is lined with resorts but the sand is public (Chinese law requires all beaches to be publicly accessible). Rent a sunbed (¥50-100), swim, and eat fresh coconut (¥10). Afternoon: Nanshan Temple (南山寺, ¥129) — a massive Buddhist complex on the coast with a 108m statue of Guanyin (the Goddess of Mercy) rising from the sea on an artificial island. The statue is visible from the plane as you land. Evening: Sanya Duty-Free Shopping Complex (the world's largest duty-free mall) if you want luxury shopping.", tip: "The 108m Guanyin statue at Nanshan Temple is taller than the Statue of Liberty (93m). It has three faces — one facing the sea, one facing the land, and one facing the sky. The temple complex is large (40 km²) and takes 3-4 hours. It is a working Buddhist temple, not just a tourist attraction — be respectful." },
      { day: "Day 3: Wuzhishan Rainforest", content: "Day trip to Wuzhishan (五指山, 'Five Finger Mountain'), 2 hours from Sanya. Wuzhishan is Hainan's highest mountain (1,867m) and the heart of the island's tropical rainforest. Hike the rainforest trail (2-4 hours, moderate) through a landscape of giant ferns, banyan trees, butterflies, and waterfalls. The air is cool and fresh compared to the coast. The Li and Miao minority villages in the area have cultural performances (¥100-150). Alternatively, visit Yanoda Rainforest (呀诺达雨林, ¥168) — a more developed rainforest park with zip lines, waterfalls, and a glass bridge, closer to Sanya (45 min).", tip: "Wuzhishan is a genuine tropical rainforest — the biodiversity is extraordinary (Hainan has species found nowhere else). The hike is moderate (stairs and boardwalks). Yanoda is more developed and touristy but also more accessible — it has English signage, zip lines, and restaurants. Choose Wuzhishan for nature, Yanoda for convenience." },
      { day: "Day 4: Sanya — Water Sports & Hot Springs", content: "Morning: water sports at Wuzhizhou Island (蜈支洲岛, ¥144 including ferry) — a small island 30 minutes off the coast with the clearest water in Sanya. Snorkelling (¥200-400), diving (¥600-1,000), jet skiing, and parasailing. The coral is not world-class (Hainan's reefs have suffered from bleaching) but the water is clear and the fish are plentiful. Afternoon: Nantian Hot Springs (南田温泉, ¥198) — volcanic hot springs with 30+ pools of varying temperatures, surrounded by tropical gardens. Evening: Sanya Romance Park (三亚千古情, ¥280) — a theatrical show about Sanya's history, directed by the same company that does the Hangzhou Impression shows.", tip: "Wuzhizhou Island ferry: ¥144 (includes island entrance). The ferry takes 20 minutes and can be rough. Book water sports online (Trip.com) for better prices than on the island. Nantian Hot Springs has pools ranging from 28-45°C, including a 'fish therapy' pool where small fish nibble dead skin (¥30 extra)." },
      { day: "Day 5: Sanya → Haikou (Optional)", content: "Option A: stay in Sanya for more beach time. Option B: take the 1.5-hour high-speed train from Sanya to Haikou (¥100). Haikou is Hainan's capital and has a more local, less resort feel. Visit Qilou Old Street (骑楼老街) — a neighbourhood of colonial-era arcade buildings built by returning overseas Chinese in the 1920s. Visit the Hainan Museum (free) for the island's history. Lunch: Haikou's version of Wenchang chicken and Hainan rice noodles (海南粉). Afternoon: volcanic cluster geopark (海口火山群, ¥60) — a dormant volcano 15 km from Haikou with a crater you can walk into. Evening: train back to Sanya (1.5 hrs, ¥100) or stay in Haikou and fly out from Haikou Meilan Airport (HAK).", tip: "Haikou is less touristy than Sanya and worth a day. The Qilou Old Street arcades are a unique architectural style — Chinese shopfronts with European columns and Southeast Asian shutters. The volcanic park has a 1,000m-wide crater that last erupted 8,000 years ago. You can walk down into the crater — the temperature drops 5°C at the bottom." },
      { day: "Day 6-7: Departure or Extension", content: "Fly out from Sanya (SYX) or Haikou (HAK). Both airports have flights to major Chinese cities and international connections to Southeast Asia. If extending: Hainan has a 51km coastal road from Sanya to Lingshui — rent a car (¥300-500/day) and drive it. The road passes through fishing villages, coconut groves, and viewpoints over the South China Sea. Or visit the Bo'ao Forum site (博鳌, 1.5 hrs from Haikou) — the 'Davos of Asia', a conference centre on a river estuary.", tip: "Hainan is one of the easiest places to drive in China as a foreigner — the roads are good, traffic is light outside Sanya, and the coastal scenery is beautiful. You need a Chinese driving licence (not an IDP). The 51km Sanya-Lingshui coastal road is a new tourist highway with viewpoints every few kilometres." },
    ],
    practical: [
      { title: "Getting There & Visa", body: "Fly into Sanya (SYX) or Haikou (HAK). Hainan has visa-free access for 59 countries (up to 30 days) if you fly directly to Hainan and stay on the island. If you also want to visit mainland China, you need a full Chinese visa. High-speed train Sanya-Haikou: 1.5 hrs (¥100)." },
      { title: "Where to Stay", body: "Yalong Bay: luxury resorts ($150-400/night). Sanya Bay: mid-range ($50-150/night). Dadonghai: budget-mid ($40-100/night). Haitang Bay: luxury ($200-500/night). Haikou: city hotels ($30-80/night). Book ahead for Chinese New Year — Sanya hotels sell out and prices triple." },
      { title: "When to Go", body: "November-April is the best season — warm (22-28°C), dry, and sunny. This is Hainan's high season (Chinese tourists escaping northern winter). May-October is hot (30-35°C), humid, and the rainy/typhoon season (especially August-October). Prices drop 30-50% in summer." },
      { title: "What to Eat", body: "Wenchang chicken (文昌鸡, poached chicken with ginger-scallion oil), Hele crab (和乐蟹, steamed with ginger), Dongshan lamb (东山羊肉, braised goat), and Jiaji duck (加积鸭). Plus tropical fruit: coconut (¥10), mango, papaya, dragon fruit, and Hainan's unique 'stinky fruit' (榴莲, durian). The seafood is fresh and cheap at local restaurants (not resort restaurants)." },
    ],
    nextSteps: [
      { href: '/south-china/hong-kong-macau', label: 'Hong Kong & Macau', description: 'Fly from Sanya to Hong Kong in 1.5 hours' },
      { href: '/south-china/guangzhou-shenzhen', label: 'Guangzhou & Shenzhen', description: 'Fly from Sanya to Guangzhou in 1.5 hours' },
    ],
  },
];

for (const r of routes) {
  writePage(r.dir, r.slug, r);
  console.log(`✅ ${r.dir}/${r.slug}`);
}
console.log(`\nDone. ${routes.length} Shandong + Jiangxi + Sanya pages.`);