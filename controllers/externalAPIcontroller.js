const axios = require("axios");
const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        const { query: params } = req;
    axios.get(
        "https://api.sportsdata.io/v3/mlb/scores/json/TeamGameStatsByDate/", {
            params
        })
        .then(results =>
            )


    })
}



    // const teamGames = [];

    // const API_KEY =process.env.REACT_APP_API_KEY;

    // const apiURL = `https://api.sportsdata.io/v3/mlb/scores/json/TeamGameStatsByDate/2020-Aug-17?key=${API_KEY}`;
    // fetch(apiURL)
    //     .then(response => response.json())
    //     .then(function (data) {

    //         for (let i = 0; i < data.length; i++) {
    //             teamGames.push({
    //                 date: data[i].Day,
    //                 name: data[i].Name,
    //                 runs: data[i].Runs,
    //                 homeruns: data[i].HomeRuns,
    //                 OppStrikeouts: data[i].PitchingStrikeouts,
    //                 OppRuns: data[i].PitchingRuns,
    //                 OppHomeRuns: data[i].PitchingHomeRuns,
    //                 strikeouts: data[i].Strikeouts
    //             })
    //             console.log(data[i].Name);
    //         }

    //         console.log(teamGames);
    //     });
