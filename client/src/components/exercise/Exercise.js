import React from "react";
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
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function Exercise() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://ak1.picdn.net/shutterstock/videos/33735811/thumb/1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bench Press
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The bench press builds the muscles of the chest as well as the
            triceps of the back of the arms and the front deltoid shoulder
            muscles. You can do this exercise with barbells, dumbbells, or with
            a Smith machine, which constrains the path of the barbell and makes
            the exercise a little easier. You will often learn the bench press
            in a strength training program. Beginners should try lifts without
            weight on the bar to warm up, get a feel for the bar, and learn to
            do it with good form. You can use it regularly as part of an upper
            body workout for strength and muscle development.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
