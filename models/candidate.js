'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
    name: DataTypes.STRING,
    party: DataTypes.STRING,
    party_img: DataTypes.STRING,
    candidate_img: DataTypes.STRING,
    current_office: DataTypes.STRING
  }, {});
  Candidate.associate = function(models) {
    Candidate.hasMany(models.Viewpoint, { foreignKey: 'candidate_id'})  
    Candidate.hasOne(models.Background, { foreignKey: 'id'})
  };
  return Candidate;
};


