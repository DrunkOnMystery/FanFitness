import React from "react";
import "./NavStyle.css";

function Nav() {
  return (
    <div className="Nav">
      <nav class="top-bar" data-topbar role="navigation">
      <a href ="/"><h1 id="headerText">FAN FITNESS</h1></a>
        <section class="top-bar-section">
          <ul class="right">
            <li class="navlink"><a class="links" href="/">Home</a></li>
            <li class="navlink"><a class="links" href="/user">User</a></li>
            <li class="navlink"><a class="links" href="/games">View Games</a></li>
            <li class="navlink"><a class="links" href="/workoutbuilder">Workout Builder</a></li>
          </ul>
        </section>
      </nav>
    </div>
  )
}

export default Nav;