// regras de negócios, lógica e funções!
const {Model, DataTypes} = require('sequelize');
class Pessoa extends Model {
  static init (sequelize){
    super.init(
      {
       //id: DataTypes.INTEGER,
       name: DataTypes.STRING,
       email: DataTypes.STRING,
       endereco: DataTypes.STRING,
       sexo: DataTypes.STRING,
       ic_ativo: DataTypes.BOOLEAN,
      },
      {sequelize,
        tableName: 'pessoa',
      }
    );
    
  };
};
module.exports = Pessoa;