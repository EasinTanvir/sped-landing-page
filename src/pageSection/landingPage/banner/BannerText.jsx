"use client";
import React from "react";

import { H1, Icon, Text } from "@/index";
import { IoCheckmark } from "@/utils/icons";
import BannerButton from "./BannerButton";
import Motion from "@/components/ui/Motion";
import { useLocale } from "next-intl";

const BannerText = ({ bannerData }) => {
  const locale = useLocale();

  const title =
    bannerData?.title?.[locale] ||
    "Delivering Freshness Straight from the Store to Your Door";

  const description =
    bannerData?.description?.[locale] ||
    "Experience fast, fresh, and reliable delivery from your favorite local shops and restaurants.";

  const items =
    Array.isArray(bannerData?.items) && bannerData.items.length > 0
      ? bannerData.items
      : [
          { en: "Fast Delivery", fi: "Nopea toimitus" },
          { en: "Fresh Products", fi: "Tuoreet tuotteet" },
        ];

  const buttonOneText = bannerData?.buttonOneText?.[locale] || "Order";
  const buttonTwoText = bannerData?.buttonTwoText?.[locale] || "View";

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
        <H1 className="lg:text-5xl sm:text-4xl text-2xl font-bold italic sm:!leading-[70px] !leading-[50px]">
          {title}
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
        <Text className="text-colors-text">{description}</Text>
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
            {items.map((text, i) => (
              <li className="flex items-center gap-2" key={i}>
                <span className="text-colors-text md:text-base text-xs">
                  {text?.[locale] || "—"}
                </span>
                <span className="md:w-6 md:h-6 w-5 h-5 rounded-full bg-colors-button flex-center">
                  <Icon size={16} icon={IoCheckmark} className="text-white" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Motion>

      <BannerButton
        buttonOneText={buttonOneText}
        buttonTwoText={buttonTwoText}
      />
    </div>
  );
};

export default BannerText;
