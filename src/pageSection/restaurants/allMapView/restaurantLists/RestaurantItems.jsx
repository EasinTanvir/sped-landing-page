import React from "react";
import { H2, Text } from "@/index";
import { RiArrowRightWideFill } from "react-icons/ri";

const RestaurantItems = ({
  restaurant_id,
  restaurant_name,
  restaurant_slug,
  restaurant_latitute,
  restaurant_longitude,
  restaurant_address,
  setSelectedRestaurant,
  selectedRestaurant,
}) => {
  return (
    <div
      onClick={() =>
        setSelectedRestaurant({
          restaurant_id,
          restaurant_name,
          restaurant_slug,
          restaurant_latitute,
          restaurant_longitude,
        })
      }
      className={`flex justify-between items-center hover:bg-gray-100 py-2.5 px-2 rounded-lg cursor-pointer ${
        selectedRestaurant?.restaurant_id === restaurant_id ? "bg-gray-100" : ""
      }`}
    >
      <div>
        <H2 className="md:text-xl font-semibold">{restaurant_name}</H2>
        <Text className="!text-base font-normal">{restaurant_address}</Text>
        <div className="text-sm">
          <span>$2.99</span>
          <span>Schedule for later</span>
        </div>
      </div>
      <RiArrowRightWideFill size={20} />
    </div>
  );
};

export default RestaurantItems;
