const { test, expect } = require('@playwright/test');
const commonUtils = require('../utils/commonUtils');

test.describe('Amazon Product Tests', () => {
    let page;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('Navigate to a Specific Product Page', async () => {
        test.setTimeout(90000);
        try {
            await commonUtils.navigateToHomePage(page);
            await commonUtils.searchProduct(page);
            await commonUtils.waitForSelector(page, commonUtils.locators.productImageXPath);
            
            const productLink = await page.$(commonUtils.locators.productImageXPath);
            if (productLink) {
                await productLink.click();
                await commonUtils.checkPageTitle(page, commonUtils.locators.productName, expect);
                
                // Take screenshot on test pass
                await page.screenshot({ path: `test-results/passed-screenshot-${Date.now()}.png` });
            } else {
                throw new Error('Product image link not found.');
            }
        } catch (error) {
            console.error('Test failed:', error);
            throw error; // Re-throw to fail the test explicitly
        }
    });
           
});
