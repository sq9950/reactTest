var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

var config = require("./blockConfig");

module.exports = {
  cache: true, //开启缓存模式
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, "../dist/dist"), // string
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
    publicPath: '/dist/'
  },
  module: config.moduleConfig,
  resolve: config.resolveConfig,
  plugins: [
    ...config.prod_pluginConfig,
    new SWPrecacheWebpackPlugin({
      cacheId: new Date().getTime(),
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      minify: false,
      staticFileGlobs:[],
      mergeStaticsConfig: false,
      navigateFallback: 'https://sq9950.github.io/demo/home',
      runtimeCaching: [
        // 如果在staticFileGlobs中设置相同的缓存路径，可能导致此处不起作用
        {
          urlPattern: /\/demo\//,
          handler: 'networkFirst',
          options: {
            cache: {
              maxEntries: 10,
              name: 'router-cache'
            }
          }
        },
        // 如果在staticFileGlobs中设置相同的缓存路径，可能导致此处不起作用
        {
          urlPattern: /\/dist\//,
          handler: 'networkFirst',
          options: {
            cache: {
              maxEntries: 10,
              name: 'static-cache'
            }
          }
        }
      ]
    }),
    new ExtractTextPlugin('app.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'), // react切换到produco版本
      },
    }),
    new HtmlWebpackPlugin({
      title: '主页',
      template: './src/index.html',
      filename: 'index.html',
      // bundleName: bundleConfig.vendor.js, //追加默认dll
      inject: 'body'
    })
  ]
}
