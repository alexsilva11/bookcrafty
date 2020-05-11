'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedido', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true 
      },
      status: Sequelize.STRING(45),
      fk_usuario:{
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id'
        },
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('pedido');
  }
};
