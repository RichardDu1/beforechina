import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BeforeChina | The Ultimate China Travel Guide & Toolkit (2026)',
  description: 'A no-bs China travel guide created by a UK-based Chinese local. Learn how to survive the Great Firewall, set up Alipay, and navigate visa-free entry.',
};

export default function Home() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 0 64px', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-pill)', fontWeight: 600, fontSize: '14px', marginBottom: '24px' }}>
            🇨🇳 Built by a Local. Designed for You.
          </div>
          <h1 style={{ fontSize: '56px', marginBottom: '24px', letterSpacing: '-1.5px', lineHeight: '1.1' }}>
            The Only China Travel Guide You Actually Need.
          </h1>
          <p style={{ fontSize: '22px', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: '1.5' }}>
            Most China travel tips online are written by tour agencies trying to sell you a $3,000 package. I&apos;m Richard, a Chinese native living in the UK, and I built this toolkit to help you survive your first 48 hours without losing your mind.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link href="#toolkit" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>
              Access Toolkit &darr;
            </Link>
            <Link href="/about" className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '18px' }}>
              Read My Story
            </Link>
          </div>
        </div>
      </section>

      {/* Toolkit Grid */}
      <section id="toolkit" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center' }}>The Pre-Flight Survival Kit</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', sm: { gridTemplateColumns: '1fr 1fr' }, lg: { gridTemplateColumns: 'repeat(3, 1fr)' } } as any}>
            
                </a>
              </div>
            </div>

            {/* eSIM Card - Medium */}
            <div className="bento-card" style={{ gridColumn: 'span 4' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>📱</div>
              <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>eSIM & Data</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '15px' }}>
                Skip the airport queues. Get data instantly when you land without registering your passport.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <a href="#" style={{ color: 'var(--primary-color)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Compare best eSIMs <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* Payment Card - Large */}
            <div className="bento-card" style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '40px' }}>💳</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ padding: '4px 12px', backgroundColor: '#1677FF', color: 'white', borderRadius: 'var(--radius-sm)', fontSize: '14px', fontWeight: 600 }}>Alipay</span>
                  <span style={{ padding: '4px 12px', backgroundColor: '#07C160', color: 'white', borderRadius: 'var(--radius-sm)', fontSize: '14px', fontWeight: 600 }}>WeChat Pay</span>
                </div>
              </div>
              <h3 style={{ fontSize: '28px', marginBottom: '12px' }}>How to Pay as a Foreigner</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '80%' }}>
                Cash is rarely accepted. Learn how to link your foreign Visa/Mastercard to Chinese payment apps in 3 easy steps.
              </p>
              <div>
                <a href="#" style={{ color: 'var(--primary-color)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Read the step-by-step guide <span>&rarr;</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '80px 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '64px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ width: '100%', height: '400px', backgroundColor: '#E2E8F0', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden' }}>
              {/* Placeholder for real persona image */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'var(--text-muted)' }}>
                [Persona Image]
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '36px', marginBottom: '24px' }}>Hi, I&apos;m [Name].</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
              I&apos;m a Chinese native living in the UK. After helping dozens of my British colleagues plan their trips to China, I realized a massive problem: <strong>the internet is full of outdated information and generic travel agency fluff.</strong>
            </p>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: '1.6' }}>
              I built BeforeChina to give you the honest, unfiltered truth about how to navigate my home country—from bypassing the firewall to paying for a bowl of noodles. No BS, just the tools you actually need.
            </p>
            <button className="btn btn-outline">Read my full story</button>
          </div>
        </div>
      </section>
    </div>
  );
}
