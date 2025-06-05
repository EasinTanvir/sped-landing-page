"use client";
import React, { useState } from "react";
import AllRestaurant from "./restaurantLists/AllRestaurant";
import RestaurantMapView from "./mapview/RestaurantMapView";

const AllRestaurantWithMapWrapper = ({ allRestaurants }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState();

  return (
    <div className="flex min-h-[calc(100vh-24px)]">
      <AllRestaurant
        allRestaurants={allRestaurants}
        selectedRestaurant={selectedRestaurant}
        setSelectedRestaurant={setSelectedRestaurant}
      />
      <RestaurantMapView
        allRestaurants={allRestaurants}
        selectedRestaurant={selectedRestaurant}
      />
    </div>
  );
};

export default AllRestaurantWithMapWrapper;
