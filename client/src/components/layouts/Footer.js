import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.primary,
    width: "100%",
    height: "5em",
    zIndex: 1302,
    position: "relative"
  }
}));

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <footer className={classes.footer}>
      <Grid container>
        <h1>Footer</h1>
      </Grid>
    </footer>
  );
}
