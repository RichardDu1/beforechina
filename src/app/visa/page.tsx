import VisaChecker from '@/components/VisaChecker';

export const metadata = {
  title: 'Do I Need a Visa for China in 2026? | Visa-Free Checker',
  description: 'Check if you qualify for China\'s 144-hour transit visa exemption or 15-day visa-free entry. Avoid paying $140 for an L-Visa if you don\'t have to.',
};

export default function VisaPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Header */}
      <section style={{ padding: '80px 0 40px', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: 'rgba(244, 162, 97, 0.1)', color: '#D97706', borderRadius: 'var(--radius-pill)', fontWeight: 600, fontSize: '14px', marginBottom: '24px' }}>
            Updated for 2026 Entry Rules
          </div>
          <h1 style={{ fontSize: '48px', marginBottom: '24px', letterSpacing: '-1px' }}>
            Do I Need a Visa for China?
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            "Richard, how do I apply for a tourist visa?" — My British friends ask me this every week. My answer? <strong>You probably don&apos;t need one anymore.</strong> China has rapidly expanded its visa-free policies. Use my tool below to check.
          </p>
        </div>
      </section>

      {/* Main Tool Area */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <VisaChecker />
        </div>
      </section>

      {/* Info Section / SEO FAQ */}
      <section style={{ padding: '64px 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '32px', textAlign: 'center' }}>China Visa Free Policies Explained</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* 144 Hour Transit */}
              <div className="bento-card">
                <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--primary-color)' }}>What is the China 144-Hour Transit Visa?</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
                  If you hold a passport from one of the 54 qualifying countries (including the US, UK, Canada, and Australia), you can stay in designated Chinese regions (like Shanghai, Beijing, or Guangdong) for up to 144 hours (6 days) <strong>without a visa</strong>.
                </p>
                <div style={{ padding: '16px', backgroundColor: 'rgba(230,57,70,0.05)', borderLeft: '4px solid var(--primary-color)' }}>
                  <h4 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--primary-color)' }}>The Ultimate Catch (Do not mess this up)</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    It <strong>must</strong> be a transit. I have seen so many tourists denied boarding at Heathrow because they booked a flight from <em>London &rarr; Shanghai &rarr; London</em>. That is NOT a transit. You must be traveling to a third country or region. For example: <em>London &rarr; Shanghai &rarr; Tokyo &rarr; London</em> works perfectly. (Pro Tip: Hong Kong and Macau count as third regions!).
                  </p>
                </div>
              </div>

              {/* 15-Day Unilateral */}
              <div className="bento-card">
                <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#07C160' }}>Which are the 15-Day China Visa Free Countries?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  In a massive post-pandemic push, China granted 15-day unilateral visa-free entry to citizens of multiple European countries (France, Germany, Italy, Spain, Switzerland, etc.), as well as Australia and New Zealand. If you have one of these passports, you don&apos;t even need a transit flight. You can just fly directly in and out for tourism or business.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
