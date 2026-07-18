import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best VPN for China (2026) | Bypass the Great Firewall',
  description: 'The Great Firewall is stronger than ever. Here are the only 2 VPNs that still consistently work in China in 2026 for accessing Google, WhatsApp, and Netflix.',
};

export default function VpnPage() {
  return (
    <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Dark Mode Hero Section */}
      <section style={{ padding: '80px 0 40px', backgroundColor: '#0F172A', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#EF4444', borderRadius: 'var(--radius-pill)', fontWeight: 600, fontSize: '14px', marginBottom: '24px' }}>
            Warning: Download BEFORE you arrive in China
          </div>
          <h1 style={{ fontSize: '48px', marginBottom: '24px', letterSpacing: '-1px', color: '#F8FAFC' }}>
            The Only VPNs That Actually Work in China
          </h1>
          <p style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            In 2026, the Great Firewall blocks 95% of commercial VPNs. Don&apos;t waste your money on free apps that will disconnect on day one. These are the two services we personally use to bypass censorship daily.
          </p>
        </div>
      </section>

      {/* Recommended VPNs */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
            
            {/* ExpressVPN */}
            <div className="bento-card" style={{ backgroundColor: '#1E293B', borderColor: 'rgba(255,255,255,0.1)', display: 'flex', gap: '32px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#EF4444' }}></div>
              <div style={{ flex: '1' }}>
                <div style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px', color: '#F8FAFC' }}>ExpressVPN</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ color: '#F4A261' }}>★★★★★</span>
                  <span style={{ color: '#94A3B8', fontSize: '14px' }}>The Gold Standard for China</span>
                </div>
                <p style={{ color: '#CBD5E1', marginBottom: '16px', lineHeight: '1.5' }}>
                  ExpressVPN has been fighting the Great Firewall for over a decade. When China updates its firewall protocols, ExpressVPN is usually the first to push a fix within 24 hours. Their proprietary Lightway protocol is currently the best at obfuscating traffic.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px', color: '#CBD5E1' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10B981' }}>✓</span> Proprietary obfuscation technology</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10B981' }}>✓</span> 24/7 Support (Crucial if a server gets blocked)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10B981' }}>✓</span> 30-day money-back guarantee</li>
                </ul>
              </div>
              <div style={{ width: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(15, 23, 42, 0.5)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                <div style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '8px' }}>From</div>
                <div style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px', color: '#F8FAFC' }}>$6.67<span style={{ fontSize: '16px', color: '#64748B' }}>/mo</span></div>
                <a href="#" className="btn" style={{ backgroundColor: '#EF4444', color: 'white', width: '100%', marginBottom: '12px', padding: '12px 0', textAlign: 'center', borderRadius: 'var(--radius-pill)', fontWeight: 600 }}>Get ExpressVPN &rarr;</a>
              </div>
            </div>

            {/* NordVPN */}
            <div className="bento-card" style={{ backgroundColor: '#1E293B', borderColor: 'rgba(255,255,255,0.1)', display: 'flex', gap: '32px' }}>
              <div style={{ flex: '1' }}>
                <div style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px', color: '#F8FAFC' }}>NordVPN</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ color: '#F4A261' }}>★★★★☆</span>
                  <span style={{ color: '#94A3B8', fontSize: '14px' }}>Best Value & Speeds</span>
                </div>
                <p style={{ color: '#CBD5E1', marginBottom: '16px', lineHeight: '1.5' }}>
                  NordVPN requires you to manually enable "Obfuscated Servers" in the settings to work in China, but once connected, it offers some of the fastest speeds for streaming Netflix or YouTube in 4K.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px', color: '#CBD5E1' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10B981' }}>✓</span> Very fast once connected</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10B981' }}>✓</span> Cheaper long-term plans</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#EF4444' }}>✗</span> Requires manual obfuscation setup</li>
                </ul>
              </div>
              <div style={{ width: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(15, 23, 42, 0.5)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                <div style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '8px' }}>From</div>
                <div style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px', color: '#F8FAFC' }}>$3.39<span style={{ fontSize: '16px', color: '#64748B' }}>/mo</span></div>
                <a href="#" className="btn btn-outline" style={{ borderColor: '#CBD5E1', color: '#F8FAFC', width: '100%', marginBottom: '12px', padding: '12px 0', textAlign: 'center', borderRadius: 'var(--radius-pill)', fontWeight: 600 }}>Get NordVPN &rarr;</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Info block */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '32px', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#EF4444' }}>🚨 CRITICAL: Do not wait until you arrive</h3>
            <p style={{ color: '#CBD5E1', lineHeight: '1.6' }}>
              The websites for ExpressVPN, NordVPN, and almost all other VPN providers are entirely blocked in China. You cannot go to the App Store or Google Play store to download them once you land. <strong>You must download the apps and sign up for a subscription while you are still in your home country.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
