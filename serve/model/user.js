const {sequelize} = require('../core/db')
const {AuthoFailed,NotFound} = require('../core/exception')
const {Model,DataTypes} = require('sequelize')


class User extends Model{
  static async vetifyEmailPassword(account,password){
    const user = await User.findOne({
      where:{
        account
      }
    })
    if(!account){
      throw new NotFound("账号未找到")
    }
    const correct = password == user.password
    if(!correct){
      throw new AuthoFailed("密码不正确")
    }
    return user
  }
}
User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  account: {
    type: DataTypes.STRING(128),
    unique: true
  },
  password:{
    type: DataTypes.STRING(128),
  }
},{
  sequelize,
  tableName: 'user'
})

module.exports = {User}