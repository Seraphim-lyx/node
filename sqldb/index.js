'use strict'

var config = require('../config');
var Sequelize = require('sequelize');
var db = {
    sequelize:new Sequelize(config.sequelize.database,config.sequelize.username,config.sequelize.password,config.sequelize)
};

db.User= db.sequelize.import('../model/user.js');
db.Role= db.sequelize.import('../model/role.js');
db.text= 'text';
//associations
db.Role.hasOne(db.User);
db.User.belongsTo(db.Role);


module.exports = db;