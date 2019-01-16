const Service = require('node-windows').Service;

let svc = new Service({
    name: 'AutoSubscribe',    //服务名称
    description: 'SSR自动更新', //描述
    script: 'D:/Works/Tests/ssr-auto-subscribe' //nodejs项目要启动的文件路径
});

svc.on('install', () => {
    svc.start();
});

svc.install();