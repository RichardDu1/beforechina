import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Guangzhou & Shenzhen: Cantonese Food & China's Silicon Valley | BeforeChina",
  description:
    "Guangzhou's 2,200-year-old temples and the birthplace of Cantonese cuisine, paired with Shenzhen — the fishing village that became China's richest city in 40 years.",
  alternates: { canonical: '/south-china/guangzhou-shenzhen' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/south-china/guangzhou-shenzhen',
    title: "Guangzhou & Shenzhen: Cantonese Food & China's Silicon Valley | BeforeChina",
    description:
      "Guangzhou's 2,200-year-old temples and the birthplace of Cantonese cuisine, paired with Shenzhen — the fishing village that became China's richest city in 40 years.",
    images: [
      {
        url: '/images/destinations/south-china.webp',
        width: 1200,
        height: 630,
        alt: 'Guangzhou Canton Tower skyline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Guangzhou & Shenzhen: Cantonese Food & China's Silicon Valley | BeforeChina",
    description:
      "Guangzhou's 2,200-year-old temples and the birthplace of Cantonese cuisine, paired with Shenzhen — the fishing village that became China's richest city in 40 years.",
    images: ['/images/destinations/south-china.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Shenzhen worth visiting as a tourist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Shenzhen is not a traditional tourist city — it has no ancient temples or UNESCO sites. But it is fascinating as a vision of China's future: futuristic architecture, the world's largest electronics market (Huaqiangbei), and a thriving maker/culture scene. It is also the gateway to Hong Kong (15 min by high-speed train to Kowloon). Visit Shenzhen for a day or two as part of a Guangzhou-Hong Kong loop.",
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
      name: "Guangzhou & Shenzhen: Cantonese Food & China's Silicon Valley",
      item: 'https://beforechina.com/south-china/guangzhou-shenzhen',
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
          src="/images/destinations/south-china.webp"
          alt="Guangzhou Canton Tower skyline"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>South China &middot; 4-5 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Guangzhou & Shenzhen: Cantonese Food & China\'s Silicon Valley
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
            Guangzhou\'s 2,200-year-old temples and the birthplace of Cantonese cuisine, paired with
            Shenzhen — the fishing village that became China\'s richest city in 40 years.
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
                  "Two sides of the Pearl River Delta — 2,200 years of Cantonese culture, then China's tech future in 40 years.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Guangzhou → Shenzhen → Hong Kong (optional)',
                description:
                  'Connected by a 30-minute high-speed train. The entire Greater Bay Area is within 30 minutes by rail.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Chen Clan Academy, Dim Sum, Huaqiangbei',
                description:
                  "The finest Lingnan architecture, the birthplace of dim sum, and the world's largest electronics market.",
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
            Guangzhou (Cantonese name: \'Canton\') is the capital of Cantonese culture and cuisine —
            a 2,200-year-old trading port where dim sum was invented and where the food is so
            central to local identity that Cantonese people say \'we eat everything with four legs
            except the table.\' Shenzhen, 30 minutes away by train, is Guangzhou\'s opposite: a
            fishing village of 30,000 people in 1980, now a metropolis of 17 million and the
            headquarters of Tencent, Huawei, and DJI. Together they represent southern China\'s past
            and future.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Guangzhou',
                content: `Fly into Guangzhou Baiyun Airport (CAN). Afternoon: Chen Clan Academy (陈家祠, ¥10) — an 1894 ancestral hall that is the finest surviving example of Lingnan architecture, with intricate ceramic friezes, wood carvings, and ivory sculptures on every surface. Walk Shamian Island (沙面) — a sandbank island that was the British-French concession, now a quiet neighbourhood of colonial buildings, banyan trees, and cafes. Evening: dinner at a traditional Cantonese restaurant — roast goose (烧鹅), white-cut chicken (白切鸡), and claypot rice (煲仔饭).`,
                tip: `The Chen Clan Academy (¥10) is one of Guangzhou\'s best sights and absurdly cheap. Every roof ridge, beam, and door panel is decorated with carvings and sculptures. It now houses the Guangdong Folk Art Museum. Go in the morning for the best light on the ceramic friezes.`,
              },
              {
                day: 'Day 2: Guangzhou — Food & Culture',
                content: `Morning: dim sum at Panxi Restaurant (泮溪酒家, est. 1947) or Dian Dou De (点都德, a popular chain with consistent quality). Cantonese dim sum is the original and best — har gow (shrimp dumplings), siu mai (pork dumplings), char siu bao (BBQ pork buns), and egg tarts. Afternoon: visit the Mausoleum of the Nanyue King (南越王墓, ¥12) — a 2,000-year-old tomb of a regional king from the Nanyue kingdom (204-111 BC), with a jade burial suit sewn with silk thread. Then Guangdong Museum (free, book ahead). Evening: Pearl River night cruise (¥55-95) for the Canton Tower light show.`,
                tip: `Cantonese dim sum is traditionally a morning affair (6am-11am), served from trolleys pushed by elderly ladies (\'aunties\') who call out the dishes. The best dim sum restaurants still do trolley service. The proper way to order: flag down a trolley, point at what you want, and the auntie stamps your card. Tea is essential — oolong, pu-erh, or jasmine.`,
              },
              {
                day: 'Day 3: Guangzhou → Shenzhen',
                content: `Take the 30-minute high-speed train from Guangzhou South to Shenzhen North (¥75). Shenzhen is a city built in a generation — 17 million people where there were 30,000 in 1980. Visit Huaqiangbei Electronics Market (华强北) — a multi-building district where you can buy every electronic component, gadget, and accessory in existence. It is the world\'s largest electronics market. If you want a custom phone, drone parts, or an obscure charging cable — this is where it exists. Afternoon: OCT-LOFT Creative Culture Park — a former factory complex turned into galleries, design studios, and cafes. Evening: dinner and drinks in the Shekou (蛇口) area — Shenzhen\'s expat neighbourhood with international restaurants and bars.`,
                tip: `Huaqiangbei is overwhelming — 10+ buildings, each with 5-7 floors of electronics stalls. The main building is SEG Electronics Market (赛格电子市场). The first 2 floors are consumer electronics (phones, drones, accessories), upper floors are components. Haggle — prices drop 20-30% if you negotiate. Even if you buy nothing, it is one of the most extraordinary market experiences in the world.`,
              },
              {
                day: 'Day 4: Shenzhen',
                content: `Morning: climb Lianhua Mountain (莲花山, free) — a city park with a giant bronze statue of Deng Xiaoping (the leader who created Shenzhen as China\'s first Special Economic Zone) and a panoramic view of Shenzhen\'s skyline. Visit the Shenzhen Museum (free) for the story of how a fishing village became China\'s richest city. Afternoon: Dafen Oil Painting Village (大芬油画村) — a neighbourhood where thousands of painters produce replica oil paintings. You can commission a custom painting (¥100-500) or buy an off-the-shelf replica of Van Gogh, Monet, or classical Chinese art. Evening: option to continue to Hong Kong (15 min by high-speed train from Shenzhen North, ¥75).`,
                tip: `The Deng Xiaoping statue on Lianhua Mountain faces Hong Kong — symbolic. The Shenzhen Museum\'s \'Reform and Opening Up\' exhibition is fascinating propaganda: it tells the Shenzhen story as a triumph of Communist Party policy. Dafen Village produces 60% of the world\'s replica oil paintings. Artists paint assembly-line style — one does skies, another trees, another faces.`,
              },
              {
                day: 'Day 5: Departure or Hong Kong',
                content: `Option A: Fly out from Shenzhen Bao\'an Airport (SZX) or Guangzhou (CAN). Option B: take the 15-minute high-speed train from Shenzhen North to Hong Kong West Kowloon (¥75) and continue to Hong Kong (see the Hong Kong & Macau route).`,
                tip: `Shenzhen airport (SZX) has good connections to major Chinese cities and international flights to Southeast Asia. The airport express (Line 11) from the city centre takes 30 minutes (¥8). If flying from Guangzhou (CAN), the train from Shenzhen to Guangzhou is 30 minutes (¥75).`,
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
            href: '/south-china/hong-kong-macau',
            label: 'Hong Kong & Macau',
            description: 'Continue to the SARs — 15 minutes from Shenzhen by high-speed train.',
            image: '/images/destinations/south-china.webp',
            imageAlt: 'Hong Kong Victoria Harbour skyline',
            days: '4–5 days',
          },
          {
            href: '/guangxi/guilin-yangshuo-lijiang',
            label: 'Guilin & Yangshuo',
            description: '2.5 hours by train from Guangzhou to the karst peaks and Li River.',
            image: '/images/destinations/guangxi.webp',
            imageAlt: 'Guilin karst peaks along the Li River',
            days: '4–5 days',
          },
          {
            href: '/golden-triangle/beijing-xian-shanghai',
            label: 'Golden Triangle',
            description: "Head north to Beijing, Xi'an, and Shanghai for the classic route.",
            image: '/images/destinations/golden-triangle.webp',
            imageAlt: 'The Forbidden City in Beijing',
            days: '8–10 days',
          },
        ]}
      />
    </div>
  );
}
