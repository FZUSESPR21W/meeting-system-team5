const Router = require("koa-router")
const requireDirectory = require("require-directory")

class initApp{
  static init(app){
    initApp.app = app;
    initApp.initRouter()  
    initApp.loadConfig()
  }
  // 初始化路由
  static initRouter() {
    const modules = requireDirectory(module,'../api',{visit: registerRouters})
    
    // 将modules里的路由注册
    function registerRouters(item){
        if(item instanceof Router){
          initApp.app.use(item.routes())
        }
    } 
  }

}
module.exports = initApp;