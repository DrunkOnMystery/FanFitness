const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/games"
  );

const gameSeed = [
    {
        teamname: "sampleTeam",
        gamedate: 01/01/01,
        runs: 0,
        homeruns: 0,
        strikeouts: 0,
        OppHomeRuns: 0,
        OppRuns: 0,
        OppStrikeouts: 0
    }
];

  db.GameData
  .remove({})
  .then(() => db.GameData.collection.insertMany(gameSeed))
  .then(data => {
    console.log(data.results + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });