import React from "react";
import Navbar from "../layouts/Navbar";
import Container from "@material-ui/core/Container";
import Covid from "../covid19/Covid";
import Countries from "../covid19/Countries";

const Covid19 = () => {
  return (
    <Navbar>
      <Container style={{ width: "100vw" }}>
        <Covid />
        <Countries />
      </Container>
    </Navbar>
  );
};

export default Covid19;
