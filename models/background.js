'use strict';
module.exports = (sequelize, DataTypes) => {
  const Background = sequelize.define('Background', {
    candidate_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    place_of_birth: DataTypes.STRING,
    education: DataTypes.STRING,
    family: DataTypes.STRING,
    legislation: DataTypes.STRING,
    offices_held: DataTypes.STRING
  }, {});
  Background.associate = function(models) {
    Background.belongsTo(models.Candidate, { foreignKey: 'id' })
  };
  return Background;
};