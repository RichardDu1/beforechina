import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Xian-Luoyang-Kaifeng (6-7 Days) | China\'s Three Ancient Capitals | BeforeChina',
  description: 'Xian\'s Terracotta Warriors, Luoyang\'s Longmen Grottoes, and Kaifeng\'s Song dynasty heritage — 6-7 days along the Yellow River\'s imperial corridor.',
  alternates: { canonical: '/ancient-capitals/xian-luoyang-kaifeng' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Should I visit Xian on this route or combine it with Beijing?', acceptedAnswer: { '@type': 'Answer', text: 'Xian pairs well with either. If you are doing the classic Beijing-Xian-Shanghai loop, visit Xian as part of that and then do Luoyang-Kaifeng as a 3-4 day add-on from Zhengzhou. If you are focused specifically on ancient capitals, this Xian-Luoyang-Kaifeng route is self-contained and connects by high-speed train in 1-1.5 hours between each city.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Xian, Luoyang & Kaifeng: China\'s Three Ancient Capitals', item: 'https://beforechina.com/ancient-capitals/xian-luoyang-kaifeng' },
  ],
};

const STOPS = [
  { day: 'Day 1: Arrive Xian', content: `Fly into Xian Xianyang Airport (XIY). Afternoon: Xian City Wall (¥54) — the most complete ancient city wall in China (14 km, built 1370). Rent a bike on the wall (¥45, 90 min to cycle the full circuit). Evening: Muslim Quarter (回民街) — Xian\'s Hui Muslim neighbourhood is a food street like no other: lamb skewers (¥3 each), yangrou paomo (羊肉泡馍, crumbled flatbread in lamb soup), and persimmon cakes (柿子饼). The Muslim Quarter has existed for 1,300 years since Silk Road traders settled here.`, tip: `The city wall bike ride is 14 km and takes about 90 minutes at a leisurely pace. The wall is 12m wide — wide enough for a small car. Go in the late afternoon (4-5pm) when the light turns golden and the temperature drops. The south gate (永宁门) has the most dramatic entrance and the best bike rental station.` },
  { day: 'Day 2: Xian', content: `Morning: Terracotta Warriors (兵马俑, ¥120). Get there at 8:30am opening — the site is 40 km east of Xian and takes 1 hour by public bus (¥8 from Xian Railway Station) or 40 minutes by private car. The warriors are in three pits: Pit 1 is the largest (6,000 warriors in battle formation, only 2,000 excavated), Pit 2 has cavalry and chariots, Pit 3 is the command centre. Afternoon: Huaqing Hot Springs (¥120) at the foot of Mount Li — the Tang dynasty imperial bathing pools where Emperor Xuanzong and his consort Yang Guifei bathed. Evening: Tang Dynasty music and dance show (¥300-500).`, tip: `Terracotta Warriors ticket: ¥120. Get there at 8:30am sharp — by 10am Pit 1 is a wall of tour groups. Walk to the far end of Pit 1 first (fewer people) and work your way back. The museum is in the countryside — there is nowhere good to eat nearby. Bring snacks or eat breakfast before you go. The warriors were originally painted in bright colours — the pigments faded within minutes of exposure to air when excavated.` },
  { day: 'Day 3: Xian → Luoyang', content: `Take the 1.5-hour high-speed train from Xian North to Luoyang Longmen (¥175). Afternoon: Longmen Grottoes (龙门石窟, ¥90) — a UNESCO site of over 100,000 Buddhist statues carved into 1 km of limestone cliffs along the Yi River. The carvings span 400 years (5th-9th centuries). The largest is the 17m Vairocana Buddha in the Fengxian Temple. Cross the river to see the grottoes from the opposite bank — the scale of the cliff carving becomes clear. Evening: Luoyang Water Banquet (洛阳水席) — a 24-course meal where every dish is served in broth.`, tip: `Longmen Grottoes are best in afternoon light — the western cliffs (main grottoes) face east and are illuminated by the morning sun, but the afternoon gives you the best perspective from the east bank looking back. The Vairocana Buddha\'s face is 4m tall. Her smile is considered the most beautiful in Chinese Buddhist art. The site takes 3-4 hours.` },
  { day: 'Day 4: Luoyang', content: `Morning: White Horse Temple (白马寺, ¥35) — China\'s first Buddhist temple, founded in 68 AD when two Indian monks arrived on white horses carrying Buddhist scriptures. The temple has a working monastery, pagodas from multiple dynasties, and a recently built Indian/Thai/Myanmar temple complex. Afternoon: Luoyang Museum (free, book ahead) — an excellent collection of Tang dynasty ceramics, including the famous Tang sancai (唐三彩, three-colour glazed pottery). Evening: Luoyang Old Town for local snacks.`, tip: `The White Horse Temple\'s international section (Indian, Thai, and Myanmar temples) was built in the 2000s and is more a curiosity than historically significant. The real value is in the original Chinese halls — the Qiyun Pagoda (built 1175) and the Hall of Heavenly Kings. The temple is 12 km east of Luoyang — 40 minutes by bus (¥2) or 25 minutes by Didi (¥40).` },
  { day: 'Day 5: Luoyang → Shaolin Temple → Kaifeng', content: `Day trip to Shaolin Temple (少林寺, ¥100), 1.5 hours from Luoyang by bus. Shaolin is the birthplace of Chan (Zen) Buddhism and kung fu — the monks have practised martial arts here for 1,500 years. Visit the main temple, the Pagoda Forest (228 stone pagodas housing the ashes of abbots), and watch a kung fu demonstration (¥100) by the current generation of warrior monks. Afternoon: bus back to Luoyang, then high-speed train to Kaifeng (1 hr, ¥90).`, tip: `Shaolin Temple is touristy — manage expectations. The kung fu demonstration is impressive (students breaking metal bars on their heads) but the temple itself is smaller than you might expect. The Pagoda Forest is the most atmospheric part — 228 stone pagodas from the 7th to 19th centuries in a quiet pine grove. The Shaolin area is also full of martial arts schools where Chinese parents send their children to study kung fu full-time.` },
  { day: 'Day 6: Kaifeng', content: `Kaifeng was the Northern Song capital (960-1127 AD) and the world\'s largest city at the time. Start at the Millennium City Park (清明上河园, ¥120) — a life-sized reconstruction of a Song dynasty city based on the famous scroll painting \'Along the River During the Qingming Festival\'. Staff wear Song dynasty costumes and there are performances throughout the day. Afternoon: Dragon Pavilion (龙亭, ¥45) and the Iron Pagoda (铁塔, ¥40) — a 55m brick pagoda from 1049 with rust-coloured glazed tiles that look like iron. Evening: Kaifeng night market at Gulou (鼓楼) — xiaolongbao (Kaifeng claims to have invented soup dumplings), bucket chicken (桶子鸡), and almond tea.`, tip: `The Kaifeng night market at Gulou Square is one of China\'s largest. The Kaifeng xiaolongbao (开封灌汤包) are different from Shanghai\'s — the skin is thicker and the filling is lamb, not pork. Kaifeng also has a significant Hui Muslim population, so lamb dishes are common. The almond tea (杏仁茶) is a Kaifeng speciality — sweet, nutty, and served hot.` },
  { day: 'Day 7: Kaifeng → Zhengzhou → Fly Out', content: `Morning: Xiangguo Temple (大相国寺, ¥45) — a Tang dynasty temple that was the Song dynasty\'s most important Buddhist institution, famous for its statue of Guanyin with 1,000 hands and eyes carved from a single ginkgo tree. Afternoon: 30-minute train to Zhengzhou (¥25), then fly out from Zhengzhou Xinzheng Airport (CGO).`, tip: `Zhengzhou is the transport hub for this region. It has flights to most major Chinese cities and some international connections. The airport is 35 km from the city centre — 40 minutes by metro (line 2 extension). If your flight is late, the Henan Museum in Zhengzhou (free) is excellent for its Shang dynasty bronzes.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Fly into Xian (XIY) and out of Zhengzhou (CGO). High-speed trains: Xian-Luoyang (1.5 hrs, ¥175), Luoyang-Kaifeng (1 hr, ¥90), Kaifeng-Zhengzhou (30 min, ¥25). The entire route is on the Xuzhou-Lanzhou high-speed line.` },
  { title: 'Where to Stay', body: `Xian: inside the city wall near the Bell Tower (\$40-100/night). Luoyang: near Longmen Grottoes or the old town (\$30-70/night). Kaifeng: Gulou area for the night market (\$25-60/night).` },
  { title: 'When to Go', body: `March-May and September-November. April is the Luoyang Peony Festival — the city goes all-out with millions of peonies in bloom, but hotels double in price. Avoid Chinese New Year (Shaolin and Longmen are packed) and July-August (Henan is hot and dry).` },
  { title: 'What to Eat', body: `Xian: yangrou paomo (lamb soup with bread), biangbiang noodles, lamb skewers, persimmon cakes. Luoyang: water banquet (24 courses), beef soup (牛肉汤) for breakfast. Kaifeng: soup dumplings (灌汤包), bucket chicken, almond tea, and wufu pi (deep-fried dough with five-spice).` },
];
const NEXT_STEPS = [
  { href: '/golden-triangle/beijing-xian-shanghai', label: 'Beijing-Xian-Shanghai', description: 'Add Beijing and Shanghai for the classic Golden Triangle' },
  { href: '/ancient-capitals/pingyao-datong-yungang', label: 'Pingyao & Datong', description: 'Continue north to Pingyao and the Yungang Grottoes' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Ancient Capitals · 6-7 Days</Kicker>
          <h1>Xian, Luoyang & Kaifeng: China\'s Three Ancient Capitals</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>The Terracotta Warriors, the Longmen Buddhist grottoes carved into limestone cliffs, and Kaifeng — the Song dynasty capital that was once the world\'s largest city.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>6-7 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Xian → Luoyang → Kaifeng → Zhengzhou</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$700-1,000/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>China had eight great ancient capitals, and three of them sit along a 500km stretch of the Yellow River: Xian (Chang\'an, capital of 13 dynasties including the Zhou, Qin, Han, and Tang), Luoyang (capital of 13 dynasties, home of the Longmen Grottoes and the first Buddhist temple in China), and Kaifeng (the Northern Song capital that was the world\'s largest city in 1000 AD with over 1 million people). This route connects them by high-speed train — Xian to Luoyang is 1.5 hours, Luoyang to Kaifeng is 1 hour. It is the essential China history itinerary for travellers who want to go deeper than the Beijing-Xian-Shanghai greatest-hits tour.</p>
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