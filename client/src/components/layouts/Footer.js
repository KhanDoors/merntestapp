import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.primary,
    width: "100%",
    height: "3em",
    zIndex: 1302,
    position: "relative",
    marginTop: "2em"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return <footer className={classes.footer}></footer>;
}
