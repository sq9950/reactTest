
const { devServerConfig } = require('./devServer');
const { moduleConfig } = require('./module');
const {
  prod_pluginConfig,
  dll_pluginConfig,
  dev_pluginConfig,
} = require('./plugin');

const { resolveConfig } = require('./resolve');

module.exports = {
  devServerConfig,
  moduleConfig,
  prod_pluginConfig,
  dll_pluginConfig,
  dev_pluginConfig,
  resolveConfig,
};
