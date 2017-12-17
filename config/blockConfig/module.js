const path = require('path');
ExtractTextPlugin = require('extract-text-webpack-plugin');
__dirname = path.resolve(__dirname, '../..');

const moduleConfig = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      options: {
        formatter: require('eslint-friendly-formatter'),
      },
    },
    {
      test: /\.(js|jsx)$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      use: [
        {
          loader: 'babel-loader',
        },
      ],
    },
    {
      test: /\.(css|less|sass)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"',
          'less-loader',
        ],
      }),
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
      test: /\.woff(\?.*)?$/,
      loader: 'url-loader?prefix=fonts/&name=fonts/[name]-[hash:8].[ext]&limit=10000&mimetype=application/font-woff',
    },
    {
      test: /\.ttf(\?.*)?$/,
      loader: 'url-loader?prefix=fonts/&name=fonts/[name]-[hash:8].[ext]&limit=10000&mimetype=application/octet-stream',
    },
    {
      test: /\.svg(\?.*)?$/,
      loader: 'url-loader?prefix=fonts/&name=fonts/[name]-[hash:8].[ext]&limit=10000&mimetype=image/svg+xml',
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
