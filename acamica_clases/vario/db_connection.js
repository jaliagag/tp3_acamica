const Sequelize = require('Sequelize')
//dbconfig
const dbConfig = require('./config/db_config')
//models
const UserModel = require('./src/models/user_model')
const RoleModel = require('./src/models/role_model')
//
const DB = {}

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.DIALECT
})

const User = UserModel(sequelize, Sequelize)
const Role = RoleModel(sequelize, Sequelize)

DB.sequelize = sequelize
DB.Sequelize = Sequelize
DB.User = User
DB.Role = Role

User.hasMany(DB.Role)
Role.belongsTo(DB.User)

module.exports = {
    DB
}
