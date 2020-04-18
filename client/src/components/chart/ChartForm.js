import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30vw",
    },
  },
}));

const ChartForm = () => {
  const classes = useStyles();

  const [exercise, setExercise] = useState({
    name: "",
    url: "",
    description: "",
    duration: "",
  });

  const { title, description, labels, colors, numbers } = exercise;

  return (
    <Fragment>
      <Card>
        <CardActionArea style={{ margin: ".5em" }}>
          <Grid container justify="center">
            <Typography
              style={{ fontWeight: "bold", color: "#355B8C" }}
              variant="h4"
            ></Typography>
          </Grid>

          <form>
            <Grid container className={classes.root} spacing={2}>
              <Grid item>
                <TextField
                  itemType="text"
                  placeholder="Title"
                  name="name"
                  value={title}
                />
              </Grid>
              <Grid item>
                <TextField
                  itemType="text"
                  placeholder="Description"
                  multiline
                  name="description"
                  value={description}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.root} spacing={2}>
              <Grid item>
                <TextField
                  itemType="text"
                  placeholder="Labels"
                  name="labels"
                  value={labels}
                />
              </Grid>

              <Grid item>
                <TextField
                  itemType="text"
                  placeholder="Colors"
                  name="colors"
                  value={colors}
                />
              </Grid>
              <Grid item>
                <TextField
                  itemType="text"
                  placeholder="Numbers"
                  name="numbers"
                  value={numbers}
                />
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.root}
              spacing={2}
            >
              <Button variant="contained" color="secondary" type="submit">
                Submit
              </Button>
            </Grid>
          </form>
        </CardActionArea>
      </Card>
    </Fragment>
  );
};

export default ChartForm;
