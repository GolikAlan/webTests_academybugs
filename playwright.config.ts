import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests', //folder z testami.
  timeout: 60 * 1000, // timeouty gdy nie znajdzie elementów.
  expect: {
    timeout: 5000, // timeouty do sprawdzania warunków.
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 2, // ponowne powtorzenie gdy wystąpi błąd (lokalne wlacznie : serwerowe włączenie).
  workers: process.env.CI ? 1 : undefined, // ilość włączonych przeglądarek na raz (lokalne włączenie : serwerowe włączenie).
  reporter: [
    ['html'], // generowanie raportu HTML.
    ['allure-playwright'], // generowanie raportu poprzez narzędzie Allure.
  ],
  use: {
    actionTimeout: 0,
    baseURL: "https://academybugs.com",

    trace: 'retain-on-failure', // plik który daje możliwość sprawdzenia całej szczegółowej ścieżki naszego test case.
    video: 'retain-on-failure', // dodanie filmiku ze ścieżką wykonaną do momemntu błędu.
  },

  projects: [ // poniżej przeglądarki które można pobrac oraz skonfigurować do otwarzania testów.
    {
      name: 'Web Tests Chromium',
      use: {
        ...devices['Desktop Chrome'],
        locale: 'pl-PL',
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     locale: 'pl-PL',
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     locale: 'pl-PL',
    //   },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //     locale: 'pl-PL',
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //     locale: 'pl-PL',
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //     locale: 'pl-PL',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //     locale: 'pl-PL',
    //   },
    // },
  ],

  // outputDir: 'test-results/',

  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

export default config;