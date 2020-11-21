import React, { useEffect, useState } from "react";
import "./style.css"
import API from "../../utils/API"
import { Container, Cell } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
// import DeleteBtn from "../../components/DeleteBtn";

function ViewGames() {

    var teamGames = [];

    const apiURL = "https://api.sportsdata.io/v3/mlb/scores/json/TeamGameStatsByDate/2020-Aug-17?key=49f703424dd5440ab0bf8de43e4f7c40";
    fetch(apiURL)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                teamGames.push({
                    date: data[i].Day,
                    name: data[i].Name,
                    runs: data[i].Runs,
                    homeruns: data[i].HomeRuns,
                    OppStrikeouts: data[i].PitchingStrikeouts,
                    OppRuns: data[i].PitchingRuns,
                    OppHomeRuns: data[i].PitchingHomeRuns,
                    strikeouts: data[i].Strikeouts
                })
            }
            gameList();

        });

    function gameList() {
        return (teamGames.map((game) =>
            <ul>
                <li key={game.name}>
                    {game.name}
                </li>
            </ul>
        )
        );
    }

    //           function GamesList(props) {
    //                 const teamGames = props.teamGames;
    //                 const gameDisplays = teamGames.map((game) => 
    //                 <li key={game.name}>
    //                     {game.name}
    //                     </li>
    //             );
    //             return (
    //                 <ul>{gameDisplays}</ul>
    //             );
    // }

    const [games, setGames] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadGames()
    }, [])

    function loadGames() {
        API.getGames()
            .then(res =>
                setGames(res.data)
            )
            .catch(err => console.log(err));
        console.log(games);
    }

    function handleInputChange(event) {
        const { date, value } = event.target;
        setFormObject({ ...formObject, [date]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.date) {
            API.saveGame({
                date: formObject.date,
                name: formObject.name,
                runs: formObject.runs,
                homeruns: formObject.homeruns,
                OppStrikeouts: formObject.OppStrikeouts,
                OppRuns: formObject.OppRuns,
                OppHomeRuns: formObject.OppHomeRuns,
                strikeouts: formObject.strikeouts
            })
                .then(() => setFormObject({
                    date: "",
                    name: "",
                    runs: "",
                    homeruns: "",
                    OppStrikeouts: "",
                    OppRuns: "",
                    OppHomeRuns: "",
                    strikeouts: "",
                }))
                .then(() => loadGames())
                .catch(err => console.log(err))
        }
    };

    return (
        <Container>
            <div id="vgContainer">
                <Cell>
                    <div className="grid-y medium-grid-frame">
                        <div className="cell shrink header medium-cell-block-container">
                            <div className="grid-x grid-padding-x">
                                <div className="cell medium-2">
                                    {/* A medium 2 cell */}
                                </div>
                                <div id="vgTitle" className="cell medium-8 medium-cell-block">
                                    <h2>Select The Games For Your Workouts</h2>
                                </div>
                                <div className="cell medium-2">
                                    {/* A medium 2 cell */}
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="cell medium-auto medium-cell-block-container">
                            <div className="grid-x grid-padding-x">
                                <div id="left-column" className="cell medium-4 medium-cell-block-y">
                                    <h5>Search Team Stats By Date</h5>
                                    <form>
                                        <Input
                                            onChange={handleInputChange}
                                            date="Search Date"
                                            placeholder="XXXX-MON-XX (required)"
                                        />
                                        <FormBtn
                                            // disabled={!(formObject.date)}
                                            onClick={handleFormSubmit}>
                                            Search Date
                                        </FormBtn>
                                    </form>
                                    <br />
                                    <br />
                                    <br />
                                    <p>Clickable links for the stats from that day's games will display in this column</p>

                                    <p>The goal is to make each team's name a clickable link, which when clicked, would cause the stats for that team to appear on the opposite column.</p>

                                    <Cell>
                                        {teamGames.length ? (
                                            <List>
                                                {teamGames.map(games => {
                                                    return (
                                                        <ListItem key={games._date}>
                                                            <strong> {games.name}
                                                            </strong>

                                                        </ListItem>
                                                    );
                                                })}
                                            </List>
                                        ) : (
                                                <h5>No Results to Display</h5>
                                            )}
                                    </Cell>


                                </div>
                                <div className="cell medium-4 medium-cell-block-y"></div>
                                <div id="right-column" className="cell medium-4 medium-cell-block-y">
                                    <h5>Workout Display For The Game You Clicked</h5>
                                    <h5>

                                    </h5>

                                    <p id="Game1">Games will appear here</p>


                                </div>
                            </div>
                        </div>
                    </div>
                </Cell>
            </div>
        </Container>
    )
}

export default ViewGames;