import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join } from 'path';

const BASE = 'http://localhost:4321';
const OUT = join(import.meta.dirname, 'screenshots');

const pages = [
  { path: '/', name: 'index' },
  { path: '/para-viveiros', name: 'para-viveiros' },
  { path: '/culturas', name: 'culturas' },
  { path: '/ciencia', name: 'ciencia' },
  { path: '/o-modulo', name: 'o-modulo' },
  { path: '/sobre', name: 'sobre' },
  { path: '/sustentabilidade', name: 'sustentabilidade' },
  { path: '/solucoes', name: 'solucoes' },
  { path: '/solucoes/para-cooperativas', name: 'para-cooperativas' },
  { path: '/solucoes/para-reflorestamento', name: 'para-reflorestamento' },
  { path: '/contato', name: 'contato' },
  { path: '/noticias', name: 'noticias' },
];

const viewports = [
  { width: 375, height: 812, label: 'mobile' },
  { width: 768, height: 1024, label: 'tablet' },
  { width: 1440, height: 900, label: 'desktop' },
];

async function run() {
  mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();

  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();

    for (const p of pages) {
      const url = `${BASE}${p.path}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });
        const filename = `${p.name}-${vp.label}.png`;
        await page.screenshot({ path: join(OUT, filename), fullPage: true });
        console.log(`OK ${filename}`);
      } catch (e) {
        console.error(`FAIL ${p.name}-${vp.label}: ${e.message}`);
      }
    }
    await context.close();
  }

  await browser.close();
  console.log(`\nDone. Screenshots in ${OUT}`);
}

run();
