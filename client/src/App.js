import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Exercises from "./components/exercise/Exercises";
import ExerciseForm from "./components/exercise/ExerciseForm";
import Home from "./components/core/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/exercises" component={Exercises} />
        <Route exact path="/exerciseform" component={ExerciseForm} />
      </Switch>
    </Router>
  );
};

export default App;
