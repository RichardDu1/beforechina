import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Harbin & Snow Town (5-6 Days) | Dongbei Winter Wonderland | BeforeChina',
  description:
    "Harbin's Ice and Snow Festival — the world's largest ice sculpture event — plus Snow Town's deep powder landscapes and Dongbei winter food culture.",
  alternates: { canonical: '/dongbei/harbin-snow-town' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/dongbei/harbin-snow-town',
    title: 'Harbin & Snow Town (5-6 Days) | Dongbei Winter Wonderland | BeforeChina',
    description:
      "Harbin's Ice and Snow Festival — the world's largest ice sculpture event — plus Snow Town's deep powder landscapes and Dongbei winter food culture.",
    images: [
      {
        url: '/images/destinations/dongbei.webp',
        width: 1200,
        height: 630,
        alt: 'Harbin Ice and Snow World illuminated at night',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harbin & Snow Town (5-6 Days) | Dongbei Winter Wonderland | BeforeChina',
    description:
      "Harbin's Ice and Snow Festival — the world's largest ice sculpture event — plus Snow Town's deep powder landscapes and Dongbei winter food culture.",
    images: ['/images/destinations/dongbei.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How cold does it really get in Harbin in winter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Daytime temperatures in January average -18°C and drop to -30°C at night. With wind chill, it can feel like -40°C. You need proper winter gear: thermal base layers, a down jacket rated to -30°C, insulated snow boots, a balaclava, ski goggles (your eyelashes freeze otherwise), and hand warmers. This is not a fashion trip. The ice sculptures are outside and you will be standing on frozen rivers for hours. Prepare accordingly.',
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
      name: "Harbin & Snow Town: China's Winter Wonderland",
      item: 'https://beforechina.com/dongbei/harbin-snow-town',
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
          alt="Harbin Ice and Snow World illuminated at night"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Dongbei &middot; 5-6 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Harbin & Snow Town: China\'s Winter Wonderland
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
            The world\'s largest ice sculpture festival, a village buried under 2 metres of powder
            snow, and the warmth of Dongbei cuisine in -30°C — this is winter in China\'s far
            northeast.
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
                title: '5–6 Days',
                description:
                  'The perfect winter escape — enough time for the Ice Festival, Snow Town, and Dongbei cuisine.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Harbin → Snow Town → Yabuli',
                description:
                  "The classic Dongbei winter loop through the Russian-influenced city, deep-powder village, and China's biggest ski resort.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Ice & Snow World, Snow Town, Siberian Tigers',
                description:
                  "The world's largest ice sculpture festival, a village under 2m of powder, and 500+ Siberian tigers.",
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
            Dongbei (东北, \'Northeast\') is China\'s Manchuria — the three provinces of
            Heilongjiang, Jilin, and Liaoning, bordering Russia and North Korea. In winter, it
            becomes one of the world\'s most extreme cold-weather destinations. Harbin\'s
            International Ice and Snow Sculpture Festival is the largest of its kind: entire
            buildings (castles, cathedrals, pagodas) sculpted from blocks of ice pulled from the
            frozen Songhua River, illuminated in neon at night. China Snow Town (中国雪乡), 5 hours
            from Harbin, is a village buried under 2 metres of powder snow — thanks to a unique
            microclimate where Siberian cold fronts meet moist air from the Sea of Japan. This route
            is a winter-only trip (December-February).
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Arrive Harbin',
                content: `Fly into Harbin Taiping Airport (HRB). Transfer to hotel. Afternoon: Central Street (中央大街) — a 1.4km pedestrian street of Russian-style buildings from the early 1900s, when Harbin was a Russian railway town. The cobblestones are original, shipped from Russia in the 1920s. Visit St. Sophia Cathedral (圣索菲亚教堂, ¥20) — a Russian Orthodox cathedral built in 1907, now a museum of Harbin\'s Russian history. Evening: hotpot — the Dongbei version uses lamb and sauerkraut (酸菜), a legacy of Harbin\'s Russian and Manchu heritage.`,
                tip: `Harbin was built by Russians. The city was a stop on the Trans-Siberian Railway and had a Russian population of 100,000 in the 1920s. The architecture on Central Street is genuine — not a theme park. The best way to understand Harbin is to think of it as a Russian city that happens to be in China.`,
              },
              {
                day: 'Day 2: Harbin — Ice & Snow World',
                content: `Afternoon-evening: Harbin Ice and Snow World (哈尔滨冰雪大世界, ¥330) — the main event. The park covers 600,000 m² and features buildings, castles, slides, and sculptures all made of ice blocks from the Songhua River. The ice is 50-80cm thick and crystal clear. Go at 3pm to see the sculptures in daylight (they are blue-white) and stay for the neon light show after dark (4:30pm in winter). The ice slides are terrifying and essential. The temperature inside the park is -25°C to -35°C — dress like you are going to the Arctic.`,
                tip: `Ice and Snow World ticket: ¥330 (book on Trip.com or at the gate). The ice slides are free — the queue for the longest slide (300m) can be 1 hour. Go on a weekday to avoid the worst crowds. The park has warming huts with hot drinks (¥20-30) — use them every 45 minutes. Frostbite is a real risk. If your fingers or toes go numb, go inside immediately.`,
              },
              {
                day: 'Day 3: Harbin → Snow Town',
                content: `Drive 5 hours from Harbin to China Snow Town (中国雪乡, ¥120). Snow Town is a village in a mountain valley where a unique microclimate produces reliable, deep powder snow — 2 metres accumulation from November to March. The village is a cluster of wooden houses with distinctive mushroom-shaped snow caps on the roofs. Walk the main street, climb the wooden walkway to the observation deck for the classic Snow Town panorama (red lanterns glowing against the white snow at dusk), and try sledding and snow tubing. Stay overnight in a local guesthouse (kang bed — a heated brick platform).`,
                tip: `Snow Town entrance: ¥120 (includes shuttle bus). The village is remote — 5 hours from Harbin on icy roads. Book transport through your hotel or a tour company. The guesthouses have kang beds (炕) — a heated brick platform you sleep on. It is the traditional Dongbei heating method and is genuinely warm. The food in Snow Town is basic and expensive by Chinese standards (¥50-80/person for a simple meal) — it is remote.`,
              },
              {
                day: 'Day 4: Snow Town → Yabuli → Harbin',
                content: `Morning: final Snow Town photos in the early light (the snow is at its most pristine before the crowds). Then drive 2.5 hours to Yabuli Ski Resort (亚布力滑雪场) — China\'s largest ski resort. Yabuli has 46 ski runs and hosted the 1996 Asian Winter Games. A half-day lift pass is ¥300-500. If you are a beginner, take a lesson (¥200/hr) — the instructors speak basic English. Afternoon: drive 3 hours back to Harbin. Evening: Harbin beer and Russian food on Central Street.`,
                tip: `Yabuli is China\'s best ski resort but it is not Whistler or Chamonix. Manage expectations: the snow is partly natural, partly artificial. The runs are shorter and the facilities are older than Western resorts. But skiing in China is an experience in itself, and the Dongbei winter landscape is unique. Rent gear at the resort (¥200-300/set).`,
              },
              {
                day: 'Day 5: Harbin',
                content: `Morning: Sun Island Snow Sculpture Expo (太阳岛雪博会, ¥240) — the daytime counterpart to Ice and Snow World, featuring massive snow sculptures (not ice) carved by international teams. The sculptures are up to 30m high and incredibly detailed. Afternoon: Siberian Tiger Park (东北虎林园, ¥110) — a controversial but unique wildlife park with 500+ Siberian tigers. You ride in a caged bus through the enclosures. You can buy meat (¥50-200) to feed the tigers through the bus bars. Evening: Harbin dumpling feast — Dongbei dumplings (饺子) are the best in China.`,
                tip: `The Sun Island Snow Sculpture Expo is less famous than Ice and Snow World but arguably more impressive artistically — the sculptures are enormous (up to 30m) and the detail achievable in snow is finer than ice. The Siberian Tiger Park is uncomfortable viewing for some — the tigers are in enclosures and the feeding is commercialised. It is up to you whether to visit.`,
              },
              {
                day: 'Day 6: Harbin → Depart',
                content: `Fly out from Harbin. If your flight is in the evening, visit the Unit 731 Museum (free, 1.5 hrs from Harbin centre) — a Japanese biological warfare research facility from WWII, now a somber museum. It is heavy but historically important. Alternatively, visit the Harbin Polarland (¥150) for beluga whale shows and penguins — lighter fare for a departure day.`,
                tip: `Harbin airport is 35 km from the city (40-60 min by taxi, ¥120-150). The airport bus (¥20) departs from Central Street. In winter, allow extra time — snow can delay traffic. The airport is small and efficient — 1 hour before your flight is sufficient.`,
              },
            ].map((stop, i) => (
              <div
                key={stop.day}
                style={{
                  padding: '40px 0',
                  borderBottom: i < 5 ? '1px solid var(--border-color)' : 'none',
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
            href: '/dongbei/changbaishan',
            label: 'Changbaishan',
            description:
              'Add the North Korean border mountain and hot springs to your Dongbei trip.',
            image: '/images/destinations/dongbei.webp',
            imageAlt: 'Changbaishan Heavenly Lake crater',
            days: '4–5 days',
          },
          {
            href: '/golden-triangle/beijing-in-depth',
            label: 'Beijing In Depth',
            description: 'Beijing is 2 hours from Harbin by high-speed train.',
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '4–5 days',
          },
          {
            href: '/sichuan/chengdu-jiuzhaigou-huanglong',
            label: 'Chengdu & Jiuzhaigou',
            description: 'Swap snow for pandas and turquoise lakes in Sichuan.',
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Jiuzhaigou turquoise lakes',
            days: '5–7 days',
          },
        ]}
      />
    </div>
  );
}
