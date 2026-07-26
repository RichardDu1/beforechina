import { Metadata } from 'next';
import JournalCard from '@/components/JournalCard';

export const metadata: Metadata = {
  title: "Chasing Light: A Photographer's Guide to the Li River | BeforeChina Journal",
  description:
    'The exact spots, times, and seasons to capture the Li River at its most magical — from dawn mist to cormorant fishermen at sunset.',
  alternates: { canonical: '/journal/photographing-li-river' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/journal/photographing-li-river',
    title: "A Photographer's Guide to the Li River | BeforeChina Journal",
    description: 'The exact spots, times, and seasons to capture the Li River at its most magical.',
    images: [
      {
        url: '/images/destinations/guangxi-og.webp',
        width: 1200,
        height: 630,
        alt: 'Li River at dawn',
      },
    ],
  },
};

const RELATED = [
  {
    href: '/journal/great-wall-secrets',
    image: '/images/destinations/golden-triangle.webp',
    imageAlt: 'The Great Wall',
    title: 'What Nobody Tells You About the Great Wall',
    excerpt: 'Skip Badaling. Here is where to find the wild sections.',
    date: 'July 2026',
    category: 'Culture',
  },
  {
    href: '/journal/chengdu-street-food',
    image: '/images/destinations/sichuan.webp',
    imageAlt: 'Chengdu street food',
    title: 'Eating Your Way Through Chengdu',
    excerpt: 'Three days of pure Sichuan flavour.',
    date: 'June 2026',
    category: 'Food',
  },
];

export default function PhotographingLiRiverPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
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
          src="/images/destinations/guangxi.webp"
          alt="Li River at dawn with a cormorant fisherman"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

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
            Photography &middot; May 2026
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
            Chasing Light: A Photographer's Guide to the Li River
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-quote)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
            }}
          >
            The exact spots, times, and seasons to capture the Li River at its most magical.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-gap-sm) 0' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <div style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
            <p style={{ marginBottom: '24px' }}>
              The Li River between Guilin and Yangshuo is one of the most photographed landscapes in
              China — the karst peaks rising from the mist, the bamboo rafts drifting on emerald
              water, the cormorant fishermen silhouetted against the setting sun. It's the image on
              the 20 RMB note, and it's every bit as beautiful as the postcards suggest.
            </p>
            <p style={{ marginBottom: '24px' }}>
              But photographing it well requires timing, patience, and knowing where to stand. Here
              is everything you need to know.
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
              When to Go
            </h2>
            <p style={{ marginBottom: '24px' }}>
              April to October is the best window, but each season offers something different.
              April-May brings the famous mist — warm, humid air meeting the still-cool river
              creates ethereal fog that wraps around the peaks at dawn. June-August is lush and
              green but can be rainy. September-October has the clearest skies and the best golden
              hour light.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Avoid November-March — the river is low, the foliage is sparse, and the light is flat.
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
              The Best Locations
            </h2>
            <p style={{ marginBottom: '16px' }}>
              <strong>Xingping (兴坪).</strong> This is the 20 RMB note viewpoint — the most iconic
              stretch of the river. Arrive at 5:30am for sunrise. The best spot is the viewing
              platform on the west bank, a 20-minute walk from Xingping town. Bring a tripod — the
              light is low at dawn and you'll want a long exposure to smooth the water.
            </p>
            <p style={{ marginBottom: '16px' }}>
              <strong>Xianggong Hill (相公山).</strong> A 15-minute climb up stone steps leads to a
              viewing platform with a panoramic view of the river bending through a forest of karst
              peaks. This is the money shot for sunrise. There is a small entry fee. Get there by
              5:15am to claim a spot on the railing — it gets crowded by 5:45am.
            </p>
            <p style={{ marginBottom: '24px' }}>
              <strong>Yangdi to Xingping hike.</strong> The 16 km riverside trail is the best way to
              find compositions no one else has. You'll pass bamboo groves, water buffalo, and
              fishermen who still use cormorants. The light is best from 7am to 10am.
            </p>

            <blockquote className="pull">
              Arrive at 5:30am. The light is low at dawn and you'll want a long exposure to smooth
              the water. Bring a tripod.
            </blockquote>

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
              The Cormorant Fishermen
            </h2>
            <p style={{ marginBottom: '24px' }}>
              The cormorant fishermen on the Li River are mostly for show now — real cormorant
              fishing died out decades ago — but they make for extraordinary photographs. The
              fishermen and their birds are available for hire for a morning session. The best setup
              is at Xingping at dawn, with the fisherman on his bamboo raft, the birds poised on the
              bow, and a single lantern casting golden light on the scene.
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
              Gear Recommendations
            </h2>
            <p style={{ marginBottom: '16px' }}>
              A wide-angle zoom (16-35mm) is your primary lens for the big landscape shots. A
              70-200mm is essential for isolating individual peaks and compressing the layers of
              karst formations. A polarising filter helps cut through the haze and deepen the
              greens. And a sturdy tripod is non-negotiable for dawn and dusk work.
            </p>
            <p>
              Most importantly: bring patience. The Li River's best moments come in the 15 minutes
              before and after sunrise. If you miss it, you wait until tomorrow. That's the deal.
            </p>
          </div>
        </div>
      </section>

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
