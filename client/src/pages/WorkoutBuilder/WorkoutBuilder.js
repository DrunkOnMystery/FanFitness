import React, { useEffect, useState } from "react";
import "./style.css";
import { Container, Cell } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
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

    return (
        <Container>
            <Cell>
            <h5>Workout Builder Page</h5>
            </Cell>
            <Cell>
                <form>
                    <Input
                    onChange={() => {}}
                    name = "exercise"
                    placeholder="Exercise Name (Required)"
                    />
                    <Input
                    onChange={() => {}}
                    name = "defaultCount"
                    placeholder="How many of this exercise should you do? (Required)"
                    />
                    <TextArea
                    onChange={() => {}}
                    name = "description"
                    placeholder="Describe the exercise (Optional)"
                    />
                    <FormBtn
                    disabled={!(formObject.exercise && formObject.defaultCount)}
                    onClick={() => {}}>
                        Submit Exercise
                    </FormBtn>
                </form>
            </Cell>
            <Cell>
                This is a placeholder for now.
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
                            <DeleteBtn onClick={() => {}} />
                            </ListItem>
                        );
                        })}
                    </List>
                ) : (
                    <h3>No Results to Display</h3>
                )}
            </Cell> */}
        </Container>
    )
}

export default WorkoutBuilder;