const puppeteer = require('puppeteer');
const mySaver = require('./save');

async function runJob(filepath) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://stool.gq/tool/free_ssr');
    //await page.waitFor(5000);

    const subscriptionUrl = await page.evaluate(() => {
        return $('.mdui-textfield-input').val();
    });
    mySaver.changeJson(subscriptionUrl, filepath);

    browser.close();
}

module.exports = {runJob};