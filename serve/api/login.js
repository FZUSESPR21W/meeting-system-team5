const Router = require('koa-router')
const {LoginValidator} = require('../core/validator')
const {User} = require('../model/user')
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
  throw new Success("登录成功")
})

module.exports = router
