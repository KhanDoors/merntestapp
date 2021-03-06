import React from "react";
import Uploads from "../uploads/Uploads";
import Navbar from "../layouts/Navbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const Upload = () => {
  return (
    <Navbar>
      <Container style={{ height: "70vh" }}>
        <Typography
          style={{
            textAlign: "center",
            marginBottom: 30,
            fontWeight: "bold",
            color: "#355B8C"
          }}
          variant="h4"
        >
          Upload Photos
        </Typography>
        <Uploads />
      </Container>
    </Navbar>
  );
};

export default Upload;
