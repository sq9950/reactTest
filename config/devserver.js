const path = require('path');
const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');

const webpackConfig = require('./webpack.config.js');


const proxyTable = require('./proxyTable.js');
const app = new (require('express'))();

const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true,
});
// const hotMiddleware = require('webpack-hot-middleware')(compiler, {
//   log: () => {},
// });
// force page reload when html-webpack-plugin template changes
// compiler.plugin('compilation', (compilation) => {
//   compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
//     hotMiddleware.publish({ action: 'reload' });
//     cb();
//   });
// });
// proxy api requests
Object.keys(proxyTable).forEach((context) => {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options };
  }
  app.use(proxyMiddleware(context, options));
});

app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);
const port = 3001;
// enable hot-reload and state-preserving
// compilation error display
// app.use(hotMiddleware);

const uri = `http://localhost:${port}`;

let _resolve;
const readyPromise = new Promise((resolve) => {
  _resolve = resolve;
});

console.log('> Starting dev server...');
devMiddleware.waitUntilValid(() => {
  console.log(`> Listening at ${uri}\n`);
  // when env is testing, don't need open it
  // if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
  //   opn(uri)
  // }
  _resolve();
});

const server = app.listen(port);
