import React from "react";
import "./NavStyle.css";

//function for the Nav Bar
function Nav() {
  return (
<div className="top-bar show-for-medium" id="responsive_menu">
    <div className="top-bar-left">
    <a className="links" href="/"> <p id="headerText">FAN FITNESS</p></a>
    </div>
    <div className="top-bar-right">
        <ul className="medium-horizontal menu">
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
