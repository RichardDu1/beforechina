import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Changbaishan (4-5 Days) | North Korea Border Mountain & Heavenly Lake | BeforeChina',
  description: 'Changbaishan\'s crater lake on the North Korean border, volcanic hot springs, and winter powder skiing — 4-5 days at China\'s most sacred mountain.',
  alternates: { canonical: '/dongbei/changbaishan' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can you actually see North Korea from Changbaishan?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The crater lake is bisected by the China-North Korea border. From the western slope viewing platform (accessible from the Chinese side), you look across the lake at the North Korean side. You will see North Korean territory but not North Korean people — the North Korean side of the mountain is undeveloped. The border is marked by a stone pillar at the viewing platform. You can take photos but do not cross — the Chinese military patrols the area.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Changbaishan: Heavenly Lake on the North Korean Border', item: 'https://beforechina.com/dongbei/changbaishan' },
  ],
};

const STOPS = [
  { day: 'Day 1: Arrive Changbaishan', content: `Fly into Changbaishan Airport (NBS) from Beijing (2 hrs), Shanghai (3 hrs), or Harbin (1 hr). The airport is 30 minutes from the Wanda Resort (万达度假区) — a ski resort town with hotels, restaurants, and hot springs. Check into your hotel. Afternoon: explore the resort, rent ski gear for tomorrow. Evening: outdoor hot springs (¥200-300) — soaking in 40°C volcanic water while the air temperature is -20°C, steam rising into the pine forest.`, tip: `Changbaishan Airport (NBS) is small — 2-3 flights per day in winter, more in summer. Book flights 2-3 weeks ahead. The Wanda Resort is a purpose-built ski town (opened 2012) with international-standard hotels (Hyatt, Westin, Holiday Inn). It is expensive by Chinese standards but convenient. The hot springs are genuine volcanic springs — the water is rich in minerals and comes out of the ground at 60°C.` },
  { day: 'Day 2: Changbaishan — Heavenly Lake (Winter)', content: `Take a 30-minute bus from Wanda Resort to the Changbaishan Western Slope entrance (¥125 + ¥85 shuttle bus). In winter, the mountain is accessed by snowmobile (¥135) from the shuttle bus stop to the crater rim. The ride is 10 minutes at -25°C — cover every inch of skin. At the rim, you emerge at the Heavenly Lake viewing platform at 2,189m. The lake is frozen solid from November to June — a white disc surrounded by black volcanic peaks. The wind at the rim is brutal (-30°C with wind chill). Spend 15-20 minutes (that is all you will manage in the cold), then snowmobile down. Afternoon: hot springs to recover. Evening: Korean BBQ (Changbaishan has a large ethnic Korean population).`, tip: `Heavenly Lake is visible about 30% of the time — clouds and snow close the mountain frequently. Check the forecast and go on the clearest day of your trip. The mountain opens at 8am — go early for the best visibility. The wind at the crater rim is the most intense cold you will ever experience. Seriously — ski goggles, balaclava, everything covered.` },
  { day: 'Day 3: Changbaishan Skiing', content: `Full day skiing at Wanda Changbaishan International Resort. The resort has 43 ski runs across 5 mountains, with a vertical drop of 387m. The snow is dry powder (Changbaishan gets 1-2m of natural snowfall annually) — the best in China. The resort has a gondola, chairlifts, and magic carpets for beginners. Ski rental: ¥400-600/day including skis, boots, poles, and helmet. Afternoon: snowmobile tour through the birch forest (¥300/hr) or a dog sled ride (¥200). Evening: Korean BBQ and soju.`, tip: `Wanda Changbaishan ski passes: ¥450-650/day in peak season (December-February), ¥300-450 in shoulder season. The resort is less crowded than Yabuli (Harbin) and the snow quality is better. The runs are intermediate-friendly — not extreme terrain. The resort has English-speaking instructors (¥400-600/hr).` },
  { day: 'Day 4: Changbaishan → Yanji (Optional)', content: `Option A: morning skiing or hot springs, then fly out from Changbaishan Airport. Option B: drive 3 hours to Yanji (延吉) — the capital of the Yanbian Korean Autonomous Prefecture. Yanji is a Chinese city that feels Korean: street signs in Chinese and Korean, Korean BBQ on every corner, and locals speaking Korean as their first language. Visit the Yanbian University area for Korean street food — tteokbokki (spicy rice cakes), kimbap (seaweed rice rolls), and naengmyeon (cold noodles). The Yanbian Korean culture is a unique Dongbei experience.`, tip: `Yanji is a fascinating cultural hybrid. The ethnic Koreans in Yanbian are Chinese citizens but speak Korean, watch South Korean TV, and maintain Korean cultural traditions. The Korean food in Yanji is authentic — many restaurants are run by families who have been in Dongbei for generations. The city is 30 minutes from the North Korean border (Tumen).` },
  { day: 'Day 5: Yanji → Depart', content: `Morning: visit the Tumen border area (图们) — a bridge across the Tumen River where you can look into North Korea (the city of Namyang is visible). The border observation deck (¥25) has telescopes pointed at the North Korean side. Afternoon: fly out from Yanji Chaoyangchuan Airport (YNJ) or take the 2-hour high-speed train to Changchun (¥100) for connections.`, tip: `The Tumen border observation deck is a strange experience — Chinese tourists taking selfies while North Korean soldiers patrol the opposite bank. You can see Namyang\'s houses, a statue of Kim Il-sung, and sometimes people going about their day. It is the closest most people will get to North Korea.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Fly into Changbaishan Airport (NBS) from Beijing (2 hrs), Shanghai (3 hrs), or Harbin (1 hr). The airport is 30 min from Wanda Resort. Yanji Airport (YNJ) is an alternative gateway with more flights. High-speed trains: Yanji-Changchun (2 hrs), Changchun-Beijing (4 hrs).` },
  { title: 'Where to Stay', body: `Wanda Resort: Holiday Inn (¥500-800/night), Westin (¥800-1,500), Hyatt (¥1,000-2,000). Budget options in Songjianghe town (¥150-300/night). Yanji: city centre (¥200-400/night). Wanda Resort prices are highest December-February.` },
  { title: 'When to Go', body: `Winter (December-February): skiing and frozen Heavenly Lake. Summer (June-August): hiking, wildflowers, and unfrozen lake (the lake is a deep blue crater). May and September-October: shoulder season, fewer crowds, moderate weather. The lake is most likely to be visible in September-October.` },
  { title: 'What to Wear (Winter)', body: `Same as Harbin: thermal layers, down jacket rated to -30°C, insulated boots, balaclava, goggles, hand warmers. The crater rim at 2,189m is significantly colder and windier than the resort. The resort has rental gear if you do not have your own.` },
];
const NEXT_STEPS = [
  { href: '/dongbei/harbin-snow-town', label: 'Harbin & Snow Town', description: 'Combine with Harbin\'s Ice Festival for the full Dongbei winter' },
  { href: '/golden-triangle/beijing-in-depth', label: 'Beijing in depth', description: 'Beijing is the gateway to Dongbei' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Dongbei · 4-5 Days</Kicker>
          <h1>Changbaishan: Heavenly Lake on the North Korean Border</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>A volcanic crater lake straddling the China-North Korea border, natural hot springs in -30°C, and China\'s best powder skiing — Changbaishan is Dongbei\'s wildest destination.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>4-5 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Beijing/Shanghai → Changbaishan → Yanji (optional)</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$500-800/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>Changbaishan (长白山, \'Ever-White Mountain\') is a dormant volcano on the China-North Korea border. Its crater lake, Tianchi (天池, \'Heavenly Lake\'), sits at 2,189m and is the world\'s highest volcanic crater lake. The mountain is sacred to both Koreans (who consider it the birthplace of the Korean people) and Manchus (who considered it their ancestral homeland). In winter, Changbaishan offers China\'s best powder skiing at the Wanda Resort. In summer, it is a cool escape with wildflowers and alpine scenery. The North Korean border runs through the middle of the lake — you can literally look into North Korea from the viewing platform.</p>
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