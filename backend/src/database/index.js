const Pessoa =  require('../app/models/pessoaModel');
const databaseConfig = require('../config/config');
const Sequelize = require('sequelize');

const models = [Pessoa];
class Database{
  constructor(){
    this.init();
  }
  init(){
    this.connection = new  Sequelize( databaseConfig);
    models.map(model => model.init(this.connection));
  }
}
module.exports = new Database();