import Image from "next/image";
import React from "react";

import { Button, H3, H4, H5, Text } from "@/index";

const Menucard = ({ name, description, image, price }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4  w-full  relative overflow-hidden">
      <div className="flex gap-2">
        <Image
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mb-2"
        />
        <div>
          <H4 className="font-semibold text-lg">{name}</H4>
          <Text className="text-gray-500 !text-sm">{description}</Text>
        </div>
      </div>
      <H5 className="text-gray-600 mt-5">Regular Price</H5>
      <Text className="text-green-600 font-bold !text-xs">{price}</Text>
      <Button className="absolute bottom-0 right-0 bg-green-600 text-white py-2 px-4 rounded-tl-[10px] rounded-br-[10px] text-xl">
        +
      </Button>
    </div>
  );
};

export default Menucard;
