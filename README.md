# react 脚手架
## 说明
* 使用最新的react 16、react router4、mobx管理数据
* 使用http-proxy-middleware 代理，解决前端跨域问题
* 使用webpack.DllPlugin和webpack.DefinePlugin 来分离公共组件
* 使用airbnb标准进行语法检查
* 增加git钩子，git commit 时进行语法检查，语法检查不通过，commit将无法提交

```
// 启动服务
  npm start
  
// 编译代码
  npm run build 

// 编译公共组件
  npm run buildlib
```
# 请将dist.zip 解压 并替换 node_modules/jimu-mobile/dist 里面的所有文件