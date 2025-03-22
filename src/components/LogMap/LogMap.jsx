import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "./LogMap.scss";
import ImageMarker from "../ImageMarker/ImageMarker";

const LogMap = ({ images }) => {
  const timestamps = images.map((img) => img.timestamp).filter(Boolean);
  // Filter images that have coordinates
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
    <div className="map-wrapper">
      <MapContainer
        className="map-container"
        key={mapCenter.join(",")}
        center={mapCenter}
        zoom={10}
      >
        {/* <TileLayer
          url={`https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}${
            window.devicePixelRatio > 1 ? "@2x" : ""
          }.png?access-token=LpVh1eoiT9vQkwkgzhXoniCljNNGrTvAvCxnBjPqEQnK9HXEvUtIzC2pVMJ2KnF2`}
          attribution='&copy; <a href="https://www.jawg.io/">Jawg Maps</a> &copy; OpenStreetMap contributors'
        /> */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {validLocations.map((image, index) => (
          <ImageMarker
            key={index}
            latitude={image.latitude}
            longitude={image.longitude}
            imageUrl={`${import.meta.env.VITE_API_URL}${image.file_path}`}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default LogMap;
