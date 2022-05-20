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
    let id = req.params.id;
  res.json(getRecipeByID(id));
});

// Create new recipe

recipesRouter.post("/", function (req, res,) {
  let newRecipe = req.body;
  res.json(createRecipe(newRecipe));
});

// Update recipe by ID

recipesRouter.put("/:id", (req, res) => {
    let id = req.body.id;
    let updatedRecipe = req.body;
  res.json(updateRecipeByID(id, updatedRecipe)); 
});

// Delete recipe by ID

// We are now deleting a recipe using a delete method
recipesRouter.delete("/:id", (req, res) => {
     // created a variable to store the ID of the request made, which is found on the path E.g localhost:3000/recipe/1, 1 is the id in this case.
    let id = req.params.id;
    let responseObject = deleteRecipeByID(id)
    res.json(responseObject);
});

// export our router using ES6 ✅
export default recipesRouter;
