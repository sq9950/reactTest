const path = require('path');
const webpack = require('webpack');

// 可视化构建
let Visualizer = require('webpack-visualizer-plugin');

// 引用公共配置
let config = require('./blockConfig');

// 自动插入html
const AssetsPlugin = require('assets-webpack-plugin');

__dirname = path.resolve(__dirname, '..');

// 多核压缩构建
let os = require('os');
let UglifyJsParallelPlugin = require('webpack-uglify-parallel');

// 多核并行构建
let HappyPack = require('happypack');

module.exports = {
  entry: {
    vendor: [
      'react',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    library: '[name]_[chunkhash]',
  },
  module: config.moduleConfig,
  resolve: config.resolveConfig,
  plugins: config.dll_pluginConfig,
};
