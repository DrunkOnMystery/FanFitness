import React from "react";
import "./NavStyle.css";

function Nav() {
  return (
<div class="top-bar show-for-medium" id="responsive_menu">
    <div class="top-bar-left">
        <p id="headerText">FAN FITNESS</p>
    </div>
    <div class="top-bar-right">
        <ul class="medium-horizontal menu">
        <li className="navlink"><a className="links" href="/">Home</a></li>
            <li className="navlink"><a className="links" href="/login">Signup/Login</a></li>
            <li className="navlink"><a className="links" href="/user">User</a></li>
            <li className="navlink"><a className="links" href="/games">View Games</a></li>
            <li className="navlink"><a className="links" href="/workoutbuilder">Workout Builder</a></li>
        </ul>
    </div>

</div>
  )
}

export default Nav;
