export default function Home() {
  return (
    <div style={{ paddingBottom: '64px' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 0 60px 0', textAlign: 'center', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: 'rgba(230, 57, 70, 0.1)', color: 'var(--primary-color)', borderRadius: 'var(--radius-pill)', fontWeight: 600, fontSize: '14px', marginBottom: '24px' }}>
            Built by a Local, Designed for You
          </div>
          <h1 style={{ fontSize: '56px', marginBottom: '24px', letterSpacing: '-1px' }}>
            Crack the Code to <br /> Traveling in China.
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.5' }}>
            No more outdated travel agency blogs. Get the exact tools, VPNs, and insider knowledge you need before you land.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>Start Your Prep</button>
            <button className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '18px' }}>Read the Guide</button>
          </div>
        </div>
      </section>

      {/* Bento Grid - Core Toolkit */}
      <section id="tools" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center' }}>Your Pre-Travel Toolkit</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px', gridAutoRows: 'minmax(200px, auto)' }}>
            
            {/* Visa Checker Card - Large */}
            <div className="bento-card" style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(135deg, var(--bg-surface) 0%, rgba(230, 57, 70, 0.05) 100%)' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🛂</div>
              <h3 style={{ fontSize: '28px', marginBottom: '12px' }}>Visa-Free Checker (2026)</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '80%' }}>
                Don&apos;t apply for a visa yet. You might not need one. Enter your passport to see if you qualify for the 144-hour or 240-hour visa-free entry.
              </p>
              <div>
                <button className="btn btn-primary">Check Visa Status &rarr;</button>
              </div>
            </div>

            {/* VPN Card - Medium */}
            <div className="bento-card" style={{ gridColumn: 'span 4', backgroundColor: '#1E293B', color: 'white' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🔐</div>
              <h3 style={{ fontSize: '24px', marginBottom: '12px', color: 'white' }}>The Great Firewall</h3>
              <p style={{ color: '#94A3B8', marginBottom: '24px', fontSize: '15px' }}>
                Google and WhatsApp won&apos;t work. See the only 2 VPNs that actually bypass the wall right now.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <a href="#" style={{ color: '#F4A261', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Find a working VPN <span>&rarr;</span>
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
