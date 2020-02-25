import React, { Fragment, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ExerciseContext } from "./../../contexts/ExerciseContext";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 600
  },
  media: {
    height: 200
  }
});

export default function Exercise({ exercise }) {
  const classes = useStyles();

  const { name, url, description, duration, _id } = exercise;

  const { deleteExercises, getCurrent, clearCurrent } = useContext(
    ExerciseContext
  );

  const onDelete = () => {
    deleteExercises(_id);
    clearCurrent();
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={url} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <strong>{name}</strong>
            <p style={{ fontSize: "15px" }}>Reps: {duration}</p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => getCurrent(exercise)}
          size="small"
          color="primary"
        >
          Edit
        </Button>
        <Button onClick={onDelete} size="small" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
