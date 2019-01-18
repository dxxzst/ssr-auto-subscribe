const fs = require('fs');
function changeJson(url, filePath) {
    try {
        // 读取
        let config = fs.readFileSync(filePath, 'utf-8');
        config = JSON.parse(config);

        // 更新
        let index = config.serverSubscribes.findIndex(element => element.Group === "WWW.SSRSTOOL.COM");
        if (index !== -1) {
            config.serverSubscribes[index].URL = url;
        } else {
            config.serverSubscribes.push({
                "URL": url,
                "Group": "WWW.SSRSTOOL.COM",
                "LastUpdateTime": ""
            });
        }

        // 保存
        let str = JSON.stringify(config, null, "\t");
        fs.writeFileSync(filePath, str);
        console.log(`${new Date().getTime()} 更新成功`);
    } catch (e) {
        console.log(`${new Date().getTime()} 更新失败：${e}`);
    }
}

module.exports = {changeJson};