const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercise1: { type: String, required: true },
  exercise2: { type: String },
  exercise3: { type: String },
  exercise4: { type: String },
  exercise5: { type: String },
  exercise6: { type: String },
});
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;