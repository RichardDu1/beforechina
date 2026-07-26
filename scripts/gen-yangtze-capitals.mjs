import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_DIR = path.resolve(__dirname, '..', 'src', 'app');

// ---------- template helpers ----------
const esc = (s) => s.replace(/'/g, "\\'").replace(/\n/g, ' ');

// ---------- icon SVGs ----------
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

// ---------- route data ----------
const REGIONS = [
  {
    name: 'Yangtze Delta',
    dir: 'yangtze-delta',
    routes: [
      {
        slug: 'shanghai-hangzhou-suzhou',
        kicker: 'Yangtze Delta',
        title: 'Shanghai, Hangzhou & Suzhou: The Golden Watertown Triangle',
        subtitle:
          "Shanghai's future-facing skyline, Hangzhou's timeless West Lake, Suzhou's classical gardens, and a water town frozen in the Ming dynasty — the Yangtze Delta in a week.",
        duration: '6-7 days',
        route: 'Shanghai → Hangzhou → Suzhou → Tongli Water Town → Shanghai',
        heroImage: '/images/destinations/yangtze-delta.webp',
        heroImageAlt: 'Shanghai Pudong skyline at night',
        highlights: [
          {
            icon: 'clock',
            title: '6-7 Days',
            description:
              "The ideal first-timer's China trip — easy logistics, excellent infrastructure, and English signage everywhere.",
          },
          {
            icon: 'map',
            title: 'Shanghai → Hangzhou → Suzhou',
            description:
              'Three cities connected by 30-90 minute high-speed trains. Fly into Shanghai Pudong or Hongqiao.',
          },
          {
            icon: 'star',
            title: 'The Bund, West Lake, Classical Gardens',
            description:
              "China's most prosperous region — futuristic skylines, UNESCO lakes, and 2,500-year-old gardens.",
          },
        ],
        experienceTypes: ['culture', 'culinary'],
        overview:
          "The Yangtze Delta is China's wealthiest and most developed region — but also one of its most beautiful. Within a 1-hour high-speed train radius you have Shanghai (the future), Hangzhou (the romance — Marco Polo called it 'the city of heaven'), and Suzhou (2,500 years of classical gardens and silk). This route connects all three with a water town day trip. It is the ideal first-timer's China trip: easy logistics, excellent infrastructure, and English signage everywhere.",
        stops: [
          {
            day: 'Day 1: Shanghai',
            content: `Start on the Bund (外滩) — the 1.5km riverside promenade with colonial buildings on one side and Pudong's futuristic skyline on the other. Walk south toward the Old City and enter Yuyuan Garden (豫园) — a 16th-century private garden of rockeries, pavilions, and carp ponds. Lunch: xiaolongbao (soup dumplings) at the Yuyuan branch of Nanxiang Steamed Bun Restaurant (est. 1900). Afternoon: Nanjing Road pedestrian street for the spectacle of Chinese consumerism, then the Shanghai Museum (free, book ahead). Evening: rooftop bar on the Bund for the skyline light show.`,
            tip: "The Bund is best at two times: early morning (6-7am, when locals do tai chi and the light is soft) and evening (6-7pm, when Pudong's lights come on). The evening light show starts at 7pm in summer, 6pm in winter. The Bund promenade gets packed at sunset — arrive 30 minutes early to claim a railing spot.",
          },
          {
            day: 'Day 2: Shanghai',
            content: `Morning: the French Concession — tree-lined streets of 1920s lane houses (lilong), now filled with boutiques, cafes, and galleries. Rent a bike and cycle through Wukang Road, Anfu Road, and Wulumuqi Road. Visit the Propaganda Poster Art Centre — a private museum of Mao-era posters in a basement, one of Shanghai's most unique museums (small entry fee, closed Mondays). Afternoon: Tianzifang (田子坊), a maze of lane-house alleys turned into artist studios and craft shops. Evening: acrobatics show at Shanghai Circus World.`,
            tip: 'The French Concession is best explored by bike — Shanghai has an excellent bike-share system (HelloBike, Meituan Bike). You will need Alipay to unlock bikes. The Propaganda Poster Art Centre is in the basement of an apartment building on Huashan Road — look for the small sign at the entrance. It closes at 4:30pm.',
          },
          {
            day: 'Day 3: Shanghai → Hangzhou',
            content: `Take the 1-hour high-speed train from Shanghai Hongqiao to Hangzhou East. Check in, then head to West Lake (西湖). Walk the Su Causeway (苏堤) — a 2.8km tree-lined dyke crossing the lake, built in 1090 by Su Dongpo, the poet-governor of Hangzhou. Visit the Lingyin Temple (灵隐寺) — one of China's largest Buddhist temples, with grottoes of carved Buddha figures dating to the 10th century. Evening: Impression West Lake show, a nighttime spectacle of light, music, and dance on the lake, directed by Zhang Yimou (book ahead through your hotel).`,
            tip: 'West Lake is free. The Su Causeway is best walked from north to south starting around 4pm — the afternoon light on the lake is beautiful and you will finish near the Leifeng Pagoda for sunset. Public bikes are available to circle the entire lake (12 km) in about 90 minutes — easily unlocked with Alipay.',
          },
          {
            day: 'Day 4: Hangzhou',
            content: `Morning: Longjing tea village (龙井村) — the terraced tea fields where China's most famous green tea is grown. Walk the path from Longjing village to the China Tea Museum (free) through the plantations. Taste fresh Longjing tea at a farmer's house — they will brew a pot for you and you can buy directly from the grower. Afternoon: Xixi Wetland Park — a network of ponds, streams, and islets on Hangzhou's western edge. Take a traditional pole-boat ride through the wetlands. Evening: Hefang Street for Hangzhou snacks — dongpo rou (东坡肉, braised pork belly) and pianerchuan noodles (片儿川).`,
            tip: 'Longjing tea has different grades. The best (Mingqian Longjing) is picked before the Qingming Festival (early April) and commands a premium — the leaves are hand-picked buds, each one a tiny unfurled spear. What farmers serve you at tastings is usually the lower-grade summer harvest, still fragrant and enjoyable. Buy tea at the village cooperative, not from touts at the bus stop.',
          },
          {
            day: 'Day 5: Hangzhou → Suzhou',
            content: `Take the 1.5-hour high-speed train from Hangzhou East to Suzhou. Suzhou's classical gardens are UNESCO World Heritage — nine of them. You cannot see all nine. Visit two: the Humble Administrator's Garden (拙政园, the largest and most famous) and the Lingering Garden (留园, smaller and more intimate). Between gardens, walk Pingjiang Road (平江路) — a 1,600-year-old canal street lined with whitewashed Ming-Qing houses, tea houses, and silk shops.`,
            tip: "Suzhou gardens are at their best in rain — the dripping water, mist, and reflections are what the garden designers intended. Don't let rain stop you. The Humble Administrator's Garden opens at 7:30am — go at opening to experience it before the tour groups arrive at 9am. It transforms from a peaceful garden to a crowded theme park within 90 minutes.",
          },
          {
            day: 'Day 6: Suzhou → Water Town → Shanghai',
            content: `Morning: choose one water town. Tongli (同里) is 30 minutes from Suzhou by metro — canals, stone bridges, and the Tuisi Garden (a UNESCO garden within the town). Zhouzhuang (周庄) is more famous and more touristy — but its double bridge and Shen Family House are genuinely beautiful. Both are half-day visits. Return to Suzhou, pick up bags, take the 30-minute train to Shanghai for your flight out the next day.`,
            tip: 'All Yangtze Delta water towns are variations on the same theme: canals + Ming-Qing houses + stone bridges. Pick the one that is logistically easiest. Tongli is the closest to Suzhou (30 min by metro line 4). Avoid the water towns on weekends and Chinese holidays — the narrow lanes become impassable.',
          },
        ],
        related: [
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: "Add Beijing and Xi'an for the classic Golden Triangle.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8-10 days',
          },
          {
            href: '/yangtze-delta/nanjing-zhenjiang-yangzhou',
            label: 'Nanjing & Yangzhou',
            description:
              "Extend west to Nanjing's Ming dynasty walls and Yangzhou's morning tea culture.",
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Nanjing Ming dynasty city walls',
            days: '4-5 days',
          },
          {
            href: '/ancient-capitals/xian-luoyang-kaifeng',
            label: 'Three Ancient Capitals',
            description: 'Continue west to Xian, Luoyang, and Kaifeng.',
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Xian Terracotta Warriors in battle formation',
            days: '6-7 days',
          },
        ],
      },
      {
        slug: 'hangzhou-wuzhen-mogan',
        kicker: 'Yangtze Delta',
        title: 'Hangzhou, Wuzhen & Moganshan: Tea, Water Towns & Mountain Retreats',
        subtitle:
          "Hangzhou's tea terraces at dawn, Wuzhen's lantern-lit canals after the day-trippers leave, and Moganshan's bamboo forests — a slower, deeper Yangtze Delta.",
        duration: '5-6 days',
        route: 'Shanghai → Hangzhou → Wuzhen → Moganshan → Shanghai',
        heroImage: '/images/destinations/yangtze-delta.webp',
        heroImageAlt: 'Hangzhou West Lake and tea terraces',
        highlights: [
          {
            icon: 'clock',
            title: '5-6 Days',
            description:
              'A slower, more atmospheric Yangtze Delta — tea at the source, canals after dark, and bamboo forests in the clouds.',
          },
          {
            icon: 'map',
            title: 'Hangzhou → Wuzhen → Moganshan',
            description:
              "Skip Suzhou's crowded gardens for something quieter — a water town overnight and a bamboo-covered mountain retreat.",
          },
          {
            icon: 'star',
            title: 'West Lake, Wuzhen at Night, Moganshan Bamboo',
            description:
              'Tea terraces, lantern-lit canals, and 1920s stone villas in the mountains.',
          },
        ],
        experienceTypes: ['culture', 'culinary'],
        overview:
          "This route skips Suzhou's crowded gardens for something quieter: Wuzhen, a water town that is best experienced overnight when the day-trippers are gone, and Moganshan (Mount Mogan), a bamboo-covered mountain retreat where Shanghai's elite built stone villas in the 1920s. It is a slower, more atmospheric Yangtze Delta — tea at the source, canals after dark, and bamboo forests in the clouds.",
        stops: [
          {
            day: 'Day 1: Shanghai → Hangzhou',
            content: `Take the 1-hour train from Shanghai to Hangzhou. Afternoon: West Lake — walk the Su Causeway, visit the Leifeng Pagoda for the lake panorama, and sit at a lakeside tea house. Evening: dinner at Louwailou (楼外楼, est. 1848) — Hangzhou's most famous restaurant, serving West Lake vinegar fish and dongpo rou on the lake shore.`,
            tip: 'Louwailou is a historic institution and the lakeside setting is magnificent — but some say it rests on its reputation. The location, right on the water with views of the pagoda, is unbeatable. Book a window table. The West Lake vinegar fish (西湖醋鱼) is the dish to order.',
          },
          {
            day: 'Day 2: Hangzhou Tea Culture',
            content: `Early morning: cycle to Longjing tea village (龙井村) before the tour buses arrive. Walk through the tea terraces to the China Tea Museum. Midday: lunch at a tea farmer's house — they will cook simple Hangzhou dishes and serve their own tea. Afternoon: visit Meijiawu (梅家坞), a less touristy tea village further into the hills. Learn to brew Longjing tea properly — 80°C water, not boiling, steeped for 2-3 minutes in a glass cup so you can watch the leaves unfurl.`,
            tip: "Longjing tea should be brewed at 80°C, not boiling. Boiling water scalds the leaves and makes the tea bitter. If you are at a tea farmer's house and they pour boiling water on the tea, they are serving you low-grade leaves that can handle the heat. Good Longjing is brewed with water cooled for 2-3 minutes after boiling.",
          },
          {
            day: 'Day 3: Hangzhou → Wuzhen',
            content: `Take a 1-hour bus from Hangzhou to Wuzhen. Wuzhen (乌镇) is one of China's six famous water towns, but the only one truly worth staying overnight. Check into a hotel inside the West Gate scenic area (book 2-4 weeks ahead). Afternoon: explore the West Gate — the indigo fabric workshop, the wedding museum, the ancient bed museum (surprisingly interesting). Walk the canals, cross the stone bridges. Evening: this is why you came. After 5pm, the West Gate empties of day-trippers. The lanterns come on. The canals become mirrors. Walk the bridges in near solitude. Dinner at a canal-side restaurant.`,
            tip: 'Wuzhen West Gate requires an entrance ticket, but if you stay inside the scenic area you pay once and can come and go. The hotels inside are run by the Wuzhen management company — consistent quality in restored Ming-Qing courtyard buildings. Book on the official Wuzhen website or Trip.com. The cheaper guesthouses outside the gate mean you miss the empty night-time canals, which is the entire point of Wuzhen.',
          },
          {
            day: 'Day 4: Wuzhen → Moganshan',
            content: `Morning: visit Wuzhen's East Gate (东栅) — older, less polished, with residents still living in the old houses. The East Gate has a lived-in quality the West Gate lacks. After lunch, take a Didi to Moganshan (1.5 hrs). Moganshan (莫干山) is a bamboo-covered mountain at 700m where Shanghai's colonial elite built stone villas in the 1920s to escape the summer heat. It is now China's most famous mountain resort — boutique guesthouses, bamboo forests, and hiking trails. Check into a guesthouse and walk the villa trail.`,
            tip: 'Moganshan is a 1.5-hour drive from Wuzhen. There is no train — you need a private car or Didi. The mountain road is winding — take motion sickness pills if you are prone. The temperature is 5-8°C cooler than Hangzhou — it genuinely is a summer escape.',
          },
          {
            day: 'Day 5: Moganshan → Shanghai',
            content: `Morning: hike the Bamboo Forest Trail (2-3 hours) — a network of stone paths through dense bamboo groves that filter the light into green. Visit the Moganshan Villa (蒋介石官邸), where Chiang Kai-shek stayed in the 1930s, and the Sword Pond (剑池), a waterfall and pool where swords were supposedly forged 2,500 years ago. Afternoon: drive back to Shanghai (2.5 hrs by Didi) or take a bus from Deqing to Shanghai (2.5 hrs). Fly out in the evening or stay the night.`,
            tip: 'Moganshan is about atmosphere, not sights. The villa trail, the bamboo forest, the morning mist — it is a place to slow down, not check off a list. The best guesthouses (naked Retreats, Le Passage Mohkan Shan) are design-forward retreats with mountain views and book out weeks in advance. Mid-range guesthouses are still charming, many in converted stone villas with excellent local food.',
          },
        ],
        related: [
          {
            href: '/yangtze-delta/shanghai-hangzhou-suzhou',
            label: 'Shanghai, Hangzhou & Suzhou',
            description: "Add Shanghai's skyline and Suzhou's classical gardens.",
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Shanghai Pudong skyline at night',
            days: '6-7 days',
          },
          {
            href: '/yangtze-delta/nanjing-zhenjiang-yangzhou',
            label: 'Nanjing & Yangzhou',
            description: "Extend west to Nanjing and Yangzhou's Grand Canal tea culture.",
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Nanjing Ming dynasty city walls',
            days: '4-5 days',
          },
          {
            href: '/huangshan/yellow-mountain',
            label: 'Huangshan',
            description: "Head south to the Yellow Mountains — China's most iconic peaks.",
            image: '/images/destinations/huangshan.webp',
            imageAlt: 'Huangshan granite peaks and pine trees in mist',
            days: '3-4 days',
          },
        ],
      },
      {
        slug: 'nanjing-zhenjiang-yangzhou',
        kicker: 'Yangtze Delta',
        title: 'Nanjing & Yangzhou: Imperial Capital & Canal Cities',
        subtitle:
          "Nanjing's 600-year-old city walls, Sun Yat-sen's mountain-top mausoleum, and Yangzhou's Grand Canal morning tea culture — the Yangtze Delta's historic heart.",
        duration: '4-5 days',
        route: 'Shanghai → Nanjing → Zhenjiang → Yangzhou → Shanghai',
        heroImage: '/images/destinations/yangtze-delta.webp',
        heroImageAlt: 'Nanjing Ming dynasty city walls',
        highlights: [
          {
            icon: 'clock',
            title: '4-5 Days',
            description:
              "A compact route through the Yangtze Delta's historic heart — Nanjing, Zhenjiang, and Yangzhou.",
          },
          {
            icon: 'map',
            title: 'Nanjing → Zhenjiang → Yangzhou',
            description:
              'Connected by high-speed rail and bus. All three cities are within 2 hours of Shanghai.',
          },
          {
            icon: 'star',
            title: 'City Walls, Mausoleum, Morning Tea',
            description:
              "Ming dynasty fortifications, Sun Yat-sen's mountain-top memorial, and a leisurely dim sum ritual.",
          },
        ],
        experienceTypes: ['culture', 'culinary'],
        overview:
          "Nanjing (南京, 'Southern Capital') was China's capital six times, most recently as the Republic of China's capital under Sun Yat-sen. It has Ming dynasty city walls (the longest surviving city walls in the world at 35 km), a mountain-top mausoleum, and a dark WWII history at the Nanjing Massacre Memorial. Yangzhou (扬州), 1 hour east, was one of China's wealthiest cities during the Tang dynasty thanks to its position on the Grand Canal. Today it is known for morning tea culture (早茶) — a leisurely dim sum ritual that rivals Guangzhou's.",
        stops: [
          {
            day: 'Day 1: Shanghai → Nanjing',
            content: `Take the 1-hour high-speed train from Shanghai to Nanjing South. Afternoon: walk the Nanjing City Wall — the best section is from Xuanwu Gate to Taicheng, with views over Xuanwu Lake and Purple Mountain. Visit Jiming Temple (鸡鸣寺), a 1,500-year-old Buddhist temple perched on the city wall. Evening: Fuzimiao (夫子庙, Confucius Temple) area — the pedestrian streets along the Qinhuai River are touristy but atmospheric at night with lanterns reflecting in the canal.`,
            tip: 'The Nanjing City Wall section at Taicheng (台城) is the best-preserved section and has the classic view of Xuanwu Lake with the modern Nanjing skyline behind it. Go at sunset. The wall is wide enough to walk comfortably — it is up to 12m thick at the base.',
          },
          {
            day: 'Day 2: Nanjing',
            content: `Morning: Sun Yat-sen Mausoleum (中山陵, free, book ahead) — a grand staircase of 392 steps leading up Purple Mountain to a blue-roofed memorial hall. The mausoleum is China's most important Republican-era monument. Walk to the nearby Ming Xiaoling Tomb (明孝陵) — the burial site of the Hongwu Emperor, founder of the Ming dynasty, with a 1.8km 'Spirit Way' lined with stone animals. Afternoon: Nanjing Massacre Memorial Hall (free, book ahead) — a somber, essential museum documenting the 1937 Japanese occupation. It is heavy but world-class.`,
            tip: 'Sun Yat-sen Mausoleum requires a free reservation on WeChat (search 钟山风景区). Book 2-3 days ahead. The 392 steps are not as intimidating as they look — there are rest platforms. The Ming Xiaoling Spirit Way is most atmospheric in autumn when the maple trees turn red.',
          },
          {
            day: 'Day 3: Nanjing → Zhenjiang → Yangzhou',
            content: `Morning: train from Nanjing to Zhenjiang (20 min). Zhenjiang (镇江) is a small city on the Yangtze with three scenic hills. Visit Jinshan Temple (金山寺) — a Buddhist temple on a hilltop island where legend says a white snake spirit was trapped under the pagoda. After lunch (Zhenjiang is famous for vinegar — try the vinegar-braised pork ribs), take the 30-minute bus across the Yangtze to Yangzhou. Afternoon: Slender West Lake (瘦西湖) — a long, narrow lake with willow-lined banks, arched stone bridges, and Ming-Qing pavilions. It is West Lake's smaller, more refined cousin.`,
            tip: "Slender West Lake has an entrance fee that some travellers find steep, but it's worth it for the Five Pavilion Bridge and the White Dagoba. Walk the full length (3 km, about 2 hours) from south to north. The lake is most beautiful in March-April when the peach blossoms and willows are in full display — '烟花三月下扬州' as the Tang poem says.",
          },
          {
            day: 'Day 4: Yangzhou → Shanghai',
            content: `Morning: Yangzhou morning tea (早茶) — this is the city's defining cultural experience. Go to Fuchun Tea House (富春茶社, est. 1885) or Yechun Tea House (冶春茶社) by 7:30am. Order san ding bao (三丁包, three-dice buns filled with chicken, pork, and bamboo shoots), crab roe soup dumplings (蟹黄汤包), and a pot of Biluochun green tea. The meal takes 1-2 hours — this is not fast food. Afternoon: visit Geyuan Garden (个园), a Qing dynasty salt merchant's garden with bamboo groves and rockeries representing the four seasons. Then train back to Shanghai (2 hrs).`,
            tip: 'Yangzhou morning tea is a ritual, not a meal. It is leisurely — do not rush. The most famous dish is crab roe soup dumpling (蟹黄汤包) — you drink the soup through a straw before eating the wrapper. Fuchun Tea House fills up by 8am on weekends. Go on a weekday or arrive by 7am. The old Fuchun on Deshengqiao Road is the original.',
          },
        ],
        related: [
          {
            href: '/yangtze-delta/shanghai-hangzhou-suzhou',
            label: 'Shanghai, Hangzhou & Suzhou',
            description: 'The classic Yangtze Delta golden triangle.',
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Shanghai Pudong skyline at night',
            days: '6-7 days',
          },
          {
            href: '/ancient-capitals/xian-luoyang-kaifeng',
            label: 'Three Ancient Capitals',
            description: 'Continue west to Xian, Luoyang, and Kaifeng.',
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Xian Terracotta Warriors in battle formation',
            days: '6-7 days',
          },
          {
            href: '/golden-triangle/beijing-in-depth',
            label: 'Beijing In Depth',
            description: "Add Beijing — China's 3,000-year capital.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '4-5 days',
          },
        ],
      },
    ],
  },
  {
    name: 'Ancient Capitals',
    dir: 'ancient-capitals',
    routes: [
      {
        slug: 'xian-luoyang-kaifeng',
        kicker: 'Ancient Capitals',
        title: "Xian, Luoyang & Kaifeng: China's Three Ancient Capitals",
        subtitle:
          "The Terracotta Warriors, the Longmen Buddhist grottoes carved into limestone cliffs, and Kaifeng — the Song dynasty capital that was once the world's largest city.",
        duration: '6-7 days',
        route: 'Xian → Luoyang → Kaifeng → Zhengzhou',
        heroImage: '/images/destinations/ancient-capitals.webp',
        heroImageAlt: 'Xian Terracotta Warriors in battle formation',
        highlights: [
          {
            icon: 'clock',
            title: '6-7 Days',
            description:
              "The essential China history itinerary — three ancient capitals along the Yellow River's imperial corridor.",
          },
          {
            icon: 'map',
            title: 'Xian → Luoyang → Kaifeng',
            description:
              'Connected by 1-1.5 hour high-speed trains. Fly into Xian and out of Zhengzhou.',
          },
          {
            icon: 'star',
            title: 'Terracotta Warriors, Longmen Grottoes, Song Dynasty Kaifeng',
            description:
              "2,200-year-old warriors, 100,000 Buddhist statues, and the world's largest city in 1000 AD.",
          },
        ],
        experienceTypes: ['culture', 'photography'],
        overview:
          "China had eight great ancient capitals, and three of them sit along a 500km stretch of the Yellow River: Xian (Chang'an, capital of 13 dynasties including the Zhou, Qin, Han, and Tang), Luoyang (capital of 13 dynasties, home of the Longmen Grottoes and the first Buddhist temple in China), and Kaifeng (the Northern Song capital that was the world's largest city in 1000 AD with over 1 million people). This route connects them by high-speed train — Xian to Luoyang is 1.5 hours, Luoyang to Kaifeng is 1 hour. It is the essential China history itinerary for travellers who want to go deeper than the Beijing-Xian-Shanghai greatest-hits tour.",
        stops: [
          {
            day: 'Day 1: Arrive Xian',
            content: `Fly into Xian Xianyang Airport (XIY). Afternoon: Xian City Wall — the most complete ancient city wall in China (14 km, built 1370). Rent a bike on the wall (90 min to cycle the full circuit). Evening: Muslim Quarter (回民街) — Xian's Hui Muslim neighbourhood is a food street like no other: lamb skewers sizzling over charcoal, yangrou paomo (羊肉泡馍, crumbled flatbread in lamb soup), and persimmon cakes (柿子饼). The Muslim Quarter has existed for 1,300 years since Silk Road traders settled here.`,
            tip: 'The city wall bike ride is 14 km and takes about 90 minutes at a leisurely pace. The wall is 12m wide — wide enough for a small car. Go in the late afternoon (4-5pm) when the light turns golden and the temperature drops. The south gate (永宁门) has the most dramatic entrance and the best bike rental station.',
          },
          {
            day: 'Day 2: Xian',
            content: `Morning: Terracotta Warriors (兵马俑). Get there at 8:30am opening — the site is 40 km east of Xian and takes 1 hour by public bus from Xian Railway Station or 40 minutes by private car. The warriors are in three pits: Pit 1 is the largest (6,000 warriors in battle formation, only 2,000 excavated), Pit 2 has cavalry and chariots, Pit 3 is the command centre. Afternoon: Huaqing Hot Springs at the foot of Mount Li — the Tang dynasty imperial bathing pools where Emperor Xuanzong and his consort Yang Guifei bathed. Evening: Tang Dynasty music and dance show.`,
            tip: 'Terracotta Warriors ticket: book ahead online. Get there at 8:30am sharp — by 10am Pit 1 is a wall of tour groups. Walk to the far end of Pit 1 first (fewer people) and work your way back. The museum is in the countryside — there is nowhere good to eat nearby. Bring snacks or eat breakfast before you go. The warriors were originally painted in bright colours — the pigments faded within minutes of exposure to air when excavated.',
          },
          {
            day: 'Day 3: Xian → Luoyang',
            content: `Take the 1.5-hour high-speed train from Xian North to Luoyang Longmen. Afternoon: Longmen Grottoes (龙门石窟) — a UNESCO site of over 100,000 Buddhist statues carved into 1 km of limestone cliffs along the Yi River. The carvings span 400 years (5th-9th centuries). The largest is the 17m Vairocana Buddha in the Fengxian Temple. Cross the river to see the grottoes from the opposite bank — the scale of the cliff carving becomes clear. Evening: Luoyang Water Banquet (洛阳水席) — a 24-course meal where every dish is served in broth.`,
            tip: "Longmen Grottoes are best in afternoon light — the western cliffs (main grottoes) face east and are illuminated by the morning sun, but the afternoon gives you the best perspective from the east bank looking back. The Vairocana Buddha's face is 4m tall. Her smile is considered the most beautiful in Chinese Buddhist art. The site takes 3-4 hours.",
          },
          {
            day: 'Day 4: Luoyang',
            content: `Morning: White Horse Temple (白马寺) — China's first Buddhist temple, founded in 68 AD when two Indian monks arrived on white horses carrying Buddhist scriptures. The temple has a working monastery, pagodas from multiple dynasties, and a recently built Indian/Thai/Myanmar temple complex. Afternoon: Luoyang Museum (free, book ahead) — an excellent collection of Tang dynasty ceramics, including the famous Tang sancai (唐三彩, three-colour glazed pottery). Evening: Luoyang Old Town for local snacks.`,
            tip: "The White Horse Temple's international section (Indian, Thai, and Myanmar temples) was built in the 2000s and is more a curiosity than historically significant. The real value is in the original Chinese halls — the Qiyun Pagoda (built 1175) and the Hall of Heavenly Kings. The temple is 12 km east of Luoyang — 40 minutes by bus or 25 minutes by Didi.",
          },
          {
            day: 'Day 5: Luoyang → Shaolin Temple → Kaifeng',
            content: `Day trip to Shaolin Temple (少林寺), 1.5 hours from Luoyang by bus. Shaolin is the birthplace of Chan (Zen) Buddhism and kung fu — the monks have practised martial arts here for 1,500 years. Visit the main temple, the Pagoda Forest (228 stone pagodas housing the ashes of abbots), and watch a kung fu demonstration by the current generation of warrior monks. Afternoon: bus back to Luoyang, then high-speed train to Kaifeng (1 hr).`,
            tip: 'Shaolin Temple is touristy — manage expectations. The kung fu demonstration is impressive (students breaking metal bars on their heads) but the temple itself is smaller than you might expect. The Pagoda Forest is the most atmospheric part — 228 stone pagodas from the 7th to 19th centuries in a quiet pine grove. The Shaolin area is also full of martial arts schools where Chinese parents send their children to study kung fu full-time.',
          },
          {
            day: 'Day 6: Kaifeng',
            content: `Kaifeng was the Northern Song capital (960-1127 AD) and the world's largest city at the time. Start at the Millennium City Park (清明上河园) — a life-sized reconstruction of a Song dynasty city based on the famous scroll painting 'Along the River During the Qingming Festival'. Staff wear Song dynasty costumes and there are performances throughout the day. Afternoon: Dragon Pavilion (龙亭) and the Iron Pagoda (铁塔) — a 55m brick pagoda from 1049 with rust-coloured glazed tiles that look like iron. Evening: Kaifeng night market at Gulou (鼓楼) — xiaolongbao (Kaifeng claims to have invented soup dumplings), bucket chicken (桶子鸡), and almond tea.`,
            tip: "The Kaifeng night market at Gulou Square is one of China's largest. The Kaifeng xiaolongbao (开封灌汤包) are different from Shanghai's — the skin is thicker and the filling is lamb, not pork. Kaifeng also has a significant Hui Muslim population, so lamb dishes are common. The almond tea (杏仁茶) is a Kaifeng speciality — sweet, nutty, and served hot.",
          },
          {
            day: 'Day 7: Kaifeng → Zhengzhou → Fly Out',
            content: `Morning: Xiangguo Temple (大相国寺) — a Tang dynasty temple that was the Song dynasty's most important Buddhist institution, famous for its statue of Guanyin with 1,000 hands and eyes carved from a single ginkgo tree. Afternoon: 30-minute train to Zhengzhou, then fly out from Zhengzhou Xinzheng Airport (CGO).`,
            tip: 'Zhengzhou is the transport hub for this region. It has flights to most major Chinese cities and some international connections. The airport is 35 km from the city centre — 40 minutes by metro (line 2 extension). If your flight is late, the Henan Museum in Zhengzhou (free) is excellent for its Shang dynasty bronzes.',
          },
        ],
        related: [
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: 'Add Beijing and Shanghai for the classic Golden Triangle.',
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8-10 days',
          },
          {
            href: '/ancient-capitals/pingyao-datong-yungang',
            label: 'Pingyao, Datong & Yungang',
            description: "Continue north to Pingyao's walled city and the Yungang Grottoes.",
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Yungang Grottoes giant Buddha statues',
            days: '5-6 days',
          },
          {
            href: '/silk-road/xian-lanzhou-dunhuang',
            label: "Silk Road: Xi'an to Dunhuang",
            description: "Follow the Silk Road west from Xi'an into the desert.",
            image: '/images/destinations/silk-road.webp',
            imageAlt: 'Camel caravan in Dunhuang dunes',
            days: '7-10 days',
          },
        ],
      },
      {
        slug: 'pingyao-datong-yungang',
        kicker: 'Ancient Capitals',
        title: "Pingyao, Datong & the Yungang Grottoes: Shanxi's Ancient Heartland",
        subtitle:
          "A Ming dynasty walled banking city, 51,000 Buddhist statues carved into a 1km cliff, and a temple suspended from a sheer rock face — Shanxi province is China's best-kept history secret.",
        duration: '5-6 days',
        route: 'Beijing → Pingyao → Datong → Hanging Temple → Beijing',
        heroImage: '/images/destinations/ancient-capitals.webp',
        heroImageAlt: 'Yungang Grottoes giant Buddha statues',
        highlights: [
          {
            icon: 'clock',
            title: '5-6 Days',
            description:
              "Shanxi province is China's museum of ancient architecture — more pre-14th-century wooden buildings than the rest of China combined.",
          },
          {
            icon: 'map',
            title: 'Beijing → Pingyao → Datong',
            description:
              'Connected by high-speed rail. Beijing to Pingyao in 4 hours, Pingyao to Datong in 3 hours.',
          },
          {
            icon: 'star',
            title: 'Pingyao Walls, Yungang Grottoes, Hanging Temple',
            description:
              'A Ming banking city, 51,000 Buddhist statues, and a temple clinging to a cliff 75m up.',
          },
        ],
        experienceTypes: ['culture', 'photography'],
        overview:
          "Shanxi province (山西, 'West of the Mountains') is China's museum of ancient architecture. It has more surviving pre-14th-century wooden buildings than the rest of China combined. This route connects three extraordinary sites: Pingyao (平遥), a perfectly preserved Ming-Qing banking city with 6 km of intact city walls; the Yungang Grottoes (云冈石窟) near Datong — 51,000 Buddhist statues carved 1,500 years ago, older and larger than the Longmen Grottoes; and the Hanging Temple (悬空寺), a temple clinging to a cliff face 75m above a canyon floor.",
        stops: [
          {
            day: 'Day 1: Beijing → Pingyao',
            content: `Take the 4-hour high-speed train from Beijing Fengtai to Pingyao Ancient City. Pingyao is a walled city of 40,000 people that was China's banking capital in the 19th century — the 'Wall Street of China' during the Qing dynasty. The entire city within the walls is a UNESCO site. Check into a guesthouse inside the walls (a converted courtyard house with Ming-Qing architecture). Walk the city walls (a combined ticket covers the walls and all attractions) at sunset — the 6 km circuit gives a panorama of grey-tiled roofs and narrow lanes.`,
            tip: "Pingyao's combined ticket covers the city walls and 18 attractions, valid for 3 days. The must-sees: Rishengchang Draft Bank (the first bank in China, founded 1823), the city walls, and the Ming-Qing Street. The county yamen (government office) is interesting but takes 2 hours — skip it if you are tight on time.",
          },
          {
            day: 'Day 2: Pingyao',
            content: `Full day exploring Pingyao. Visit Rishengchang (日昇昌) — the first draft bank in Chinese history, founded in 1823. Its system of remittance receipts (basically paper money backed by silver deposits) transformed Chinese commerce. Walk Ming-Qing Street (明清街), the main commercial artery since the 14th century. Visit the Confucius Temple and the City God Temple. For lunch: Pingyao beef (平遥牛肉) — cured beef that is pink, tender, and sliced paper-thin. It has been made here since the Ming dynasty.`,
            tip: "Pingyao beef (平遥牛肉) is the local speciality. The best is from Guanyun (冠云) brand, sold in red boxes everywhere. It is eaten cold, sliced thin, as a snack with beer. Also try the cat's ear noodles (猫耳朵) — small pieces of dough pressed into the shape of a cat's ear and stir-fried with vegetables.",
          },
          {
            day: 'Day 3: Pingyao → Datong',
            content: `Morning: visit the Shuanglin Temple (双林寺), 6 km from Pingyao — a 1,500-year-old temple with over 2,000 painted clay statues from the Song, Yuan, Ming, and Qing dynasties. The statues are extraordinary: life-sized, individually expressive, and still bearing their original pigments. Afternoon: Didi to Pingyao Ancient City Station (15 min), then high-speed train to Datong South (3 hrs). Datong is an industrial city (coal mining) with an ancient heart. Check in and walk the rebuilt Datong city wall at night.`,
            tip: "Shuanglin Temple is often skipped by tourists who only visit the Pingyao old town. That is a mistake. The painted clay statues are among the finest surviving examples of Chinese polychrome sculpture. The 'Thousand-Armed Guanyin' hall is the highlight — the goddess is surrounded by hundreds of suspended miniature statues.",
          },
          {
            day: 'Day 4: Datong — Yungang Grottoes',
            content: `Take the 30-minute bus from Datong to the Yungang Grottoes (云冈石窟). The grottoes stretch 1 km along a sandstone cliff and contain 51,000 Buddhist statues in 252 caves, carved between 460-525 AD. The largest is a 17m seated Buddha in Cave 5. Cave 20's open-air Buddha is the iconic image — a 13.7m seated Buddha exposed when the front wall collapsed centuries ago. The site takes 3-4 hours. Afternoon: Datong Museum (free) for the context on the Northern Wei dynasty that built the grottoes. Evening: Datong knife-shaved noodles (刀削面) — Shanxi's signature dish.`,
            tip: "Yungang Caves 5-20 are the highlights. Cave 6 is the most ornate — a square pagoda pillar covered in carvings of the Buddha's life story. Cave 12 is the 'Music Cave' with celestial musicians carved across the ceiling. The open-air Buddha in Cave 20 is the photo everyone takes — but go further to Caves 16-19 for the full Northern Wei progression of styles.",
          },
          {
            day: 'Day 5: Hanging Temple & Yingxian Pagoda',
            content: `Full-day excursion: drive 1.5 hours to the Hanging Temple (悬空寺) — a temple built into a sheer cliff face 75m above the canyon floor, supported by wooden beams wedged into the rock. It was built in 491 AD and is unique in China: it houses Buddhist, Daoist, and Confucian shrines in the same temple. Walk the narrow wooden walkways (they creak, which is part of the experience). Afternoon: drive 1 hour to the Yingxian Wooden Pagoda (应县木塔) — the oldest surviving fully wooden pagoda in the world, built in 1056 without a single nail. At 67m (9 storeys), it is a miracle of Song dynasty engineering. Return to Datong for the night.`,
            tip: 'The Hanging Temple looks terrifying but is structurally sound — the beams are oak wedged into the rock, and the cliff overhang protects the temple from rain. The walkways are narrow (60cm) and the railing is knee-height. Not for those with severe fear of heights. The Yingxian Pagoda is leaning slightly (like the Tower of Pisa) — you can no longer climb it, only view from the outside.',
          },
          {
            day: 'Day 6: Datong → Beijing',
            content: `Morning: Huayan Temple (华严寺) — a Liao dynasty (1038 AD) temple with the largest wooden Buddha hall in China and exquisite Liao dynasty clay sculptures. The temple library (薄伽教藏殿) has cabinets designed to look like miniature buildings. Afternoon: high-speed train back to Beijing (2 hrs). Fly out or continue your China journey.`,
            tip: "Huayan Temple's main hall (大雄宝殿) is one of the largest wooden Buddhist halls in China — 1,559 m². The clay sculptures in the Sutra Library are Liao dynasty originals (11th century) and are remarkably well-preserved. The temple is often empty because tourists prioritise Yungang — it is a quiet, atmospheric experience.",
          },
        ],
        related: [
          {
            href: '/ancient-capitals/xian-luoyang-kaifeng',
            label: 'Xian, Luoyang & Kaifeng',
            description: 'Continue south to the other ancient capitals.',
            image: '/images/destinations/ancient-capitals.webp',
            imageAlt: 'Xian Terracotta Warriors in battle formation',
            days: '6-7 days',
          },
          {
            href: '/golden-triangle/beijing-in-depth',
            label: 'Beijing In Depth',
            description: 'Spend 4-5 days exploring Beijing before heading to Shanxi.',
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '4-5 days',
          },
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: "Beijing, Xi'an & Shanghai",
            description: "The full Golden Triangle — add Xi'an and Shanghai.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8-10 days',
          },
        ],
      },
    ],
  },
];

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
