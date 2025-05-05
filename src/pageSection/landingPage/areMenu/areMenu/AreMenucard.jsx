import React from "react";
import Image from "next/image";
import { H3, Text } from "@/index";

const AreMenucard = ({ item }) => {
  return (
    <div className="flex lg:flex-row sm:flex-col flex-row lg:items-center sm:items-start items-center lg:space-x-4 space-x-0  p-4 gap-4 relative w-full xl:max-w-[460px]">
      <div className="rounded-full overflow-hidden w-20 h-20">
        <Image
          src={item.food_image}
          alt={item.food_alt_txt || item.food_name}
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <H3 className="text-lg font-bold">{item.food_name}</H3>
          <span className="text-yellow-500 font-bold">€{item.food_price}</span>
        </div>
        <Text className="text-colors-text !text-sm">
          {item.food_description || "No description"}
        </Text>
      </div>
    </div>
  );
};

export default AreMenucard;
