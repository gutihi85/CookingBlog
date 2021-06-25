const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredients extends Model {}

Ingredients.init(

    {
     recipeingredients_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'recipes',
          key: 'id',
        },
      },
      // this is a string in order to add the measures eg 130 g
      ingredient_quantity: {
        type: DataTypes.STRING,
      },
      ingredient_name: {
        type: DataTypes.STRING,
      },
      ingredient_type: {
        type: DataTypes.STRING,
      },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingredients',
  }
);

module.exports = Ingredients;
