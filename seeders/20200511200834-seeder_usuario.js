'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert(
      'usuario', [{
          nome: 'Alex',
          email: 'alex@alex.com',
          senha: bcrypt.hashSync('123456', 10)
        },
        {
          nome: 'Poliana',
          email: 'poliana@alex.com',
          senha: bcrypt.hashSync('123456', 10)
        },
        {
          nome: 'Bianca',
          email: 'bianca@alex.com',
          senha: bcrypt.hashSync('123456', 10)
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('usuario', null, {});
  }
};