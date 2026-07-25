export default function WhyUs() {
  const PILLARS = [
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: 'China Specialists',
      description:
        'Born and raised in China, based in the UK. We know the language, the hidden spots, and how to navigate both worlds.',
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: '100% Tailor-Made',
      description:
        'No fixed departures, no groups. Every journey is designed from scratch around your interests, pace, and budget.',
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      ),
      title: '24/7 In-Country Support',
      description:
        'WhatsApp access to our team while you travel. If a train gets cancelled or a plan changes, we fix it in real time.',
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Local Communities, Real Impact',
      description:
        'We work directly with family-run guesthouses, local guides, and community projects — not big hotel chains.',
    },
  ];

  return (
    <section style={{ padding: 'var(--section-gap-lg) 0' }}>
      <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 500,
              marginBottom: '16px',
            }}
          >
            Why Travel With Us
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '17px',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            We are not a faceless agency. We are a small team of China specialists who design
            journeys we would take ourselves.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
          }}
        >
          {PILLARS.map((p) => (
            <div key={p.title} style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: 'var(--primary-color)',
                  marginBottom: '16px',
                  display: 'inline-block',
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '10px',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '15px',
                  lineHeight: 1.6,
                  maxWidth: '260px',
                  margin: '0 auto',
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
