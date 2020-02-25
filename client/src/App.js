import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Exercises from "./components/exercise/Exercises";
import Exercise from "./components/exercise/Exercise";
import ExerciseForm from "./components/exercise/ExerciseForm";
import Home from "./components/pages/Home";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import ExerciseContextProvider from "./contexts/ExerciseContext";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import theme from "./theme";

const App = () => {
  return (
    <ExerciseContextProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/exercises" component={Exercises} />
            <Route exact path="/exerciseform" component={ExerciseForm} />
            <Route exact path="/exercise/:id" component={Exercise} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </ExerciseContextProvider>
  );
};

export default App;
