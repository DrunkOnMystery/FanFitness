import React from "react";
import "./style.css"
import Panel from "../../components/Panel";
import Panel2 from "../../components/Panel2";
import { Container, Cell } from "../../components/Grid";

//Function for the creating the primary home page, using Panel components and a background image
function Home() {
    return (
        <Container>
            <div id="homeContainer">
                <Cell>
                    <div className="cell shrink header medium-cell-block-container">
                        <div className="grid-x grid-padding-x">
                            <div className="cell medium-2">

                            </div>
                            <div id="welcome" className="cell medium-6 medium-cell-block center">
                                <h3>Welcome to Fan Fitness</h3>
                                <h5>The world's first baseball-results themed workout app.</h5>

                            </div>
                            <div className="cell medium-2">

                            </div>

                        </div>
                        <div className="grid-x grid-padding-x">
                            <div id="pageInstructions" className="cell medium-12 medium-cell-block center">

                            </div>
                        </div>
                    </div>
                </Cell>
                <br />
                <br />
                <Cell>
                    <div className="cell shrink header medium-cell-block-container">
                        <Panel className="panel">
                            <p>The goal of this fitness program is to tie supporting your team with getting in shape.</p>
                        </Panel>
                    </div>
                </Cell>
                <Cell>
                    <div className="cell shrink header medium-cell-block-container">
                        <Panel2 className="panel2">
                            <p>The way it works is:
                            You search for a game by the date it was played.
                            You click on your team.
                                </p>
                        </Panel2>
                    </div>
                </Cell>
                <Cell>
                    <div>
                        <Panel className="panel">
                            <p>From there, the stats of your team and their opponent will be shown to you, along with multipliers for a workout.</p>
                            </Panel>
                            <Panel2>
                            <p>When your team plays well, you'll work out less. When their opponents play well, you'll work out more.</p>
                        </Panel2>
                    </div>
                </Cell>
                <Cell>
                    <div>
                        <Panel className="panel2">
                            <p>You can create your own workouts, or add new exercises for your workouts to our database.</p>
                            </Panel>
                            <Panel2 className="panel">
                            <p>So get ready to get in shape and cheer on your team!
                            </p>
                        </Panel2>
                    </div>
                </Cell>


            </div>
        </Container>
    )
}

export default Home;