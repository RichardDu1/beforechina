import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'China Travel Insurance Guide (2026) | BeforeChina',
  description: 'Do you need travel insurance for China? Yes. Medical costs for foreigners are high and language barriers make emergencies difficult. Compare the best options.',
};

export default function InsurancePage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 0 40px', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '24px', letterSpacing: '-1px' }}>
            Travel Insurance for China
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            While China is one of the safest countries in the world in terms of crime, medical emergencies happen. As a foreigner, you cannot use the subsidized public healthcare system.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '32px' }}>
            
            {/* Why you need it */}
            <div style={{ gridColumn: 'span 12', lg: { gridColumn: 'span 8' }, margin: '0 auto', maxWidth: '800px' } as any}>
              <h2 style={{ fontSize: '32px', marginBottom: '32px' }}>The Healthcare Reality in China</h2>
              
              <div className="bento-card" style={{ marginBottom: '32px', borderLeft: '4px solid #F4A261' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>VIP Clinics vs Public Hospitals</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                  If you get sick or injured, you will likely be taken to an "International Clinic" or the VIP ward of a public hospital where English is spoken. <strong>These clinics charge Western prices.</strong> A simple ER visit for food poisoning can cost $500+.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  You are required to pay <strong>upfront</strong> before receiving treatment. Good travel insurance will either guarantee payment to the hospital directly or reimburse you quickly.
                </p>
              </div>

              <h2 style={{ fontSize: '32px', margin: '48px 0 32px' }}>Top Insurance Recommendations</h2>

              {/* SafetyWing */}
              <div className="bento-card" style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
                <div style={{ flex: '1' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px', color: 'var(--text-primary)' }}>SafetyWing (Nomad Insurance)</div>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.5' }}>
                    Best for digital nomads and standard travelers. It functions like a subscription ($45-55/month), which is extremely flexible if you don&apos;t have a fixed return ticket.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-secondary)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#07C160' }}>✓</span> Covers emergency medical up to $250k</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#07C160' }}>✓</span> Buy even after your trip has started</li>
                  </ul>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <a href="#" className="btn btn-primary">Get a Quote</a>
                </div>
              </div>

              {/* WorldNomads */}
              <div className="bento-card" style={{ display: 'flex', gap: '24px' }}>
                <div style={{ flex: '1' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px', color: 'var(--text-primary)' }}>World Nomads</div>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.5' }}>
                    Best for adventure travelers. If your China trip involves hiking Tiger Leaping Gorge or adventure sports, World Nomads covers over 200 high-risk activities.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-secondary)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#07C160' }}>✓</span> High-limit medical evacuation</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#07C160' }}>✓</span> Comprehensive adventure sports coverage</li>
                  </ul>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <a href="#" className="btn btn-outline">Get a Quote</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
