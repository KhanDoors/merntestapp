import React from "react";
import Maps from "./../maps/Maps";
import Navbar from "../layouts/Navbar";
import Container from "@material-ui/core/Container";

const Map = () => {
  return (
    <Navbar>
      <Container>
        <Maps />
      </Container>
    </Navbar>
  );
};

export default Map;
