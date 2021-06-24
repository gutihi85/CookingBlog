const router = require('express').Router();
const {
  Course,
  Mainrecipes,
  Myfavorites,
  Recipes,
  Ingredients,
  Users,
} = require('../models');


// // Course Route
router.get('/course', async (req, res) => {
  try {
    // Get all courses
    const courseData = await Course.findAll();

    // Serialize data so templates can read it
    const courses = courseData.map((course) => course.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('course', { courses });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Main recipes Route
router.get('/mainrecipes', async (req, res) => {
  try {
    // Get all ingredients, sorted by name
    const mainrecipeData = await Mainrecipes.findAll();

    // Serialize  data so templates can read it
    const mainrecipes = mainrecipeData.map((mainrecipe) =>
      mainrecipe.get({ plain: true })
    );

    // Pass serialized data into Handlebars.js template
    res.render('mainrecipes', { mainrecipes });
  } catch (err) {
    res.status(500).json(err);
  }
});


//Ingredients route
router.get('/recipes', async (req, res) => {
  try {
    // Get all measuerements, sorted by name
    const ingredientData = await Ingredients.findAll();

    // Serialize data so templates can read it
    const ingredients = ingredientData.map((ingredient) =>
      ingredient.get({ plain: true })
    );

    // Pass serialized data into Handlebars.js template
    res.render('recipes', { ingredients });
  } catch (err) {
    res.status(500).json(err);
  }
});


// My Favorites
router.get('/myfavorites', async (req, res) => {
  try {
    // Get all myfavorites, sorted by name
    const myfavoritesData = await Myfavorites.findAll();

    // Serialize data so templates can read it
    const myfavorites = myfavoritesData.map((myfavorite) =>
      myfavorite.get({ plain: true })
    );

    // Pass serialized data into Handlebars.js template
    res.render('myfavorites', { myfavorites });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Recipes route
router.get('/recipes', async (req, res) => {
  try {
    // Get all recipes, sorted by name
    const recipeData = await Recipes.findAll();

    // Serialize data so templates can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('recipes', { recipes });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Users route
router.get('/', async (req, res) => {
  try {
    // Get all users examples
    const userData = await Users.findAll();

    // Serialize data so the template can read it
    const users = userData.map((user) => user.get({ plain: true }));

    // Pass serialized data
    res.render('homepage', {
      users,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
