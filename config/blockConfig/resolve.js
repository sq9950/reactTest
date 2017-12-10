var path = require('path')
__dirname = path.resolve(__dirname, '../..')

const resolveConfig = {
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
}

module.exports = {
  resolveConfig
}