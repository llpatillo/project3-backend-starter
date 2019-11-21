'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Candidates', [
      {
        name: "Joe Biden",
        party: "Democratic",
        party_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
        candidate_img: " ",
        current_office: "none",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Andrew Yang",
        party: "Democratic",
        party_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/300px-US_Democratic_Party_Logo.svg.png",
        candidate_img: " ",
        current_office: "none",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
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
