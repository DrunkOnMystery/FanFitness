import React, { useEffect, useState } from "react";
import "./style.css";
import { Container, Cell } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
// import DeleteBtn from "../../components/DeleteBtn";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";

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
                                <div class="cell medium-12">
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
                                            Exercise One.
                                    </ListItem>
                                        <ListItem>
                                            Exercise Two.
                                    </ListItem>
                                        <ListItem>
                                            Exercise Three.
                                    </ListItem>
                                        <ListItem>
                                            Exercise Four.
                                    </ListItem>
                                    </List>
                                </div>
                                <div class="cell medium-4 medium-cell-block-y"></div>
                                <div id="recentWorkouts" class="cell medium-4 medium-cell-block-y">
                                    <h5>Workout Requirements For Your Most Recent Game</h5>
                                    <p id="Game1">Games workouts will appear here</p>
                                    <p id="Game2">Games workouts will appear here</p>
                                    <p id="Game3">Games workouts will appear here</p>
                                    <p id="Game4">Games workouts will appear here</p>
                                    <p id="Game5">Games workouts will appear here</p>
                                    <p id="Game6">Games workouts will appear here</p>
                                    <p id="Game7">Games workouts will appear here</p>
                                    <p id="Game8">Games workouts will appear here</p>
                                    <p id="Game9">Games workouts will appear here</p>
                                    <p id="Game10">Games workouts will appear here</p>
                                    <p id="Game11">Games workouts will appear here</p>
                                    <p id="Game12">Games workouts will appear here</p>
                                    <p id="Game13">Games workouts will appear here</p>
                                    <p id="Game14">Games workouts will appear here</p>
                                    <p id="Game15">Games workouts will appear here</p>

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