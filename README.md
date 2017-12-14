# react 脚手架
## 说明
* 运用react 16、react router4、mobx管理数据
* 使用http-proxy-middleware 代理，解决前端跨域问题
* 使用webpack.DllPlugin和webpack.DefinePlugin 来分离公共组件
* 提取公用webconfig配置，配置更清晰

```
// 启动服务
  npm start
  
// 编译代码
  npm run build 

// 编译公共组件
  npm run buildlib
```
# 请将dist.zip 解压 并替换 node_modules/jimu-mobile/dist 里面的所有文件