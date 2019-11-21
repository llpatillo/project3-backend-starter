'use strict';
module.exports = (sequelize, DataTypes) => {
  const Background = sequelize.define('Background', {
    candidate_id: DataTypes.INTEGER,
    education: DataTypes.STRING,
    hometown: DataTypes.STRING,
    family: DataTypes.STRING,
    legislation: DataTypes.STRING,
    offices_held: DataTypes.STRING
  }, {});
  Background.associate = function(models) {
    Background.belongsTo(models.Candidate, { foreignKey: 'id' })
  };
  return Background;
};