'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     
    return queryInterface.createTable('produto', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true 
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      descricao:{
        type: Sequelize.STRING(300),
        allowNull: true
      },
      preco: {
        type: Sequelize.FLOAT
      },
      fk_categoria: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categoria',
          key: 'id'
        },
        allowNull: false,
      },
      imagem: {
        type: Sequelize.STRING(500)
      },
      fk_editora:{
        type: Sequelize.INTEGER,
        references: {
          model: 'editora',
          key: 'id'
        },
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('produto');
  }
};
