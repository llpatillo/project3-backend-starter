'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return ( 
      queryInterface.addColumn(
       'Comments',
       'candidate_id', 
       {
        type: Sequelize.INTEGER
       })
    
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
