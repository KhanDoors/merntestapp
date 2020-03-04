import React, { Fragment, useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { MapsContext } from "./../../contexts/MapsContext";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 490
    }
  }
}));

const MapForm = ({ location, onClose }) => {
  const classes = useStyles();

  const { addPinEntry, getPinEntries } = useContext(MapsContext);

  const [pinEntry, setPinEntry] = useState({
    title: "",
    description: "",
    image: "",
    latitude: location.latitude,
    longitude: location.longitude
  });

  const { title, description, image } = pinEntry;

  const onChange = e =>
    setPinEntry({ ...pinEntry, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    try {
      addPinEntry(pinEntry);
      onClose();
      getPinEntries();
    } catch (err) {
      console.log(err);
    }
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
              Add Place
            </Typography>
          </Grid>

          <form className={classes.root} onSubmit={onSubmit}>
            <TextField
              required
              itemType="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={onChange}
            />
            <TextField
              itemType="text"
              multiline
              placeholder="Description"
              name="description"
              value={description}
              onChange={onChange}
            />
            <TextField
              itemType="url"
              placeholder="Image"
              name="image"
              value={image}
              onChange={onChange}
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
