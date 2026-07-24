import { defineConfig } from '@playwright/test';

// Playwright config — used for visual-reference screenshots of competitors
// and our own pages, so we can compare design directions side by side.
// Browsers are installed via `npx playwright install chromium`.
export default defineConfig({
  testDir: './scripts',
  timeout: 60_000,
  use: {
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',
    viewport: { width: 1440, height: 900 },
  },
  projects: [
    {
      name: 'desktop',
      use: { viewport: { width: 1440, height: 900 } },
    },
    {
      name: 'mobile',
      use: { viewport: { width: 390, height: 844 } },
    },
  ],
});
