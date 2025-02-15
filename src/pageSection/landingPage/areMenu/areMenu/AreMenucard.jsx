import React from "react";
import Image from "next/image";
import { H3, Text } from "@/index";

const AreMenucard = ({ item }) => {
  return (
    <div className="flex lg:flex-row sm:flex-col flex-row lg:items-center sm:items-start items-center lg:space-x-4 space-x-0  p-4 gap-4  relative w-full  xl:max-w-[460px] ">
      <Image
        src={item.img}
        alt={item.title}
        className="lg:w-20 lg:h-20 w-16 h-16 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <H3 className="text-lg font-bold  ">{item.title} </H3>
          <span className="text-yellow-500 font-bold">{item.price}</span>
        </div>
        <Text className="text-colors-text !text-sm">
          Lorem Ipsum is simply dummy text.
        </Text>
      </div>
    </div>
  );
};

export default AreMenucard;
