import React, { useEffect, useState } from "react";
import "./style.css";
// import GameData from "../../models/gamedata";
import { Container, Cell } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
// import DeleteBtn from "../../components/DeleteBtn";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
// import Exercise from "../../models/Exercise";

function WorkoutBuilder() {

    const [exercises, setExercises] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadExercises()
    }, [])

    function loadExercises() {
        API.getExercises()
            .then(res =>
                setExercises(res.data)
            )
            .catch(err => console.log(err));
    };

    // function deleteExercise() {
    //     API.deleteExercise()
    //         .then(res => loadExercises())
    //         .catch(err => console.log(err));
    // };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.defaultCount) {
            API.saveExercise({
                name: formObject.name,
                description: formObject.description,
                defaultCount: formObject.defaultCount
            })
                .then(() => setFormObject({
                    name: "",
                    description: "",
                    defaultCount: ""
                }))
                .then(() => loadExercises())
                .catch(err => console.log(err))
        }
    };

    // let runs = GameData.runs;
    // let homeruns = GameData.homeruns;
    // let strikeouts = Gamedata.strikeouts;
    // let oppRuns = Gamedata.oppRuns;
    // let oppHomeruns = Gamedata.oppHomeruns;
    // let oppStrikeouts = Gamedata.oppStrikeouts;


    // let runsExercise = (runs * 5)
    //  let homerunsExercise = (homeruns * 5)
    // let strikeoutsExercise = (strikeouts * 5)
    // let oppRunsExercise = (oppRuns * 5)
    // let oppHomerunsExercise = (oppHomeruns * 5)
    // let oppStrikeoutsExercise = (oppStrikeouts * 5)


    return (
        <Container>
            <div id="workoutContainer">
                <Cell>
                    <div class="cell medium-6">
                        <h5 id="workoutPageTitle">Workout Builder Page</h5>
                    </div>
                </Cell>
                <Cell>
                    <div class="grid-y medium-grid-frame">
                        <div class="cell shrink header medium-cell-block-container">
                            <div class="grid-x grid-padding-x">
                            <div class="cell medium-3">
                                </div>
                                <div class="cell medium-6">
                                    <form id="inputForm">
                                        <Input
                                            onChange={handleInputChange}
                                            name="exercise"
                                            placeholder="Exercise Name (Required)"
                                            value={formObject.name}
                                        />
                                        <Input
                                            onChange={handleInputChange}
                                            name="defaultCount"
                                            placeholder="Reps (Required)"
                                            value={formObject.defaultCount}
                                        />
                                        <TextArea

                                            onChange={handleInputChange}
                                            name="description"
                                            placeholder="Describe the exercise (Optional)"
                                            value={formObject.description}
                                        />
                                        <FormBtn

                                            disabled={!(formObject.exercise && formObject.defaultCount)}
                                            onClick={handleFormSubmit}>
                                            Submit Exercise
                                        </FormBtn>
                                    </form>
                                </div>
                                <div class="cell medium-3">
                                </div>
                            </div>
                        </div>
                        <div class="cell medium-auto medium-cell-block-container">
                            <div class="grid-x grid-padding-x">
                                <div id="yourWorkouts" class="cell medium-4 medium-cell-block-y">
                                    <h5>Your Workouts</h5>
                                    <p>Add exercises to create your own workout here.</p>

                                    <p>Exercises for your custom workout will display here.</p>
                                    <List>
                                        <ListItem>
                                            User Choice Exercise One.
                                        </ListItem>
                                        <br/>
                                        <ListItem>
                                        User Choice Exercise Two.
                                        </ListItem>
                                        <br/>
                                        <ListItem>
                                        User Choice Exercise Three.
                                        </ListItem>
                                        <br/>
                                        <ListItem>
                                        User Choice Exercise Four.
                                        </ListItem>
                                        <br/>
                                        <ListItem>
                                        User Choice Exercise Five.
                                        </ListItem>
                                        <br/>
                                        <ListItem>
                                        User Choice Exercise Six.
                                        </ListItem>
                                        <br/>
                                    </List>
                                </div>
                                <div class="cell medium-4 medium-cell-block-y"></div>
                                <div id="recentWorkouts" class="cell medium-4 medium-cell-block-y">
                                    <h5>Workout Requirements For Your Most Recent Game(gameID here)</h5>
                                    <p className="exercise" id="runs">Runs<h7> runsExercise</h7></p>
                                    {/* <p className="exercise" id="Exercise2">Singles<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise3">Doubles<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise4">Triples<h7> multiplied by Reps for your exercise choice</h7></p> */}
                                    <p className="exercise" id="homeruns">Homeruns<h7> homerunsExercise</h7></p>
                                    <p className="exercise" id="strikeouts">Strikeouts<h7> strikeoutsExercise</h7></p>
                                    {/* <p className="exercise" id="Exercise7">Popouts<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise8">Flyouts<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise9">Groundouts<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise10">Steals<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise11">Walks<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise12">Doubleplays<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise13">Tripleplays<h7> multiplied by Reps for your exercise choice</h7></p> */}
                                    {/* <p className="exercise" id="Exercise14">Opp Singles<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise15">Opp Doubles<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise16">Opp Triples<h7> multiplied by Reps for your exercise choice</h7></p> */}
                                    <p className="exercise" id="oppHomeruns">Opp Homeruns<h7> oppHomerunsExercise</h7></p>
                                    {/* <p className="exercise" id="Exercise18">Opp Walks<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise19">Opp Hit By Pitch<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise20">Opp Steals<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise21">Opp Flyouts<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise22">Opp Groundouts<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise23">Opp Lineouts<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise24">Opp Popouts<h7> multiplied by Reps for your exercise choice</h7></p> */}
                                    <p className="exercise" id="oppStrikeouts">Opp Strikeouts<h7>oppStrikeoutsExercise</h7></p>
                                    {/* <p className="exercise" id="Exercise26">Opp Doubleplays<h7> multiplied by Reps for your exercise choice</h7></p>
                                    <p className="exercise" id="Exercise27">Opp Tripleplays<h7> multiplied by Reps for your exercise choice</h7></p> */}
                                    <p className="exercise" id="oppRuns">Opp Runs <h7> oppRunsExercise</h7></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </Cell>

                {/* <Cell>
                {exercises.length ? (
                    <List>
                        {exercises.map(exercise => {
                        return (
                            <ListItem key={exercise._id}>
                            <a href={"/exercises/" + exercise._id}>
                                <strong> {exercise.name}
                                </strong>
                            </a>
                            <DeleteBtn onClick={() => deleteExercise(exercise._id)} />
                            </ListItem>
                        );
                        })}
                    </List>
                ) : (
                    <h3>No Results to Display</h3>
                )}
            </Cell> */}
            </div>
        </Container>
    )
}

export default WorkoutBuilder;