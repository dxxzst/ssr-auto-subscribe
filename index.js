const FILEPATH = 'D:/Program Files/ssr-win/gui-config.json';

const schedule = require('node-schedule');
const saveJob = require('./saver/saveJob');

schedule.scheduleJob('30 30 * * * *', function () {
    saveJob.runJob(FILEPATH);
});