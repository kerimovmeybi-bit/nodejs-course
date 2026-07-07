const {
  readTasks,
} = require('./modules/fileStorage');

const {
  getSystemInfo,
} = require('./modules/systemInfo');

const eventLogger = require(
  './modules/eventLogger'
);

eventLogger.emit('appStarted');

console.log('=== TASKS ===');
console.log(readTasks());

console.log('\n=== SYSTEM INFO ===');
console.log(getSystemInfo());