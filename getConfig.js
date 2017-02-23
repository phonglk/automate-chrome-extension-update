module.exports = function getConfig() {
  try {
    const config = require("./secret/config.json");
    return config;
  } catch (e) {
    throw new Error("Could not read secret/config.json Please create the config file");
  }
}