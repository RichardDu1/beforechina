import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Hexi Corridor Deep Dive (10-12 Days) | Complete Silk Road in Gansu | BeforeChina',
  description: 'A comprehensive Hexi Corridor route: Lanzhou to Dunhuang with all the stops — Bingling Temple, Wuwei, Zhangye, Jiayuguan, and the Mogao Caves at a slower pace.',
  alternates: { canonical: '/silk-road/hexi-corridor-deep' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the Hexi Corridor and why is it important?', acceptedAnswer: { '@type': 'Answer', text: 'The Hexi Corridor (河西走廊) is a 1,000km narrow passage in Gansu province between the Qilian Mountains and the Gobi Desert. It was the main artery of the Silk Road for over 1,000 years — all land trade between China and Central Asia passed through here. The corridor is dotted with Buddhist cave temples, Han dynasty watchtowers, Ming dynasty fortresses, and Silk Road trading posts. It is one of the world\'s great historical routes, comparable to the Inca Trail or the Silk Road through Uzbekistan.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Hexi Corridor Deep Dive: The Complete Gansu Silk Road', item: 'https://beforechina.com/silk-road/hexi-corridor-deep' },
  ],
};

const STOPS = [
  { day: 'Day 1: Lanzhou', content: `Arrive Lanzhou. Afternoon: Zhongshan Bridge, White Pagoda Mountain, and the Gansu Provincial Museum (free) — home of the \'Flying Horse of Gansu\', a Han dynasty bronze horse (2nd century AD) that is China\'s national tourism symbol. Evening: Lanzhou beef noodles for dinner.`, tip: `The Gansu Provincial Museum\'s \'Flying Horse of Gansu\' (马踏飞燕) is a 34.5cm bronze horse from a Han dynasty general\'s tomb, caught mid-gallop with one hoof on a flying swallow. It is China\'s most famous bronze sculpture and the symbol of the China Tourism Administration. The museum also has excellent Silk Road exhibits.` },
  { day: 'Day 2: Lanzhou → Bingling Temple → Lanzhou', content: `Day trip to Bingling Temple (炳灵寺, ¥50 + ¥120 boat) — a Buddhist cave complex 80 km from Lanzhou, accessible only by a 1-hour boat ride through the Liujiaxia Reservoir. The caves contain 183 niches with 694 stone statues and 900 m² of murals, carved from the 4th to 15th centuries. The highlight is a 27m seated Maitreya Buddha carved into the cliff face. Return to Lanzhou in the evening.`, tip: `Bingling Temple is one of China\'s most underrated Buddhist sites. The boat ride through the reservoir (flooded in 1967 to build a dam) takes you through a landscape of eroded sandstone cliffs. The temple\'s remote location means far fewer visitors than Mogao or Longmen. The boat departs from Liujiaxia Dam — 1.5 hours from Lanzhou by bus (¥30).` },
  { day: 'Day 3: Lanzhou → Wuwei', content: `Take the 1.5-hour high-speed train from Lanzhou West to Wuwei East (¥90). Wuwei (武威) was the first city the Silk Road reached after leaving the Chinese heartland. Visit the Leitai Han Tomb (雷台汉墓, ¥45) where the Flying Horse of Gansu was discovered in 1969. The tomb is a brick-vaulted Han dynasty general\'s burial with 99 bronze chariots and horses. Afternoon: Confucius Temple (文庙, ¥30), the largest in northwest China, and the Wuwei Museum for Silk Road artefacts. Evening: Wuwei \'three sets\' noodles (三套车) — noodles, braised pork, and tea.`, tip: `Wuwei is often skipped on Silk Road itineraries, but it was the most important city on the Hexi Corridor during the Han dynasty. The Leitai Han Tomb is the original find site of the Flying Horse — the original is in the Gansu Museum in Lanzhou, but the tomb itself is evocative.` },
  { day: 'Day 4: Wuwei → Zhangye', content: `Take the 1-hour high-speed train from Wuwei East to Zhangye West (¥75). Afternoon: Zhangye Danxia Landform — the rainbow mountains at their best in late afternoon light. Stay overnight in Zhangye.`, tip: `If you have a flexible schedule, consider spending a second day in Zhangye to visit the Mati Temple (马蹄寺, ¥75), a complex of Buddhist caves carved into a cliff 65 km south of the city. The caves include a 7-storey pagoda carved inside the mountain, with interior passages connecting the levels.` },
  { day: 'Day 5: Zhangye → Jiayuguan', content: `Take the 1.5-hour high-speed train from Zhangye West to Jiayuguan South (¥80). Full afternoon at Jiayuguan Fortress, the Overhanging Great Wall, and the First Strategic Post — the western end of the Ming dynasty Great Wall. Evening: Jiayuguan lamb skewers.`, tip: `The \'First Strategic Post\' (第一墩) is a weathered earthen mound 7.5 km southwest of the fortress — it was the actual westernmost point of the Ming Great Wall, standing on a 56m cliff above the Taolai River. The view from the glass observation deck is vertiginous.` },
  { day: 'Day 6: Jiayuguan → Dunhuang', content: `Drive 4.5 hours through the Gobi Desert to Dunhuang. Afternoon: Mingsha Sand Dunes and Crescent Moon Spring at sunset. Evening: Shazhou Night Market.`, tip: `The Jiayuguan-Dunhuang drive is on a good highway through a landscape of absolute emptiness — black gravel desert, distant snow-capped mountains, and the occasional camel herd. There is a rest stop at Guazhou (瓜州), famous for melons. Buy a honeydew melon (¥5-10) — they are the sweetest in China.` },
  { day: 'Day 7: Dunhuang — Mogao Caves', content: `Full morning at the Mogao Caves (book 2-4 weeks ahead). The guided tour (A-category, ¥238) covers 8 caves including the Tang dynasty masterpieces. Afternoon: Dunhuang Museum and a rest. Evening: optional second visit to Mingsha Sand Dunes (the ticket is valid for 3 days).`, tip: `Mogao Caves Cave 45 is the highlight — a Tang dynasty cave with a perfectly preserved group of 7 painted sculptures: Buddha flanked by two disciples, two bodhisattvas, and two guardian kings. The colour on the bodhisattvas\' robes is still vivid after 1,300 years. Cave 158 has a 16m reclining Buddha in nirvana.` },
  { day: 'Day 8: Dunhuang — Yulin Caves + Yadan', content: `Day trip: Yulin Caves (榆林窟, ¥40, 2.5 hrs east of Dunhuang) — a sister site to Mogao with 42 caves, less visited but with some of the finest Tang dynasty murals (including a famous mural of the Tang monk Xuanzang with a monkey — a precursor to Journey to the West). Afternoon: Yadan Ghost City (雅丹魔鬼城, ¥50 + ¥70 shuttle), a landscape of wind-eroded rock formations 180 km northwest of Dunhuang. Return to Dunhuang late evening.`, tip: `The Yulin Caves are smaller and less visited than Mogao but the quality of the murals in the Tang caves is equal or better. Cave 25 has a famous mural of the Amitabha Sutra that is considered one of the finest Tang dynasty paintings in existence. Yadan Ghost City is best at sunset — the rock formations glow orange against the darkening sky.` },
  { day: 'Day 9: Dunhuang → Fly Out', content: `Fly out from Dunhuang. If you have a late flight, visit the Western Thousand Buddha Caves (西千佛洞) or the Dunhuang night market for last-minute Silk Road souvenirs (camel-wool scarves, replica Mogao murals, Dunhuang yellow noodles to take home).`, tip: `Dunhuang souvenirs: replica Mogao mural paintings on silk (¥50-200), camel-wool scarves (¥30-80), and dried fruits from Xinjiang (dates, raisins, apricots). The night market is the best place to buy — bargain hard (start at 50% of asking price).` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Fly into Lanzhou (LHW) and out of Dunhuang (DNH). High-speed trains: Lanzhou-Wuwei (1.5 hrs), Wuwei-Zhangye (1 hr), Zhangye-Jiayuguan (1.5 hrs). Jiayuguan-Dunhuang: drive (4.5 hrs). Bingling Temple and Yulin/Yadan require day trips by car.` },
  { title: 'Where to Stay', body: `Lanzhou (2 nights), Wuwei (1 night), Zhangye (1-2 nights), Jiayuguan (1 night), Dunhuang (3 nights). Budget \$30-80/night throughout.` },
  { title: 'When to Go', body: `May-June and September-October. The Hexi Corridor is desert climate — hot summers (35-40°C), cold winters (-15°C), and the best weather in May and September. Avoid the May Day and National Day holidays.` },
  { title: 'Mogao Tickets', body: `Mogao Caves A-category tickets (¥238, 8 caves) must be booked 2-4 weeks ahead on WeChat. B-category tickets (¥100, 4 caves) are available 1-2 days ahead. The A ticket includes an IMAX film and guided tour. No photography inside the caves.` },
];
const NEXT_STEPS = [
  { href: '/silk-road/xian-lanzhou-dunhuang', label: 'Classic Silk Road', description: 'The 7-8 day version starting from Xian' },
  { href: '/xinjiang/silk-road', label: 'Xinjiang Silk Road', description: 'Continue west through Xinjiang to Kashgar' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Silk Road · 10-12 Days</Kicker>
          <h1>Hexi Corridor Deep Dive: The Complete Gansu Silk Road</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Every stop along the 1,000km Hexi Corridor — from Buddhist cave temples to rainbow mountains, desert fortresses, and the Mogao Caves — at a pace that lets you absorb it all.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>10-12 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Lanzhou → Wuwei → Zhangye → Jiayuguan → Dunhuang</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$1,100-1,600/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>This is the Silk Road route for travellers who want to do the Hexi Corridor properly. It adds stops that the 7-day route skips: Bingling Temple (a Buddhist cave complex accessible only by boat), Wuwei (the historical heart of the corridor with a Han dynasty bronze horse that is China\'s national tourism symbol), and extra time in Zhangye and Dunhuang. The pace is slower — you are never rushing to make a train, and you have time for detours and discoveries.</p>
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