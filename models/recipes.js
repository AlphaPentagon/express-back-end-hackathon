import recipes from "../libs/recipes.js";

// GET ALL RECIPES
// use our get method on the router
// path '/recipes'
// req res
// create a responseObject with the correct properties and values
// when receive a request at recipes path, respond with the responseObject
// payload of all recipes✅

export function getRecipes() {
  const responseObject = {
    success: true,
    payload: recipes,
  };
  return responseObject;
}

// GET A RECIPE BY ID

// we need it to pull up a specific recipe using the id tag.

// We are gone use another Get method and we set the path to be /recipes:id
// now add the parameters and for the function.
// respond witht the payload of the specific recipe.
// loop over the array of recipes to find the id that we need.
export function getRecipeByID(id) {
  let recipeId = id;
  let searchedId = {};

  // for loop - loop over every element of the recipes array✅
  for (let i = 0; i < recipes.length; i++) {
    // if matching id number found✅
    if (Number(recipeId) === recipes[i].id) {
      // respond with the recipe with the matching id✅
      searchedId = recipes[i];
      const responseObject = {
        succes: true,
        payload: searchedId,
      };
      return responseObject;
    }
  }
  // if the for loop does not find a match
  // respond with a failure message
  const responseObject = {
    success: false,
    message: `Cannot find recipe with id: ${recipeId}`,
  };
  return responseObject;
}

// CREATE A RECIPE
export function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export function deleteRecipeByID(id) {}
