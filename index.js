const puppeteer = require('puppeteer');

(async () => {
    const browser = await (puppeteer.launch({
        headless: true
    }));
    const page = await browser.newPage();
    await page.goto('https://www.ssrtool.com/tool/free_ssr');
    //await page.waitFor(5000);

    const subscriptionUrl = await page.evaluate(() => {
        return $('.mdui-textfield-input').val();
    });
    console.log(subscriptionUrl);
    browser.close();
})();