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
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            
            {/* Visa Checker */}
            <Link href="/visa" className="bento-card" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'var(--bg-surface)' }}>
              <div style={{ padding: '16px', backgroundColor: 'rgba(230, 57, 70, 0.1)', color: 'var(--primary-color)', width: 'fit-content', borderRadius: '12px', marginBottom: '24px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <h3 style={{ fontSize: '28px', marginBottom: '16px' }}>Do I Need a Visa?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.5' }}>
                China just opened up 15-day visa-free entry and 144-hour transit visas to many nations. Check if your passport qualifies before paying $140.
              </p>
            </Link>

            {/* VPN */}
            <Link href="/vpn" className="bento-card" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', backgroundColor: '#0F172A', borderColor: '#1E293B' }}>
              <div style={{ padding: '16px', backgroundColor: 'rgba(255,255,255,0.1)', color: '#F8FAFC', width: 'fit-content', borderRadius: '12px', marginBottom: '24px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 style={{ fontSize: '28px', marginBottom: '12px', color: '#F8FAFC' }}>Best VPN for China</h3>
              <p style={{ color: '#94A3B8', lineHeight: '1.5' }}>
                Warning: 95% of VPNs are blocked. Here are the only 2 that actually work in 2026 to access Google and WhatsApp.
              </p>
            </Link>

            {/* eSIM */}
            <Link href="/esim" className="bento-card" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '16px', backgroundColor: 'rgba(7, 193, 96, 0.1)', color: '#07C160', width: 'fit-content', borderRadius: '12px', marginBottom: '24px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </div>
              <h3 style={{ fontSize: '28px', marginBottom: '12px' }}>Best eSIM for China</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Skip the 45-minute airport registration. Get an international eSIM to land with instant data that naturally bypasses censorship.
              </p>
            </Link>

            {/* Payment */}
            <Link href="/payment" className="bento-card" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '16px', backgroundColor: 'rgba(244, 162, 97, 0.1)', color: '#F4A261', width: 'fit-content', borderRadius: '12px', marginBottom: '24px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
              </div>
              <h3 style={{ fontSize: '28px', marginBottom: '12px' }}>How to Pay</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Cash is dead. Learn how to link your foreign Visa or Mastercard to Alipay and WeChat Pay before you arrive.
              </p>
            </Link>

            {/* Coming Soon */}
            <div className="bento-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: 'var(--bg-surface)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>More Guides Coming Soon</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>High-Speed Rail, Travel Insurance, and city guides are currently being written.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
