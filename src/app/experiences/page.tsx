import { Metadata } from 'next';
import Link from 'next/link';
import Kicker from '@/components/Kicker';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'China Travel Experiences | BeforeChina',
  description:
    'Discover China your way — culture and heritage, culinary journeys, nature and wildlife, photography expeditions, and family adventures. Tailor-made journeys for every passion.',
  alternates: { canonical: '/experiences' },
  openGraph: {
    type: 'website',
    url: 'https://beforechina.com/experiences',
    title: 'China Travel Experiences | BeforeChina',
    description: 'Discover China your way — tailor-made journeys for every passion.',
    images: [
      {
        url: '/images/destinations/golden-triangle-og.webp',
        width: 1200,
        height: 630,
        alt: 'China experiences',
      },
    ],
  },
};

interface RouteLink {
  href: string;
  label: string;
  days: string;
  image: string;
  imageAlt: string;
}

interface ExperienceSection {
  id: string;
  title: string;
  description: string;
  routes: RouteLink[];
}

const EXPERIENCES: ExperienceSection[] = [
  {
    id: 'culture',
    title: 'Culture & Heritage',
    description:
      "Walk the Great Wall at sunrise, stand before the Terracotta Warriors, and trace 3,000 years of imperial history through China's ancient capitals. These journeys take you deep into the rituals, architecture, and stories that shaped the Middle Kingdom.",
    routes: [
      {
        href: '/golden-triangle/beijing-xian-shanghai',
        label: "Beijing, Xi'an & Shanghai",
        days: '8–10 days',
        image: '/images/destinations/golden-triangle.webp',
        imageAlt: 'The Forbidden City in Beijing',
      },
      {
        href: '/ancient-capitals/xian-luoyang-kaifeng',
        label: 'Three Ancient Capitals',
        days: '6–8 days',
        image: '/images/destinations/ancient-capitals.webp',
        imageAlt: 'Xian city wall at sunset',
      },
      {
        href: '/ancient-capitals/pingyao-datong-yungang',
        label: 'Pingyao, Datong & Yungang Grottoes',
        days: '5–7 days',
        image: '/images/destinations/ancient-capitals.webp',
        imageAlt: 'Yungang Grottoes',
      },
      {
        href: '/golden-triangle/beijing-in-depth',
        label: 'Beijing In-Depth',
        days: '4–5 days',
        image: '/images/destinations/golden-triangle.webp',
        imageAlt: 'The Forbidden City',
      },
    ],
  },
  {
    id: 'culinary',
    title: 'Culinary Journeys',
    description:
      'From Chengdu street food to dim sum in Hong Kong — taste China through its eight great regional cuisines. These journeys are built around markets, family-run kitchens, and the belief that the best way to understand a place is through its food.',
    routes: [
      {
        href: '/sichuan/chengdu-in-depth',
        label: 'Chengdu In-Depth',
        days: '3–4 days',
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Chengdu street food',
      },
      {
        href: '/sichuan/chongqing-wulong-dazu',
        label: 'Chongqing, Wulong & Dazu',
        days: '4–6 days',
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Chongqing hotpot',
      },
      {
        href: '/south-china/guangzhou-shenzhen',
        label: 'Guangzhou & Shenzhen',
        days: '4–6 days',
        image: '/images/destinations/south-china.webp',
        imageAlt: 'Cantonese dim sum',
      },
      {
        href: '/golden-triangle/xian-in-depth',
        label: "Xi'an In-Depth",
        days: '3–4 days',
        image: '/images/destinations/ancient-capitals.webp',
        imageAlt: "Xi'an Muslim Quarter food",
      },
    ],
  },
  {
    id: 'nature',
    title: 'Nature & Wildlife',
    description:
      "Hike through the Avatar mountains of Zhangjiajie, cruise the Li River through karst peaks, and track wildlife on the Tibetan plateau. These journeys are for those who want to see China's landscapes at their most raw and magnificent.",
    routes: [
      {
        href: '/zhangjiajie/avatar-mountains',
        label: 'Zhangjiajie: Avatar Mountains',
        days: '3–5 days',
        image: '/images/destinations/zhangjiajie.webp',
        imageAlt: 'Zhangjiajie sandstone pillars',
      },
      {
        href: '/sichuan/chengdu-jiuzhaigou-huanglong',
        label: 'Chengdu & Jiuzhaigou',
        days: '6–8 days',
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Jiuzhaigou turquoise lakes',
      },
      {
        href: '/guangxi/guilin-yangshuo-lijiang',
        label: 'Guilin & Yangshuo: Li River',
        days: '4–6 days',
        image: '/images/destinations/guangxi.webp',
        imageAlt: 'Li River karst peaks',
      },
      {
        href: '/yunnan/lijiang-lugu-lake-tiger-leaping-gorge',
        label: 'Tiger Leaping Gorge & Lugu Lake',
        days: '7–9 days',
        image: '/images/destinations/yunnan.webp',
        imageAlt: 'Tiger Leaping Gorge',
      },
    ],
  },
  {
    id: 'photography',
    title: 'Photography Expeditions',
    description:
      'Capture the golden light over the Li River karsts, the rainbow mountains of Zhangye, and the misty peaks of Huangshan. These journeys are timed for the best light and designed for photographers who want to bring home more than memories.',
    routes: [
      {
        href: '/xinjiang/silk-road',
        label: 'Silk Road: Urumqi to Kashgar',
        days: '7–10 days',
        image: '/images/destinations/silk-road.webp',
        imageAlt: 'Silk Road landscapes',
      },
      {
        href: '/tibet/lhasa-shigatse-everest',
        label: 'Lhasa to Everest Base Camp',
        days: '8–10 days',
        image: '/images/destinations/tibet.webp',
        imageAlt: 'Potala Palace in Lhasa',
      },
      {
        href: '/yunnan/kunming-dongchuan-yuanyang',
        label: 'Kunming, Dongchuan & Yuanyang Rice Terraces',
        days: '5–7 days',
        image: '/images/destinations/yunnan.webp',
        imageAlt: 'Yuanyang rice terraces',
      },
      {
        href: '/guangxi/guilin-longji-xingping',
        label: 'Guilin, Longji Terraces & Xingping',
        days: '5–7 days',
        image: '/images/destinations/guangxi.webp',
        imageAlt: 'Longji rice terraces',
      },
    ],
  },
  {
    id: 'family',
    title: 'Family Adventures',
    description:
      'Hold a baby panda in Chengdu, cycle atop the Xian city wall, and watch a shadow puppet show in a Beijing hutong. These journeys are designed for families — paced for curious kids and relaxed parents, with hands-on experiences at every stop.',
    routes: [
      {
        href: '/golden-triangle/beijing-xian-shanghai',
        label: "Beijing, Xi'an & Shanghai",
        days: '8–10 days',
        image: '/images/destinations/golden-triangle.webp',
        imageAlt: 'The Forbidden City',
      },
      {
        href: '/sichuan/chengdu-jiuzhaigou-huanglong',
        label: 'Chengdu & Jiuzhaigou',
        days: '6–8 days',
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Giant panda in Chengdu',
      },
      {
        href: '/south-china/sanya-hainan',
        label: 'Sanya & Hainan',
        days: '4–6 days',
        image: '/images/destinations/south-china.webp',
        imageAlt: 'Tropical beach in Hainan',
      },
      {
        href: '/yangtze-delta/shanghai-hangzhou-suzhou',
        label: 'Shanghai, Hangzhou & Suzhou',
        days: '6–8 days',
        image: '/images/destinations/yangtze-delta.webp',
        imageAlt: 'Shanghai skyline',
      },
    ],
  },
];

export default function ExperiencesPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Hero */}
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Experiences</Kicker>
          <h1>China by Experience</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            However you like to explore, we design the journey around your passion. Every itinerary
            is built from scratch.
          </p>
        </div>
      </section>

      {/* Experience Sections */}
      {EXPERIENCES.map((exp, idx) => (
        <section
          key={exp.id}
          id={exp.id}
          style={{
            padding: 'var(--section-gap-sm) 0',
            backgroundColor: idx % 2 === 1 ? 'var(--bg-surface)' : 'transparent',
          }}
        >
          <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
            <div style={{ marginBottom: '36px', maxWidth: '650px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(24px, 3.5vw, 34px)',
                  fontWeight: 500,
                  marginBottom: '12px',
                }}
              >
                {exp.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7 }}>
                {exp.description}
              </p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '24px',
              }}
            >
              {exp.routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="editorial-card"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  <img
                    src={route.image}
                    alt={route.imageAlt}
                    width={800}
                    height={533}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '3/2',
                      objectFit: 'cover',
                      display: 'block',
                      marginBottom: '14px',
                    }}
                  />
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--accent-color)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '6px',
                    }}
                  >
                    {route.days}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '18px',
                      fontWeight: 500,
                      lineHeight: 1.25,
                    }}
                  >
                    {route.label}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <EnquiryForm />
    </div>
  );
}
