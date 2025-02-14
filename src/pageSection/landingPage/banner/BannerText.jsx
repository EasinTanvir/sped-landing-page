import React from "react";

import { lobster } from "@/app/layout";
import { Button, H1, Icon, Text } from "@/index";
import { IoCheckmark } from "@/utils/icons";
import { bannerFoodItems } from "@/utils";

const BannerText = () => {
  return (
    <div className="flex-1  lg:space-y-10 space-y-7 ">
      <H1
        className={` lg:text-6xl sm:text-5xl text-4xl font-bold italic  sm:!leading-[80px] !leading-[50px] ${lobster.className} `}
      >
        Hot or Cold, We <span className="text-colors-button">Deliver</span> It{" "}
        <span className="text-colors-button">Freshly</span> from the Shop to
        Your House
      </H1>

      <Text className="text-colors-text">
        We are the best food delivery partner for your shops and restaurants,
        deliver safely and on time
      </Text>

      <div className="2xl:w-[80%] ">
        <ul className="flex flex-wrap md:gap-7 gap-4">
          {bannerFoodItems.map((text, i) => (
            <li className="flex items-center gap-2" key={i}>
              <span className="text-colors-text md:text-base text-xs">
                {text}
              </span>
              <span className="md:w-6 md:h-6 w-5 h-5 rounded-full bg-colors-button flex-center ">
                <Icon size={16} icon={IoCheckmark} className="text-white" />
              </span>
            </li>
          ))}
          <li></li>
        </ul>
      </div>

      <div className="space-x-5">
        <Button className="border-none py-2.5 px-7 text-white rounded-md">
          Order Now
        </Button>
        <Button className=" py-2.5 px-7 !text-colors-button rounded-md bg-transparent border !border-colors-button ">
          View More
        </Button>
      </div>
    </div>
  );
};

export default BannerText;
