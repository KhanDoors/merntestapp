import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BarChart from "../chart/BarChart";
import Navbar from "../layouts/Navbar";
import Container from "@material-ui/core/Container";
import PieChart from "../chart/PieChart";
import DoughnutChart from "../chart/DoughnutChart";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function Chart() {
  return (
    <Navbar>
      <Container>
        <div>
          <Grid
            container
            style={{ marginBottom: "1em", marginTop: "1em" }}
            justify="center"
          >
            <Grid
              style={{ marginBottom: "1em", marginTop: "1em" }}
              container
              justify="center"
            >
              <Typography
                style={{ fontWeight: "bold", color: "#355B8C" }}
                variant="h4"
              >
                Chart Library
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ margin: "1em" }}>
              <Card>
                <BarChart />
              </Card>
            </Grid>
            <Grid item xs={3} style={{ margin: "1em" }}>
              <Card>
                <PieChart />
              </Card>
            </Grid>
            <Grid item xs={3} style={{ margin: "1em" }}>
              <Card>
                <DoughnutChart />
              </Card>
            </Grid>
            <Grid item xs={3} style={{ margin: "1em" }}>
              <Card>
                <BarChart />
              </Card>
            </Grid>
            <Grid item xs={3} style={{ margin: "1em" }}>
              <Card>
                <PieChart />
              </Card>
            </Grid>
            <Grid item xs={3} style={{ margin: "1em" }}>
              <Card>
                <DoughnutChart />
              </Card>
            </Grid>
            <Grid item xs={3} style={{ margin: "1em" }}>
              <Card>
                <PieChart />
              </Card>
            </Grid>
            <Grid item xs={3} style={{ margin: "1em" }}>
              <Card>
                <BarChart />
              </Card>
            </Grid>
            <Grid item xs={3} style={{ margin: "1em" }}>
              <Card>
                <DoughnutChart />
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Navbar>
  );
}
