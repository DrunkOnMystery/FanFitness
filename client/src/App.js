import React, { Component } from "react";
import { Switch, Route, Router } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import WorkoutBuilder from "./pages/WorkoutBuilder";
import ViewGames from "./pages/ViewGames";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/user" component={User}></Route>
            <Route exact path="/games" component={ViewGames}></Route>
            <Route exact path="/workoutbuilder" component={WorkoutBuilder}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
