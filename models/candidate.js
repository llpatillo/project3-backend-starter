'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
    name: DataTypes.STRING,
    candidate_img: DataTypes.STRING,
    political_party: DataTypes.STRING,
    political_party_img_url: DataTypes.STRING,
    current_office: DataTypes.STRING,
    official_website: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    twitter: DataTypes.STRING
  }, {});
  Candidate.associate = function(models) {
    Candidate.hasMany(models.Viewpoint, { foreignKey: 'candidate_id'})  
    Candidate.hasOne(models.Background, { foreignKey: 'id'})
  };
  return Candidate;
};


