import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={exercise.url}
          title={exercise.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <strong>{exercise.name}</strong>
            <p style={{ fontSize: "15px" }}>Reps: {exercise.duration}</p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {exercise.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
