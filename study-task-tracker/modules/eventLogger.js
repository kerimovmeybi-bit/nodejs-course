const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

class TaskEmitter extends EventEmitter {}

const taskEmitter = new TaskEmitter();

const logFilePath = path.join(
  __dirname,
  '..',
  'data',
  'events.log'
);

function writeLog(message) {
  const log = `${new Date().toISOString()} | ${message}\n`;

  fs.appendFileSync(logFilePath, log);
}

taskEmitter.on('taskCreated', (task) => {
  writeLog(
    `taskCreated | Task "${task.title}" was created`
  );
});

taskEmitter.on('taskCompleted', (task) => {
  writeLog(
    `taskCompleted | Task "${task.title}" was completed`
  );
});

taskEmitter.on('taskDeleted', (task) => {
  writeLog(
    `taskDeleted | Task "${task.title}" was deleted`
  );
});

taskEmitter.on('appStarted', () => {
  writeLog(
    'appStarted | Application started'
  );
});

module.exports = taskEmitter;