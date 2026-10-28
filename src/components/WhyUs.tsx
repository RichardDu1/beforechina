export default function WhyUs() {
  const PILLARS = [
    {
      index: '01 / BILATERAL DESK',
      title: 'London & Shanghai Field Specialists',
      description:
        'Born and raised in China, operating between the UK and Shanghai. We bridge the language barrier, digital ecosystem, and cultural nuances before you board.',
    },
    {
      index: '02 / PRIVATE LOGISTICS',
      title: '100% Tailor-Made, Zero Group Tours',
      description:
        'No fixed departures or commission shopping stops. Every route is built from scratch around your pace — from high-speed rail transfers to private mountain guides.',
    },
    {
      index: '03 / VERIFIED BENCHMARKS',
      title: 'Independent Hospital & Toolkit Audits',
      description:
        'We publish real Tier-3 hospital International Department tariffs, post-VBP dental implant prices, and live Alipay/VPN tests with zero public hospital kickbacks.',
    },
    {
      index: '04 / REAL-TIME SUPPORT',
      title: 'Direct Bilingual Concierge on the Ground',
      description:
        'Instant WhatsApp & WeChat access to our bilingual desk while you travel. If a high-speed train shifts or a hospital appointment needs translation, we handle it live.',
    },
  ];

  return (
    <section style={{ padding: 'var(--section-gap-md) 0' }}>
      <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
        {/* Editorial Split Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'end',
            marginBottom: '48px',
          }}
        >
          <div>
            <div className="kicker">The BeforeChina Briefing</div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                fontWeight: 400,
                lineHeight: 1.12,
                margin: 0,
              }}
            >
              Not a Faceless Agency. An Independent Desk for Modern China.
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-quote)',
              color: 'var(--text-secondary)',
              fontSize: '19px',
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            Travelling to China in 2026 rewards preparation. Whether you are mapping a three-week
            Silk Road expedition or booking a half-day executive MRI checkup in Shanghai, we pair
            unvarnished field data with seamless private execution.
          </p>
        </div>

        {/* 4-Column Hairline Grid */}
        <div className="hairline-grid-4">
          {PILLARS.map((p) => (
            <div key={p.index}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--primary-color)',
                  letterSpacing: '0.08em',
                  marginBottom: '14px',
                }}
              >
                {p.index}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  fontWeight: 500,
                  marginBottom: '10px',
                  lineHeight: 1.25,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
