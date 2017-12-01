"use strict";
const webpack = require('webpack');
const path = require('path')

// 恢复到工程目录
__dirname = path.resolve(__dirname, '..')

// webpack-dev-server 配置
// const devServer = {
//     port: 3001,               // 端口
//     host: '0.0.0.0',          // 可以以localhost\127.0.0.1\ip访问
//     historyApiFallback: true, // H5 history使用
//     https: false,             // https服务开启
//     disableHostCheck: true,   // host检查关闭
//   }
//
const devServer = {
    port:3001,
    historyApiFallback: true,
    contentBase:"./dist",
    inline: false,
    stats:{
      colors:true
    }
  }

module.exports = {
    moduleWebpack:{
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: [
            path.resolve(__dirname, "src")
          ],
          use: [
            {
              loader: 'babel-loader'
            },
            // {
            //   loader: 'eslint-loader'
            // },
          ]
        },
        {
          test: [/\.less$/, /\.css$/],
          include: [
            path.resolve(__dirname, 'src/styles'),
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules'),
          ],
          use: [
            'style-loader',
            'css-loader',
          ]
        },
        {
          test: /\.(png|jpg|gif|eot)$/,
          include:[
              path.resolve(__dirname, 'styles'),
              path.resolve(__dirname, 'src/images'),
              path.resolve(__dirname, 'node_modules')
          ],
          exclude: [
              // path.resolve(__dirname, 'src')
          ],
          use:[{
            loader: "url-loader",
            options: {
              limit: 300000
            }
          }]
        },
        {
          test: /\.woff(\?.*)?$/,
          loader: 'url-loader?prefix=fonts/&name=fonts/[name]-[hash:8].[ext]&limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.ttf(\?.*)?$/,
          loader: 'url-loader?prefix=fonts/&name=fonts/[name]-[hash:8].[ext]&limit=10000&mimetype=application/octet-stream'
        },
        {
          test: /\.svg(\?.*)?$/,
          loader: 'url-loader?prefix=fonts/&name=fonts/[name]-[hash:8].[ext]&limit=10000&mimetype=image/svg+xml'
        },
      ]
      // rules: [
      //   {
      //     test: /\.(js|jsx|vue)$/,
      //     loader: 'eslint-loader',
      //     enforce: 'pre',
      //     options: {
      //       formatter: require('eslint-friendly-formatter')
      //     }
      //   },
      //   {
      //     test:  [/\.js$/, /\.jsx$/, /\.es6$/],
      //     include: [
      //       path.resolve(__dirname, 'src'),
      //     ],
      //     use: [{
      //       loader: "happypack/loader?id=bableloader"
      //     }],
      //   },
      
      //   {
      //     test: /\.(avi|mp4)\w*/,
      //     include:[
      //       path.resolve(__dirname, 'styles'),
      //     ],
      //     use: [{
      //       loader: "file-loader"
      //     }]
      //   },
      
      // ]
    },
    resolveWebpack: {
      alias: {
        Images: path.resolve(__dirname, 'src/images/'),
        Style: path.resolve(__dirname, 'src/styles/'),
        Components: path.resolve(__dirname, 'src/components/'),
        Actions: path.resolve(__dirname, 'src/actions/'),
        Util: path.resolve(__dirname, 'src/utils/'),
        Reducers: path.resolve(__dirname, 'src/reducers/')
      },
      extensions: ['.js', '.jsx'],
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    },
    devServerWebpack: devServer
}
