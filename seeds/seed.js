const sequelize = require('../config/connection');
const { Users, Recipes, Course, Ingredients } = require('../models');

const userData = require('./userData.json');
const courseData = require('./courseData.json');
const recipeData = require('./recipesData.json');
const ingredientsData = require('./ingredientsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });


   await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Recipes.bulkCreate(recipeData);
  await Course.bulkCreate(courseData);
  // await Ingredients.bulkCreate(ingredientsData);

  process.exit(0);
};

seedDatabase();
