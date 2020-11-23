import React, { useEffect, useState } from "react";
import "./style.css";
import { Container, Cell } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";

//function for the WorkoutBuilder page
function WorkoutBuilder() {

    //Set constants for the state effect
    const [exercises, setExercises] = useState([])
    const [formObject, setFormObject] = useState({})

    //set useEffect
    useEffect(() => {
        loadExercises();
    }, [])

    const userExercises = [];

    function loadExercises() {
        API.getExercises()
            .then(res =>
                userExercises.push(res.data));
        API.getExercises()
                .then(res =>
                setExercises(res.data)
            )
            .catch(err => console.log(err));
        console.log(userExercises);
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
    };

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
                                        />
                                        <Input
                                            onChange={handleInputChange}
                                            name="defaultCount"
                                            placeholder="Reps (Required)"
                                        />
                                        <TextArea

                                            onChange={handleInputChange}
                                            name="description"
                                            placeholder="Describe the exercise (Optional)"
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
                                                <p>Current Exercises In The Database:</p>
                                                <ul className="menu simple">
                                                    {exercises.map(exercise => {
                                                        return (
                                                            <li key={exercise._name}>
                                                                <h5>
                                                                {exercise.name}
                                                                    
                                                                    <br/>
                                                                </h5>
                                                            </li>
                                                        )})}
                                                </ul>
                                            </li>
                                        </ul>        
                                    ) : (
                                        <h5> NOTHING TO DISPLAY</h5>
                                    )}
                                    <h5>Your current selections are:</h5>
                                    <div id="yourExercises">
                                    <h5><strong>Exercise 1: Squats</strong></h5>
                                    <h5><strong>Exercise 2: Jumping Jacks</strong></h5>
                                    <h5><strong>Exercise 3: Pushups</strong></h5>
                                    </div>                
                                </div>
                                <div className="cell medium-4 medium-cell-block-y"></div>
                                <div id="recentWorkouts" className="cell medium-4 medium-cell-block-y">

                                    <h4>Workout Requirements For The Chosen Game:</h4>
                                        <p>Team: Atlanta Braves</p>
                                        <p>Game Date: SEP 24, 2020</p>
                                        <p>Team Runs: 2 = -10 squats </p>
                                        <p>Team Homeruns: 0 = 0 jumping jacks</p>
                                        <p>Opp. Strikeouts: 6 = -15 pushups</p>
                                        <p>Opp. Homeruns: 30 jumping jacks </p>
                                        <p>Opp. Runs: 4 = 40 squats</p>
                                        <p>Strikeouts: 13 = 65 pushups</p>

                                        <h6>Your workout for the Atlanta Braves game on SEP 24, 2020 is: </h6>
                                        <p>30 squats, 30 jumping jacks, and 50 pushups.</p>

                                </div>
                                <div id="exerciseDisplay"></div>
                            </div>
                        </div>
                    </div>
                </Cell>

            </div>
        </Container>
    )
}

export default WorkoutBuilder;