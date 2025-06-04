import React from "react";
import Image from "next/image";

import { Button, H4, H5, Text } from "@/index";

const Menucard = ({
  food_name,
  food_description,
  food_image,
  food_price,
  food_alt_txt,
  locale,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-3 w-full max-w-64 relative overflow-hidden flex flex-col justify-between h-[170px]">
      <div className="flex items-start gap-2">
        {food_image && (
          <Image
            src={food_image}
            alt={food_alt_txt || food_name}
            width={44}
            height={44}
            className="w-11 h-11 rounded-full object-cover"
          />
        )}
        <div className="flex-1">
          <H4 className="font-semibold text-base leading-5">{food_name}</H4>
          <Text className="text-gray-500 !text-xs line-clamp-2 leading-4">
            {food_description || "No description"}
          </Text>
        </div>
      </div>

      <div className="flex justify-between items-end mt-auto">
        <div>
          <H5 className="text-gray-600 text-xs">Price</H5>
          <Text className="text-green-600 font-bold text-sm">
            € {food_price}
          </Text>
        </div>

        <Button className="bg-green-600 text-white py-1 px-3 rounded text-lg">
          +
        </Button>
      </div>
    </div>
  );
};

export default Menucard;
