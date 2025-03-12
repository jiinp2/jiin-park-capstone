import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./Dropzone.scss";

function Dropzone({ onFilesSelected }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      onFilesSelected(acceptedFiles);
    },
    [onFilesSelected]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
