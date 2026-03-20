// kal CN ka exam hai, mai yha hackathon ki website fix kar rha hu :)

import { Card } from "../ui/card";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerTooltip,
  useMap,
} from "../ui/map";
import { useEffect, useRef } from "react";

const MapAutoScroller = () => {
  const { map, isLoaded } = useMap();
  const hasAutoScrolled = useRef(false);

  useEffect(() => {
    if (isLoaded && map && !hasAutoScrolled.current) {
      // Auto-scroll to college location and zoom in
      map.flyTo({
        center: [77.44597903398297, 28.634289092427416],
        zoom: 14,
        duration: 2000,
        essential: true,
      });
    }
  }, [isLoaded, map]);

  return null;
};

export const VenueMap = () => {
  const handleMarkerClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=28.634289092427416,77.44597903398297",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <Card className="h-[320px] p-0" id="venue-map">
      <Map center={[28.634289092427416, 77.44597903398297]} zoom={14}>
        <MapAutoScroller />
        <MapMarker
          longitude={77.44597903398297}
          latitude={28.634289092427416}
          onClick={handleMarkerClick}
        >
          <MarkerContent className="cursor-pointer" />
          <MarkerTooltip>Click to open in Google Maps</MarkerTooltip>
        </MapMarker>
        <MapControls />
      </Map>
    </Card>
  );
};
