const Router = require('koa-router')
const {User} = require('../model/user')
const {Message} = require('../model/message')
const {UploadContent} = require('../core/validator')
const {Success} = require('../core/exception')
const router = new Router({
  prefix: '/v1/secretary'
});

router.get('/getuser', async(ctx) => {
  ctx.body = await User.getAllUser()
  
})
router.post('/update', async(ctx) => {
  await Message.updateState()
  throw new Success('修改状态成功')
})

module.exports = router
