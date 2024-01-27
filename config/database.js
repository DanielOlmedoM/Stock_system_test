const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test_db', 'root', 'password', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

module.exports = { sequelize };
