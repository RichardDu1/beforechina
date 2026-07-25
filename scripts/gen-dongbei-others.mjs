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

// ====== DONGBEI + YANGTZE CRUISE + OTHERS ======

const routes = [
  // --- DONGBEI ---
  {
    dir: "dongbei", slug: "harbin-snow-town",
    metaTitle: "Harbin & Snow Town (5-6 Days) | Dongbei Winter Wonderland",
    metaDesc: "Harbin's Ice and Snow Festival — the world's largest ice sculpture event — plus Snow Town's deep powder landscapes and Dongbei winter food culture.",
    kicker: "Dongbei · 5-6 Days", title: "Harbin & Snow Town: China's Winter Wonderland",
    subtitle: "The world's largest ice sculpture festival, a village buried under 2 metres of powder snow, and the warmth of Dongbei cuisine in -30°C — this is winter in China's far northeast.",
    duration: "5-6 days", route: "Harbin → Snow Town → Yabuli → Harbin", budget: "$600-900/person",
    overview: "Dongbei (东北, 'Northeast') is China's Manchuria — the three provinces of Heilongjiang, Jilin, and Liaoning, bordering Russia and North Korea. In winter, it becomes one of the world's most extreme cold-weather destinations. Harbin's International Ice and Snow Sculpture Festival is the largest of its kind: entire buildings (castles, cathedrals, pagodas) sculpted from blocks of ice pulled from the frozen Songhua River, illuminated in neon at night. China Snow Town (中国雪乡), 5 hours from Harbin, is a village buried under 2 metres of powder snow — thanks to a unique microclimate where Siberian cold fronts meet moist air from the Sea of Japan. This route is a winter-only trip (December-February).",
    faqQ: "How cold does it really get in Harbin in winter?", faqA: "Daytime temperatures in January average -18°C and drop to -30°C at night. With wind chill, it can feel like -40°C. You need proper winter gear: thermal base layers, a down jacket rated to -30°C, insulated snow boots, a balaclava, ski goggles (your eyelashes freeze otherwise), and hand warmers. This is not a fashion trip. The ice sculptures are outside and you will be standing on frozen rivers for hours. Prepare accordingly.",
    stops: [
      { day: "Day 1: Arrive Harbin", content: "Fly into Harbin Taiping Airport (HRB). Transfer to hotel. Afternoon: Central Street (中央大街) — a 1.4km pedestrian street of Russian-style buildings from the early 1900s, when Harbin was a Russian railway town. The cobblestones are original, shipped from Russia in the 1920s. Visit St. Sophia Cathedral (圣索菲亚教堂, ¥20) — a Russian Orthodox cathedral built in 1907, now a museum of Harbin's Russian history. Evening: hotpot — the Dongbei version uses lamb and sauerkraut (酸菜), a legacy of Harbin's Russian and Manchu heritage.", tip: "Harbin was built by Russians. The city was a stop on the Trans-Siberian Railway and had a Russian population of 100,000 in the 1920s. The architecture on Central Street is genuine — not a theme park. The best way to understand Harbin is to think of it as a Russian city that happens to be in China." },
      { day: "Day 2: Harbin — Ice & Snow World", content: "Afternoon-evening: Harbin Ice and Snow World (哈尔滨冰雪大世界, ¥330) — the main event. The park covers 600,000 m² and features buildings, castles, slides, and sculptures all made of ice blocks from the Songhua River. The ice is 50-80cm thick and crystal clear. Go at 3pm to see the sculptures in daylight (they are blue-white) and stay for the neon light show after dark (4:30pm in winter). The ice slides are terrifying and essential. The temperature inside the park is -25°C to -35°C — dress like you are going to the Arctic.", tip: "Ice and Snow World ticket: ¥330 (book on Trip.com or at the gate). The ice slides are free — the queue for the longest slide (300m) can be 1 hour. Go on a weekday to avoid the worst crowds. The park has warming huts with hot drinks (¥20-30) — use them every 45 minutes. Frostbite is a real risk. If your fingers or toes go numb, go inside immediately." },
      { day: "Day 3: Harbin → Snow Town", content: "Drive 5 hours from Harbin to China Snow Town (中国雪乡, ¥120). Snow Town is a village in a mountain valley where a unique microclimate produces reliable, deep powder snow — 2 metres accumulation from November to March. The village is a cluster of wooden houses with distinctive mushroom-shaped snow caps on the roofs. Walk the main street, climb the wooden walkway to the observation deck for the classic Snow Town panorama (red lanterns glowing against the white snow at dusk), and try sledding and snow tubing. Stay overnight in a local guesthouse (kang bed — a heated brick platform).", tip: "Snow Town entrance: ¥120 (includes shuttle bus). The village is remote — 5 hours from Harbin on icy roads. Book transport through your hotel or a tour company. The guesthouses have kang beds (炕) — a heated brick platform you sleep on. It is the traditional Dongbei heating method and is genuinely warm. The food in Snow Town is basic and expensive by Chinese standards (¥50-80/person for a simple meal) — it is remote." },
      { day: "Day 4: Snow Town → Yabuli → Harbin", content: "Morning: final Snow Town photos in the early light (the snow is at its most pristine before the crowds). Then drive 2.5 hours to Yabuli Ski Resort (亚布力滑雪场) — China's largest ski resort. Yabuli has 46 ski runs and hosted the 1996 Asian Winter Games. A half-day lift pass is ¥300-500. If you are a beginner, take a lesson (¥200/hr) — the instructors speak basic English. Afternoon: drive 3 hours back to Harbin. Evening: Harbin beer and Russian food on Central Street.", tip: "Yabuli is China's best ski resort but it is not Whistler or Chamonix. Manage expectations: the snow is partly natural, partly artificial. The runs are shorter and the facilities are older than Western resorts. But skiing in China is an experience in itself, and the Dongbei winter landscape is unique. Rent gear at the resort (¥200-300/set)." },
      { day: "Day 5: Harbin", content: "Morning: Sun Island Snow Sculpture Expo (太阳岛雪博会, ¥240) — the daytime counterpart to Ice and Snow World, featuring massive snow sculptures (not ice) carved by international teams. The sculptures are up to 30m high and incredibly detailed. Afternoon: Siberian Tiger Park (东北虎林园, ¥110) — a controversial but unique wildlife park with 500+ Siberian tigers. You ride in a caged bus through the enclosures. You can buy meat (¥50-200) to feed the tigers through the bus bars. Evening: Harbin dumpling feast — Dongbei dumplings (饺子) are the best in China.", tip: "The Sun Island Snow Sculpture Expo is less famous than Ice and Snow World but arguably more impressive artistically — the sculptures are enormous (up to 30m) and the detail achievable in snow is finer than ice. The Siberian Tiger Park is uncomfortable viewing for some — the tigers are in enclosures and the feeding is commercialised. It is up to you whether to visit." },
      { day: "Day 6: Harbin → Depart", content: "Fly out from Harbin. If your flight is in the evening, visit the Unit 731 Museum (free, 1.5 hrs from Harbin centre) — a Japanese biological warfare research facility from WWII, now a somber museum. It is heavy but historically important. Alternatively, visit the Harbin Polarland (¥150) for beluga whale shows and penguins — lighter fare for a departure day.", tip: "Harbin airport is 35 km from the city (40-60 min by taxi, ¥120-150). The airport bus (¥20) departs from Central Street. In winter, allow extra time — snow can delay traffic. The airport is small and efficient — 1 hour before your flight is sufficient." },
    ],
    practical: [
      { title: "Getting There", body: "Fly into Harbin (HRB). Harbin-Snow Town: private car (5 hrs, ¥800-1,200 round trip). Snow Town-Yabuli: private car (2.5 hrs). Yabuli-Harbin: car (3 hrs). Book Snow Town transport through your Harbin hotel or a tour company." },
      { title: "Where to Stay", body: "Harbin: Central Street area ($40-100/night). Snow Town: guesthouse with kang bed (¥200-400/night). Book Snow Town accommodation 2-4 weeks ahead for December-February — it fills up." },
      { title: "When to Go", body: "December-February is the winter season. The Ice and Snow Festival runs late December to late February (exact dates vary). The ice sculptures are at their best in January when temperatures are coldest. Chinese New Year (January/February) is peak — prices double and Snow Town is packed." },
      { title: "What to Wear", body: "Thermal base layers (merino wool), a down jacket rated to -30°C, insulated snow boots, a balaclava, ski goggles, and hand warmers. You need 4-5 layers on top, 2-3 on the bottom. Rent extra coats from your hotel (¥50/day). Frostbite is a real risk — cover all exposed skin." },
    ],
    nextSteps: [
      { href: '/dongbei/changbaishan', label: 'Changbaishan', description: 'Add the North Korean border mountain and hot springs' },
      { href: '/golden-triangle/beijing-in-depth', label: 'Beijing in depth', description: 'Beijing is 2 hours from Harbin by high-speed train' },
    ],
  },
  {
    dir: "dongbei", slug: "changbaishan",
    metaTitle: "Changbaishan (4-5 Days) | North Korea Border Mountain & Heavenly Lake",
    metaDesc: "Changbaishan's crater lake on the North Korean border, volcanic hot springs, and winter powder skiing — 4-5 days at China's most sacred mountain.",
    kicker: "Dongbei · 4-5 Days", title: "Changbaishan: Heavenly Lake on the North Korean Border",
    subtitle: "A volcanic crater lake straddling the China-North Korea border, natural hot springs in -30°C, and China's best powder skiing — Changbaishan is Dongbei's wildest destination.",
    duration: "4-5 days", route: "Beijing/Shanghai → Changbaishan → Yanji (optional)", budget: "$500-800/person",
    overview: "Changbaishan (长白山, 'Ever-White Mountain') is a dormant volcano on the China-North Korea border. Its crater lake, Tianchi (天池, 'Heavenly Lake'), sits at 2,189m and is the world's highest volcanic crater lake. The mountain is sacred to both Koreans (who consider it the birthplace of the Korean people) and Manchus (who considered it their ancestral homeland). In winter, Changbaishan offers China's best powder skiing at the Wanda Resort. In summer, it is a cool escape with wildflowers and alpine scenery. The North Korean border runs through the middle of the lake — you can literally look into North Korea from the viewing platform.",
    faqQ: "Can you actually see North Korea from Changbaishan?", faqA: "Yes. The crater lake is bisected by the China-North Korea border. From the western slope viewing platform (accessible from the Chinese side), you look across the lake at the North Korean side. You will see North Korean territory but not North Korean people — the North Korean side of the mountain is undeveloped. The border is marked by a stone pillar at the viewing platform. You can take photos but do not cross — the Chinese military patrols the area.",
    stops: [
      { day: "Day 1: Arrive Changbaishan", content: "Fly into Changbaishan Airport (NBS) from Beijing (2 hrs), Shanghai (3 hrs), or Harbin (1 hr). The airport is 30 minutes from the Wanda Resort (万达度假区) — a ski resort town with hotels, restaurants, and hot springs. Check into your hotel. Afternoon: explore the resort, rent ski gear for tomorrow. Evening: outdoor hot springs (¥200-300) — soaking in 40°C volcanic water while the air temperature is -20°C, steam rising into the pine forest.", tip: "Changbaishan Airport (NBS) is small — 2-3 flights per day in winter, more in summer. Book flights 2-3 weeks ahead. The Wanda Resort is a purpose-built ski town (opened 2012) with international-standard hotels (Hyatt, Westin, Holiday Inn). It is expensive by Chinese standards but convenient. The hot springs are genuine volcanic springs — the water is rich in minerals and comes out of the ground at 60°C." },
      { day: "Day 2: Changbaishan — Heavenly Lake (Winter)", content: "Take a 30-minute bus from Wanda Resort to the Changbaishan Western Slope entrance (¥125 + ¥85 shuttle bus). In winter, the mountain is accessed by snowmobile (¥135) from the shuttle bus stop to the crater rim. The ride is 10 minutes at -25°C — cover every inch of skin. At the rim, you emerge at the Heavenly Lake viewing platform at 2,189m. The lake is frozen solid from November to June — a white disc surrounded by black volcanic peaks. The wind at the rim is brutal (-30°C with wind chill). Spend 15-20 minutes (that is all you will manage in the cold), then snowmobile down. Afternoon: hot springs to recover. Evening: Korean BBQ (Changbaishan has a large ethnic Korean population).", tip: "Heavenly Lake is visible about 30% of the time — clouds and snow close the mountain frequently. Check the forecast and go on the clearest day of your trip. The mountain opens at 8am — go early for the best visibility. The wind at the crater rim is the most intense cold you will ever experience. Seriously — ski goggles, balaclava, everything covered." },
      { day: "Day 3: Changbaishan Skiing", content: "Full day skiing at Wanda Changbaishan International Resort. The resort has 43 ski runs across 5 mountains, with a vertical drop of 387m. The snow is dry powder (Changbaishan gets 1-2m of natural snowfall annually) — the best in China. The resort has a gondola, chairlifts, and magic carpets for beginners. Ski rental: ¥400-600/day including skis, boots, poles, and helmet. Afternoon: snowmobile tour through the birch forest (¥300/hr) or a dog sled ride (¥200). Evening: Korean BBQ and soju.", tip: "Wanda Changbaishan ski passes: ¥450-650/day in peak season (December-February), ¥300-450 in shoulder season. The resort is less crowded than Yabuli (Harbin) and the snow quality is better. The runs are intermediate-friendly — not extreme terrain. The resort has English-speaking instructors (¥400-600/hr)." },
      { day: "Day 4: Changbaishan → Yanji (Optional)", content: "Option A: morning skiing or hot springs, then fly out from Changbaishan Airport. Option B: drive 3 hours to Yanji (延吉) — the capital of the Yanbian Korean Autonomous Prefecture. Yanji is a Chinese city that feels Korean: street signs in Chinese and Korean, Korean BBQ on every corner, and locals speaking Korean as their first language. Visit the Yanbian University area for Korean street food — tteokbokki (spicy rice cakes), kimbap (seaweed rice rolls), and naengmyeon (cold noodles). The Yanbian Korean culture is a unique Dongbei experience.", tip: "Yanji is a fascinating cultural hybrid. The ethnic Koreans in Yanbian are Chinese citizens but speak Korean, watch South Korean TV, and maintain Korean cultural traditions. The Korean food in Yanji is authentic — many restaurants are run by families who have been in Dongbei for generations. The city is 30 minutes from the North Korean border (Tumen)." },
      { day: "Day 5: Yanji → Depart", content: "Morning: visit the Tumen border area (图们) — a bridge across the Tumen River where you can look into North Korea (the city of Namyang is visible). The border observation deck (¥25) has telescopes pointed at the North Korean side. Afternoon: fly out from Yanji Chaoyangchuan Airport (YNJ) or take the 2-hour high-speed train to Changchun (¥100) for connections.", tip: "The Tumen border observation deck is a strange experience — Chinese tourists taking selfies while North Korean soldiers patrol the opposite bank. You can see Namyang's houses, a statue of Kim Il-sung, and sometimes people going about their day. It is the closest most people will get to North Korea." },
    ],
    practical: [
      { title: "Getting There", body: "Fly into Changbaishan Airport (NBS) from Beijing (2 hrs), Shanghai (3 hrs), or Harbin (1 hr). The airport is 30 min from Wanda Resort. Yanji Airport (YNJ) is an alternative gateway with more flights. High-speed trains: Yanji-Changchun (2 hrs), Changchun-Beijing (4 hrs)." },
      { title: "Where to Stay", body: "Wanda Resort: Holiday Inn (¥500-800/night), Westin (¥800-1,500), Hyatt (¥1,000-2,000). Budget options in Songjianghe town (¥150-300/night). Yanji: city centre (¥200-400/night). Wanda Resort prices are highest December-February." },
      { title: "When to Go", body: "Winter (December-February): skiing and frozen Heavenly Lake. Summer (June-August): hiking, wildflowers, and unfrozen lake (the lake is a deep blue crater). May and September-October: shoulder season, fewer crowds, moderate weather. The lake is most likely to be visible in September-October." },
      { title: "What to Wear (Winter)", body: "Same as Harbin: thermal layers, down jacket rated to -30°C, insulated boots, balaclava, goggles, hand warmers. The crater rim at 2,189m is significantly colder and windier than the resort. The resort has rental gear if you do not have your own." },
    ],
    nextSteps: [
      { href: '/dongbei/harbin-snow-town', label: 'Harbin & Snow Town', description: 'Combine with Harbin\'s Ice Festival for the full Dongbei winter' },
      { href: '/golden-triangle/beijing-in-depth', label: 'Beijing in depth', description: 'Beijing is the gateway to Dongbei' },
    ],
  },

  // --- YANGTZE CRUISE ---
  {
    dir: "yangtze-cruise", slug: "chongqing-yichang-cruise",
    metaTitle: "Yangtze River Cruise (4-5 Days) | Chongqing to Yichang Three Gorges",
    metaDesc: "A 4-5 day Yangtze cruise from Chongqing to Yichang through the Three Gorges — the world's largest dam, limestone gorges, and Shennong Stream.",
    kicker: "Yangtze Cruise · 4-5 Days", title: "Yangtze River Cruise: Chongqing to Yichang Through the Three Gorges",
    subtitle: "Four days on the world's third-longest river, through limestone gorges, past the largest dam ever built, and into tributary streams on small boats — the classic Yangtze cruise.",
    duration: "4-5 days", route: "Chongqing → Fengdu → Three Gorges → Three Gorges Dam → Yichang", budget: "$600-1,200/person (cruise only)",
    overview: "The Yangtze River cruise from Chongqing to Yichang is one of China's classic travel experiences. Over 4 days (downstream) or 5 days (upstream), you travel 660 km through the Three Gorges — Qutang (the shortest and most dramatic), Wu (the deepest and most beautiful), and Xiling (the longest) — on a river that has been China's main east-west artery for millennia. The cruise includes shore excursions to the Three Gorges Dam (the world's largest hydroelectric project), the 'Ghost City' of Fengdu, and the Shennong Stream (a tributary explored by small wooden boats). It is a comfortable, scenic way to travel between Chongqing and Yichang.",
    faqQ: "Is the Yangtze cruise worth it after the Three Gorges Dam raised the water level?", faqA: "The water level rose 100m after the dam was completed in 2003, which changed the gorges — they are narrower at the top than at the bottom now, and some archaeological sites were submerged. But the gorges are still dramatic (the cliffs are 1,000m+ high, so 100m of water rise is only 10% of the height), and the cruise is still a wonderful experience. The dam itself is an engineering marvel worth seeing. Go with realistic expectations: this is a comfortable river cruise through dramatic scenery, not an untouched wilderness experience.",
    stops: [
      { day: "Day 1: Chongqing → Board Ship", content: "Arrive Chongqing (重庆). Board your cruise ship at Chaotianmen Dock in the late afternoon/evening. Ships typically depart at 9-10pm. After boarding: safety briefing, welcome dinner, and watching Chongqing's skyline lights as you sail away. Chongqing's hilly skyline is spectacular at night — the city is built on a peninsula where the Yangtze and Jialing rivers meet.", tip: "Chongqing deserves 1-2 days before the cruise. Visit the Ciqikou old town, eat Chongqing hotpot (the numbing-spicy version that is the city's signature), and take the Yangtze River cable car across the river. The best hotpot: find a busy local place in Jiefangbei or Nanbin Road — the more plastic stools on the pavement, the better the hotpot." },
      { day: "Day 2: Fengdu Ghost City / Shibaozhai", content: "Morning shore excursion to Fengdu Ghost City (丰都鬼城, included in cruise fare) — a Ming dynasty temple complex on Ming Mountain dedicated to the afterlife, with statues of demons, judges of the dead, and the 'Bridge of Helplessness' you must cross to reach the afterlife. Alternatively, some cruises visit Shibaozhai (石宝寨) — a 12-storey wooden pagoda built against a 200m rock pillar, now an island after the dam raised the water. Afternoon: cruising through the countryside. Evening: captain's welcome dinner.", tip: "Fengdu Ghost City is a 2-hour uphill walk (or cable car, ¥20). The temple complex is a folk-religion representation of the Chinese afterlife — 3 tests to determine if you go to heaven or hell. It is kitschy but culturally interesting. Shibaozhai is architecturally more impressive — the pagoda was built in 1819 without nails." },
      { day: "Day 3: Three Gorges", content: "Morning: enter Qutang Gorge (瞿塘峡) — the shortest (8 km) and most dramatic of the Three Gorges, with cliffs rising vertically from the water. This is the gorge on the ¥10 note. Then Wu Gorge (巫峡) — the longest and most beautiful (45 km), with 12 peaks rising through the mist. The ship's guide narrates the peaks and their legends. Afternoon: transfer to a small boat for the Shennong Stream (神农溪) excursion — a tributary through a narrow gorge where the original water level is visible on the cliffs. Local Tujia boatmen pole the boats. Evening: pass through the 5-stage ship locks at the Three Gorges Dam (3-4 hours, fascinating engineering).", tip: "The Shennong Stream small boat excursion is the cruise highlight — you leave the big ship and go deep into a narrow tributary where the dam's impact is most visible (the old waterline is 100m above your head). The Tujia boatmen used to pole the boats manually — now they are motorised, but the scenery is still stunning." },
      { day: "Day 4: Three Gorges Dam → Yichang", content: "Morning: visit the Three Gorges Dam (三峡大坝, included in cruise fare) — the world's largest hydroelectric dam: 2.3 km wide, 185m high, generating 22,500 MW. The visitor centre has an observation deck, a model of the dam, and exhibits on the project (including the relocation of 1.3 million people). Afternoon: disembark at Yichang (宜昌). Transfer to Yichang East Railway Station for high-speed trains to Wuhan (2 hrs, ¥120), Chongqing (4 hrs), or Shanghai (7 hrs). Fly out from Yichang Sanxia Airport (YIH).", tip: "The Three Gorges Dam visitor centre is state propaganda — it presents the dam as an unqualified triumph. The reality is more complex: 1.3 million people were relocated, 13 cities and 1,352 villages were submerged, and the environmental impact on the Yangtze ecosystem is significant. The engineering is genuinely extraordinary. Go for the engineering, but hold the official narrative lightly." },
    ],
    practical: [
      { title: "Cruise Lines & Booking", body: "Major cruise lines: Victoria Cruises (American-managed, best for Westerners), Century Cruises, Yangtze Explorer (most luxurious), and President Cruises. Downstream (Chongqing→Yichang): 4 days/3 nights. Upstream (Yichang→Chongqing): 5 days/4 nights (slower against the current). Book through a travel agency or Trip.com." },
      { title: "Cabin Types", body: "Standard cabin (¥2,000-4,000/person for 4-day cruise), junior suite (¥4,000-6,000), and executive suite (¥6,000-10,000+). Standard cabins are comfortable (15-20 m², private bathroom, river-view window or balcony). Book a balcony cabin — the scenery is the point." },
      { title: "When to Go", body: "March-May and September-November. Spring has comfortable temperatures and blooming flowers. Autumn has clear skies and the best visibility of the gorges. Summer (June-August) is hot, humid, and the rainy season (river can be brown with silt). Winter (December-February) is cold on the water but cruises are 30-50% cheaper." },
      { title: "What to Pack", body: "Binoculars (essential for gorge viewing), a jacket (it is windy on deck), comfortable walking shoes for shore excursions, and motion sickness pills (the river is mostly calm but the section below the dam can be choppy)." },
    ],
    nextSteps: [
      { href: '/sichuan/chengdu-jiuzhaigou-huanglong', label: 'Chengdu & Jiuzhaigou', description: 'Start in Chengdu before the cruise departs Chongqing' },
      { href: '/golden-triangle/beijing-xian-shanghai', label: 'Golden Triangle', description: 'Combine with Beijing, Xian, and Shanghai' },
    ],
  },

  // --- ZHANGJIAJIE + HUANGSHAN ---
  {
    dir: "zhangjiajie", slug: "avatar-mountains",
    metaTitle: "Zhangjiajie (4-5 Days) | Avatar Mountains Travel Guide",
    metaDesc: "Zhangjiajie's sandstone pillars that inspired Avatar's floating mountains, the world's longest glass bridge, and Tianmen Mountain's cliff-hanging walkway.",
    kicker: "Hunan · 4-5 Days", title: "Zhangjiajie: The Avatar Mountains of Hunan",
    subtitle: "3,000 sandstone pillars rising through mist, the world's longest and highest glass bridge, and a cliff-hanging walkway at 1,430m — Zhangjiajie is China's most surreal landscape.",
    duration: "4-5 days", route: "Zhangjiajie National Park → Grand Canyon Glass Bridge → Tianmen Mountain", budget: "$500-750/person",
    overview: "Zhangjiajie's sandstone pillars — 3,000 of them, up to 200m tall, rising vertically from a subtropical forest — are one of the most otherworldly landscapes on Earth. They directly inspired the floating Hallelujah Mountains in James Cameron's Avatar. The area is now China's first UNESCO Global Geopark and one of its most popular natural attractions. This route covers the three main sites: Zhangjiajie National Forest Park (the pillars), the Grand Canyon Glass Bridge (the world's longest and highest), and Tianmen Mountain (the cliff-hanging walkway and the 999-step 'Stairway to Heaven').",
    faqQ: "Is Zhangjiajie as crowded as people say?", faqA: "Yes, in peak season (July-August, Chinese holidays). The park receives 50 million+ visitors annually, most of them Chinese domestic tourists. The key to avoiding crowds: go in shoulder season (April, September, November), enter the park at opening (7am), and stay inside the park or at the park gate (so you can enter before the tour buses arrive at 9am). The park is large enough that even on a busy day, you can find quiet trails if you walk away from the main viewpoints.",
    stops: [
      { day: "Day 1: Arrive Zhangjiajie", content: "Fly into Zhangjiajie Hehua Airport (DYG) or take the high-speed train from Changsha (2.5 hrs, ¥120). Check into accommodation at Wulingyuan (the town at the park entrance). Afternoon: Zhangjiajie Grand Canyon Glass Bridge (张家界大峡谷玻璃桥, ¥219) — the world's longest (430m) and highest (300m above the canyon floor) glass-bottom bridge. Walking across a transparent bridge suspended 300m above a canyon is genuinely terrifying. After the bridge, walk the Grand Canyon trail (2-3 hours) through waterfalls, pools, and a limestone cave. Evening: Wulingyuan town for dinner.", tip: "The Glass Bridge ticket (¥219) must be booked in advance — it sells out. Book on Trip.com or the official WeChat account. No large bags, cameras with detachable lenses, or selfie sticks allowed on the bridge (they provide lockers). The canyon walk after the bridge is a 2-3 hour downhill hike with beautiful scenery — wear good shoes." },
      { day: "Day 2: Zhangjiajie National Forest Park — Yuanjiajie & Tianzi Mountain", content: "Enter the park at 7am (¥228, 4-day pass). Take the Bailong Elevator (百龙天梯, ¥72) — a glass elevator built against a 326m cliff face, the world's tallest outdoor elevator. At the top, walk to Yuanjiajie Scenic Area (袁家界) — the Avatar Hallelujah Mountains viewpoint. The 'Southern Sky Pillar' (南天一柱), renamed 'Avatar Hallelujah Mountain' in 2010, is the pillar that inspired the film. Then shuttle bus to Tianzi Mountain (天子山) — panoramic views of the pillar forest from 1,262m. Descend by cable car (¥72).", tip: "The Bailong Elevator has 2-3 hour queues from 9am-2pm in peak season. Enter the park at 7am (opening time) and go straight there. The elevator ride is 88 seconds. Yuanjiajie and Tianzi Mountain are the two essential viewpoints. Do Yuanjiajie first (it is busier) and Tianzi Mountain in the afternoon when the light is better for photography." },
      { day: "Day 3: Zhangjiajie National Forest Park — Golden Whip Stream & Yellow Stone Village", content: "Enter the park early. Walk the Golden Whip Stream (金鞭溪) — a 7.5 km flat trail along a crystal-clear stream at the bottom of the gorge, looking up at the sandstone pillars. The walk takes 2-3 hours and is the most peaceful part of Zhangjiajie (most visitors stay on the mountain tops). You will see wild macaques along the trail — do not feed them (they bite). Afternoon: cable car up to Yellow Stone Village (黄石寨, ¥65) — the oldest developed area of the park with a 3.8 km loop trail around the summit. Fewer visitors than Yuanjiajie, equally good views.", tip: "Golden Whip Stream is a flat, easy walk and the most underrated part of Zhangjiajie. The perspective from the bottom of the gorge is completely different from the mountain-top views — you appreciate the scale of the pillars when you are standing at their base. The macaques are aggressive — keep food hidden, do not make eye contact, and do not smile (showing teeth is a threat to monkeys)." },
      { day: "Day 4: Tianmen Mountain → Depart", content: "Morning: Tianmen Mountain (天门山, ¥258) — take the world's longest cable car (7.5 km, 30 minutes) from Zhangjiajie city centre to the summit at 1,430m. The cable car rises over the city, farmland, and then up the mountain face. At the top, walk the cliff-hanging walkway (玻璃栈道) — a 60m glass path bolted to a vertical cliff. Then walk to Tianmen Cave (天门洞) — a natural arch 131.5m high in the mountain, reached by the 999-step 'Stairway to Heaven' or an escalator inside the mountain. Descend by bus on the 99-bend road (通天大道), one of the world's most dramatic roads. Afternoon: fly out or take the train.", tip: "Tianmen Mountain ticket (¥258) includes the cable car up and bus down (or vice versa). Book a morning slot — the cable car queue can be 2-3 hours from 9am. The cliff walkway (¥5 shoe covers) is more psychological than actually dangerous — the glass is thick and the walkway is bolted into the cliff. The 999 steps down through Tianmen Cave are steep and can be slippery — the escalator inside the mountain (¥32) is an alternative." },
    ],
    practical: [
      { title: "Getting There", body: "Fly into Zhangjiajie Hehua Airport (DYG) from Beijing, Shanghai, Chengdu, or Guangzhou. High-speed trains from Changsha (2.5 hrs, ¥120). The park entrance at Wulingyuan is 40 minutes from the airport/train station by bus (¥12)." },
      { title: "Where to Stay", body: "Wulingyuan town (武陵源) — the main tourist base at the park entrance, with hotels and restaurants ($30-80/night). Zhangjiajie city — 40 min from the park, cheaper but less convenient ($20-50/night). For the best experience, stay in Wulingyuan." },
      { title: "When to Go", body: "April-June and September-November. The mist is most atmospheric in spring and autumn. Avoid July-August (crowds, heat, and summer rain) and Chinese holidays (May Day, National Day — the park is impassable). Winter (December-February) has snow on the pillars — beautiful and uncrowded, but some trails may close." },
      { title: "What to Pack", body: "Comfortable walking shoes (you will walk 10-15 km/day), rain jacket (the mountain weather changes fast), snacks (food in the park is expensive and mediocre), and a fully charged phone/camera. The park has shuttle buses between viewpoints — the ticket includes them." },
    ],
    nextSteps: [
      { href: '/zhangjiajie/fenghuang-ancient-town', label: 'Fenghuang Ancient Town', description: 'Add the riverside stilt-house town 3 hours from Zhangjiajie' },
      { href: '/guangxi/guilin-yangshuo-lijiang', label: 'Guilin & Yangshuo', description: 'Another iconic Chinese landscape, 4 hours by train' },
    ],
  },
  {
    dir: "huangshan", slug: "yellow-mountain",
    metaTitle: "Huangshan (3-4 Days) | Yellow Mountain Travel Guide",
    metaDesc: "Huangshan's granite peaks, sea of clouds, and ancient pine trees — China's most painted and most beautiful mountain, plus Hongcun and Xidi ancient villages.",
    kicker: "Anhui · 3-4 Days", title: "Huangshan: The Yellow Mountain & Huizhou Villages",
    subtitle: "China's most painted mountain — granite peaks rising through a sea of clouds, ancient pine trees clinging to cliffs, and nearby Hongcun, the 900-year-old village that inspired Crouching Tiger, Hidden Dragon.",
    duration: "3-4 days", route: "Huangshan City → Huangshan Mountain → Hongcun/Xidi → Huangshan City", budget: "$400-600/person",
    overview: "Huangshan (黄山, 'Yellow Mountain') is not China's highest mountain (1,864m) or its most sacred — but it is widely considered the most beautiful. Its granite peaks, hot springs, ancient pine trees, and 'sea of clouds' have inspired Chinese poets and painters for over 1,000 years. The saying goes: 'After seeing the Five Great Mountains, you don't need to see any others. After seeing Huangshan, you don't need to see the Five Great Mountains.' Below the mountain, the Huizhou villages of Hongcun and Xidi — 900-year-old whitewashed villages with horse-head walls, reflected in lotus ponds — are UNESCO World Heritage and the setting for the opening scenes of Crouching Tiger, Hidden Dragon.",
    faqQ: "Is it worth sleeping on top of Huangshan?", faqA: "Yes, if you can. The sunrise over the sea of clouds from the summit is the essential Huangshan experience. There are 3 hotels on the mountain (¥800-1,500/night, book 2-4 weeks ahead). The alternative is sleeping at the base (Tangkou) and taking the first cable car up (6:30am) — you will miss sunrise but save ¥500-1,000. The summit hotels are expensive and basic (thin walls, simple rooms) — you are paying for the location, not the luxury.",
    stops: [
      { day: "Day 1: Arrive Huangshan", content: "Fly into Huangshan Tunxi Airport (TXN) or take the high-speed train to Huangshan North (2.5 hrs from Shanghai, ¥200; 1.5 hrs from Hangzhou, ¥120). Transfer to Tangkou (汤口), the town at the mountain base (1 hr from the airport/train station). Afternoon: visit the Huangshan Hot Springs (¥200-300) — natural hot springs at the mountain base, perfect for relaxing before tomorrow's climb. Evening: pack a daypack for the mountain (warm clothes, snacks, water, headlamp for sunrise).", tip: "Tangkou is the gateway town for Huangshan. Everything here is oriented around the mountain — hotels, restaurants, gear shops. Buy a walking stick (¥5-10) — it genuinely helps on the steep stairs. The Huangshan entrance ticket is ¥190 (peak season) / ¥150 (off-peak). The cable cars are ¥80-90 each way. The summit hotels charge ¥50-80 for a basic meal — bring instant noodles and snacks." },
      { day: "Day 2: Huangshan Mountain", content: "Enter the mountain at 6:30am. Take the Yungu Cable Car (云谷索道, ¥80) from the eastern side to the summit area. The cable car rises 1,000m through the clouds — when you emerge above the cloud layer, the view is unforgettable. The summit trail is a 6-8 km loop past the famous sights: Begin-to-Believe Peak (始信峰), the Brush Pen Peak (梦笔生花), and Lion Peak (狮子峰) for the first sea-of-clouds panorama. Check into your summit hotel. Afternoon: hike to the West Sea Grand Canyon (西海大峡谷) — a 2-3 hour loop through the most dramatic section of Huangshan, with paths carved into vertical cliffs and views of the canyon's granite spires. Sunset at Bright Summit Peak (光明顶, 1,860m) — the highest point on the mountain.", tip: "The West Sea Grand Canyon is Huangshan's best hike — 2-3 hours on paths carved into cliffs, through tunnels, and across stone bridges. The trail descends 300m to the canyon floor, then you take the funicular tram back up (¥100). The canyon closes in rain or ice. Start the loop by 1pm to finish before dark. Bright Summit Peak is the best sunrise AND sunset spot — it is the highest point and has 360° views." },
      { day: "Day 3: Huangshan Sunrise → Hongcun → Depart", content: "Wake at 4:30am for sunrise at Bright Summit Peak or Lion Peak. The 'sea of clouds' phenomenon — when clouds fill the valleys below and the peaks become islands — happens about 50-60 days per year, mostly after rain. If you get it, you will understand why Chinese painters have been painting this mountain for 1,000 years. After sunrise: descend by the Yuping Cable Car (玉屏索道, ¥90), stopping at the Welcoming Guest Pine (迎客松) — a 1,500-year-old pine tree growing horizontally from a cliff, the symbol of Huangshan. Descend to Tangkou by 11am. Afternoon: visit Hongcun (宏村, ¥104) and/or Xidi (西递, ¥104) — 900-year-old Huizhou villages. Hongcun is more famous (Crouching Tiger, Hidden Dragon), Xidi is quieter. Walk the cobbled lanes, photograph the whitewashed walls and horse-head roofs reflected in the moon pond. Evening: train or fly out.", tip: "The Welcoming Guest Pine is Huangshan's most famous tree — and the most crowded photo spot on the mountain. Queue 20-30 minutes for a photo. The tree is 1,500 years old and has its own security guard. Hongcun (¥104) is touristy but genuinely beautiful — the reflection of the white walls and horse-head roofs in the moon pond is the classic Huizhou image. Go after 3pm when the tour groups thin out." },
    ],
    practical: [
      { title: "Getting There", body: "High-speed train to Huangshan North from Shanghai (2.5 hrs, ¥200), Hangzhou (1.5 hrs, ¥120), or Nanjing (3 hrs). Huangshan North to Tangkou: 1 hr by bus (¥20). Alternatively fly into Huangshan Tunxi Airport (TXN)." },
      { title: "Where to Stay", body: "Tangkou (mountain base): $30-80/night. Summit hotels: Beihai Hotel, Xihai Hotel, or Shilin Hotel (¥800-1,500/night, book 2-4 weeks ahead). The summit hotels are basic for the price — you are paying for sunrise, not luxury." },
      { title: "When to Go", body: "March-May and September-November. Spring has blooming azaleas and the most 'sea of clouds' days. Autumn has clear skies and golden light. Avoid July-August (rain, fog, crowds) and Chinese holidays (the mountain is packed). Winter (December-February) has snow — the mountain is beautiful and empty, but icy trails can close." },
      { title: "What to Pack", body: "Daypack with warm layers (the summit is 10-15°C colder than the base), rain jacket, snacks and water (everything is expensive on the mountain), headlamp for sunrise, and a walking stick (¥5-10 at Tangkou). No drones — they are banned in the park." },
    ],
    nextSteps: [
      { href: '/yangtze-delta/hangzhou-wuzhen-mogan', label: 'Hangzhou route', description: 'Hangzhou is 1.5 hours from Huangshan by train' },
      { href: '/zhangjiajie/avatar-mountains', label: 'Zhangjiajie', description: 'Compare with China\'s other surreal mountain landscape' },
    ],
  },
];

for (const r of routes) {
  writePage(r.dir, r.slug, r);
  console.log(`✅ ${r.dir}/${r.slug}`);
}
console.log(`\nDone. ${routes.length} Dongbei + Yangtze Cruise + Others pages.`);