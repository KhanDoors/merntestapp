import React, { Fragment, useState, useContext, useEffect } from "react";
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

  const { addExercises, updateExercises, current } = useContext(
    ExerciseContext
  );

  const [exercise, setExercise] = useState({
    name: "",
    url: "",
    description: "",
    duration: ""
  });

  useEffect(() => {
    if (current !== null) {
      setExercise(current);
    } else {
      setExercise({
        name: "",
        url: "",
        description: "",
        duration: ""
      });
    }
  }, [current]);

  const { name, url, description, duration } = exercise;

  const onChange = e =>
    setExercise({ ...exercise, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addExercises(exercise);
    } else {
      updateExercises(exercise);
    }
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
        {current ? "Edit Exercise" : "Add Exercise"}
      </Typography>
      <form onSubmit={onSubmit}>
        <input
          itemType="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          itemType="url"
          placeholder="Url"
          name="url"
          value={url}
          onChange={onChange}
        />
        <input
          itemType="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={onChange}
        />
        <input
          itemType="text"
          placeholder="Duration"
          name="duration"
          value={duration}
          onChange={onChange}
        />
        <input
          type="submit"
          value={current ? "Edit Exercise" : "Add Exercise"}
        />
      </form>
    </Fragment>
  );
};

export default ExerciseForm;
