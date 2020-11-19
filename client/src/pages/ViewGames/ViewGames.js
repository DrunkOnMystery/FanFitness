import React from "react";
import "./style.css"
import { Container, Cell } from "../../components/Grid";

function ViewGames() {
    
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
                                    <p>Clickable links for the stats from that day's games will display in this column</p>

                                    <p>Might mess around and make the exercise numbers display here automatically as well. Maybe with default exercise values?</p>

                                </div>
                                <div className="cell medium-4 medium-cell-block-y"></div>
                                <div id="right-column" className="cell medium-4 medium-cell-block-y">
                                    <h5>Workout Display For The Game You Clicked</h5>
                                    <p id="Game1">Games will appear here</p>
                                    <p id="Game2">Games will appear here</p>
                                    <p id="Game3">Games will appear here</p>
                                    <p id="Game4">Games will appear here</p>
                                    <p id="Game5">Games will appear here</p>
                                    <p id="Game6">Games will appear here</p>
                                    <p id="Game7">Games will appear here</p>
                                    <p id="Game8">Games will appear here</p>
                                    <p id="Game9">Games will appear here</p>
                                    <p id="Game10">Games will appear here</p>
                                    <p id="Game11">Games will appear here</p>
                                    <p id="Game12">Games will appear here</p>
                                    <p id="Game13">Games will appear here</p>
                                    <p id="Game14">Games will appear here</p>
                                    <p id="Game15">Games will appear here</p>

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