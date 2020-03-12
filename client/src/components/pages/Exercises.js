import React, { Fragment, useContext, useEffect } from "react";
import Exercise from "../exercise/Exercise";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ExerciseForm from "./../exercise/ExerciseForm";
import { ExerciseContext } from "./../../contexts/ExerciseContext";
import Navbar from "../layouts/Navbar";

const Exercises = () => {
  const { exercises, getExercises } = useContext(ExerciseContext);

  useEffect(() => {
    getExercises();
    // eslint-disable-next-line
  }, []);

  return (
    <Navbar>
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
    </Navbar>
  );
};

export default Exercises;
