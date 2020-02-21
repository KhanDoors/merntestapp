import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Navbar({ match }) {
  console.log(match.url);
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6">Exercise App</Typography>
          <div style={{ marginLeft: "auto" }}>
            <Button variant="contained" style={{ backgroundColor: "yellow" }}>
              <Link to="/">Home</Link>
            </Button>{" "}
            <Button variant="contained" style={{ backgroundColor: "orange" }}>
              <Link to="/exercises">Exercises</Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);
