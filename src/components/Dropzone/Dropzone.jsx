import { useDropzone } from "react-dropzone";
import "./Dropzone.scss";

function Dropzone({ onFilesSelected }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => onFilesSelected(acceptedFiles),
    accept: {
      "image/*": [],
      "image/heif": [],
      "image/heic": [],
    },
    multiple: true,
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
