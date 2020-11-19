const axios = require("axios");
const { response } = require("express");
const db = require("../models");


module.exports = {
    findAll: function (req, res) {
        const { params } = req;
        axios.get("https://api.sportsdata.io/v3/mlb/scores/json/TeamGameStatsByDate/2020-Aug-24?key=49f703424dd5440ab0bf8de43e4f7c40", {
            params
        })}}

