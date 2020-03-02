import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 400
    }
  }
}));

const MapForm = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Card>
        <CardActionArea style={{ margin: ".5em" }}>
          <Grid container justify="center">
            <Typography
              style={{ fontWeight: "bold", color: "#355B8C" }}
              variant="h4"
            >
              Add Place
            </Typography>
          </Grid>

          <form className={classes.root}>
            <TextField
              required
              itemType="text"
              placeholder="Title"
              name="name"
              //   value={title}
            />
            <TextField
              itemType="text"
              multiline
              placeholder="Description"
              name="description"
              //   value={description}
            />
            <TextField
              itemType="url"
              placeholder="Image"
              name="image"
              //   value={image}
            />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              value="add Pin"
            >
              Submit
            </Button>
          </form>
        </CardActionArea>
      </Card>
    </Fragment>
  );
};

export default MapForm;
