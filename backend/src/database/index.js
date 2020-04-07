const databaseConfig = require('../config/config');
const Sequelize = require('sequelize')
const connection = new Sequelize(databaseConfig);
module.exports = connection;