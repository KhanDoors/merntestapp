import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    width: 500,
    backgroundColor: "primary"
  }
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <footer>
      <h1>Footer</h1>
    </footer>
  );
}
