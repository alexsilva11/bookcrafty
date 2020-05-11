'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('endereco', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true 
      },
      endereco: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      numero:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
      complemento: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING(8)
      },
      uf: {
        type: Sequelize.STRING(2)
      },
      fk_usuario:{
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
    });
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('endereco');
  }
};
