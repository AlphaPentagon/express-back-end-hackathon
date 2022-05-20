//Write your router code here!

//import recipes array from recipes.js ✅
import recipes from "../libs/recipes.js";

// import express and store it in a variable called express ✅
import express, { Router } from "express";

//import functions from models
import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "../models/recipes.js";

// create a router called router ✅
const recipesRouter = express.Router();

// Get all recipes, calls our getRecipes model
recipesRouter.get("/", function (req, res) {
  res.json(getRecipes());
});

// Get recipe by ID
recipesRouter.get("/:id", (req, res) => {
  res.json(getRecipeByID(req.params.id));
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

// create a put method to replace a recipe with a specific id ✅
// find the ID number specified in the request ✅
// see if a recipe with the same ID exists in the array ✅
// if so, then replace the object with the new object ✅
// respond with response message and payload ✅
// if the foor loop does not find a matching ID ✅
// return some sort of error message ✅

recipesRouter.put("/:id", (req, res) => {
  // gets the value of the id property from the body of the request
  let replacementRecipeId = req.body.id;
  // gets the value of the body from the request
  let replacementRecipe = req.body;

  // for loop - loop over every element of the recipes array✅
  for (let i = 0; i < recipes.length; i++) {
    // if the id from the body request matches an id property in the array object✅
    if (Number(replacementRecipeId) === recipes[i].id) {
      // replace the recipe with the id for the new recipe ✅
      recipes[i] = replacementRecipe;
      // respond with the replacement recipe object
      const responseObject = {
        succes: true,
        payload: replacementRecipe,
      };
      res.json(responseObject);
      return;
    }
  }

  // if the for loop does not find a match
  // respond with a failure message
  const responseObject = {
    success: false,
    message: `Cannot find recipe with id: ${replacementRecipeId}`,
  };
  res.json(responseObject);
});

// We are now deleting a recipe using a delete method
recipesRouter.delete("/:id", (req, res) => {
  // created a variable to store the ID of the request made, which is found on the path E.g localhost:3000/recipe/1, 1 is the id in this case.
  let recipeId = req.params.id;

  // for loop - loop over every element of the recipes array✅
  for (let i = 0; i < recipes.length; i++) {
    // if matching id number found✅
    if (Number(recipeId) === recipes[i].id) {
      // responds with a variable containing the .splice method which removes an object form an array from the location specified. ✅
      let recipesDeleted = recipes.splice(i, 1);
      const responseObject = {
        succes: true,
        payload: recipesDeleted,
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

// export our router using ES6 ✅
export default recipesRouter;
