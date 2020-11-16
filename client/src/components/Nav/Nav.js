import React from "react";

function Nav() {
  return (
    <div className="Nav">
      <nav class="top-bar" data-topbar role="navigation">
            <h1 id="headerText"><a href ="/">Fan Fitness</a></h1>
        <section class="top-bar-section">
          <ul class="left">
            <li><a href="/">Home</a></li>
            <li><a href="/user">User</a></li>
            <li><a href="/games">View Games</a></li>
            <li><a href="/workoutbuilder">Workout Builder</a></li>
          </ul>
        </section>
      </nav>
    </div>
  )
}

export default Nav;