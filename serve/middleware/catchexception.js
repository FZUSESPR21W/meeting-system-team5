const {HttpException} = require('../core/exception')
const catchError = async(ctx,next)=>{
  try{
    await next()
  }catch(error){
    let isHttpException = error instanceof HttpException
    
    if(isHttpException){
      ctx.body = {
        error_code: error.errorCode,
        msg: error.msg,
        request_url: `${ctx.method} ${ctx.path}`
      }
      ctx.status= error.code
    }
  }
}
module.exports = catchError