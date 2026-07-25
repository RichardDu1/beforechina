import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const APP_DIR = path.resolve(__dirname, '..', 'src', 'app');

// ---------- template helpers ----------
const esc = (s) => s.replace(/'/g, "\\'").replace(/\n/g, ' ');

// ---------- route data ----------
const REGIONS = [
  {
    name: 'Golden Triangle',
    dir: 'golden-triangle',
    routes: [
      {
        slug: 'beijing-xian-shanghai',
        kicker: 'Golden Triangle',
        title: "Beijing, Xi'an & Shanghai",
        subtitle:
          "The essential first-timer's route through China's three iconic cities — imperial Beijing, ancient Xi'an, and futuristic Shanghai — connected by high-speed rail.",
        duration: '8–10 days',
        route: "Beijing → Xi'an → Shanghai",
        heroImage: '/images/destinations/golden-triangle.webp',
        heroImageAlt: 'The Forbidden City palace complex in Beijing at golden hour',
        highlights: [
          {
            icon: 'clock',
            title: '8–10 Days',
            description:
              'The perfect pace for three iconic cities — enough time to go deep without feeling rushed.',
          },
          {
            icon: 'map',
            title: "Beijing → Xi'an → Shanghai",
            description:
              'Connected by 4–6 hour high-speed trains. All three cities have international airports.',
          },
          {
            icon: 'star',
            title: 'Forbidden City, Terracotta Warriors, The Bund',
            description:
              "China's three most iconic sights in a single journey — 2,000 years of history.",
          },
        ],
        experienceTypes: ['culture', 'photography'],
        overview:
          "This is the classic Golden Triangle — the route 80% of first-time visitors take. It covers China's three most iconic cities: Beijing's Forbidden City and Great Wall, Xi'an's Terracotta Warriors, and Shanghai's futuristic skyline. All three cities are connected by 4-6 hour high-speed trains, making logistics straightforward.",
        stops: [
          {
            day: 'Days 1–3: Beijing',
            content: `Fly into Beijing Capital (PEK) or Daxing (PKX). Day 1: Tiananmen Square and the Forbidden City (book tickets 7 days ahead on WeChat). Day 2: Mutianyu Great Wall — less crowded than Badaling, with a toboggan ride down. Day 3: Temple of Heaven at sunrise for the pensioners' tai chi, then the hutongs near Gulou for lunch. Evening: Peking duck at Dadong or Siji Minfu.`,
            tip: 'Skip Badaling. Mutianyu has better views, fewer crowds, and the toboggan slide down is genuinely fun. Book a private driver through your hotel (~¥600 round trip).',
          },
          {
            day: "Days 4–5: Xi'an",
            content: `Take the 4.5-hour high-speed train from Beijing West to Xi'an North (¥550). Day 4: Terracotta Warriors — go early (8:30am) to beat the crowds. The museum is 40 km east of the city. Day 5: Xi'an City Wall — rent a bike and cycle the full 14 km loop. Evening: Muslim Quarter for lamb skewers, biangbiang noodles, and persimmon cakes.`,
            tip: "Hire a guide at the Terracotta Warriors (official guides at the entrance, ~¥200). The context they provide transforms the experience from 'piles of clay statues' to 'holy crap, this is 2,200 years old.'",
          },
          {
            day: 'Days 6–8: Shanghai',
            content: `Take the 6-hour high-speed train from Xi'an to Shanghai (¥670). Day 6: The Bund at dusk for the Pudong skyline. Walk Nanjing Road to People's Square. Day 7: Former French Concession — Fuxing Road, Tianzifang, and a coffee at Manner. Day 8: Shanghai Museum or a day trip to Zhujiajiao Water Town (1 hr by metro). Fly out from Pudong (PVG).`,
            tip: 'The Bund is best at golden hour (5–6pm) when the colonial buildings glow. Skip the Bund sightseeing tunnel — it is a tourist trap. Take the ¥2 ferry across the Huangpu instead.',
          },
        ],
        related: [
          {
            href: '/yangtze-delta/shanghai-hangzhou-suzhou',
            label: 'Shanghai, Hangzhou & Suzhou',
            description: 'Add water towns and classical gardens to your Shanghai stay.',
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Shanghai Pudong skyline',
            days: '6–8 days',
          },
          {
            href: '/ancient-capitals/xian-luoyang-kaifeng',
            label: 'Three Ancient Capitals',
            description: 'Extend your journey through 3,000 years of imperial history.',
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Xian city wall at sunset',
            days: '6–8 days',
          },
          {
            href: '/golden-triangle/beijing-in-depth',
            label: 'Beijing In-Depth',
            description: "Spend more time in China's 3,000-year capital.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '4–5 days',
          },
        ],
      },
      {
        slug: 'beijing-in-depth',
        kicker: 'Beijing',
        title: 'Beijing In Depth',
        subtitle:
          "A deep dive into China's 3,000-year capital — from the Forbidden City to the Great Wall, with time for hidden temples and hutong bars.",
        duration: '4–5 days',
        route: 'Beijing city + Mutianyu Great Wall',
        heroImage: '/images/destinations/golden-triangle.webp',
        heroImageAlt: 'The Forbidden City palace complex in Beijing',
        highlights: [
          {
            icon: 'clock',
            title: '4–5 Days',
            description:
              "Enough time to see the icons and discover Beijing's vanishing hutong alleyways.",
          },
          {
            icon: 'map',
            title: 'Beijing',
            description:
              "China's 3,000-year capital — imperial palaces, ancient temples, and cutting-edge art districts.",
          },
          {
            icon: 'star',
            title: 'Forbidden City, Great Wall, Temple of Heaven',
            description:
              "The three essentials, plus hidden temples and the city's best food streets.",
          },
        ],
        experienceTypes: ['culture'],
        overview:
          "Beijing deserves more than the rushed 2-day stop on most Golden Triangle tours. With 4-5 days, you can see the big hitters, explore Beijing's vanishing hutong alleyways, visit lesser-known temples, and still have an evening free for craft cocktails in Gulou.",
        stops: [
          {
            day: 'Day 1: The Imperial Core',
            content: `Start at Tiananmen Square, then walk north through the Forbidden City (book 7 days ahead via WeChat mini-program). The full walk from south gate to north gate takes 3-4 hours. Exit through Jingshan Park — climb the hill for the panoramic view over the Forbidden City's golden roofs. Evening: Dinner at a hutong restaurant near Nanluoguxiang.`,
            tip: "Forbidden City tickets sell out. Book exactly 7 days before at 8pm Beijing time on the '故宫博物院' WeChat mini-program. Have your passport number ready.",
          },
          {
            day: 'Day 2: Great Wall',
            content: `Mutianyu Great Wall — leave at 7am, arrive by 8:30am. Take the cable car up, walk east toward Watchtower 20 for the steepest section, then toboggan down. Back in Beijing by 2pm. Afternoon: Summer Palace — the marble boat and Long Corridor are iconic. Evening: Peking duck at Dadong.`,
            tip: 'The toboggan slide (¥100) is genuinely thrilling — a 1.5 km metal slide down the mountain. Worth going to Mutianyu just for this.',
          },
          {
            day: 'Day 3: Temples & Art',
            content: `Temple of Heaven at 7am — join the pensioners doing tai chi, shuttlecock kicking, and water calligraphy. Then the Lama Temple (Yonghegong) with its 26m sandalwood Buddha. Afternoon: 798 Art District — galleries, coffee shops, and a Bauhaus factory turned creative hub.`,
            tip: 'The Lama Temple is an active Tibetan Buddhist monastery. Dress respectfully (covered shoulders). The giant Buddha at the end is 18m tall and carved from a single sandalwood tree.',
          },
          {
            day: 'Day 4: Hidden Beijing',
            content: `Morning: White Cloud Temple (Baiyun Guan) — Beijing's largest Daoist temple, peaceful and rarely touristy. Walk the old hutong alleys from Qianmen to Dashilan. Afternoon: National Museum of China (free, book ahead) or Panjiayuan flea market for antiques and souvenirs. Fly out in the evening or extend one more day.`,
            tip: "Panjiayuan on weekends is the best. Most 'antiques' are reproductions, but haggle hard (start at 30% of asking price) and you'll find great souvenirs.",
          },
        ],
        related: [
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: "The full Golden Triangle — add Xi'an and Shanghai.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8–10 days',
          },
          {
            href: '/golden-triangle/beijing-xian',
            label: "Beijing & Xi'an",
            description: "Combine China's two great ancient capitals.",
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Xian city wall',
            days: '6–7 days',
          },
          {
            href: '/dongbei/harbin-snow-town',
            label: 'Harbin & Snow Town',
            description: "Head northeast for the world's largest ice festival.",
            image: '/images/destinations/dongbei.webp',
            imageAlt: 'Harbin ice sculptures',
            days: '5–7 days',
          },
        ],
      },
      {
        slug: 'xian-in-depth',
        kicker: "Xi'an",
        title: "Xi'an In Depth",
        subtitle:
          "Beyond the warriors — cycle the 14 km city wall, eat your way through the Muslim Quarter, and discover why Xi'an was the start of the Silk Road.",
        duration: '3–4 days',
        route: "Xi'an city + Terracotta Warriors + Huashan option",
        heroImage: '/images/destinations/ancient-capitals.webp',
        heroImageAlt: 'Xian city wall and watchtowers at sunset',
        highlights: [
          {
            icon: 'clock',
            title: '3–4 Days',
            description:
              "The perfect deep dive into China's ancient capital — enough time for the warriors and the wall.",
          },
          {
            icon: 'map',
            title: "Xi'an",
            description:
              "China's capital for 1,100 years across 13 dynasties — the eastern terminus of the Silk Road.",
          },
          {
            icon: 'star',
            title: 'Terracotta Warriors, City Wall, Muslim Quarter',
            description:
              "One of the world's greatest archaeological discoveries, plus the best street food in China.",
          },
        ],
        experienceTypes: ['culture', 'culinary'],
        overview:
          "Xi'an was China's capital for 1,100 years across 13 dynasties. The Terracotta Warriors are the headline, but the 600-year-old city wall, the Muslim Quarter's street food, and the option to climb Huashan (one of China's five sacred mountains) make it worth 3-4 days.",
        stops: [
          {
            day: 'Day 1: The Warriors',
            content: `Terracotta Warriors Museum — hire a guide at the entrance (~¥200). Visit the pits in order: Pit 1 (the famous one, 6,000 warriors), Pit 2 (cavalry and archers), Pit 3 (command centre). The bronze chariot exhibition hall is excellent. Afternoon: Huaqing Hot Springs at the foot of Mount Li.`,
            tip: 'Go to Pit 1 last, not first. The crowd rushes to Pit 1 immediately. Do Pits 2 and 3 first for a much calmer experience, then Pit 1 when the morning rush thins around 11am.',
          },
          {
            day: 'Day 2: City Wall & Muslim Quarter',
            content: `Rent a bike on the city wall (¥45, deposit ¥100) and cycle the full 14 km loop. Takes 90 minutes at a relaxed pace. After lunch, the Great Mosque — a 1,300-year-old mosque built in Chinese temple style. Evening: Muslim Quarter food crawl — lamb skewers (¥3 each), biangbiang noodles, yangrou paomo (lamb soup with crumbled flatbread).`,
            tip: 'The Muslim Quarter is touristy at the entrance (Beiyuanmen Street), but gets more authentic as you walk deeper. Head to Sajinqiao for the real local food stalls.',
          },
          {
            day: 'Day 3: Huashan or History',
            content: `Option A: Huashan day trip — one of China's five sacred mountains, with a via ferrata-style cliffside plank walk (the 'Plank Walk in the Sky'). 30 minutes by high-speed train from Xi'an North. Option B (easier): Shaanxi History Museum (book 3 days ahead on WeChat), Big Wild Goose Pagoda, and Tang Paradise in the evening.`,
            tip: 'If you do Huashan, take the cable car up the West Peak and down the North Peak. The Plank Walk is genuinely scary — there is a harness but the drop is 700m vertical onto a narrow wooden plank. Not for anyone with a fear of heights.',
          },
        ],
        related: [
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: 'Add Beijing and Shanghai for the full Golden Triangle.',
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8–10 days',
          },
          {
            href: '/ancient-capitals/xian-luoyang-kaifeng',
            label: 'Three Ancient Capitals',
            description: 'Continue east to Luoyang and Kaifeng.',
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Xian city wall at sunset',
            days: '6–8 days',
          },
          {
            href: '/silk-road/xian-lanzhou-dunhuang',
            label: "Silk Road: Xi'an to Dunhuang",
            description: 'Follow the Silk Road west into the desert.',
            image: '/images/destinations/silk-road.webp',
            imageAlt: 'Camel caravan in Dunhuang dunes',
            days: '7–10 days',
          },
        ],
      },
      {
        slug: 'shanghai-in-depth',
        kicker: 'Shanghai',
        title: 'Shanghai In Depth',
        subtitle:
          "A proper guide to China's most international city — not just the Bund, but the French Concession backstreets, the 1930s lilong lanes, and where to eat soup dumplings.",
        duration: '3–4 days',
        route: 'Shanghai city + water town day trip',
        heroImage: '/images/destinations/yangtze-delta.webp',
        heroImageAlt: 'Shanghai Pudong skyline at night across the Huangpu River',
        highlights: [
          {
            icon: 'clock',
            title: '3–4 Days',
            description:
              'Enough time to go beyond the skyline — into the art deco lobbies and lilong lane houses.',
          },
          {
            icon: 'map',
            title: 'Shanghai',
            description:
              "China's most cosmopolitan city — the 1920s 'Paris of the East' meets the world's second-tallest building.",
          },
          {
            icon: 'star',
            title: 'The Bund, French Concession, Soup Dumplings',
            description:
              'Colonial grandeur, tree-lined backstreets, and the best xiaolongbao of your life.',
          },
        ],
        experienceTypes: ['culture', 'culinary'],
        overview:
          "Shanghai is China's most cosmopolitan city — a 1920s 'Paris of the East' that now hosts the world's second-tallest building. But the real Shanghai is in the details: art deco lobbies, lilong lane houses, and soup dumpling shops where the owner has been folding xiaolongbao for 40 years.",
        stops: [
          {
            day: 'Day 1: The Bund & Pudong',
            content: `Start at the Bund at golden hour — the colonial buildings on one side, Pudong's skyline on the other. Walk south to the Old City (Yu Garden, City God Temple). Evening: Dinner at Jia Jia Tang Bao for the best soup dumplings in Shanghai, then a drink at a rooftop bar on the Bund (Flair at Ritz-Carlton or Vue Bar at Hyatt on the Bund).`,
            tip: "Skip the Bund Sightseeing Tunnel — it's ¥55 for a 3-minute ride in a slow cart through a tunnel with coloured lights. Take the ¥2 ferry from Jinling East Road to Dongchang Road instead.",
          },
          {
            day: 'Day 2: French Concession',
            content: `Spend the morning walking Fuxing Road and Wukang Road — the French Concession at its best. Stop at Manner Coffee (China's answer to Blue Bottle), browse the boutiques on Anfu Road, and have lunch at Din Tai Fung or a local noodle shop. Afternoon: Shanghai Propaganda Poster Art Centre (¥25, incredible collection of Mao-era posters) or the Power Station of Art in a converted power plant.`,
            tip: 'Wukang Road and Anfu Road are influencer central on weekends — go on a weekday morning for a much calmer experience. The best buildings are Wukang Mansion (Normandie Apartments, 1924) and the Moller Villa.',
          },
          {
            day: 'Day 3: Water Town or Art',
            content: `Option A: Day trip to Zhujiajiao Water Town — 1 hour by metro (Line 17). Canals, stone bridges, and a quieter side of Shanghai. Option B: Stay in the city — Long Museum (West Bund) for contemporary art, then the former Expo 2010 site along the Huangpu River. Evening: Cocktails at Speak Low (hidden bookshelf entrance, ranked among Asia's 50 Best Bars).`,
            tip: "Zhujiajiao is the most accessible water town from Shanghai. Go early (before 10am) to avoid the tour groups. Pay the ¥30 for a gondola ride — it's touristy but worth it for the photos.",
          },
        ],
        related: [
          {
            href: '/yangtze-delta/shanghai-hangzhou-suzhou',
            label: 'Shanghai, Hangzhou & Suzhou',
            description: 'Add the West Lake and classical gardens.',
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Shanghai skyline',
            days: '6–8 days',
          },
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: 'The full Golden Triangle route.',
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City',
            days: '8–10 days',
          },
          {
            href: '/south-china/hong-kong-macau',
            label: 'Hong Kong & Macau',
            description: 'Continue south to Victoria Harbour and Portuguese egg tarts.',
            image: '/images/destinations/south-china.webp',
            imageAlt: 'Hong Kong skyline',
            days: '5–7 days',
          },
        ],
      },
      {
        slug: 'beijing-xian',
        kicker: 'Ancient Capitals',
        title: "Beijing & Xi'an",
        subtitle:
          "Seven days split between Beijing's imperial grandeur and Xi'an's Silk Road history — less rushed than the full Golden Triangle, with time for the details.",
        duration: '6–7 days',
        route: "Beijing (4 days) → Xi'an (3 days)",
        heroImage: '/images/destinations/ancient-capitals.webp',
        heroImageAlt: 'Xian city wall and watchtowers at sunset',
        highlights: [
          {
            icon: 'clock',
            title: '6–7 Days',
            description:
              'Less rushed than the full Golden Triangle — time to go deep on two great capitals.',
          },
          {
            icon: 'map',
            title: "Beijing → Xi'an",
            description:
              'Connected by a 4.5-hour high-speed train. Both cities have international airports.',
          },
          {
            icon: 'star',
            title: 'Two Great Ancient Capitals',
            description:
              "Beijing brings the Ming and Qing dynasties, Xi'an brings the Han and Tang — 2,000 years of history.",
          },
        ],
        experienceTypes: ['culture', 'photography'],
        overview:
          "The full Golden Triangle is the standard recommendation, but 8-10 days is a lot of time. This 6-7 day version drops Shanghai and goes deep on China's two greatest ancient capitals. Beijing brings the Ming and Qing dynasties, Xi'an brings the Han and Tang — together they cover 2,000 years of Chinese imperial history.",
        stops: [
          {
            day: 'Days 1–3: Beijing',
            content: `Forbidden City, Mutianyu Great Wall, Temple of Heaven, Summer Palace, and a hutong evening. See the Beijing In Depth page for full details.`,
            tip: 'With only 3 days, drop 798 Art District and focus on the imperial sights. The Lama Temple is worth squeezing in if you have a free morning.',
          },
          {
            day: "Days 4–6: Xi'an",
            content: `Take the 4.5-hour high-speed train from Beijing West to Xi'an North. Terracotta Warriors, city wall bike ride, Muslim Quarter food crawl. If you have a 7th day, add Huashan. See the Xi'an In Depth page for full details.`,
            tip: "The Beijing West → Xi'an North train departs hourly from 6:30am to 5:30pm. Book the 8am train to arrive by 12:30pm and have the afternoon for the city wall.",
          },
        ],
        related: [
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: 'Add Shanghai for the full Golden Triangle experience.',
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8–10 days',
          },
          {
            href: '/ancient-capitals/xian-luoyang-kaifeng',
            label: 'Three Ancient Capitals',
            description: "Continue from Xi'an to Luoyang and Kaifeng.",
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Xian city wall at sunset',
            days: '6–8 days',
          },
          {
            href: '/golden-triangle/beijing-shanghai',
            label: 'Beijing & Shanghai',
            description: "Swap Xi'an for Shanghai — imperial China meets the future.",
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Shanghai skyline',
            days: '6–7 days',
          },
        ],
      },
      {
        slug: 'beijing-shanghai',
        kicker: 'Old & New',
        title: 'Beijing & Shanghai',
        subtitle:
          "Six days split between 3,000-year-old Beijing and 21st-century Shanghai — the Forbidden City to the world's second-tallest skyscraper.",
        duration: '6–7 days',
        route: 'Beijing (4 days) → Shanghai (3 days)',
        heroImage: '/images/destinations/yangtze-delta.webp',
        heroImageAlt: 'Shanghai Pudong skyline at night',
        highlights: [
          {
            icon: 'clock',
            title: '6–7 Days',
            description:
              'The sharpest contrast in China — ancient capital to futuristic metropolis.',
          },
          {
            icon: 'map',
            title: 'Beijing → Shanghai',
            description:
              'Connected by a 4.5-hour high-speed train — faster than flying door-to-door.',
          },
          {
            icon: 'star',
            title: 'Forbidden City to the Bund',
            description:
              "From 3,000-year-old imperial palaces to the world's second-tallest building.",
          },
        ],
        experienceTypes: ['culture', 'photography'],
        overview:
          "This route skips Xi'an in favour of a sharper Beijing-Shanghai contrast — the ancient and the futuristic in one trip. You see China's imperial past and its present-day ambition, connected by a 4.5-hour high-speed train.",
        stops: [
          {
            day: 'Days 1–3: Beijing',
            content: `Forbidden City, Mutianyu Great Wall, Temple of Heaven, and a hutong evening. See the Beijing In Depth page for full details.`,
            tip: 'The Beijing → Shanghai high-speed train departs from Beijing South. The 4.5-hour trains (G1, G3, G5, G7) are the fastest — book these specifically.',
          },
          {
            day: 'Days 4–6: Shanghai',
            content: `Bund at golden hour, French Concession, soup dumplings, and a day trip to Zhujiajiao Water Town. See the Shanghai In Depth page for full details.`,
            tip: 'The G1 train (Beijing South → Shanghai Hongqiao) departs at 7am, arrives 11:29am — you get a full afternoon in Shanghai. This is the best option for maximising your time.',
          },
        ],
        related: [
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: "Add Xi'an for the full Golden Triangle.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City',
            days: '8–10 days',
          },
          {
            href: '/yangtze-delta/shanghai-hangzhou-suzhou',
            label: 'Shanghai, Hangzhou & Suzhou',
            description: 'Add the West Lake and classical gardens to your Shanghai stay.',
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Shanghai skyline',
            days: '6–8 days',
          },
          {
            href: '/golden-triangle/beijing-xian',
            label: "Beijing & Xi'an",
            description: "Swap Shanghai for Xi'an — two ancient capitals.",
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Xian city wall',
            days: '6–7 days',
          },
        ],
      },
    ],
  },
];

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

/**
 * Generate one page file with the new editorial layout.
 */
function generatePage(region, route) {
  const dir = path.join(APP_DIR, region.dir, route.slug);
  fs.mkdirSync(dir, { recursive: true });

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
  alternates: { canonical: '/${region.dir}/${route.slug}' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/${region.dir}/${route.slug}',
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
      name: 'What is the best way to experience ${esc(route.title)}?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This journey typically takes ${esc(route.duration)}. ${esc(route.overview.slice(0, 200))}',
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
    { '@type': 'ListItem', position: 2, name: '${esc(route.title)}', item: 'https://beforechina.com/${region.dir}/${route.slug}' },
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

  fs.writeFileSync(path.join(dir, 'page.tsx'), code, 'utf-8');
  console.log(`✅ ${region.dir}/${route.slug}`);
}

// ---------- main ----------
for (const region of REGIONS) {
  for (const route of region.routes) {
    generatePage(region, route);
  }
}

console.log(`\nDone. Generated pages for ${REGIONS.length} region(s).`);
