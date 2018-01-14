var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");

var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

var config = require("./blockConfig");

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: 'main.js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
    publicPath: '/'
  },
  module: config.moduleConfig,
  devtool: 'cheap-source-map',
  devServer: config.devServerConfig,
  resolve: config.resolveConfig,
  plugins: [
    ...config.dev_pluginConfig,
    new SWPrecacheWebpackPlugin({
      cacheId: 'v1',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      minify: true,
      navigateFallback: './example/index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
    new ExtractTextPlugin('app.css', {
        allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('develop'), // react切换到produco版本
      },
    }),
    new HtmlWebpackPlugin({
      title: '主页——dev',
      template: './src/index.html',
      filename: 'index.html',
    })
  ]
}
