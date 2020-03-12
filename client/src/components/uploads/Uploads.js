import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const Uploads = () => {
  const classes = useStyles();
  const [Images, setImages] = useState([]);

  const handleDrop = files => {
    let formData = new FormData();
    formData.append("file", files[0]);
    const config = {
      header: { "content-type": "multipart/form-data" }
    };
    //save the Image we chose inside the Node Server
    axios
      .post("http://localhost:4000/upload", formData, config)
      .then(response => {
        console.log(response);
        // if (response.data.success) {
        //   setImages([...Images, response.data.image]);
        //   // props.refreshFunction([...Images, response.data.image])
        // } else {
        //   alert("Failed to save the Image in Server");
        // }
      });
  };

  console.log(Images);
  return (
    <div className={classes.root}>
      <Grid alignItems="center" direction="column" container spacing={10}>
        <Grid item>
          <Typography variant="h4">Upload Page</Typography>
        </Grid>
        <Grid item style={{ width: "60em" }}>
          <DropzoneArea
            acceptedFiles={["image/*", "audio/*", "video/*", "application/*"]}
            maxFileSize={3000000}
            dropzoneText="Drag and drop files here or click"
            showPreviewsInDropzone={true}
            multiple={false}
            onDrop={handleDrop}
          />
        </Grid>
        <Grid item>
          <Button variant="contained">Add Image</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Uploads;
