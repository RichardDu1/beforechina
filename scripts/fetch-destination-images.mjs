// Fetch + optimize region header images for the destinations page via Wikimedia Commons.
// For each region: search Commons, pick the best landscape JPEG/PNG above 1000px,
// download, re-encode via sharp to:
//   card (800x533, q=72, webp) -> /public/images/destinations/<slug>.webp
//   og    (1200x630, q=80, webp) -> /public/images/destinations/<slug>-og.webp
// Track attribution + source URL in image-credits.json (CC-BY-SA compliant).
import sharp from 'sharp';
import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const OUT_DIR = 'public/images/destinations';
if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });

// Search queries per region — tuned for iconic, recognizable shots.
const REGIONS = [
  {
    slug: 'golden-triangle',
    q: 'Forbidden City Beijing',
    alt: 'The Forbidden City palace complex in Beijing at golden hour',
  },
  {
    slug: 'xinjiang',
    q: 'Karakul Lake Muztaghata Xinjiang',
    alt: 'Karakul Lake with Muztagh Ata peak reflected in the water, Xinjiang',
  },
  {
    slug: 'yunnan',
    q: 'Lijiang old town Yunnan',
    alt: 'Ancient rooftops of Lijiang old town, Yunnan',
  },
  {
    slug: 'sichuan',
    q: 'Jiuzhaigou lake Sichuan',
    alt: 'Turquoise alpine lake in Jiuzhaigou valley, Sichuan',
  },
  {
    slug: 'guangxi',
    q: 'Li River Yangshuo karst',
    alt: 'Karst peaks along the Li River near Yangshuo, Guangxi',
  },
  {
    slug: 'guizhou',
    q: 'Miao village Guizhou terraces',
    alt: 'Terraced rice fields and wooden Miao village houses, Guizhou',
  },
  {
    slug: 'yangtze-delta',
    q: 'Shanghai Pudong skyline night',
    alt: 'Shanghai Pudong skyline at night across the Huangpu River',
  },
  {
    slug: 'ancient-capitals',
    q: 'Xi’an city wall sunset',
    alt: 'Xian city wall and watchtowers at sunset',
  },
  {
    slug: 'silk-road',
    q: 'Dunhuang Mingsha dunes camel',
    alt: 'Camel caravan crossing sand dunes near Dunhuang, Silk Road',
  },
  { slug: 'tibet', q: 'Potala Palace Lhasa', alt: 'Potala Palace in Lhasa, Tibet, under blue sky' },
  {
    slug: 'dongbei',
    q: 'Harbin ice sculpture festival night',
    alt: 'Harbin ice sculptures lit at night, Dongbei',
  },
  {
    slug: 'fujian',
    q: 'Fujian tulou Hakka roundhouse',
    alt: 'Hakka tulou earthen roundhouses in Fujian',
  },
  {
    slug: 'south-china',
    q: 'Hong Kong Victoria Harbour skyline night',
    alt: 'Hong Kong skyline across Victoria Harbour at night',
  },
  {
    slug: 'zhangjiajie',
    q: 'Zhangjiajie sandstone pillars',
    alt: 'Sandstone pillars of Zhangjiajie rising through mist',
  },
  {
    slug: 'huangshan',
    q: 'Huangshan Yellow Mountain granite peaks',
    alt: 'Granite peaks and ancient pines of Huangshan, Yellow Mountain',
  },
  {
    slug: 'shandong',
    q: 'Qingdao Zhanqiao pier',
    alt: 'Zhanqiao Pier on the coast of Qingdao, Shandong',
  },
  {
    slug: 'jiangxi',
    q: 'Lushan mountain Jiangxi misty',
    alt: 'Misty peaks of Lushan Mountain, Jiangxi',
  },
  {
    slug: 'yangtze-cruise',
    q: 'Yangtze River Three Gorges',
    alt: 'Yangtze River winding through the Three Gorges',
  },
];

const UA = 'BeforeChina/1.0 (contact: hello@beforechina.com; travel guide site) node-fetch';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function commonsSearch(q, limit = 15) {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: `File: ${q}`,
    gsrnamespace: '6',
    gsrlimit: String(limit),
    prop: 'imageinfo',
    iiprop: 'url|size|mime|extmetadata',
    iiurlwidth: '1400',
    format: 'json',
  });
  return fetch(`https://commons.wikimedia.org/w/api.php?${params}`, {
    headers: { 'User-Agent': UA, Accept: 'application/json' },
  }).then((r) => r.json());
}

async function fetchBuf(url) {
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, { headers: { 'User-Agent': UA } });
    if (res.ok) return res.arrayBuffer();
    if (res.status === 429 || res.status >= 500) {
      await sleep(3000 * (attempt + 1));
      continue;
    }
    throw new Error(`HTTP ${res.status}`);
  }
  throw new Error('HTTP 429 after retries');
}

function pickBest(pages) {
  if (!pages) return null;
  const candidates = Object.values(pages)
    .map((p) => p.imageinfo?.[0])
    .filter(Boolean);
  const eligible = candidates.filter(
    (c) =>
      (c.mime === 'image/jpeg' || c.mime === 'image/png') &&
      c.width >= 1000 &&
      c.height >= 600 &&
      c.width / c.height >= 1.2 &&
      c.width / c.height <= 2.5, // landscape, not too wide
  );
  // Prefer larger images — sort by area desc
  eligible.sort((a, b) => b.width * b.height - a.width * a.height);
  return eligible[0] || null;
}

async function getAttribution(filePageId) {
  // fetch license + author info from extmetadata via a second call to keep this simple
  // already returned in pickBest if we asked for extmetadata
}

// Reuse already-successful entries from image-credits.json to avoid re-downloading.
const existing = existsSync(`${OUT_DIR}/image-credits.json`)
  ? JSON.parse(
      await import('node:fs/promises').then((m) =>
        m.readFile(`${OUT_DIR}/image-credits.json`, 'utf8'),
      ),
    )
  : [];
const existingOk = new Map(existing.filter((e) => e.cardPath).map((e) => [e.slug, e]));

const results = [];

for (const r of REGIONS) {
  if (existingOk.has(r.slug)) {
    results.push(existingOk.get(r.slug));
    console.log(`• ${r.slug} — cached`);
    continue;
  }
  try {
    const json = await commonsSearch(r.q);
    let best = pickBest(json.query?.pages);
    // If first search yields nothing, retry with a broader query
    if (!best) {
      await sleep(1200);
      const json2 = await commonsSearch(r.q.split(' ').slice(0, 2).join(' '));
      best = pickBest(json2.query?.pages);
    }
    if (!best) throw new Error('no eligible image found');

    await sleep(1200);
    const srcUrl = best.url;
    const buf = await fetchBuf(srcUrl);

    const card = await sharp(Buffer.from(buf))
      .resize(800, 533, { fit: 'cover', position: 'attention' })
      .webp({ quality: 72 })
      .toBuffer();
    const cardPath = `${OUT_DIR}/${r.slug}.webp`;
    await writeFile(cardPath, card);

    const og = await sharp(Buffer.from(buf))
      .resize(1200, 630, { fit: 'cover', position: 'attention' })
      .webp({ quality: 80 })
      .toBuffer();
    const ogPath = `${OUT_DIR}/${r.slug}-og.webp`;
    await writeFile(ogPath, og);

    const meta = best.extmetadata || {};
    const credit = {
      slug: r.slug,
      alt: r.alt,
      cardPath: cardPath.replace('public', ''),
      ogPath: ogPath.replace('public', ''),
      cardSizeKB: Math.round(card.length / 1024),
      ogSizeKB: Math.round(og.length / 1024),
      cardDims: '800x533',
      ogDims: '1200x630',
      sourceUrl: best.descriptionurl,
      imageUrl: srcUrl,
      license: meta.LicenseShortName?.value || '',
      licenseUrl: meta.LicenseUrl?.value || '',
      artist: meta.Artist?.value?.replace(/<[^>]*>/g, '').trim() || '',
    };
    results.push(credit);
    console.log(
      `✓ ${r.slug} — card ${credit.cardSizeKB}KB, og ${credit.ogSizeKB}KB — ${credit.license}`,
    );
  } catch (e) {
    results.push({ slug: r.slug, status: 'fail', error: String(e.message || e) });
    console.error(`✗ ${r.slug} — ${e.message}`);
  }
}

await writeFile(`${OUT_DIR}/image-credits.json`, JSON.stringify(results, null, 2));
console.log('\nCredits written.');
