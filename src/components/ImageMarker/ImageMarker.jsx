import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "./ImageMarker.scss";

const ImageMarker = ({ latitude, longitude, imageUrl }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !latitude || !longitude || !imageUrl) return;

    const markerIcon = L.divIcon({
      html: `<div class="image-marker" style="background-image: url('${imageUrl}');"></div>`,
      className: "",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    // Add marker to the map
    const marker = L.marker([latitude, longitude], { icon: markerIcon }).addTo(
      map
    );

    return () => {
      map.removeLayer(marker);
    };
  }, [map, latitude, longitude, imageUrl]);

  return null;
};
export default ImageMarker;
