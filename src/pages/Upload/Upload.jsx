import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropzone from "../../components/Dropzone/Dropzone";
import "./Upload.scss";

const Upload = () => {
  // State to store files
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

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

    selectedFiles.forEach((file) => {
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

      // Extract logId from backend
      const data = await response.json();
      console.log("Full response from backend:", data);
      const { logId } = data;

      if (!logId) {
        throw new Error("logId not received from server");
      }

      console.log("Upload successful, logId:", logId);

      // Navigate to next page with logId
      navigate(`/log/${logId}/edit`);

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
      <div className="upload__submit">
        <Dropzone onFilesSelected={handleFilesSelected} />
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="button--primary"
        >
          {uploading ? "Uploading..." : "Create Log"}
        </button>
      </div>
    </section>
  );
};

export default Upload;
