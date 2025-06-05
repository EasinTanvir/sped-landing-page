import React from "react";
import { spedApi } from "@/api";
import RestaurantBanner from "@/pageSection/restaurantDetails/RestaurantBanner";

const RestaurantDetails = async ({ params }) => {
  const { rid } = await params;
  const { data: oneRes } = await spedApi.get(`/restaurants-by-slug/${rid}`);

  const restaurant = oneRes.data.restaurant;

  return (
    <div>
      <RestaurantBanner
        {...restaurant}
        isClose
        closeMessage={
          "The store is closed now, but you can still schedule an order for later"
        }
        openingTime={"Opens tomorrow at 11:00"}
        isRating
        rating="9.2"
        noRatingMsg="No Rating"
        btnMsgOne="Today at 11:45"
        btnMsgTwo="Order Together"
        btnText="More"
      />
    </div>
  );
};

export default RestaurantDetails;
