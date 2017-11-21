var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require("html-webpack-plugin");
let  {
  moduleWebpack,
  resolveWebpack,
  devServerWebpack
} = require('./webpack.config.common.js')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: 'main.js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
  },
  module: moduleWebpack,
  devtool: 'cheap-source-map',
  devServer: devServerWebpack,
  resolve: resolveWebpack,
  plugins: [
    new htmlWebpackPlugin({
      title: "搭建前端工作流",
      template: "./src/index.html"
    })
  ]
}
