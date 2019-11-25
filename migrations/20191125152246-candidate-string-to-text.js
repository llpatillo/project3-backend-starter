'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return Promise.all( [
     queryInterface.changeColumn(
     'Candidates',
     'candidate_img_url',
    { 
      type: Sequelize.TEXT 
    }),
    queryInterface.changeColumn(
    'Candidates',
    'political_party_img_url',
   { 
     type: Sequelize.TEXT 
   })
   ])},

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
      'Candidates',
      'candidate_img_url',
     { 
       type: Sequelize.STRING 
     }),
     queryInterface.changeColumn(
     'Candidates',
     'political_party_img_url',
    { 
      type: Sequelize.STRING
    })
    ])},
};
