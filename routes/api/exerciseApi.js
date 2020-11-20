const  mongoose = require("mongoose");
const express = require("express");
const Router = express.Router();

let exercise = require("../models/Exercise");

Router.route("/create").post((req,res) => {
    exercise.create(req.body, (err, data) => {
        if (err) throw err;
        else {
            res.json(data);
        }
    })
});

Router.route("/").get((res) => {
    exercise.find((err, data) => {
        if (err) throw err;
        else {
            res.json(data);
        }
    })
});

Router.route("/update/:id").put((req, res) => {
    exercise.findByIdAndUpdate(req.params.id, {
        $set: req.body 
    }, (err, data) => {
        if (err) throw err;
        else {
            res.json(data);
        }
    })
});

Router.route("/delete/:id").delete((req, res, next) => {
    exercise.findByIDandRemove(req.params.id, (err, data) => {
        if (err) throw err;
        else {
            res.status(200).json({
                msg: data 
            })
        }
    })
});

module.exports = router;