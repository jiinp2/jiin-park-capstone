import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "./LogMap.scss";

const LogMap = ({ images }) => {
  // filter images that have coordinates
  const validLocations = images.filter(
    (image) => image.latitude && image.longitude
  );

  // Calculate map center based on average of locations
  const mapCenter =
    validLocations.length > 0
      ? [
          validLocations.reduce((sum, img) => sum + img.latitude, 0) /
            validLocations.length,
          validLocations.reduce((sum, img) => sum + img.longitude, 0) /
            validLocations.length,
        ]
      : images.length > 0 && images[0].latitude && images[0].longitude
      ? [images[0].latitude, images[0].longitude]
      : [0, 0];

  return (
    <div>
      <h2>Map</h2>
      <MapContainer
        key={mapCenter.join(",")}
        center={mapCenter}
        zoom={10}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {validLocations.map((image, index) => (
          <Marker key={index} position={[image.latitude, image.longitude]}>
            <Popup>
              <img
                src={`${import.meta.env.VITE_API_URL}${image.file_path}`}
                alt="Uploaded"
                width="100"
              />
              <p>Timestamp: {image.timestamp}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LogMap;
