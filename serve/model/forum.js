const {sequelize} = require('../core/db')
const {AuthoFailed,NotFound} = require('../core/exception')
const {Model,DataTypes} = require('sequelize')


class Forum extends Model{
  
}
Forum.init({
  forumid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  subchairmanid: {
    type: DataTypes.STRING(256),
  },
  secretaryid:{
    type: DataTypes.INTEGER,
  },
  topic: {
    type: DataTypes.STRING(128)
  },
  time: {
    type: DataTypes.DATE,
  }
},{
  sequelize,
  tableName: 'forum'
})

module.exports = {Forum}