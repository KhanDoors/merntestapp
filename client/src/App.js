import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Exercises from "./components/exercise/Exercises";
import ExerciseForm from "./components/exercise/ExerciseForm";
import Home from "./components/pages/Home";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/exercises" component={Exercises} />
        <Route exact path="/exerciseform" component={ExerciseForm} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
