import React from "react";

const RestaurantDetails = async ({ params }) => {
  const { rid } = await params;

  return <div>{rid}</div>;
};

export default RestaurantDetails;
