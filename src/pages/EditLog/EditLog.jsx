import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EditLog.scss";

const EditLog = () => {
  const { logId } = useParams();
  const [images, setImages] = useState([]);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    console.log("Navigated to edit log with ID:", logId);
    // TODO: Fetch imahes and exisiting log data here
  }, [logId]);

  return (
    <section>
      <h1>Edit Your Travel Log</h1>
      <p>Log ID: {logId}</p>
      <div>
        <h2>Map Placeholder</h2>
        {/* TODO: Add Leaflet map component here */}
      </div>
      <div>
        <h2>Uploaded Images</h2>
        {images.length ? (
          images.map((image) => (
            <img key={image.imageID} src={image.filePath} alt="Uploaded" />
          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>
      <div>
        <h2>Notes</h2>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add your notes here..."
        />
      </div>
      <button>Save Log</button>
    </section>
  );
};

export default EditLog;
