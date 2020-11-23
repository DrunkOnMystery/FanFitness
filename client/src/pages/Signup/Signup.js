import React from "react";
import "./style.css"
import { Container } from "../../components/Grid";


//Function to return the signup page
function Signup() {
    return (
        <Container>
                <div id="signupContainer">
                <div className="outside cell medium-3 medium-cell-block center">
                </div>
                <div id="signup-center" className="cell medium-6 medium-cell-block center">
                    <form>
                        <div className="sign-up-form">
                            <h4 className="text-center">Signup</h4>
                            <label for="sign-up-form-username">Username</label>
                            <input type="text" className="sign-up-form-username" id="sign-up-form-username" />
                            <label for="sign-up-form-password">Password</label>
                            <input type="text" className="sign-up-form-password" id="sign-up-form-password" />
                            <button type="submit" className="sign-up-form-button">Create Account</button>
                        </div>
                    </form>
                </div>
                <div className="cell medium-3 medium-cell-block center">
                </div>
                </div>
        </Container>
    )
}

export default Signup;