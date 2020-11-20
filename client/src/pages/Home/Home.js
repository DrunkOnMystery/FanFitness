import React from "react";
import "./style.css"
import Callout from "../../components/Callout";
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
                                    <h5>The world's first baseball-results themed workout app.</h5>
                                    
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
                    <br/>
                    <br/>
                    <Cell>
                    <div className="cell shrink header medium-cell-block-container">
                            <Callout>
                            <p>The goal of this fitness program is to tie supporting your team with getting in shape.</p>
                            </Callout>
                        </div>
                    </Cell>
                    <Cell>
                    <div className="cell shrink header medium-cell-block-container">
                            <Callout className="right">
                            <p>The way it works is:
                                You search for a game by the date it was played.
                                You click on your team.
                                </p>
                            </Callout> 
                            </div> 
                            </Cell> 
                            <Cell>   
                                <div>    
                            <Callout>    
                                <p>From there, the stats of your team and their opponent will be shown to you, along with multipliers for a workout.
                                When your team plays well, you'll work out less. When their opponents play well, you'll work out more.</p>
                            </Callout>
                            </div> 
                            </Cell> 
                            <Cell>
                                <div>
                            <Callout>  
                                <p>You can create your own workouts, or add new exercises for your workouts to our database.
                                So get ready to get in shape and cheer on your team!
                            </p>
                            </Callout>
                            </div>
                    </Cell>

                    
                </div>
        </Container>
    )
}

export default Home;