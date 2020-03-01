import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { ExerciseContext } from "../../contexts/ExerciseContext";
import Grid from "@material-ui/core/Grid";
import Exercises from "../exercise/Exercises";
import ExerciseForm from "../exercise/ExerciseForm";
import Container from "@material-ui/core/Container";

const Home = () => {
  const { exercises } = useContext(ExerciseContext);
  return (
    <Fragment>
      <Container>
        <h1>Home Page</h1>
      </Container>
    </Fragment>
  );
};

export default Home;
