import React, { Fragment, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { ExerciseContext } from "./../../contexts/ExerciseContext";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const ExerciseForm = () => {
  const classes = useStyles();

  const { addExercise } = useContext(ExerciseContext);

  const [exercise, setExercise] = useState({
    name: "",
    url: "",
    description: "",
    duration: ""
  });

  const { name, url, description, duration } = exercise;

  const onChange = e =>
    setExercise({ ...exercise, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addExercise(exercise);
    setExercise({
      name: "",
      url: "",
      description: "",
      duration: ""
    });
  };

  return (
    <Fragment>
      <Typography style={{ marginBottom: ".5em" }} variant="h2">
        Add Exercise
      </Typography>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          value={name}
          onChange={onChange}
        />
        <TextField
          id="outlined-basic"
          label="Url"
          variant="outlined"
          name="url"
          value={url}
          onChange={onChange}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          value={description}
          onChange={onChange}
        />
        <TextField
          id="outlined-basic"
          label="Duration"
          variant="outlined"
          name="duration"
          value={duration}
          onChange={onChange}
        />
        <Container maxWidth="sm">
          <Button size="large" variant="contained" color="secondary">
            Submit
          </Button>
        </Container>
      </form>
    </Fragment>
  );
};

export default ExerciseForm;
