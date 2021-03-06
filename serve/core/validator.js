const {LinValidator,Rule} = require('./lin-validator');
const {User} = require('../model/user');

class IntegetValidator extends LinValidator{
  constructor(){
    super();
    this.id = [
      new Rule('isInt',"需要整形",{min: 1})
    ]
  }
}
class RegisterValidator extends LinValidator{
  constructor(){
    super();
    this.account = [
      new Rule('isLength','用户名不能为空',{min: 1})
    ]
    this.password = [
      new Rule('isLength',"密码要在3位-20位之间",{max: 20,min: 3}),
    ]
  }
  async validateAccount(vals){
    const account = vals.body.account;
    const user =await User.findOne({
      where: {
        account
      }
    })
    if(user){
      throw new Error("account已经注册")
    }
  }
}

class LoginValidator extends LinValidator{
  constructor() {
    super() 
    this.account = [
      new Rule('isLength', "不能为空", {min: 1})
    ]
    this.password = [
      new Rule('isLength', "不能为空", {min: 1})
    ]
  }
}

class UploadContent extends LinValidator{
  constructor() {
    super()
    this.content = [
      new Rule('isLength','不能为空', {min: 1})
    ]
    this.forumid = [
      new Rule('isLength', 'id不能为空',{ min: 1})
    ]
  }
}

module.exports = {IntegetValidator,RegisterValidator,RegisterValidator,UploadContent,LoginValidator}