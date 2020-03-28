import React from "react";
import Navbar from "../layouts/Navbar";
import Container from "@material-ui/core/Container";
import Covid from "../covid19/Covid";

const Covid19 = () => {
  return (
    <Navbar>
      <Container style={{ height: "80vh" }}>
        <Covid />
      </Container>
    </Navbar>
  );
};

export default Covid19;
