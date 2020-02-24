import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { ExerciseContext } from "../../contexts/ExerciseContext";
import Grid from "@material-ui/core/Grid";
import Exercises from "../exercise/Exercises";
import ExerciseForm from "../exercise/ExerciseForm";

const Home = () => {
  const { exercises } = useContext(ExerciseContext);
  return (
    <Fragment>
      <Grid container alignItems="center" justify="center" spacing={10}>
        <Grid>
          <ExerciseForm />
        </Grid>
        <Grid item style={{ marginBottom: "2em" }}>
          <Exercises />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
