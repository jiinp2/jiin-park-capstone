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

  // Hanlde uploading files to Supabase
  const handleUpload = async () => {
    if (!selectedFiles.length) return alert("No files selected.");
    setUploading(true);

    // Store file urls
    const uploadedFiles = [];

    for (const file of selectedFiles) {
      // Uploading file(s) to Supabase
      const { data, error } = await supabase.storage
        .from("uploads")
        .upload(`images/{file.name}`, file);

      if (error) {
        console.error("Upload error:", error);
      } else {
        // Get public URL of uploaded file(s)
        const imageUrl = supabase.storage
          .from("uploads")
          .getPublicUrl(`images/${file.name}`).data.publicUrl;
        uploadedFiles.push(imageUrl);
      }
    }

    setUploading(false);
    setSelectedFiles([]);

    // Fetch backend API to extract metadata
    fetchMetadata(uploadedFiles);
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
