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
    workers: 2,
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }]
    ],
    
    screenshots: 'on',
};
