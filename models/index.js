const Users = require('./Users');
const Myfavorites = require('./Myfavorites');
const Course = require('./Course');
const Mainrecipes = require('./Mainrecipes');
const Recipes = require('./Recipes');
const Ingredients = require('./Ingredients');


// // Users hasMany Recipes
Users.hasMany(Recipes, {
    foreignKey: 'recipes_id',
})

// Recipes hasMany Mainrecipes
Mainrecipes.hasMany(Recipes, {
    foreignKey: 'recipes_id',
})


// Recipes hasMany Ingredients
Recipes.hasMany(Ingredients)

Ingredients.belongsTo(Recipes)

// // Course hasMany Recipes
Course.hasMany(Recipes, {
    foreignKey: 'recipes_id',
})

// // MyFavorites belongsTo Recipe
Myfavorites.hasMany(Recipes, {
    foreignKey: 'recipes_id',
})



module.exports = { Users, Myfavorites, Course, Mainrecipes, Recipes, Ingredients };
