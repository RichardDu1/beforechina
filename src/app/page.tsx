import { Metadata } from 'next';
import Link from 'next/link';
import Kicker from '@/components/Kicker';
import TourCTA from '@/components/TourCTA';
import SignatureCard from '@/components/SignatureCard';

export const metadata: Metadata = {
  title: 'BeforeChina | The Ultimate China Travel Guide & Toolkit (2026)',
  description:
    'A no-bs China travel guide created by a UK-based Chinese local. Learn how to survive the Great Firewall, set up Alipay, and navigate visa-free entry.',
};

export default function Home() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Hero Section */}
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>China Travel Toolkit</Kicker>
          <h1 style={{ fontSize: '52px', marginBottom: '24px', lineHeight: '1.1' }}>
            The Only China Travel Guide You Actually Need.
          </h1>
          <p className="hero-subtitle" style={{ marginBottom: '32px' }}>
            Most China travel tips online are written by tour agencies trying to sell you a $3,000
            package. I&apos;m Richard, a Chinese native living in the UK, and I built this toolkit
            to help you survive your first 48 hours without losing your mind.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link
              href="#toolkit"
              className="btn btn-primary"
              style={{ padding: '16px 32px', fontSize: '18px' }}
            >
              Start Planning
            </Link>
          </div>
        </div>
      </section>

      {/* Toolkit Grid */}
      <section id="toolkit" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Kicker>The Pre-Flight Survival Kit</Kicker>
            <h2 style={{ fontSize: '32px' }}>What You Need Before You Board</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Visa Checker */}
            <Link
              href="/visa"
              className="article-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Kicker>Entry Requirements</Kicker>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Do I Need a Visa?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.5' }}>
                China just opened up 15-day visa-free entry and 240-hour transit visas to many
                nations. Check if your passport qualifies before paying $140.
              </p>
            </Link>

            {/* VPN */}
            <Link
              href="/vpn"
              className="article-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Kicker>Internet Access</Kicker>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Best VPN for China</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Warning: 95% of VPNs are blocked. Here are the only 2 that actually work in 2026 to
                access Google and WhatsApp.
              </p>
            </Link>

            {/* eSIM */}
            <Link
              href="/esim"
              className="article-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Kicker>Connectivity</Kicker>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Best eSIM for China</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Skip the 45-minute airport registration. Get an international eSIM to land with
                instant data that naturally bypasses censorship.
              </p>
            </Link>

            {/* Payment */}
            <Link
              href="/payment"
              className="article-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Kicker>Money</Kicker>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>How to Pay</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Cash is dead. Learn how to link your foreign Visa or Mastercard to Alipay and WeChat
                Pay before you arrive.
              </p>
            </Link>

            {/* Budget Calculator */}
            <Link
              href="/budget"
              className="article-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Kicker>Planning</Kicker>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Trip Cost Calculator</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                How much does a China trip actually cost? Drag the sliders for your style, days and
                group size — see a live breakdown, no email gate.
              </p>
            </Link>

            {/* Insurance */}
            <Link
              href="/insurance"
              className="article-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Kicker>Safety</Kicker>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Travel Insurance</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Foreigners pay upfront at Chinese hospitals. Compare the best travel insurance options
                — from flexible subscriptions to full adventure coverage.
              </p>
            </Link>

            {/* Xinjiang Guide */}
            <Link
              href="/xinjiang"
              className="article-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Kicker>Destinations</Kicker>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Xinjiang Travel Guide</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Silk Road cities, alpine lakes at 3,600m, and the Karakoram Highway. Four classic
                routes with real local costs, not agency markup.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Kicker>Where to Go</Kicker>
            <h2 style={{ fontSize: '32px' }}>China Travel Routes</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
              Day-by-day itineraries with local tips — built from real experience, not agency copy
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {[
              { href: '/golden-triangle/beijing-xian-shanghai', label: 'Golden Triangle', desc: 'Beijing, Xian & Shanghai — the essential first-timer\'s route', region: 'Classic' },
              { href: '/yangtze-delta/shanghai-hangzhou-suzhou', label: 'Shanghai, Hangzhou & Suzhou', desc: 'Water towns, classical gardens & West Lake', region: 'Yangtze Delta' },
              { href: '/yunnan/kunming-dali-lijiang-shangri-la', label: 'Yunnan: Shangri-La Trail', desc: 'Tiger Leaping Gorge, ancient towns & Tibetan foothills', region: 'Southwest' },
              { href: '/sichuan/chengdu-jiuzhaigou-huanglong', label: 'Chengdu & Jiuzhaigou', desc: 'Pandas, hotpot & turquoise lakes in northern Sichuan', region: 'Southwest' },
              { href: '/silk-road/xian-lanzhou-dunhuang', label: 'Silk Road: Xian to Dunhuang', desc: 'Rainbow mountains, desert fortresses & Mogao Caves', region: 'Northwest' },
              { href: '/xinjiang', label: 'Xinjiang', desc: 'Karakoram Highway, Kashgar bazaar & alpine lakes', region: 'Northwest' },
              { href: '/tibet/lhasa-shigatse-everest', label: 'Tibet: Lhasa to Everest', desc: 'Potala Palace, turquoise lakes & Base Camp at 5,150m', region: 'West' },
              { href: '/guangxi/guilin-yangshuo-lijiang', label: 'Guilin & Yangshuo', desc: 'Li River cruise through the 20 RMB note landscape', region: 'South' },
              { href: '/guizhou/huangguoshu-libo-miao', label: 'Guizhou Waterfalls & Villages', desc: 'Asia\'s largest waterfall & thousand-household Miao village', region: 'Southwest' },
              { href: '/zhangjiajie/avatar-mountains', label: 'Zhangjiajie', desc: 'The Avatar mountains — 3,000 sandstone pillars in mist', region: 'Central' },
              { href: '/huangshan/yellow-mountain', label: 'Huangshan', desc: 'China\'s most painted mountain & ancient Huizhou villages', region: 'East' },
              { href: '/ancient-capitals/xian-luoyang-kaifeng', label: 'Three Ancient Capitals', desc: 'Xian, Luoyang & Kaifeng — 3,000 years of imperial history', region: 'Central' },
              { href: '/fujian/xiamen-tulou-quanzhou', label: 'Fujian: Tulou & Quanzhou', desc: 'Hakka earthen roundhouses & the Maritime Silk Road port', region: 'Southeast' },
              { href: '/dongbei/harbin-snow-town', label: 'Harbin & Snow Town', desc: 'The world\'s largest ice festival & 2m of powder snow', region: 'Northeast' },
              { href: '/south-china/hong-kong-macau', label: 'Hong Kong & Macau', desc: 'Victoria Harbour dim sum & Portuguese egg tarts', region: 'South' },
              { href: '/south-china/sanya-hainan', label: 'Sanya & Hainan', desc: 'China\'s tropical island — beaches, rainforest & seafood', region: 'South' },
            ].map((dest) => (
              <Link
                key={dest.href}
                href={dest.href}
                className="article-card"
                style={{ textDecoration: 'none', color: 'inherit', padding: '24px' }}
              >
                <div style={{ fontSize: '12px', color: 'var(--accent-color)', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {dest.region}
                </div>
                <h3 style={{ fontSize: '17px', marginBottom: '8px', lineHeight: '1.3' }}>{dest.label}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.5' }}>{dest.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <TourCTA />
        <SignatureCard />
      </div>
    </div>
  );
}
