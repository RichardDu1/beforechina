import { Metadata } from 'next';
import JournalCard from '@/components/JournalCard';

export const metadata: Metadata = {
  title: 'Eating Your Way Through Chengdu: A Street Food Diary | BeforeChina Journal',
  description:
    "From dan dan noodles at dawn to ma la hotpot at midnight — three days of pure Sichuan flavour in China's food capital.",
  alternates: { canonical: '/journal/chengdu-street-food' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/journal/chengdu-street-food',
    title: 'Eating Your Way Through Chengdu | BeforeChina Journal',
    description: 'From dan dan noodles at dawn to ma la hotpot at midnight.',
    images: [
      {
        url: '/images/destinations/sichuan-og.webp',
        width: 1200,
        height: 630,
        alt: 'Chengdu street food',
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
    href: '/journal/photographing-li-river',
    image: '/images/destinations/guangxi.webp',
    imageAlt: 'Li River at dawn',
    title: "A Photographer's Guide to the Li River",
    excerpt: 'The exact spots and times for the perfect shot.',
    date: 'May 2026',
    category: 'Photography',
  },
];

export default function ChengduStreetFoodPage() {
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
          src="/images/destinations/sichuan.webp"
          alt="Street food stall in Chengdu at night"
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
            Food &middot; June 2026
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
            Eating Your Way Through Chengdu: A Street Food Diary
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-quote)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
            }}
          >
            From dan dan noodles at dawn to ma la hotpot at midnight — three days of pure Sichuan
            flavour.
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
              Chengdu is not a city you visit for the sights. It's a city you visit for the food.
              UNESCO named it a City of Gastronomy in 2010, and for good reason — this is where
              Sichuan cuisine, one of China's eight great culinary traditions, was born.
            </p>
            <p style={{ marginBottom: '24px' }}>
              But Sichuan food in Chengdu is not the Sichuan food you know from your local Chinese
              takeaway. It's bolder, more complex, and far more varied. The defining flavour is
              <em> ma la </em> — the numbing heat of Sichuan peppercorns combined with dried
              chillies — but the cuisine also has delicate steamed dishes, cold appetisers, and
              sweets that balance the fire.
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
              Day 1: The Classics
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Start at a <em>dan dan mian</em> stall for breakfast — thin wheat noodles in a bowl of
              chilli oil, sesame paste, minced pork, and preserved vegetables. The best ones are the
              hole-in-the-wall shops with three plastic tables and a queue out the door. If there's
              no queue, keep walking.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Lunch: <em>mapo doufu</em> at Chen Mapo Tofu, the dish's namesake restaurant. The tofu
              arrives in a bubbling clay pot, swimming in bright red oil, topped with a blizzard of
              ground Sichuan pepper. The first bite numbs your lips. By the third bite, you
              understand why this dish has been famous for 160 years.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Dinner: hotpot at Shujiuxiang. The broth is a cauldron of red oil, chillies, and
              Sichuan peppercorns. You cook your own food — thin-sliced beef, lotus root, tofu skin,
              tripe — dipping each piece into a bowl of sesame oil and garlic. The heat builds
              slowly, then plateaus into a warm, tingling euphoria.
            </p>

            <blockquote className="pull">
              The first bite numbs your lips. By the third bite, you understand why this dish has
              been famous for 160 years.
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
              Day 2: Street Food Marathon
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Jinli Ancient Street is touristy but essential — it's a concentrated version of
              Sichuan street food. Work your way through: <em>chuan chuan</em> (skewers in spicy
              broth),
              <em> long chaoshou </em> (dragon wontons in chilli oil), <em>fu qi fei pian</em>
              (husband-and-wife lung slices — beef and offal in spiced sauce), and
              <em> tang you guozi </em> (glazed sweet potato balls) for dessert.
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
              Day 3: The Refined Side
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Sichuan cuisine isn't all fire. For your last day, seek out the delicate dishes:
              <em> kaishui baicai </em> (Napa cabbage in supreme broth) at a high-end Sichuan
              restaurant, <em> dan hong gao </em> (sweet egg cake) from a street vendor, and a
              proper <em> gongfu cha </em> tea ceremony in a quiet teahouse near the river.
            </p>
            <p>
              Chengdu rewards the hungry. Come with an empty stomach and an open mind — the ma la
              will change you.
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
