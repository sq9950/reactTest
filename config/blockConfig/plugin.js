const os = require('os');
const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const AssetsPlugin = require('assets-webpack-plugin');
const UglifyJsParallelPlugin = require('webpack-uglify-parallel');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
// 引用libjs
__dirname = path.resolve(__dirname, '../..');

// webpack 包分析器
const _BundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  // Can be `server`, `static` or `disabled`.
  // In `server` mode analyzer will start HTTP server to show bundle report.
  // In `static` mode single HTML file with bundle report will be generated.
  // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
  analyzerMode: 'server',
  // Host that will be used in `server` mode to start HTTP server.
  analyzerHost: '127.0.0.1',
  // Port that will be used in `server` mode to start HTTP server.
  analyzerPort: 8887,
  // Path to bundle report file that will be generated in `static` mode.
  // Relative to bundles output directory.
  reportFilename: 'report.html',
  // Module sizes to show in report by default.
  // Should be one of `stat`, `parsed` or `gzip`.
  // See "Definitions" section for more information.
  defaultSizes: 'parsed',
  // Automatically open report in default browser
  openAnalyzer: true,
  // If `true`, Webpack Stats JSON file will be generated in bundles output directory
  generateStatsFile: true,
  // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
  // Relative to bundles output directory.
  statsFilename: '../log/stats.json',
  // Options for `stats.toJson()` method.
  // For example you can exclude sources of your modules from stats file with `source: false` option.
  // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
  statsOptions: null,
  // Log level. Can be 'info', 'warn', 'error' or 'silent'.
  logLevel: 'info',
});

// 最小化加载
const _LoaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false,
});
// 并行压缩
const _UglifyJsParallelPlugin = new UglifyJsParallelPlugin({
  workers: os.cpus().length,
  beautify: false,
  mangle: {
    screw_ie8: true,
    keep_fnames: true,
  },
  compress: {
    screw_ie8: true,
    warnings: false,
  },
  warning: false,
  comments: false,
});
// 并行构建
const _HappyPack = new HappyPack({
  loaders: ['babel-loader'],
  cache: true,
  threads: os.cpus().length,
});
// dll 生成
const _DllPlugin = new webpack.DllPlugin({
  path: path.join(__dirname, 'log', '[name]-manifest.json'),
  name: '[name]_[chunkhash]',
});

const _AssetsPlugin = new AssetsPlugin({
  filename: 'assetsplugin.json',
  path: path.join(__dirname, 'log'),
});
// 优化报错输出
const _FriendlyErrorsPlugin = new FriendlyErrorsPlugin();

const dev_pluginConfig = [
  _FriendlyErrorsPlugin,
];

const dll_pluginConfig = [
  _LoaderOptionsPlugin,
  _UglifyJsParallelPlugin,
  _HappyPack,
  _DllPlugin,
  _AssetsPlugin,
];

const prod_pluginConfig = [
  _LoaderOptionsPlugin,
  _HappyPack,
  // _BundleAnalyzerPlugin,
];

module.exports = {
  dll_pluginConfig,
  prod_pluginConfig,
  dev_pluginConfig,
};
