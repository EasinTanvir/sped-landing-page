import React from "react";
import DefaultGoogleMap from "@/components/DefaultGoogleMap";

const RestaurantMapView = ({ selectedRestaurant }) => {
  console.log("selectedRestaurant", selectedRestaurant);

  if (!process.env.NEXT_PUBLIC_LOCATION_API_KEY) return;
  return (
    <div className="flex-1">
      <DefaultGoogleMap
        apiKey={process.env.NEXT_PUBLIC_LOCATION_API_KEY}
        initialLat={
          selectedRestaurant?.restaurant_latitute &&
          Number(selectedRestaurant?.restaurant_latitute)
        }
        initialLng={
          selectedRestaurant?.restaurant_latitute &&
          Number(selectedRestaurant?.restaurant_longitude)
        }
        zoom={13}
        onPositionChange={() => {}}
        locationExist={
          selectedRestaurant?.restaurant_latitute &&
          selectedRestaurant?.restaurant_latitute
        }
      />
    </div>
  );
};

export default RestaurantMapView;
