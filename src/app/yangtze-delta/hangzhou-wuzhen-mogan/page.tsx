import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import SignatureCard from '@/components/SignatureCard';
import TourCTA from '@/components/TourCTA';
import NextSteps from '@/components/NextSteps';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Hangzhou-Wuzhen-Moganshan (5-6 Days) | Tea, Water Towns & Bamboo Mountains | BeforeChina',
  description: 'A slower Yangtze Delta route: West Lake, Longjing tea terraces, Wuzhen water town at night, and Moganshan\'s bamboo forests and Republican-era villas.',
  alternates: { canonical: '/yangtze-delta/hangzhou-wuzhen-mogan' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Wuzhen worth staying overnight?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Wuzhen has two sections: East Gate (东栅, more authentic, closes at 5pm) and West Gate (西栅, more polished, stays open until 10pm). The West Gate at night — lanterns reflecting in canals, empty stone bridges, and the sound of water — is completely different from the crowded daytime version. Stay inside the West Gate scenic area (¥600-1,500/night) for the full experience after the gates close to non-guests.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: 'Hangzhou, Wuzhen & Moganshan: Tea, Water Towns & Mountain Retreats', item: 'https://beforechina.com/yangtze-delta/hangzhou-wuzhen-mogan' },
  ],
};

const STOPS = [
  { day: 'Day 1: Shanghai → Hangzhou', content: `Take the 1-hour train from Shanghai to Hangzhou. Afternoon: West Lake — walk the Su Causeway, visit the Leifeng Pagoda (¥40) for the lake panorama, and sit at a lakeside tea house. Evening: dinner at Louwailou (楼外楼, est. 1848) — Hangzhou\'s most famous restaurant, serving West Lake vinegar fish and dongpo rou on the lake shore.`, tip: `Louwailou is expensive by Chinese standards (¥200-300/person) and some say it is resting on its reputation. But the location — right on the lake with views of the pagoda — is unbeatable. Book a window table. The West Lake vinegar fish (西湖醋鱼) is the dish to order.` },
  { day: 'Day 2: Hangzhou Tea Culture', content: `Early morning: cycle to Longjing tea village (龙井村) before the tour buses arrive. Walk through the tea terraces to the China Tea Museum. Midday: lunch at a tea farmer\'s house — they will cook simple Hangzhou dishes and serve their own tea. Afternoon: visit Meijiawu (梅家坞), a less touristy tea village further into the hills. Learn to brew Longjing tea properly — 80°C water, not boiling, steeped for 2-3 minutes in a glass cup so you can watch the leaves unfurl.`, tip: `Longjing tea should be brewed at 80°C, not boiling. Boiling water scalds the leaves and makes the tea bitter. If you are at a tea farmer\'s house and they pour boiling water on the tea, they are serving you low-grade leaves that can handle the heat. Good Longjing is brewed with water cooled for 2-3 minutes after boiling.` },
  { day: 'Day 3: Hangzhou → Wuzhen', content: `Take a 1-hour bus from Hangzhou to Wuzhen (¥35). Wuzhen (乌镇) is one of China\'s six famous water towns, but the only one truly worth staying overnight. Check into a hotel inside the West Gate scenic area (book 2-4 weeks ahead). Afternoon: explore the West Gate — the indigo fabric workshop, the wedding museum, the ancient bed museum (surprisingly interesting). Walk the canals, cross the stone bridges. Evening: this is why you came. After 5pm, the West Gate empties of day-trippers. The lanterns come on. The canals become mirrors. Walk the bridges in near solitude. Dinner at a canal-side restaurant.`, tip: `Wuzhen West Gate entrance: ¥150. If you stay inside the scenic area, you pay once and can come and go. The hotels inside are run by the Wuzhen management company — consistent quality but not cheap (¥600-1,500/night). Book on the official Wuzhen website or Trip.com. The cheaper guesthouses outside the gate mean you miss the empty night-time canals, which is the entire point of Wuzhen.` },
  { day: 'Day 4: Wuzhen → Moganshan', content: `Morning: visit Wuzhen\'s East Gate (东栅, ¥110) — older, less polished, with residents still living in the old houses. The East Gate has a lived-in quality the West Gate lacks. After lunch, take a Didi to Moganshan (1.5 hrs, ¥300). Moganshan (莫干山) is a bamboo-covered mountain at 700m where Shanghai\'s colonial elite built stone villas in the 1920s to escape the summer heat. It is now China\'s most famous mountain resort — boutique guesthouses, bamboo forests, and hiking trails. Check into a guesthouse and walk the villa trail.`, tip: `Moganshan is a 1.5-hour drive from Wuzhen. There is no train — you need a private car or Didi (¥300). The mountain road is winding — take motion sickness pills if you are prone. The temperature is 5-8°C cooler than Hangzhou — it genuinely is a summer escape.` },
  { day: 'Day 5: Moganshan → Shanghai', content: `Morning: hike the Bamboo Forest Trail (2-3 hours) — a network of stone paths through dense bamboo groves that filter the light into green. Visit the Moganshan Villa (蒋介石官邸), where Chiang Kai-shek stayed in the 1930s, and the Sword Pond (剑池), a waterfall and pool where swords were supposedly forged 2,500 years ago. Afternoon: drive back to Shanghai (2.5 hrs, ¥400 by Didi) or take a bus from Deqing to Shanghai (2.5 hrs). Fly out in the evening or stay the night.`, tip: `Moganshan is about atmosphere, not sights. The villa trail, the bamboo forest, the morning mist — it is a place to slow down, not check off a list. The best guesthouses (naked Retreats, Le Passage Mohkan Shan) are ¥1,500-3,000/night and book out weeks in advance. Mid-range guesthouses (¥400-800) are still excellent.` },
];
const PRACTICAL = [
  { title: 'Getting There', body: `Shanghai-Hangzhou: high-speed train (1 hr, ¥75). Hangzhou-Wuzhen: bus from Hangzhou East Bus Station (1 hr, ¥35). Wuzhen-Moganshan: private car/Didi (1.5 hrs, ¥300). Moganshan-Shanghai: bus from Deqing (2.5 hrs, ¥80) or private car (2.5 hrs, ¥400).` },
  { title: 'Where to Stay', body: `Hangzhou: near West Lake (\$50-120/night). Wuzhen: inside the West Gate scenic area (¥600-1,500/night). Moganshan: boutique guesthouses in the bamboo forest (\$60-400/night depending on luxury level). Book Moganshan 2-4 weeks ahead for weekends.` },
  { title: 'When to Go', body: `March-May and September-November. Moganshan is at its best in April (bamboo shoots emerging) and October (autumn colours). Summer (June-August) is Moganshan\'s high season for the mountain cool — prices double. Winter is quiet but cold and damp — many guesthouses close.` },
];
const NEXT_STEPS = [
  { href: '/yangtze-delta/shanghai-hangzhou-suzhou', label: 'Shanghai-Suzhou route', description: 'Add Shanghai\'s skyline and Suzhou\'s classical gardens' },
  { href: '/yangtze-delta/nanjing-zhenjiang-yangzhou', label: 'Nanjing route', description: 'Extend west to Nanjing and Yangzhou' },
];

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />
      <section className="hero-editorial" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Kicker>Yangtze Delta · 5-6 Days</Kicker>
          <h1>Hangzhou, Wuzhen & Moganshan: Tea, Water Towns & Mountain Retreats</h1>
          <p className="hero-subtitle" style={{ marginBottom: '0' }}>Hangzhou\'s tea terraces at dawn, Wuzhen\'s lantern-lit canals after the day-trippers leave, and Moganshan\'s bamboo forests — a slower, deeper Yangtze Delta.</p>
        </div>
      </section>
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="article-card" style={{ borderLeft: '3px solid var(--accent-color)', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Route Overview</h2>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div><div style={{ fontWeight: 600 }}>5-6 days</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Route</div><div style={{ fontWeight: 600 }}>Shanghai → Hangzhou → Wuzhen → Moganshan → Shanghai</div></div>
              <div><div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div><div style={{ fontWeight: 600, color: 'var(--accent-color)' }}>\$600-900/person</div></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>This route skips Suzhou\'s crowded gardens for something quieter: Wuzhen, a water town that is best experienced overnight when the day-trippers are gone, and Moganshan (Mount Mogan), a bamboo-covered mountain retreat where Shanghai\'s elite built stone villas in the 1920s. It is a slower, more atmospheric Yangtze Delta — tea at the source, canals after dark, and bamboo forests in the clouds.</p>
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