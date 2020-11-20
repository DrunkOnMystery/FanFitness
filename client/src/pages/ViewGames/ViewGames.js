import React, { useEffect, useState } from "react";
import "./style.css"
import API from "../../utils/API"
import { Container, Cell } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
// import { List, ListItem } from "../../components/List";
// import DeleteBtn from "../../components/DeleteBtn";


function ViewGames() {

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

    }
    
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
                        <br/>
                        <br/>
                        <div className="cell medium-auto medium-cell-block-container">
                            <div className="grid-x grid-padding-x">
                                <div id="left-column" className="cell medium-4 medium-cell-block-y">
                                    <h5>Search Team Stats By Date</h5>
                                    <form>
                                        <Input
                                        onChange = {() => {}}
                                        date="Search Date"
                                        placeholder="XXXX-MON-XX (required)"
                                        />
                                        <FormBtn
                                        disabled={!(formObject.date)}
                                        onClick={() => {}}>
                                        Search Date
                                        </FormBtn>   
                                        </form>
                                        <br/>
                                        <br/>
                                        <br/>
                                    <p>Clickable links for the stats from that day's games will display in this column</p>

                                    <p>The goal is to make each team's name a clickable link, which when clicked, would cause the stats for that team to appear on the opposite column.</p>

                                </div>
                                <div className="cell medium-4 medium-cell-block-y"></div>
                                <div id="right-column" className="cell medium-4 medium-cell-block-y">
                                    <h5>Workout Display For The Game You Clicked</h5>
                                    {/* {games.length ? (
                                    <List>
                                        {games.map(game => {
                                            return(
                                                <ListItem key={game._id}>
                                                    <a href={"/games/" + game._id}>
                                                        <strong>
                                                            {formObject.date}
                                                        </strong>
                                                    </a>
                                                    <DeleteBtn onClick={() => {}} />
                                                </ListItem>
                                            )
                                        })}
                                    </List>
                                    ) : (
                                        <h3>No Results</h3>
                                    )} */}
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