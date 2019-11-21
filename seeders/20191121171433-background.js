'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Backgrounds', [
      {
        candidate_id: 1,
        education: "BA History and Political Science, University of Delaware, JD",
        hometown: "Philadelphia, PA",
        family: "Married, 4 children",
        legislation: "none",
        offices_held: "Vice President, US Senator",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        candidate_id: 2,
        education: "BA Economics, Brown University, Providence, RI. JD, Columbia Law School, New York City, NY",
        hometown: "New York, NY",
        family: "Married, 0 children",
        legislation: "none",
        offices_held: "none",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

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
