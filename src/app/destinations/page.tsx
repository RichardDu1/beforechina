import { Metadata } from 'next';
import Link from 'next/link';
import Kicker from '@/components/Kicker';
import TourCTA from '@/components/TourCTA';
import SignatureCard from '@/components/SignatureCard';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'China Travel Routes & Destinations (2026) | BeforeChina',
  description:
    'Browse all China travel routes — day-by-day itineraries across Xinjiang, Yunnan, Sichuan, Tibet, Silk Road, Guilin, Zhangjiajie and more. Real local tips, no agency markup.',
  alternates: { canonical: '/destinations' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Destinations',
      item: 'https://beforechina.com/destinations',
    },
  ],
};

const REGIONS = [
  {
    name: 'Golden Triangle',
    slug: 'golden-triangle',
    description:
      "The essential first-timer route — Beijing's Forbidden City, Xian's Terracotta Warriors, and Shanghai's futuristic skyline.",
    routes: [
      {
        href: '/golden-triangle/beijing-xian-shanghai',
        label: 'Beijing, Xian & Shanghai',
        days: '8-10 days',
      },
      { href: '/golden-triangle/beijing-in-depth', label: 'Beijing In-Depth', days: '4-5 days' },
      { href: '/golden-triangle/xian-in-depth', label: 'Xian In-Depth', days: '3-4 days' },
      { href: '/golden-triangle/shanghai-in-depth', label: 'Shanghai In-Depth', days: '3-4 days' },
      { href: '/golden-triangle/beijing-xian', label: 'Beijing & Xian', days: '6-7 days' },
      { href: '/golden-triangle/beijing-shanghai', label: 'Beijing & Shanghai', days: '6-7 days' },
    ],
  },
  {
    name: 'Xinjiang',
    slug: 'xinjiang',
    description:
      'Silk Road cities, alpine lakes at 3,600m, the Karakoram Highway, and the vast Taklamakan Desert.',
    routes: [
      { href: '/xinjiang/silk-road', label: 'Silk Road: Urumqi to Kashgar', days: '7-10 days' },
      { href: '/xinjiang/karakoram-highway', label: 'Karakoram Highway', days: '5-7 days' },
      { href: '/xinjiang/northern-loop', label: 'Northern Xinjiang Loop', days: '8-12 days' },
      {
        href: '/xinjiang/taklamakan-desert',
        label: 'Taklamakan Desert Circuit',
        days: '10-14 days',
      },
    ],
  },
  {
    name: 'Yunnan',
    slug: 'yunnan',
    description:
      'Ancient towns, Tibetan foothills, Tiger Leaping Gorge, and tropical Xishuangbanna.',
    routes: [
      {
        href: '/yunnan/kunming-dali-lijiang-shangri-la',
        label: 'Shangri-La Trail',
        days: '8-10 days',
      },
      {
        href: '/yunnan/lijiang-lugu-lake-tiger-leaping-gorge',
        label: 'Lijiang, Lugu Lake & Tiger Leaping Gorge',
        days: '7-9 days',
      },
      { href: '/yunnan/dali-shaxi-tengchong', label: 'Dali, Shaxi & Tengchong', days: '6-8 days' },
      {
        href: '/yunnan/xishuangbanna-tropical',
        label: 'Xishuangbanna Tropical Escape',
        days: '4-6 days',
      },
      {
        href: '/yunnan/kunming-dongchuan-yuanyang',
        label: 'Kunming, Dongchuan & Yuanyang Rice Terraces',
        days: '5-7 days',
      },
    ],
  },
  {
    name: 'Sichuan',
    slug: 'sichuan',
    description:
      "Pandas, hotpot, Jiuzhaigou's turquoise lakes, and the road to Tibet via Daocheng Yading.",
    routes: [
      {
        href: '/sichuan/chengdu-jiuzhaigou-huanglong',
        label: 'Chengdu & Jiuzhaigou',
        days: '6-8 days',
      },
      { href: '/sichuan/chengdu-emei-leshan', label: 'Chengdu, Emei & Leshan', days: '4-6 days' },
      { href: '/sichuan/chengdu-in-depth', label: 'Chengdu In-Depth', days: '3-4 days' },
      {
        href: '/sichuan/chengdu-daocheng-yading',
        label: 'Chengdu to Daocheng Yading',
        days: '7-9 days',
      },
      {
        href: '/sichuan/chongqing-wulong-dazu',
        label: 'Chongqing, Wulong & Dazu',
        days: '4-6 days',
      },
    ],
  },
  {
    name: 'Guangxi',
    slug: 'guangxi',
    description:
      'The 20 RMB note landscape — karst peaks, the Li River, and ancient rice terraces.',
    routes: [
      {
        href: '/guangxi/guilin-yangshuo-lijiang',
        label: 'Guilin & Yangshuo: Li River',
        days: '4-6 days',
      },
      {
        href: '/guangxi/guilin-longji-xingping',
        label: 'Guilin, Longji Terraces & Xingping',
        days: '5-7 days',
      },
    ],
  },
  {
    name: 'Guizhou',
    slug: 'guizhou',
    description:
      "Asia's largest waterfall, thousand-household Miao villages, and the Buddhist summit of Fanjingshan.",
    routes: [
      {
        href: '/guizhou/huangguoshu-libo-miao',
        label: 'Huangguoshu, Libo & Miao Villages',
        days: '5-7 days',
      },
      { href: '/guizhou/fanjingshan-zhenyuan', label: 'Fanjingshan & Zhenyuan', days: '4-5 days' },
    ],
  },
  {
    name: 'Yangtze Delta',
    slug: 'yangtze-delta',
    description:
      "Shanghai's skyline, Hangzhou's West Lake, Suzhou's classical gardens, and ancient water towns.",
    routes: [
      {
        href: '/yangtze-delta/shanghai-hangzhou-suzhou',
        label: 'Shanghai, Hangzhou & Suzhou',
        days: '6-8 days',
      },
      {
        href: '/yangtze-delta/hangzhou-wuzhen-mogan',
        label: 'Hangzhou, Wuzhen & Moganshan',
        days: '4-6 days',
      },
      {
        href: '/yangtze-delta/nanjing-zhenjiang-yangzhou',
        label: 'Nanjing, Zhenjiang & Yangzhou',
        days: '4-6 days',
      },
    ],
  },
  {
    name: 'Ancient Capitals',
    slug: 'ancient-capitals',
    description:
      'Walk through 3,000 years of Chinese imperial history — Xian, Luoyang, Kaifeng, Pingyao & Datong.',
    routes: [
      {
        href: '/ancient-capitals/xian-luoyang-kaifeng',
        label: 'Xian, Luoyang & Kaifeng',
        days: '6-8 days',
      },
      {
        href: '/ancient-capitals/pingyao-datong-yungang',
        label: 'Pingyao, Datong & Yungang Grottoes',
        days: '5-7 days',
      },
    ],
  },
  {
    name: 'Silk Road',
    slug: 'silk-road',
    description: 'Rainbow mountains, desert fortresses, the Mogao Caves, and the Hexi Corridor.',
    routes: [
      { href: '/silk-road/xian-lanzhou-dunhuang', label: 'Xian to Dunhuang', days: '7-10 days' },
      {
        href: '/silk-road/hexi-corridor-deep',
        label: 'Hexi Corridor Deep Dive',
        days: '10-14 days',
      },
    ],
  },
  {
    name: 'Tibet',
    slug: 'tibet',
    description:
      'Potala Palace, turquoise alpine lakes, Everest Base Camp at 5,150m, and Tibetan Buddhist monasteries.',
    routes: [
      {
        href: '/tibet/lhasa-shigatse-everest',
        label: 'Lhasa to Everest Base Camp',
        days: '8-10 days',
      },
      { href: '/tibet/lhasa-namtso-lake', label: 'Lhasa & Namtso Lake', days: '5-7 days' },
    ],
  },
  {
    name: 'Dongbei (Northeast)',
    slug: 'dongbei',
    description:
      "The world's largest ice festival in Harbin, and the volcanic crater lake of Changbaishan.",
    routes: [
      { href: '/dongbei/harbin-snow-town', label: 'Harbin & Snow Town', days: '5-7 days' },
      { href: '/dongbei/changbaishan', label: 'Changbaishan', days: '3-5 days' },
    ],
  },
  {
    name: 'Fujian',
    slug: 'fujian',
    description:
      'Hakka earthen roundhouses (tulou), the Maritime Silk Road port of Quanzhou, and Wuyishan tea mountains.',
    routes: [
      {
        href: '/fujian/xiamen-tulou-quanzhou',
        label: 'Xiamen, Tulou & Quanzhou',
        days: '5-7 days',
      },
      { href: '/fujian/wuyishan', label: 'Wuyishan', days: '3-4 days' },
    ],
  },
  {
    name: 'South China',
    slug: 'south-china',
    description:
      "Hong Kong's Victoria Harbour dim sum, Macau's Portuguese lanes, Guangzhou's Canton Tower, and Hainan's tropical beaches.",
    routes: [
      { href: '/south-china/hong-kong-macau', label: 'Hong Kong & Macau', days: '5-7 days' },
      { href: '/south-china/guangzhou-shenzhen', label: 'Guangzhou & Shenzhen', days: '4-6 days' },
      { href: '/south-china/sanya-hainan', label: 'Sanya & Hainan', days: '4-6 days' },
    ],
  },
  {
    name: 'Zhangjiajie',
    slug: 'zhangjiajie',
    description:
      "The Avatar mountains — 3,000 sandstone pillars rising through mist, plus the world's longest glass bridge.",
    routes: [
      { href: '/zhangjiajie/avatar-mountains', label: 'Avatar Mountains', days: '3-5 days' },
    ],
  },
  {
    name: 'Huangshan',
    slug: 'huangshan',
    description:
      "China's most painted mountain — granite peaks, ancient pines, hot springs, and Huizhou villages.",
    routes: [{ href: '/huangshan/yellow-mountain', label: 'Yellow Mountain', days: '3-4 days' }],
  },
  {
    name: 'Shandong',
    slug: 'shandong',
    description: "Tsingtao beer in Qingdao, Confucius' hometown of Qufu, and the sacred Mount Tai.",
    routes: [
      { href: '/shandong/qingdao-yantai', label: 'Qingdao & Yantai', days: '4-6 days' },
      { href: '/shandong/taishan-qufu', label: 'Mount Tai & Qufu', days: '3-4 days' },
    ],
  },
  {
    name: 'Jiangxi',
    slug: 'jiangxi',
    description: 'Misty Lushan Mountain and the thousand-year-old porcelain kilns of Jingdezhen.',
    routes: [
      { href: '/jiangxi/lushan-jingdezhen', label: 'Lushan & Jingdezhen', days: '4-6 days' },
    ],
  },
  {
    name: 'Yangtze Cruise',
    slug: 'yangtze-cruise',
    description:
      "Cruise through the Three Gorges — the world's largest dam, sheer limestone cliffs, and misty tributaries.",
    routes: [
      {
        href: '/yangtze-cruise/chongqing-yichang-cruise',
        label: 'Chongqing to Yichang Cruise',
        days: '4-5 days',
      },
    ],
  },
];

export default function DestinationsPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[breadcrumbSchema]} id="destinations-schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Destinations</Kicker>
          <h1>China Travel Routes</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            Day-by-day itineraries across 18 regions — built from real local knowledge, not agency
            copy. Pick a route or browse by region.
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 0 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {REGIONS.map((region) => (
              <div key={region.slug}>
                <div style={{ marginBottom: '16px' }}>
                  <h2 style={{ fontSize: '24px', marginBottom: '4px' }}>
                    <Link
                      href={`/${region.slug}`}
                      style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
                    >
                      {region.name}
                    </Link>
                  </h2>
                  <p
                    style={{ color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '680px' }}
                  >
                    {region.description}
                  </p>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '12px',
                  }}
                >
                  {region.routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className="article-card"
                      style={{ textDecoration: 'none', color: 'inherit', padding: '16px 20px' }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span style={{ fontWeight: 500 }}>{route.label}</span>
                        <span
                          style={{
                            fontSize: '13px',
                            color: 'var(--text-muted)',
                            whiteSpace: 'nowrap',
                            marginLeft: '12px',
                          }}
                        >
                          {route.days}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '800px', margin: '64px auto 0' }}>
        <TourCTA />
        <SignatureCard />
      </div>
    </div>
  );
}
