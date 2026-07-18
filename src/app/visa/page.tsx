import VisaChecker from '@/components/VisaChecker';

export const metadata = {
  title: 'China Visa-Free Checker (2026) | BeforeChina',
  description: 'Find out if you qualify for China\'s 144-hour transit visa exemption or 15-day visa-free entry based on your nationality.',
};

export default function VisaPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Header */}
      <section style={{ padding: '80px 0 40px', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: 'rgba(244, 162, 97, 0.1)', color: '#D97706', borderRadius: 'var(--radius-pill)', fontWeight: 600, fontSize: '14px', marginBottom: '24px' }}>
            Updated for 2026 Rules
          </div>
          <h1 style={{ fontSize: '48px', marginBottom: '24px', letterSpacing: '-1px' }}>
            Do I Need a Visa for China?
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            China has rapidly expanded its visa-free policies. Before you spend $140+ and weeks applying for a standard L-Visa, check if your passport qualifies for visa-free entry or transit.
          </p>
        </div>
      </section>

      {/* Main Tool Area */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <VisaChecker />
        </div>
      </section>

      {/* Info Section */}
      <section style={{ padding: '64px 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '32px', textAlign: 'center' }}>Understanding the Policies</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div className="bento-card">
                <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--primary-color)' }}>The 144-Hour Transit Exemption</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
                  If you hold a passport from one of the 54 qualifying countries (including US, UK, Canada, Australia), you can stay in designated Chinese cities (like Beijing, Shanghai, Guangzhou) for up to 144 hours (6 days) <strong>without a visa</strong>.
                </p>
                <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>The Catch:</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  It <strong>must</strong> be a transit. You cannot fly US &rarr; China &rarr; US. You must be traveling to a third country or region, for example: US &rarr; China &rarr; Japan &rarr; US. Hong Kong, Macau, and Taiwan count as third regions for this purpose.
                </p>
              </div>

              <div className="bento-card">
                <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#07C160' }}>The 15-Day Unilateral Exemption</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Recently, China has granted 15-day visa-free entry to citizens of several European countries (France, Germany, Italy, Spain, etc.) as well as Australia and New Zealand. If you have one of these passports, you can enter China for business, tourism, or visiting relatives for up to 15 days without any prior application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
