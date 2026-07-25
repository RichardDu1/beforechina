import { Metadata } from 'next';
import Link from 'next/link';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import NextSteps from '@/components/NextSteps';
import TourCTA from '@/components/TourCTA';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Xinjiang Travel Guide (2026) | Routes, Permits & Local Tips',
  description:
    'Everything you need to know about traveling Xinjiang in 2026: best routes (Kashgar, Karakoram Highway, Kanas), permit requirements, transport logistics, and local food — from someone who knows a guide there.',
  alternates: { canonical: '/xinjiang' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Xinjiang safe for foreign tourists in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Despite Western media coverage, Xinjiang is safe for tourists. The region sees millions of domestic and international visitors annually. The main practical concerns are language barriers (Uyghur and Mandarin, limited English), permit requirements for certain areas, and long travel distances between cities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a special permit to visit Xinjiang?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Foreign tourists need the standard Chinese visa (or qualify for visa-free entry). No special Xinjiang permit is required for most areas including Urumqi, Kashgar, and Turpan. However, some border areas (Karakoram Highway beyond Tashkurgan, Kanas, parts of the Taklamakan) may require additional permits that your hotel or tour operator handles.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Xinjiang?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'May through October is the best window. July-August is peak season (hot in the desert basins, but perfect for the mountains). September-October offers the best weather and autumn colors in Kanas and the Tianshan range. Avoid November-March unless you specifically want winter scenery — temperatures drop to -20°C in the north.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Kashgar from Urumqi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The fastest way is a 2-hour flight from Urumqi (¥600-1000, multiple daily). The train takes 20-24 hours (hard sleeper ~¥350, soft sleeper ~¥550) and crosses the Taklamakan Desert. There is also a new high-speed rail connection via Korla, cutting travel time to about 12 hours. Driving the full distance takes 2-3 days.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Xinjiang Travel Guide',
      item: 'https://beforechina.com/xinjiang',
    },
  ],
};

const ROUTES = [
  {
    name: 'Classic Silk Road (7-10 days)',
    slug: '/xinjiang/silk-road',
    cities: 'Urumqi → Turpan → Korla → Kuqa → Kashgar',
    highlights: 'Heavenly Lake, Jiaohe Ruins, Kizil Thousand Buddha Caves, Kashgar Sunday Bazaar',
    bestFor: 'First-time visitors, history buffs',
    cost: '$800-1,200/person',
  },
  {
    name: 'Karakoram Highway (5-7 days)',
    slug: '/xinjiang/karakoram-highway',
    cities: 'Kashgar → Karakul Lake → Tashkurgan → Khunjerab Pass',
    highlights: 'Pamir Mountains, Karakul Lake at 3,600m, Tajik culture, Pakistan border',
    bestFor: 'Adventure travelers, photographers',
    cost: '$600-900/person',
  },
  {
    name: 'Northern Xinjiang Loop (8-12 days)',
    slug: '/xinjiang/northern-loop',
    cities: 'Urumqi → Burqin → Kanas → Hemu → Karamay → Sayram Lake → Yining',
    highlights: 'Kanas Lake, Hemu Village, Sayram Lake, Ghost City, Kazakh grasslands',
    bestFor: 'Nature lovers, hikers, autumn color chasers',
    cost: '$1,000-1,500/person',
  },
  {
    name: 'Taklamakan Desert Crossing (5-7 days)',
    slug: '/xinjiang/taklamakan-desert',
    cities: 'Korla → Desert Highway → Minfeng → Hotan → Kashgar',
    highlights: 'Taklamakan Desert, Hotan Sunday Market, desert highway, camel rides',
    bestFor: 'Adventure travelers, off-the-beaten-path',
    cost: '$700-1,000/person',
  },
];

export default function XinjiangPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="xinjiang-schema" />

      {/* Hero */}
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Xinjiang</Kicker>
          <h1>Xinjiang Travel Guide: Silk Road, Mountains &amp; Desert</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            Xinjiang is China&apos;s largest region — 1.6 million km² of Silk Road history, alpine
            lakes, and desert highways. I have a friend who runs a small-group guiding team based in
            Urumqi. This guide is what he tells his guests before they arrive.
          </p>
        </div>
      </section>

      {/* Why Xinjiang */}
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Why Xinjiang?</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
              Most first-time visitors to China do Beijing, Shanghai, and Xi&apos;an. That&apos;s a
              great trip — but it&apos;s also the same trip everyone does. Xinjiang is where you go
              when you want something completely different: Central Asian bazaars where vendors
              speak Uyghur, not Mandarin; alpine lakes at 3,600m that look like Switzerland; and the
              Karakoram Highway — one of the world&apos;s highest paved roads.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              It&apos;s also surprisingly affordable. A bowl of laghman (hand-pulled noodles) costs
              ¥15-25 ($2-3). A decent hotel in Kashgar runs ¥150-250/night ($20-35). Domestic
              flights between Urumqi and Kashgar start at ¥600 ($85). You can do a solid 10-day trip
              for under $1,200 per person including internal flights.
            </p>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section style={{ padding: '0 0 64px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <Kicker>Itineraries</Kicker>
            <h2 style={{ fontSize: '32px' }}>Four Classic Xinjiang Routes</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              From a quick Silk Road highlights tour to a full northern loop
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {ROUTES.map((route) => (
              <Link
                key={route.name}
                href={route.slug}
                className="article-card"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>{route.name}</h3>
                <div
                  style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '12px' }}
                >
                  <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    <strong style={{ color: 'var(--text-secondary)' }}>Route:</strong>{' '}
                    {route.cities}
                  </span>
                </div>
                <p
                  style={{ color: 'var(--text-secondary)', marginBottom: '8px', lineHeight: '1.6' }}
                >
                  <strong>Highlights:</strong> {route.highlights}
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '24px',
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                  }}
                >
                  <span>Best for: {route.bestFor}</span>
                  <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>
                    ~{route.cost}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section style={{ padding: '0 0 64px', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px', paddingTop: '64px' }}>
            <Kicker>Practical Info</Kicker>
            <h2 style={{ fontSize: '32px' }}>What to Know Before You Go</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Getting There &amp; Around</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Urumqi Diwopu International Airport (URC) has direct flights from Beijing (4 hrs),
                Shanghai (5 hrs), and several Central Asian capitals. Within Xinjiang, domestic
                flights are the most practical for long distances. High-speed rail connects Urumqi
                to Turpan (1 hr) and Korla (3 hrs). For the Karakoram Highway, you&apos;ll need a
                private vehicle with a driver — buses are unreliable and uncomfortable.
              </p>
            </div>

            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Permits &amp; Paperwork</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                For most of Xinjiang (Urumqi, Turpan, Kashgar city, Korla), your standard Chinese
                visa or visa-free entry is sufficient. For the Karakoram Highway beyond Tashkurgan
                (toward the Pakistan border), Kanas Nature Reserve, and some Taklamakan Desert
                crossings, your hotel or tour operator handles the paperwork — they&apos;ll take a
                copy of your passport and visa and register you. This usually takes 1-2 hours and
                costs ¥50-100.
              </p>
            </div>

            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Food You Must Try</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Xinjiang food is Central Asian, not Chinese. Think lamb skewers (kawap), hand-pulled
                noodles (laghman), pilaf rice (polo), and naan bread baked in tandoor ovens. In
                Kashgar, the Sunday Bazaar food section is legendary — grilled lamb ribs, fresh
                pomegranate juice, and samsa (meat pies). If you eat one thing in Xinjiang, make it
                dapanji (big plate chicken) — a spicy chicken and potato stew served with
                hand-pulled noodles.
              </p>
            </div>

            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>
                Internet &amp; Connectivity
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Xinjiang has the same Great Firewall restrictions as the rest of China, plus
                occasionally tighter mobile network controls in border areas. An international eSIM
                (see our{' '}
                <Link href="/esim" style={{ color: 'var(--primary-color)' }}>
                  eSIM guide
                </Link>
                ) is the most reliable option — it routes through Singapore and bypasses local
                restrictions. A VPN (see our{' '}
                <Link href="/vpn" style={{ color: 'var(--primary-color)' }}>
                  VPN guide
                </Link>
                ) is essential for hotel WiFi. Do not expect consistent 4G in remote areas like the
                Karakoram Highway — download offline maps before you go.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TourCTA />

      <NextSteps
        steps={[
          {
            href: '/visa',
            label: 'Check your visa',
            description: 'Visa-free entry now covers 30+ countries',
          },
          {
            href: '/esim',
            label: 'Get an eSIM for China',
            description: 'Bypass the firewall with international data',
          },
          { href: '/vpn', label: 'Set up a VPN', description: 'For hotel WiFi and laptop use' },
          {
            href: '/budget',
            label: 'Calculate your budget',
            description: 'See what a Xinjiang trip costs',
          },
        ]}
      />

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <SignatureCard />
      </div>
    </div>
  );
}
