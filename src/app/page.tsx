import { Metadata } from 'next';
import HeroCarousel from '@/components/HeroCarousel';
import WhyUs from '@/components/WhyUs';
import FeaturedJourneys from '@/components/FeaturedJourneys';
import ExperienceGrid from '@/components/ExperienceGrid';
import JournalCard from '@/components/JournalCard';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'BeforeChina — Tailor-Made Journeys to China',
  description:
    'Private tailor-made journeys to China crafted by China specialists. From the Great Wall to the Silk Road, every itinerary is built around you.',
  openGraph: {
    type: 'website',
    url: 'https://beforechina.com',
    title: 'BeforeChina — Tailor-Made Journeys to China',
    description:
      'Private tailor-made journeys to China crafted by China specialists who know every path, every story, every season.',
    images: [
      {
        url: '/images/destinations/golden-triangle-og.webp',
        width: 1200,
        height: 630,
        alt: 'BeforeChina — Tailor-Made Journeys to China',
      },
    ],
  },
};

const HERO_SLIDES = [
  {
    image: '/images/destinations/golden-triangle.webp',
    imageAlt: 'The Forbidden City in Beijing at golden hour',
    title: 'China, Beyond the Postcard',
    subtitle:
      'Private journeys crafted by specialists who know every path, every story, every season.',
    ctaText: 'Explore Our Journeys',
    ctaHref: '/destinations',
  },
  {
    image: '/images/destinations/guangxi.webp',
    imageAlt: 'Karst peaks along the Li River near Yangshuo',
    title: 'Where the Landscape Becomes Legend',
    subtitle: 'Drift through the karst peaks of Guilin at dawn, when the river mirrors the sky.',
    ctaText: 'Discover Guilin',
    ctaHref: '/guangxi/guilin-yangshuo-lijiang',
  },
  {
    image: '/images/destinations/tibet.webp',
    imageAlt: 'Potala Palace in Lhasa, Tibet',
    title: 'The Roof of the World Awaits',
    subtitle: 'Stand before the Potala Palace and feel the silence of the Tibetan plateau.',
    ctaText: 'Explore Tibet',
    ctaHref: '/tibet/lhasa-shigatse-everest',
  },
  {
    image: '/images/destinations/xinjiang.webp',
    imageAlt: 'Karakul Lake with Muztagh Ata peak, Xinjiang',
    title: 'The Silk Road, Reimagined',
    subtitle:
      'From the Sunday bazaar in Kashgar to the rainbow mountains of Zhangye — the ancient trade route, your way.',
    ctaText: 'Journey the Silk Road',
    ctaHref: '/xinjiang/silk-road',
  },
  {
    image: '/images/destinations/zhangjiajie.webp',
    imageAlt: 'Sandstone pillars of Zhangjiajie rising through mist',
    title: 'Walk Among the Clouds',
    subtitle:
      'Three thousand sandstone pillars rise through the mist — a landscape that inspired another world.',
    ctaText: 'See Zhangjiajie',
    ctaHref: '/zhangjiajie/avatar-mountains',
  },
];

const FIRST_TIME_JOURNEYS = [
  {
    href: '/golden-triangle/beijing-xian-shanghai',
    image: '/images/destinations/golden-triangle.webp',
    imageAlt: 'The Forbidden City in Beijing',
    title: 'Beijing, Xian & Shanghai',
    subtitle:
      "The essential first-timer's route — three iconic cities connected by high-speed rail.",
    days: '8–10 days',
  },
  {
    href: '/yangtze-delta/shanghai-hangzhou-suzhou',
    image: '/images/destinations/yangtze-delta.webp',
    imageAlt: 'Shanghai Pudong skyline',
    title: 'Shanghai, Hangzhou & Suzhou',
    subtitle: 'Water towns, classical gardens, and the West Lake — the elegant side of China.',
    days: '6–8 days',
  },
  {
    href: '/ancient-capitals/xian-luoyang-kaifeng',
    image: '/images/destinations/ancient-capitals.webp',
    imageAlt: 'Xian city wall at sunset',
    title: 'Three Ancient Capitals',
    subtitle: 'Walk through 3,000 years of imperial history — Xian, Luoyang, and Kaifeng.',
    days: '6–8 days',
  },
];

const NATURE_JOURNEYS = [
  {
    href: '/guangxi/guilin-yangshuo-lijiang',
    image: '/images/destinations/guangxi.webp',
    imageAlt: 'Karst peaks along the Li River',
    title: 'Guilin & Yangshuo: The Li River',
    subtitle: 'The 20 RMB note landscape — drift between karst peaks at dawn.',
    days: '4–6 days',
  },
  {
    href: '/zhangjiajie/avatar-mountains',
    image: '/images/destinations/zhangjiajie.webp',
    imageAlt: 'Zhangjiajie sandstone pillars',
    title: 'Zhangjiajie: The Avatar Mountains',
    subtitle: 'Three thousand sandstone pillars rising through the morning mist.',
    days: '3–5 days',
  },
  {
    href: '/sichuan/chengdu-jiuzhaigou-huanglong',
    image: '/images/destinations/sichuan.webp',
    imageAlt: 'Turquoise lake in Jiuzhaigou valley',
    title: 'Chengdu & Jiuzhaigou',
    subtitle: 'Pandas, hotpot, and the turquoise alpine lakes of Jiuzhaigou.',
    days: '6–8 days',
  },
  {
    href: '/yunnan/lijiang-lugu-lake-tiger-leaping-gorge',
    image: '/images/destinations/yunnan.webp',
    imageAlt: 'Lijiang old town rooftops',
    title: 'Tiger Leaping Gorge & Lugu Lake',
    subtitle: "One of the world's deepest gorges and a pristine alpine lake.",
    days: '7–9 days',
  },
];

const ADVENTURE_JOURNEYS = [
  {
    href: '/xinjiang/silk-road',
    image: '/images/destinations/silk-road.webp',
    imageAlt: 'Camel caravan in Dunhuang dunes',
    title: 'Silk Road: Urumqi to Kashgar',
    subtitle: 'Rainbow mountains, desert fortresses, and the legendary Sunday bazaar.',
    days: '7–10 days',
  },
  {
    href: '/tibet/lhasa-shigatse-everest',
    image: '/images/destinations/tibet.webp',
    imageAlt: 'Potala Palace in Lhasa',
    title: 'Lhasa to Everest Base Camp',
    subtitle: 'Potala Palace, turquoise lakes, and Base Camp at 5,150 metres.',
    days: '8–10 days',
  },
  {
    href: '/yunnan/kunming-dali-lijiang-shangri-la',
    image: '/images/destinations/yunnan.webp',
    imageAlt: 'Shangri-La old town',
    title: 'Yunnan: The Shangri-La Trail',
    subtitle: 'Ancient towns, Tibetan foothills, and the road to Shangri-La.',
    days: '8–10 days',
  },
];

const JOURNAL_ENTRIES = [
  {
    href: '/journal/great-wall-secrets',
    image: '/images/destinations/golden-triangle.webp',
    imageAlt: 'The Great Wall winding through mountains',
    title: 'What Nobody Tells You About the Great Wall',
    excerpt:
      'Skip Badaling. Here is where to find the wild, unrestored sections — and why sunrise is the only time to go.',
    date: 'July 2026',
    category: 'Culture',
  },
  {
    href: '/journal/chengdu-street-food',
    image: '/images/destinations/sichuan.webp',
    imageAlt: 'Street food stall in Chengdu',
    title: 'Eating Your Way Through Chengdu: A Street Food Diary',
    excerpt:
      'From dan dan noodles at dawn to ma la hotpot at midnight — three days of pure Sichuan flavour.',
    date: 'June 2026',
    category: 'Food',
  },
  {
    href: '/journal/photographing-li-river',
    image: '/images/destinations/guangxi.webp',
    imageAlt: 'Li River at dawn with a cormorant fisherman',
    title: "Chasing Light: A Photographer's Guide to the Li River",
    excerpt: 'The exact spots, times, and seasons to capture the Li River at its most magical.',
    date: 'May 2026',
    category: 'Photography',
  },
];

export default function Home() {
  return (
    <div>
      {/* 1. Hero Carousel */}
      <HeroCarousel slides={HERO_SLIDES} />

      {/* 2. Why Us */}
      <WhyUs />

      {/* 3. Featured Journeys — three audience-segmented sections */}
      <div style={{ backgroundColor: 'var(--bg-surface)' }}>
        <FeaturedJourneys
          title="For First-Time Visitors"
          subtitle="The classic routes that reveal China at its most magnificent."
          journeys={FIRST_TIME_JOURNEYS}
        />
      </div>
      <FeaturedJourneys
        title="For Nature Lovers"
        subtitle="From karst peaks to alpine lakes — China's landscapes will rewrite your sense of scale."
        journeys={NATURE_JOURNEYS}
      />
      <div style={{ backgroundColor: 'var(--bg-surface)' }}>
        <FeaturedJourneys
          title="For the Adventurous"
          subtitle="The Silk Road, the Tibetan plateau, and the road to Shangri-La."
          journeys={ADVENTURE_JOURNEYS}
        />
      </div>

      {/* 4. Experience Types */}
      <ExperienceGrid />

      {/* 5. Journal / Stories */}
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
              Stories from China
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '17px',
                maxWidth: '500px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Travel stories, local knowledge, and photography guides from our specialists on the
              ground.
            </p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <JournalCard entry={JOURNAL_ENTRIES[0]} variant="featured" />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '24px',
            }}
          >
            <JournalCard entry={JOURNAL_ENTRIES[1]} variant="standard" />
            <JournalCard entry={JOURNAL_ENTRIES[2]} variant="standard" />
          </div>
        </div>
      </section>

      {/* 6. Enquiry Form CTA */}
      <EnquiryForm />
    </div>
  );
}
