import React, { Fragment, useState, useContext, useEffect } from "react";
import Exercise from "./Exercise";
import Grid from "@material-ui/core/Grid";
import { ExerciseContext } from "./../../contexts/ExerciseContext";
import Typography from "@material-ui/core/Typography";

const Exercises = () => {
  const { exercises, getExercises } = useContext(ExerciseContext);

  useEffect(() => {
    getExercises();
  }, []);

  return (
    <Fragment>
      <Grid
        style={{ marginBottom: "1em", marginTop: "1em" }}
        container
        justify="center"
      >
        <Typography variant="h3">Exercise Library</Typography>
      </Grid>
      <Grid container justify="center" spacing={10}>
        {exercises.map(exercise => {
          return (
            <Grid item key={exercise._id}>
              <Exercise exercise={exercise} />
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default Exercises;
