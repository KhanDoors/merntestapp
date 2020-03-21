import React, { useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justify: "center",
    alignItems: "center"
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const Uploads = () => {
  const classes = useStyles();

  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);

  const onDrop = files => {
    setImages(files[0]);
    setFiles(
      files.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    );
  };

  const onSubmit = async e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", images);
    const config = {
      header: { "content-type": "multipart/form-data" }
    };
    try {
      const res = await axios
        .post("http://localhost:4000/upload", formData, config)
        .then(res => setImages(res.data))
        .then(setFiles([]));
    } catch (err) {
      console.log(err);
    }
  };

  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16
  };

  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box"
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden"
  };

  const img = {
    width: "13rem",
    height: "13rem",
    border: "1px solid #ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "1rem"
  };

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  const filepath = files.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  width: "500px",
                  height: "240px",
                  border: "1px solid lightgray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <div style={{ display: "column" }}>
                  <div style={{ textAlign: "center" }}>
                    <CloudUploadIcon color="secondary" fontSize="large" />
                  </div>
                  <div>
                    <h3>
                      Drag 'n' drop some files here, or click to select files
                    </h3>
                  </div>
                </div>
              </div>
            )}
          </Dropzone>
        </Grid>
        <Grid item xs={12} sm={6}>
          <aside>
            <h4>Selected Files:</h4>
            <ul>{filepath}</ul>
          </aside>
          <aside style={thumbsContainer}>{thumbs}</aside>
        </Grid>

        <Button color="primary" variant="contained" onClick={onSubmit}>
          Upload
        </Button>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </Grid>
    </div>
  );
};

export default Uploads;
