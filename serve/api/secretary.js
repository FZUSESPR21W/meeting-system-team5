const Router = require('koa-router')
const {User} = require('../model/user')
const {UploadContent} = require('../core/validator')
const {Success} = require('../core/exception')
const router = new Router({
  prefix: '/v1/secretary'
});

router.get('/getuser', async(ctx) => {
  ctx.body = await User.getAllUser()
  
})

module.exports = router
