import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import CardActionArea from "@material-ui/core/CardActionArea";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import GoogleMapReact from "google-map-react";
import CountUp from "react-countup";

require("dotenv").config();
// mapboxApiAccessToken={process.env.REACT_APP_GOOGLEMAP_TOKEN}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2.5em",
    width: "80vw",
    height: "100vh",
    textAlign: "center",
  },
}));

export default function CovidMap() {
  const classes = useStyles();
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/countries")
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getLocations = results.map((data, i) => {
    return (
      <div
        lat={data.countryInfo.lat}
        lng={data.countryInfo.long}
        style={{
          color: "red",
          backgroundColor: "transparent",
          height: "25px",
          width: "35px",
          textAlign: "center",
        }}
      >
        <img height="10px" src={data.countryInfo.flag} alt="" />
        <br />
        <CountUp start={0} separator="," duration={5} end={data.cases} />
      </div>
    );
  });

  return (
    <Grid container className={classes.root}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "",
        }}
        defaultCenter={{ lat: 20, lng: -30 }}
        defaultZoom={2}
      >
        {getLocations}
      </GoogleMapReact>
    </Grid>
  );
}
