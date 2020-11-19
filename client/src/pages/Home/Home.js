import React from "react";
import "./style.css"
import { Container, Cell } from "../../components/Grid";

function Home() {
    return (
        <Container>
            <div id="homeContainer">
                    <Cell>
                        <div className="cell shrink header medium-cell-block-container">
                            <div className="grid-x grid-padding-x">
                                <div className="cell medium-2">
                                    {/* A medium 2 cell */}
                                </div>
                                <div id="welcome" className="cell medium-6 medium-cell-block center">
                                    <h3>Welcome to Fan Fitness</h3> 
                                    <h5>the world's first baseball-results themed workout app.</h5>
                                    <p>Use the navigation bar at the top of the page to move around the site.</p>
                                </div>
                                <div className="cell medium-2">
                                    {/* A medium 2 cell */}
                                </div>

                            </div>
                            <div className="grid-x grid-padding-x">
                                <div id="pageInstructions" className="cell medium-12 medium-cell-block center">
                                    
                                    </div>
                            </div>
                        </div>
                    </Cell>
                </div>
        </Container>
    )
}

export default Home;