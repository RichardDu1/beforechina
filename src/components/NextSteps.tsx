import Link from 'next/link';

interface NextStep {
  href: string;
  label: string;
  description: string;
}

export default function NextSteps({ steps }: { steps: NextStep[] }) {
  return (
    <section style={{ padding: '48px 0', backgroundColor: 'var(--bg-surface)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '8px' }}>Ready for the next step?</h2>
        <p
          style={{
            color: 'var(--text-secondary)',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px',
          }}
        >
          Here&apos;s what to sort out next for your China trip.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {steps.map((step) => (
            <Link
              key={step.href}
              href={step.href}
              className="btn btn-outline"
              style={{
                padding: '14px 24px',
                textDecoration: 'none',
                borderColor: 'var(--text-primary)',
                color: 'var(--text-primary)',
                textAlign: 'left',
                maxWidth: '320px',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>{step.label}</div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  fontWeight: 400,
                }}
              >
                {step.description}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
