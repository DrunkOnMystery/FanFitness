import React from "react";
import { Container, Cell } from "../Grid";
import "./style.css";

function Body_ViewGames() {
    return (
        <Container>
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
                                <p>Games will appear here</p>
                                <p>Games will appear here</p>
                                <p>Games will appear here</p>
                                <p>Games will appear here</p>
                                <p>Games will appear here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Cell>
        </Container>
    )
}

export default Body_ViewGames;