const Router = require('koa-router')
const {User} = require('../model/user')
const {Success} = require('../core/exception')
const router = new Router({
  prefix: '/v1/chairman'
});

router.get('/getnum', async(ctx) => {
  const num =  await User.countNum()
  ctx.body = num
})

module.exports = router
