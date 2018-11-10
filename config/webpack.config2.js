const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = require('./blockConfig');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'), // string
    filename: 'main.js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
    publicPath: '/',
  },
  module: config.moduleConfig,
  devtool: 'cheap-source-map',
  devServer: config.devServerConfig,
  resolve: config.resolveConfig,
  plugins: [

    new HtmlWebpackPlugin({
      title: '主页——dev',
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
