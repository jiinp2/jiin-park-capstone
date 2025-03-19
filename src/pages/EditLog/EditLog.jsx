import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EditLog.scss";
import LogMap from "../../components/LogMap/LogMap";

const EditLog = () => {
  const { logId } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageComments, setImageComments] = useState({});

  // Fetch Images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/logs/${logId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();
        console.log("Fetched images:", data.images);
        setImages(data.images);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [logId]);

  if (loading) return <p>Loading images...</p>;

  return (
    <section className="edit-log">
      <h1>Edit</h1>
      <LogMap images={images} />
      <div className="images-container">
        {images.length ? (
          images.map((image) => (
            <img
              key={`${image.imageID || image.file_path}-${Math.random()}`}
              src={`${import.meta.env.VITE_API_URL}${image.file_path}`}
              alt="Uploaded"
            />
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
