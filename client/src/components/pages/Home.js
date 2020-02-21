import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { ExerciseContext } from "../../contexts/ExerciseContext";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  const { exercises } = useContext(ExerciseContext);
  return (
    <Fragment>
      <Grid container alignItems="center" justify="center" spacing={12}>
        <Grid item>
          <h1>Home</h1>
          <p>{exercises.length}</p>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
