import React from "react";
import "./NavStyle.css";

function Nav() {
  return (
    <div className="Nav">
      <nav className="top-bar" data-topbar role="navigation">
      <a href ="/"><h1 id="headerText">FAN FITNESS</h1></a>
        <section className="top-bar-section">
          <ul className="right">
            <li className="navlink"><a className="links" href="/">Home</a></li>
            <li className="navlink"><a className="links" href="/login">Signup/Login</a></li>
            <li className="navlink"><a className="links" href="/user">User</a></li>
            <li className="navlink"><a className="links" href="/games">View Games</a></li>
            <li className="navlink"><a className="links" href="/workoutbuilder">Workout Builder</a></li>
          </ul>
        </section>
      </nav>
    </div>
  )
}

export default Nav;