import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Harbin & Snow Town (5-6 Days) | Dongbei Winter Wonderland | BeforeChina',
  description: 'Harbin\'s Ice and Snow Festival — the world\'s largest ice sculpture event — plus Snow Town\'s deep powder landscapes and Dongbei winter food culture.',
  alternates: { canonical: '/dongbei/harbin-snow-town' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How cold does it really get in Harbin in winter?', acceptedAnswer: { '@type': 'Answer', text: 'Daytime temperatures in January average -18°C and drop to -30°C at night. With wind chill, it can feel like -40°C. You need proper winter gear: thermal base layers, a down jacket rated to -30°C, insulated snow boots, a balaclava, ski goggles (your eyelashes freeze otherwise), and hand warmers. This is not a fashion trip. The ice sculptures are outside and you will be standing on frozen rivers for hours. Prepare accordingly.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Harbin & Snow Town: China\'s Winter Wonderland', item: 'https://beforechina.com/dongbei/harbin-snow-town' },
  ],
};

const STOPS = [
  { day: 'Day 1: Arrive Harbin', content: `Fly into Harbin Taiping Airport (HRB). Transfer to hotel. Afternoon: Central Street (中央大街) — a 1.4km pedestrian street of Russian-style buildings from the early 1900s, when Harbin was a Russian railway town. The cobblestones are original, shipped from Russia in the 1920s. Visit St. Sophia Cathedral (圣索菲亚教堂, ¥20) — a Russian Orthodox cathedral built in 1907, now a museum of Harbin\'s Russian history. Evening: hotpot — the Dongbei version uses lamb and sauerkraut (酸菜), a legacy of Harbin\'s Russian and Manchu heritage.`, tip: `Harbin was built by Russians. The city was a stop on the Trans-Siberian Railway and had a Russian population of 100,000 in the 1920s. The architecture on Central Street is genuine — not a theme park. The best way to understand Harbin is to think of it as a Russian city that happens to be in China.` },
  { day: 'Day 2: Harbin — Ice & Snow World', content: `Afternoon-evening: Harbin Ice and Snow World (哈尔滨冰雪大世界, ¥330) — the main event. The park covers 600,000 m² and features buildings, castles, slides, and sculptures all made of ice blocks from the Songhua River. The ice is 50-80cm thick and crystal clear. Go at 3pm to see the sculptures in daylight (they are blue-white) and stay for the neon light show after dark (4:30pm in winter). The ice slides are terrifying and essential. The temperature inside the park is -25°C to -35°C — dress like you are going to the Arctic.`, tip: `Ice and Snow World ticket: ¥330 (book on Trip.com or at the gate). The ice slides are free — the queue for the longest slide (300m) can be 1 hour. Go on a weekday to avoid the worst crowds. The park has warming huts with hot drinks (¥20-30) — use them every 45 minutes. Frostbite is a real risk. If your fingers or toes go numb, go inside immediately.` },
  { day: 'Day 3: Harbin → Snow Town', content: `Drive 5 hours from Harbin to China Snow Town (中国雪乡, ¥120). Snow Town is a village in a mountain valley where a unique microclimate produces reliable, deep powder snow — 2 metres accumulation from November to March. The village is a cluster of wooden houses with distinctive mushroom-shaped snow caps on the roofs. Walk the main street, climb the wooden walkway to the observation deck for the classic Snow Town panorama (red lanterns glowing against the white snow at dusk), and try sledding and snow tubing. Stay overnight in a local guesthouse (kang bed — a heated brick platform).`, tip: `Snow Town entrance: ¥120 (includes shuttle bus). The village is remote — 5 hours from Harbin on icy roads. Book transport through your hotel or a tour company. The guesthouses have kang beds (炕) — a heated brick platform you sleep on. It is the traditional Dongbei heating method and is genuinely warm. The food in Snow Town is basic and expensive by Chinese standards (¥50-80/person for a simple meal) — it is remote.` },
  { day: 'Day 4: Snow Town → Yabuli → Harbin', content: `Morning: final Snow Town photos in the early light (the snow is at its most pristine before the crowds). Then drive 2.5 hours to Yabuli Ski Resort (亚布力滑雪场) — China\'s largest ski resort. Yabuli has 46 ski runs and hosted the 1996 Asian Winter Games. A half-day lift pass is ¥300-500. If you are a beginner, take a lesson (¥200/hr) — the instructors speak basic English. Afternoon: drive 3 hours back to Harbin. Evening: Harbin beer and Russian food on Central Street.`, tip: `Yabuli is China\'s best ski resort but it is not Whistler or Chamonix. Manage expectations: the snow is partly natural, partly artificial. The runs are shorter and the facilities are older than Western resorts. But skiing in China is an experience in itself, and the Dongbei winter landscape is unique. Rent gear at the resort (¥200-300/set).` },
  { day: 'Day 5: Harbin', content: `Morning: Sun Island Snow Sculpture Expo (太阳岛雪博会, ¥240) — the daytime counterpart to Ice and Snow World, featuring massive snow sculptures (not ice) carved by international teams. The sculptures are up to 30m high and incredibly detailed. Afternoon: Siberian Tiger Park (东北虎林园, ¥110) — a controversial but unique wildlife park with 500+ Siberian tigers. You ride in a caged bus through the enclosures. You can buy meat (¥50-200) to feed the tigers through the bus bars. Evening: Harbin dumpling feast — Dongbei dumplings (饺子) are the best in China.`, tip: `The Sun Island Snow Sculpture Expo is less famous than Ice and Snow World but arguably more impressive artistically — the sculptures are enormous (up to 30m) and the detail achievable in snow is finer than ice. The Siberian Tiger Park is uncomfortable viewing for some — the tigers are in enclosures and the feeding is commercialised. It is up to you whether to visit.` },
  { day: 'Day 6: Harbin → Depart', content: `Fly out from Harbin. If your flight is in the evening, visit the Unit 731 Museum (free, 1.5 hrs from Harbin centre) — a Japanese biological warfare research facility from WWII, now a somber museum. It is heavy but historically important. Alternatively, visit the Harbin Polarland (¥150) for beluga whale shows and penguins — lighter fare for a departure day.`, tip: `Harbin airport is 35 km from the city (40-60 min by taxi, ¥120-150). The airport bus (¥20) departs from Central Street. In winter, allow extra time — snow can delay traffic. The airport is small and efficient — 1 hour before your flight is sufficient.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Fly into Harbin (HRB). Harbin-Snow Town: private car (5 hrs, ¥800-1,200 round trip). Snow Town-Yabuli: private car (2.5 hrs). Yabuli-Harbin: car (3 hrs). Book Snow Town transport through your Harbin hotel or a tour company.` },
  { title: 'Where to Stay', body: `Harbin: Central Street area (\$40-100/night). Snow Town: guesthouse with kang bed (¥200-400/night). Book Snow Town accommodation 2-4 weeks ahead for December-February — it fills up.` },
  { title: 'When to Go', body: `December-February is the winter season. The Ice and Snow Festival runs late December to late February (exact dates vary). The ice sculptures are at their best in January when temperatures are coldest. Chinese New Year (January/February) is peak — prices double and Snow Town is packed.` },
  { title: 'What to Wear', body: `Thermal base layers (merino wool), a down jacket rated to -30°C, insulated snow boots, a balaclava, ski goggles, and hand warmers. You need 4-5 layers on top, 2-3 on the bottom. Rent extra coats from your hotel (¥50/day). Frostbite is a real risk — cover all exposed skin.` },
];
const NEXT_STEPS = [
  { href: '/dongbei/changbaishan', label: 'Changbaishan', description: 'Add the North Korean border mountain and hot springs' },
  { href: '/golden-triangle/beijing-in-depth', label: 'Beijing in depth', description: 'Beijing is 2 hours from Harbin by high-speed train' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Dongbei · 5-6 Days</Kicker>
          <h1>Harbin & Snow Town: China\'s Winter Wonderland</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>The world\'s largest ice sculpture festival, a village buried under 2 metres of powder snow, and the warmth of Dongbei cuisine in -30°C — this is winter in China\'s far northeast.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>5-6 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Harbin → Snow Town → Yabuli → Harbin</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$600-900/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Dongbei (东北, \'Northeast\') is China\'s Manchuria — the three provinces of Heilongjiang, Jilin, and Liaoning, bordering Russia and North Korea. In winter, it becomes one of the world\'s most extreme cold-weather destinations. Harbin\'s International Ice and Snow Sculpture Festival is the largest of its kind: entire buildings (castles, cathedrals, pagodas) sculpted from blocks of ice pulled from the frozen Songhua River, illuminated in neon at night. China Snow Town (中国雪乡), 5 hours from Harbin, is a village buried under 2 metres of powder snow — thanks to a unique microclimate where Siberian cold fronts meet moist air from the Sea of Japan. This route is a winter-only trip (December-February).</p>
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