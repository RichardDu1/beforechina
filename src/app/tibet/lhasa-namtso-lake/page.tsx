import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Lhasa & Namtso Lake (5-6 Days) | Short Tibet Itinerary | BeforeChina',
  description: 'A shorter Tibet route: Lhasa\'s Potala Palace, Jokhang Temple, and Namtso Lake — one of the world\'s highest salt lakes at 4,718m.',
  alternates: { canonical: '/tibet/lhasa-namtso-lake' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can I visit Tibet independently?', acceptedAnswer: { '@type': 'Answer', text: 'No. All foreign travellers to Tibet must book through a registered travel agency, have a licensed guide, and travel on a pre-arranged itinerary with a private vehicle. The Tibet Travel Permit (TTP) is checked at airports, train stations, and checkpoints. Independent travel has not been permitted since 2008. Your agency handles all permits, transport, guides, and accommodation.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Lhasa & Namtso Lake: Tibet\'s Holy City & Heavenly Lake', item: 'https://beforechina.com/tibet/lhasa-namtso-lake' },
  ],
};

const STOPS = [
  { day: 'Day 1: Arrive Lhasa (3,650m)', content: `Fly into Lhasa Gonggar Airport. Transfer to hotel. REST — your first 24 hours at altitude are for acclimatisation only. Drink water, avoid alcohol and showers. Walk slowly. Your guide will brief you on the itinerary and altitude safety.`, tip: `Same altitude rules apply: rest, hydrate, Diamox. Flying into Lhasa from sea level is a shock to your body. Take it seriously.` },
  { day: 'Day 2: Lhasa', content: `Morning: Jokhang Temple and Barkhor Street — the spiritual heart of Tibet. Walk the pilgrim circuit, absorb the atmosphere, visit the Jowo Rinpoche statue. Afternoon: Sera Monastery for the 3pm monk debate. Evening: traditional Tibetan dinner.`, tip: `The Barkhor circuit is best walked in the morning (8-10am) when pilgrims are most active. Walk clockwise. The smell of yak butter, incense, and the sound of chanting create an atmosphere found nowhere else in the world.` },
  { day: 'Day 3: Lhasa', content: `Morning: Potala Palace — the 1-hour timed visit through the White and Red Palaces. Afternoon: Norbulingka, the summer palace, or the Tibet Museum. Evening: preparation for the Namtso drive (your guide will check the weather forecast — Namtso is impassable in snow).`, tip: `Potala Palace visit is strictly 1 hour. Your guide will set the pace. The climb is steep at altitude. The tomb of the 5th Dalai Lama (the \'Great Fifth\') is 3,700 kg of gold and studded with 18,000 pearls and jewels.` },
  { day: 'Day 4: Lhasa → Namtso Lake (4,718m)', content: `Drive 4-5 hours from Lhasa to Namtso Lake. The road crosses the Nyenchen Tanglha Mountains and the Yangbajain geothermal fields (steam vents visible from the road). Namtso appears suddenly as you crest the Lhachen La pass (5,190m) — a vast expanse of turquoise stretching to the horizon, with the Nyenchen Tanglha snow range (7,162m) as a backdrop. Walk the shore, visit Tashi Dor Island (connected by a causeway in dry season), and watch the sunset. Stay overnight in a guesthouse near the lake (5,000m, basic).`, tip: `Namtso at 4,718m is COLDER than Everest Base Camp (5,150m) because of the wind off the lake. Night temperatures drop to -10°C even in summer. The guesthouses are very basic — dorm beds with thick blankets, no heating, squat toilets. The altitude is intense — you are sleeping 1,000m higher than Lhasa. Diamox essential.` },
  { day: 'Day 5: Namtso → Lhasa', content: `Sunrise at Namtso — the first light on the Nyenchen Tanglha peaks is one of Tibet\'s most beautiful sights. Walk the shore one last time, then drive 4-5 hours back to Lhasa. Afternoon: rest and recovery. Farewell dinner in Lhasa.`, tip: `Namtso sunrise is worth the cold. The lake is calmest at dawn, and the snow peaks turn from grey to pink to gold. The Tashi Dor hermitage on the island has meditation caves used by Tibetan hermits for centuries.` },
  { day: 'Day 6: Depart Lhasa', content: `Transfer to Lhasa airport. If your flight is late, visit the Tibetan Traditional Medicine Museum or buy thangka paintings and yak-wool products on Barkhor Street.`, tip: `Thangka paintings (Tibetan Buddhist scroll paintings on cotton or silk) make the best Tibet souvenir. A hand-painted thangka by a trained artist costs ¥500-5,000 depending on size and detail. Bargain at Barkhor Street but be respectful — these are religious objects.` },
];
const PRACTICAL = [
  { title: 'Getting There & Permits', body: `Fly into Lhasa (LXA). Book through a registered Tibetan travel agency. Tibet Travel Permit (TTP) required. Namtso Lake may require an additional Aliens\' Travel Permit (ATP) — your agency handles this.` },
  { title: 'Where to Stay', body: `Lhasa: near Barkhor or Potala (\$50-150/night). Namtso: basic guesthouse near the lake (¥100-200/person/night). The Namtso accommodation is very basic — dorm beds, shared squat toilets, no showers. Bring wet wipes and warm clothes.` },
  { title: 'When to Go', body: `May-October. Namtso is inaccessible November-April due to snow and ice on the road. The best months are June-September for temperatures, though July-August can have afternoon clouds. May and October are colder but clearer.` },
  { title: 'Altitude & Health', body: `Lhasa: 3,650m. Namtso Lake: 4,718m. The Namtso night is the highest-altitude sleep on this route. Diamox is essential. Watch for signs of worsening altitude sickness — headache, nausea, confusion. Your guide carries oxygen.` },
];
const NEXT_STEPS = [
  { href: '/tibet/lhasa-shigatse-everest', label: 'Full Tibet route', description: 'Add Shigatse and Everest Base Camp' },
  { href: '/sichuan/chengdu-daocheng-yading', label: 'Daocheng Yading', description: 'Sichuan\'s Tibetan regions for pre-Tibet acclimatisation' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Tibet · 5-6 Days</Kicker>
          <h1>Lhasa & Namtso Lake: Tibet\'s Holy City & Heavenly Lake</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Lhasa\'s Potala Palace, the Jokhang Temple, and Namtso — a 1,920 km² salt lake at 4,718m, one of the most beautiful places on the Tibetan Plateau.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>5-6 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Lhasa → Namtso Lake → Lhasa</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$800-1,200/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>For travellers who want a taste of Tibet without the long drives to Everest. This route focuses on Lhasa and Namtso Lake (纳木错) — one of the world\'s highest and largest salt lakes at 4,718m, 1,920 km² of turquoise water ringed by snow-capped peaks. Lhasa gives you Tibetan Buddhism\'s holiest sites; Namtso gives you the Tibetan Plateau\'s stark, high-altitude beauty. The 5-6 day timeline is ideal for those with limited time or as an add-on to a longer China trip.</p>
          </div>
          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Day-by-Day Itinerary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {STOPS.map((stop) => (
              <div key={stop.day} className="article-card">
                <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--primary-color)' }}>{stop.day}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }}>{stop.content}</p>
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
            {PRACTICAL.map((p) => (
              <div key={p.title} className="article-card">
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <TourCTA />
        <NextSteps steps={NEXT_STEPS} />
        <SignatureCard />
      </div>
    </div>
  );
}