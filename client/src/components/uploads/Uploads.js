import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";

const Uploads = () => {
  const [files, setFiles] = useState([]);

  const handleDrop = e => {
    setFiles(e);
  };

  console.log(files);
  return (
    <div>
      <h1>Upload Page</h1>

      <DropzoneArea
        acceptedFiles={["image/*", "video/*", "application/*"]}
        maxFileSize={3000000}
        dropzoneText="Drag and drop an image file here or click"
        showPreviewsInDropzone={true}
        filesLimit={3}
        onDrop={handleDrop}
      />
      <Button variant="contained">Add Image</Button>
    </div>
  );
};

export default Uploads;
