import React, { useState } from "react";
import Dropzone from "react-dropzone";

import axios from "axios";

const Uploads = () => {
  const [Images, setImages] = useState([]);

  const onDrop = files => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" }
    };
    formData.append("file", files[0]);
    //save the Image we chose inside the Node Server
    axios
      .post("http://localhost:4000/upload", formData, config)
      .then(response => {
        console.log(response);
        if (response.data.success) {
          setImages([...Images, response.data.image]);
        } else {
          alert("Failed to save the Image in Server");
        }
      });
  };

  console.log(Images);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
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
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default Uploads;
