const Router = require('koa-router')
const {RegisterValidator} = require('../core/validator')
const {User} = require('../model/user')
const {Association} = require('../model/association')
const {Success} = require('../core/exception')
const router = new Router({
  prefix: '/v1/user'
});

router.get('/register', async(ctx) => {
  console.log(22);
})
router.post('/register', async(ctx) => {
  const v = await new RegisterValidator().validate(ctx)
  let user = {
    account: v.get('body.account'),
    password: v.get('body.password'),
    category: v.get('body.category'),
    forumid: v.get('body.forumid')
  }
  let t = await User.addAccount(user)
  for(let i = 0; i < user.forumid.length; i++) {
    await Association.insertForumById(t.id, user.forumid[i])
  }
  throw new Success("创建成功")
})

module.exports = router
