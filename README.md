# Hackathon - Build a Back End

There's some code you'll need to write to get this application running. Your server will function as a data API like we've been building, and it'll also serve an HTML page.

When the server is working, you should see a website at `http://localhost:3000`. Currently, there is a very basic front-end (HTML/CSS/JS) served at `localhost:${port}` [(index.html)](./views/index.html). You shouldn't change the front end yet. You'll start by building a back end that fits with its needs.

## Populate

First, get your basic CRUD routes up and running in your [router](router/recipes.js) so that your server listens for requests and serves the appropriate recipes data (which can be found in [libs/recipes.js](libs/recipes.js)). The table below outlines the information you need to do this, including the methods, RESTful path, if there should be a body with the request, expected result, and structure of response.

Remember that you can test with [Postman](https://learning.postman.com/docs/getting-started/sending-the-first-request/) one at a time as you code them to make sure they're working.

### Requirements table

| Method | Path                 | Additional Info | Result                                    | Response                                    |
| ------ | -------------------- | --------------- | ----------------------------------------- | ------------------------------------------- |
| GET    | /recipes             |                 | all recipes                               | { success: Boolean, payload: recipe array } |
| GET    | /recipes/<recipe_id> |                 | recipes with a particular id if it exists | { success: Boolean, payload: recipe }       |
| POST   | /recipes             | { body }        | create a new recipe                       | { success: Boolean, payload: recipe }       |
| PUT    | /recipes/<recipe_id> | { body }        | updated recipe                            | { success: Boolean, payload: recipe }       |
| DELETE | /recipes/<recipe_id> |                 | recipe deleted                            | { success: Boolean, payload: recipe }       |

### Important things to keep in mind

- **Go one by one!** Make a route handler and then test it - don't try to write multiple routes and then test them all at once afterwards. Only move on to the next route when you're confident the previous one works.
- **Break it down** - make a plan for each route. Start with what's coming in with the request and the response you expect, and then keep breaking the logic to get there down until you can't any further. Treat it like a Codewars and plan out the logic.
- Make sure your responses include the **payload key**, with the value being either a recipe or array of recipes, as shown in the table above. This is what the front end is expecting in your bonus challenge below!

## Bonus challenges - THESE ARE OPTIONAL!

Only when you're confident that all of the routes above work and your API is RESTful, try the challenges below.

Prioritize helping your peers in other groups with the requirements above as well if you get to this point. Remember that articulating to others will strengthen your own understanding!

### Create your models

Another way to further organize your server's code and modularize for separating concerns is to pull out the logic that actually interacts with the data into models and then export and import them where needed - this way, the router only handles the routing.

In the models folder, there is a `recipes.js` file which should contain all of the useful logic in order to interact with the recipes collection. Complete the methods in there so they behave as expected by moving logic out of your router. These functions should be exported so you can use them in other files later.

- `getRecipes` should return an array of all recipes
- `getRecipeByID` should return the particular recipe we are looking for
- `createRecipe` should add a recipe to the collection and return the new recipe
- `updateRecipeByID` should replace the recipe at a certain ID with an updated version and return the new recipe
- `deleteRecipeByID` should remove the specific recipe from the collection, and return the deleted recipe

Soon, we'll move to interacting with our data in databases, but for now, you can mutate the `data` array directly using the array methods we've used so far on the course.

Import your model functions into [your router](routes/recipes.js).

### Join up to the front end

As mentioned above, our server is also serving an HTML page as a basic front end, visible when you navigate to `http://localhost:3000` in your browser rather than Postman. You can look in the [public](./public/) and [views](./views) folders to see this front end code.

The fetch requests are already written in the [main.js](public/main.js) file, so see if you can get the functionality already there on the front end interacting with your API.

### Add middleware

Add [middleware](https://expressjs.com/en/guide/using-middleware.html) to your app. Ideas include:

- Existing Express middleware (check [the docs](https://expressjs.com/en/resources/middleware.html) to find out more)
- A logger that prints out details of the request to the console
- A count of how many calls your API receives

### Add additional routes

Now that you have your basic CRUD routes defined and functioning, try to add the following routes:

- Using a [query](https://masteringjs.io/tutorials/express/query-parameters) to search recipes by title
- Using a [query](https://masteringjs.io/tutorials/express/query-parameters) to search recipes by ingredients
- Using a PATCH request to update specific parts of recipes

| Method | Path                | Additional Info     | Result                                                                   | Response                                    |
| ------ | ------------------- | ------------------- | ------------------------------------------------------------------------ | ------------------------------------------- |
| GET    | /recipe             | ?title=beans        | all recipes that contain "beans" in their title for example              | { success: Boolean, payload: recipe array } |
| GET    | /recipe             | ?ingredients=butter | all recipes that contain "butter" in their ingredients array for example | { success: Boolean, payload: recipe array } |
| PATCH  | /recipe/<recipe_id> | { body }            | updated specific property in recipe                                      | { success: Boolean, payload: recipe }       |

### Change the base url of the api to be `/api`

A RESTful convention we haven't visited yet is that an API is often part of a wider domain service, and so you can prefix the url with `/api` to make it clear where requests are going and will be handled. For example, instead of `/recipes` you would listen at and request to `/api/recipes`. This would need to be changed in the `app.js` file for handling the routes, and then for sending the requests you would change the `url` variable in `public/main.js`.

### Keep improving!

If you have time remaining, brainstorm new features that you can add to your app, either on your server or on the front end. This could include styling, additional functionality, error handling, additional query options, and more.
