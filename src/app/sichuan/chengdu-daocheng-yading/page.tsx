import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Chengdu-Daocheng Yading (7-8 Days) | Sichuan\'s Last Shangri-La | BeforeChina',
  description: 'Journey from Chengdu to Daocheng Yading Nature Reserve — three sacred snow mountains, turquoise lakes, and Tibetan plateau scenery on a 7-8 day Sichuan adventure.',
  alternates: { canonical: '/sichuan/chengdu-daocheng-yading' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How difficult is the Yading hike?', acceptedAnswer: { '@type': 'Answer', text: 'The main hike to Milk Lake (4,600m) and Five-Color Lake (4,700m) is a 10 km round trip from Luorong Pasture (4,180m). It gains 500m elevation and takes 6-8 hours. The altitude makes it challenging — the air has 60% of sea-level oxygen. You don\'t need technical skills, but you need to be fit and acclimatised. Horses are available for the first 3 km (¥300 one-way).' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Daocheng Yading: The Last Shangri-La', item: 'https://beforechina.com/sichuan/chengdu-daocheng-yading' },
  ],
};

const STOPS = [
  { day: 'Day 1: Chengdu → Kangding (2,560m)', content: `Drive 4.5 hours west from Chengdu on the G318 highway. The road climbs through the Erlangshan Tunnel (8.6 km, China\'s longest high-altitude tunnel) and emerges into a completely different world — Tibetan prayer flags, stone houses, and yak herds. Kangding is the historic border town between Han China and Tibet. Walk the old town and visit the Paoma Mountain.`, tip: `The G318 is the \'National Highway 318\' — China\'s Route 66 from Shanghai to Tibet. The Chengdu-Kangding section is paved and well-maintained. A private car with driver costs ¥1,200-1,500/day.` },
  { day: 'Day 2: Kangding → Xinduqiao → Litang (4,014m)', content: `Cross the 4,298m Zheduo Pass — the first time you break 4,000m. Stop at Xinduqiao, a small Tibetan town famous among Chinese photographers for the golden poplar trees and distant snow peaks. Continue to Litang through the 4,700m Kazila Pass. Litang is one of the world\'s highest towns at 4,014m — the sky is a deeper blue and you\'ll feel the altitude. Visit the Litang Monastery and the grasslands outside town.`, tip: `Litang is where you really feel the altitude. Take diamox if you have it. Drink 3-4 litres of water. Don\'t shower on your first night at 4,000m+ (the steam and heat can trigger altitude sickness). The Litang Monastery was founded in 1580 and is the largest Gelugpa monastery in southern Sichuan.` },
  { day: 'Day 3: Litang → Daocheng (3,750m)', content: `Drive 3 hours south to Daocheng. The road passes through the Haizi Mountain scenic area — a landscape of glacial boulders and 1,145 alpine lakes at 4,500m, looking like a giant scattered marbles across a moonscape. Daocheng town is a pleasant Tibetan county seat with white-walled houses and poplar-lined streets. Visit the White Pagoda Park and the Daocheng Monastery. Spend the night to acclimatise.`, tip: `Daocheng has a small airport (DCY) — the world\'s highest civilian airport at 4,411m. Flights from Chengdu (1 hr, ¥1,200-1,800) land here. If you fly in, spend 2 nights in Daocheng before attempting the Yading hike to acclimatise.` },
  { day: 'Day 4: Daocheng → Yading Nature Reserve', content: `Drive 1.5 hours to Yading (the reserve entrance is at Riwacun, 2,900m). Take the park shuttle bus 34 km into the reserve to Yading Village (3,900m) or Longlongba. Spend the afternoon on the short hike to Chonggu Monastery (3,900m) and the Pearl Lake viewpoint — your first close view of Chenrezig (6,032m) reflected in a glacial lake. This is a gentle 3 km walk to acclimatise.`, tip: `Yading entrance: ¥150 + ¥120 shuttle bus (2-day validity). The last shuttle into the reserve departs at 5pm — don\'t arrive late or you\'ll be stuck outside. Yading Village has basic guesthouses (¥100-200/night) — electricity is from generators and hot water is limited.` },
  { day: 'Day 5: Yading — The Big Hike', content: `Take the 7am shuttle from Yading Village to Luorong Pasture (4,180m). The hike begins here. Walk 3 km to the Horse Stop (optional horse ¥300), then climb 5 km on a steep rocky path to Milk Lake (4,600m) — a startling turquoise lake at the foot of Jampelyang, fed by a hanging glacier. Continue 500m uphill to Five-Color Lake (4,700m) — smaller but with a colour gradient from deep blue to emerald green. The view of all three peaks from here is the money shot. Descend the same way. Total: 10 km, 6-8 hours.`, tip: `Start by 7:30am. The weather turns by 2pm — clouds roll in and the peaks disappear. Bring 2L water, high-energy snacks, and rain gear even on sunny days. The last section to Five-Color Lake is a 100m climb on loose rock — poles help. If you\'re struggling with altitude, skip Five-Color Lake — Milk Lake is the better view.` },
  { day: 'Day 6: Yading → Daocheng', content: `Morning: short walk to Xiannairi Snow Mountain viewpoint or the lower section of the valley. Take the shuttle bus out of the reserve by noon. Drive back to Daocheng. Afternoon: hot springs in Daocheng County — the Rupuchaka Hot Springs are natural sulphur pools (¥30) and the perfect post-hike reward.`, tip: `The Daocheng hot springs are in Rumuchu Village, 5 km from town. The outdoor pools have mountain views. Bring your own towel and swimsuit — rental ones are questionable.` },
  { day: 'Day 7: Daocheng → Chengdu', content: `Fly from Daocheng Yading Airport (DCY) to Chengdu (1 hr, ¥1,200-1,800) — the takeoff at 4,411m is an experience in itself. Or drive back via the southern route through Xiangcheng and Shangri-La (2 days). Evening in Chengdu: celebratory hot pot.`, tip: `Daocheng Airport flights are frequently delayed or cancelled due to high winds and low visibility. Book a morning flight (best conditions) and have a buffer day. The drive back to Chengdu takes 2 days via the southern route.` },
];
const PRACTICAL = [
  { title: 'Altitude Safety', body: `This route stays above 3,500m for most of the trip. Acute Mountain Sickness (AMS) is the main risk. Symptoms: headache, nausea, dizziness, insomnia. Prevention: ascend slowly (our itinerary builds in acclimatisation days), drink 3-4L water/day, avoid alcohol, take diamox (prescription only, start 2 days before ascent). If symptoms are severe, descend immediately.` },
  { title: 'Where to Stay', body: `Kangding: Zhilam Hostel (¥150-300, great for acclimatisation info). Litang: basic Tibetan guesthouses (¥100-200). Daocheng: Tibetan-style hotels (¥200-400). Yading Village: very basic guesthouses (¥100-200, limited electricity).` },
  { title: 'When to Go', body: `Late September to mid-October is peak — golden grasslands, clear skies, and the larch forests turn brilliant yellow. May-June for wildflowers. The park is closed December-March due to heavy snow. Book accommodation 1-2 months ahead for October.` },
];
const NEXT_STEPS = [
  { href: '/sichuan/chengdu-in-depth', label: 'Chengdu guide', description: 'Pandas, hot pot, and tea houses' },
  { href: '/yunnan/kunming-dali-lijiang-shangri-la', label: 'Yunnan route', description: 'Another high-altitude adventure in Shangri-La' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Sichuan · 7-8 Days</Kicker>
          <h1>Daocheng Yading: The Last Shangri-La</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Three sacred snow mountains at 6,000m, turquoise glacier lakes, and Tibetan plateau grasslands — Sichuan\'s wildest landscape, 800 km west of Chengdu.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>7-8 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Chengdu → Kangding → Litang → Daocheng → Yading → Chengdu</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$800-1,200/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Daocheng Yading (稻城亚丁) is what happens when you cross the Tibetan Plateau with Yosemite. Three sacred peaks — Chenrezig (6,032m), Jampelyang (5,958m), and Chanadorje (5,958m) — ring a valley of glacier-fed lakes so blue they look Photoshopped. The route from Chengdu climbs from 500m to 4,700m over the Tibetan Plateau, passing through Kangding (the gateway to Tibetan Sichuan), Xinduqiao (the \'photographer\'s paradise\'), and Litang (a 4,000m grassland town that\'s the birthplace of the 7th Dalai Lama).</p>
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