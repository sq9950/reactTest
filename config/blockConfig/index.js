
let {devServerConfig} = require("./devServer");
let {moduleConfig} = require("./module");
let {
  prodPluginConfig,
  dllPluginConfig,
  developPluginConfig,
} = require("./plugin");

let {resolveConfig} = require("./resolve");

module.exports = {
	devServerConfig,
	moduleConfig,
	prodPluginConfig,
	dllPluginConfig,
	developPluginConfig,
	resolveConfig
}