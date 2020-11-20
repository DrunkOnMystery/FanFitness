const db = require("../models");


// module.exports = {
//     findAll: function (req, res) {
//         const { params } = req;
//         axios.get("https://api.sportsdata.io/v3/mlb/scores/json/TeamGameStatsByDate/2020-Aug-24?key=49f703424dd5440ab0bf8de43e4f7c40", {
//             params
//         })}}

module.exports = {
    findAll: function(req, res) {
      db.GameData
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    findById: function(req, res) {
      db.GameData
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.GameData
        .create(req, body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.GameData  
        .findById({_id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};

