'use strict';
module.exports = (sequelize, DataTypes) => {
  const Viewpoint = sequelize.define('Viewpoint', {
    candidate_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    for_against: DataTypes.STRING,
    expanded_view: DataTypes.TEXT
  }, {});
  Viewpoint.associate = function(models) {
    Viewpoint.belongsTo(models.Candidate, { foreignKey: 'candidate_id'})
  };
  return Viewpoint;
};

