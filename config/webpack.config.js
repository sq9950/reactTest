const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = require('./blockConfig');
console.log('__dirname',__dirname);
module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'), // string
    filename: 'main.js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
    publicPath: '/',
  },
  module: config.moduleConfig,
  resolve: config.resolveConfig,
  mode: 'development',
  plugins: [
    ...config.dev_pluginConfig,
    new HtmlWebpackPlugin({
      title: '主页——dev',
      template: './src/index.html',
    }),
  ],

};
