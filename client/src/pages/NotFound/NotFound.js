import React from "react";
import "./style.css";
import { Container, Cell } from "../../components/Grid";


//This is the function for the "Not Found" page
function NotFound() {
    return (
        <Container>
            <Cell>
            <h3>404 DATA NOT FOUND</h3>
            </Cell>
        </Container>
    )
}

export default NotFound;