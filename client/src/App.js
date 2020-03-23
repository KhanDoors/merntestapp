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
import MapsContextProvider from "./contexts/MapsContext";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Map from "./components/pages/Map";
import Exercises from "./components/pages/Exercises";
import Upload from "./components/pages/Upload";
import Chart from "./components/pages/Chart";

const App = () => {
  return (
    <ExerciseContextProvider>
      <MapsContextProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/exercises" component={Exercises} />
              <Route exact path="/map" component={Map} />
              <Route exact path="/upload" component={Upload} />
              <Route exact path="/chart" component={Chart} />
              <Redirect to="/" />
            </Switch>
            <Footer />
          </Router>
        </ThemeProvider>
      </MapsContextProvider>
    </ExerciseContextProvider>
  );
};

export default App;
