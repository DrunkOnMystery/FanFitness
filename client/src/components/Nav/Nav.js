import React from "react";

function Nav() {
  return (
    <div className="Nav">
      <nav class="top-bar" data-topbar role="navigation">
        <ul class="title-area">
          <li class="name">
            <h1><a href ="/">Fan Fitness</a></h1>
          </li>
        </ul>
        <section class="top-bar-section">
          <ul class="left">
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