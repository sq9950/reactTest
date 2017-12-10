const devServerConfig = {
  port:3001,
  https: false,
  historyApiFallback: true,
  contentBase:"./dist",
  inline: false,
  stats:{
    colors:true
  }
}
module.exports = {
	devServerConfig
}