import React, { Fragment, useState, useEffect, useContext } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { MapsContext } from "../../contexts/MapsContext";

require("dotenv").config();

const Maps = () => {
  const { pinEntries, getPinEntries } = useContext(MapsContext);
  const [showPopup, setShowPopup] = useState({});
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: 800,
    latitude: 37.6,
    longitude: -95.665,
    zoom: 1
  });

  useEffect(() => {
    getPinEntries();
  }, []);

  return (
    <Fragment>
      <Grid
        style={{ marginBottom: "1em", marginTop: "1em" }}
        container
        justify="center"
      >
        <Typography
          style={{
            fontWeight: "bold",
            color: "#355B8C"
          }}
          variant="h4"
        >
          It's a small ...
        </Typography>
      </Grid>
      <Grid container>
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/syyad/ck79llrp80x6w1ipjodz6mt64"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={setViewport}
        >
          {pinEntries.map(pin => (
            <Fragment>
              <Marker
                key={pin._id}
                latitude={pin.latitude}
                longitude={pin.longitude}
                offsetLeft={-12}
                offsetTop={-24}
              >
                <svg
                  // transform="translate((-50%), (-100%))"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  stroke="red"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </Marker>
              {showPopup[pin._id] ? (
                <Popup
                  latitude={37.78}
                  longitude={-122.41}
                  closeButton={true}
                  closeOnClick={false}
                  onClose={() => this.setState({ showPopup: false })}
                  anchor="top"
                >
                  <div>You are here</div>
                </Popup>
              ) : null}
            </Fragment>
          ))}
        </ReactMapGL>
      </Grid>
    </Fragment>
  );
};

export default Maps;
