import Link from 'next/link';

interface RegionGroup {
  name: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  routes: { href: string; label: string }[];
}

const REGIONS: RegionGroup[] = [
  {
    name: 'Northern China',
    description: 'Imperial capitals, the Great Wall, and the vast grasslands of Inner Mongolia.',
    href: '/destinations',
    image: '/images/destinations/golden-triangle.webp',
    imageAlt: 'The Forbidden City in Beijing',
    routes: [
      { href: '/golden-triangle/beijing-xian-shanghai', label: 'Golden Triangle' },
      { href: '/dongbei/harbin-snow-town', label: 'Harbin & Snow Town' },
      { href: '/ancient-capitals/pingyao-datong-yungang', label: 'Pingyao & Datong' },
    ],
  },
  {
    name: 'Eastern China',
    description: "Water towns, classical gardens, tea mountains, and Shanghai's skyline.",
    href: '/destinations',
    image: '/images/destinations/yangtze-delta.webp',
    imageAlt: 'Shanghai Pudong skyline',
    routes: [
      { href: '/yangtze-delta/shanghai-hangzhou-suzhou', label: 'Shanghai, Hangzhou & Suzhou' },
      { href: '/huangshan/yellow-mountain', label: 'Huangshan' },
      { href: '/shandong/qingdao-yantai', label: 'Qingdao & Yantai' },
    ],
  },
  {
    name: 'Southern China',
    description: 'Karst peaks, terraced rice fields, tropical Hainan, and Cantonese cuisine.',
    href: '/destinations',
    image: '/images/destinations/guangxi.webp',
    imageAlt: 'Karst peaks along the Li River',
    routes: [
      { href: '/guangxi/guilin-yangshuo-lijiang', label: 'Guilin & Yangshuo' },
      { href: '/fujian/xiamen-tulou-quanzhou', label: 'Fujian Tulou' },
      { href: '/south-china/hong-kong-macau', label: 'Hong Kong & Macau' },
    ],
  },
  {
    name: 'Western China',
    description: 'The Silk Road, rainbow mountains, alpine lakes, and the roof of the world.',
    href: '/destinations',
    image: '/images/destinations/xinjiang.webp',
    imageAlt: 'Karakul Lake in Xinjiang',
    routes: [
      { href: '/xinjiang/silk-road', label: 'Silk Road' },
      { href: '/tibet/lhasa-shigatse-everest', label: 'Tibet' },
      { href: '/sichuan/chengdu-jiuzhaigou-huanglong', label: 'Sichuan & Jiuzhaigou' },
    ],
  },
  {
    name: 'Central China',
    description: 'The Avatar mountains, the Yangtze River, and ancient capitals lost in time.',
    href: '/destinations',
    image: '/images/destinations/zhangjiajie.webp',
    imageAlt: 'Zhangjiajie sandstone pillars',
    routes: [
      { href: '/zhangjiajie/avatar-mountains', label: 'Zhangjiajie' },
      { href: '/yangtze-cruise/chongqing-yichang-cruise', label: 'Yangtze Cruise' },
      { href: '/ancient-capitals/xian-luoyang-kaifeng', label: 'Three Ancient Capitals' },
    ],
  },
];

export default function DestinationMap() {
  return (
    <section style={{ padding: 'var(--section-gap-md) 0' }}>
      <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 500,
              marginBottom: '12px',
            }}
          >
            Explore China by Region
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '17px',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            From the Great Wall in the north to the karst peaks in the south — every region tells a
            different story.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {REGIONS.map((region) => (
            <div key={region.name} className="editorial-card">
              <Link
                href={region.href}
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
              >
                <img
                  src={region.image}
                  alt={region.imageAlt}
                  width={800}
                  height={533}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '3/2',
                    objectFit: 'cover',
                    display: 'block',
                    marginBottom: '18px',
                  }}
                />
              </Link>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  fontWeight: 500,
                  marginBottom: '8px',
                }}
              >
                <Link
                  href={region.href}
                  style={{ color: 'var(--text-primary)', textDecoration: 'none' }}
                >
                  {region.name}
                </Link>
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '15px',
                  lineHeight: 1.5,
                  marginBottom: '14px',
                }}
              >
                {region.description}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {region.routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-link"
                    style={{ fontSize: '14px' }}
                  >
                    {route.label} &rarr;
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
