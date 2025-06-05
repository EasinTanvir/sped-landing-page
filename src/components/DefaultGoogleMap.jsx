"use client";
import { useEffect, useRef, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const MapComponent = ({
  center,
  zoom,
  onPositionChange,
  height,
  width,
  mapOptions,
  deliveryArea = [],
}) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const polygonRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const newMap = new google.maps.Map(mapRef.current, {
      center,
      zoom,
      mapTypeId: "roadmap",
      ...mapOptions,
    });

    const newMarker = new google.maps.Marker({
      position: center,
      map: newMap,
      icon: {
        url: "/marker.png",
        scaledSize: new google.maps.Size(55, 55),
      },
    });

    // Prevent default info windows from showing up on POI clicks
    newMap.addListener("click", function (event) {
      if (event.placeId) {
        event.stop();
      }
    });

    setMap(newMap);
    setMarker(newMarker);

    return () => {
      newMarker.setMap(null);
    };
  }, []);

  useEffect(() => {
    if (map && marker) {
      map.setCenter(center);
      marker.setPosition(center);
    }
  }, [center]);

  useEffect(() => {
    if (!map) return;

    // If delivery area exists and has points
    if (deliveryArea.length > 0) {
      console.log("Drawing polygon with:", deliveryArea);

      // Remove old polygon
      if (polygonRef.current) {
        polygonRef.current.setMap(null);
      }

      const polygon = new google.maps.Polygon({
        paths: deliveryArea,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
      });

      polygon.setMap(map);
      polygonRef.current = polygon;

      // Fit map to polygon bounds
      const bounds = new google.maps.LatLngBounds();
      deliveryArea.forEach((point) => bounds.extend(point));
      map.fitBounds(bounds);
    } else {
      // If no delivery area, just center the marker

      map.setCenter(center);
      if (marker) marker.setPosition(center);

      // Remove polygon if exists
      if (polygonRef.current) {
        polygonRef.current.setMap(null);
        polygonRef.current = null;
      }
    }
  }, [map, deliveryArea]);

  return <div ref={mapRef} style={{ height, width }} />;
};

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <div>Loading...</div>;
    case Status.FAILURE:
      return <div>Error loading Google Maps</div>;
    case Status.SUCCESS:
      return null;
  }
};

const DefaultGoogleMap = ({
  apiKey,
  initialLat = 61.9241,
  initialLng = 25.7482,
  locationExist,
  onPositionChange = () => {},
  height = "100%",
  width = "100%",
  zoom = 16,
  mapOptions = {},
  deliveryArea = [],
}) => {
  return (
    <Wrapper apiKey={apiKey} render={render}>
      <MapComponent
        center={{ lat: initialLat, lng: initialLng }}
        zoom={zoom}
        onPositionChange={onPositionChange}
        height={height}
        width={width}
        mapOptions={mapOptions}
        deliveryArea={deliveryArea}
      />
    </Wrapper>
  );
};

export default DefaultGoogleMap;
