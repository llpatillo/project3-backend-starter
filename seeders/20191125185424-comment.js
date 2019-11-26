'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
       candidate_id: 1, 
       your_name: "A concerned citizen",
       comment: "I would like to see more information about Mr. Biden's position on gun control.",
       createdAt: new Date(),
       updatedAt: new Date()
   
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
