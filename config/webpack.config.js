var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: 'bundle.js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use:[{
          loader: "url-loader?limit=1000"
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)\w*/,
        use: [{
          loader: "file-loader"
        }]
      }
    ]
  },
  devtool: 'cheap-source-map',
  devServer: {
    contentBase:"./dist",
    historyApiFallback:true,
    inline: true,
    port:8080,
    stats:{
      colors:true
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "搭建前端工作流",
      template: "./src/index.html"
    })
  ]
}
