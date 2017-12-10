
let {devServerConfig} = require("./devServer");
let {moduleConfig} = require("./module");
let {
  prodPluginConfig,
  developPluginConfig
} = require("./plugin");
let {resolveConfig} = require("./resolve");

module.exports = {
	devServerConfig,
	moduleConfig,
	prodPluginConfig,
	developPluginConfig,
	resolveConfig
}