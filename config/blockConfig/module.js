const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

__dirname = path.resolve(__dirname, '../..');
console.log('ExtractTextPlugin.extract',ExtractTextPlugin.extract)
const moduleConfig = {
  rules: [
    // {
    //   test: /\.(js|jsx)$/,
    //   loader: 'eslint-loader',
    //   enforce: 'pre',
    //   options: {
    //     formatter: require('eslint-friendly-formatter'),
    //   },
    // },
    {
      test: /\.(js|jsx)$/,
      include: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules/jimu-mobile/dist/styles/jimu.min.css'),
      ],
      use: 'babel-loader'
    },
    {
      test: /\.(css|less|sass)$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      use: [
        'style-loader',
        'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"',
        'less-loader',
      ],
    },
    {
      test: /\.css$/,
      include: [
        path.resolve(__dirname, 'node_modules'),
      ],
      use: [
        'style-loader',
        'css-loader',
        'less-loader',
      ],
    },
    {
      test: /\.(png|jpg|gif)$/,
      include: [
        path.resolve(__dirname, 'styles'),
        path.resolve(__dirname, 'src/images'),
        path.resolve(__dirname, 'node_modules'),
      ],
      exclude: [
        // path.resolve(__dirname, 'src')
      ],
      use: [{
        loader: 'url-loader',
        options: {
          limit: 300000,
        },
      }],
    },
    {
      test: /\.(woff|ttf|eot|svg)(\?.*)?$/,
      include: [
        path.resolve(__dirname, 'node_modules'),
      ],
      use: [{
        loader: 'url-loader',
        options: {
          limit: 300000,
        },
      }],
    },
  ],
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
};

module.exports = {
  moduleConfig,
};
