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

const useStyles = makeStyles(theme => ({
  card: {
    height: "27em",
    width: "25em"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  root: {
    flexGrow: 1
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Countries() {
  const classes = useStyles();
  const [spacing, setSpacing] = useState(2);
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/all"),
        axios.get("https://corona.lmao.ninja/countries")
      ])
      .then(resArr => {
        setLatest(resArr[0].data);
        setResults(resArr[1].data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  let timestamp = new Date(parseInt(latest.updated));
  let today = timestamp.toString();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Grid item>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    <span role="img" aria-label="covid19">
                      {" "}
                      📈
                    </span>
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Cases as of:"
                subheader={today}
              />
              <CardMedia
                className={classes.media}
                image="https://ewscripps.brightspotcdn.com/dims4/default/d396a36/2147483647/strip/true/crop/1280x720+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F3f%2Ffc%2F9f1d34714b5a9ddf0ea13a697a79%2Fcoronavirus-cases2.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" component="p">
                  The coronavirus COVID-19 is affecting 199 countries and
                  territories around the world. <br />
                  The Total Number of Cases is:
                  <strong style={{ color: "red" }}> {latest.cases}</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    <span role="img" aria-label="covid19">
                      {" "}
                      📈
                    </span>
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Deaths as of:"
                subheader={today}
              />
              <CardMedia
                className={classes.media}
                image="https://media.graytvinc.com/images/317_coviddeath_MGN.jpg"
                title="Codid19Deaths"
              />
              <CardContent>
                <Typography variant="body2" component="p">
                  The COVID-19 outbreak is an unprecedented global public health
                  challenge.
                  <br /> The Total Number of Deaths is:
                  <strong style={{ color: "red" }}> {latest.deaths}</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    <span role="img" aria-label="covid19">
                      {" "}
                      📈
                    </span>
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Recoveries as of:"
                subheader={today}
              />
              <CardMedia
                className={classes.media}
                image="https://images.foxtv.com/static.fox26houston.com/www.fox26houston.com/content/uploads/2020/03/764/432/RECOVERED.jpg?ve=1&tl=1"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" component="p">
                  Recoveries are rising steadily. <br />
                  The Total Number of Recovered is:
                  <strong style={{ color: "red" }}> {latest.recovered}</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
