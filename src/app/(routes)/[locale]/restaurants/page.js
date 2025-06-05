import React from "react";
import AllRestaurantWithMapWrapper from "@/pageSection/restaurants/allMapView/AllRestaurantWithMapWrapper";
import { spedApi } from "@/api";

const Restaurants = async () => {
  let allRestaurants = [];

  const { data: oneRes } = await spedApi.get(
    "/restaurants-by-slug/ravintola-sinet"
  );
  allRestaurants.push(oneRes.data.restaurant);
  return (
    <>
      <AllRestaurantWithMapWrapper allRestaurants={allRestaurants} />
    </>
  );
};

export default Restaurants;
