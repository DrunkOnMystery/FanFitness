const express = require("express");
const Router = express.Router();

const gamesAPIcontroller = require("../../controllers/gamesAPIcontroller");

// Matches with "/api/games"
Router.route("/")
  .get(gamesAPIcontroller.findAll)
  .post(gamesAPIcontroller.create);

// Matches with "/api/games/:id"
Router.route("/:id")
  .get(gamesAPIcontroller.findById)
  .delete(gamesAPIcontroller.remove);

module.exports = Router;