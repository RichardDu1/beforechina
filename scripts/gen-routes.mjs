import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const APP_DIR = path.resolve(__dirname, "..", "src", "app");

// ---------- template helpers ----------
const esc = (s) => s.replace(/'/g, "\\'").replace(/\n/g, " ");

// ---------- route data ----------
const REGIONS = [
  {
    name: "金三角",
    dir: "golden-triangle",
    routes: [
      {
        slug: "beijing-xian-shanghai",
        kicker: "Golden Triangle · 8-10 Days",
        title: "Beijing-Xi'an-Shanghai: The Classic China Route",
        subtitle:
          "The essential first-timer's route through China's three iconic cities — imperial Beijing, ancient Xi'an, and futuristic Shanghai — connected by high-speed rail.",
        duration: "8-10 days",
        route: "Beijing → Xi'an → Shanghai",
        budget: "$1,200-1,800/person",
        overview:
          "This is the classic Golden Triangle — the route 80% of first-time visitors take. It covers China's three most iconic cities: Beijing's Forbidden City and Great Wall, Xi'an's Terracotta Warriors, and Shanghai's futuristic skyline. All three cities are connected by 4-6 hour high-speed trains, making logistics straightforward.",
        stops: [
          {
            day: "Days 1-3: Beijing",
            content: `Fly into Beijing Capital (PEK) or Daxing (PKX). Day 1: Tiananmen Square and the Forbidden City (book tickets 7 days ahead on WeChat). Day 2: Mutianyu Great Wall — less crowded than Badaling, with a toboggan ride down. Day 3: Temple of Heaven at sunrise for the pensioners' tai chi, then the hutongs near Gulou for lunch. Evening: Peking duck at Dadong or Siji Minfu.`,
            tip: "Skip Badaling. Mutianyu has better views, fewer crowds, and the toboggan slide down is genuinely fun. Book a private driver through your hotel (~¥600 round trip).",
          },
          {
            day: "Days 4-5: Xi'an",
            content: `Take the 4.5-hour high-speed train from Beijing West to Xi'an North (¥550). Day 4: Terracotta Warriors — go early (8:30am) to beat the crowds. The museum is 40 km east of the city. Day 5: Xi'an City Wall — rent a bike and cycle the full 14 km loop. Evening: Muslim Quarter for lamb skewers, biangbiang noodles, and persimmon cakes.`,
            tip: "Hire a guide at the Terracotta Warriors (official guides at the entrance, ~¥200). The context they provide transforms the experience from 'piles of clay statues' to 'holy crap, this is 2,200 years old.'",
          },
          {
            day: "Days 6-8: Shanghai",
            content: `Take the 6-hour high-speed train from Xi'an to Shanghai (¥670). Day 6: The Bund at dusk for the Pudong skyline. Walk Nanjing Road to People's Square. Day 7: Former French Concession — Fuxing Road, Tianzifang, and a coffee at Manner. Day 8: Shanghai Museum or a day trip to Zhujiajiao Water Town (1 hr by metro). Fly out from Pudong (PVG).`,
            tip: "The Bund is best at golden hour (5-6pm) when the colonial buildings glow. Skip the Bund sightseeing tunnel — it is a tourist trap. Take the ¥2 ferry across the Huangpu instead.",
          },
        ],
        practical: [
          {
            title: "Getting Between Cities",
            body: "Beijing → Xi'an: 4.5 hrs by high-speed train (¥550). Xi'an → Shanghai: 6 hrs by high-speed train (¥670). All trains depart hourly. Book on Trip.com or 12306.cn (Chinese-only).",
          },
          {
            title: "Where to Stay",
            body: "Beijing: Stay near Wangfujing or the hutongs around Gulou ($60-120/night). Xi'an: Inside the city walls near the Bell Tower ($40-80/night). Shanghai: Former French Concession or Jing'an ($80-150/night).",
          },
          {
            title: "When to Go",
            body: "April-May and September-October are ideal — pleasant temperatures (15-25°C), clear skies. Avoid Golden Week (first week of October) and Chinese New Year (late January/February) — attractions are packed and prices double.",
          },
        ],
      },
      {
        slug: "beijing-in-depth",
        kicker: "Beijing · 4-5 Days",
        title: "Beijing In Depth: Imperial Palaces, Great Wall & Hutongs",
        subtitle:
          "A deep dive into China's 3,000-year capital — from the Forbidden City to the Great Wall, with time for hidden temples and hutong bars.",
        duration: "4-5 days",
        route: "Beijing city + Mutianyu Great Wall",
        budget: "$500-800/person",
        overview:
          "Beijing deserves more than the rushed 2-day stop on most Golden Triangle tours. With 4-5 days, you can see the big hitters, explore Beijing's vanishing hutong alleyways, visit lesser-known temples, and still have an evening free for craft cocktails in Gulou.",
        stops: [
          {
            day: "Day 1: The Imperial Core",
            content: `Start at Tiananmen Square, then walk north through the Forbidden City (book 7 days ahead via WeChat mini-program). The full walk from south gate to north gate takes 3-4 hours. Exit through Jingshan Park — climb the hill for the panoramic view over the Forbidden City's golden roofs. Evening: Dinner at a hutong restaurant near Nanluoguxiang.`,
            tip: "Forbidden City tickets sell out. Book exactly 7 days before at 8pm Beijing time on the '故宫博物院' WeChat mini-program. Have your passport number ready.",
          },
          {
            day: "Day 2: Great Wall",
            content: `Mutianyu Great Wall — leave at 7am, arrive by 8:30am. Take the cable car up, walk east toward Watchtower 20 for the steepest section, then toboggan down. Back in Beijing by 2pm. Afternoon: Summer Palace — the marble boat and Long Corridor are iconic. Evening: Peking duck at Dadong.`,
            tip: "The toboggan slide (¥100) is genuinely thrilling — a 1.5 km metal slide down the mountain. Worth going to Mutianyu just for this.",
          },
          {
            day: "Day 3: Temples & Art",
            content: `Temple of Heaven at 7am — join the pensioners doing tai chi, shuttlecock kicking, and water calligraphy. Then the Lama Temple (Yonghegong) with its 26m sandalwood Buddha. Afternoon: 798 Art District — galleries, coffee shops, and a Bauhaus factory turned creative hub.`,
            tip: "The Lama Temple is an active Tibetan Buddhist monastery. Dress respectfully (covered shoulders). The giant Buddha at the end is 18m tall and carved from a single sandalwood tree.",
          },
          {
            day: "Day 4: Hidden Beijing",
            content: `Morning: White Cloud Temple (Baiyun Guan) — Beijing's largest Daoist temple, peaceful and rarely touristy. Walk the old hutong alleys from Qianmen to Dashilan. Afternoon: National Museum of China (free, book ahead) or Panjiayuan flea market for antiques and souvenirs. Fly out in the evening or extend one more day.`,
            tip: "Panjiayuan on weekends is the best. Most 'antiques' are reproductions, but haggle hard (start at 30% of asking price) and you'll find great souvenirs.",
          },
        ],
        practical: [
          {
            title: "Getting Around",
            body: "Beijing's subway covers all major sights (¥3-9 per ride). Didi (China's Uber) is cheap — most rides within the city are ¥20-40. Get an eSIM before you arrive (see our eSIM guide) so you can use ride-hailing apps at the airport.",
          },
          {
            title: "Where to Stay",
            body: "Wangfujing is central but touristy. The hutongs around Gulou/Dongsi are more atmospheric — try a courtyard hotel (¥400-800/night). For business comfort, the CHAO Sanlitun or East Beijing near 798.",
          },
          {
            title: "Food You Must Try",
            body: "Peking duck (Dadong or Siji Minfu, not Quanjude), zhajiangmian (fried sauce noodles) at any hutong noodle shop, jianbing (savoury crepe) from street carts for breakfast, and hot pot at Haidilao for the experience.",
          },
        ],
      },
      {
        slug: "xian-in-depth",
        kicker: "Xi'an · 3-4 Days",
        title: "Xi'an In Depth: Terracotta Warriors & Ancient Capital",
        subtitle:
          "Beyond the warriors — cycle the 14 km city wall, eat your way through the Muslim Quarter, and discover why Xi'an was the start of the Silk Road.",
        duration: "3-4 days",
        route: "Xi'an city + Terracotta Warriors + Huashan option",
        budget: "$300-500/person",
        overview:
          "Xi'an was China's capital for 1,100 years across 13 dynasties. The Terracotta Warriors are the headline, but the 600-year-old city wall, the Muslim Quarter's street food, and the option to climb Huashan (one of China's five sacred mountains) make it worth 3-4 days.",
        stops: [
          {
            day: "Day 1: The Warriors",
            content: `Terracotta Warriors Museum — hire a guide at the entrance (~¥200). Visit the pits in order: Pit 1 (the famous one, 6,000 warriors), Pit 2 (cavalry and archers), Pit 3 (command centre). The bronze chariot exhibition hall is excellent. Afternoon: Huaqing Hot Springs at the foot of Mount Li.`,
            tip: "Go to Pit 1 last, not first. The crowd rushes to Pit 1 immediately. Do Pits 2 and 3 first for a much calmer experience, then Pit 1 when the morning rush thins around 11am.",
          },
          {
            day: "Day 2: City Wall & Muslim Quarter",
            content: `Rent a bike on the city wall (¥45, deposit ¥100) and cycle the full 14 km loop. Takes 90 minutes at a relaxed pace. After lunch, the Great Mosque — a 1,300-year-old mosque built in Chinese temple style. Evening: Muslim Quarter food crawl — lamb skewers (¥3 each), biangbiang noodles, yangrou paomo (lamb soup with crumbled flatbread).`,
            tip: "The Muslim Quarter is touristy at the entrance (Beiyuanmen Street), but gets more authentic as you walk deeper. Head to Sajinqiao for the real local food stalls.",
          },
          {
            day: "Day 3: Huashan or History",
            content: `Option A: Huashan day trip — one of China's five sacred mountains, with a via ferrata-style cliffside plank walk (the 'Plank Walk in the Sky'). 30 minutes by high-speed train from Xi'an North. Option B (easier): Shaanxi History Museum (book 3 days ahead on WeChat), Big Wild Goose Pagoda, and Tang Paradise in the evening.`,
            tip: "If you do Huashan, take the cable car up the West Peak and down the North Peak. The Plank Walk is genuinely scary — there is a harness but the drop is 700m vertical onto a narrow wooden plank. Not for anyone with a fear of heights.",
          },
        ],
        practical: [
          {
            title: "Getting There",
            body: "Xi'an Xianyang Airport (XIY) has international flights from Seoul, Bangkok, and domestic connections from everywhere. High-speed trains from Beijing (4.5 hrs, ¥550), Shanghai (6 hrs, ¥670), and Chengdu (3.5 hrs, ¥260).",
          },
          {
            title: "Where to Stay",
            body: "Stay inside the city walls near the Bell Tower or South Gate ($40-80/night). The Citadines Central Xi'an has good value and a central location. For something atmospheric, the Eastern House Boutique Hotel near the South Gate.",
          },
          {
            title: "Food",
            body: "Xi'an's Muslim Quarter is legendary. Must-try: yangrou paomo (lamb soup with crumbled bread), biangbiang noodles, lamb skewers (kawap), cold noodles (liangpi), and the persimmon cakes sold at street stalls.",
          },
        ],
      },
      {
        slug: "shanghai-in-depth",
        kicker: "Shanghai · 3-4 Days",
        title: "Shanghai In Depth: Art Deco, Alleyways & Skyline",
        subtitle:
          "A proper guide to China's most international city — not just the Bund, but the French Concession backstreets, the 1930s lilong lanes, and where to eat soup dumplings.",
        duration: "3-4 days",
        route: "Shanghai city + water town day trip",
        budget: "$400-700/person",
        overview:
          "Shanghai is China's most cosmopolitan city — a 1920s 'Paris of the East' that now hosts the world's second-tallest building. But the real Shanghai is in the details: art deco lobbies, lilong lane houses, and soup dumpling shops where the owner has been folding xiaolongbao for 40 years.",
        stops: [
          {
            day: "Day 1: The Bund & Pudong",
            content: `Start at the Bund at golden hour — the colonial buildings on one side, Pudong's skyline on the other. Walk south to the Old City (Yu Garden, City God Temple). Evening: Dinner at Jia Jia Tang Bao for the best soup dumplings in Shanghai, then a drink at a rooftop bar on the Bund (Flair at Ritz-Carlton or Vue Bar at Hyatt on the Bund).`,
            tip: "Skip the Bund Sightseeing Tunnel — it's ¥55 for a 3-minute ride in a slow cart through a tunnel with coloured lights. Take the ¥2 ferry from Jinling East Road to Dongchang Road instead.",
          },
          {
            day: "Day 2: French Concession",
            content: `Spend the morning walking Fuxing Road and Wukang Road — the French Concession at its best. Stop at Manner Coffee (China's answer to Blue Bottle), browse the boutiques on Anfu Road, and have lunch at Din Tai Fung or a local noodle shop. Afternoon: Shanghai Propaganda Poster Art Centre (¥25, incredible collection of Mao-era posters) or the Power Station of Art in a converted power plant.`,
            tip: "Wukang Road and Anfu Road are influencer central on weekends — go on a weekday morning for a much calmer experience. The best buildings are Wukang Mansion (Normandie Apartments, 1924) and the Moller Villa.",
          },
          {
            day: "Day 3: Water Town or Art",
            content: `Option A: Day trip to Zhujiajiao Water Town — 1 hour by metro (Line 17). Canals, stone bridges, and a quieter side of Shanghai. Option B: Stay in the city — Long Museum (West Bund) for contemporary art, then the former Expo 2010 site along the Huangpu River. Evening: Cocktails at Speak Low (hidden bookshelf entrance, ranked among Asia's 50 Best Bars).`,
            tip: "Zhujiajiao is the most accessible water town from Shanghai. Go early (before 10am) to avoid the tour groups. Pay the ¥30 for a gondola ride — it's touristy but worth it for the photos.",
          },
        ],
        practical: [
          {
            title: "Getting There",
            body: "Shanghai Pudong (PVG) for international flights, Hongqiao (SHA) for domestic. Both are connected to the city by metro (Line 2). Maglev from PVG to Longyang Road takes 8 minutes (¥50, 430 km/h) — the world's fastest commercial train.",
          },
          {
            title: "Where to Stay",
            body: "French Concession is the most pleasant area — try the Donghu Hotel or URBN Boutique. Jing'an for central convenience. The Bund for splurge stays (Peninsula, Waldorf Astoria). Budget: $60-100, mid-range: $100-200, luxury: $300+.",
          },
          {
            title: "Food",
            body: "Soup dumplings: Jia Jia Tang Bao (黄河路店). Pan-fried dumplings: Yang's Fry Dumplings. Hairy crab (Sept-Oct only): Cheng Long Hang. For a splurge: Ultraviolet by Paul Pairet (¥6,000/person, book 3 months ahead) — a 22-course sensory experience.",
          },
        ],
      },
      {
        slug: "beijing-xian",
        kicker: "Ancient Capitals · 6-7 Days",
        title: "Beijing & Xi'an: China's Two Great Ancient Capitals",
        subtitle:
          "Seven days split between Beijing's imperial grandeur and Xi'an's Silk Road history — less rushed than the full Golden Triangle, with time for the details.",
        duration: "6-7 days",
        route: "Beijing (4 days) → Xi'an (3 days)",
        budget: "$900-1,300/person",
        overview:
          "The full Golden Triangle is the standard recommendation, but 8-10 days is a lot of time. This 6-7 day version drops Shanghai and goes deep on China's two greatest ancient capitals. Beijing brings the Ming and Qing dynasties, Xi'an brings the Han and Tang — together they cover 2,000 years of Chinese imperial history.",
        stops: [
          {
            day: "Days 1-3: Beijing",
            content: `Forbidden City, Mutianyu Great Wall, Temple of Heaven, Summer Palace, and a hutong evening. See the Beijing In Depth page for full details.`,
            tip: "With only 3 days, drop 798 Art District and focus on the imperial sights. The Lama Temple is worth squeezing in if you have a free morning.",
          },
          {
            day: "Days 4-6: Xi'an",
            content: `Take the 4.5-hour high-speed train from Beijing West to Xi'an North. Terracotta Warriors, city wall bike ride, Muslim Quarter food crawl. If you have a 7th day, add Huashan. See the Xi'an In Depth page for full details.`,
            tip: "The Beijing West → Xi'an North train departs hourly from 6:30am to 5:30pm. Book the 8am train to arrive by 12:30pm and have the afternoon for the city wall.",
          },
        ],
        practical: [
          {
            title: "Train Booking",
            body: "Book high-speed trains on Trip.com (English) or 12306.cn (Chinese-only, cheaper). Beijing West → Xi'an North takes 4.5 hours, ~¥550 second class. Book 2-3 days ahead — trains rarely sell out except during holidays.",
          },
          {
            title: "Best Season",
            body: "April-May and September-October. Avoid Golden Week (Oct 1-7) and Chinese New Year — trains sell out weeks in advance and attractions are shoulder-to-shoulder.",
          },
        ],
      },
      {
        slug: "beijing-shanghai",
        kicker: "Old & New · 6-7 Days",
        title: "Beijing & Shanghai: Imperial China Meets the Future",
        subtitle:
          "Six days split between 3,000-year-old Beijing and 21st-century Shanghai — the Forbidden City to the world's second-tallest skyscraper.",
        duration: "6-7 days",
        route: "Beijing (4 days) → Shanghai (3 days)",
        budget: "$900-1,400/person",
        overview:
          "This route skips Xi'an in favour of a sharper Beijing-Shanghai contrast — the ancient and the futuristic in one trip. You see China's imperial past and its present-day ambition, connected by a 4.5-hour high-speed train.",
        stops: [
          {
            day: "Days 1-3: Beijing",
            content: `Forbidden City, Mutianyu Great Wall, Temple of Heaven, and a hutong evening. See the Beijing In Depth page for full details.`,
            tip: "The Beijing → Shanghai high-speed train departs from Beijing South. The 4.5-hour trains (G1, G3, G5, G7) are the fastest — book these specifically.",
          },
          {
            day: "Days 4-6: Shanghai",
            content: `Bund at golden hour, French Concession, soup dumplings, and a day trip to Zhujiajiao Water Town. See the Shanghai In Depth page for full details.`,
            tip: "The G1 train (Beijing South → Shanghai Hongqiao) departs at 7am, arrives 11:29am — you get a full afternoon in Shanghai. This is the best option for maximising your time.",
          },
        ],
        practical: [
          {
            title: "Getting Between Cities",
            body: "Beijing South → Shanghai Hongqiao: 4.5 hours by high-speed train (¥550-930). Flights take 2 hours but airport transit adds 3-4 hours each end — train is faster door-to-door.",
          },
        ],
      },
    ],
  },
];

/**
 * Generate one page file.
 */
function generatePage(region, route) {
  const dir = path.join(APP_DIR, region.dir, route.slug);
  fs.mkdirSync(dir, { recursive: true });

  const faqQ = `What is the best way to do the ${route.title.split(":")[0]} route?`;
  const faqA = `This route typically takes ${route.duration}. ${route.overview.slice(0, 200)}`;

  const code = `import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '${esc(route.title)} | BeforeChina',
  description: '${esc(route.subtitle)}',
  alternates: { canonical: '/${region.dir}/${route.slug}' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '${esc(faqQ)}',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '${esc(faqA)}',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does the ${esc(route.title.split(":")[0])} route cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget approximately ${esc(route.budget)} for this route, including accommodation, transport between cities, food, and activities. International flights are not included.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: '${esc(route.title.split(":")[0])}', item: 'https://beforechina.com/${region.dir}/${route.slug}' },
  ],
};

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>${esc(route.kicker)}</Kicker>
          <h1>${esc(route.title)}</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            ${esc(route.subtitle)}
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div>
                <div style={{ fontWeight: 600 }}>${esc(route.duration)}</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div>
                <div style={{ fontWeight: 600 }}>${esc(route.route)}</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div>
                <div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>${esc(route.budget)}</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              ${esc(route.overview)}
            </p>
          </div>

          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Day-by-Day Itinerary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
${route.stops
  .map(
    (s) => `              {
                day: '${esc(s.day)}',
                content: \`${esc(s.content)}\`,
                tip: \`${esc(s.tip)}\`,
              }`
  )
  .join(",\n")},
            ].map((stop) => (
              <div key={stop.day} className="article-card">
                <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--primary-color)' }}>
                  {stop.day}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }}>
                  {stop.content}
                </p>
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
${route.practical
  .map(
    (p) => `            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>${esc(p.title)}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                ${esc(p.body)}
              </p>
            </div>`
  )
  .join("\n")}
          </div>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <TourCTA />
        <NextSteps
          steps={[
            { href: '/visa', label: 'Check visa requirements', description: 'See if you qualify for visa-free entry to China' },
            { href: '/esim', label: 'Get an eSIM for China', description: 'Land with internet that bypasses the firewall' },
            { href: '/payment', label: 'Set up Alipay before you land', description: 'Link your foreign card and be ready to pay' },
          ]}
        />
        <SignatureCard />
      </div>
    </div>
  );
}
`;

  fs.writeFileSync(path.join(dir, "page.tsx"), code, "utf-8");
  console.log(`✅ ${region.dir}/${route.slug}`);
}

// ---------- main ----------
for (const region of REGIONS) {
  for (const route of region.routes) {
    generatePage(region, route);
  }
}

console.log(`\nDone. Generated pages for ${REGIONS.length} region(s).`);
