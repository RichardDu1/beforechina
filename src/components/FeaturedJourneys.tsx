import Link from 'next/link';

interface Journey {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  days: string;
}

interface FeaturedJourneysProps {
  title: string;
  subtitle?: string;
  journeys: Journey[];
}

export default function FeaturedJourneys({ title, subtitle, journeys }: FeaturedJourneysProps) {
  return (
    <section style={{ padding: 'var(--section-gap-md) 0' }}>
      <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
        <div style={{ marginBottom: '40px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 3.5vw, 36px)',
              fontWeight: 500,
              marginBottom: subtitle ? '10px' : '0',
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>{subtitle}</p>
          )}
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {journeys.map((j) => (
            <Link
              key={j.href}
              href={j.href}
              className="editorial-card"
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <img
                src={j.image}
                alt={j.imageAlt}
                width={800}
                height={533}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '3/2',
                  objectFit: 'cover',
                  display: 'block',
                  marginBottom: '18px',
                }}
              />
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
                {j.days}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  fontWeight: 500,
                  marginBottom: '8px',
                  lineHeight: 1.25,
                }}
              >
                {j.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.5 }}>
                {j.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
