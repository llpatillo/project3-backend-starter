'use strict';
module.exports = (sequelize, DataTypes) => {
  const Viewpoint = sequelize.define('Viewpoint', {
    candidate_id: DataTypes.INTEGER,
    category: DataTypes.STRING,
    cat_description: DataTypes.STRING,
    for_against: DataTypes.STRING,
    expanded_view: DataTypes.STRING
  }, {});
  Viewpoint.associate = function(models) {
    Viewpoint.belongsTo(models.Candidate, { foreignKey: 'candidate_id'})
  };
  return Viewpoint;
};

