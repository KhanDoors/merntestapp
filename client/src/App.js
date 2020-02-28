import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import ExerciseContextProvider from "./contexts/ExerciseContext";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Map from "./components/pages/Map";

const App = () => {
  return (
    <ExerciseContextProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/map" component={Map} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </ExerciseContextProvider>
  );
};

export default App;
