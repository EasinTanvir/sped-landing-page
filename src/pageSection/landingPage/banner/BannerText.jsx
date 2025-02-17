import React from "react";

import { lobster } from "@/app/(routes)/[locale]/layout";
import { Button, H1, Icon, Text } from "@/index";
import { IoCheckmark } from "@/utils/icons";
import { bannerFoodItems } from "@/utils";
import BannerButton from "./BannerButton";
import Motion from "@/components/ui/Motion";

const BannerText = () => {
  return (
    <div className="flex-1 lg:space-y-10 space-y-7">
      <Motion
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        <H1
          className={`lg:text-6xl sm:text-5xl text-4xl font-bold italic sm:!leading-[80px] !leading-[50px] ${lobster.className}`}
        >
          Hot or Cold, We <span className="text-colors-button">Deliver</span> It{" "}
          <span className="text-colors-button">Freshly</span> from the Shop to
          Your House
        </H1>
      </Motion>

      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.2 },
        }}
      >
        <Text className="text-colors-text">
          We are the best food delivery partner for your shops and restaurants,
          deliver safely and on time
        </Text>
      </Motion>

      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.4 },
        }}
      >
        <div className="2xl:w-[80%]">
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
          </ul>
        </div>
      </Motion>

      <BannerButton />
    </div>
  );
};

export default BannerText;
