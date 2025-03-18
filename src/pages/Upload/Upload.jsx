import { useState } from "react";
import Dropzone from "../../components/Dropzone/Dropzone";
import "./Upload.scss";

const Upload = () => {
  // State to store files
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  // Handle files from Dropzone
  const handleFilesSelected = (files) => {
    setSelectedFiles(files);
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!selectedFiles.length) {
      alert("No files selected.");
      return;
    }

    setUploading(true);

    const formData = new FormData();

    // Converting files into an array
    const filesArray = Array.from(selectedFiles);
    filesArray.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const { imagePaths } = await response.json();
      console.log("Upload successful, stored images:", imagePaths);

      setSelectedFiles([]);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="upload">
      <h1>Upload Your Photos</h1>
      <p>Start building your travel log by adding photos from your journey.</p>
      <Dropzone onFilesSelected={handleFilesSelected} />
      <button onClick={handleUpload} disabled={uploading}>
        Create Log
      </button>
    </section>
  );
};

export default Upload;
