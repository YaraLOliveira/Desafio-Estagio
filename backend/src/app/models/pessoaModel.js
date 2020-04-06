// regras de negócios, lógica e funções!
const Sequelize = require('sequelize');
const {Model} = require('sequelize');
class Pessoa extends Model {
  static init (sequelize){
    super.init(
      {
       name: Sequelize.STRING,
       email: Sequelize.STRING,
       endereco: Sequelize.STRING,
       sexo: Sequelize.STRING,
       ic_ativo: Sequelize.BOOLEAN,
      },
      {sequelize,}
    );
  };
};
module.exports = Pessoa;