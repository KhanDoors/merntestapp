import React from "react";
import Charts from "../chart/Charts";
import Navbar from "../layouts/Navbar";
import Container from "@material-ui/core/Container";

const Chart = () => {
  return (
    <Navbar>
      <Container style={{ height: "78vh" }}>
        <Charts />
      </Container>
    </Navbar>
  );
};

export default Chart;
