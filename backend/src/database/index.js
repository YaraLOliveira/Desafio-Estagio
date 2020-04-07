const Pessoa =  require('../app/models/pessoaModel');
const databaseConfig = require('../config/config');
const Sequelize = require('sequelize')
const connection = new Sequelize(databaseConfig);
Pessoa.init(connection);
module.exports = connection;