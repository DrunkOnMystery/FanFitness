//https://api.sportsdata.io/v3/mlb/scores/json/TeamGameStatsByDate/%7Bdate%7D?key=49f703424dd5440ab0bf8de43e4f7c40
import axios from "axios";

export default {
    getData: () =>
    axios({
        "method": "GET",
        "url": "https://api.sportsdata.io/v3/mlb/scores/json/TeamGameStatsByDate/%7Bdate%7D?key=49f703424dd5440ab0bf8de43e4f7c40"

    })
}