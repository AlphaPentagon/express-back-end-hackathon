//Write your router code here!

//import recipes array from recipes.js ✅
import recipes from "../libs/recipes.js";

// import express and store it in a variable called express ✅
import express, { Router } from "express";

// create a router called router ✅
const recipesRouter = express.Router();

// Get all recipes
// use our get method on the router
// path '/recipes'
// req res
// create a responseObject with the correct properties and values
// when receive a request at recipes path, respond with the responseObject
// payload of all recipes✅

recipesRouter.get("/", function (req, res) {
  const responseObject = {
    success: true,
    payload: recipes,
  };
  res.json(responseObject);
});

// we need it to pull up a specific recipe using the id tag.

// We are gone use another Get method and we set the path to be /recipes:id
// now add the parameters and for the function.
// respond witht the payload of the specific recipe.
// loop over the array of recipes to find the id that we need.

recipesRouter.get("/:id", (req, res) => {
  let recipeId = req.params.id;
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
      res.json(responseObject);
      return;
    }
  }

  // if the for loop does not find a match
  // respond with a failure message
  const responseObject = {
    success: false,
    message: `Cannot find recipe with id: ${recipeId}`,
  };
  res.json(responseObject);
});

// We now need to create a new recipe in the body of the API using POSTMAN.
// We need the use the post method on the router.✅
// we need the path to be "/" the parameters of the function are req, res.✅
// create a variable to store the req.body✅
// add the body to the recipes array. response should be true and the payload is the new recipe.✅
// responseobject to contain the new recipe. ✅
recipesRouter.post("/", function (req, res) {
  let newRecipe = req.body;
  recipes.push(newRecipe);
  const responseObject = {
    success: true,
    payload: newRecipe,
  };
  res.json(responseObject);
});

// export our router using ES6 ✅
export default recipesRouter;
