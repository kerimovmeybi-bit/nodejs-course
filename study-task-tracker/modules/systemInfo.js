const os = require('os');

function getSystemInfo() {
  return {
    platform: os.platform(),
    hostname: os.hostname(),
    uptime: os.uptime(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
  };
}

module.exports = {
  getSystemInfo,
};