'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    your_name: DataTypes.STRING,
    comment: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Candidate, { foreignKey: 'candidate_id'})
  };
  return Comment;
};