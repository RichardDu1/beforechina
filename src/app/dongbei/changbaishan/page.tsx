import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Changbaishan (4-5 Days) | North Korea Border Mountain & Heavenly Lake | BeforeChina',
  description:
    "Changbaishan's crater lake on the North Korean border, volcanic hot springs, and winter powder skiing — 4-5 days at China's most sacred mountain.",
  alternates: { canonical: '/dongbei/changbaishan' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/dongbei/changbaishan',
    title: 'Changbaishan (4-5 Days) | North Korea Border Mountain & Heavenly Lake | BeforeChina',
    description:
      "Changbaishan's crater lake on the North Korean border, volcanic hot springs, and winter powder skiing — 4-5 days at China's most sacred mountain.",
    images: [
      {
        url: '/images/destinations/dongbei.webp',
        width: 1200,
        height: 630,
        alt: 'Changbaishan Heavenly Lake crater on the North Korean border',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changbaishan (4-5 Days) | North Korea Border Mountain & Heavenly Lake | BeforeChina',
    description:
      "Changbaishan's crater lake on the North Korean border, volcanic hot springs, and winter powder skiing — 4-5 days at China's most sacred mountain.",
    images: ['/images/destinations/dongbei.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you actually see North Korea from Changbaishan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The crater lake is bisected by the China-North Korea border. From the western slope viewing platform (accessible from the Chinese side), you look across the lake at the North Korean side. You will see North Korean territory but not North Korean people — the North Korean side of the mountain is undeveloped. The border is marked by a stone pillar at the viewing platform. You can take photos but do not cross — the Chinese military patrols the area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this itinerary customizable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — every BeforeChina journey is 100% tailor-made. The itinerary above is a suggested framework. We can adjust the pace, add or remove stops, and tailor every detail to your interests.',
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
      name: 'Changbaishan: Heavenly Lake on the North Korean Border',
      item: 'https://beforechina.com/dongbei/changbaishan',
    },
  ],
};

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      {/* Full-bleed Hero Image */}
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
          src="/images/destinations/dongbei.webp"
          alt="Changbaishan Heavenly Lake crater on the North Korean border"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Dongbei &middot; 4-5 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Changbaishan: Heavenly Lake on the North Korean Border
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-quote)',
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            A volcanic crater lake straddling the China-North Korea border, natural hot springs in
            -30°C, and China\'s best powder skiing — Changbaishan is Dongbei\'s wildest destination.
          </p>
        </div>
      </section>

      {/* Trip Highlights */}
      <section style={{ padding: 'var(--section-gap-sm) 0' }}>
        <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
            {[
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
                title: '4–5 Days',
                description:
                  'The right amount of time for the Heavenly Lake, skiing at Wanda Resort, and the Korean border experience.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Changbaishan → Yanji',
                description:
                  "Fly into Changbaishan Airport — a dormant volcano on the China-North Korea border with China's best powder skiing.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Heavenly Lake, Volcanic Hot Springs, Powder Skiing',
                description:
                  "The world's highest volcanic crater lake, outdoor hot springs in -20°C, and dry powder on 43 runs.",
              },
            ].map((h) => (
              <div key={h.title} style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--primary-color)', marginBottom: '12px', opacity: 0.85 }}>
                  <span dangerouslySetInnerHTML={{ __html: h.icon }} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    fontWeight: 600,
                    marginBottom: '8px',
                  }}
                >
                  {h.title}
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '15px',
                    lineHeight: 1.5,
                    maxWidth: '280px',
                    margin: '0 auto',
                  }}
                >
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-by-Day Narrative */}
      <section style={{ padding: 'var(--section-gap-sm) 0', backgroundColor: 'var(--bg-surface)' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 3.5vw, 34px)',
              fontWeight: 500,
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            The Journey
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '17px',
              lineHeight: 1.8,
              marginBottom: '48px',
            }}
          >
            Changbaishan (长白山, \'Ever-White Mountain\') is a dormant volcano on the China-North
            Korea border. Its crater lake, Tianchi (天池, \'Heavenly Lake\'), sits at 2,189m and is
            the world\'s highest volcanic crater lake. The mountain is sacred to both Koreans (who
            consider it the birthplace of the Korean people) and Manchus (who considered it their
            ancestral homeland). In winter, Changbaishan offers China\'s best powder skiing at the
            Wanda Resort. In summer, it is a cool escape with wildflowers and alpine scenery. The
            North Korean border runs through the middle of the lake — you can literally look into
            North Korea from the viewing platform.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Arrive Changbaishan',
                content: `Fly into Changbaishan Airport (NBS) from Beijing (2 hrs), Shanghai (3 hrs), or Harbin (1 hr). The airport is 30 minutes from the Wanda Resort (万达度假区) — a ski resort town with hotels, restaurants, and hot springs. Check into your hotel. Afternoon: explore the resort, rent ski gear for tomorrow. Evening: outdoor hot springs — soaking in 40°C volcanic water while the air temperature is -20°C, steam rising into the pine forest.`,
                tip: `Changbaishan Airport (NBS) is small — 2-3 flights per day in winter, more in summer. Book flights 2-3 weeks ahead. The Wanda Resort is a purpose-built ski town (opened 2012) with international-standard hotels (Hyatt, Westin, Holiday Inn). It is expensive by Chinese standards but convenient. The hot springs are genuine volcanic springs — the water is rich in minerals and comes out of the ground at 60°C.`,
              },
              {
                day: 'Day 2: Changbaishan — Heavenly Lake (Winter)',
                content: `Take a 30-minute bus from Wanda Resort to the Changbaishan Western Slope entrance. In winter, the mountain is accessed by snowmobile from the shuttle bus stop to the crater rim. The ride is 10 minutes at -25°C — cover every inch of skin. At the rim, you emerge at the Heavenly Lake viewing platform at 2,189m. The lake is frozen solid from November to June — a white disc surrounded by black volcanic peaks. The wind at the rim is brutal (-30°C with wind chill). Spend 15-20 minutes (that is all you will manage in the cold), then snowmobile down. Afternoon: hot springs to recover. Evening: Korean BBQ (Changbaishan has a large ethnic Korean population).`,
                tip: `Heavenly Lake is visible about 30% of the time — clouds and snow close the mountain frequently. Check the forecast and go on the clearest day of your trip. The mountain opens at 8am — go early for the best visibility. The wind at the crater rim is the most intense cold you will ever experience. Seriously — ski goggles, balaclava, everything covered.`,
              },
              {
                day: 'Day 3: Changbaishan Skiing',
                content: `Full day skiing at Wanda Changbaishan International Resort. The resort has 43 ski runs across 5 mountains, with a vertical drop of 387m. The snow is dry powder (Changbaishan gets 1-2m of natural snowfall annually) — the best in China. The resort has a gondola, chairlifts, and magic carpets for beginners. Ski rental is available at the resort including skis, boots, poles, and helmet. Afternoon: snowmobile tour through the birch forest or a dog sled ride. Evening: Korean BBQ and soju.`,
                tip: `Wanda Changbaishan ski passes are higher in peak season (December-February) and more affordable in shoulder season. The resort is less crowded than Yabuli (Harbin) and the snow quality is better. The runs are intermediate-friendly — not extreme terrain. The resort has English-speaking instructors.`,
              },
              {
                day: 'Day 4: Changbaishan → Yanji (Optional)',
                content: `Option A: morning skiing or hot springs, then fly out from Changbaishan Airport. Option B: drive 3 hours to Yanji (延吉) — the capital of the Yanbian Korean Autonomous Prefecture. Yanji is a Chinese city that feels Korean: street signs in Chinese and Korean, Korean BBQ on every corner, and locals speaking Korean as their first language. Visit the Yanbian University area for Korean street food — tteokbokki (spicy rice cakes), kimbap (seaweed rice rolls), and naengmyeon (cold noodles). The Yanbian Korean culture is a unique Dongbei experience.`,
                tip: `Yanji is a fascinating cultural hybrid. The ethnic Koreans in Yanbian are Chinese citizens but speak Korean, watch South Korean TV, and maintain Korean cultural traditions. The Korean food in Yanji is authentic — many restaurants are run by families who have been in Dongbei for generations. The city is 30 minutes from the North Korean border (Tumen).`,
              },
              {
                day: 'Day 5: Yanji → Depart',
                content: `Morning: visit the Tumen border area (图们) — a bridge across the Tumen River where you can look into North Korea (the city of Namyang is visible). The border observation deck has telescopes pointed at the North Korean side. Afternoon: fly out from Yanji Chaoyangchuan Airport (YNJ) or take the 2-hour high-speed train to Changchun for connections.`,
                tip: `The Tumen border observation deck is a strange experience — Chinese tourists taking selfies while North Korean soldiers patrol the opposite bank. You can see Namyang\'s houses, a statue of Kim Il-sung, and sometimes people going about their day. It is the closest most people will get to North Korea.`,
              },
            ].map((stop, i) => (
              <div
                key={stop.day}
                style={{
                  padding: '40px 0',
                  borderBottom: i < 4 ? '1px solid var(--border-color)' : 'none',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '24px',
                    fontWeight: 500,
                    marginBottom: '12px',
                  }}
                >
                  {stop.day}
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '17px',
                    lineHeight: 1.8,
                    marginBottom: '16px',
                  }}
                >
                  {stop.content}
                </p>
                <blockquote className="pull" style={{ margin: '16px 0 0', fontSize: '16px' }}>
                  <strong>Local tip:</strong> {stop.tip}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailor-Made Signal */}
      <section style={{ padding: 'var(--section-gap-sm) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-quote)',
              fontSize: '18px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              fontStyle: 'italic',
            }}
          >
            This is a suggested itinerary. Every journey we design is tailored to your interests,
            pace, and budget.
          </p>
        </div>
      </section>

      {/* Enquiry Form */}
      <EnquiryForm />

      {/* Related Journeys */}
      <NextSteps
        steps={[
          {
            href: '/dongbei/harbin-snow-town',
            label: 'Harbin & Snow Town',
            description:
              "Combine with Harbin's Ice Festival for the full Dongbei winter experience.",
            image: '/images/destinations/dongbei.webp',
            imageAlt: 'Harbin ice sculptures at night',
            days: '5–6 days',
          },
          {
            href: '/golden-triangle/beijing-in-depth',
            label: 'Beijing In Depth',
            description:
              'Beijing is the gateway to Dongbei — fly via Beijing for a capital stopover.',
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '4–5 days',
          },
          {
            href: '/sichuan/chengdu-jiuzhaigou-huanglong',
            label: 'Chengdu & Jiuzhaigou',
            description: 'Head southwest for pandas and turquoise alpine lakes.',
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Jiuzhaigou turquoise lakes',
            days: '5–7 days',
          },
        ]}
      />
    </div>
  );
}
