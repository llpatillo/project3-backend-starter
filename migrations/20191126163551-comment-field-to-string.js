'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.changeColumn(
    'Comments',  
    'comment', 
    { type: Sequelize.STRING }
    );
  },
  
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};


