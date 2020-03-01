import React, { Fragment, useState } from "react";
import ReactMapGL from "react-map-gl";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

require("dotenv").config();

const Maps = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 3
  });

  return (
    <Fragment>
      <Grid container>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={setViewport}
        />
      </Grid>
    </Fragment>
  );
};

export default Maps;
