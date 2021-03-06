const Router = require('koa-router')
const {LoginValidator} = require('../core/validator')
const {User} = require('../model/user')
const {Forum} = require('../model/forum')
const {Success} = require('../core/exception')
const router = new Router({
  prefix: '/v1/user'
});

router.post('/login', async(ctx) => {
  const v = await new LoginValidator().validate(ctx)
  let user = {
    account: v.get('body.account'),
    password: v.get('body.password'),
  }
  await User.vetifyEmailPassword(user)
  ctx.auth = {
    account: user.account
  }
  throw new Success("登录成功")
})

router.post('/getforum', async(ctx) => {
  await Forum.getForum(ctx.request.body.account)
})

module.exports = router
