import React, { useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const Uploads = () => {
  const [images, setImages] = useState([]);

  const onDrop = files => {
    setImages(files[0]);
  };

  const onSubmit = async files => {
    let formData = new FormData();
    formData.append("file", images);
    const config = {
      header: { "content-type": "multipart/form-data" }
    };
    try {
      const res = await axios
        .post("http://localhost:4000/upload", formData, config)
        .then(res => setImages(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  console.log(images);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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
                <h3>Drag 'n' drop some files here, or click to select files</h3>
              </div>
            </div>
          </div>
        )}
      </Dropzone>
      {/* <div
        style={{
          display: "flex",
          width: "350px",
          height: "240px",
          overflowX: "scroll"
        }}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={image}
              alt={index}
            />
          </div>
        ))}
      </div> */}
      <div>
        <button onClick={onSubmit}>Upload</button>
      </div>
    </div>
  );
};

export default Uploads;
