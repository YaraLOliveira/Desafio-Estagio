const { Model, DataTypes } = require("sequelize");
class Animais extends Model {
  static init(sequelize) {
    super.init(
      {
        fk_id_pessoas: DataTypes.INTEGER,
        id_fazenda: DataTypes.INTEGER,
        nome: DataTypes.STRING,
        raca: DataTypes.STRING,
        sexo: DataTypes.CHAR,
        peso: DataTypes.FLOAT,
        nascimento: DataTypes.DATEONLY,
      },
      (Animais.associate = (models) => {
        Animais.belongsTo(models.PessoaModel, {
          as: "proprietario", //pertence como
          foreignKey: "fk_id_pessoa", // chave estrangeira
          onUpdate: "CASCADE", //ATUALIZA -> com tabela pai
          onDelete: "CASCADE", //DELETA -> se o pai for deletado
        });

/*         Animais.belongsToMany(models.LoteModel, {
          through: "Animalote",
          as: "lotes",


        });  */
      }),
      { sequelize }
    );
  }
}
module.exports = Animais;
