import React, { useEffect, useState } from "react";
import "./style.css";
import { Container, Cell } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
// import DeleteBtn from "../../components/DeleteBtn";
// import { List, ListItem } from "../../components/List";
import API from "../../utils/API";

function WorkoutBuilder() {

    const [exercises, setExercises] = useState([])
    const [games, setGames] = useState("game");
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadExercises();
        loadGames();
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
                .then(res => loadExercises())
                .catch(err => console.log(err))
        }
        loadExercises();
        loadGames();
    };

    function loadGames() {
        API.getGame("5fb9a76677ac065a0c79a844")
            .then(res =>
                setGames(res.data)
            )
            .catch(err => console.log(err));
        console.log(games);}


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
                                                <p>Select Your Exercise:</p>
                                                <ul className="menu simple">
                                                    {exercises.map(exercise => {
                                                        return (
                                                            <li key={exercise._name}>
                                                                <h5>
                                                                <a href={"/exercises/ + exercise._name"}>
                                                                    <br/>
                                                                    <strong>{exercise.name}
                                                                    </strong>
                                                                    <br/>
                                                                </a>
                                                                </h5>
                                                            </li>
                                                        )})}
                                                </ul>
                                            </li>
                                        </ul>        
                                    ) : (
                                        <h5> NOTHING TO DISPLAY</h5>
                                    )}
                                                        
                                </div>
                                <div className="cell medium-4 medium-cell-block-y"></div>
                                <div id="recentWorkouts" className="cell medium-4 medium-cell-block-y">

                                    <h5>Workout Requirements For Your Most Recent Game:</h5>
                                    {exercises.length ? (
                                        <ul className="vertical menu accordion-menu" data-accordion-menu>
                                            <li>
                                                <p>Select Your Exercise:</p>
                                                <ul className="menu simple">
                                                    {exercises.map(exercise => {
                                                        return (
                                                            <li key={exercise._name}>
                                                                <a href={"/exercises/ + exercise._name"}>
                                                                    <br/>
                                                                    <strong>{exercise.name}
                                                                    </strong>
                                                                    <br/>
                                                                </a>
                                                            </li>
                                                        )})}
                                                </ul>
                                            </li>
                                        </ul>        
                                    ) : (
                                        <h5> NOTHING TO DISPLAY</h5>
                                    )}

                                    <p className="exercise" id="runs">Runs* runsExercise = ""</p>
                                    <p className="exercise" id="homeruns">Homeruns * homerunsExercise = ""</p>
                                    <p className="exercise" id="strikeouts">Strikeouts * strikeoutsExercise = ""</p>
                                    <p className="exercise" id="oppHomeruns">Opp Homeruns * oppHomerunsExercise = ""</p>
                                    <p className="exercise" id="oppStrikeouts">Opp Strikeouts * oppStrikeoutsExercise = ""</p>
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

            </div>
        </Container>
    )
}

export default WorkoutBuilder;