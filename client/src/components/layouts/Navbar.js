import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    marginBottom: "5em"
  }
}));

function Navbar({ match, props }) {
  const classes = useStyles();

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h5">Exercise App</Typography>
            <div style={{ marginLeft: "auto" }}>
              <Button variant="contained" color="secondary">
                <Link to="/">Home</Link>
              </Button>{" "}
              <Button variant="contained" color="secondary">
                <Link to="/map">Map</Link>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}

export default withRouter(Navbar);
