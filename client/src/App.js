import React, { Component } from "react";
// import Foundation from "react-foundation";
import "./App.css";
import Nav from "../components/Nav"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path = "/" component ={Home}></Route>
          <Route exact path = "/user" component ={User}></Route>
          <Route exact path = "/games" component ={ViewGames}></Route>
          <Route exact path = "/workoutbuilder" component ={WorkoutBuilder}></Route>
          <Route component ={NotFound}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
