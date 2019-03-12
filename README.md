# ssr-auto-subscribe --- 已失效
### 基于node和puppeteer的ssr订阅自动更新

### 1.基本说明：
本项目采用node结合puppeteer，自动化采集、更新[SSR订阅地址](https://www.ssrtool.com/tool/free_ssr)。

Puppeteer是一个Nodejs的库，支持调用Chrome的API来操纵Web，相比较Selenium或是PhantomJs,它最大的特点就是它的操作Dom可以完全在内存中进行模拟既在V8引擎中处理而不打开浏览器，而且关键是这个是Chrome团队在维护，会拥有更好的兼容性和前景。

Puppeteer：https://github.com/GoogleChrome/puppeteer


### 2.使用方法：
下载或克隆本代码后，需要安装基本依赖，并修改index.js中的FILEPATH，改成你SSR的gui-config.json地址。
运行方法如下：
```
进入目录 cd ssr-auto-subscribe
安装资源 npm install
运行更新 npm start
```

### 3.提示：
>* puppeteer若是下载失败，可以换用国内镜像，具体可百度
>* 项目已经采用node-schedule进行定时更新，每个小时的30分30秒会自动采集数据，自动更新文件
>* 若您是Windows用户，在目录内也可以运行node nw.js（如果安装了安全管家等软件会阻止,直接允许就可以了），可将本项目形成服务，后台自动运行


### 4.免费ss列表：
>* https://www.ssrtool.com/tool/free_ssr
>* https://free-ss.site


项目地址：https://github.com/dxxzst/ssr-auto-subscribe

若本项目对您有所帮助，欢迎Star



