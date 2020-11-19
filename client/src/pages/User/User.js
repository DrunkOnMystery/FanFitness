import React from "react";
import { Cell, Container } from "../../components/Grid";
import "./style.css";
const username = "Ben";

function User() {
    return (
        <Container>
            <div id="userContainer">
                <Cell>
                    <div className="grid-y medium-grid-frame">
                        <div className="cell shrink header medium-cell-block-container">
                            <div className="grid-x grid-padding-x">
                                <div className="cell medium-2">
                                    {/* A medium 2 cell */}
                                </div>
                                <div className="cell medium-8 medium-cell-block">
                                    <h2>Welcome {username}!</h2>
                                </div>
                                <div className="cell medium-2">
                                    {/* A medium 2 cell */}
                                </div>
                            </div>
                        </div>
                        <div className="cell medium-auto medium-cell-block-container">
                            <div className="grid-x grid-padding-x">
                                <div className="cell medium-4 medium-cell-block-y">
                                    <h5>Your Previous Workouts</h5>
                                    <p>Clickable links for your previous workouts</p>

                                    <p></p>

                                </div>
                                <div className="cell medium-8 medium-cell-block-y">
                                    <h5>Workout Display For The Game You Clicked</h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </Cell>
            </div>
        </Container>
    )
}

export default User;