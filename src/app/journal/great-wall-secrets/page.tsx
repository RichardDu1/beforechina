import { Metadata } from 'next';
import Link from 'next/link';
import JournalCard from '@/components/JournalCard';

export const metadata: Metadata = {
  title: 'What Nobody Tells You About the Great Wall | BeforeChina Journal',
  description:
    'Skip Badaling. Here is where to find the wild, unrestored sections of the Great Wall — and why sunrise is the only time to go.',
  alternates: { canonical: '/journal/great-wall-secrets' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/journal/great-wall-secrets',
    title: 'What Nobody Tells You About the Great Wall | BeforeChina Journal',
    description:
      'Skip Badaling. Here is where to find the wild, unrestored sections of the Great Wall.',
    images: [
      {
        url: '/images/destinations/golden-triangle-og.webp',
        width: 1200,
        height: 630,
        alt: 'The Great Wall at sunrise',
      },
    ],
  },
};

const RELATED = [
  {
    href: '/journal/chengdu-street-food',
    image: '/images/destinations/sichuan.webp',
    imageAlt: 'Chengdu street food',
    title: 'Eating Your Way Through Chengdu',
    excerpt: 'Three days of pure Sichuan flavour.',
    date: 'June 2026',
    category: 'Food',
  },
  {
    href: '/journal/photographing-li-river',
    image: '/images/destinations/guangxi.webp',
    imageAlt: 'Li River at dawn',
    title: "A Photographer's Guide to the Li River",
    excerpt: 'The exact spots and times for the perfect shot.',
    date: 'May 2026',
    category: 'Photography',
  },
];

export default function GreatWallSecretsPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Full-bleed Hero */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '60vh',
          minHeight: '400px',
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/destinations/golden-triangle.webp"
          alt="The Great Wall winding through mountains at sunrise"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Article Header */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <div
            style={{
              fontSize: '12px',
              color: 'var(--accent-color)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px',
            }}
          >
            Culture &middot; July 2026
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 500,
              marginBottom: '16px',
              lineHeight: 1.15,
            }}
          >
            What Nobody Tells You About the Great Wall
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-quote)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
            }}
          >
            Skip Badaling. Here is where to find the wild, unrestored sections — and why sunrise is
            the only time to go.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section style={{ padding: 'var(--section-gap-sm) 0' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <div
            style={{
              fontFamily: 'var(--font-boody)',
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
            }}
          >
            <p style={{ marginBottom: '24px' }}>
              Every year, ten million people visit the Great Wall at Badaling. They shuffle through
              the ticket gates, climb the restored steps with matching grey bricks, and take the
              same photograph from the same angle as ten million people before them. Then they go
              home and say they have "done" the Great Wall.
            </p>
            <p style={{ marginBottom: '24px' }}>
              They haven't. They've done the theme park version.
            </p>
            <p style={{ marginBottom: '24px' }}>
              The real Great Wall — the one that snakes across 21,000 kilometres of mountain ridges,
              crumbling watchtowers, and windswept passes where you won't see another soul — is a
              completely different experience. And it's not hard to find, if you know where to look.
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '26px',
                fontWeight: 500,
                marginTop: '48px',
                marginBottom: '16px',
                color: 'var(--text-primary)',
              }}
            >
              Mutianyu: The Sweet Spot
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Mutianyu is the Goldilocks section — restored enough to be safe, but not so restored
              that it feels manufactured. It's 70 km northeast of Beijing, takes about 90 minutes by
              car, and has a fraction of Badaling's crowds even on weekends.
            </p>
            <p style={{ marginBottom: '24px' }}>
              The key is timing. Arrive at 7:30am — yes, that early. The gates open at 8am, and the
              first cable car goes up at 8:15am. If you're on that first car, you'll have the wall
              almost entirely to yourself for a solid hour before the tour buses arrive. The light
              at that hour is soft and golden, the air is cool, and the only sound is the wind
              through the watchtowers.
            </p>

            <blockquote className="pull">
              The first cable car goes up at 8:15am. If you're on it, you'll have the wall almost
              entirely to yourself for a solid hour.
            </blockquote>

            <p style={{ marginBottom: '24px' }}>
              Walk east from the cable car station toward Watchtower 20. This is the steepest
              section — the steps become ladders, the handrails disappear, and you'll be climbing on
              all fours at points. It's genuinely challenging. But when you reach Watchtower 20 and
              turn around, the view is staggering: the wall undulates along the ridge like a stone
              dragon, disappearing into the haze.
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '26px',
                fontWeight: 500,
                marginTop: '48px',
                marginBottom: '16px',
                color: 'var(--text-primary)',
              }}
            >
              Jiankou: The Wild Wall
            </h2>
            <p style={{ marginBottom: '24px' }}>
              If Mutianyu is Goldilocks, Jiankou is the real deal. This section has never been
              restored. The watchtowers are crumbling, trees grow through the battlements, and the
              stone steps have been worn smooth by centuries of wind — not tourists. It's dangerous
              in places, and you need a guide who knows the route. But the reward is a Great Wall
              experience that hasn't changed in 500 years.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Jiankou connects to Mutianyu — you can hike from one to the other in about 3 hours.
              Start at Jiankou at sunrise, hike west, and descend via the Mutianyu toboggan slide.
              It's the best Great Wall day you'll ever have.
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '26px',
                fontWeight: 500,
                marginTop: '48px',
                marginBottom: '16px',
                color: 'var(--text-primary)',
              }}
            >
              Practical Notes
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Hire a private driver for the day (¥600-800 round trip from Beijing). For Jiankou,
              hire a local guide (¥300-500) — the path isn't marked and some sections require
              scrambling. Bring water, sunscreen, and decent shoes. The toboggan slide at Mutianyu
              is ¥100 and absolutely worth it.
            </p>
            <p>
              One last thing: go on a weekday. Not Saturday. Not Sunday. Not during Golden Week. The
              difference between a weekday Mutianyu and a weekend Mutianyu is the difference between
              a spiritual experience and a shopping mall.
            </p>
          </div>
        </div>
      </section>

      {/* Related Stories */}
      <section style={{ padding: 'var(--section-gap-sm) 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(22px, 3vw, 28px)',
              fontWeight: 500,
              marginBottom: '28px',
            }}
          >
            More Stories
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '24px',
            }}
          >
            {RELATED.map((story) => (
              <JournalCard key={story.href} entry={story} variant="standard" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
