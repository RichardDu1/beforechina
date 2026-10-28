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
        <div
          style={{
            borderTop: '2px solid var(--text-primary)',
            paddingTop: '24px',
            marginBottom: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <div>
            <div className="kicker" style={{ marginBottom: '4px' }}>
              Related Dossiers
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(22px, 3vw, 28px)',
                fontWeight: 500,
                margin: 0,
              }}
            >
              Continue Your Pre-Trip Briefing
            </h2>
          </div>
        </div>

        {hasImages ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {steps.map((step, idx) => (
              <Link
                key={step.href}
                href={step.href}
                className="editorial-card"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                {step.image && (
                  <div
                    style={{
                      border: '1px solid var(--border-color)',
                      overflow: 'hidden',
                      marginBottom: '14px',
                    }}
                  >
                    <img
                      src={step.image}
                      alt={step.imageAlt || ''}
                      width={800}
                      height={533}
                      style={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '3/2',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>
                )}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--accent-color)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '6px',
                  }}
                >
                  0{idx + 1} / {step.days || 'ROUTE BRIEF'}
                </div>
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
            }}
          >
            {steps.map((step, idx) => (
              <Link
                key={step.href}
                href={step.href}
                className="article-card"
                style={{
                  padding: '20px 22px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '2px solid var(--text-primary)',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--primary-color)',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}
                  >
                    BRIEFING 0{idx + 1}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '18px',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      marginBottom: '6px',
                      lineHeight: 1.3,
                    }}
                  >
                    {step.label} &rarr;
                  </div>
                  <div
                    style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}
                  >
                    {step.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
