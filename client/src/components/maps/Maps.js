import React, { Fragment, useState, useEffect, useContext } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { MapsContext } from "../../contexts/MapsContext";
import RoomTwoToneIcon from "@material-ui/icons/RoomTwoTone";

require("dotenv").config();

const Maps = () => {
  const { pinEntries, getPinEntries } = useContext(MapsContext);

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: 600,
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3
  });

  useEffect(() => {
    getPinEntries();
  }, []);

  console.log(pinEntries);

  return (
    <Fragment>
      <Grid container>
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/syyad/ck79llrp80x6w1ipjodz6mt64"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={setViewport}
        >
          {pinEntries.map(pin => (
            <Marker
              key={pin._id}
              latitude={pin.latitude}
              longitude={pin.longitude}
              offsetLeft={-12}
              offsetTop={-24}
            >
              <svg
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                stroke="red"
                stroke-width="2.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </Marker>
          ))}
        </ReactMapGL>
      </Grid>
    </Fragment>
  );
};

export default Maps;
