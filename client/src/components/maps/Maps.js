import React, { Fragment, useState, useEffect, useContext } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { MapsContext } from "../../contexts/MapsContext";
import MapForm from "./MapForm";

require("dotenv").config();

const Maps = () => {
  const { pinEntries, getPinEntries } = useContext(MapsContext);
  const [showPopup, setShowPopup] = useState({});
  const [addEntryLocation, setAddEntryLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: 800,
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3
  });

  useEffect(() => {
    getPinEntries();

    // eslint-disable-next-line
  }, []);

  const showAddMarkerPopup = e => {
    const [longitude, latitude] = e.lngLat;
    setAddEntryLocation({
      latitude,
      longitude
    });
  };

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
          Places I've visited ... so far{" "}
          <span role="img" aria-label="sunglasses">
            😎
          </span>
        </Typography>
      </Grid>
      <Grid container>
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/syyad/ck79llrp80x6w1ipjodz6mt64"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={setViewport}
          onDblClick={showAddMarkerPopup}
        >
          {pinEntries.map(pin => (
            <Fragment key={pin._id}>
              <Marker
                latitude={pin.latitude}
                longitude={pin.longitude}
                offsetLeft={-12}
                offsetTop={-24}
              >
                <div
                  onClick={() =>
                    setShowPopup({
                      [pin._id]: true
                    })
                  }
                >
                  <svg
                    // transform="translate((-50%), (-100%))"
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                    stroke="#30F2F2"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
              </Marker>
              {showPopup[pin._id] ? (
                <Popup
                  latitude={pin.latitude}
                  longitude={pin.longitude}
                  closeButton={true}
                  dynamicPosition={true}
                  closeOnClick={false}
                  onClose={() => setShowPopup({})}
                  anchor="top"
                >
                  <div style={{ maxWidth: "300px" }}>
                    <h3>{pin.title}</h3>
                    {pin.image && (
                      <img
                        style={{ height: "200px", width: "300px" }}
                        src={pin.image}
                        alt={pin.title}
                      />
                    )}
                    <p>{pin.description}</p>
                  </div>
                </Popup>
              ) : null}
            </Fragment>
          ))}
          {addEntryLocation ? (
            <Fragment>
              <Marker
                latitude={addEntryLocation.latitude}
                longitude={addEntryLocation.longitude}
                offsetLeft={-12}
                offsetTop={-24}
              >
                <div>
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
                </div>
              </Marker>
              <Popup
                latitude={addEntryLocation.latitude}
                longitude={addEntryLocation.longitude}
                closeButton={true}
                dynamicPosition={true}
                closeOnClick={false}
                onClose={() => setAddEntryLocation(null)}
                anchor="top"
              >
                <div style={{ width: "40vw" }}>
                  <MapForm location={addEntryLocation} />
                </div>
              </Popup>
            </Fragment>
          ) : null}
        </ReactMapGL>
      </Grid>
    </Fragment>
  );
};

export default Maps;
