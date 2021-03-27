const Router = require('koa-router')
const {Message} = require('../model/message')
const {UploadContent} = require('../core/validator')
const {Success} = require('../core/exception')
const router = new Router({
  prefix: '/v1/subchairman'
});

router.post('/upload', async(ctx) => {
  const v = await new UploadContent().validate(ctx)
  console.log(1);
  let obj = {
    content: v.get('body.content'),
    forumid: v.get('body.forumid'),
    state: 0
  }
  await Message.uploadContent(obj)
  throw new Success('上传成功')
})

module.exports = router
