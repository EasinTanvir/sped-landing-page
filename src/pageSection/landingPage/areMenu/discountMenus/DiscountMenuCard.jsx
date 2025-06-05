import React from "react";
import Image from "next/image";
import { FaTags } from "react-icons/fa";

import { Text } from "@/index";
import calculateDiscountPercentage from "@/utils/calculateDiscountPercentage";
import { Link } from "@/i18n/routing";

const DiscountMenuCard = ({
  item,
  locale,
  discountPrice,
  price,
  subcategory_name = false,
}) => {
  return (
    <Link
      href="/restaurants"
      className={`flex flex-row relative cursor-pointer gap-2 items-center border-2  ${
        discountPrice ? "border-colors-button bg-colors-button/20" : " bg-white"
      }   rounded-lg py-6 px-3 w-full sm:max-w-[500px] max-w-full`}
    >
      <div className="flex-grow flex flex-col justify-between h-full">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-headingColor font-semibold text-base">
              {item.food_name}
            </h3>
            {discountPrice && (
              <span className="inline-block font-semibold bg-colors-button text-white text-xs px-3 py-1 rounded-lg">
                {calculateDiscountPercentage(price, discountPrice)}% Off
              </span>
            )}
          </div>

          <Text className="text-inputTextColor !text-sm mt-1 line-clamp-2">
            {item.food_description || "No description"}
          </Text>
        </div>

        <div className="flex items-center mt-6 space-x-2">
          {discountPrice ? (
            <div className="flex items-center gap-2 bg-colors-button border px-3 py-1 rounded-lg">
              <FaTags className="text-white text-lg" />
              <div className="flex flex-row items-center gap-2">
                <span className="text-base text-white/80 line-through">
                  €{price}
                </span>
                <span className="text-base text-rose-600 font-semibold">
                  €{discountPrice}
                </span>
              </div>
            </div>
          ) : (
            <span className="text-base text-colors-button">€{price}</span>
          )}
        </div>
      </div>

      <div className="relative">
        {item.food_image && (
          <Image
            src={item.food_image}
            alt={item.food_alt_txt || item.food_name}
            height={110}
            width={110}
            sizes="112px"
            className="w-28 h-full sm:w-44 sm:h-32 object-cover rounded-lg"
          />
        )}
      </div>
    </Link>
  );
};

export default DiscountMenuCard;
