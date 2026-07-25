import { Metadata } from 'next';
import Link from 'next/link';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Karakoram Highway Route (5-7 Days) | Xinjiang Travel Guide',
  description:
    'Drive the Karakoram Highway from Kashgar to the Pakistan border. Karakul Lake at 3,600m, Tajik villages, Pamir Mountains, and Khunjerab Pass — one of the world\'s highest paved roads.',
  alternates: { canonical: '/xinjiang/karakoram-highway' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How difficult is the Karakoram Highway drive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The road is paved and in good condition, but it climbs from 1,300m (Kashgar) to 4,700m (Khunjerab Pass) in under 400 km. Altitude sickness affects most travellers above 3,500m. You do not need a 4x4 — a standard SUV with a local driver is sufficient. The drive from Kashgar to Tashkurgan takes 6-8 hours with photo stops.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I cross into Pakistan from Khunjerab Pass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — Khunjerab Pass is an official border crossing open May through November (closed in winter due to snow). You need a Pakistan visa in advance and the China-Pakistan border crossing permit. Most travellers visit the pass as a day trip from Tashkurgan and return to Kashgar rather than crossing into Pakistan, as the Pakistani side has limited onward transport.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Xinjiang Travel Guide', item: 'https://beforechina.com/xinjiang' },
    { '@type': 'ListItem', position: 3, name: 'Karakoram Highway', item: 'https://beforechina.com/xinjiang/karakoram-highway' },
  ],
};

const ITINERARY = [
  {
    day: 'Day 1: Kashgar',
    content: `Arrive in Kashgar (fly from Urumqi). Spend the day acclimatising and exploring the Old City. The Id Kah Mosque, Apak Khoja Mausoleum, and the labyrinthine alleys of the old town are all walkable. In the evening, eat at the night market — the lamb kebabs (kawap) here are the best in China. Arrange a driver for tomorrow morning through your hotel or a local agency.`,
    tip: `Book your driver the night before. A private car with driver for the KKH costs ¥800-1,200/day. Your driver will also handle the police checkpoint registrations, which you cannot do yourself.`,
  },
  {
    day: 'Day 2: Kashgar → Karakul Lake (200 km, 4-5 hrs)',
    content: `Leave Kashgar early (7am). The first 80 km are flat desert, then the road climbs through the Gez River canyon — red sandstone cliffs on both sides. At the Opal checkpoint, your driver registers with the police (30-45 min). After the checkpoint, the valley opens up and you see your first snow peaks. By early afternoon you reach Karakul Lake at 3,600m — a shockingly blue alpine lake with Muztagh Ata (7,546m) reflected in its surface. Stay overnight in a Kyrgyz yurt camp on the lake shore.`,
    tip: `The yurt camps have no heating and temperatures drop to near freezing even in summer. Bring a warm sleeping bag. There is no running water — wet wipes are your friend.`,
  },
  {
    day: 'Days 3-4: Karakul → Tashkurgan (100 km, 2 hrs)',
    content: `Morning at Karakul Lake — walk the shoreline, photograph the sunrise on Muztagh Ata, and visit the Kyrgyz herder families who live here year-round. Midday, continue south to Tashkurgan (Tajik Autonomous County). The road crosses the 4,100m Subash Pass, then descends into the Tashkurgan Valley. Tashkurgan is a Tajik-majority town with stone houses, poplar-lined streets, and a 1,300-year-old stone fortress. Spend two nights here to acclimatise before the pass. Visit the Stone Fortress, the Tajik museum, and the grasslands outside town where yaks graze.`,
    tip: `Tashkurgan is at 3,100m — you will feel the altitude. Walk slowly, drink water constantly, and avoid alcohol. The Crowne Plaza Tashkurgan is the only international-standard hotel (~$80/night).`,
  },
  {
    day: 'Day 5: Khunjerab Pass & Return',
    content: `Leave Tashkurgan at 7am for Khunjerab Pass (125 km, 2.5 hrs). The road climbs steadily past grazing yaks and occasional camel herds. At the pass (4,700m), you are standing at the Pakistan border — snow-covered peaks in every direction. There is a Chinese border post with a large sign for photos. Spend 30-45 minutes (longer and the altitude hits hard), then drive back to Tashkurgan for the night or push through to Kashgar if you are short on time.`,
    tip: `The pass is open May-November. Even in July, temperatures at the pass are around 5-10°C. Bring a down jacket. The border police may deny access without warning due to military activity — your driver will know before you leave Tashkurgan.`,
  },
];

export default function KarakoramPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="karakoram-schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Xinjiang · 5-7 Days</Kicker>
          <h1>Karakoram Highway: Kashgar to the Roof of the World</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            One of the world&apos;s highest paved roads — through the Pamir Mountains, past a lake at 3,600m,
            through Tajik stone villages, to the Pakistan border at 4,700m.
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            className="article-card"
            style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}
          >
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div>
                <div style={{ fontWeight: 600 }}>5-7 days</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div>
                <div style={{ fontWeight: 600 }}>Kashgar → Karakul Lake → Tashkurgan → Khunjerab Pass</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Max Elevation</div>
                <div style={{ fontWeight: 600 }}>4,700m (Khunjerab Pass)</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div>
                <div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>$600-900/person</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              The Karakoram Highway (KKH) is the highest paved international road in the world,
              connecting Kashgar, China to Islamabad, Pakistan. The Chinese side — from Kashgar to
              Khunjerab Pass — is roughly 400 km of increasingly dramatic scenery: red sandstone
              canyons give way to sand dunes, then snow-capped 7,000m peaks of the Pamir and
              Kunlun ranges. This is the route that ancient Silk Road traders took, and the
              landscape has barely changed.
            </p>
          </div>

          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Day-by-Day Itinerary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {ITINERARY.map((stop) => (
              <div key={stop.day} className="article-card">
                <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--primary-color)' }}>
                  {stop.day}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }}>
                  {stop.content}
                </p>
                <div
                  style={{
                    backgroundColor: 'var(--callout-bg-warm)',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <strong style={{ color: 'var(--accent-warm)' }}>Local tip:</strong> {stop.tip}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 64px', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px', paddingTop: '64px' }}>
            <Kicker>Practical Info</Kicker>
            <h2 style={{ fontSize: '32px' }}>Planning This Route</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Altitude & Safety</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                This route goes from 1,300m to 4,700m. Acute Mountain Sickness (AMS) is a real risk
                above 3,500m. Symptoms include headache, nausea, and shortness of breath. The best
                prevention: spend 2 nights at Karakul (3,600m) before going to Khunjerab (4,700m).
                Diamox (acetazolamide) helps but requires a prescription. If symptoms worsen, descend
                immediately — Tashkurgan is 400m lower than Karakul and Kashgar is at 1,300m.
              </p>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Permits & Paperwork</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Your driver handles most paperwork. You need your passport and Chinese visa (or
                visa-free entry proof). At the Gez checkpoint, police register your entry to the
                border zone — this is routine and takes 30-45 minutes. No special permit is required
                for foreign tourists on the KKH as of 2026, but rules can change. Your hotel or
                driver will know the current situation.
              </p>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Internet & Connectivity</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Mobile signal is patchy beyond Karakul Lake. Download offline maps before leaving
                Kashgar. An international eSIM (see our{' '}
                <Link href="/esim" style={{ color: 'var(--primary-color)' }}>eSIM guide</Link>
                ) is the most reliable option — it routes through Singapore or Hong Kong. A VPN is
                essential for Kashgar hotel WiFi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <TourCTA />
        <NextSteps
          steps={[
            {
              href: '/xinjiang',
              label: 'Compare Xinjiang routes',
              description: 'Silk Road, Northern Loop, or Taklamakan Desert',
            },
            {
              href: '/esim',
              label: 'Get an eSIM for China',
              description: 'Essential for remote areas with no WiFi',
            },
            {
              href: '/vpn',
              label: 'Set up a VPN',
              description: 'For hotel WiFi in Kashgar and Urumqi',
            },
          ]}
        />
        <SignatureCard />
      </div>
    </div>
  );
}
