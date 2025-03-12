import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./Dropzone.scss";

function Dropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <section>
      <div {...getRootProps()}>
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
