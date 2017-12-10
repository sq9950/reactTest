
var os = require('os')
var path = require('path')
const webpack = require('webpack');
var HappyPack = require('happypack');
const AssetsPlugin = require('assets-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var UglifyJsParallelPlugin = require('webpack-uglify-parallel')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//引用libjs
__dirname = path.resolve(__dirname, '../..')

const _dev_HtmlWebpackPlugin = new HtmlWebpackPlugin({
  title: '主页——dev',
  template: './src/index.html',
  filename: 'index.html',
})
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
  statsFilename: 'stats.json',
  // Options for `stats.toJson()` method.
  // For example you can exclude sources of your modules from stats file with `source: false` option.
  // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
  statsOptions: null,
  // Log level. Can be 'info', 'warn', 'error' or 'silent'.
  logLevel: 'info'
})
// 最小化加载
const _LoaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false
})
const _prod_DefinePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production') //react切换到produco版本
  }
})
const _develop_DefinePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('develop') //react切换到produco版本
  }
})
// 并行压缩
const _UglifyJsParallelPlugin = new UglifyJsParallelPlugin({
  workers: os.cpus().length,
  beautify: false,
  mangle: {
      screw_ie8: true,
      keep_fnames: true
  },
  compress: {
      screw_ie8: true,
      warnings: false
  },
  warning: false,
  comments: false
})
// 并行构建
const _HappyPack = new HappyPack({
  loaders: ['babel-loader'],
  cache: true,
  threads: os.cpus().length
})
// dll 生成
const _DllPlugin = new webpack.DllPlugin({
  path: path.join(__dirname, 'log', '[name]-manifest.json'),
  name: '[name]_[chunkhash]'
})
const _AssetsPlugin = new AssetsPlugin({
  filename: 'assetsplugin.json',
  path: path.join(__dirname, 'log'),
})









const developPluginConfig = [
  _dev_HtmlWebpackPlugin,
  _BundleAnalyzerPlugin
]
const dllPluginConfig = [
  _LoaderOptionsPlugin,
  _prod_DefinePlugin,
  _UglifyJsParallelPlugin,
  _HappyPack,
  _DllPlugin,
  _AssetsPlugin,
];
// var bundleConfig = require("../../log/assetsplugin.json")
const _prod_HtmlWebpackPlugin = new HtmlWebpackPlugin({
  title: '主页',
  template: './src/index.html',
  filename: 'index.html',
  // bundleName: bundleConfig.vendor.js, //追加默认dll
  inject: 'body'
})
const _DllReferencePlugin = new webpack.DllReferencePlugin({
  context: __dirname,
  // manifest: require('../../log/vendor-manifest.json')
})
const prodPluginConfig = [
  _LoaderOptionsPlugin,
  _HappyPack,
  _prod_HtmlWebpackPlugin,
  _BundleAnalyzerPlugin
]


module.exports = {
  dllPluginConfig,
  prodPluginConfig,
  developPluginConfig
}