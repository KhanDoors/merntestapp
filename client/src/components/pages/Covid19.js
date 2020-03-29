import React from "react";
import Navbar from "../layouts/Navbar";
import Container from "@material-ui/core/Container";
import Covid from "../covid19/Covid";
import Countries from "../covid19/Countries";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const Covid19 = () => {
  const classes = useStyles();

  return (
    <Navbar>
      <Container style={{ marginBottom: "1em" }}>
        <Grid
          style={{ marginBottom: "1em", marginTop: "1em" }}
          container
          justify="center"
        >
          <Typography
            style={{ fontWeight: "bold", color: "#355B8C" }}
            variant="h2"
          >
            Covid - 19 Update
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid>
            <Covid />
          </Grid>
        </Grid>
      </Container>
      <br />
      <Grid
        style={{ marginBottom: "1em", marginTop: "1em" }}
        container
        justify="center"
      >
        <Typography
          style={{ fontWeight: "bold", color: "#355B8C" }}
          variant="h4"
        >
          Country Update
        </Typography>
      </Grid>
      <br />
      <Grid container justify="center">
        <Grid item style={{ marginBottom: "1em", marginTop: "1em" }}>
          <Countries />
        </Grid>
      </Grid>
    </Navbar>
  );
};

export default Covid19;
