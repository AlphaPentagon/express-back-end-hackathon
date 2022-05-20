//Write your router code here!

//import recipes array from recipes.js ✅
import recipes from "../libs/recipes.js";

// import express and store it in a variable called express ✅ 
import express from "express";

// create a router called router ✅ 
const recipesRouter = express.Router();

// Get all recipes
// use our get method on the router
    // path '/recipes'
    // req res
// create a responseObject with the correct properties and values
// when receive a request at recipes path, respond with the responseObject
// payload of all recipes✅

recipesRouter.get("/recipes", function (req, res) {
    const responseObject = {
        success: true,
        payload: recipes
    };
    res.json(responseObject);
});

// export our router using ES6 ✅
export default recipesRouter;
