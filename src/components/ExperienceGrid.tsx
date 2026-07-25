import Link from 'next/link';

interface ExperienceType {
  slug: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ExperienceGrid() {
  const experiences: ExperienceType[] = [
    {
      slug: 'culture',
      title: 'Culture & Heritage',
      description:
        'Walk the Great Wall at sunrise, stand before the Terracotta Warriors, and trace 3,000 years of imperial history.',
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <path d="M3 21h18M3 7v1M3 7h2m-2 0l4 8h10l3-6-1.5-2H7" />
          <path d="M9 21V9m6 12v-6" />
        </svg>
      ),
    },
    {
      slug: 'culinary',
      title: 'Culinary Journeys',
      description:
        'From Chengdu street food to dim sum in Hong Kong — taste China through its eight great regional cuisines.',
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
        </svg>
      ),
    },
    {
      slug: 'nature',
      title: 'Nature & Wildlife',
      description:
        'Hike through the Avatar mountains of Zhangjiajie, cruise the Li River, and track snow leopards on the Tibetan plateau.',
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <path d="M17 10l3-3-3-3M7 10L4 7l3-3" />
          <path d="M12 22V10M8 14l-4 4M16 14l4 4M12 2L2 22h20L12 2z" />
        </svg>
      ),
    },
    {
      slug: 'photography',
      title: 'Photography Expeditions',
      description:
        'Capture the golden light over the Li River karsts, the rainbow mountains of Zhangye, and the misty peaks of Huangshan.',
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
    },
    {
      slug: 'family',
      title: 'Family Adventures',
      description:
        'Hold a baby panda in Chengdu, cycle atop the Xian city wall, and watch a shadow puppet show in a Beijing hutong.',
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
        </svg>
      ),
    },
  ];

  return (
    <section style={{ padding: 'var(--section-gap-md) 0', backgroundColor: 'var(--bg-surface)' }}>
      <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 500,
              marginBottom: '16px',
            }}
          >
            Travel Your Way
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
            However you like to explore, we design the journey around your passion.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
          }}
        >
          {experiences.map((exp) => (
            <Link
              key={exp.slug}
              href={`/experiences#${exp.slug}`}
              className="editorial-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '28px 16px',
              }}
            >
              <div style={{ color: 'var(--primary-color)', marginBottom: '16px', opacity: 0.85 }}>
                {exp.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  fontWeight: 500,
                  marginBottom: '8px',
                }}
              >
                {exp.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.55 }}>
                {exp.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
