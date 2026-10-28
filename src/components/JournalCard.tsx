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
        <div
          style={{
            border: '1px solid var(--border-color)',
            overflow: 'hidden',
            marginBottom: '20px',
            backgroundColor: 'var(--bg-surface-muted)',
          }}
        >
          <img
            src={entry.image}
            alt={entry.imageAlt}
            width={1200}
            height={675}
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio: '16/9',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--primary-color)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '10px',
            }}
          >
            LEAD ESSAY &middot; {entry.category} &middot;{' '}
            <span style={{ color: 'var(--text-muted)' }}>{entry.date}</span>
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 3vw, 34px)',
              fontWeight: 500,
              marginBottom: '12px',
              lineHeight: 1.18,
            }}
          >
            {entry.title}
          </h3>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '16px',
              lineHeight: 1.65,
              marginBottom: '16px',
            }}
          >
            {entry.excerpt}
          </p>
          <span className="text-link">Read Full Dispatch &rarr;</span>
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
        paddingBottom: '24px',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div
        style={{
          border: '1px solid var(--border-color)',
          flexShrink: 0,
          overflow: 'hidden',
          backgroundColor: 'var(--bg-surface-muted)',
        }}
      >
        <img
          src={entry.image}
          alt={entry.imageAlt}
          width={400}
          height={267}
          style={{
            width: '148px',
            height: '104px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
      <div>
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
          {entry.category} &middot; <span style={{ color: 'var(--text-muted)' }}>{entry.date}</span>
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '19px',
            fontWeight: 500,
            marginBottom: '6px',
            lineHeight: 1.25,
          }}
        >
          {entry.title}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>
          {entry.excerpt}
        </p>
      </div>
    </Link>
  );
}
