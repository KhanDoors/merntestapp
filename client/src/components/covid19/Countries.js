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

const useStyles = makeStyles(theme => ({
  card: {
    height: "30em",
    width: "25em",
    margin: 4
  },
  media: {
    height: 150
  }
}));

export default function Countries() {
  const classes = useStyles();
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/countries")
      .then(res => {
        setResults(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Grid container justify="center" spacing={10}>
      {results.map((result, i) => {
        return (
          <Card className={classes.card} key={i}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={result.countryInfo.flag}
                title="Country Flag"
              />
              <CardHeader title={result.country} />
              <CardContent
                style={{ textAlign: "center", fontFamily: "monseratt" }}
              >
                <Typography>
                  Total Cases:{" "}
                  <strong style={{ color: "red" }}>{result.cases}</strong>{" "}
                </Typography>
                <Typography>
                  Today's Cases:{" "}
                  <strong style={{ color: "red" }}>{result.todayCases}</strong>{" "}
                </Typography>
                <Typography>
                  Total Deaths:{" "}
                  <strong style={{ color: "red" }}>{result.deaths}</strong>{" "}
                </Typography>
                <Typography>
                  Today's Deaths:{" "}
                  <strong style={{ color: "red" }}>{result.todayDeaths}</strong>{" "}
                </Typography>
                <Typography>
                  Recovered:{" "}
                  <strong style={{ color: "red" }}>{result.recovered}</strong>{" "}
                </Typography>
                <Typography>
                  Active Cases:{" "}
                  <strong style={{ color: "red" }}> {result.active}</strong>{" "}
                </Typography>
                <Typography>
                  Critical Cases:{" "}
                  <strong style={{ color: "red" }}>{result.critical} </strong>{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Grid>
  );
}
