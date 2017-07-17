'use strict'
module.exports = function(sequelize,DataTypes){
    var User = sequelize.define('user',{
        id:{
            type:DataTypes.BIGINT(11),
            primaryKey:true,
            autoIncrement: true,
            allowNull:false,
            unique: true
        },
        name:{
            type:DataTypes.STRING
        },
        age:{
            type:DataTypes.INTEGER
        },
        height:{
            type:DataTypes.INTEGER
        },
        weight:{
            type:DataTypes.INTEGER
        }
    },{
        freezeTableName: true,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
    return User;
};

