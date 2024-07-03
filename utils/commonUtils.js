const config = require('../playwright.config');
const locators = require('../configuration/locators');

async function navigateToHomePage(page) {
    try {
        await page.goto(config.use.baseURL, { waitUntil: 'domcontentloaded', timeout: config.use.navigationTimeout });
    } catch (error) {
        console.error('Navigation to home page failed:', error);
        throw error;
    }
}

async function waitForPageNavigation(page) {
    try {
        await page.waitForNavigation({ timeout: config.use.navigationTimeout });
    } catch (error) {
        console.error('Waiting for page navigation failed:', error);
        throw error;
    }
}

async function waitForSelector(page, selector) {
    try {
        await page.waitForSelector(selector, { timeout: config.use.timeout });
    } catch (error) {
        console.error(`Waiting for selector "${selector}" failed:`, error);
        throw error;
    }
}

async function checkPageTitle(page, expectedTitle, expect) {
    try {
        const pageTitle = await page.title();
        expect(pageTitle).toContain(expectedTitle);
    } catch (error) {
        console.error('Checking page title failed:', error);
        throw error;
    }
}

async function searchProduct(page) {
    await waitForSelector(page, locators.searchBoxXPath);
    await page.type(locators.searchBoxXPath, locators.productName);
    await page.keyboard.press('Enter');
    await waitForPageNavigation(page);
}

module.exports = {
    navigateToHomePage,
    waitForPageNavigation,
    waitForSelector,
    searchProduct,
    checkPageTitle,
    locators,
    config
};
