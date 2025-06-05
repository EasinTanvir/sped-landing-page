"use client";

import React, { useState } from "react";

import { H1 } from "@/index";
import SwtichTabs from "@/components/SwtichTabs";
import RestaurantItems from "./RestaurantItems";
import { useGlobalContext } from "@/contextStore/GlobalContext";

const AllRestaurant = ({
  allRestaurants,
  selectedRestaurant,
  setSelectedRestaurant,
}) => {
  const { switcher, setSwitcher } = useGlobalContext();

  return (
    <div className="w-[450px] border p-4">
      <H1
        className={`lg:text-3xl sm:text-2xl text-xl font-bold italic  text-center mb-5`}
      >
        Select a location
      </H1>

      <SwtichTabs
        activeTab={switcher}
        slugOne="delivery"
        slugTwo="pickup"
        btnOneText="Delivery"
        btnTwoText="Pickup"
        setSwitcher={setSwitcher}
      />

      <div className=" space-y-3 mt-10">
        {allRestaurants.map((item) => (
          <RestaurantItems
            key={item.restaurant_id}
            {...item}
            setSelectedRestaurant={setSelectedRestaurant}
            selectedRestaurant={selectedRestaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default AllRestaurant;
