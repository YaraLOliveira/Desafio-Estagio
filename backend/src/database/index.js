const databaseConfig = require('../config/config');//cofigurações do banco
const Sequelize = require('sequelize'); // inicializa o sequelize
const connection = new Sequelize(databaseConfig); // conecta sequelize ao banco
module.exports = connection; 