'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return ( 
     queryInterface.renameColumn('Comments', 'name', 'your_name')
   
    )},

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
