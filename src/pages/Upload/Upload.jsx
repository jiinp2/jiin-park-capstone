import { useState } from "react";
import Dropzone from "../../components/Dropzone/Dropzone";
import "./Upload.scss";

function Upload() {
  // State to store files
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  // Handle files from Dropzone
  const handleFilesSelected = (files) => {
    setSelectedFiles(files);
    console.log("Files recieved:", files);
  };

  return (
    <section className="upload">
      <h1>Upload Your Photos</h1>
      <p>Start building your travel log by adding photos from your journey.</p>
      <Dropzone onFilesSelected={handleFilesSelected} />
      <button>Create Log</button>
    </section>
  );
}

export default Upload;
