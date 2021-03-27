class HttpException extends Error {
  constructor(msg, errorCode) {
    super()
    this.code = 500;
    this.msg = msg || '哎呀，出错'
    this.errorCode = errorCode || 10000
  }
}

class ParameterException extends HttpException{
  constructor(msg, errorCode) {
    super()
    this.code = 400;
    this.msg = msg || '参数错了'
    this.errorCode = errorCode || 10001  // 10001代表参数错误
  }
}

class Success extends HttpException{
  constructor(msg,errorCode){
    super()
    this.msg = msg || 'ok'
    this.code = 201
    this.errorCode = errorCode || 0 // 0表示请求成功
  }
}

class NotFound extends HttpException{
  constructor(msg,errorCode){
    super()
    this.msg = msg || "资源未找到"
    this.errorCode = errorCode || 10002 // 10002 表示资源为找到
    this.code = 404 
  }
}

class AuthoFailed extends HttpException{
  constructor(msg, errorCode) {
    super()
    this.code = 401
    this.msg = msg || '授权失败'
    this.errorCode = errorCode || 10003 // 10003 表示授权失败，比如登录啥的
  }
}

module.exports = {
  HttpException,
  ParameterException,
  Success,
  NotFound,
  AuthoFailed
}