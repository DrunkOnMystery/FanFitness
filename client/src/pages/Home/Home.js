import React from "react";
import "./style.css"
import { Container, Cell } from "../../components/Grid";

function Home() {
    return (
        <Container >
            <div id="home-child">
                <div id="homeContainer">
                    <Cell>
                        <div class="cell shrink header medium-cell-block-container">
                            <div class="grid-x grid-padding-x">
                                <div class="cell medium-2">
                                    {/* A medium 2 cell */}
                                </div>
                                <div id="welcome" class="cell medium-8 medium-cell-block center">
                                    <h3>Welcome to Fan Fitness</h3> 
                                    <h5>the world's first baseball-results themed workout app.</h5>
                                </div>
                                <div class="cell medium-2">
                                    {/* A medium 2 cell */}
                                </div>

                            </div>
                            <div class="grid-x grid-padding-x">
                                <div class="cell medium-12 medium-cell-block center">
                                    <p>Use the navigation bar at the top of the page to move around the site.</p>
                                    </div>
                            </div>
                        </div>
                    </Cell>
                </div>
            </div>
        </Container>
    )
}

export default Home;