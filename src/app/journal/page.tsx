import { Metadata } from 'next';
import Link from 'next/link';
import Kicker from '@/components/Kicker';
import JournalCard from '@/components/JournalCard';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Stories from China | BeforeChina Journal',
  description:
    'Travel stories, local knowledge, and photography guides from our China specialists on the ground. Real stories from real journeys.',
  alternates: { canonical: '/journal' },
  openGraph: {
    type: 'website',
    url: 'https://beforechina.com/journal',
    title: 'Stories from China | BeforeChina Journal',
    description:
      'Travel stories, local knowledge, and photography guides from our China specialists on the ground.',
    images: [
      {
        url: '/images/destinations/golden-triangle-og.webp',
        width: 1200,
        height: 630,
        alt: 'BeforeChina Journal',
      },
    ],
  },
};

const FEATURED = {
  href: '/journal/great-wall-secrets',
  image: '/images/destinations/golden-triangle.webp',
  imageAlt: 'The Great Wall winding through mountains at sunrise',
  title: 'What Nobody Tells You About the Great Wall',
  excerpt:
    'Skip Badaling. Here is where to find the wild, unrestored sections — and why sunrise is the only time to go.',
  date: 'July 2026',
  category: 'Culture',
};

const STORIES = [
  {
    href: '/journal/chengdu-street-food',
    image: '/images/destinations/sichuan.webp',
    imageAlt: 'Street food stall in Chengdu at night',
    title: 'Eating Your Way Through Chengdu: A Street Food Diary',
    excerpt:
      'From dan dan noodles at dawn to ma la hotpot at midnight — three days of pure Sichuan flavour.',
    date: 'June 2026',
    category: 'Food',
  },
  {
    href: '/journal/photographing-li-river',
    image: '/images/destinations/guangxi.webp',
    imageAlt: 'Li River at dawn with a cormorant fisherman',
    title: "Chasing Light: A Photographer's Guide to the Li River",
    excerpt: 'The exact spots, times, and seasons to capture the Li River at its most magical.',
    date: 'May 2026',
    category: 'Photography',
  },
  {
    href: '/journal/great-wall-secrets',
    image: '/images/destinations/golden-triangle.webp',
    imageAlt: 'Wild section of the Great Wall',
    title: 'Beijing Beyond the Forbidden City: 5 Hidden Temples',
    excerpt:
      'Five temples most tourists never find — from a Daoist sanctuary to a Tibetan monastery in the city centre.',
    date: 'April 2026',
    category: 'Culture',
  },
  {
    href: '/journal/chengdu-street-food',
    image: '/images/destinations/sichuan.webp',
    imageAlt: 'Mapo tofu in a Chengdu restaurant',
    title: "The Beginner's Guide to Sichuan Pepper",
    excerpt: 'What ma la actually means, how to eat it without crying, and why your lips go numb.',
    date: 'March 2026',
    category: 'Food',
  },
  {
    href: '/journal/photographing-li-river',
    image: '/images/destinations/yunnan.webp',
    imageAlt: 'Yuanyang rice terraces at sunrise',
    title: "Yuanyang Rice Terraces: A Photographer's Dream at Dawn",
    excerpt:
      'When the terraces fill with water and mirror the sky — how to time your visit perfectly.',
    date: 'February 2026',
    category: 'Photography',
  },
  {
    href: '/journal/great-wall-secrets',
    image: '/images/destinations/tibet.webp',
    imageAlt: 'Tibetan prayer flags in the wind',
    title: 'What It Feels Like to Stand at Everest Base Camp',
    excerpt:
      'Not a climbing story — just the raw experience of reaching 5,150 metres on the Tibetan plateau.',
    date: 'January 2026',
    category: 'Nature',
  },
];

export default function JournalPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Hero */}
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Journal</Kicker>
          <h1>Stories from China</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            Travel stories, local knowledge, and photography guides from our specialists on the
            ground.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section style={{ padding: 'var(--section-gap-sm) 0' }}>
        <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
          <JournalCard entry={FEATURED} variant="featured" />
        </div>
      </section>

      {/* Story Grid */}
      <section style={{ padding: '0 0 var(--section-gap-md)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
          <div style={{ marginBottom: '36px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(24px, 3vw, 30px)',
                fontWeight: 500,
              }}
            >
              More Stories
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '24px',
            }}
          >
            {STORIES.map((story) => (
              <JournalCard key={story.href + story.title} entry={story} variant="standard" />
            ))}
          </div>
        </div>
      </section>

      <EnquiryForm />
    </div>
  );
}
