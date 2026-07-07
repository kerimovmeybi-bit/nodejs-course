const os = require('os');

function getSystemInfo() {
  return {
    platform: os.platform(),
    freeMemory: os.freemem(),
    uptime: os.uptime(),
    cpuCount: os.cpus().length,
  };
}

module.exports = {
  getSystemInfo,
};