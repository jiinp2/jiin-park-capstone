import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditLog.scss";
import LogMap from "../../components/LogMap/LogMap";
import CommentSection from "../../components/CommentSection/CommentSection";

const EditLog = () => {
  const { logId } = useParams();
  const navigate = useNavigate();
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
      <LogMap images={images} />
      <div className="images-list">
        {images.length ? (
          images.map((image) => (
            <div key={image.file_path}>
              <img
                key={`${image.imageID || image.file_path}-${Math.random()}`}
                src={`${import.meta.env.VITE_API_URL}${image.file_path}`}
                alt="Uploaded"
              />
              <CommentSection
                filePath={image.file_path}
                imageComments={imageComments}
                setImageComments={setImageComments}
              />
            </div>
          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>
      <div className="edit-log__buttons">
        <button
          className="button--secondary"
          onClick={() => navigate("/upload")}
        >
          Cancel
        </button>
        <button className="button--primary">Save Log</button>
      </div>
    </section>
  );
};

export default EditLog;
