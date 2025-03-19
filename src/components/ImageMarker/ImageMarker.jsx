import { useEffect } from "react";
import L from "leaflet";
import "./ImageMarker.scss";

const ImageMarker = ({ map, latitude, longitude, imageUrl }) => {
  useEffect(() => {
    if (!map || !latitude || !longitude || !imageUrl) return;

    const markerIcon = L.divIcon({
      html: `<div style="background-image: url('${imageUrl}');"></div>`,
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
