import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best eSIM for China (2026) | Bypass the Great Firewall Instantly',
  description: 'Don\'t buy a local SIM card at the airport. Discover the best eSIM for China that gives you instant data and natively bypasses the Great Firewall without a VPN.',
};

export default function EsimPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 0 40px', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: 'rgba(230, 57, 70, 0.1)', color: 'var(--primary-color)', borderRadius: 'var(--radius-pill)', fontWeight: 600, fontSize: '14px', marginBottom: '24px' }}>
            Updated Monthly • Verified by Richard
          </div>
          <h1 style={{ fontSize: '48px', marginBottom: '24px', letterSpacing: '-1px' }}>
            The Best eSIMs for China in 2026
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            As a local, my #1 advice to foreigners is: <strong>Do not buy a physical SIM card at the airport.</strong> Local SIM cards block Google, WhatsApp, and require 45 minutes of passport scanning. Get an international eSIM to land with instant data that naturally bypasses the Great Firewall.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center' }}>Top Recommendations</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Airalo Card */}
            <div className="bento-card" style={{ display: 'flex', gap: '32px', position: 'relative', overflow: 'hidden', borderLeft: '4px solid #E63946' }}>
              <div style={{ position: 'absolute', top: '16px', right: '-32px', backgroundColor: '#E63946', color: 'white', padding: '4px 40px', transform: 'rotate(45deg)', fontSize: '12px', fontWeight: 700 }}>
                TOP PICK
              </div>
              <div style={{ flex: '1' }}>
                <div style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px', color: '#1E293B' }}>Airalo (Chinacom)</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ color: '#F4A261' }}>★★★★★</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Most Reliable (What I use for my UK phone)</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.5' }}>
                  When I fly back to China, I always put the Airalo "Chinacom" eSIM on my UK iPhone. Airalo partners directly with China Unicom (one of China&apos;s best networks). Because it routes traffic through Singapore, it <strong>automatically bypasses the Great Firewall</strong>. You won&apos;t even need a VPN.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#07C160' }}>✓</span> Bypasses Firewall (Works with Google/WhatsApp)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#07C160' }}>✓</span> Fast 4G/5G on China Unicom</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#07C160' }}>✓</span> Packages from $5 (1GB) to $28 (10GB)</li>
                </ul>
              </div>
              <div style={{ width: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Starting at</div>
                <div style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>$5.00</div>
                <a href="#" className="btn btn-primary" style={{ width: '100%', marginBottom: '12px' }}>Get Airalo &rarr;</a>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Use code <strong>BEFORECHINA</strong> for 10% off</div>
              </div>
            </div>

            {/* Holafly Card */}
            <div className="bento-card" style={{ display: 'flex', gap: '32px' }}>
              <div style={{ flex: '1' }}>
                <div style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px', color: '#1E293B' }}>Holafly</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ color: '#F4A261' }}>★★★★☆</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Best for Heavy Video Users</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.5' }}>
                  If you are a heavy data user (FaceTiming family, uploading lots of photos), Holafly offers unlimited data packages. It also includes a built-in VPN to bypass the firewall automatically.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#07C160' }}>✓</span> True Unlimited Data</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#07C160' }}>✓</span> Built-in Firewall Bypass</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#E63946' }}>✗</span> Cannot tether/hotspot the unlimited data to your laptop</li>
                </ul>
              </div>
              <div style={{ width: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Starting at</div>
                <div style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>$19.00</div>
                <a href="#" className="btn btn-outline" style={{ width: '100%', borderColor: '#1E293B', color: '#1E293B' }}>Get Holafly &rarr;</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section style={{ padding: '64px 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '32px' }}>Why You Need an eSIM in China</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div>
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>1. The "Secret" Firewall Bypass</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  This is the biggest secret travel agencies won&apos;t tell you. If you buy a physical SIM card at Beijing or Shanghai airport, it will be subject to Chinese internet censorship. You won&apos;t be able to open Google Maps, WhatsApp, or Instagram without a separate VPN. International eSIMs roam into China from outside, meaning <strong>they naturally bypass the firewall.</strong>
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>2. Avoid the Passport Interrogation</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Buying a local SIM card in China takes about 45 minutes of paperwork, facial recognition scanning, and passport registration. After a 14-hour flight, the last thing you want is more bureaucracy. An eSIM takes 2 minutes to install before you even board your flight in your home country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
