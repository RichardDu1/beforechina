import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Guilin-Longji-Xingping (5-6 Days) | Deep Guangxi Photography Route | BeforeChina',
  description: 'An extended Guilin route: Longji Rice Terraces, Li River bamboo raft, Xingping sunrise, and Yangshuo cycling — 5-6 days for photographers and slow travellers.',
  alternates: { canonical: '/guangxi/guilin-longji-xingping' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Where is the best sunrise spot in Guilin?', acceptedAnswer: { '@type': 'Answer', text: 'For rice terraces: the Xianggong Mountain viewpoint (相公山) near Yangshuo — a 20-minute climb to a platform overlooking the Li River bending through karst peaks. ¥60 entrance, go at 5:30am. For the classic karst view: the Laozhai Mountain above Xingping — a steep 40-minute climb but you get the exact 20 RMB note view at sunrise with no one else there.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Guilin, Longji & Xingping: The Photographer\'s Guangxi', item: 'https://beforechina.com/guangxi/guilin-longji-xingping' },
  ],
};

const STOPS = [
  { day: 'Day 1: Guilin → Longji', content: `Arrive Guilin (KWL). Drive 2.5 hours directly to Longji Rice Terraces. Check into a guesthouse in Ping\'an Village (the most accessible terrace area). Afternoon: walk the paths between Ping\'an and the \'Seven Stars Accompanying the Moon\' viewpoint — the classic Longji photo. The terraces are flooded April-June and golden September-October. Evening: Zhuang minority dinner at your guesthouse — bamboo rice (竹筒饭) cooked inside a bamboo tube over a fire, and smoked pork with wild vegetables.`, tip: `Stay inside the terrace area, not at the entrance gate. Ping\'an Village has guesthouses with terrace-view rooms (¥200-400/night). You will need to walk 20-30 minutes uphill from the parking lot — pack light or hire a Yao porter (¥50).` },
  { day: 'Day 2: Longji → Guilin → Yangshuo', content: `Sunrise at Longji — the \'Nine Dragons and Five Tigers\' viewpoint has the best morning light. After breakfast, walk to the Jinkeng Terraces (cable car ¥100 or 2-hour hike). Jinkeng is larger and more dramatic than Ping\'an, with Yao minority villages scattered through the terraces. Descend by cable car, then drive back to Guilin (2.5 hrs). Take the afternoon bus to Yangshuo (1.5 hrs, ¥25). Evening: settle into Yangshuo and walk West Street.`, tip: `The Longji entrance is ¥80. Your ticket is checked at each village entrance — keep it accessible. The Yao women at Jinkeng wear traditional red clothing and floor-length hair wrapped in elaborate headdresses. They charge ¥20 for a photo — it is how they make a living in this remote area.` },
  { day: 'Day 3: Xingping & Li River', content: `Take the 40-minute bus from Yangshuo to Xingping (¥10). Xingping is a small riverside town that was the original county seat before Yangshuo. Walk the ancient street (1 km of Ming-Qing shopfronts), then climb Laozhai Mountain (40 min, steep) for the aerial view of the Li River bending through the karst — this is the 20 RMB note view from above. Afternoon: bamboo raft from Xingping to Nine Horses Fresco Hill and back (¥120, 1.5 hrs). Evening: stay overnight in Xingping — the town is quiet after the day-trippers leave at 5pm.`, tip: `Laozhai Mountain is free and the best view in Guilin. But the climb is genuinely steep — sections require using both hands on chains. Start 1 hour before sunset. Bring a headlamp for the descent. The trailhead is behind the Xingping Wharf.` },
  { day: 'Day 4: Xingping Sunrise → Yangshuo', content: `Sunrise at Xianggong Mountain (相公山, ¥60, 30-min drive from Xingping). The viewing platform overlooks the Li River in a perfect S-curve through a forest of karst peaks — this is THE Guilin sunrise photo. After sunrise, return to Yangshuo via the back roads through Baisha and Fuli villages. Afternoon: Yulong River bamboo raft and countryside cycling.`, tip: `Xianggong Mountain opens at 5am for sunrise. The platform has two levels — the upper level fills with tripods by 5:30am. Go early. The drive up is on a narrow paved road — a Didi from Yangshuo costs ¥80 each way.` },
  { day: 'Day 5: Yangshuo → Fly Out', content: `Morning: final Yangshuo cycling or a tai chi class by the river. Visit the Yangshuo Cooking School for a half-day class — learn to make Guilin rice noodles and beer fish (啤酒鱼, the local speciality). Afternoon: bus to Guilin (1.5 hrs) for your flight out.`, tip: `Beer fish (啤酒鱼) is Yangshuo\'s signature dish — whole river fish braised in beer with tomatoes, peppers, and garlic. Every restaurant on West Street claims to be the original. Eat at a place locals recommend, not the ones with English menus and touts outside.` },
];
const PRACTICAL = [
  { title: 'Photography Tips', body: `Best lenses: wide-angle (16-35mm) for the karst panoramas, telephoto (70-200mm) for compressing peaks and picking out details. Tripod essential for sunrise. A polarising filter cuts haze and reflection off the Li River. Best light: dawn (5:30-7am) for mist and golden hour (5-6:30pm) for warm karst colours.` },
  { title: 'Where to Stay', body: `Longji: Ping\'an Village guesthouses with terrace views (¥200-400). Xingping: riverside guesthouses (¥150-300). Yangshuo: Yulong River area for quiet, West Street for convenience (\$30-80).` },
  { title: 'Getting Around', body: `Yangshuo to Xingping: bus from Yangshuo Bus Station (40 min, ¥10). Yangshuo to Guilin: bus (1.5 hrs, ¥25) or private car (¥150). Guilin to Longji: private car (2.5 hrs, ¥400-500 round trip) or bus from Guilin Qintan Bus Station to Longji entrance (2.5 hrs, ¥50) then shuttle into the terraces.` },
];
const NEXT_STEPS = [
  { href: '/guangxi/guilin-yangshuo-lijiang', label: 'Classic Guilin route', description: 'The essential 3-4 day Guilin-Yangshuo itinerary' },
  { href: '/guizhou/huangguoshu-libo-miao', label: 'Guizhou route', description: 'Combine Guilin with Guizhou\'s waterfalls and Miao villages' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Guangxi · 5-6 Days</Kicker>
          <h1>Guilin, Longji & Xingping: The Photographer\'s Guangxi</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Longji\'s dragon-scale terraces at sunrise, the Li River at dawn from Xingping, and Yangshuo\'s karst countryside — Guangxi at its most photogenic.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>5-6 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Guilin → Longji → Yangshuo → Xingping → Yangshuo</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$450-700/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>This extended Guilin route is built around light. Longji Rice Terraces at sunrise, when mist fills the valley. Xingping at dawn, when the 20 RMB note view is at its best and the tour groups haven\'t arrived. Yangshuo\'s countryside in golden afternoon light. It is the same destinations as the 3-4 day route but at a slower pace that rewards photographers and travellers who want more than a checklist.</p>
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