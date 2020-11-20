const mongoose = require("mongoose");
const Schema = mongoose.Schema;

    const gameSchema = new Schema({
      gameid: {
        type: Number, required: true},
      teamid: {
        type: Number, required: true
      },
      teamname: {
        type: String, required: true
      },
      city: {
        type: String, required: true
      },
      gamedate: {
        type: Date, required: true
      },
      runs: {
        type: Number, required: true
      },
      singles: {
        type: Number, required: true
      },
      doubles: {
        type: Number, required: true
      },
      triples: {
        type: Number, required: true
      },
      homeruns: {
        type: Number, required: true
      },
      strikeouts: {
        type: Number, required: true
      },
      popouts: {
        type: Number, required: true
      },
      flyouts: {
        type: Number, required: true
      },
      groundouts: {
        type: Number, required: true
      },
      steals: {
        type: Number, required: true
      },
      walks: {
        type: Number, required: true
      },
      doubleplays: {
        type: Number, required: true
      },
      tripleplays: {
        type: Number, required: true
      },
      oppsingles: {
        type: Number, required: true
      },
      oppdoubles: {
        type: Number, required: true
      },
      opptriples: {
        type: Number, required: true
      },
      opphomeruns: {
        type: Number, required: true
      },
      oppwalks: {
        type: Number, required: true
      },
      opphitbypitch: {
        type: Number, required: true
      },
      oppsteals: {
        type: Number, required: true
      },
      oppflyouts: {
        type: Number, required: true
      },
      oppgroundouts: {
        type: Number, required: true
      },
      opplineouts: {
        type: Number, required: true
      },
      opppopouts: {
        type: Number, required: true
      },
      oppstrikeouts: {
        type: Number, required: true
      },
      oppdoubleplays: {
        type: Number, required: true
      },
      opptripleplays: {
        type: Number, required: true
      },
      oppRuns: {
        type: Number, required: true
      }

    });
  
    const GameData = mongoose.model("GameData", gameSchema)
    module.exports= GameData;