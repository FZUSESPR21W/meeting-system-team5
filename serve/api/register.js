const Router = require('koa-router')
const {RegisterValidator} = require('../core/validator')
const router = new Router({
  prefix: '/v1/user'
});

router.post('/register', async(ctx) => {
  const v = await new RegisterValidator().validate(ctx)
})
