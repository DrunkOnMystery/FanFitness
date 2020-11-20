const router = require("express").Router();
const sportsAPIcontroller = require("../../controllers/sportsAPIcontroller");

// Matches with "/api/games"
router.route("/")
  .get(sportsAPIcontroller.findAll)
  .post(sportsAPIcontroller.create);

// Matches with "/api/games/:id"
router
  .route("/:id")
  .get(sportsAPIcontroller.findById)
  .put(sportsAPIcontroller.update)
  .delete(sportsAPIcontroller.remove);

module.exports = router;