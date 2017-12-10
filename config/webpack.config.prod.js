var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require("html-webpack-plugin");
// 项目依赖图显示
var Visualizer = require('webpack-visualizer-plugin');

let  {
  moduleWebpack,
  resolveWebpack,
  devServerWebpack
} = require('./webpack.config.common.js')

module.exports = {
  cache: true, //开启缓存模式
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, "../dist"), // string
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
    publicPath: '/'
  },
  module: moduleWebpack,
  devtool: 'cheap-source-map',
  devServer: devServerWebpack,
  resolve: resolveWebpack,
  plugins: [
    // 项目依赖图
    new Visualizer({
      filename: '../../log/statistics.html'
    }),
    new htmlWebpackPlugin({
      title: "搭建前端工作流",
      template: "./src/index.html"
    })
  ]
}


// var path = require('path')
// var webpack = require('webpack')
// var htmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, "dist"), // string
//     filename: 'bundle.js',
//     chunkFilename: '[name].[chunkhash:5].chunk.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['env']
//           }
//         }
//       },
//       {
//         test: /\.(png|jpg|gif)$/,
//         use:[{
//           loader: "url-loader?limit=1000"
//         }]
//       },
//       {
//         test: /\.(eot|svg|ttf|woff|woff2)\w*/,
//         use: [{
//           loader: "file-loader"
//         }]
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'less-loader'
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new htmlWebpackPlugin({
//       title: "搭建前端工作流",
//       template: "./src/index.html"
//     })
//   ]
// }