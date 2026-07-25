import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Classic Silk Road Route (7-10 Days) | Xinjiang Travel Guide',
  description:
    'The classic Silk Road route through Xinjiang: Urumqi → Turpan → Korla → Kuqa → Kashgar. Heavenly Lake, Jiaohe Ruins, Kizil Caves, and Kashgar Bazaar in 7-10 days.',
  alternates: { canonical: '/xinjiang/silk-road' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many days do I need for the Silk Road in Xinjiang?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '7-10 days covers the classic highlight route from Urumqi to Kashgar. In 7 days you can do Urumqi → Turpan → Kashgar (fly the long leg). With 10 days, add Korla and Kuqa for the full Silk Road experience including the Kizil Thousand Buddha Caves.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit the Silk Road route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'April-May and September-October are ideal. Summer (June-August) is hot, especially in Turpan where temperatures hit 45°C (113°F). Winter (November-March) is cold but Kashgar and Urumqi are still accessible — and you will see far fewer tourists.',
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
    { '@type': 'ListItem', position: 3, name: 'Classic Silk Road Route', item: 'https://beforechina.com/xinjiang/silk-road' },
  ],
};

export default function SilkRoadPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="silk-road-schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Xinjiang · 7-10 Days</Kicker>
          <h1>Classic Silk Road: Urumqi to Kashgar</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>
            The route that Marco Polo took — Heavenly Lake, the Flaming Mountains of Turpan, thousand-year-old
            Buddhist caves at Kizil, and the legendary Kashgar Sunday Bazaar.
          </p>
        </div>
      </section>

      {/* Route Overview */}
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            className="article-card"
            style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}
          >
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div
              style={{
                display: 'flex',
                gap: '32px',
                flexWrap: 'wrap',
                marginBottom: '16px',
              }}
            >
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div>
                <div style={{ fontWeight: 600 }}>7-10 days</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div>
                <div style={{ fontWeight: 600 }}>Urumqi → Turpan → Korla → Kuqa → Kashgar</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div>
                <div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>$800-1,200/person</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              This is the classic introduction to Xinjiang. You start in the regional capital Urumqi,
              follow the northern arc of the Taklamakan Desert through ancient oasis towns, and finish
              in Kashgar — the heart of Central Asian Silk Road culture. The total driving distance is
              roughly 1,500 km, but you will fly the Korla-Kashgar leg (or take the 22-hour train if
              you&apos;re feeling adventurous).
            </p>
          </div>

          {/* Day-by-day */}
          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Day-by-Day Itinerary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                day: 'Days 1-2: Urumqi',
                content:
                  'Fly into Urumqi Diwopu (URC). Spend day one at Heavenly Lake (Tianchi) — a stunning alpine lake 110 km east of the city at 2,000m elevation, backed by snow-capped Bogda Peak. Day two: Xinjiang Regional Museum (see the 3,800-year-old Tarim mummies) and the Grand Bazaar. Urumqi is modern and Mandarin-speaking — a soft landing before the deeper Silk Road.',
                tip: 'Stay near Hongshan Park for easy access to both the museum and the bazaar. The Argyle Hotel has English-speaking staff and costs ~$50/night.',
              },
              {
                day: 'Days 3-4: Turpan',
                content:
                  'Take the 1-hour high-speed train to Turpan (¥55). This is China\'s lowest and hottest city — 154m below sea level in the Turpan Depression. Visit the Jiaohe Ruins (a 2,300-year-old Silk Road city carved into a plateau), the Emin Minaret, and the Grape Valley. Don\'t miss the karez irrigation system — an underground aqueduct network built 2,000 years ago that still works today.',
                tip: 'Turpan is brutally hot June-August (40°C+). Visit Jiaohe Ruins at sunrise — the light is magical and you will beat both the heat and the tour groups.',
              },
              {
                day: 'Days 5-6: Korla & Kuqa',
                content:
                  'Take the train to Korla (4 hrs), then transfer to Kuqa (2 hrs). Kuqa was the ancient Buddhist kingdom of Kucha. Visit the Kizil Thousand Buddha Caves — 236 caves carved into cliffs, with murals dating from the 3rd to 8th centuries, older than Dunhuang. Also see the Kuqa Grand Mosque and the old town\'s Sunday market.',
                tip: 'Kizil Caves are 75 km from Kuqa — hire a driver for the day (~¥400). Only a handful of caves are open to visitors. Photography is prohibited inside.',
              },
              {
                day: 'Days 7-8: Kashgar',
                content:
                  'Fly from Kuqa to Kashgar (1.5 hrs, ~¥700) or take the train (10 hrs overnight). Kashgar is the climax. Spend your first day at the Kashgar Sunday Bazaar — the largest outdoor market in Central Asia. It is not a tourist market; locals buy and sell livestock, carpets, spices, and everything else here. Day two: Id Kah Mosque (China\'s largest, built 1442), the Old City lanes, and Apak Khoja Mausoleum. In the evening, eat lamb kebabs at the night market near Id Kah.',
                tip: 'The Sunday Bazaar starts early (by 9am) and winds down by 2pm. Go early for the livestock section — it is the most atmospheric part. Bring cash; many vendors don\'t take digital payments.',
              },
            ].map((stop) => (
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

      {/* Practical Info */}
      <section style={{ padding: '0 0 64px', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px', paddingTop: '64px' }}>
            <Kicker>Practical Info</Kicker>
            <h2 style={{ fontSize: '32px' }}>Planning This Route</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Getting Between Cities</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>
                High-speed rail connects Urumqi → Turpan (1 hr) and Turpan → Korla (3 hrs). For Kuqa
                → Kashgar, flying is strongly recommended — the train takes 10 hours and flights are
                affordable (¥600-800). All cities have reliable Didi (China&apos;s Uber) for local
                transport.
              </p>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Where to Stay</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>
                All cities on this route have comfortable hotels in the ¥150-300/night range ($20-40).
                In Kashgar, stay in the Old City area for atmosphere — the Kashgar Old City Youth
                Hostel has a rooftop with views of the Id Kah minaret. In Urumqi, the area around
                Hongshan Park is central and walkable.
              </p>
            </div>
            <div className="article-card">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>What to Pack</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Sunscreen and a hat are non-negotiable — Xinjiang sun is intense, especially in the
                desert. A scarf or light jacket for mosque visits (shoulders covered). Download offline
                maps in Baidu Maps or Apple Maps before you go — Google Maps is inaccurate in China.
                A portable battery pack; you will use your phone for everything.
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
              description: 'Compare with Northern Loop, Karakoram, and desert routes',
            },
            {
              href: '/visa',
              label: 'Check visa requirements',
              description: 'See if you qualify for visa-free entry to China',
            },
            {
              href: '/esim',
              label: 'Get an eSIM for China',
              description: 'Land with internet that bypasses the firewall',
            },
          ]}
        />
        <SignatureCard />
      </div>
    </div>
  );
}
