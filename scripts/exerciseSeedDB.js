const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/exercises"
  );
  
  const exerciseSeed = [
    {
      name: "Squats",
      description:
        "Start at a standing position. Crouch or sit with one's knees bent and one's heels close to or touching one's buttocks or the back of one's thighs. Return to a standing position.",
      defaultCount: 5,
    },
    {
        name: "Jumping-Jacks",
        description: "a conditioning exercise performed from a standing position by jumping to a position with legs spread and arms raised and then jumping back to the original position.",
        defaultCount: 5,
    },
    {
        name: "Pushups",
        description: "An exercise in which a person lies facing the floor and, keeping their back straight, raises their body by pressing down on their hands, before lowering their body back to the floor.",
        defaultCount: 5,
    },
    {
        name: "Burpees",
        description: "a conditioning exercise in which a person squats, places the palms of the hands on the floor in front of the feet, jumps back into a push-up position, in some cases completes one push-up, returns to the squat position, and then jumps up into the air while extending the arms overhead",
        defaultCount: 5,
    }
  ];
  
  db.Exercise
    .remove({})
    .then(() => db.Exercise.collection.insertMany(exerciseSeed))
    .then(data => {
      console.log(data.results + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });