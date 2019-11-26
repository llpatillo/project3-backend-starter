'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
    name: DataTypes.STRING,
    candidate_img_url: DataTypes.TEXT,
    political_party: DataTypes.STRING,
    political_party_img_url: DataTypes.TEXT,
    current_office: DataTypes.STRING,
    official_website: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    twitter: DataTypes.STRING
  }, {});
  Candidate.associate = function(models) {
    Candidate.hasMany(models.Viewpoint, { foreignKey: 'candidate_id'})  
    Candidate.hasOne(models.Background, { foreignKey: 'id'})
    Candidate.hasMany(models.Comment, { foreignKey: 'candidate_id'})
  };
  return Candidate;
};


