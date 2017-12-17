
const {
  argv,
} = require('optimist');

let v3_target = '';

switch (argv.env) {
  case 'pre':
    v3_target = 'pre_url';
    break;
  case 'dev':
    v3_target = 'developer_ulr';
    break;
  case 'online':
    v3_target = 'online_url';
    break;
}

module.exports = {
  '/testfetch': {
    target: v3_target,
    changeOrigin: true,
  },
};
