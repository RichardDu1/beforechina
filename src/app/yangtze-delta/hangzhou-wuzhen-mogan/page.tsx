import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Hangzhou, Wuzhen & Moganshan: Tea, Water Towns & Mountain Retreats | BeforeChina',
  description:
    "Hangzhou's tea terraces at dawn, Wuzhen's lantern-lit canals after the day-trippers leave, and Moganshan's bamboo forests — a slower, deeper Yangtze Delta.",
  alternates: { canonical: '/yangtze-delta/hangzhou-wuzhen-mogan' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/yangtze-delta/hangzhou-wuzhen-mogan',
    title: 'Hangzhou, Wuzhen & Moganshan: Tea, Water Towns & Mountain Retreats | BeforeChina',
    description:
      "Hangzhou's tea terraces at dawn, Wuzhen's lantern-lit canals after the day-trippers leave, and Moganshan's bamboo forests — a slower, deeper Yangtze Delta.",
    images: [
      {
        url: '/images/destinations/yangtze-delta.webp',
        width: 1200,
        height: 630,
        alt: 'Hangzhou West Lake and tea terraces',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hangzhou, Wuzhen & Moganshan: Tea, Water Towns & Mountain Retreats | BeforeChina',
    description:
      "Hangzhou's tea terraces at dawn, Wuzhen's lantern-lit canals after the day-trippers leave, and Moganshan's bamboo forests — a slower, deeper Yangtze Delta.",
    images: ['/images/destinations/yangtze-delta.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Hangzhou, Wuzhen & Moganshan: Tea, Water Towns & Mountain Retreats?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This journey typically takes 5-6 days. This route skips Suzhou's crowded gardens for something quieter: Wuzhen, a water town that is best experienced overnight when the day-trippers are gone, and Moganshan (Mount Mogan), a bamboo-covered m",
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
      name: 'Hangzhou, Wuzhen & Moganshan: Tea, Water Towns & Mountain Retreats',
      item: 'https://beforechina.com/yangtze-delta/hangzhou-wuzhen-mogan',
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
          src="/images/destinations/yangtze-delta.webp"
          alt="Hangzhou West Lake and tea terraces"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Yangtze Delta &middot; 5-6 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Hangzhou, Wuzhen & Moganshan: Tea, Water Towns & Mountain Retreats
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
            Hangzhou\'s tea terraces at dawn, Wuzhen\'s lantern-lit canals after the day-trippers
            leave, and Moganshan\'s bamboo forests — a slower, deeper Yangtze Delta.
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
                title: '5-6 Days',
                description:
                  'A slower, more atmospheric Yangtze Delta — tea at the source, canals after dark, and bamboo forests in the clouds.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Hangzhou → Wuzhen → Moganshan',
                description:
                  "Skip Suzhou's crowded gardens for something quieter — a water town overnight and a bamboo-covered mountain retreat.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'West Lake, Wuzhen at Night, Moganshan Bamboo',
                description:
                  'Tea terraces, lantern-lit canals, and 1920s stone villas in the mountains.',
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
            This route skips Suzhou\'s crowded gardens for something quieter: Wuzhen, a water town
            that is best experienced overnight when the day-trippers are gone, and Moganshan (Mount
            Mogan), a bamboo-covered mountain retreat where Shanghai\'s elite built stone villas in
            the 1920s. It is a slower, more atmospheric Yangtze Delta — tea at the source, canals
            after dark, and bamboo forests in the clouds.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Shanghai → Hangzhou',
                content: `Take the 1-hour train from Shanghai to Hangzhou. Afternoon: West Lake — walk the Su Causeway, visit the Leifeng Pagoda (¥40) for the lake panorama, and sit at a lakeside tea house. Evening: dinner at Louwailou (楼外楼, est. 1848) — Hangzhou\'s most famous restaurant, serving West Lake vinegar fish and dongpo rou on the lake shore.`,
                tip: `Louwailou is expensive by Chinese standards (¥200-300/person) and some say it is resting on its reputation. But the location — right on the lake with views of the pagoda — is unbeatable. Book a window table. The West Lake vinegar fish (西湖醋鱼) is the dish to order.`,
              },
              {
                day: 'Day 2: Hangzhou Tea Culture',
                content: `Early morning: cycle to Longjing tea village (龙井村) before the tour buses arrive. Walk through the tea terraces to the China Tea Museum. Midday: lunch at a tea farmer\'s house — they will cook simple Hangzhou dishes and serve their own tea. Afternoon: visit Meijiawu (梅家坞), a less touristy tea village further into the hills. Learn to brew Longjing tea properly — 80°C water, not boiling, steeped for 2-3 minutes in a glass cup so you can watch the leaves unfurl.`,
                tip: `Longjing tea should be brewed at 80°C, not boiling. Boiling water scalds the leaves and makes the tea bitter. If you are at a tea farmer\'s house and they pour boiling water on the tea, they are serving you low-grade leaves that can handle the heat. Good Longjing is brewed with water cooled for 2-3 minutes after boiling.`,
              },
              {
                day: 'Day 3: Hangzhou → Wuzhen',
                content: `Take a 1-hour bus from Hangzhou to Wuzhen (¥35). Wuzhen (乌镇) is one of China\'s six famous water towns, but the only one truly worth staying overnight. Check into a hotel inside the West Gate scenic area (book 2-4 weeks ahead). Afternoon: explore the West Gate — the indigo fabric workshop, the wedding museum, the ancient bed museum (surprisingly interesting). Walk the canals, cross the stone bridges. Evening: this is why you came. After 5pm, the West Gate empties of day-trippers. The lanterns come on. The canals become mirrors. Walk the bridges in near solitude. Dinner at a canal-side restaurant.`,
                tip: `Wuzhen West Gate entrance: ¥150. If you stay inside the scenic area, you pay once and can come and go. The hotels inside are run by the Wuzhen management company — consistent quality but not cheap (¥600-1,500/night). Book on the official Wuzhen website or Trip.com. The cheaper guesthouses outside the gate mean you miss the empty night-time canals, which is the entire point of Wuzhen.`,
              },
              {
                day: 'Day 4: Wuzhen → Moganshan',
                content: `Morning: visit Wuzhen\'s East Gate (东栅, ¥110) — older, less polished, with residents still living in the old houses. The East Gate has a lived-in quality the West Gate lacks. After lunch, take a Didi to Moganshan (1.5 hrs, ¥300). Moganshan (莫干山) is a bamboo-covered mountain at 700m where Shanghai\'s colonial elite built stone villas in the 1920s to escape the summer heat. It is now China\'s most famous mountain resort — boutique guesthouses, bamboo forests, and hiking trails. Check into a guesthouse and walk the villa trail.`,
                tip: `Moganshan is a 1.5-hour drive from Wuzhen. There is no train — you need a private car or Didi (¥300). The mountain road is winding — take motion sickness pills if you are prone. The temperature is 5-8°C cooler than Hangzhou — it genuinely is a summer escape.`,
              },
              {
                day: 'Day 5: Moganshan → Shanghai',
                content: `Morning: hike the Bamboo Forest Trail (2-3 hours) — a network of stone paths through dense bamboo groves that filter the light into green. Visit the Moganshan Villa (蒋介石官邸), where Chiang Kai-shek stayed in the 1930s, and the Sword Pond (剑池), a waterfall and pool where swords were supposedly forged 2,500 years ago. Afternoon: drive back to Shanghai (2.5 hrs, ¥400 by Didi) or take a bus from Deqing to Shanghai (2.5 hrs). Fly out in the evening or stay the night.`,
                tip: `Moganshan is about atmosphere, not sights. The villa trail, the bamboo forest, the morning mist — it is a place to slow down, not check off a list. The best guesthouses (naked Retreats, Le Passage Mohkan Shan) are ¥1,500-3,000/night and book out weeks in advance. Mid-range guesthouses (¥400-800) are still excellent.`,
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
            href: '/yangtze-delta/shanghai-hangzhou-suzhou',
            label: 'Shanghai, Hangzhou & Suzhou',
            description: "Add Shanghai's skyline and Suzhou's classical gardens.",
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Shanghai Pudong skyline at night',
            days: '6-7 days',
          },
          {
            href: '/yangtze-delta/nanjing-zhenjiang-yangzhou',
            label: 'Nanjing & Yangzhou',
            description: "Extend west to Nanjing and Yangzhou's Grand Canal tea culture.",
            image: '/images/destinations/yangtze-delta.webp',
            imageAlt: 'Nanjing Ming dynasty city walls',
            days: '4-5 days',
          },
          {
            href: '/huangshan/yellow-mountain',
            label: 'Huangshan',
            description: "Head south to the Yellow Mountains — China's most iconic peaks.",
            image: '/images/destinations/huangshan.webp',
            imageAlt: 'Huangshan granite peaks and pine trees in mist',
            days: '3-4 days',
          },
        ]}
      />
    </div>
  );
}
