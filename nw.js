const Service = require('node-windows').Service;

let svc = new Service({
    name: 'AutoSubscribe',      //服务名称
    description: 'SSR自动更新',  //描述
    script: './index.js',       //nodejs项目要启动的文件路径
    wait: '1'                  //程序崩溃后重启的时间间隔
});

svc.on('install', () => {
    svc.start();
    console.log('install complete');
});

svc.on('uninstall', () => {
    console.log('uninstall complete');
});

svc.on('alreadyinstalled', () => {
    console.log('service already installed');
});

if (svc.exists) svc.uninstall(); //存在就卸载

svc.install();