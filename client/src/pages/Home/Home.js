import React from "react";
import "./style.css"
import { Container, Cell } from "../../components/Grid";

function Home() {
    return (
        <Container>
            <Cell>
                <div class="cell shrink header medium-cell-block-container">
                    <div class="grid-x grid-padding-x">
                        <div class="cell medium-2">
                            {/* A medium 2 cell */}
                        </div>
                        <div class="cell medium-8 medium-cell-block center">
                            <h3>Welcome to Fan Fitness, the world's first baseball-results themed workout app.</h3>
                        </div>
                        <div class="cell medium-2">
                            {/* A medium 2 cell */}
                        </div>
                        
                    </div>
                    <div class="grid-x grid-padding-x">
                    <div class="cell medium-12 medium-cell-block center">Use the navigation bar at the top of the page to move around the site.</div>
                    </div>
                </div>
            </Cell>
        </Container>
    )
}

export default Home;