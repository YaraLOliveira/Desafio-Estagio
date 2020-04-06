'use strict'; 
// migrations criam as tabelas no bd
// pessoa - id - nome - email - enderec - sex - ic ativo

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoa',
     {
        id:{
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        no_pessoa:{
          allowNull: false,
          type: Sequelize.STRING,
        },
        no_email:{
          allowNull: false,
          type: Sequelize.STRING,
        },
        endereco:{
          allowNull: false,
          type: Sequelize.STRING,
        },
        sex_pessoa:{
          allowNull: false,
          type: Sequelize.STRING, 
        },
        ic_ativo:{
          allowNull: false, 
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        }
      }    
    );
  },
    
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pessoa');
  }
};
