const fs = require('fs');
const path = require('path');

const logFilePath = path.join(
  __dirname,
  '..',
  'data',
  'events.log'
);

function logEvent(eventType, data) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    eventType,
    data,
  };

  fs.appendFileSync(
    logFilePath,
    JSON.stringify(logEntry) + '\n'
  );
}

module.exports = {
  logEvent,
};