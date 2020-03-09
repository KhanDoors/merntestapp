import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const Uploads = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  const handleDrop = e => {
    setFiles(e);
  };

  console.log(files);
  return (
    <div className={classes.root}>
      <Grid alignItems="center" direction="column" container spacing={10}>
        <Grid item>
          <Typography variant="h4">Upload Page</Typography>
        </Grid>
        <Grid item style={{ width: "60em" }}>
          <DropzoneArea
            acceptedFiles={["image/*", "video/*", "application/*"]}
            maxFileSize={3000000}
            dropzoneText="Drag and drop files here or click"
            showPreviewsInDropzone={true}
            filesLimit={3}
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
