import { Metadata } from 'next';
import Link from 'next/link';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Northern Xinjiang Loop (8-12 Days) | Kanas, Sayram Lake & Grasslands',
  description:
    'The Northern Xinjiang loop: Kanas Lake, Hemu Village, Sayram Lake, Kazakh grasslands, and Ghost City. Alpine scenery, autumn colours, and nomadic culture in 8-12 days.',
  alternates: { canonical: '/xinjiang/northern-loop' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is the best time to visit Northern Xinjiang?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Late September to early October is peak season for autumn foliage — the birch and poplar forests around Kanas Lake turn brilliant gold and red. June-July is best for green grasslands and wildflowers. May and September offer a sweet spot of good weather with fewer crowds and lower prices.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Kanas Lake?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fly from Urumqi to Kanas Airport (KJI) in Burqin County (1.5 hrs, ~¥800-1,200), then drive 1.5-2 hrs to the lake. Alternatively, take an overnight train from Urumqi to Beitun (10 hrs), then drive 4 hrs. The lake area has an entrance fee of ¥230 and you must use the park shuttle buses inside.',
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
    { '@type': 'ListItem', position: 3, name: 'Northern Xinjiang Loop', item: 'https://beforechina.com/xinjiang/northern-loop' },
  ],
};

const ITINERARY = [
  {
    day: 'Days 1-2: Urumqi → Kanas Lake',
    content: `Fly into Urumqi (URC). Spend one night, then take a morning flight to Kanas Airport (KJI, 1.5 hrs) or drive 8 hrs from Urumqi. Kanas Lake is a crescent-shaped alpine lake in the Altai Mountains, surrounded by Siberian larch and birch forests. The water shifts colour through the day — turquoise in the morning, deep blue at midday, emerald by afternoon. Take the park shuttle to the Fish-Watching Pavilion (观鱼台) for the panoramic view — 1,068 steps up but worth every one.`,
    tip: `Stay inside the park at one of the wooden guesthouses near the lake (¥300-600/night). This saves you the entrance fee on day 2 and gives you the lake at sunrise before the tour buses arrive.`,
  },
  {
    day: 'Days 3-4: Hemu Village',
    content: `Hemu Village is 60 km from Kanas but feels like a different century. It is a Tuvan and Kazakh village of wooden cabins in a valley ringed by birch forests. There is no "sight" here — you walk through the village at dawn as smoke rises from chimneys, cross the wooden bridge over the Hemu River, and climb the hillside for the classic view of the village in morning mist. In autumn, the surrounding hillsides are pure gold. In summer, everything is green and wildflowers carpet the meadows.`,
    tip: `The best photo spot is the hillside viewpoint on the east side of the village — a 20-minute climb from the river bridge. Go at 6:30am for sunrise mist. Bring a tripod if you are serious about photography.`,
  },
  {
    day: 'Days 5-6: Karamay & Ghost City',
    content: `Drive south from Kanas to Karamay (6-7 hrs). Karamay is an oil town, but the reason to stop here is the Ghost City (鬼城, also called Urho Wind-Erosion Landform) — a landscape of wind-carved sandstone formations that look like ruined castles, pagodas, and animals. Visit at sunset when the low light turns the rocks orange and red. The site has been used as a filming location for Crouching Tiger, Hidden Dragon.`,
    tip: `Ghost City entrance is ¥50. Sunset is around 7:30pm in summer, 6pm in autumn. There is a shuttle bus that loops through the formations — take it to the far end and walk back (3 km) for the best experience.`,
  },
  {
    day: 'Days 7-8: Sayram Lake',
    content: `From Karamay, drive west to Sayram Lake (5-6 hrs) — a massive alpine lake at 2,070m on the northern slope of the Tianshan Mountains. It is the largest and highest alpine lake in Xinjiang, nicknamed "the last tear of the Atlantic" because it is the furthest inland point reached by Atlantic moisture. The lake is surrounded by summer pastures where Kazakh herders graze horses and sheep. In June, the lakeshore explodes with wildflowers.`,
    tip: `You can camp or stay in a Kazakh yurt by the lake (¥150-200/person including dinner and breakfast). No showers, but the experience of waking up to the lake at sunrise is unmatched. The road around the lake is 90 km — a car is essential.`,
  },
  {
    day: 'Days 9-10: Yining & Return',
    content: `Continue west to Yining (2 hrs from Sayram), the capital of Ili Kazakh Autonomous Prefecture. Yining has a strong Russian influence — visit the Russian Quarter and the Ili River Bridge. In April, the apricot blossoms in the Ili Valley are spectacular. Fly back to Urumqi from Yining Airport (YIN, 1.5 hrs, ~¥600-800) or drive back (7 hrs).`,
    tip: `Yining Airport has flights to Urumqi roughly every 2 hours. Book the evening flight to maximise your last day. If you have extra time, Nalati Grassland (4 hrs east) is worth a detour — it is often called China's most beautiful grassland.`,
  },
];

export default function NorthernLoopPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="northern-loop-schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Xinjiang · 8-12 Days</Kicker>
          <h1>Northern Xinjiang Loop: Lakes, Mountains & Kazakh Grasslands</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            Kanas Lake in autumn gold, the wooden village of Hemu, Sayram Lake at 2,070m, and the
            endless green steppes of the Kazakh herders. This is the Xinjiang you see on postcards.
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div>
                <div style={{ fontWeight: 600 }}>8-12 days</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div>
                <div style={{ fontWeight: 600 }}>Urumqi → Kanas → Hemu → Karamay → Sayram → Yining</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Best Season</div>
                <div style={{ fontWeight: 600 }}>Late Sept for autumn; June-July for green</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div>
                <div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>$1,000-1,500/person</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Northern Xinjiang is a different world from the desert south. Here you find alpine
              forests, glacier-fed lakes, and rolling grasslands dotted with Kazakh yurts. This loop
              is the most photogenic route in Xinjiang — especially in late September when the birch
              forests turn gold. The driving distances are longer than the Silk Road route (roughly
              2,000 km total), so 10-12 days is more comfortable than 8.
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
                <div style={{ backgroundColor: 'var(--callout-bg-warm)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', fontSize: '14px', color: 'var(--text-secondary)' }}>
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
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>When to Go</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>
                <strong>Late Sept-early Oct:</strong> Peak autumn foliage. Book everything 2-3
                months ahead — Kanas accommodation sells out. <strong>June-July:</strong> Green
                grasslands, wildflowers, pleasant temperatures (20-28°C). <strong>May & Sept:
                </strong> Shoulder season — good weather, fewer crowds, prices ~30% lower.
                <strong>Winter (Nov-March):</strong> Kanas is accessible but buried in snow —
                beautiful if you are prepared for -20°C and limited services.
              </p>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Transportation</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                This route requires a private vehicle. Public transport exists between major towns
                (Urumqi, Karamay, Yining) but does not serve Kanas or Sayram Lake. Hire a car with
                driver in Urumqi — rates are ¥800-1,200/day including fuel and driver accommodation.
                Self-driving is possible but not recommended: road signs in remote areas are often
                Chinese-only and GPS is unreliable. Your hotel or a local agency (see our{' '}
                <Link href="/contact" style={{ color: 'var(--primary-color)' }}>contact page</Link>
                ) can arrange a driver.
              </p>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Where to Stay</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Accommodation in Northern Xinjiang ranges from international hotels in Urumqi ($50-80/
                night) to basic wooden guesthouses in Kanas and Hemu ($30-60/night). Yurts at Sayram
                Lake are the most atmospheric option ($15-25/person). Book Kanas and Hemu at least a
                month ahead in autumn. In smaller towns, your driver can recommend family-run
                guesthouses that are not on booking platforms.
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
              label: 'See all Xinjiang routes',
              description: 'Silk Road, Karakoram Highway, and Taklamakan Desert',
            },
            {
              href: '/budget',
              label: 'Plan your budget',
              description: 'Use our interactive calculator for this route',
            },
            {
              href: '/visa',
              label: 'Check visa requirements',
              description: 'See if your passport qualifies for visa-free entry',
            },
          ]}
        />
        <SignatureCard />
      </div>
    </div>
  );
}