'use strict'

var all = {
    sequelize:{
        username: 'root',
        password: 'root',
        database: 'test',
        host: "localhost",
        port: 3306,
        dialect: 'mysql',
        define: {
            underscored: false,
            timestamps: false,
            paranoid: true
        }
    }
};

module.exports = all;