import { useDropzone } from "react-dropzone";
import "./Dropzone.scss";

function Dropzone({ onFilesSelected }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 8) {
        alert("You can only upload up to 8 images.");
        return;
      }
      onFilesSelected(acceptedFiles);
    },
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
    },
    multiple: true,
    maxFiles: 8,
  });

  return (
    <section className="dropzone">
      <div {...getRootProps()} className="dropzone__area">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop your photos here</p>
        ) : (
          <p>Drag and drop photos here, or click to select files</p>
        )}
      </div>
    </section>
  );
}

export default Dropzone;
