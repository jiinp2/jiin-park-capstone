import "./Upload.scss";
import Dropzone from "../../components/Dropzone/Dropzone";
import { useState } from "react";

function Upload() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFilesSelected = (files) => {
    setSelectedFiles(files);
    console.log("Files recieved:", files);
  };

  return (
    <section className="upload">
      <h1>Upload Your Photos</h1>
      <p>Start building your travel log by adding photos from your journey.</p>
      <Dropzone onFilesSelected={handleFilesSelected} />
    </section>
  );
}

export default Upload;
