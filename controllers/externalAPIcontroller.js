import axios from "axios";

export default {
    getData: () =>
    axios({
        "method": "GET",
        "URL": "https://api.sportsdata.io/v3/mlb/scores/json/TeamGameStatsByDate/2020-Aug-17?key=49f703424dd5440ab0bf8de43e4f7c40",

    })
}

// componentDidMount() {
//     const apiURL = "https://api.sportsdata.io/v3/mlb/scores/json/TeamGameStatsByDate/2020-Aug-17?key=49f703424dd5440ab0bf8de43e4f7c40";
//     fetch(apiURL)
//       .then(response => response.json())
//       .then(function(data) {
//         for (let i=0; i<data.length; i++) {
//           console.log("This team is the " + data[i].Name);
//         }
//   })
// }