import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Qingdao & Yantai (4-5 Days) | Shandong Coast & Beer Culture | BeforeChina',
  description: 'Qingdao\'s German colonial architecture, Tsingtao Beer Museum, and fresh seafood plus Yantai\'s wine region — 4-5 days on the Shandong coast.',
  alternates: { canonical: '/shandong/qingdao-yantai' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Qingdao worth visiting outside of the beer festival?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Tsingtao International Beer Festival (July-August) is a crowded, commercialised event — fun but not the best time to visit. Qingdao is at its best in May-June and September-October: pleasant weather, empty beaches, and the German architecture is beautiful in the soft light. The beer museum, the old town, and the fresh seafood are year-round attractions.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Qingdao & Yantai: Beaches, Beer & German Colonial History', item: 'https://beforechina.com/shandong/qingdao-yantai' },
  ],
};

const STOPS = [
  { day: 'Day 1: Arrive Qingdao', content: `Fly into Qingdao Jiaodong Airport (TAO). Transfer to the old town. Afternoon: walk the German Quarter around the Zhanqiao Pier (栈桥) — a 440m pier with a Chinese pavilion at the end, Qingdao\'s symbol. Then St. Michael\'s Cathedral (圣弥额尔大教堂, ¥10) — a German-built Catholic cathedral from 1934, the largest Gothic building in China. Walk through the old town\'s cobbled streets past German colonial buildings now housing cafes, galleries, and seafood restaurants. Evening: fresh Tsingtao beer and seafood on a rooftop terrace in the old town.`, tip: `Qingdao\'s old town is compact and walkable — you can see the main sights in an afternoon. The German buildings are concentrated around Zhanqiao Pier and the cathedral. Tsingtao beer is ¥5-10 per bottle in restaurants. The fresh draft version is lighter and better than the exported bottled version.` },
  { day: 'Day 2: Qingdao', content: `Morning: Tsingtao Beer Museum (青岛啤酒博物馆, ¥60) — built in the original 1903 brewery, with the old copper brewing kettles, a history of the German and Japanese ownership of the brewery, and a tasting room with unlimited fresh draft beer (the best museum tasting in China). Afternoon: Badaguan (八大关, \'Eight Great Passes\') — a neighbourhood of tree-lined streets and European villas built in the 1920s-30s, named after Chinese military passes. Walk to Huashi Lou (花石楼, ¥8.50) — a granite castle built by a Russian aristocrat in 1932. Evening: seafood at a local restaurant — Qingdao\'s specialities are clams (蛤蜊), sea cucumber (海参), and mackerel dumplings (鲅鱼饺子).`, tip: `The Tsingtao Beer Museum tasting room gives you two glasses of fresh draft beer — one unfiltered (cloudy, yeasty, the best) and one filtered. The unfiltered beer only exists in Qingdao — it has a 24-hour shelf life and cannot be exported. Badaguan is most beautiful in autumn when the plane trees turn gold.` },
  { day: 'Day 3: Qingdao → Yantai', content: `Take the 1-hour high-speed train from Qingdao North to Yantai (¥80). Yantai is a quieter coastal city. Visit Changyu Wine Culture Museum (张裕酒文化博物馆, ¥80) — China\'s oldest winery (1892), with a labyrinthine underground cellar of 100-year-old oak barrels (the \'underground wine city\'). Wine tasting included. Afternoon: Yantai Mountain (烟台山, free) — a headland park with a lighthouse, former consulate buildings (Yantai was a treaty port), and views over the Yellow Sea. Evening: Yantai seafood — the city is famous for sea urchin, abalone, and prawns from the cold Yellow Sea waters.`, tip: `Changyu Winery was founded by Zhang Bishi, a Chinese entrepreneur who brought French vines and Austrian winemakers to Yantai in 1892. The underground cellar (1,976 m²) has 158 oak barrels, 3 of which are the original 100-year-old barrels. The wine is decent but not world-class — the experience is the history and the cellar. Yantai produces 40% of China\'s wine.` },
  { day: 'Day 4: Penglai Day Trip', content: `Take a 1-hour bus from Yantai to Penglai (蓬莱, ¥25). Penglai is a coastal town famous in Chinese mythology as the home of the Eight Immortals and the place where mirages appear over the sea. Visit Penglai Pavilion (蓬莱阁, ¥140) — a Song dynasty (1061) pavilion complex on a cliff above the sea, one of China\'s \'Four Great Towers\'. The view from the pavilion across the Bohai Sea is spectacular — on clear days you can sometimes see a mirage of distant islands. Afternoon: Penglai Polar Ocean World (¥190) if you want an aquarium, or walk the beach at Golden Beach (金沙滩). Evening: bus back to Yantai, train back to Qingdao.`, tip: `Penglai Pavilion is the highlight. The entrance (¥140) is steep but includes the pavilion, an ancient ship museum, and the surrounding fortifications. The mirage phenomenon (海市蜃楼) occurs occasionally in spring and early summer when warm air sits over the cold sea — it is rare but real. The pavilion has been a tourist attraction for 1,000 years.` },
  { day: 'Day 5: Depart Qingdao', content: `Fly out from Qingdao. If your flight is in the afternoon: visit Laoshan Mountain (崂山, ¥130) — a sacred Daoist mountain 30 km east of Qingdao, with temples, waterfalls, and coastal hiking trails. The mountain rises directly from the sea — one of the few places in China where you can hike from the beach to a mountain summit in a few hours. The Qingdao Beer Street (啤酒街) near the museum is a final feast of seafood and draft beer.`, tip: `Laoshan is a half-day trip from Qingdao (40 min by bus, ¥10). The mountain is sacred to Daoism and has a working Daoist temple (Taiqing Palace, ¥27). The coastal hiking trail from Taiqing Palace to Yangkou has views of the Yellow Sea and the mountain\'s granite peaks.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Fly into Qingdao (TAO). High-speed trains: Qingdao-Yantai (1 hr, ¥80), Qingdao-Beijing (3 hrs, ¥180), Qingdao-Shanghai (5 hrs, ¥350). Penglai: 1 hr by bus from Yantai (¥25).` },
  { title: 'Where to Stay', body: `Qingdao: old town near Zhanqiao Pier (\$40-100/night) or Badaguan for a quieter stay (\$60-150/night). Yantai: near the coast or Yantai Mountain (\$30-70/night).` },
  { title: 'When to Go', body: `May-June and September-October. July-August is the Tsingtao Beer Festival — fun but crowded and hotel prices double. The water is warm enough for swimming July-September. Avoid winter (December-February) — cold, windy, and many beachfront places close.` },
  { title: 'What to Eat', body: `Qingdao: fresh draft Tsingtao beer (¥5-10), clams in chilli (辣炒蛤蜊), mackerel dumplings (鲅鱼饺子), and seafood BBQ on the street. Yantai: sea urchin, abalone, and Changyu wine. The Shandong coast has China\'s best seafood — it is fresh, cheap, and simply prepared.` },
];
const NEXT_STEPS = [
  { href: '/shandong/taishan-qufu', label: 'Mount Tai & Qufu', description: 'Add Confucius\'s hometown and China\'s most sacred mountain' },
  { href: '/golden-triangle/beijing-in-depth', label: 'Beijing in depth', description: 'Beijing is 3 hours from Qingdao by train' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Shandong · 4-5 Days</Kicker>
          <h1>Qingdao & Yantai: Beaches, Beer & German Colonial History</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>China\'s beer capital with German colonial architecture, a coastline of sandy beaches, fresh seafood from the Yellow Sea, and China\'s oldest wine region.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>4-5 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Qingdao → Yantai → Penglai → Qingdao</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$450-700/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Qingdao (青岛) is China\'s most European-feeling coastal city — a legacy of German colonial rule from 1898-1914. The German Quarter has Bavarian-style buildings, the city\'s most famous export is Tsingtao Beer (founded by German settlers in 1903), and the coastline is lined with sandy beaches and rocky headlands. Yantai (烟台), 1 hour north by train, is China\'s oldest wine region — Changyu Winery was founded here in 1892 and the climate and soil are comparable to Bordeaux. This is a relaxed coastal route: beer, seafood, beaches, and German architecture.</p>
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