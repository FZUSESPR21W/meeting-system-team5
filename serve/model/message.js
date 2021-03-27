const {sequelize} = require('../core/db')
const {AuthoFailed,NotFound} = require('../core/exception')
const {Model,DataTypes} = require('sequelize')


class Message extends Model{
  static async uploadContent({content, forumid, state}) {
    await Message.create({
      content,
      forumid,
      state
    })
  }

  static async getmsg1(forumid) {
    return await Message.findAll({
      where: {
        forumid,
        state: 1
      }
    })
  }
  static async getmsg0(forumid) {
    return await Message.findAll({
      where: {
        forumid,
        state: 0
      }
    })
  }
}
Message.init({
  forumid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.STRING(256),
  },
  state:{
    type: DataTypes.INTEGER,
  }
},{
  sequelize,
  tableName: 'message'
})

module.exports = {Message}