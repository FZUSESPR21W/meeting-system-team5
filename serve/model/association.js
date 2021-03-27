const {sequelize} = require('../core/db')
const {AuthoFailed,NotFound} = require('../core/exception')
const {User} = require('./user')
const {Model,DataTypes} = require('sequelize')


class Association extends Model{
  static async insertForumById(id, forumid) {
    await Association.create({
      userid: id,
      forumid
    })
  }
  static async getForumid(account) {
    let id = await User.findOne({
      where: {
        account
      }
    })
    console.log(1);
    return await Association.findAll({
      attributes: ['forumid'],
      where: {
        userid: id
      }
    })
  }
  static async countNumByForum(forumid) {
    let num = await Association.count({
      where: {
        forumid
      }
    })
    return num
  }
}
Association.init({
  userid: {
    type: DataTypes.INTEGER,
  },
  forumid: {
    type: DataTypes.INTEGER,
  }
},{
  sequelize,
  tableName: 'association'
})

module.exports = {Association}