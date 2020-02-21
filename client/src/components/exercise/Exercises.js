import React, { Fragment, useState, useContext } from "react";
import Exercise from "./Exercise";
import ExerciseForm from "./ExerciseForm";
import Grid from "@material-ui/core/Grid";
import { ExerciseContext } from "./../../contexts/ExerciseContext";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  return (
    <Fragment>
      <Grid container alignItems="center" justify="center" spacing={12}>
        <Grid item>
          <h1>Exercise Library</h1>
          <Exercise />
          <ExerciseForm />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Exercises;
