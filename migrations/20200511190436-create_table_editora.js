'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.createTable(
    'editora', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      }
     });
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('editora');
    
  }
};
