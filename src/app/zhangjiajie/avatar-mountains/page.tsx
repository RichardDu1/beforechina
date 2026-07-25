import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Zhangjiajie (4-5 Days) | Avatar Mountains Travel Guide | BeforeChina',
  description: 'Zhangjiajie\'s sandstone pillars that inspired Avatar\'s floating mountains, the world\'s longest glass bridge, and Tianmen Mountain\'s cliff-hanging walkway.',
  alternates: { canonical: '/zhangjiajie/avatar-mountains' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Zhangjiajie as crowded as people say?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, in peak season (July-August, Chinese holidays). The park receives 50 million+ visitors annually, most of them Chinese domestic tourists. The key to avoiding crowds: go in shoulder season (April, September, November), enter the park at opening (7am), and stay inside the park or at the park gate (so you can enter before the tour buses arrive at 9am). The park is large enough that even on a busy day, you can find quiet trails if you walk away from the main viewpoints.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Zhangjiajie: The Avatar Mountains of Hunan', item: 'https://beforechina.com/zhangjiajie/avatar-mountains' },
  ],
};

const STOPS = [
  { day: 'Day 1: Arrive Zhangjiajie', content: `Fly into Zhangjiajie Hehua Airport (DYG) or take the high-speed train from Changsha (2.5 hrs, ¥120). Check into accommodation at Wulingyuan (the town at the park entrance). Afternoon: Zhangjiajie Grand Canyon Glass Bridge (张家界大峡谷玻璃桥, ¥219) — the world\'s longest (430m) and highest (300m above the canyon floor) glass-bottom bridge. Walking across a transparent bridge suspended 300m above a canyon is genuinely terrifying. After the bridge, walk the Grand Canyon trail (2-3 hours) through waterfalls, pools, and a limestone cave. Evening: Wulingyuan town for dinner.`, tip: `The Glass Bridge ticket (¥219) must be booked in advance — it sells out. Book on Trip.com or the official WeChat account. No large bags, cameras with detachable lenses, or selfie sticks allowed on the bridge (they provide lockers). The canyon walk after the bridge is a 2-3 hour downhill hike with beautiful scenery — wear good shoes.` },
  { day: 'Day 2: Zhangjiajie National Forest Park — Yuanjiajie & Tianzi Mountain', content: `Enter the park at 7am (¥228, 4-day pass). Take the Bailong Elevator (百龙天梯, ¥72) — a glass elevator built against a 326m cliff face, the world\'s tallest outdoor elevator. At the top, walk to Yuanjiajie Scenic Area (袁家界) — the Avatar Hallelujah Mountains viewpoint. The \'Southern Sky Pillar\' (南天一柱), renamed \'Avatar Hallelujah Mountain\' in 2010, is the pillar that inspired the film. Then shuttle bus to Tianzi Mountain (天子山) — panoramic views of the pillar forest from 1,262m. Descend by cable car (¥72).`, tip: `The Bailong Elevator has 2-3 hour queues from 9am-2pm in peak season. Enter the park at 7am (opening time) and go straight there. The elevator ride is 88 seconds. Yuanjiajie and Tianzi Mountain are the two essential viewpoints. Do Yuanjiajie first (it is busier) and Tianzi Mountain in the afternoon when the light is better for photography.` },
  { day: 'Day 3: Zhangjiajie National Forest Park — Golden Whip Stream & Yellow Stone Village', content: `Enter the park early. Walk the Golden Whip Stream (金鞭溪) — a 7.5 km flat trail along a crystal-clear stream at the bottom of the gorge, looking up at the sandstone pillars. The walk takes 2-3 hours and is the most peaceful part of Zhangjiajie (most visitors stay on the mountain tops). You will see wild macaques along the trail — do not feed them (they bite). Afternoon: cable car up to Yellow Stone Village (黄石寨, ¥65) — the oldest developed area of the park with a 3.8 km loop trail around the summit. Fewer visitors than Yuanjiajie, equally good views.`, tip: `Golden Whip Stream is a flat, easy walk and the most underrated part of Zhangjiajie. The perspective from the bottom of the gorge is completely different from the mountain-top views — you appreciate the scale of the pillars when you are standing at their base. The macaques are aggressive — keep food hidden, do not make eye contact, and do not smile (showing teeth is a threat to monkeys).` },
  { day: 'Day 4: Tianmen Mountain → Depart', content: `Morning: Tianmen Mountain (天门山, ¥258) — take the world\'s longest cable car (7.5 km, 30 minutes) from Zhangjiajie city centre to the summit at 1,430m. The cable car rises over the city, farmland, and then up the mountain face. At the top, walk the cliff-hanging walkway (玻璃栈道) — a 60m glass path bolted to a vertical cliff. Then walk to Tianmen Cave (天门洞) — a natural arch 131.5m high in the mountain, reached by the 999-step \'Stairway to Heaven\' or an escalator inside the mountain. Descend by bus on the 99-bend road (通天大道), one of the world\'s most dramatic roads. Afternoon: fly out or take the train.`, tip: `Tianmen Mountain ticket (¥258) includes the cable car up and bus down (or vice versa). Book a morning slot — the cable car queue can be 2-3 hours from 9am. The cliff walkway (¥5 shoe covers) is more psychological than actually dangerous — the glass is thick and the walkway is bolted into the cliff. The 999 steps down through Tianmen Cave are steep and can be slippery — the escalator inside the mountain (¥32) is an alternative.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Fly into Zhangjiajie Hehua Airport (DYG) from Beijing, Shanghai, Chengdu, or Guangzhou. High-speed trains from Changsha (2.5 hrs, ¥120). The park entrance at Wulingyuan is 40 minutes from the airport/train station by bus (¥12).` },
  { title: 'Where to Stay', body: `Wulingyuan town (武陵源) — the main tourist base at the park entrance, with hotels and restaurants (\$30-80/night). Zhangjiajie city — 40 min from the park, cheaper but less convenient (\$20-50/night). For the best experience, stay in Wulingyuan.` },
  { title: 'When to Go', body: `April-June and September-November. The mist is most atmospheric in spring and autumn. Avoid July-August (crowds, heat, and summer rain) and Chinese holidays (May Day, National Day — the park is impassable). Winter (December-February) has snow on the pillars — beautiful and uncrowded, but some trails may close.` },
  { title: 'What to Pack', body: `Comfortable walking shoes (you will walk 10-15 km/day), rain jacket (the mountain weather changes fast), snacks (food in the park is expensive and mediocre), and a fully charged phone/camera. The park has shuttle buses between viewpoints — the ticket includes them.` },
];
const NEXT_STEPS = [
  { href: '/zhangjiajie/fenghuang-ancient-town', label: 'Fenghuang Ancient Town', description: 'Add the riverside stilt-house town 3 hours from Zhangjiajie' },
  { href: '/guangxi/guilin-yangshuo-lijiang', label: 'Guilin & Yangshuo', description: 'Another iconic Chinese landscape, 4 hours by train' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Hunan · 4-5 Days</Kicker>
          <h1>Zhangjiajie: The Avatar Mountains of Hunan</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>3,000 sandstone pillars rising through mist, the world\'s longest and highest glass bridge, and a cliff-hanging walkway at 1,430m — Zhangjiajie is China\'s most surreal landscape.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>4-5 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Zhangjiajie National Park → Grand Canyon Glass Bridge → Tianmen Mountain</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$500-750/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Zhangjiajie\'s sandstone pillars — 3,000 of them, up to 200m tall, rising vertically from a subtropical forest — are one of the most otherworldly landscapes on Earth. They directly inspired the floating Hallelujah Mountains in James Cameron\'s Avatar. The area is now China\'s first UNESCO Global Geopark and one of its most popular natural attractions. This route covers the three main sites: Zhangjiajie National Forest Park (the pillars), the Grand Canyon Glass Bridge (the world\'s longest and highest), and Tianmen Mountain (the cliff-hanging walkway and the 999-step \'Stairway to Heaven\').</p>
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