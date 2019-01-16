const puppeteer = require('puppeteer');
const fs = require('fs');
const FILEPATH = 'D:/Program Files/ssr-win/gui-config.json';

function changeJson(url) {
    try {
        // 读取
        let config = fs.readFileSync(FILEPATH, 'utf-8');
        config = JSON.parse(config);

        // 更新
        let index = config.serverSubscribes.findIndex(element => element.Group === "WWW.SSRSTOOL.COM");
        if (index !== -1) {
            config.serverSubscribes[index].URL = url;
        } else {
            config.serverSubscribes.push({
                "URL": url,
                "Group": "WWW.SSRSTOOL.COM",
                "LastUpdateTime": new Date().getTime()
            });
        }

        // 保存
        let str = JSON.stringify(config, null, "\t");
        fs.writeFileSync(FILEPATH, str);
        console.log(`${new Date().getTime()} 更新成功`);
    } catch (e) {
        console.log(`${new Date().getTime()} 更新失败：${e}`);
    }
}

(async () => {
    const browser = await (puppeteer.launch());
    const page = await browser.newPage();
    await page.goto('https://stool.gq/tool/free_ssr');
    //await page.waitFor(5000);

    const subscriptionUrl = await page.evaluate(() => {
        return $('.mdui-textfield-input').val();
    });

    changeJson(subscriptionUrl);

    browser.close();
})();