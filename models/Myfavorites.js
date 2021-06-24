const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Myfavorites extends Model {}

Myfavorites.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'recipes',
          key: 'id',
        },
      },
   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'myfavorites',
  }
);

module.exports = Myfavorites;
