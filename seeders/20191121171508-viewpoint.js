'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Viewpoints', [
    {
      candidate_id: 1,
      category: "Gun control",
      cat_description: "Gun control is an issue",
      for_against: "FOR",
      expanded_view: "We need to control guns in America",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      candidate_id: 1,
      category: "Education",
      cat_description: "Education is an issue",
      for_against: "FOR",
      expanded_view: "We need to control education in America",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      candidate_id: 2,
      category: "Education",
      cat_description: "Education is an issue",
      for_against: "Against",
      expanded_view: "We need to control education in America",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      candidate_id: 2,
      category: "Gun control",
      cat_description: "Gun control is an issue",
      for_against: "Other",
      expanded_view: "We need to control guns in America",
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
