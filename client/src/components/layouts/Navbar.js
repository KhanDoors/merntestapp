import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, withRouter } from "react-router-dom";

function Navbar({ match }) {
  console.log(match.url);
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6">Exercise App</Typography>
          <button>
            <Link to="/">home</Link>
          </button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);
