const puppeteer = require('puppeteer');

async function runJob() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //反爬虫 navigator.webdriver || window.webdriver || self != top
    await page.evaluateOnNewDocument(() => {
        Object.defineProperty(navigator, 'webdriver', {
            get: () => false,
        });
        Object.defineProperty(window, 'webdriver', {
            get: () => false,
        });
    });
    await page.goto('https://free-ss.site/');
    await page.waitFor(5000);

    const subscribeJson = await page.evaluate(() => {
        let tempList = $("table:not(:first)").map(function () {
            return {
                id: this.id,
                height: $('#' + this.id + '_wrapper').height(),
                data: $(this).DataTable().data().toArray(),
                length: $(this).DataTable().data().length,
            }
        }).toArray();

        return tempList.find(element => element.height > 1);
    });
    console.log(subscribeJson);

    await browser.close();
    return subscribeJson;
}

runJob();