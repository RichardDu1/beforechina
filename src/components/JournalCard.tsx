import Link from 'next/link';

interface JournalEntry {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

interface JournalCardProps {
  entry: JournalEntry;
  variant?: 'featured' | 'standard';
}

export default function JournalCard({ entry, variant = 'standard' }: JournalCardProps) {
  if (variant === 'featured') {
    return (
      <Link
        href={entry.href}
        className="editorial-card"
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'block',
          position: 'relative',
        }}
      >
        <img
          src={entry.image}
          alt={entry.imageAlt}
          width={1200}
          height={600}
          loading="lazy"
          style={{
            width: '100%',
            height: 'auto',
            aspectRatio: '2/1',
            objectFit: 'cover',
            display: 'block',
            marginBottom: '20px',
          }}
        />
        <div
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto', textAlign: 'center' }}
        >
          <div
            style={{
              fontSize: '12px',
              color: 'var(--accent-color)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '8px',
            }}
          >
            {entry.category} &middot; {entry.date}
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 500,
              marginBottom: '12px',
              lineHeight: 1.2,
            }}
          >
            {entry.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6 }}>
            {entry.excerpt}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={entry.href}
      className="editorial-card"
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-start',
      }}
    >
      <img
        src={entry.image}
        alt={entry.imageAlt}
        width={400}
        height={267}
        loading="lazy"
        style={{
          width: '160px',
          height: '107px',
          objectFit: 'cover',
          flexShrink: 0,
        }}
      />
      <div>
        <div
          style={{
            fontSize: '11px',
            color: 'var(--accent-color)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '4px',
          }}
        >
          {entry.category}
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '18px',
            fontWeight: 500,
            marginBottom: '6px',
            lineHeight: 1.25,
          }}
        >
          {entry.title}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{entry.date}</p>
      </div>
    </Link>
  );
}
