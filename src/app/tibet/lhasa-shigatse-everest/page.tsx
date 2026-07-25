import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Lhasa-Shigatse-Everest (8-10 Days) | Tibet Travel Guide | BeforeChina',
  description:
    "The essential Tibet route: Lhasa's Potala Palace and Jokhang Temple, Shigatse's Tashilhunpo Monastery, and Everest Base Camp — 8-10 days on the Roof of the World.",
  alternates: { canonical: '/tibet/lhasa-shigatse-everest' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/tibet/lhasa-shigatse-everest',
    title: 'Lhasa-Shigatse-Everest (8-10 Days) | Tibet Travel Guide | BeforeChina',
    description:
      "The essential Tibet route: Lhasa's Potala Palace and Jokhang Temple, Shigatse's Tashilhunpo Monastery, and Everest Base Camp — 8-10 days on the Roof of the World.",
    images: [
      {
        url: '/images/destinations/tibet.webp',
        width: 1200,
        height: 630,
        alt: 'Potala Palace at dawn in Lhasa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lhasa-Shigatse-Everest (8-10 Days) | Tibet Travel Guide | BeforeChina',
    description:
      "The essential Tibet route: Lhasa's Potala Palace and Jokhang Temple, Shigatse's Tashilhunpo Monastery, and Everest Base Camp — 8-10 days on the Roof of the World.",
    images: ['/images/destinations/tibet.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience Lhasa, Shigatse & Everest Base Camp: The Roof of the World?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This journey typically takes 8-10 days. Tibet is not a casual destination — the altitude (Lhasa is at 3,650m, Everest Base Camp at 5,150m), the permit requirements, and the logistics make it one of the most complex trips in China. But it is',
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
      name: 'Lhasa, Shigatse & Everest Base Camp: The Roof of the World',
      item: 'https://beforechina.com/tibet/lhasa-shigatse-everest',
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
          src="/images/destinations/tibet.webp"
          alt="Potala Palace at dawn in Lhasa"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div
          className="container"
          style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}
        >
          <Kicker>Tibet &middot; 8-10 days</Kicker>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 500,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Lhasa, Shigatse & Everest Base Camp: The Roof of the World
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
            The Potala Palace at dawn, monks debating in Jokhang Temple, the turquoise Yamdrok Lake
            at 4,441m, and Everest Base Camp at 5,150m — Tibet\'s essential route.
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
                title: '8-10 Days',
                description:
                  'The essential Tibet route with acclimatisation built in — Lhasa first, then higher altitudes.',
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
                title: 'Lhasa → Yamdrok Lake → Gyantse → Shigatse → EBC',
                description:
                  "From Tibet's holiest temples to the north face of Everest — 5,150m at Base Camp.",
              },
              {
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
                title: 'Potala Palace, Yamdrok Lake, Everest Base Camp',
                description:
                  "The Potala's golden roofs, a turquoise sacred lake, and the world's highest mountain.",
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
            Tibet is not a casual destination — the altitude (Lhasa is at 3,650m, Everest Base Camp
            at 5,150m), the permit requirements, and the logistics make it one of the most complex
            trips in China. But it is also one of the most extraordinary: the Potala Palace rising
            13 storeys above Lhasa, monks debating Buddhist philosophy in Jokhang Temple, turquoise
            lakes at 4,400m surrounded by snow peaks, and the north face of Everest from Base Camp.
            This route covers Tibet\'s essential sites in 8-10 days, with altitude acclimatisation
            built in.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                day: 'Day 1: Arrive Lhasa (3,650m)',
                content: `Fly into Lhasa Gonggar Airport (LXA) or take the train from Xining (the Qinghai-Tibet Railway, 21 hours, one of the world\'s great train journeys). Your guide meets you at the airport/station. Transfer to hotel. REST. Do not underestimate altitude — your first 24 hours at 3,650m should be spent resting. Drink water, avoid alcohol, do not shower (the steam can trigger altitude sickness). Walk slowly. If you flew from sea level, you will feel the altitude.`,
                tip: `Altitude sickness hits 50-75% of travellers who fly directly to Lhasa. Symptoms: headache, nausea, insomnia, loss of appetite. It usually passes in 24-48 hours. Drink 3-4 litres of water, take Diamox (acetazolamide) starting 2 days before arrival, and rest. If symptoms worsen (vomiting, confusion, breathlessness at rest), tell your guide immediately — descent is the only cure.`,
              },
              {
                day: 'Day 2: Lhasa Acclimatisation',
                content: `Gentle day exploring Lhasa. Morning: Barkhor Street (八廓街) — the 1 km pilgrim circuit around the Jokhang Temple, lined with shops selling prayer wheels, thangka paintings, and yak butter. Watch pilgrims prostrating their way around the circuit. Visit Jokhang Temple (大昭寺, ¥85) — Tibet\'s holiest temple, housing a life-sized gilded statue of the 12-year-old Buddha (Jowo Rinpoche) brought to Tibet in 641 AD. Afternoon: Sera Monastery (色拉寺, ¥50) for the famous monk debate (3-4pm daily except Sundays) — monks debate Buddhist philosophy in a courtyard with dramatic clapping gestures.`,
                tip: `The Jokhang Temple is the spiritual heart of Tibet. The Jowo Rinpoche statue is the most revered image in Tibetan Buddhism — pilgrims travel months on foot to see it. The temple is dark, smoky with yak-butter lamps, and intensely atmospheric. The monk debates at Sera Monastery are a 600-year-old tradition — philosophical argument as performance art.`,
              },
              {
                day: 'Day 3: Lhasa — Potala Palace',
                content: `Morning: Potala Palace (布达拉宫, ¥200, book 1-7 days ahead) — the 13-storey, 1,000-room palace that was the winter residence of the Dalai Lamas from the 7th century. The visit (1 hour, strictly timed) climbs through the White Palace (administrative) and Red Palace (religious), past chapels, tombs of 8 Dalai Lamas, and the throne room. The view from the roof across Lhasa is extraordinary. Afternoon: Norbulingka (罗布林卡, ¥60), the Dalai Lama\'s summer palace — a peaceful park of pavilions, gardens, and ponds. Evening: traditional Tibetan dinner with yak-butter tea.`,
                tip: `Potala Palace tickets: ¥200, must be reserved 1-7 days in advance (your agency handles this). The visit is strictly timed to 1 hour and you must follow a set route. No photography inside. The climb is 365 steps at 3,650m altitude — take it slow. The palace is closed for maintenance November-March on rotating schedules.`,
              },
              {
                day: 'Day 4: Lhasa → Yamdrok Lake → Gyantse (3,950m)',
                content: `Drive 2.5 hours from Lhasa to Yamdrok Lake (羊卓雍措, ¥60), one of Tibet\'s three sacred lakes. The first view from the Kamba La pass (4,794m) is unforgettable: a turquoise lake stretching 72 km, surrounded by snow peaks. Descend to the lake shore, then continue 3 hours to Gyantse (江孜). Visit the Pelkor Chode Monastery (白居寺, ¥60) and its Kumbum Stupa — a 32m, 9-storey chorten with 108 chapels and 100,000 Buddhist images. Gyantse was the site of a famous 1904 battle where Tibetan forces held off the British Younghusband Expedition.`,
                tip: `Yamdrok Lake\'s colour changes with the light — turquoise in full sun, deep blue under clouds. The Kamba La pass viewpoint is cold and windy (4,794m). The road descends to the lake in a series of switchbacks. The lake is sacred — Tibetans circumambulate it on foot (7-10 days).`,
              },
              {
                day: 'Day 5: Gyantse → Shigatse (3,800m)',
                content: `Drive 1.5 hours from Gyantse to Shigatse (日喀则), Tibet\'s second city. Visit Tashilhunpo Monastery (扎什伦布寺, ¥80) — the seat of the Panchen Lama (the second-highest lama in Tibetan Buddhism after the Dalai Lama). The monastery\'s highlight is the 26m gilded copper statue of the Future Buddha (Maitreya) — the largest gilded statue in the world, containing 279 kg of gold and 150,000 kg of copper. Walk the monastery\'s cobbled lanes among monks\' quarters, chapels, and assembly halls. Afternoon: Shigatse market and old town.`,
                tip: `Tashilhunpo Monastery was founded in 1447 and is one of Tibet\'s six great Gelug monasteries. The Maitreya statue is overwhelming — 26m of gilded copper in a chapel built around it. The monastery is less visited than Potala or Jokhang, so you can explore at a more relaxed pace.`,
              },
              {
                day: 'Day 6: Shigatse → Everest Base Camp (5,150m)',
                content: `Drive 7-8 hours from Shigatse to Everest Base Camp. The road climbs through a series of high passes: Gyatso La (5,248m) and Gawu La (5,198m). From Gawu La, on a clear day you see the entire Himalayan range — Makalu (8,463m), Lhotse (8,516m), Everest (8,848m), and Cho Oyu (8,201m) in one panorama. Descend to Rongbuk Monastery (4,980m), the highest monastery in the world, then continue to Base Camp (5,150m). The north face of Everest fills the sky. Stay overnight in a tent guesthouse at Base Camp or at Rongbuk Monastery guesthouse.`,
                tip: `Everest Base Camp at 5,150m is COLD — even in summer, night temperatures drop to -5°C. The tent guesthouses have yak-dung stoves and thick blankets but no heating. Bring a -10°C sleeping bag, thermal layers, a warm hat, and gloves. The altitude at Base Camp is no joke — you will be short of breath just walking to the toilet. Diamox is essential.`,
              },
              {
                day: 'Day 7: Everest Base Camp → Shigatse',
                content: `Sunrise at Everest Base Camp — the north face glows gold at dawn. Walk to the Base Camp marker (5,200m) for photos, then drive 7-8 hours back to Shigatse. The return drive retraces the route over the high passes. Stop at Sakya Monastery (萨迦寺, ¥45) en route — a 13th-century monastery of the Sakya school, with massive grey walls and a library of 84,000 manuscripts. Arrive Shigatse in the evening.`,
                tip: `The sunrise on Everest\'s north face is one of the world\'s great sights — the mountain turns from grey to pink to gold in the space of 10 minutes. The Base Camp marker is a 20-minute walk from the tent area. The return drive is long but the Himalayan views from Gawu La are worth a second look.`,
              },
              {
                day: 'Day 8: Shigatse → Lhasa',
                content: `Drive 5 hours back to Lhasa along the Yarlung Tsangpo River (the Brahmaputra). The road follows the river valley with views of barley fields, yak herds, and distant snow peaks. Optional stop at the Yarlung Valley — the cradle of Tibetan civilisation, with the first cultivated fields, first palace (Yumbulagang), and first monastery (Samye). Arrive Lhasa in the afternoon. Farewell dinner.`,
                tip: `The Yarlung Valley, 1 hour south of Lhasa, is where Tibetan civilisation began. Yumbulagang (雍布拉康), perched on a hilltop, was Tibet\'s first building (2nd century BC). Samye Monastery (桑耶寺, ¥45), founded in 775 AD, was Tibet\'s first Buddhist monastery. Both can be visited as a day trip from Lhasa if you have an extra day.`,
              },
              {
                day: 'Day 9: Depart Lhasa',
                content: `Fly out from Lhasa Gonggar Airport. If you have a morning flight, your guide transfers you to the airport (1 hour from Lhasa). If your flight is in the afternoon, visit the Tibetan Traditional Medicine Museum or the Tibet Museum for a final dose of Tibetan culture.`,
                tip: `Lhasa airport is 62 km from the city (1 hour by car). The airport bus (¥25) departs from the Civil Aviation Bureau near the Potala Palace. Security at Lhasa airport is strict — arrive 2 hours before your flight.`,
              },
            ].map((stop, i) => (
              <div
                key={stop.day}
                style={{
                  padding: '40px 0',
                  borderBottom: i < 8 ? '1px solid var(--border-color)' : 'none',
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
            href: '/tibet/lhasa-namtso-lake',
            label: 'Lhasa & Namtso Lake',
            description: 'A shorter Tibet route — the holy city and a heavenly turquoise lake.',
            image: '/images/destinations/tibet.webp',
            imageAlt: 'Namtso Lake turquoise water with snow peaks',
            days: '5-6 days',
          },
          {
            href: '/sichuan/chengdu-daocheng-yading',
            label: 'Daocheng Yading',
            description: "Sichuan's Tibetan regions — the perfect pre-Tibet acclimatisation.",
            image: '/images/destinations/sichuan.webp',
            imageAlt: 'Daocheng Yading snow peaks',
            days: '7-9 days',
          },
          {
            href: '/silk-road/xian-lanzhou-dunhuang',
            label: "Silk Road: Xi'an to Dunhuang",
            description: 'Follow the ancient Silk Road west through the Hexi Corridor.',
            image: '/images/destinations/silk-road.webp',
            imageAlt: 'Camel caravan in Dunhuang desert',
            days: '7-8 days',
          },
        ]}
      />
    </div>
  );
}
