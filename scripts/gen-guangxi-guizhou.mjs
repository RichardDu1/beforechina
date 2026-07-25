import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const APP_DIR = path.resolve(__dirname, '..', 'src', 'app');

// ---------- template helpers ----------
const esc = (s) => s.replace(/'/g, "\\'").replace(/\n/g, ' ');

const HIGHLIGHT_ICONS = {
  clock:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  map: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  star: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
};

function generateRelatedSection(related) {
  if (!related || related.length === 0) return '';
  const items = related
    .map(
      (r) => `{
              href: '${esc(r.href)}',
              label: '${esc(r.label)}',
              description: '${esc(r.description)}',
              image: '${esc(r.image)}',
              imageAlt: '${esc(r.imageAlt)}',
              days: '${esc(r.days)}',
            }`,
    )
    .join(',\n            ');
  return `        <NextSteps
            steps={[
            ${items},
            ]}
          />`;
}

/**
 * Generate one page file with the new editorial layout.
 */
function writePage(dir, slug, data) {
  const fullDir = path.join(APP_DIR, dir, slug);
  fs.mkdirSync(fullDir, { recursive: true });

  const highlightsJsx = data.highlights
    .map((h) => {
      const iconSvg = HIGHLIGHT_ICONS[h.icon] || HIGHLIGHT_ICONS.star;
      return `{
                icon: \`${iconSvg}\`,
                title: '${esc(h.title)}',
                description: '${esc(h.description)}',
              }`;
    })
    .join(',\n              ');

  const stopsJsx = data.stops
    .map(
      (s) => `{
                day: '${esc(s.day)}',
                content: \`${esc(s.content)}\`,
                tip: \`${esc(s.tip)}\`,
              }`,
    )
    .join(',\n              ');

  const relatedSection = generateRelatedSection(data.related);

  const code = `import { Metadata } from 'next';
import Kicker from '@/components/Kicker';
import NextSteps from '@/components/NextSteps';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '${esc(data.title)} | BeforeChina',
  description: '${esc(data.subtitle)}',
  alternates: { canonical: '/${dir}/${slug}' },
  openGraph: {
    type: 'article',
    url: 'https://beforechina.com/${dir}/${slug}',
    title: '${esc(data.title)} | BeforeChina',
    description: '${esc(data.subtitle)}',
    images: [{ url: '${esc(data.heroImage)}', width: 1200, height: 630, alt: '${esc(data.heroImageAlt)}' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '${esc(data.title)} | BeforeChina',
    description: '${esc(data.subtitle)}',
    images: ['${esc(data.heroImage)}'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to experience ${esc(data.title)}?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This journey typically takes ${esc(data.duration)}. ${esc(data.overview.slice(0, 200))}',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this itinerary customizable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — every BeforeChina journey is 100% tailor-made. The itinerary above is a suggested framework. We can adjust the pace, add or remove stops, and tailor every detail to your interests.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beforechina.com' },
    { '@type': 'ListItem', position: 2, name: '${esc(data.title)}', item: 'https://beforechina.com/${dir}/${slug}' },
  ],
};

export default function Page() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <JsonLd data={[faqSchema, breadcrumbSchema]} id="schema" />

      {/* Full-bleed Hero Image */}
      <section style={{ position: 'relative', width: '100%', height: '60vh', minHeight: '400px', overflow: 'hidden' }}>
        <img
          src="${esc(data.heroImage)}"
          alt="${esc(data.heroImageAlt)}"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </section>

      {/* Title + Evocative Description */}
      <section style={{ padding: 'var(--section-gap-sm) 0 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}>
          <Kicker>${esc(data.kicker)} &middot; ${esc(data.duration)}</Kicker>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 500, marginBottom: '20px', lineHeight: 1.1 }}>
            ${esc(data.title)}
          </h1>
          <p style={{ fontFamily: 'var(--font-quote)', fontSize: 'clamp(16px, 2.5vw, 20px)', color: 'var(--text-secondary)', lineHeight: 1.5, maxWidth: '600px', margin: '0 auto' }}>
            ${esc(data.subtitle)}
          </p>
        </div>
      </section>

      {/* Trip Highlights */}
      <section style={{ padding: 'var(--section-gap-sm) 0' }}>
        <div className="container" style={{ maxWidth: 'var(--content-width-wide)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
            {[
              ${highlightsJsx},
            ].map((h) => (
              <div key={h.title} style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--primary-color)', marginBottom: '12px', opacity: 0.85 }}>
                  <span dangerouslySetInnerHTML={{ __html: h.icon }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
                  {h.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.5, maxWidth: '280px', margin: '0 auto' }}>
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-by-Day Narrative */}
      <section style={{ padding: 'var(--section-gap-sm) 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-width-narrow)', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3.5vw, 34px)', fontWeight: 500, marginBottom: '40px', textAlign: 'center' }}>
            The Journey
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.8, marginBottom: '48px' }}>
            ${esc(data.overview)}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              ${stopsJsx},
            ].map((stop, i) => (
              <div
                key={stop.day}
                style={{
                  padding: '40px 0',
                  borderBottom: i < ${data.stops.length - 1} ? '1px solid var(--border-color)' : 'none',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 500, marginBottom: '12px' }}>
                  {stop.day}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.8, marginBottom: '16px' }}>
                  {stop.content}
                </p>
                <blockquote className="pull" style={{ margin: '16px 0 0', fontSize: '16px' }}>
                  <strong>Local tip:</strong> {stop.tip}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailor-Made Signal */}
      <section style={{ padding: 'var(--section-gap-sm) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-quote)', fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
            This is a suggested itinerary. Every journey we design is tailored to your interests, pace, and budget.
          </p>
        </div>
      </section>

      {/* Enquiry Form */}
      <EnquiryForm />

      {/* Related Journeys */}
      ${relatedSection}
    </div>
  );
}
`;

  fs.writeFileSync(path.join(fullDir, 'page.tsx'), code, 'utf-8');
}

// ====== GUANGXI + GUIZHOU ROUTES ======

const routes = [
  // --- GUANGXI ---
  {
    dir: 'guangxi',
    slug: 'guilin-yangshuo-lijiang',
    metaTitle: 'Guilin-Yangshuo Li River (3-4 Days) | Guangxi Travel Guide',
    metaDesc:
      "The classic Guilin to Yangshuo route: Li River cruise, karst peaks, Yangshuo cycling, and rice terraces — China's most iconic landscape in 3-4 days.",
    kicker: 'Guangxi',
    title: "Guilin & Yangshuo: China's Most Beautiful Landscape",
    subtitle:
      "The 20 RMB note view, a Li River bamboo raft through karst peaks, and cycling through Yangshuo's rice paddies — this is the China you imagined.",
    duration: '3-4 days',
    route: 'Guilin → Li River → Yangshuo → Longji Rice Terraces',
    heroImage: '/images/destinations/guangxi.webp',
    heroImageAlt: 'Li River karst peaks in Guilin',
    highlights: [
      {
        icon: 'clock',
        title: '3-4 Days',
        description:
          "The perfect first-timer's Guilin trip — the iconic Li River cruise and Yangshuo countryside in a long weekend.",
      },
      {
        icon: 'map',
        title: 'Guilin → Yangshuo → Longji',
        description:
          'Connected by road — Guilin is the hub, Yangshuo is 1.5 hours south, Longji is 2.5 hours north.',
      },
      {
        icon: 'star',
        title: 'Li River, Karst Peaks, Rice Terraces',
        description:
          'The 20 RMB note view, bamboo rafting through limestone peaks, and cycling through rice paddies.',
      },
    ],
    experienceTypes: ['nature', 'photography'],
    overview:
      "Guilin's karst landscape — limestone peaks rising vertically from flat rice paddies — is the most reproduced image of China. It is on the 20 RMB note. It inspired generations of Chinese landscape painting. And it genuinely looks like the photos. The classic route is simple: Guilin city as the entry point, the Li River cruise to Yangshuo (4 hours through the heart of the karst), 2 days exploring Yangshuo's countryside by bike and bamboo raft, and an optional day at the Longji Rice Terraces.",
    stops: [
      {
        day: 'Day 1: Guilin',
        content:
          "Fly into Guilin Liangjiang Airport (KWL). Guilin city itself is a pleasant small city with two lakes (Shanhu and Ronghu) connected by the Li River. Visit Elephant Trunk Hill (the city symbol, ¥55), walk around the Sun and Moon Pagodas on Shanhu Lake, and explore the night market on Zhengyang Pedestrian Street. Guilin rice noodles (桂林米粉) for breakfast tomorrow — this is the city's signature dish.",
        tip: 'Elephant Trunk Hill is ¥55 and takes 30 minutes. It is fine but not worth the price. Instead, walk the Binjiang Road promenade for a free view of the river and the karst peaks. The real Guilin experience starts tomorrow on the Li River.',
      },
      {
        day: 'Day 2: Li River → Yangshuo',
        content:
          "Option A: Take the 4-hour Li River cruise from Guilin to Yangshuo (departs 9am, arrives 1pm). The boat passes through the heart of the karst — peaks named 'Nine Horses Fresco Hill', 'Yellow Cloth Shoal' (this is the 20 RMB note view), and 'Mural Hill'. Option B: Drive to Yangdi (1 hr from Guilin) and take a bamboo raft from Yangdi to Xingping (90 min, ¥120/person) — this covers the most scenic section and avoids the large tour groups. From Xingping, take the 40-min bus to Yangshuo. Evening: West Street (Xi Jie) for dinner and bars.",
        tip: 'The bamboo raft from Yangdi to Xingping is the better experience — you are closer to the water, the rafts are smaller, and the scenery is the best section of the river. Each raft takes 4 people. If you are alone or a couple, you may need to wait for others to fill the raft or pay for the empty seats (¥50/seat).',
      },
      {
        day: 'Day 3: Yangshuo Countryside',
        content:
          'Rent a bicycle (¥30/day) or e-bike (¥60/day) and cycle into the Yangshuo countryside. The classic loop: Yangshuo → Aishanmen → Gongnong Bridge → Moon Hill → Baisha → Yulong River → Yangshuo (25 km, 3-4 hours). You cycle through rice paddies with karst peaks in every direction. Stop at Moon Hill (¥15, 800 steps up a natural limestone arch) for the panoramic view. Afternoon: Yulong River bamboo raft (¥200/raft, 90 min) — this is the quieter, more intimate river compared to the Li. The rafts here are actual bamboo (not motorised PVC) and poled by a boatman.',
        tip: 'The Yulong River bamboo raft is better than the Li River raft — no motors, just a boatman with a bamboo pole. The stretch from Jinlong Bridge to Jiuxian is the best section. Go before 10am or after 3pm to avoid the midday crowds. Wear shoes you can get wet — there are small weirs the raft slides down.',
      },
      {
        day: 'Day 4 (optional): Longji Rice Terraces',
        content:
          "Day trip from Guilin or Yangshuo to the Longji Rice Terraces (2.5-hour drive). The terraces were built by the Zhuang and Yao minorities over 600 years and look like dragon scales wrapping around the mountains. Two main viewpoints: Ping'an (the classic view, easier walk) and Jinkeng (larger, more dramatic, accessible by cable car ¥100 round trip). Visit one — both is too much for a day trip. Return to Guilin for your flight out.",
        tip: 'Longji is best May-June (flooded terraces reflect the sky) and September-October (golden rice ready for harvest). The Yao women at the entrance will offer to carry your bag up (¥50) — they are genuinely helpful and the income supports their village. You can hire one even if your bag is light.',
      },
    ],
    related: [
      {
        href: '/guangxi/guilin-longji-xingping',
        label: 'Extended Guilin Route',
        description:
          'Add Longji Terraces and Xingping photography spots for a deeper Guangxi experience.',
        image: '/images/destinations/guangxi.webp',
        imageAlt: 'Longji Rice Terraces at sunrise',
        days: '5-6 days',
      },
      {
        href: '/guizhou/huangguoshu-libo-miao',
        label: 'Full Guizhou Route',
        description: "Combine Guilin with Guizhou's waterfalls, karst rivers, and Miao villages.",
        image: '/images/destinations/guizhou.webp',
        imageAlt: 'Huangguoshu Waterfall in Guizhou',
        days: '5-6 days',
      },
      {
        href: '/yunnan/kunming-dali-lijiang-shangri-la',
        label: 'Classic Yunnan Route',
        description:
          'Continue west to Yunnan — the classic backpacker trail through Dali, Lijiang, and Shangri-La.',
        image: '/images/destinations/yunnan.webp',
        imageAlt: 'Dali Old Town with Cangshan mountains',
        days: '8-12 days',
      },
    ],
  },
  {
    dir: 'guangxi',
    slug: 'guilin-longji-xingping',
    metaTitle: 'Guilin-Longji-Xingping (5-6 Days) | Deep Guangxi Photography Route',
    metaDesc:
      'An extended Guilin route: Longji Rice Terraces, Li River bamboo raft, Xingping sunrise, and Yangshuo cycling — 5-6 days for photographers and slow travellers.',
    kicker: 'Guangxi',
    title: "Guilin, Longji & Xingping: The Photographer's Guangxi",
    subtitle:
      "Longji's dragon-scale terraces at sunrise, the Li River at dawn from Xingping, and Yangshuo's karst countryside — Guangxi at its most photogenic.",
    duration: '5-6 days',
    route: 'Guilin → Longji → Yangshuo → Xingping → Yangshuo',
    heroImage: '/images/destinations/guangxi.webp',
    heroImageAlt: 'Longji Rice Terraces at sunrise',
    highlights: [
      {
        icon: 'clock',
        title: '5-6 Days',
        description:
          'A slower pace built around light — sunrise at the terraces, dawn on the Li River, and golden afternoons in Yangshuo.',
      },
      {
        icon: 'map',
        title: 'Guilin → Longji → Xingping',
        description:
          "A loop through Guangxi's most photogenic spots — terraces, rivers, and ancient towns.",
      },
      {
        icon: 'star',
        title: 'Sunrise Chasing, Bamboo Rafting, Cycling',
        description:
          "A photographer's itinerary — mist-filled valleys at dawn, the 20 RMB note view, and karst countryside cycling.",
      },
    ],
    experienceTypes: ['nature', 'photography'],
    overview:
      "This extended Guilin route is built around light. Longji Rice Terraces at sunrise, when mist fills the valley. Xingping at dawn, when the 20 RMB note view is at its best and the tour groups haven't arrived. Yangshuo's countryside in golden afternoon light. It is the same destinations as the 3-4 day route but at a slower pace that rewards photographers and travellers who want more than a checklist.",
    stops: [
      {
        day: 'Day 1: Guilin → Longji',
        content:
          "Arrive Guilin (KWL). Drive 2.5 hours directly to Longji Rice Terraces. Check into a guesthouse in Ping'an Village (the most accessible terrace area). Afternoon: walk the paths between Ping'an and the 'Seven Stars Accompanying the Moon' viewpoint — the classic Longji photo. The terraces are flooded April-June and golden September-October. Evening: Zhuang minority dinner at your guesthouse — bamboo rice (竹筒饭) cooked inside a bamboo tube over a fire, and smoked pork with wild vegetables.",
        tip: "Stay inside the terrace area, not at the entrance gate. Ping'an Village has guesthouses with terrace-view rooms (¥200-400/night). You will need to walk 20-30 minutes uphill from the parking lot — pack light or hire a Yao porter (¥50).",
      },
      {
        day: 'Day 2: Longji → Guilin → Yangshuo',
        content:
          "Sunrise at Longji — the 'Nine Dragons and Five Tigers' viewpoint has the best morning light. After breakfast, walk to the Jinkeng Terraces (cable car ¥100 or 2-hour hike). Jinkeng is larger and more dramatic than Ping'an, with Yao minority villages scattered through the terraces. Descend by cable car, then drive back to Guilin (2.5 hrs). Take the afternoon bus to Yangshuo (1.5 hrs, ¥25). Evening: settle into Yangshuo and walk West Street.",
        tip: 'The Longji entrance is ¥80. Your ticket is checked at each village entrance — keep it accessible. The Yao women at Jinkeng wear traditional red clothing and floor-length hair wrapped in elaborate headdresses. They charge ¥20 for a photo — it is how they make a living in this remote area.',
      },
      {
        day: 'Day 3: Xingping & Li River',
        content:
          'Take the 40-minute bus from Yangshuo to Xingping (¥10). Xingping is a small riverside town that was the original county seat before Yangshuo. Walk the ancient street (1 km of Ming-Qing shopfronts), then climb Laozhai Mountain (40 min, steep) for the aerial view of the Li River bending through the karst — this is the 20 RMB note view from above. Afternoon: bamboo raft from Xingping to Nine Horses Fresco Hill and back (¥120, 1.5 hrs). Evening: stay overnight in Xingping — the town is quiet after the day-trippers leave at 5pm.',
        tip: 'Laozhai Mountain is free and the best view in Guilin. But the climb is genuinely steep — sections require using both hands on chains. Start 1 hour before sunset. Bring a headlamp for the descent. The trailhead is behind the Xingping Wharf.',
      },
      {
        day: 'Day 4: Xingping Sunrise → Yangshuo',
        content:
          'Sunrise at Xianggong Mountain (相公山, ¥60, 30-min drive from Xingping). The viewing platform overlooks the Li River in a perfect S-curve through a forest of karst peaks — this is THE Guilin sunrise photo. After sunrise, return to Yangshuo via the back roads through Baisha and Fuli villages. Afternoon: Yulong River bamboo raft and countryside cycling.',
        tip: 'Xianggong Mountain opens at 5am for sunrise. The platform has two levels — the upper level fills with tripods by 5:30am. Go early. The drive up is on a narrow paved road — a Didi from Yangshuo costs ¥80 each way.',
      },
      {
        day: 'Day 5: Yangshuo → Fly Out',
        content:
          'Morning: final Yangshuo cycling or a tai chi class by the river. Visit the Yangshuo Cooking School for a half-day class — learn to make Guilin rice noodles and beer fish (啤酒鱼, the local speciality). Afternoon: bus to Guilin (1.5 hrs) for your flight out.',
        tip: "Beer fish (啤酒鱼) is Yangshuo's signature dish — whole river fish braised in beer with tomatoes, peppers, and garlic. Every restaurant on West Street claims to be the original. Eat at a place locals recommend, not the ones with English menus and touts outside.",
      },
    ],
    related: [
      {
        href: '/guangxi/guilin-yangshuo-lijiang',
        label: 'Classic Guilin Route',
        description: 'The essential 3-4 day Guilin-Yangshuo itinerary for first-time visitors.',
        image: '/images/destinations/guangxi.webp',
        imageAlt: 'Li River karst peaks in Guilin',
        days: '3-4 days',
      },
      {
        href: '/guizhou/huangguoshu-libo-miao',
        label: 'Full Guizhou Route',
        description: "Combine Guilin with Guizhou's waterfalls, emerald rivers, and Miao villages.",
        image: '/images/destinations/guizhou.webp',
        imageAlt: 'Huangguoshu Waterfall in Guizhou',
        days: '5-6 days',
      },
      {
        href: '/yunnan/kunming-dali-lijiang-shangri-la',
        label: 'Classic Yunnan Route',
        description: 'Continue west to the ancient towns and mountain landscapes of Yunnan.',
        image: '/images/destinations/yunnan.webp',
        imageAlt: 'Dali Old Town with Cangshan mountains',
        days: '8-12 days',
      },
    ],
  },

  // --- GUIZHOU ---
  {
    dir: 'guizhou',
    slug: 'huangguoshu-libo-miao',
    metaTitle: 'Huangguoshu-Libo-Miao Villages (5-6 Days) | Guizhou Travel Guide',
    metaDesc:
      "Guizhou's greatest hits: Huangguoshu Waterfall, Libo's emerald karst rivers, and Xijiang Miao Village — 5-6 days through China's most underrated province.",
    kicker: 'Guizhou',
    title: 'Huangguoshu Waterfall, Libo & Miao Villages',
    subtitle:
      "Asia's largest waterfall, emerald karst rivers in Libo, and the world's largest Miao village — Guizhou is China's most underrated province.",
    duration: '5-6 days',
    route: 'Guiyang → Anshun (Huangguoshu) → Libo → Kaili (Xijiang) → Guiyang',
    heroImage: '/images/destinations/guizhou.webp',
    heroImageAlt: 'Huangguoshu Waterfall in Guizhou',
    highlights: [
      {
        icon: 'clock',
        title: '5-6 Days',
        description:
          "Cover Guizhou's three highlights at a comfortable pace — waterfalls, karst rivers, and minority villages.",
      },
      {
        icon: 'map',
        title: 'Guiyang → Anshun → Libo → Kaili',
        description:
          'Connected by new high-speed trains (the Guiyang-Libo line opened 2023). A loop from Guiyang.',
      },
      {
        icon: 'star',
        title: 'Huangguoshu, Libo, Miao Villages',
        description:
          "Asia's largest waterfall, UNESCO karst rivers, and the world's largest Miao village — Guizhou's greatest hits.",
      },
    ],
    experienceTypes: ['nature', 'culture'],
    overview:
      "Guizhou is the province that even Chinese tourists sleep on. It sits between Yunnan, Sichuan, and Guangxi, and has the best of all three: karst landscapes like Guilin, minority cultures like Yunnan, and spicy-sour food that rivals Sichuan. The infrastructure has improved dramatically — high-speed trains now connect the major towns — but foreign tourists are still rare. This route covers Guizhou's three highlights: Huangguoshu Waterfall (Asia's largest at 77.8m high and 101m wide), Libo's UNESCO karst rivers (think Guilin but with emerald-green water and one-tenth the tourists), and the Miao minority villages around Kaili.",
    stops: [
      {
        day: 'Day 1: Guiyang → Huangguoshu',
        content:
          "Fly into Guiyang Longdongbao Airport (KWE). Take the 30-minute high-speed train from Guiyang North to Anshun West (¥47), then a 40-minute bus to Huangguoshu Waterfall. The waterfall is 77.8m high and 101m wide — Asia's largest. Walk the path behind the waterfall through the 'Water Curtain Cave' (prepare to get wet — the spray is intense). The scenic area also includes Doupotang Waterfall (wider but shorter) and Tianxingqiao (a karst stone forest with bonsai trees and natural bridges). Spend 4-5 hours. Return to Anshun or Guiyang for the night.",
        tip: 'Huangguoshu entrance: ¥180 (summer) / ¥160 (winter). The Water Curtain Cave is the highlight — you walk behind a 77m curtain of water. A raincoat is essential (vendors sell them at the entrance for ¥5). Wear shoes with grip — the path is wet and slippery.',
      },
      {
        day: 'Day 2: Guiyang → Libo',
        content:
          'Take the high-speed train from Guiyang North to Libo (1.5 hrs, ¥120 — opened 2023, this line transformed Libo accessibility). Libo is a UNESCO World Heritage site of karst cone peaks, emerald rivers, and primeval forest. Check into your hotel, then visit the Small Seven Arches (Xiaoqikong) scenic area: a 1.5 km walking path along an emerald river past seven small stone bridges, waterfalls, and forest. The water colour is unreal — a milky turquoise from dissolved limestone.',
        tip: "Libo's water really is that colour — no filters needed. The Small Seven Arches ticket is ¥130 (summer) / ¥100 (winter) and includes the shuttle bus. Go after 3pm when the morning tour groups have left — the light is better and the path is quieter.",
      },
      {
        day: 'Day 3: Libo Full Day',
        content:
          "Morning: Daqikong (Big Seven Arches) scenic area — less famous than Xiaoqikong but arguably more dramatic, with a massive natural stone arch and a canyon walk along a turquoise river. Afternoon: explore Libo's countryside — the karst cone peaks here look like Guilin but are surrounded by rice paddies and Buyi minority villages instead of tourist shops. Rent an e-bike and cycle the country roads.",
        tip: "The Buyi people are Guizhou's largest minority. Their villages around Libo have stone houses with distinctive tiled roofs. Yaojia Village (瑶寨) is a Buyi village 5 km from Libo town — walkable, and you will be invited in for tea if you show genuine interest.",
      },
      {
        day: 'Day 4: Libo → Kaili',
        content:
          "Take the train from Libo to Guiyang (1.5 hrs), then transfer to a high-speed train to Kaili (40 min, ¥60). Kaili is the capital of the Qiandongnan Miao and Dong Autonomous Prefecture — the heart of Miao country. Afternoon: visit the Kaili Ethnic Minorities Museum (free, excellent context on Miao, Dong, and other Guizhou minorities) and the old street market. Evening: sour soup fish (酸汤鱼) — Guizhou's signature dish.",
        tip: "Sour soup fish (酸汤鱼) is a Guizhou invention — river fish poached in a broth of fermented tomatoes, pickled chillies, and wild herbs. It is sour, spicy, and unlike anything in Sichuan or Yunnan. The best is at Kaili's Laoteng Sour Soup Fish (老腾酸汤鱼).",
      },
      {
        day: 'Day 5: Xijiang Miao Village',
        content:
          "Take a 1-hour bus from Kaili to Xijiang Qianhu Miao Village (西江千户苗寨) — the world's largest Miao village, with 1,400 households built into a hillside amphitheatre. The wooden stilt houses (diaojiaolou) stack up the mountain in layers, and at night the lights make the whole hillside look like a galaxy. Walk through the village, visit the Miao embroidery workshop, and watch the daily dance performance at the central square. Stay overnight in the village — the night view from the observation platform is the reason to come.",
        tip: 'Xijiang entrance: ¥100. The village is touristy (Chinese tourists, not Western) but still genuinely inhabited by Miao people. The best experience is walking the back lanes away from the main street, where grandmothers sit in doorways doing embroidery and children play in the alleys. The night view from the observation platform is best around 8pm when all the houses are lit.',
      },
      {
        day: 'Day 6: Kaili → Fly Out',
        content:
          'Return to Kaili (1 hr). If your flight is in the evening, visit Langde Miao Village — a smaller, less touristy alternative to Xijiang (40 min from Kaili). Langde has a traditional welcome ceremony with rice wine at the village gate. Alternatively, visit a Dong village — Zhaoxing (3 hrs from Kaili) is the most famous Dong village with a drum tower and wind-rain bridge. Fly out from Guiyang in the evening.',
        tip: "Langde Miao Village charges ¥50 but the welcome ceremony (12-gun salute and rice wine) is included. The rice wine is strong — take a symbolic sip, don't drink the whole bowl unless you want to be carried back to the bus.",
      },
    ],
    related: [
      {
        href: '/guangxi/guilin-yangshuo-lijiang',
        label: 'Classic Guilin Route',
        description: "Combine Guizhou with Guangxi's iconic karst landscapes and the Li River.",
        image: '/images/destinations/guangxi.webp',
        imageAlt: 'Li River karst peaks in Guilin',
        days: '3-4 days',
      },
      {
        href: '/yunnan/kunming-dali-lijiang-shangri-la',
        label: 'Classic Yunnan Route',
        description:
          'Continue west to the ancient towns, mountain landscapes, and Tibetan culture of Yunnan.',
        image: '/images/destinations/yunnan.webp',
        imageAlt: 'Dali Old Town with Cangshan mountains',
        days: '8-12 days',
      },
      {
        href: '/sichuan/chengdu-jiuzhaigou-huanglong',
        label: 'Chengdu & Jiuzhaigou',
        description:
          'Head northwest to Sichuan for pandas, spicy hotpot, and turquoise alpine lakes.',
        image: '/images/destinations/sichuan.webp',
        imageAlt: 'Jiuzhaigou turquoise lakes',
        days: '5-7 days',
      },
    ],
  },
  {
    dir: 'guizhou',
    slug: 'fanjingshan-zhenyuan',
    metaTitle: 'Fanjingshan-Zhenyuan (4-5 Days) | Guizhou Sacred Mountain & Ancient Town',
    metaDesc:
      "Fanjingshan's otherworldly red cloud golden summit and Zhenyuan's 2,300-year-old riverside town — eastern Guizhou's twin UNESCO sites.",
    kicker: 'Guizhou',
    title: "Fanjingshan & Zhenyuan: Guizhou's Sacred Mountain",
    subtitle:
      'A 2,570m red cloud summit with a temple split between two rock pillars, and a 2,300-year-old town built along a river gorge — eastern Guizhou at its most dramatic.',
    duration: '4-5 days',
    route: 'Guiyang → Fanjingshan → Zhenyuan → Guiyang',
    heroImage: '/images/destinations/guizhou.webp',
    heroImageAlt: 'Fanjingshan Red Cloud Golden Summit',
    highlights: [
      {
        icon: 'clock',
        title: '4-5 Days',
        description:
          'A focused eastern Guizhou route — one sacred mountain, one ancient town, at a comfortable pace.',
      },
      {
        icon: 'map',
        title: 'Guiyang → Fanjingshan → Zhenyuan',
        description:
          'Connected by high-speed trains — Guiyang to Tongren (1.5 hrs), then south to Zhenyuan and back to Guiyang.',
      },
      {
        icon: 'star',
        title: 'Red Cloud Summit, Ancient Zhenyuan',
        description:
          'A temple split between two rock pillars at 2,336m, and a 2,300-year-old town built into a river gorge.',
      },
    ],
    experienceTypes: ['nature', 'culture'],
    overview:
      "Fanjingshan (梵净山) is one of China's five sacred Buddhist mountains, a UNESCO site in eastern Guizhou. Its iconic image is the Red Cloud Golden Summit — two temple halls (Buddha and Maitreya) perched on a split rock pinnacle at 2,336m, connected by a narrow stone bridge. Zhenyuan Ancient Town (镇远古镇) is a 2,300-year-old town built into a narrow gorge along the Wuyang River, with Ming dynasty temples clinging to cliff faces and a nightscape of lanterns reflecting in the water.",
    stops: [
      {
        day: 'Day 1: Guiyang → Tongren',
        content:
          "Fly into Guiyang. Take the 1.5-hour high-speed train to Tongren (¥120). Tongren is the gateway city for Fanjingshan. Spend the afternoon exploring Tongren's old town along the Jin River and visiting the Dongshan Temple. Stay overnight near the Fanjingshan entrance or in Tongren.",
        tip: 'Fanjingshan limits visitors to 8,000/day and tickets sell out. Book on WeChat (search 梵净山) 7 days ahead — especially in summer and on weekends. The ticket (¥100 + ¥140 cable car) is for a specific entry time slot. Morning slots (7-9am) sell out first.',
      },
      {
        day: 'Day 2: Fanjingshan',
        content:
          'Arrive at the park entrance by 7:30am. Take the cable car up (20 min, from 800m to 2,100m). From the upper station, walk the wooden boardwalk (1 hr) through a primeval forest of rhododendrons and ancient firs to the Mushroom Stone — a 10m granite boulder balanced on a smaller rock, the symbol of Fanjingshan. Continue to the Red Cloud Golden Summit — the climb up the rock pinnacle is steep (near-vertical stairs, chain handrails) but the view from the top is unforgettable: a sea of karst peaks stretching to the horizon. Descend by cable car. Return to Tongren for the night.',
        tip: 'Fanjingshan weather is unpredictable — the summit is often in clouds. Check the forecast and go on a clear day. Morning is best. Bring layers — the summit is 10°C colder than the base. The stairs to the summit are genuinely steep; if you have a fear of heights, the Mushroom Stone area is still worth the trip without the summit climb.',
      },
      {
        day: 'Day 3: Tongren → Zhenyuan',
        content:
          'Take the 1-hour high-speed train from Tongren South to Sansui (¥45), then a 40-minute bus to Zhenyuan. Zhenyuan Ancient Town is built along the Wuyang River in a narrow gorge — stone houses, temple-studded cliffs, and a series of ancient bridges. Walk the old town, cross the Zhusheng Bridge (built 1372, rebuilt in Qing dynasty), and climb the cliffside path to the Qinglong Cave complex — a series of temples and pavilions built into a cliff face overlooking the river.',
        tip: 'Zhenyuan is free to enter. The Qinglong Cave complex (¥60) is a remarkable feat of construction — three religions (Buddhism, Daoism, Confucianism) sharing the same cliff face. The views from the highest pavilion are worth the climb.',
      },
      {
        day: 'Day 4: Zhenyuan → Guiyang',
        content:
          "Morning: Wuyang River boat ride through the gorge (¥120, 1 hr) — the cliffs rise vertically from the water and the perspective from the river is completely different from the town. Afternoon: walk the Black Dragon Cave path on the opposite cliff for the classic Zhenyuan photo — the town's curved river and temple-dotted cliffs in one frame. Take the train back to Guiyang (1.5 hrs, ¥120). Fly out in the evening.",
        tip: "The Zhenyuan night view is famous among Chinese tourists — the old town's lanterns and the illuminated temple cliffs reflecting in the Wuyang River. The best night photo is from the Zhusheng Bridge. Stay one night in Zhenyuan for this — it transforms after dark.",
      },
    ],
    related: [
      {
        href: '/guizhou/huangguoshu-libo-miao',
        label: 'Full Guizhou Route',
        description:
          "Add Huangguoshu Waterfall, Libo's karst rivers, and Miao villages in western Guizhou.",
        image: '/images/destinations/guizhou.webp',
        imageAlt: 'Huangguoshu Waterfall in Guizhou',
        days: '5-6 days',
      },
      {
        href: '/zhangjiajie/avatar-mountains',
        label: 'Zhangjiajie Avatar Mountains',
        description:
          "Continue east to Hunan's floating peaks — the scenery that inspired Avatar, 2 hours from Guizhou.",
        image: '/images/destinations/zhangjiajie.webp',
        imageAlt: 'Zhangjiajie sandstone pillars in mist',
        days: '3-4 days',
      },
      {
        href: '/yunnan/kunming-dali-lijiang-shangri-la',
        label: 'Classic Yunnan Route',
        description:
          'Go west to Yunnan — the ancient towns, Tibetan culture, and mountain landscapes of the classic backpacker trail.',
        image: '/images/destinations/yunnan.webp',
        imageAlt: 'Dali Old Town with Cangshan mountains',
        days: '8-12 days',
      },
    ],
  },
];

for (const r of routes) {
  writePage(r.dir, r.slug, r);
  console.log(`✅ ${r.dir}/${r.slug}`);
}
console.log(`\nDone. ${routes.length} Guangxi/Guizhou pages.`);
