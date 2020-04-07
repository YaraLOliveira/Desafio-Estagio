// regras de negócios, lógica e funções!
const {Model, DataTypes} = require('sequelize');
class Pessoa extends Model {
  static init (sequelize){
    super.init(
      {
       name: DataTypes.STRING,
       email: DataTypes.STRING,
       endereco: DataTypes.STRING,
       sexo: DataTypes.STRING,
       ativo: DataTypes.BOOLEAN,
      },
      {sequelize,

      }
    );
    
  };
};
module.exports = Pessoa;