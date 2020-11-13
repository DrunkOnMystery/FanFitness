import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <nav class="top-bar" data-topbar role="navigation">
        <ul class="title-area">
          <li class="name">
            <h1><a href ="/">Fan Fitness</a></h1>
          </li>
          <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
        </ul>

        <section class="top-bar-section">
          <ul class="left">
            <li><a href="/user">View Games</a></li>
            <li><a href="/user">Workout Builder</a></li>
          </ul>
        </section>
      </nav>
    </div>
  )
}

export default Nav;