import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Taklamakan Desert Crossing (5-7 Days) | Xinjiang Travel Guide',
  description:
    'Cross the Taklamakan Desert via the Desert Highway. Korla to Kashgar through the world\'s second-largest shifting sand desert, with stops in Minfeng, Hotan, and Yarkand.',
  alternates: { canonical: '/xinjiang/taklamakan-desert' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it safe to cross the Taklamakan Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — the Desert Highway (Tarim Desert Highway) is a fully paved 550 km road with guard rails, regular service stations, and cell phone coverage. It is regularly maintained and patrolled. The main risk is sandstorms in spring (March-May), which can reduce visibility to near zero. Check the weather forecast and avoid the highway during sandstorm warnings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is there to see in the Taklamakan Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beyond the desert itself, the southern route visits Hotan (Khotan) — famous for its Sunday Market, jade, and silk workshops; Minfeng — a small oasis town and the northern gateway to the desert; and Yarkand — a historic Silk Road kingdom with a 16th-century royal mausoleum. The desert highway itself is the main attraction: 550 km of sand dunes stretching to the horizon.',
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
    { '@type': 'ListItem', position: 3, name: 'Taklamakan Desert Crossing', item: 'https://beforechina.com/xinjiang/taklamakan-desert' },
  ],
};

const ITINERARY = [
  {
    day: 'Day 1: Korla',
    content: `Arrive in Korla (fly from Urumqi, 1 hr, ~¥500, or train 4 hrs). Korla is the gateway to the southern route and a pleasant mid-sized city famous for fragrant pears (Korla pears are China's best). Visit the Iron Gate (Tiemen Pass) — a historic Silk Road checkpoint in a narrow gorge 7 km north of the city — and the Bosten Lake if you have time. Stock up on water, snacks, and download offline maps before tomorrow's desert crossing.`,
    tip: `Fill your tank in Korla — there are gas stations on the desert highway but they are spaced roughly 100 km apart. A full tank will get you across.`,
  },
  {
    day: 'Day 2: Desert Highway (Korla → Minfeng)',
    content: `The main event. Leave Korla at sunrise and drive south onto the Tarim Desert Highway. The first 100 km are semi-desert scrub, then the vegetation disappears and you are in pure sand dunes. The road is dead straight for hundreds of kilometres — dunes on both sides, the Tarim River to the west, nothing but sand to the east for 300+ km. Stop at the marked viewpoints (there are pull-offs every 50 km or so) to walk into the dunes. The sand is finer than you expect, almost like talcum powder. Arrive in Minfeng by late afternoon. Total driving time: 6-7 hours with stops.`,
    tip: `The best dune photos are at the pull-offs around km 200-250, where the dunes are highest. Bring a scarf or buff — sand gets everywhere when the wind picks up. Do not drive off the paved road; you will get stuck.`,
  },
  {
    day: 'Days 3-4: Minfeng → Hotan',
    content: `From Minfeng, drive west to Hotan (300 km, 4-5 hrs). Hotan (Khotan) is one of the oldest continuously inhabited oasis towns on the Silk Road. The Sunday Market here rivals Kashgar's — it is less touristy and more chaotic in the best way: carpets, silk, jade, spices, livestock, and Uyghur street food in every direction. Visit the Hotan Silk Workshop where women weave silk on looms unchanged for centuries, and the White Jade River where locals still pan for jade. Spend two nights — one day for the market, one for the workshops and river.`,
    tip: `Hotan's Sunday Market is the real thing. You can buy raw jade pebbles from the river for ¥20-50 — most are low-grade but make great souvenirs. The silk workshop is free to visit and you can buy scarves direct from the weavers.`,
  },
  {
    day: 'Days 5-6: Hotan → Yarkand → Kashgar',
    content: `Drive from Hotan to Kashgar (500 km, 6-7 hrs) with a stop in Yarkand (Shache). Yarkand was once the capital of the Yarkand Khanate and rivals Kashgar in Silk Road importance, but sees a fraction of the tourists. Visit the Amanisahan Mausoleum (16th-century queen and poet) and the Yarkand Old City — a maze of mud-brick alleys that feels more authentic than Kashgar's renovated old town. Arrive in Kashgar by evening. If you have a 7th day, spend it exploring Kashgar's Old City, Id Kah Mosque, and the livestock bazaar.`,
    tip: `Yarkand is a hidden gem. The old city here has not been renovated for tourism — the mud-brick houses and narrow lanes are the real Silk Road. Stop for lunch at a local laghman shop; you will be the only foreigner there.`,
  },
];

export default function TaklamakanPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="taklamakan-schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Xinjiang · 5-7 Days</Kicker>
          <h1>Taklamakan Desert Crossing: The Southern Silk Road</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            550 km of paved road through the world&apos;s second-largest shifting sand desert. Oasis towns,
            jade markets, and camel rides — the southern route that most tourists skip.
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
                <div style={{ fontWeight: 600 }}>5-7 days</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div>
                <div style={{ fontWeight: 600 }}>Korla → Desert Highway → Minfeng → Hotan → Kashgar</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Distance</div>
                <div style={{ fontWeight: 600 }}>550 km desert section</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div>
                <div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>$700-1,000/person</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              The Taklamakan Desert — "the place of no return" in Uyghur — is the world&apos;s
              second-largest shifting sand desert. The Tarim Desert Highway cuts straight through
              its heart: 550 km of blacktop flanked by dunes up to 100m high, held back by a grid
              of straw checkerboard barriers and lines of drought-resistant poplars. This is the
              road less travelled in Xinjiang — while tourists crowd Kanas and Kashgar, you will
              see more camels than tour buses on this route.
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
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <strong>April-May and Sept-Oct</strong> are the best months — temperatures are
                moderate (20-30°C) and sandstorm risk is lower. <strong>Summer (June-August):
                </strong> Very hot — daytime temperatures in the desert can hit 45°C. If you go in
                summer, drive the desert section at dawn. <strong>Winter (Nov-March):</strong> Cold
                but doable — daytime temps around 0-10°C, nights below freezing. The highway
                remains open year-round. <strong>Avoid March-April</strong> if possible — this is
                sandstorm season and visibility can drop to zero.
              </p>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Desert Driving Tips</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>
                The Desert Highway is safe and well-maintained, but remote. Key tips:
              </p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Start at sunrise — the morning light on the dunes is spectacular and you avoid midday heat.</li>
                <li>Carry at least 5L of water per person and emergency food.</li>
                <li>Fill your tank at every gas station — the next one may be closed.</li>
                <li>Download offline maps (Baidu Maps or Maps.me) before leaving Korla.</li>
                <li>Tell your hotel in Minfeng your expected arrival time and call them when you arrive.</li>
                <li>Do not drive off the paved road — the sand will swallow your vehicle.</li>
              </ul>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>What to Pack</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Sunglasses (the glare off the sand is intense), a wide-brimmed hat, sunscreen (SPF
                50+), a scarf or buff for sand protection, layers (desert temperatures swing 15-20°C
                between day and night), hand sanitiser (service station bathrooms are basic), and a
                power bank (there are no charging points on the highway). If you are driving yourself,
                bring a tyre pressure gauge — you may need to air down slightly for the desert
                section.
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
              label: 'Compare all Xinjiang routes',
              description: 'Silk Road, Karakoram, and Northern Loop',
            },
            {
              href: '/esim',
              label: 'Get an eSIM for China',
              description: 'Essential — cell coverage is patchy in the desert',
            },
            {
              href: '/budget',
              label: 'Calculate your trip budget',
              description: 'See what this route costs with our calculator',
            },
          ]}
        />
        <SignatureCard />
      </div>
    </div>
  );
}