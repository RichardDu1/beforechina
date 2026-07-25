import { Metadata } from 'next';
import Image from 'next/image';
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
  openGraph: {
    type: 'website',
    url: 'https://beforechina.com/destinations',
    title: 'China Travel Routes & Destinations (2026) | BeforeChina',
    description:
      'Browse all China travel routes — day-by-day itineraries across 18 regions with real local tips.',
    images: [
      {
        url: '/images/destinations/golden-triangle-og.webp',
        width: 1200,
        height: 630,
        alt: 'The Forbidden City in Beijing — start of the Golden Triangle route',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China Travel Routes & Destinations (2026) | BeforeChina',
    description: 'Day-by-day itineraries across 18 regions with real local tips, not agency copy.',
    images: ['/images/destinations/golden-triangle-og.webp'],
  },
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

const imageGallerySchema: {
  '@context': string;
  '@type': string;
  name: string;
  image: Array<Record<string, unknown>>;
} = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'China Travel Destinations',
  image: [],
};

type Route = { href: string; label: string; days: string };
type Region = {
  name: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  routes: Route[];
};

const REGIONS: Region[] = [
  {
    name: 'Golden Triangle',
    slug: 'golden-triangle',
    description:
      "The essential first-timer route — Beijing's Forbidden City, Xian's Terracotta Warriors, and Shanghai's futuristic skyline.",
    image: '/images/destinations/golden-triangle.webp',
    imageAlt: 'The Forbidden City palace complex in Beijing at golden hour',
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
    image: '/images/destinations/xinjiang.webp',
    imageAlt: 'Karakul Lake with Muztagh Ata peak reflected in the water, Xinjiang',
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
    image: '/images/destinations/yunnan.webp',
    imageAlt: 'Ancient rooftops of Lijiang old town, Yunnan',
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
    image: '/images/destinations/sichuan.webp',
    imageAlt: 'Turquoise alpine lake in Jiuzhaigou valley, Sichuan',
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
    image: '/images/destinations/guangxi.webp',
    imageAlt: 'Karst peaks along the Li River near Yangshuo, Guangxi',
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
    image: '/images/destinations/guizhou.webp',
    imageAlt: 'Terraced rice fields and wooden Miao village houses, Guizhou',
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
    image: '/images/destinations/yangtze-delta.webp',
    imageAlt: 'Shanghai Pudong skyline at night across the Huangpu River',
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
    image: '/images/destinations/ancient-capitals.webp',
    imageAlt: 'Xian city wall and watchtowers at sunset',
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
    image: '/images/destinations/silk-road.webp',
    imageAlt: 'Camel caravan crossing sand dunes near Dunhuang, Silk Road',
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
    image: '/images/destinations/tibet.webp',
    imageAlt: 'Potala Palace in Lhasa, Tibet, under blue sky',
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
    image: '/images/destinations/dongbei.webp',
    imageAlt: 'Harbin ice sculptures lit at night, Dongbei',
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
    image: '/images/destinations/fujian.webp',
    imageAlt: 'Hakka tulou earthen roundhouses in Fujian',
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
    image: '/images/destinations/south-china.webp',
    imageAlt: 'Hong Kong skyline across Victoria Harbour at night',
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
    image: '/images/destinations/zhangjiajie.webp',
    imageAlt: 'Sandstone pillars of Zhangjiajie rising through mist',
    routes: [
      { href: '/zhangjiajie/avatar-mountains', label: 'Avatar Mountains', days: '3-5 days' },
    ],
  },
  {
    name: 'Huangshan',
    slug: 'huangshan',
    description:
      "China's most painted mountain — granite peaks, ancient pines, hot springs, and Huizhou villages.",
    image: '/images/destinations/huangshan.webp',
    imageAlt: 'Granite peaks and ancient pines of Huangshan, Yellow Mountain',
    routes: [{ href: '/huangshan/yellow-mountain', label: 'Yellow Mountain', days: '3-4 days' }],
  },
  {
    name: 'Shandong',
    slug: 'shandong',
    description: "Tsingtao beer in Qingdao, Confucius' hometown of Qufu, and the sacred Mount Tai.",
    image: '/images/destinations/shandong.webp',
    imageAlt: 'Zhanqiao Pier on the coast of Qingdao, Shandong',
    routes: [
      { href: '/shandong/qingdao-yantai', label: 'Qingdao & Yantai', days: '4-6 days' },
      { href: '/shandong/taishan-qufu', label: 'Mount Tai & Qufu', days: '3-4 days' },
    ],
  },
  {
    name: 'Jiangxi',
    slug: 'jiangxi',
    description: 'Misty Lushan Mountain and the thousand-year-old porcelain kilns of Jingdezhen.',
    image: '/images/destinations/jiangxi.webp',
    imageAlt: 'Misty peaks of Lushan Mountain, Jiangxi',
    routes: [
      { href: '/jiangxi/lushan-jingdezhen', label: 'Lushan & Jingdezhen', days: '4-6 days' },
    ],
  },
  {
    name: 'Yangtze Cruise',
    slug: 'yangtze-cruise',
    description:
      "Cruise through the Three Gorges — the world's largest dam, sheer limestone cliffs, and misty tributaries.",
    image: '/images/destinations/yangtze-cruise.webp',
    imageAlt: 'Yangtze River winding through the Three Gorges',
    routes: [
      {
        href: '/yangtze-cruise/chongqing-yichang-cruise',
        label: 'Chongqing to Yichang Cruise',
        days: '4-5 days',
      },
    ],
  },
];

// Build ImageObject entries for each region for structured data.
imageGallerySchema.image = REGIONS.map((r) => ({
  '@type': 'ImageObject',
  contentUrl: `https://beforechina.com${r.image}`,
  name: r.name,
  description: r.imageAlt,
  width: { '@type': 'QuantitativeValue', value: 800, unitText: 'px' },
  height: { '@type': 'QuantitativeValue', value: 533, unitText: 'px' },
  license: 'https://creativecommons.org/licenses/by-sa/4.0/',
  acquireLicensePage: 'https://beforechina.com/destinations',
}));

export default function DestinationsPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[breadcrumbSchema, imageGallerySchema]} id="destinations-schema" />

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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '32px',
            }}
          >
            {REGIONS.map((region) => (
              <article
                key={region.slug}
                className="article-card"
                style={{ padding: 0, overflow: 'hidden' }}
              >
                <Link
                  href={`/${region.slug}`}
                  style={{
                    display: 'block',
                    position: 'relative',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <Image
                    src={region.image}
                    alt={region.imageAlt}
                    width={800}
                    height={533}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    loading="lazy"
                  />
                </Link>
                <div style={{ padding: '24px' }}>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--accent-color)',
                      fontWeight: 600,
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {region.routes.length} {region.routes.length === 1 ? 'route' : 'routes'}
                  </div>
                  <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>
                    <Link
                      href={`/${region.slug}`}
                      style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
                    >
                      {region.name}
                    </Link>
                  </h2>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                    }}
                  >
                    {region.description}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {region.routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '10px 14px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: 'var(--bg-surface)',
                          color: 'var(--text-primary)',
                          textDecoration: 'none',
                          fontSize: '15px',
                          transition: 'background-color 0.15s',
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
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p
            style={{
              textAlign: 'center',
              color: 'var(--text-muted)',
              fontSize: '13px',
              marginTop: '48px',
            }}
          >
            Photos via Wikimedia Commons under CC BY-SA licenses. Full credits available on each
            route page.
          </p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '800px', margin: '64px auto 0' }}>
        <TourCTA />
        <SignatureCard />
      </div>
    </div>
  );
}
