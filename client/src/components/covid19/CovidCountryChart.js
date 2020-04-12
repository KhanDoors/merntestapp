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
import { Bar, Line } from "react-chartjs-2";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { NativeSelect } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "30em",
    width: "40em",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "50em",
    textAlign: "center",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CovidCountryChart() {
  const classes = useStyles();
  const [spacing, setSpacing] = useState(2);
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);
  const [countryInfo, setCountryInfo] = useState("");

  const getCountryData = async () => {
    try {
      const res = await axios
        .get("https://covid19.mathdro.id/api/countries")
        .then((res) => setCountryData(res.data.countries))
        .then(setLoading(false));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCountryData();
  }, []);

  const handleChange = (event) => {
    setSelected(event.target.value || "");
  };

  const callCountryData = async (selected) => {
    try {
      const res = await axios
        .get(`https://covid19.mathdro.id/api/countries/${selected}`)
        .then((res) => setCountryInfo(res.data))
        .then(setLoading(false));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callCountryData(selected);
  }, [selected]);

  const barChart = countryInfo.confirmed ? (
    <Bar
      data={{
        labels: ["Cases", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["blue", "green", "red"],
            data: [
              countryInfo.confirmed.value,
              countryInfo.recovered.value,
              countryInfo.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { dosplay: true, text: `Current state in ${selected}` },
      }}
    />
  ) : null;

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        {countryData !== null && loading !== true ? (
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              <Grid item>
                <FormControl>
                  <NativeSelect onChange={handleChange} style={{ width: 100 }}>
                    <option value="global">Enter Country</option>
                    {countryData.map((country, i) => (
                      <option key={i} value={country.name}>
                        {country.name}{" "}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <div>Loading...</div>
        )}
      </Grid>
      <Grid container className={classes.root} spacing={2}>
        {countryInfo !== null && loading !== true ? (
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              <Grid item>
                <Card className={classes.card}>
                  <CardContent>{barChart}</CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <div>Loading...</div>
        )}
      </Grid>
    </>
  );
}
