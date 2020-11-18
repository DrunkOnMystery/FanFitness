import React from "react";
import "./style.css"
import { Container, Cell } from "../../components/Grid";

function ViewGames() {
    return (
        <Container>
            <div id="vgContainer">
                <Cell>
                    <div class="grid-y medium-grid-frame">
                        <div class="cell shrink header medium-cell-block-container">
                            <div class="grid-x grid-padding-x">
                                <div class="cell medium-2">
                                    {/* A medium 2 cell */}
                                </div>
                                <div class="cell medium-8 medium-cell-block">
                                    <h2>Select The Games For Your Workouts</h2>
                                </div>
                                <div class="cell medium-2">
                                    {/* A medium 2 cell */}
                                </div>
                            </div>
                        </div>
                        <div class="cell medium-auto medium-cell-block-container">
                            <div class="grid-x grid-padding-x">
                                <div class="cell medium-4 medium-cell-block-y">
                                    <h5>Yesterday's Stats</h5>
                                    <p>Clickable links for the stats from yesterday's games will display in this column</p>

                                    <p>Might fuck around and make the exercise numbers display here automatically as well. Maybe with default exercise values?</p>

                                </div>
                                <div class="cell medium-8 medium-cell-block-y">
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