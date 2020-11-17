import React from "react";
import { Cell, Container } from "../../components/Grid";
import "./style.css";
const username = "Ben";

function User() {
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
                                <h2>Welcome {username}!</h2>
                            </div>
                            <div class="cell medium-2">
                                {/* A medium 2 cell */}
                        </div>
                        </div>
                    </div>
                    <div class="cell medium-auto medium-cell-block-container">
                        <div class="grid-x grid-padding-x">
                            <div class="cell medium-4 medium-cell-block-y">
                                <h5>Your Previous Workouts</h5>
                                <p>Clickable links for your previous workouts</p>

                                <p></p>

                            </div>
                            <div class="cell medium-8 medium-cell-block-y">
                                <h5>Workout Display For The Game You Clicked</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </Cell>
        </Container>
    )
}

export default User;