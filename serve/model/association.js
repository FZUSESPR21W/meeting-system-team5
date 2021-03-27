const {sequelize} = require('../core/db')
const {AuthoFailed,NotFound} = require('../core/exception')
const {Model,DataTypes} = require('sequelize')


class Association extends Model{
  static async insertForumById(id, forumid) {
    await Association.create({
      userid: id,
      forumid
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