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
  
  let searchedId = {};

  // for loop - loop over every element of the recipes array✅
  for (let i = 0; i < recipes.length; i++) {
    // if matching id number found✅
    if (Number(id) === recipes[i].id) {
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
    message: `Cannot find recipe with id: ${id}`,
  };
  return responseObject;
}

// We now need to create a new recipe in the body of the API using POSTMAN.
// We need the use the post method on the router.✅
// we need the path to be "/" the parameters of the function are req, res.✅
// create a variable to store the req.body✅
// add the body to the recipes array. response should be true and the payload is the new recipe.✅
// responseobject to contain the new recipe. ✅

// CREATE A RECIPE
export function createRecipe(newRecipe) {
  recipes.push(newRecipe);
  const responseObject = {
    success: true,
    payload: newRecipe,
  };
  return responseObject;
}

// create a put method to replace a recipe with a specific id ✅
// find the ID number specified in the request ✅
// see if a recipe with the same ID exists in the array ✅
// if so, then replace the object with the new object ✅
// respond with response message and payload ✅
// if the foor loop does not find a matching ID ✅
// return some sort of error message ✅

// UPDATE A RECIPE BY ID
export function updateRecipeByID(id, updatedRecipe) {    
     // for loop - loop over every element of the recipes array✅
  for (let i = 0; i < recipes.length; i++) {
    // if the id from the body request matches an id property in the array object✅
    if (Number(id) === recipes[i].id) {
      // replace the recipe with the id for the new recipe ✅
      recipes[i] = updatedRecipe;
      // respond with the replacement recipe object
      const responseObject = {
        succes: true,
        payload: updatedRecipe,
      };
      return responseObject;      
    }
  }

  // if the for loop does not find a match
  // respond with a failure message
  const responseObject = {
    success: false,
    message: `Cannot find recipe with id: ${id}`,
  };
  return responseObject;
}

// DELETE A RECIPE BY ID
export function deleteRecipeByID(id) {  
  

  // for loop - loop over every element of the recipes array✅
  for (let i = 0; i < recipes.length; i++) {
    // if matching id number found✅
    if (Number(id) === recipes[i].id) {
      // responds with a variable containing the .splice method which removes an object form an array from the location specified. ✅
      let recipesDeleted = recipes.splice(i, 1);
      const responseObject = {
        succes: true,
        payload: recipesDeleted,
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
};