const Koa  = require('koa')
const serve = require('koa-static');
const {historyApiFallback}=require('koa2-connect-history-api-fallback')
const path=require('path')

const proxy=require('koa2-proxy-middleware')
const app = new Koa();



// 这句话 的意思是除接口之外所有的请求都发送给了 index.html
app.use(historyApiFallback({
    whiteList: ['/prod-api']
}))// 这里的whiteList是 白名单的意思


app.use(proxy({
    targets: {
      // (.*) means anything
      '/prod-api/(.*)': {
          // target: 'http://ihrm-java.itheima.net/api', //后端服务器地址
          target: 'http://127.0.0.1:3000/api', //后端服务器地址
          changeOrigin: true,
          pathRewrite: { 	
              '/prod-api': ""
          }
      }
    }
  }))
app.use(serve(__dirname + "/public/dist")); //将public下的代码静态化
app.listen(3333, () => {
     console.log('人资项目启动')
})