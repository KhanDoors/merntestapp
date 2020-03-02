import React, { Fragment, useContext, useEffect } from "react";
import Exercise from "./Exercise";
import Grid from "@material-ui/core/Grid";
import { ExerciseContext } from "./../../contexts/ExerciseContext";
import Typography from "@material-ui/core/Typography";
import ExerciseForm from "./ExerciseForm";
import Container from "@material-ui/core/Container";

const Exercises = () => {
  const { exercises, getExercises } = useContext(ExerciseContext);

  useEffect(() => {
    getExercises();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Container>
        <ExerciseForm />
        <Grid
          style={{ marginBottom: "1em", marginTop: "1em" }}
          container
          justify="center"
        >
          <Typography
            style={{ fontWeight: "bold", color: "#355B8C" }}
            variant="h4"
          >
            Exercise Library
          </Typography>
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
      </Container>
    </Fragment>
  );
};

export default Exercises;
