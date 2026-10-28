import { Metadata } from 'next';
import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';
import WhyUs from '@/components/WhyUs';
import FeaturedJourneys from '@/components/FeaturedJourneys';
import ExperienceGrid from '@/components/ExperienceGrid';
import JournalCard from '@/components/JournalCard';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'BeforeChina — Tailor-Made Journeys & China Field Intelligence',
  description:
    'Private tailor-made journeys, 2026 hospital & dental tariff benchmarks, and independent pre-trip tools crafted by UK & China specialists.',
  openGraph: {
    type: 'website',
    url: 'https://beforechina.com',
    title: 'BeforeChina — Tailor-Made Journeys & China Field Intelligence',
    description:
      'Private tailor-made journeys and independent field benchmarks crafted by specialists who know every path, every story, every season.',
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

const homeSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BeforeChina',
    url: 'https://beforechina.com',
    description:
      'Independent travel toolkit, hospital price benchmarks, and tailor-made route guides for visiting China.',
    publisher: {
      '@type': 'Organization',
      name: 'BeforeChina',
      url: 'https://beforechina.com',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'BeforeChina',
    url: 'https://beforechina.com',
    image: 'https://beforechina.com/images/destinations/golden-triangle-og.webp',
    description:
      'Bespoke private journeys and pre-trip research crafted by UK-based China specialists.',
    priceRange: '$$$',
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'European Union' },
    ],
  },
];

const HERO_SLIDES = [
  {
    image: '/images/destinations/huangshan.webp',
    imageAlt: 'Granite peaks and ancient pines of Huangshan emerging from morning mist',
    kicker: 'PRIVATE ROUTE ATELIER & FIELD INTELLIGENCE',
    title: 'China, Beyond the Postcard',
    subtitle:
      'Tailor-made private itineraries, verified hospital & dental benchmarks, and unvarnished pre-trip briefings from our London and Shanghai desk.',
    ctaText: 'Explore the Route Atlas',
    ctaHref: '/destinations',
  },
  {
    image: '/images/destinations/guangxi.webp',
    imageAlt: 'Karst peaks along the Li River near Yangshuo',
    kicker: 'SOUTHERN KARSTS · GUILIN & YANGSHUO',
    title: 'Where the Landscape Becomes Legend',
    subtitle: 'Drift through the limestone peaks of the Li River at dawn, far from the tour boats.',
    ctaText: 'Inspect Guilin Route',
    ctaHref: '/guangxi/guilin-yangshuo-lijiang',
  },
  {
    image: '/images/destinations/tibet.webp',
    imageAlt: 'Potala Palace in Lhasa, Tibet',
    kicker: 'HIGH PLATEAU · LHASA TO EVEREST',
    title: 'The Roof of the World Awaits',
    subtitle:
      'Full Tibet Entry Permit handling, private 4x4 acclimatisation pacing, and monastery access.',
    ctaText: 'Explore Tibet Dossier',
    ctaHref: '/tibet/lhasa-shigatse-everest',
  },
  {
    image: '/images/destinations/xinjiang.webp',
    imageAlt: 'Karakul Lake with Muztagh Ata peak, Xinjiang',
    kicker: 'FRONTIER EXPEDITIONS · KASHGAR TO DUNHUANG',
    title: 'The Silk Road, Reimagined',
    subtitle:
      'From the Sunday livestock bazaar in Kashgar to the Buddhist grottoes of Dunhuang — overland by private vehicle and high-speed rail.',
    ctaText: 'Journey the Silk Road',
    ctaHref: '/xinjiang/silk-road',
  },
  {
    image: '/images/destinations/zhangjiajie.webp',
    imageAlt: 'Sandstone pillars of Zhangjiajie rising through mist',
    kicker: 'HUNAN HIGHLANDS · WULINGYUAN',
    title: 'Walk Among the Clouds',
    subtitle:
      'Three thousand quartz-sandstone pillars rising through the morning inversion — timed to avoid domestic crowd peaks.',
    ctaText: 'See Zhangjiajie Route',
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
      "The essential first-timer's blueprint — three defining capitals linked by 350 km/h Fuxing high-speed rail.",
    days: '08–10 DAYS · RAIL',
  },
  {
    href: '/yangtze-delta/shanghai-hangzhou-suzhou',
    image: '/images/destinations/yangtze-delta.webp',
    imageAlt: 'Shanghai Pudong skyline',
    title: 'Shanghai, Hangzhou & Suzhou',
    subtitle:
      'Scholar gardens, Longjing tea terraces, and canal towns — plus optional half-day Shanghai executive health screening.',
    days: '06–08 DAYS · JIANGNAN',
  },
  {
    href: '/ancient-capitals/xian-luoyang-kaifeng',
    image: '/images/destinations/ancient-capitals.webp',
    imageAlt: 'Xian city wall at sunset',
    title: 'Three Ancient Capitals',
    subtitle:
      'Trace 3,000 years of dynastic history across Xian, the Longmen Grottoes of Luoyang, and Song-era Kaifeng.',
    days: '06–08 DAYS · HERITAGE',
  },
];

const NATURE_JOURNEYS = [
  {
    href: '/guangxi/guilin-yangshuo-lijiang',
    image: '/images/destinations/guangxi.webp',
    imageAlt: 'Karst peaks along the Li River',
    title: 'Guilin & Yangshuo: The Li River',
    subtitle:
      'Limestone karst valleys, bamboo rafting on the Yulong tributary, and quiet countryside guesthouses.',
    days: '04–06 DAYS · KARST',
  },
  {
    href: '/zhangjiajie/avatar-mountains',
    image: '/images/destinations/zhangjiajie.webp',
    imageAlt: 'Zhangjiajie sandstone pillars',
    title: 'Zhangjiajie: The Avatar Mountains',
    subtitle:
      'Private back-trail ascents into Wulingyuan and Tianmen Mountain away from megaphone tour groups.',
    days: '03–05 DAYS · PEAKS',
  },
  {
    href: '/sichuan/chengdu-jiuzhaigou-huanglong',
    image: '/images/destinations/sichuan.webp',
    imageAlt: 'Turquoise lake in Jiuzhaigou valley',
    title: 'Chengdu & Jiuzhaigou Valley',
    subtitle:
      'Morning panda conservation access, back-alley Sichuan gastronomy, and turquoise travertine lakes.',
    days: '06–08 DAYS · ALPINE',
  },
  {
    href: '/yunnan/lijiang-lugu-lake-tiger-leaping-gorge',
    image: '/images/destinations/yunnan.webp',
    imageAlt: 'Lijiang old town rooftops',
    title: 'Tiger Leaping Gorge & Lugu Lake',
    subtitle:
      'High-ridge trekking above the Jinsha River paired with tranquil Mosuo lakeside villages.',
    days: '07–09 DAYS · TREK',
  },
];

const ADVENTURE_JOURNEYS = [
  {
    href: '/xinjiang/silk-road',
    image: '/images/destinations/silk-road.webp',
    imageAlt: 'Camel caravan in Dunhuang dunes',
    title: 'Silk Road: Urumqi to Kashgar',
    subtitle:
      'Desert fortresses, Karakul Lake along the Karakoram Highway, and the old mud-brick quarter of Kashgar.',
    days: '07–10 DAYS · FRONTIER',
  },
  {
    href: '/tibet/lhasa-shigatse-everest',
    image: '/images/destinations/tibet.webp',
    imageAlt: 'Potala Palace in Lhasa',
    title: 'Lhasa to Everest Base Camp',
    subtitle:
      'Potala Palace, Yamdrok turquoise lake, Tashilhunpo Monastery, and Rongbuk at 5,150 metres.',
    days: '08–10 DAYS · PLATEAU',
  },
  {
    href: '/yunnan/kunming-dali-lijiang-shangri-la',
    image: '/images/destinations/guizhou.webp',
    imageAlt: 'Mountain terraces and wooden villages of Southwest China',
    title: 'Yunnan: The Tea-Horse Trail to Shangri-La',
    subtitle:
      'Bai courtyard architecture in Dali, Shaxi market square, and Tibetan monasteries in Zhongdian.',
    days: '08–10 DAYS · OVERLAND',
  },
];

const JOURNAL_ENTRIES = [
  {
    href: '/journal/great-wall-secrets',
    image: '/images/destinations/jiangxi.webp',
    imageAlt: 'Misty mountain ridges at dawn',
    title: 'What Nobody Tells You About the Great Wall',
    excerpt:
      'Skip Badaling. Here is where our field researchers find wild, unrestored Ming-dynasty stonework — and why 5:30 AM is the only hour to go.',
    date: 'JULY 2026',
    category: 'FIELD DISPATCH',
  },
  {
    href: '/journal/chengdu-street-food',
    image: '/images/destinations/sichuan.webp',
    imageAlt: 'Sichuan landscape and culinary heritage',
    title: 'Eating Your Way Through Chengdu: A Street Food Diary',
    excerpt:
      'From sweet-water noodles at dawn to牛油 (tallow) ma-la hotpot at midnight — 72 hours of unvarnished Sichuan flavour.',
    date: 'JUNE 2026',
    category: 'GASTRONOMY',
  },
  {
    href: '/journal/photographing-li-river',
    image: '/images/destinations/guangxi.webp',
    imageAlt: 'Li River at dawn with a cormorant fisherman',
    title: "Chasing Light: A Photographer's Guide to the Li River",
    excerpt:
      'Exact GPS viewpoints, seasonal mist tables, and lens recommendations for Yangshuo and Xingping.',
    date: 'MAY 2026',
    category: 'PHOTOGRAPHY',
  },
];

export default function Home() {
  return (
    <div>
      <JsonLd data={homeSchemas} id="home-schema" />

      {/* 1. Editorial Cover Carousel + Quick Dispatch Bar */}
      <HeroCarousel slides={HERO_SLIDES} />

      {/* 2. The BeforeChina Briefing — 4-Column Numbered Hairline Grid */}
      <WhyUs />

      {/* 3. High-Contrast Carbon-Ink Feature: 2026 Healthcare, Dental & Optical Benchmarks */}
      <section
        style={{
          padding: '76px 0',
          backgroundColor: 'var(--bg-ink)',
          color: 'var(--text-on-ink)',
          borderTop: '2px solid var(--primary-color)',
          borderBottom: '1px solid var(--border-color)',
        }}
      >
        <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '20px',
              paddingBottom: '28px',
              marginBottom: '36px',
              borderBottom: '1px solid rgba(246, 244, 239, 0.15)',
            }}
          >
            <div style={{ maxWidth: '720px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: '#e6c27a',
                  marginBottom: '10px',
                }}
              >
                SPECIAL DOSSIER · 2026 INDEPENDENT HOSPITAL &amp; CLINIC AUDITS
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(26px, 3.6vw, 40px)',
                  fontWeight: 400,
                  color: 'var(--text-on-ink)',
                  margin: '0 0 10px 0',
                  lineHeight: 1.15,
                }}
              >
                Inbound Healthcare, Dental &amp; Optical: Published Chinese Tariffs vs Western Cash
                Prices
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-quote)',
                  fontSize: '18px',
                  color: 'var(--text-on-ink-muted)',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Zero public hospital referral kickbacks. Audited directly against Shanghai &amp;
                Shenzhen Tier-3 Hospital International Departments and national VBP procurement
                caps.
              </p>
            </div>
            <Link
              href="/health"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                backgroundColor: '#f6f4ef',
                color: '#141413',
                padding: '13px 22px',
                borderRadius: '2px',
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              Launch Cost Calculator &rarr;
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Dossier Card 01 */}
            <Link
              href="/health/health-check"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                backgroundColor: 'var(--bg-ink-elevated)',
                border: '1px solid rgba(246, 244, 239, 0.14)',
                borderTop: '2px solid #e6c27a',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: '#e6c27a',
                  marginBottom: '14px',
                  letterSpacing: '0.05em',
                }}
              >
                <span>01 / PREVENTIVE IMAGING</span>
                <span>SHANGHAI · 3.5 HRS</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#88d4ab',
                  marginBottom: '10px',
                }}
              >
                $280–$680 IN CHINA · (VS $2,400+ US)
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  color: 'var(--text-on-ink)',
                  marginBottom: '10px',
                  lineHeight: 1.25,
                }}
              >
                Executive Health Checkup &amp; 3.0T MRI
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-on-ink-muted)',
                  lineHeight: 1.6,
                  marginBottom: '18px',
                  flexGrow: 1,
                }}
              >
                How foreign visitors book bilingual International Medical Departments at Huashan,
                Ruijin, or Jiahui Health with zero waitlist and English diagnostic summaries.
              </p>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#f6f4ef',
                }}
              >
                Read Hospital Guide &rarr;
              </span>
            </Link>

            {/* Dossier Card 02 */}
            <Link
              href="/health/dental-china-vs-turkey-uk"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                backgroundColor: 'var(--bg-ink-elevated)',
                border: '1px solid rgba(246, 244, 239, 0.14)',
                borderTop: '2px solid #e6c27a',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: '#e6c27a',
                  marginBottom: '14px',
                  letterSpacing: '0.05em',
                }}
              >
                <span>02 / RESTORATIVE DENTAL</span>
                <span>VBP REGULATED</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#88d4ab',
                  marginBottom: '10px',
                }}
              >
                ~$920 STRAUMANN · (VS £2,800 UK / $4,200 US)
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  color: 'var(--text-on-ink)',
                  marginBottom: '10px',
                  lineHeight: 1.25,
                }}
              >
                Dental Implants: China vs Turkey, Hungary &amp; UK
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-on-ink-muted)',
                  lineHeight: 1.6,
                  marginBottom: '18px',
                  flexGrow: 1,
                }}
              >
                Why China&apos;s national Volume-Based Procurement slashed Swiss Straumann &amp;
                Nobel Biocare hardware prices by 60% — and which treatments require two visits.
              </p>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#f6f4ef',
                }}
              >
                Compare Global Tariffs &rarr;
              </span>
            </Link>

            {/* Dossier Card 03 */}
            <Link
              href="/health/glasses"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                backgroundColor: 'var(--bg-ink-elevated)',
                border: '1px solid rgba(246, 244, 239, 0.14)',
                borderTop: '2px solid #e6c27a',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: '#e6c27a',
                  marginBottom: '14px',
                  letterSpacing: '0.05em',
                }}
              >
                <span>03 / OPTICAL &amp; TCM</span>
                <span>SAME-DAY TURNAROUND</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#88d4ab',
                  marginBottom: '10px',
                }}
              >
                $35–$95 HIGH-INDEX · 60-MIN PICKUP
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  color: 'var(--text-on-ink)',
                  marginBottom: '10px',
                  lineHeight: 1.25,
                }}
              >
                Optical Markets &amp; Clinical TCM Therapy
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-on-ink-muted)',
                  lineHeight: 1.6,
                  marginBottom: '18px',
                  flexGrow: 1,
                }}
              >
                Verified bargaining floors at Shanghai International Glasses City &amp; Beijing
                Panjiayuan, plus licensed hospital Tuina and heritage apothecaries.
              </p>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#f6f4ef',
                }}
              >
                Inspect Optical &amp; TCM Brief &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Interactive Tabbed Route Atlas (Replaces 3 Repetitive Stacked Grids) */}
      <FeaturedJourneys
        firstTime={FIRST_TIME_JOURNEYS}
        nature={NATURE_JOURNEYS}
        adventure={ADVENTURE_JOURNEYS}
      />

      {/* 5. Horizontal Thematic Directory */}
      <ExperienceGrid />

      {/* 6. Journal / Field Dispatches — Asymmetric Two-Column Magazine Spread */}
      <section style={{ padding: 'var(--section-gap-md) 0' }}>
        <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '20px',
              paddingBottom: '24px',
              marginBottom: '40px',
              borderBottom: '2px solid var(--text-primary)',
            }}
          >
            <div>
              <div className="kicker">Field Notes &amp; Dispatches</div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(28px, 3.8vw, 40px)',
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                Stories &amp; Practical Briefings from China
              </h2>
            </div>
            <Link href="/journal" className="text-link">
              All Field Dispatches &rarr;
            </Link>
          </div>

          <div className="journal-editorial-spread">
            {/* Left Column: Featured Lead Essay */}
            <div>
              <JournalCard entry={JOURNAL_ENTRIES[0]} variant="featured" />
            </div>

            {/* Right Column: Secondary Dispatches + Pre-Trip Toolkit Index */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <JournalCard entry={JOURNAL_ENTRIES[1]} variant="standard" />
              <JournalCard entry={JOURNAL_ENTRIES[2]} variant="standard" />

              {/* Compact Pre-Trip Toolkit Dossier Card */}
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-color)',
                  borderTop: '2px solid var(--text-primary)',
                  padding: '24px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--primary-color)',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  ESSENTIAL PRE-TRIP TOOLKIT · 2026
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    marginBottom: '12px',
                  }}
                >
                  Solve the Digital &amp; Entry Hurdles Before Departure
                </h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                  }}
                >
                  <Link
                    href="/visa"
                    style={{
                      padding: '8px 10px',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-color)',
                    }}
                  >
                    01 / Visa-Free Rules &rarr;
                  </Link>
                  <Link
                    href="/payment"
                    style={{
                      padding: '8px 10px',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-color)',
                    }}
                  >
                    02 / Alipay Setup &rarr;
                  </Link>
                  <Link
                    href="/vpn"
                    style={{
                      padding: '8px 10px',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-color)',
                    }}
                  >
                    03 / Firewall &amp; VPNs &rarr;
                  </Link>
                  <Link
                    href="/esim"
                    style={{
                      padding: '8px 10px',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-color)',
                    }}
                  >
                    04 / China eSIMs &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Enquiry Form CTA */}
      <EnquiryForm />
    </div>
  );
}
