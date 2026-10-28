import Link from 'next/link';

interface ExperienceType {
  index: string;
  slug: string;
  regions: string;
  title: string;
  description: string;
}

export default function ExperienceGrid() {
  const experiences: ExperienceType[] = [
    {
      index: '01',
      slug: 'culture',
      regions: "BEIJING · XI'AN · LUOYANG · PINGYAO",
      title: 'Imperial Architecture & Living Heritage',
      description:
        'Walk unrestored wild sections of the Great Wall at dawn, examine Han and Tang dynasty tombs with private historians, and stay in restored courtyard residences.',
    },
    {
      index: '02',
      slug: 'culinary',
      regions: 'CHENGDU · SHUNDE · HANGZHOU · CHAOZHOU',
      title: 'Regional Gastronomy & Tea Mountains',
      description:
        'Move beyond tourist banquets into back-alley Sichuan noodle stalls, Longjing spring tea harvests in Hangzhou, and Cantonese private kitchens.',
    },
    {
      index: '03',
      slug: 'nature',
      regions: 'YANGSHUO · ZHANGJIAJIE · JIUZHAIGOU · YUNNAN',
      title: 'Karst Rivers, Alpine Valleys & Gorge Treks',
      description:
        'Drift past Li River limestone peaks on bamboo rafts, hike the high trail of Tiger Leaping Gorge, and explore the travertine lakes of northern Sichuan.',
    },
    {
      index: '04',
      slug: 'photography',
      regions: 'HUANGSHAN · YUANYANG · DUNHUANG · XINJIANG',
      title: 'Light, Mist & Frontier Photography',
      description:
        'Timed to golden hour and seasonal cloud inversions — from the granite pines of Yellow Mountain to the desert dunes of the Hexi Corridor.',
    },
    {
      index: '05',
      slug: 'family',
      regions: 'BEIJING · CHENGDU · SHANGHAI · GUILIN',
      title: 'Multi-Generational & Family Pacing',
      description:
        'Effortless high-speed rail connections, giant panda conservation visits in Sichuan, cycling ancient city walls, and optional executive health checkups for parents.',
    },
  ];

  return (
    <section
      style={{
        padding: 'var(--section-gap-md) 0',
        backgroundColor: 'var(--bg-color)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div>
            <div className="kicker">Thematic Directory</div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.8vw, 40px)',
                fontWeight: 400,
                margin: 0,
              }}
            >
              Five Ways to Frame Your Journey
            </h2>
          </div>
          <Link href="/experiences" className="text-link">
            Explore All Themes &rarr;
          </Link>
        </div>

        {/* Horizontal Editorial Directory Rows */}
        <div style={{ borderTop: '2px solid var(--text-primary)' }}>
          {experiences.map((exp) => (
            <Link
              key={exp.slug}
              href={`/experiences#${exp.slug}`}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '20px 32px',
                alignItems: 'baseline',
                padding: '28px 0',
                borderBottom: '1px solid var(--border-color)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'background-color 0.15s ease',
              }}
            >
              {/* Left Column: Index + Regions + Title */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--primary-color)',
                    letterSpacing: '0.08em',
                    marginBottom: '6px',
                  }}
                >
                  THEME {exp.index} &middot;{' '}
                  <span style={{ color: 'var(--text-muted)' }}>{exp.regions}</span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '23px',
                    fontWeight: 500,
                    lineHeight: 1.25,
                    margin: 0,
                  }}
                >
                  {exp.title}
                </h3>
              </div>

              {/* Right Column: Description + Link */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '24px',
                  flexWrap: 'wrap',
                }}
              >
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    margin: 0,
                    maxWidth: '540px',
                    flex: '1 1 320px',
                  }}
                >
                  {exp.description}
                </p>
                <span className="text-link" style={{ flexShrink: 0 }}>
                  Read Brief &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
