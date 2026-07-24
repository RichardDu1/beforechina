// Capture full-page screenshots of our own pages + key competitor homepages,
// so design directions can be compared visually.
//
// Run:   node scripts/screenshot-pages.mjs
// Output: scripts/screenshots/*.png
//
// Competitor URLs come from the design audit (handover.md §7). Our own pages
// require `npm run dev` (or build+start) on http://localhost:3000.

import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, 'screenshots');
mkdirSync(OUT, { recursive: true });

const targets = [
  // Our own pages (need dev server running)
  { name: 'ours-home-desktop', url: 'http://localhost:3000/', w: 1440, h: 900 },
  { name: 'ours-home-mobile', url: 'http://localhost:3000/', w: 390, h: 844 },
  { name: 'ours-visa', url: 'http://localhost:3000/visa', w: 1440, h: 900 },
  { name: 'ours-budget', url: 'http://localhost:3000/budget', w: 1440, h: 900 },
  // Competitor homepages
  { name: 'comp-wildchina', url: 'https://wildchina.com/', w: 1440, h: 900 },
  { name: 'comp-chinahighlights', url: 'https://www.chinahighlights.com/', w: 1440, h: 900 },
  { name: 'comp-240hours', url: 'https://www.240hoursinchina.com/', w: 1440, h: 900 },
  { name: 'comp-atlasobscura', url: 'https://www.atlasobscura.com/', w: 1440, h: 900 },
  { name: 'comp-airalo', url: 'https://www.airalo.com/', w: 1440, h: 900 },
];

const browser = await chromium.launch();
const skipped = [];

for (const t of targets) {
  const page = await browser.newPage({ viewport: { width: t.w, height: t.h } });
  try {
    await page.goto(t.url, { waitUntil: 'networkidle', timeout: 45_000 });
    await page.waitForTimeout(1500); // let lazy images/fonts settle
    const path = join(OUT, `${t.name}.png`);
    await page.screenshot({ path, fullPage: false });
    console.log(`✓ ${t.name}`);
  } catch (e) {
    console.log(`✗ ${t.name} — ${e.message.split('\n')[0]}`);
    skipped.push(t.name);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log(`\nDone. ${targets.length - skipped.length}/${targets.length} captured → ${OUT}`);
if (skipped.length) console.log('Skipped (server down or blocked):', skipped.join(', '));
