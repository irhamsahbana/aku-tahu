'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScoreboardQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ScoreboardQuestion.init({
    scoreboardId: DataTypes.UUID,
    questionId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'ScoreboardQuestion',
  });
  return ScoreboardQuestion;
};