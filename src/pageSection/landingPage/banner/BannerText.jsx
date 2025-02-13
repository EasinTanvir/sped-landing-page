import React from "react";

import { lobster } from "@/app/layout";
import { Button, H1, Text } from "@/index";

const BannerText = () => {
  return (
    <div className="flex-1  space-y-10 ">
      <H1
        className={` lg:text-5xl text-2xl font-bold italic leading-10 ${lobster.className} `}
      >
        Hot or Cold, We <span className="text-colors-button">Deliver</span> It{" "}
        <span className="text-colors-button">Freshly</span> from the Shop to
        Your House
      </H1>

      <Text className="text-colors-text">
        We are the best food delivery partner for your shops and restaurants,
        deliver safely and on time
      </Text>

      <div className="space-x-5">
        <Button className="border-none py-4 px-7 text-white rounded-md">
          Order Now
        </Button>
        <Button className=" py-4 px-7 !text-colors-button rounded-md bg-transparent border !border-colors-button ">
          View More
        </Button>
      </div>
    </div>
  );
};

export default BannerText;
