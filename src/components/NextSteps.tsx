import Link from 'next/link';

interface RelatedJourney {
  href: string;
  label: string;
  description: string;
  image?: string;
  imageAlt?: string;
  days?: string;
}

export default function NextSteps({ steps }: { steps: RelatedJourney[] }) {
  const hasImages = steps.some((s) => s.image);

  return (
    <section style={{ padding: 'var(--section-gap-sm) 0' }}>
      <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(24px, 3vw, 30px)',
            fontWeight: 500,
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          Continue Exploring
        </h2>
        {hasImages ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {steps.map((step) => (
              <Link
                key={step.href}
                href={step.href}
                className="editorial-card"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                {step.image && (
                  <img
                    src={step.image}
                    alt={step.imageAlt || ''}
                    width={800}
                    height={533}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '3/2',
                      objectFit: 'cover',
                      display: 'block',
                      marginBottom: '14px',
                    }}
                  />
                )}
                {step.days && (
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--accent-color)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '6px',
                    }}
                  >
                    {step.days}
                  </div>
                )}
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 500,
                    marginBottom: '6px',
                  }}
                >
                  {step.label}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.5 }}>
                  {step.description}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {steps.map((step) => (
              <Link
                key={step.href}
                href={step.href}
                className="btn btn-outline"
                style={{
                  padding: '14px 24px',
                  textDecoration: 'none',
                  textAlign: 'left',
                  maxWidth: '320px',
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: '4px' }}>{step.label}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 400 }}>
                  {step.description}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
