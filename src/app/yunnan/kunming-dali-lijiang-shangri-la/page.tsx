import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Kunming-Dali-Lijiang-Shangri-La (7-8 Days) | Yunnan Travel Guide | BeforeChina',
  description: 'The classic Yunnan route: Stone Forest, Dali Old Town, Lijiang canals, Tiger Leaping Gorge, and Shangri-La\'s Tibetan monasteries — 7-8 days through China\'s most diverse province.',
  alternates: { canonical: '/yunnan/kunming-dali-lijiang-shangri-la' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many days do I need for the Kunming-Dali-Lijiang-Shangri-La route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '7-8 days is the sweet spot. In 7 days you can do Kunming (1 day), Dali (2 days), Lijiang (2 days), Tiger Leaping Gorge (1 day), and Shangri-La (1 day). With 8-9 days, add an extra day in Shangri-La to acclimatise to the 3,200m altitude and visit Songzanlin Monastery.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Kunming-Dali-Lijiang-Shangri-La: The Classic Yunnan Route', item: 'https://beforechina.com/yunnan/kunming-dali-lijiang-shangri-la' },
  ],
};

const STOPS = [
  { day: 'Day 1: Kunming', content: `Fly into Kunming Changshui (KMG). Spend the day at the Stone Forest (石林) — 90 km southeast of the city, a UNESCO site of limestone pinnacles that look like petrified trees. Afternoon: Green Lake Park (翠湖) for people-watching and the surrounding Yunnan University area. Evening: across-the-bridge noodles (过桥米线) at a local restaurant — this is Yunnan\'s signature dish.`, tip: `Kunming is called the \'City of Eternal Spring\' for a reason — temperatures are 15-25°C year-round. The Stone Forest entrance is ¥175. Go early (before 9am) to beat the tour groups from Kunming.` },
  { day: 'Days 2-3: Dali', content: `Take the 2-hour high-speed train from Kunming to Dali (¥145). Dali is a lakeside town backed by the 4,000m Cangshan Mountains, and the old town is a grid of stone-paved streets lined with Bai minority architecture. Day 2: rent an e-bike (¥50/day) and cycle around Erhai Lake — stop at Xizhou Village for traditional Bai architecture and the famous Xizhou baba flatbread. Day 3: morning hike on Cangshan (take the cable car to 2,600m, then walk the Cloud Traveller\'s Path), afternoon exploring Dali Old Town and the Three Pagodas.`, tip: `Skip the overpriced lakeside cafes aimed at tourists. Eat at the evening market near the South Gate — grilled Erhai lake fish (¥30), cross-bridge noodles (¥15), and the best grilled eggplant you\'ll ever eat.` },
  { day: 'Days 4-5: Lijiang', content: `Take the train from Dali to Lijiang (1.5 hrs, ¥80). Lijiang\'s old town (Dayan) is a UNESCO World Heritage site — a maze of cobblestone alleys, wooden bridges, and canals built by the Naxi people 800 years ago. Day 4: walk the old town, climb to Wangu Tower for the panoramic view, visit the Black Dragon Pool for the classic photo of Jade Dragon Snow Mountain reflected in the water. Day 5: Shuhe Ancient Town (4 km north, less touristy) and Baisha Village for the 500-year-old Ming dynasty murals.`, tip: `Lijiang Old Town charges an ¥80 \'maintenance fee\' — but enforcement is lax and most travellers skip it. If asked at the gate, say you\'re staying at a hotel inside and they\'ll wave you through.` },
  { day: 'Day 6: Tiger Leaping Gorge', content: `Take a 2-hour minibus from Lijiang to Qiaotou (¥40). Tiger Leaping Gorge is one of the world\'s deepest river canyons — the Jinsha River cuts between Jade Dragon Snow Mountain (5,596m) and Haba Snow Mountain (5,396m), a vertical drop of 3,900m. The classic high trail is 22 km and takes 6-8 hours. Start at Jane\'s Guesthouse, hike to the Tea Horse Guesthouse for lunch (km 12, the best view), then continue to Tina\'s Guesthouse for the night. If you\'re short on time, do the first 12 km to Tea Horse and back — it has the best views.`, tip: `The high trail is well-marked but has exposed cliff sections. Wear hiking shoes — the path is dusty and rocky. The Naxi Guesthouse at km 5 sells water and snacks. In rainy season (July-August), check if the trail is open before you go.` },
  { day: 'Day 7: Shangri-La', content: `From Tina\'s Guesthouse, take a 3-hour bus to Shangri-La (Zhongdian, 3,200m). Shangri-La is a Tibetan-majority town renamed in 2001 to cash in on the Lost Horizon mystique — but it genuinely feels different from anywhere else in Yunnan. Visit Songzanlin Monastery (the \'Little Potala Palace\', built 1679, housing 700 monks), then walk the old town around Dukezong — the world\'s largest prayer wheel is here (21m tall, takes several people to turn). Evening: try yak hot pot and butter tea.`, tip: `Shangri-La is at 3,200m — you will feel the altitude. Walk slowly, drink water, skip alcohol on your first night. Songzanlin Monastery is ¥115 — go in the morning when the monks are chanting.` },
  { day: 'Day 8 (optional): Shangri-La → Fly Out', content: `If you have an 8th day, visit Pudacuo National Park — alpine lakes, meadows, and forests 22 km east of town (¥100, half-day trip). Fly out from Diqing Shangri-La Airport (DIG) to Kunming or direct to Chengdu/Chongqing for onward travel.`, tip: `Diqing Airport has flights to Kunming (1 hr, ¥400-600), Chengdu (1.5 hrs), and Chongqing. Book a few days ahead — flights are less frequent than from Kunming.` },
];

const PRACTICAL = [
  { title: 'Getting Between Cities', body: `High-speed trains connect Kunming → Dali (2 hrs, ¥145) and Dali → Lijiang (1.5 hrs, ¥80). Lijiang → Tiger Leaping Gorge is by minibus (2 hrs, ¥40). Tiger Leaping Gorge → Shangri-La is by bus (3 hrs, ¥60). All routes are well-served and bookable day-of except during Chinese holidays.` },
  { title: 'Where to Stay', body: `Kunming: near Green Lake Park (\$30-60/night). Dali: inside the old town or by Erhai Lake (\$25-80/night). Lijiang: in the old town, but avoid the noisy Sifang Street area — the southern end is quieter (\$30-80/night). Shangri-La: near Dukezong old town (\$30-60/night).` },
  { title: 'When to Go', body: `March-May and September-November are best. Spring brings wildflowers; autumn has clear skies and golden leaves. Avoid July-August (rainy season — trails are muddy, mountain views are clouded in) and Chinese New Year (prices double, trains sell out).` },
];

const NEXT_STEPS = [
  { href: '/visa', label: 'Check visa requirements', description: 'See if you qualify for visa-free entry to China' },
  { href: '/esim', label: 'Get an eSIM for China', description: 'Land with internet that bypasses the firewall' },
  { href: '/payment', label: 'Set up Alipay before you land', description: 'Link your foreign card and be ready to pay' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Yunnan · 7-8 Days</Kicker>
          <h1>Kunming-Dali-Lijiang-Shangri-La: The Classic Yunnan Route</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>The ultimate Yunnan backpacker trail — from Kunming\'s Stone Forest through Dali\'s lakeside old town and Lijiang\'s cobblestone canals, to Shangri-La at 3,200m on the Tibetan plateau.</p>
        </div>
      </section>

      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>7-8 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Kunming → Dali → Lijiang → Tiger Leaping Gorge → Shangri-La</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$600-900/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>This is the classic Yunnan circuit — the route every backpacker does and for good reason. Yunnan is China\'s most ethnically diverse province, home to 25 of China\'s 55 recognised ethnic minorities. The route climbs from subtropical Kunming (1,890m) to high-altitude Shangri-La (3,200m), passing through Bai, Naxi, and Tibetan cultures along the way. The infrastructure is excellent — high-speed trains connect Kunming, Dali, and Lijiang — and the food shifts from Yunnan rice noodles to Tibetan butter tea as you climb.</p>
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
