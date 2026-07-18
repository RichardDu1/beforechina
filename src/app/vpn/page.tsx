import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best VPN for China (2026) | Bypass the Great Firewall',
  description: 'The Great Firewall blocks 95% of VPNs. As a local, here are the only 2 VPNs (ExpressVPN and NordVPN) that still consistently work in China to access Google and WhatsApp.',
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
            How to Survive the China Great Firewall
          </h1>
          <p style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Every year, I see tourists arriving at Beijing airport, trying to open Google Maps, and staring at a blank screen. The Great Firewall blocks Google, WhatsApp, Instagram, and 95% of commercial VPNs. Don&apos;t waste your money on free apps. Here are the only two VPNs my friends and I actually use to bypass censorship daily in 2026.
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
                <div style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px', color: '#F8FAFC' }}>ExpressVPN China</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ color: '#F4A261' }}>★★★★★</span>
                  <span style={{ color: '#94A3B8', fontSize: '14px' }}>The Gold Standard for Bypassing the Wall</span>
                </div>
                <p style={{ color: '#CBD5E1', marginBottom: '16px', lineHeight: '1.5' }}>
                  ExpressVPN has been playing cat-and-mouse with the Great Firewall for over a decade. Whenever China updates its firewall protocols (which usually happens during major political meetings), ExpressVPN is the fastest to push a fix. Their proprietary "Lightway" protocol is specifically designed to disguise your traffic so the firewall can&apos;t detect it.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px', color: '#CBD5E1' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10B981' }}>✓</span> Automatic obfuscation technology</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10B981' }}>✓</span> Access WhatsApp, Instagram, and Gmail flawlessly</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10B981' }}>✓</span> 30-day money-back guarantee (zero risk for short trips)</li>
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
                <div style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px', color: '#F8FAFC' }}>NordVPN China</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ color: '#F4A261' }}>★★★★☆</span>
                  <span style={{ color: '#94A3B8', fontSize: '14px' }}>Best Speeds for Streaming Netflix</span>
                </div>
                <p style={{ color: '#CBD5E1', marginBottom: '16px', lineHeight: '1.5' }}>
                  NordVPN is highly reliable, but it requires a crucial extra step: you <strong>must manually enable "Obfuscated Servers"</strong> in the app settings before connecting in China. Once connected, I&apos;ve found it offers faster speeds than ExpressVPN for streaming 4K YouTube or Netflix.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px', color: '#CBD5E1' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10B981' }}>✓</span> Incredible speeds once connected</li>
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
            <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#EF4444' }}>🚨 CRITICAL: The "Catch-22" of VPNs in China</h3>
            <p style={{ color: '#CBD5E1', lineHeight: '1.6' }}>
              The websites for ExpressVPN, NordVPN, and almost all other VPN providers are entirely blocked in China. You cannot go to the App Store or Google Play store to download them once you land, because Google is blocked, and Apple&apos;s China App Store has removed all VPN apps by law. <strong>You must download the apps and sign up for a subscription while you are still in your home country.</strong> Don&apos;t be like my colleague Tom who spent his first 3 days completely disconnected!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
