import React, { useEffect, useState } from "react";
import "./style.css";
// import GameData from "../../models/gamedata";
import Dropdown from "../../components/Dropdown";
import { Container, Cell } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
// import DeleteBtn from "../../components/DeleteBtn";
// import { List, ListItem } from "../../components/List";
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
        console.log(exercises);
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.exercise && formObject.defaultCount) {
            API.saveExercise({
                name: formObject.exercise,
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
                    <div className="cell medium-6">
                        <h5 id="workoutPageTitle">Workout Builder Page</h5>
                    </div>
                </Cell>
                <Cell>
                    <div className="grid-y medium-grid-frame">
                        <div className="cell shrink header medium-cell-block-container">
                            <div className="grid-x grid-padding-x">
                                <div className="cell medium-3">
                                </div>
                                <div className="cell medium-6">
                                    <form id="inputForm">
                                        <Input
                                            onChange={handleInputChange}
                                            name="exercise"
                                            placeholder="Exercise Name (Required)"
                                        // value={formObject.name}
                                        />
                                        <Input
                                            onChange={handleInputChange}
                                            name="defaultCount"
                                            placeholder="Reps (Required)"
                                        // value={formObject.defaultCount}
                                        />
                                        <TextArea

                                            onChange={handleInputChange}
                                            name="description"
                                            placeholder="Describe the exercise (Optional)"
                                        // value={formObject.description}
                                        />
                                        <FormBtn

                                            disabled={!(formObject.exercise && formObject.defaultCount)}
                                            onClick={handleFormSubmit}>
                                            Submit Exercise
                                        </FormBtn>
                                    </form>
                                </div>
                                <div className="cell medium-3">
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="cell medium-auto medium-cell-block-container">
                            <div className="grid-x grid-padding-x">
                                <div id="yourWorkouts" className="cell medium-4 medium-cell-block-y">
                                    <h5>Your Workouts</h5>
                                    <p>Add exercises to create your own workout here.</p>
                                    {exercises.length ? (
                                        <ul className="vertical menu accordion-menu" data-accordion-menu>
                                            <li>
                                                <a href="#">Select Exercise #1</a>
                                                <ul className="menu vertical nested">
                                                    {exercises.map(exercise => {
                                                        return (
                                                            <li key={exercise._name}>
                                                                <a href={"/exercises/ + exercise._name"}>
                                                                    <strong>{exercise.name}
                                                                    </strong>
                                                                </a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Select Exercise #2</a>
                                                <ul className="menu vertical nested">
                                                    {exercises.map(exercise => {
                                                        return (
                                                            <li key={exercise._name}>
                                                                <a href={"/exercises/ + exercise._name"}>
                                                                    <strong>{exercise.name}
                                                                    </strong>
                                                                </a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Select Exercise #3</a>
                                                <ul className="menu vertical nested">
                                                    {exercises.map(exercise => {
                                                        return (
                                                            <li key={exercise._name}>
                                                                <a href={"/exercises/ + exercise._name"}>
                                                                    <strong>{exercise.name}
                                                                    </strong>
                                                                </a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Select Exercise #4</a>
                                                <ul className="menu vertical nested">
                                                    {exercises.map(exercise => {
                                                        return (
                                                            <li key={exercise._name}>
                                                                <a href={"/exercises/ + exercise._name"}>
                                                                    <strong>{exercise.name}
                                                                    </strong>
                                                                </a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Select Exercise #5</a>
                                                <ul className="menu vertical nested">
                                                    {exercises.map(exercise => {
                                                        return (
                                                            <li key={exercise._name}>
                                                                <a href={"/exercises/ + exercise._name"}>
                                                                    <strong>{exercise.name}
                                                                    </strong>
                                                                </a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Select Exercise #6</a>
                                                <ul className="menu vertical nested">
                                                    {exercises.map(exercise => {
                                                        return (
                                                            <li key={exercise._name}>
                                                                <a href={"/exercises/ + exercise._name"}>
                                                                    <strong>{exercise.name}
                                                                    </strong>
                                                                </a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                        </ul>
                                    ) : (
                                        <h3> No Results To Display </h3>
                                    )}

                                    {/* {exercises.length ? (
                                            <ul className="dropdown" data-dropdown-menu>
                                                <li>
                                                    <a href="#">Select Your Exercise</a>
                                                    <ul className="menu">
                                                        {exercises.map(exercise => {
                                                        return (
                                                        <li key={exercise._name}>
                                                        <a href={"/exercises/ + exercise._name"}>
                                                            <strong> {exercise.name}
                                                            </strong>
                                                        </a>
                                                    </li>
                                                )
                                            })}
                                            </ul>
                                    </ul>
                                        ) : (
                                            <h3> No results </h3>
                                        )} */}
                                    {/* <List>
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
                                    </List> */}
                                </div>
                                <div className="cell medium-4 medium-cell-block-y"></div>
                                <div id="recentWorkouts" className="cell medium-4 medium-cell-block-y">
                                    <h5>Workout Requirements For Your Most Recent Game(gameID here)</h5>
                                    <p className="exercise" id="runs">Runs* runsExercise = ""</p>
                                    {/* <p className="exercise" id="Exercise2">Singles multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise3">Doubles multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise4">Triples multiplied by Reps for your exercise choice</p> */}
                                    <p className="exercise" id="homeruns">Homeruns * homerunsExercise = ""</p>
                                    <p className="exercise" id="strikeouts">Strikeouts * strikeoutsExercise = ""</p>
                                    {/* <p className="exercise" id="Exercise7">Popouts multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise8">Flyouts multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise9">Groundouts multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise10">Steals multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise11">Walks multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise12">Doubleplays multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise13">Tripleplays multiplied by Reps for your exercise choice</p> */}
                                    {/* <p className="exercise" id="Exercise14">Opp Singles multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise15">Opp Doubles multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise16">Opp Triples multiplied by Reps for your exercise choice</p> */}
                                    <p className="exercise" id="oppHomeruns">Opp Homeruns * oppHomerunsExercise = ""</p>
                                    {/* <p className="exercise" id="Exercise18">Opp Walks multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise19">Opp Hit By Pitch multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise20">Opp Steals multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise21">Opp Flyouts multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise22">Opp Groundouts multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise23">Opp Lineouts multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise24">Opp Popouts multiplied by Reps for your exercise choice</p> */}
                                    <p className="exercise" id="oppStrikeouts">Opp Strikeouts * oppStrikeoutsExercise = ""</p>
                                    {/* <p className="exercise" id="Exercise26">Opp Doubleplays multiplied by Reps for your exercise choice</p>
                                    <p className="exercise" id="Exercise27">Opp Tripleplays multiplied by Reps for your exercise choice</p> */}
                                    <p className="exercise" id="oppRuns">Opp Runs * oppRunsExercise = ""</p>
                                    <h4>Your total workout = </h4>
                                    <p>"" reps of Exercise 1</p>
                                    <p>"" reps of Exercise 2</p>
                                    <p>"" reps of Exercise 3</p>
                                    <p>"" reps of Exercise 4</p>
                                    <p>"" reps of Exercise 5</p>
                                    <p>"" reps of Exercise 6</p>
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