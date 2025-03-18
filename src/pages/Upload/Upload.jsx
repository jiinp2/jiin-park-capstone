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
    console.log("Files recieved:", files);
  };

  // Fetch metadata
  const fetchMetadata = async (imagePaths) => {
    if (!imagePaths || imagePaths.length === 0) {
      console.log("No images provided.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/metadata`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imagePaths }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch metadata");
      }

      const { metadata } = await response.json();
      console.log("Extracted metadata:", metadata);
    } catch (error) {
      console.error("Error fetching metatdata:", error.message);
    }
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!selectedFiles.length) return alert("No files selected.");
    setUploading(true);

    const formData = new FormData();
    selectedFiles.forEach((file) => formData.append("images", file));

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
      console.log("Server response:", imagePaths);

      await fetchMetadata(imagePaths);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
      setSelectedFiles([]);
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
