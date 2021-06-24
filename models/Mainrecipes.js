const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mainrecipes extends Model {}

Mainrecipes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'mainrecipes',
  }
);

module.exports = Mainrecipes;