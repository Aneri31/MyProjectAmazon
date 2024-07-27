const { devices } = require('@playwright/test');

module.exports = {
    use: {
        baseURL: 'https://www.amazon.in',
        navigationTimeout: 100000,
        timeout: 60000,
        actionTimeout: 10000,
        viewport: { width: 1280, height: 720 },
        headless: true,
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
    ],
<<<<<<< HEAD
    workers: 2,
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }]
    ],
=======
    workers: 3,
    apiURLs: {
        users: 'https://api.example.com/users',
        products: 'https://api.example.com/products',
    },
    reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
>>>>>>> 67cc444a81534991852852450f31d6d5397bd7e9
    screenshots: 'on',
};
