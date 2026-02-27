import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '../tests/src',
  timeout: 30 * 1000,
  retries: 2,
  use: {
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
  },
});
