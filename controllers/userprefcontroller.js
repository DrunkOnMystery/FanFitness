const userdb = require("../models");

// module.exports = {
//     findAll: function(req, res) {
//         db.User
//             .find(req.query)
//             .sort({ date: -1 })
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     },
//     findByName: function(req, res) {
//         db.User
//             .findByName(req.params.name)
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     },
//     create: function(req, res) {
//         db.User
//             .create(req.body)
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err))
//     },
//     remove: function(req, res) {
//         db.User
//             .findByName({ _name: req.params.name })
//             .then(dbModel => dbModel.remove())
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     }
// };