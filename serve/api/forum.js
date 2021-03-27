const Router = require('koa-router')
const {LoginValidator} = require('../core/validator')
const {Message} = require('../model/message')
const {ParameterException} = require('../core/exception')
const router = new Router({
  prefix: '/v1/forum'
});

router.get('/getnum', async(ctx) => {
  let numArr = []
  let num;
  num = await Association.countNumByForum(1)
  numArr.push(num)
  num = await Association.countNumByForum(2)
  numArr.push(num)
  num = await Association.countNumByForum(3)
  numArr.push(num)
  ctx.body = numArr
})

router.get('/getmsg1', async(ctx) => {
  let forumid = ctx.query.forumid
  if (!forumid) {
    throw new ParameterException()
  }
  ctx.body = await Message.getmsg1(forumid);
})

router.get('/getmsg0', async(ctx) => {
  let forumid = ctx.query.forumid
  if (!forumid) {
    throw new ParameterException()
  }
  ctx.body = await Message.getmsg0(forumid);
})

module.exports = router
