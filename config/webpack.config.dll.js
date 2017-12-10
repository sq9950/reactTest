const path = require('path');
const webpack = require('webpack');

// 可视化构建
var Visualizer = require('webpack-visualizer-plugin');

// 引用公共配置
let  { moduleWebpack, resolveWebpack } = require('./webpack.config.common.js')

// 自动插入html
const AssetsPlugin = require('assets-webpack-plugin');

__dirname = path.resolve(__dirname, '..')

// 多核压缩构建
var os = require('os')
var UglifyJsParallelPlugin = require('webpack-uglify-parallel')

// 多核并行构建
var HappyPack = require('happypack');

module.exports = {
  entry: {
    vendor: [
      'Components'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist/dist/'),
    filename: '[name].[chunkhash].js',
    library: '[name]_[chunkhash]',
    publicPath: '/dist/'
  },
  module: moduleWebpack,
  resolve: resolveWebpack,
  plugins: [
    // 最小化加载
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production') //react切换到produco版本
      }
    }),
    // 并行压缩
    new UglifyJsParallelPlugin({
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
    }),
    // 并行构建
    new HappyPack({
      loaders: ['babel-loader'],
      cache: true,
      threads: os.cpus().length
    }),
    // dll 生成
    new webpack.DllPlugin({
      path: path.join(__dirname, 'log', '[name]-manifest.json'),
      name: '[name]_[chunkhash]'
    }),
    new AssetsPlugin({
      filename: 'assetsplugin.json',
      path: path.join(__dirname, 'log'),
    }),
    // 项目依赖图
    new Visualizer({
      filename: '../../log/statistics-vendor.html',
    }),
  ]
};
