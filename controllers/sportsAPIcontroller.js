const axios = require("axios");
const db = require("../models");

const mlbTeamApiUrl = "https://api.sportsdata.io/v3/mlb/scores/json/teams?key=49f703424dd5440ab0bf8de43e4f7c40";
fetch(mlbTeamApiUrl)
    .then(response => response.json())
    .then(data => console.log(data));

const mlbApiURL = "https://api.sportsdata.io/v3/mlb/scores/json/TeamGameStatsByDate/%7Bdate%7D?key=49f703424dd5440ab0bf8de43e4f7c40";
fetch(mlbApiURL)
    .then(response => response.json())
    .then(data => console.log(data));

module.exports = {
    findAll: function (req, res) {
        const { query, params } = req;
        axios.get("https://api.sportsdata.io/v3/mlb/scores/json/TeamGameStatsByDate/%7Bdate%7D?key=49f703424dd5440ab0bf8de43e4f7c40", {
            params
        })
            .then(results =>
                results.data.items.filter(
                    result =>
                        result.teamID.Name &&
                        result.teamID.TeamID &&
                        result.teamID.Wins &&
                        result.teamID.Singles &&
                        result.teamID.Doubles &&
                        result.teamID.Triples &&
                        result.teamID.HomeRuns &&
                        result.teamID.Runs &&
                        result.teamID.PopOuts &&
                        result.teamID.Strikeouts &&
                        result.teamID.Flyouts &&
                        result.teamID.GroundOuts &&
                        result.teamID.GroundIntoDoublePlay &&
                        result.teamID.Errors &&
                        result.teamID.Walks &&
                        result.teamID.PitchingSingles &&
                        result.teamID.PitchingDoubles &&
                        result.teamID.PitchingTriples &&
                        result.teamID.PitchingHomeRuns &&
                        result.teamID.PitchingStrikeouts &&
                        result.teamID.PitchingWalks &&
                        result.teamID.PitchingHitByPitch &&
                        result.teamID.PitchingRuns &&
                        result.teamID.PitchingLineOuts &&
                        result.teamID.PitchingFlyOuts &&
                        result.teamID.PitchingGroundouts &&
                        result.teamID.PitchingPopOuts
                )
            )
            .then(teamStats => res.json(teamStats))
            .catch(err => res.status(422).json(err));
    }
};