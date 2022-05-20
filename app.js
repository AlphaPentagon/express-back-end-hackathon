import express from "express";

import { html } from "./config.js";

// import our router ✅

import recipesRouter from "./router/recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

// use our router ✅
app.use(recipesRouter);

/* DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res) {
  res.sendFile(html);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
