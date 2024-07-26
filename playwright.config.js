const { devices } = require('@playwright/test');
const { devices: playwrightDevices } = require('playwright');

module.exports = {
    use: {
        baseURL: 'https://www.amazon.in',
        navigationTimeout: 100000,
        timeout: 60000,
        actionTimeout: 10000,
        viewport: { width: 1280, height: 720 },
        headless: true,
        browserName: 'chromium',
        trace: 'on',
    },
    projects: [
        {
            name: 'Desktop Chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'Desktop Firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'Desktop WebKit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
    workers: 3,
    apiURLs: {
        users: 'https://api.example.com/users',
        products: 'https://api.example.com/products',
    },
    reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
    screenshots: 'on',
};
