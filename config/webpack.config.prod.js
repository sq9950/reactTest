var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require("html-webpack-plugin");
// 项目依赖图显示
var Visualizer = require('webpack-visualizer-plugin');


var config = require("./blockConfig");

module.exports = {
  cache: true, //开启缓存模式
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, "../dist"), // string
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
    publicPath: '/'
  },
  module: config.moduleConfig,
  resolve: config.resolveConfig,
  plugins: config.prodPluginConfig
}