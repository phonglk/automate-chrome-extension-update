const path = require('path');
module.exports = function getConfig() {
  const filePath = path.join(process.env.PWD, 'extension.json');
  try {
    const config = require(filePath);
    return config;
  } catch (e) {
    throw new Error("Could not read secret/config.json Please create the config file");
  }
}