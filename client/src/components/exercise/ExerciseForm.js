import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ExerciseContext } from "./../../contexts/ExerciseContext";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

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
  // const theme = useTheme();

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
      <Card>
        <CardActionArea style={{ margin: ".5em" }}>
          <Grid container justify="center">
            <Typography
              style={{ fontWeight: "bold", color: "#355B8C" }}
              variant="h4"
            >
              {current ? "Edit Exercise" : "Add Exercise"}
            </Typography>
          </Grid>

          <form className={classes.root} onSubmit={onSubmit}>
            <TextField
              itemType="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
            />
            <TextField
              itemType="url"
              placeholder="Url"
              name="url"
              value={url}
              onChange={onChange}
            />
            <TextField
              itemType="text"
              placeholder="Description"
              multiline
              name="description"
              value={description}
              onChange={onChange}
            />
            <TextField
              itemType="text"
              placeholder="Duration"
              name="duration"
              value={duration}
              onChange={onChange}
            />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              value={current ? "Edit Exercise" : "Add Exercise"}
            >
              Submit
            </Button>
          </form>
        </CardActionArea>
      </Card>
    </Fragment>
  );
};

export default ExerciseForm;
