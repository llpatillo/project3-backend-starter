'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.changeColumn(
     'Viewpoints',  
    'expanded_view', 
    { type: Sequelize.TEXT }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Viewpoints',  
     'expanded_view', 
     { type: Sequelize.STRING }
     );
   },
};