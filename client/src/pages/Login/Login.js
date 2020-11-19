import React from "react";
import "./style.css"
import { Container } from "../../components/Grid";

function Login() {
    return (
        <Container>
                <div id="loginContainer">
                <div className="outside cell medium-3 medium-cell-block center">
                </div>
                <div id="login-center" className="cell medium-6 medium-cell-block center">
                    <form>
                        <div className="sign-in-form">
                            <h4 className="text-center">Login</h4>
                            <label for="sign-in-form-username">Username</label>
                            <input type="text" className="sign-in-form-username" id="sign-in-form-username"></input>
                            <label for="sign-in-form-password">Password</label>
                            <input type="text" className="sign-in-form-password" id="sign-in-form-password"></input>
                            <button type="submit" className="sign-in-form-button">Sign In</button>
                            <br/>
                            <br/>
                            <p><a href="/signup">No Account? Click Here To Sign Up!</a></p>
                        </div>
                    </form>
                </div>
                <div className="cell medium-3 medium-cell-block center">
                </div>
                </div>
        </Container>
    )
}

export default Login;