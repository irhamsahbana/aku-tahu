'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScoreboardUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ScoreboardUser.belongsTo(models.Scoreboard, {
        foreignKey: 'scoreboardId',
        as: 'scoreboard'
      });
      ScoreboardUser.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  ScoreboardUser.init({
    scoreboardId: DataTypes.UUID,
    userId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'ScoreboardUser',
  });
  return ScoreboardUser;
};